import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {hairFiles} from '../src/hair-loading.mjs';
import {createRequire} from 'node:module';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

// Render the real scene without a browser. Catch hidden, memory-heavy variants
// accidentally being mounted and fetched again on phones.
const bundle=await build({stdin:{contents:"export {App} from './src/App';export {Component as FigureHair,Component6 as PortraitHair} from './src/Art';",resolveDir:process.cwd()},bundle:true,write:false,
  platform:'node',format:'cjs',jsx:'automatic',external:['react','react-dom']});
const mod={exports:{}};
new Function('require','module','exports',bundle.outputFiles[0].text)(createRequire(import.meta.url),mod,mod.exports);
globalThis.innerWidth=390;
globalThis.innerHeight=844;
const html=renderToStaticMarkup(React.createElement(mod.exports.App));

test('initial scene mounts only the selected portrait and figure hairstyle',()=>{
  assert.equal((html.match(/class="portrait-hair /g)||[]).length,1);
  assert.equal((html.match(/class="figure-hair /g)||[]).length,1);
});
test('initial scene does not mount unequipped full-size clothing or alternate eyes',()=>{
  assert.equal((html.match(/class="figure-clothing /g)||[]).length,3);
  assert.equal((html.match(/class="portrait-eyes /g)||[]).length,0);
});

test('phone scene uses layout zoom instead of a giant transformed backing layer',()=>{
  const style=html.match(/class="stage" style="([^"]+)"/)[1];
  assert.ok(!style.includes('transform:'), 'outer scale promotes the full 2965px painting to a compositing surface');
  assert.ok(style.includes('zoom:'));
});

// Preloading must cover the actual rendered layers, including tied-hair details.
test('all six hair choices prepare every image used by both renderers',()=>{
  for(const hairColor of ['w','p','b'])for(const hairstyle of [1,2]){
    const markup=renderToStaticMarkup(React.createElement(mod.exports.PortraitHair,{property1:`Hair ${hairColor}${hairstyle}`}))+
      (hairColor==='b'?`<img src="./assets/figure-hair-black-${hairstyle===1?'loose':'tied'}.png">`:
        renderToStaticMarkup(React.createElement(mod.exports.FigureHair,{property1:`Hair w${hairstyle}`})));
    const prepared=new Set(hairFiles({hairColor,hairstyle}));
    for(const [,src] of markup.matchAll(/<img[^>]*src="([^"]+)"/g))assert.ok(prepared.has(src),`missing ${src}`);
  }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {waitForArtwork} from '../src/loading.mjs';

// Image is a browser boundary: drive real success/error/no-response events.
const createImage=()=>({set src(url){
  if(url==='ok.png') queueMicrotask(()=>this.onload?.());
  if(url==='missing.png') queueMicrotask(()=>this.onerror?.());
}});

test('startup reports missing artwork instead of rejecting the whole startup task',async()=>{
  const progress=[];
  const failed=await waitForArtwork(['ok.png','missing.png'],{createImage,onProgress:p=>progress.push(p)});
  assert.deepEqual(failed,['missing.png']);
  assert.equal(progress.at(-1),100);
});
test('an image that never responds cannot trap the user in an endless loading screen',async()=>{
  const failed=await waitForArtwork(['ok.png','stalled.png'],{createImage,timeoutMs:15});
  assert.deepEqual(failed,['stalled.png']);
});

test('hair preparation waits for decoding and reports corrupt images',async()=>{
  let finishDecode,done=false;
  const pending=waitForArtwork(['hair.png'],{decode:true,createImage:()=>({
    set src(url){queueMicrotask(()=>this.onload());},
    decode(){return new Promise(resolve=>{finishDecode=resolve;});},
  })}).then(failed=>{done=true;return failed;});
  await new Promise(resolve=>setImmediate(resolve));
  assert.equal(done,false,'network completion alone must not reveal undecoded artwork');
  finishDecode();assert.deepEqual(await pending,[]);
  assert.deepEqual(await waitForArtwork(['corrupt.png'],{decode:true,createImage:()=>({
    set src(url){queueMicrotask(()=>this.onload());},decode(){return Promise.reject(new Error('corrupt'));},
  })}),['corrupt.png']);
});

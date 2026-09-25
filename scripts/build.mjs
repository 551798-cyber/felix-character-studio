import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
await build({entryPoints:['src/main.tsx'],bundle:true,minify:true,format:'esm',target:['safari13','chrome80'],outfile:'dist/app.js',jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'}});
await writeFile('dist/app.css',(await readFile('src/art.css','utf8'))+'\n'+(await readFile('src/app.css','utf8')));
const output=await readFile('dist/app.js','utf8');
const used=[...new Set([...(output.match(/[a-f0-9]{5}\.png/g)||[]),'bokkari.png','figure-hair-black-loose.png','figure-hair-black-tied.png'])].map(file=>'assets/'+file).sort();
await writeFile('dist/preload.json',JSON.stringify(used));
console.log('Built Felix Character to dist/');

import test from 'node:test';
import assert from 'node:assert/strict';
import {createHairSelection} from '../src/hair-loading.mjs';

function setup(){
  let visible={hairstyle:1,hairColor:'w'},error=false,pending=false;
  const loads=[];
  const selection=createHairSelection({initial:visible,
    load:files=>new Promise(resolve=>loads.push({files,resolve})),
    commit:value=>{visible=value;},onPending:value=>{pending=value;},onError:()=>{error=true;}});
  return {selection,loads,get visible(){return visible;},get pending(){return pending;},get error(){return error;}};
}
test('both hairstyles stay unchanged until all requested artwork is ready',async()=>{
  const s=setup();const request=s.selection.select('hairColor','b');
  assert.deepEqual(s.visible,{hairstyle:1,hairColor:'w'});
  assert.equal(s.pending,true);
  assert.ok(s.loads[0].files.some(file=>file.endsWith('figure-hair-black-loose.png')));
  s.loads[0].resolve([]);await request;
  assert.deepEqual(s.visible,{hairstyle:1,hairColor:'b'});assert.equal(s.pending,false);
});
test('rapid colour and hairstyle choices keep the newest complete pair',async()=>{
  const s=setup();const first=s.selection.select('hairColor','b');
  const second=s.selection.select('hairstyle',2);
  s.loads[1].resolve([]);await second;
  s.loads[0].resolve([]);await first;
  assert.deepEqual(s.visible,{hairstyle:2,hairColor:'b'});
});
test('failed artwork keeps the previous look and can be retried',async()=>{
  const s=setup();const request=s.selection.select('hairstyle',2);
  s.loads[0].resolve(['missing.png']);await request;
  assert.deepEqual(s.visible,{hairstyle:1,hairColor:'w'});assert.equal(s.error,true);assert.equal(s.pending,false);
  const retry=s.selection.select('hairstyle',2);s.loads[1].resolve([]);await retry;
  assert.deepEqual(s.visible,{hairstyle:2,hairColor:'w'});
});
test('unmount cancels pending appearance changes',async()=>{
  const s=setup();const request=s.selection.select('hairstyle',2);s.selection.cancel();
  s.loads[0].resolve([]);await request;assert.deepEqual(s.visible,{hairstyle:1,hairColor:'w'});
});

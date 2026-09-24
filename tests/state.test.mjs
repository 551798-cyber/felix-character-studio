import test from 'node:test';
import assert from 'node:assert/strict';
import { initialState, characterReducer, inventory } from '../src/state.mjs';

test('changing eyes preserves the selected hairstyle, hair colour and equipment', () => {
  let s = characterReducer(initialState, {type:'hairColor',value:'p'});
  s = characterReducer(s, {type:'hairstyle',value:2});
  s = characterReducer(s, {type:'equip',value:'vest'});
  s = characterReducer(s, {type:'eyeColor',value:'red'});
  assert.equal(s.eyeColor, 'red');
  assert.equal(s.hairColor, 'p');
  assert.equal(s.hairstyle, 2);
  assert.equal(s.top, 'vest');
});

test('replacing and removing clothing keeps each item in exactly one location', () => {
  let s = characterReducer(initialState, {type:'equip',value:'vest'});
  assert.equal(s.top, 'vest');
  assert.ok(inventory(s).includes('shirt'));
  assert.ok(!inventory(s).includes('vest'));
  s = characterReducer(s, {type:'equip',value:'vest'});
  assert.equal(s.top, null);
  assert.ok(inventory(s).includes('vest'));
  s = characterReducer(s, {type:'equip',value:'pants-light'});
  s = characterReducer(s, {type:'equip',value:'swords'});
  assert.equal(s.pants, 'pants-light');
  assert.equal(s.swords, true);
  assert.ok(inventory(s).includes('pants-dark'));
  assert.equal(new Set(inventory(s)).size, inventory(s).length);
});

test('switching hair from the figure preserves all equipped items and eye colour', () => {
  const s={...initialState,top:'vest',pants:'pants-light',swords:true,eyeColor:'black'};
  assert.deepEqual(characterReducer(s,{type:'hairstyle',value:2}),{...s,hairstyle:2});
});

test('gloves move between the character and backpack without changing other equipment',()=>{
  assert.equal(initialState.gloves,true);
  assert.ok(!inventory(initialState).includes('gloves'));
  const removed=characterReducer(initialState,{type:'equip',value:'gloves'});
  assert.deepEqual(removed,{...initialState,gloves:false});
  assert.equal(inventory(removed).filter(item=>item==='gloves').length,1);
  const reequipped=characterReducer(removed,{type:'equip',value:'gloves'});
  assert.deepEqual(reequipped,initialState);
  assert.ok(!inventory(reequipped).includes('gloves'));
});

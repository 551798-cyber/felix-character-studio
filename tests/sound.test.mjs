import test from 'node:test';
import assert from 'node:assert/strict';
import {attachMusic,setMusicActive,unlockSound,playSound} from '../src/sound.mjs';

test('music can be muted without silencing UI effects, and effects never alter music volume',async()=>{
  let starts=0,volume=1;
  const volumeWrites=[],gains=[];
  const parameter=()=>({value:1,setValueAtTime(){},exponentialRampToValueAtTime(){}});
  class AudioContext {
    state='suspended';currentTime=10;destination={};
    async resume(){this.state='running';}
    createGain(){const node={gain:parameter(),connect(){},disconnect(){}};gains.push(node);return node;}
    createOscillator(){return {frequency:parameter(),connect(){},disconnect(){},start(){starts++;},stop(){}};}
  }
  const previousWindow=globalThis.window;
  globalThis.window={AudioContext};
  const audio={muted:false,paused:false,pause(){this.paused=true;},get volume(){return volume;},set volume(v){volume=v;volumeWrites.push(v);}};
  const cleanup=attachMusic(audio);
  try{
    await playSound('hover');assert.equal(starts,0,'no effect before a user gesture');
    await unlockSound();
    setMusicActive(true);
    volumeWrites.length=0;
    await playSound('click');await playSound('hover');
    assert.equal(starts,2);
    assert.equal(audio.volume,.04);
    assert.deepEqual(volumeWrites,[],'effects must not duck or fade the background music');
    setMusicActive(false);
    assert.equal(audio.muted,true);assert.equal(audio.paused,true);
    volumeWrites.length=0;
    await playSound('equip');await playSound('click');
    assert.equal(starts,4,'effects must still play with music off');
    assert.equal(gains[0].gain.value,1,'music mute must not mute the effects output');
    assert.deepEqual(volumeWrites,[]);
  }finally{cleanup();globalThis.window=previousWindow;}
});

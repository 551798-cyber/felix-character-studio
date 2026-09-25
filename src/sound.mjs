let context,master,music;
let lastHover=0;
const MUSIC_VOLUME=.04;

export function attachMusic(element){
  music=element;music.volume=MUSIC_VOLUME;music.muted=true;
  return()=>{setMusicActive(false);music=undefined;};
}

export function setMusicActive(enabled){
  if(!music)return;
  music.volume=MUSIC_VOLUME;music.muted=!enabled;
  if(!enabled)music.pause();
}

export async function unlockSound(){
  // iOS otherwise switches Web Audio back to an ambient (silent-switch-muted)
  // session when the HTML music player pauses. Effects need their own playback
  // intent, regardless of whether background music is playing (WebKit #251532).
  try {
    const session=window.navigator?.audioSession;
    if(session&&session.type!=='playback')session.type='playback';
  } catch {/* Browsers without Audio Session support still use Web Audio. */}
  if(!context){
    context=new (window.AudioContext||window.webkitAudioContext)();
    master=context.createGain();master.gain.value=1;master.connect(context.destination);
  }
  if(context.state!=='running')await context.resume();
}

export async function playSound(kind){
  // Effects unlock on a user gesture and remain independent of the music button.
  if(!context)return;
  try{await unlockSound();}catch{return;}
  if(context.state!=='running')return;
  const now=context.currentTime;
  if(kind==='hover'&&now-lastHover<0.085)return;
  if(kind==='hover')lastHover=now;
  const gain=context.createGain();gain.connect(master);
  const osc=context.createOscillator();osc.connect(gain);
  const hover=kind==='hover', equip=kind==='equip';
  osc.type='sine';
  osc.frequency.setValueAtTime(hover?1050:equip?340:740,now);
  osc.frequency.exponentialRampToValueAtTime(hover?1250:equip?180:980,now+.055);
  gain.gain.setValueAtTime(0.0001,now);
  gain.gain.exponentialRampToValueAtTime(hover?0.012:equip?0.045:0.025,now+.008);
  gain.gain.exponentialRampToValueAtTime(0.0001,now+(equip?.16:.075));
  osc.onended=()=>{osc.disconnect();gain.disconnect();};
  osc.start(now);osc.stop(now+.18);
}

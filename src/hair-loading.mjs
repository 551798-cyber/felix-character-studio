import {assetPathPrefix} from './assets.mjs';
import {waitForArtwork} from './loading.mjs';

export function hairFiles({hairstyle,hairColor}) {
  const portrait={w:['5c903.png','c12d3.png'],p:['79db2.png','66bb5.png'],b:['aa101.png','27d37.png']}[hairColor][hairstyle-1];
  const figure=hairColor==='b'
    ? `figure-hair-black-${hairstyle===1?'loose':'tied'}.png`
    : hairstyle===1?'410c4.png':'0cc4a.png';
  return [portrait,figure,...(hairstyle===2?['0e251.png']:[])].map(file=>`${assetPathPrefix}/${file}`);
}

// Commit the portrait and figure together only after their images decode.
// Keep the current look on failure; ignore obsolete requests after rapid taps.
export function createHairSelection({initial,commit,onPending,onError,
  load=files=>waitForArtwork(files,{decode:true})}) {
  let shown={hairstyle:initial.hairstyle,hairColor:initial.hairColor};
  let requested=shown,revision=0;
  return {
    async select(type,value) {
      requested={...requested,[type]:value};
      const next=requested,request=++revision;
      onPending(true);
      let failed;
      try {failed=await load(hairFiles(next));} catch {failed=['unavailable'];}
      if(request!==revision)return;
      if(failed.length){requested=shown;onError();}
      else {shown=next;commit(next);}
      onPending(false);
    },
    cancel(){revision++;},
  };
}

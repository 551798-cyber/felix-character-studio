export async function waitForArtwork(files, {timeoutMs=15000,onProgress=()=>{},createImage=()=>new Image(),decode=false}={}) {
  const unique=[...new Set(files)];
  let completed=0;
  const results=await Promise.all(unique.map(file=>new Promise(resolve=>{
    const image=createImage();
    let settled=false;
    const finish=ok=>{
      if(settled)return;
      settled=true;
      clearTimeout(timer);
      image.onload=image.onerror=null;
      onProgress(Math.round(++completed/unique.length*100));
      resolve(ok?null:file);
    };
    const timer=setTimeout(()=>finish(false),timeoutMs);
    image.onload=async()=>{
      try {if(decode&&image.decode)await image.decode();finish(true);}
      catch {finish(false);}
    };
    image.onerror=()=>finish(false);
    image.src=file;
  })));
  return results.filter(Boolean);
}

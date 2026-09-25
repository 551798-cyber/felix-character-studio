import React, {useEffect,useReducer,useRef,useState} from 'react';
import {Component14 as Clothing,Component as FigureHair,Component1 as ItemArt,Component3 as HairSwatch,Component4 as EyeSwatch,Component5 as HairstyleArt,Component6 as PortraitHair,Component9 as PortraitEyes} from './Art';
import {initialState,characterReducer} from './state.mjs';
import {unlockSound,playSound,attachMusic,setMusicActive} from './sound.mjs';
import {waitForArtwork} from './loading.mjs';
import {assetPathPrefix} from './assets.mjs';
import {createHairSelection} from './hair-loading.mjs';
import musicLabels from './music-labels.json';

const rect=(x:number,y:number,w:number,h:number)=>({left:x,top:y,width:w,height:h});
// Grid lines and item targets share one geometry, including the panel border/header.
const backpack={x:2216,y:247,width:542,height:1330,border:3,header:84,columns:3,rows:[220,230,300,490]};
function backpackItemRect(column:number,row:number):[number,number,number,number]{
  const width=(backpack.width-2*backpack.border)/backpack.columns,padding=12;
  return [backpack.x+backpack.border+column*width+padding,
    backpack.y+backpack.border+backpack.header+backpack.rows.slice(0,row).reduce((sum,h)=>sum+h,0)+padding,
    width-2*padding,backpack.rows[row]-2*padding];
}
const equipment:any={
  shirt:{label:'Blue shirt',art:'Кофта 1',cell:[0,0],size:[141,163]},
  vest:{label:'White vest',art:'Жилет 1',cell:[1,0],size:[141,163]},
  'pants-light':{label:'Light jeans',art:'Джинсы 1',cell:[1,2],size:[139,221]},
  'pants-dark':{label:'Dark cargo trousers',art:'Хаки 1',cell:[2,2],size:[138,221]},
  swords:{label:'Twin katanas',art:'Катаны 1',cell:[0,1],size:[147,207]},
  gloves:{label:'Fingerless gloves',cell:[1,1],size:[89,107]},
};
const hairChoices=[['w','Blond','Frame 2'],['p','Pink','Frame 4'],['b','Black','Frame 5']];
const eyeChoices=[['blue','Blue','Frame 2'],['red','Red','Frame 3'],['black','Black','Frame 4']];

function RawArt({file,x,y,w,h,style={},className=''}:any){
  return <div className={'raw-art '+className} style={{...rect(x,y,w,h),...style}} aria-hidden="true"><div style={{width:h,height:w,transform:'rotate(90deg) scaleY(-1)'}}><img src={assetPathPrefix+'/'+file} alt="" draggable="false"/></div></div>;
}
function Layer({file,x,y,w,h,className='',style={}}:any){return <img aria-hidden="true" alt="" draggable="false" src={assetPathPrefix+'/'+file} className={'art-layer '+className} style={{...rect(x,y,w,h),...style}}/>;}

// Source PNGs use the same transposed axes as the original Figma painting.
// Compose masks in source coordinates, then apply the transform once.
function MaskGroup({x,y,w,h,mask,layers}:any){return <div className="source-group" style={rect(x,y,w,h)} aria-hidden="true"><div style={{width:h,height:w,WebkitMaskImage:`url(${assetPathPrefix}/${mask})`,WebkitMaskSize:'100% 100%',WebkitMaskRepeat:'no-repeat',maskImage:`url(${assetPathPrefix}/${mask})`,maskSize:'100% 100%',maskRepeat:'no-repeat',transform:'rotate(90deg) scaleY(-1)'}}>{layers.map((l:any,i:number)=><img key={i} alt="" src={assetPathPrefix+'/'+l[0]} style={{position:'absolute',...rect(l[2],l[1],l[4],l[3])}}/>)}</div></div>;}

function Cursor(){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const move=(e:PointerEvent)=>{const n=ref.current;if(!n||e.pointerType==='touch')return;n.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;n.classList.add('visible');n.classList.toggle('active',!!(e.target as Element)?.closest('button:not([aria-disabled="true"])'));};
    const down=()=>ref.current?.classList.add('pressed');const up=()=>ref.current?.classList.remove('pressed');const leave=()=>ref.current?.classList.remove('visible');
    window.addEventListener('pointermove',move);window.addEventListener('pointerdown',down);window.addEventListener('pointerup',up);document.addEventListener('pointerleave',leave);
    return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerdown',down);window.removeEventListener('pointerup',up);document.removeEventListener('pointerleave',leave);};
  },[]);
  return <div ref={ref} className="game-cursor" aria-hidden="true"><i/><b/></div>;
}

function Particles(){
  const video=useRef<HTMLVideoElement>(null);
  useEffect(()=>{
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const sync=()=>{
      const node=video.current;if(!node)return;
      if(motion.matches||document.hidden){node.pause();return;}
      void node.play().catch(()=>{/* The poster remains visible if playback is unavailable. */});
    };
    sync();
    if(motion.addEventListener)motion.addEventListener('change',sync);else motion.addListener(sync);
    document.addEventListener('visibilitychange',sync);
    return()=>{if(motion.removeEventListener)motion.removeEventListener('change',sync);else motion.removeListener(sync);document.removeEventListener('visibilitychange',sync);};
  },[]);
  return <video ref={video} className="particles" src="./assets/particles.mp4" poster="./assets/particles-poster.jpg" muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}/>;
}

export function App(){
  const [state,dispatch]=useReducer(characterReducer,initialState);
  const [sound,setSound]=useState(false);
  const [soundStarting,setSoundStarting]=useState(false);
  const music=useRef<HTMLAudioElement>(null);
  const soundRequested=useRef(false);
  const soundRequest=useRef(0);
  const [ready,setReady]=useState(false);
  const [loadingError,setLoadingError]=useState(false);
  const [progress,setProgress]=useState(0);
  const [scale,setScale]=useState(()=>Math.min(innerWidth/2965,innerHeight/1668));
  const [announcement,setAnnouncement]=useState('');
  const [mascotActive,setMascotActive]=useState(false);
  const [tooltip,setTooltip]=useState<any>(null);
  const [hairPending,setHairPending]=useState(false);
  const [hairError,setHairError]=useState(false);
  const hairSelection=useRef<any>(null);
  if(!hairSelection.current)hairSelection.current=createHairSelection({
    initial:initialState,
    commit:(value:any)=>{dispatch({type:'hairReady',value});setAnnouncement('Hairstyle updated on portrait and figure');},
    onPending:setHairPending,
    onError:()=>{setHairError(true);setAnnouncement('Hair could not load. Your previous look is kept. Choose again to retry.');},
  });
  useEffect(()=>()=>hairSelection.current?.cancel(),[]);
  const stage=useRef<HTMLDivElement>(null);
  const viewport=useRef<HTMLElement>(null);
  useEffect(()=>{if(music.current)return attachMusic(music.current);},[]);
  useEffect(()=>{
    const activate=()=>{void unlockSound().catch(()=>{/* Effects can retry on the next gesture. */});};
    const keyboard=(event:KeyboardEvent)=>{if(event.key==='Enter'||event.key===' ')activate();};
    document.addEventListener('pointerdown',activate,true);document.addEventListener('keydown',keyboard,true);
    return()=>{document.removeEventListener('pointerdown',activate,true);document.removeEventListener('keydown',keyboard,true);};
  },[]);
  useEffect(()=>{
    // Measure the layout viewport, not the pinch-zoomed visual viewport.
    const fit=()=>{const node=viewport.current;if(node)setScale(Math.min(node.clientWidth/2965,node.clientHeight/1668));};
    const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(fit);
    if(viewport.current)observer?.observe(viewport.current);
    fit();window.addEventListener('resize',fit);window.addEventListener('orientationchange',fit);
    return()=>{observer?.disconnect();window.removeEventListener('resize',fit);window.removeEventListener('orientationchange',fit);};
  },[]);
  useEffect(()=>{
    let cancelled=false;
    const node=stage.current;if(!node)return;
    // Only the artwork currently shown is required. Hidden wardrobe variants
    // load when selected; they must not exhaust mobile memory or block startup.
    const files=Array.from(node.querySelectorAll('img')).map(img=>img.src);
    node.querySelectorAll<HTMLElement>('[style]').forEach(element=>{
      const mask=element.style.maskImage||element.style.webkitMaskImage;
      for(const match of mask.matchAll(/url\(["']?([^"')]+)["']?\)/g))files.push(new URL(match[1],document.baseURI).href);
    });
    void waitForArtwork(files,{onProgress:(value:number)=>{if(!cancelled)setProgress(value);}}).then(failed=>{
      if(cancelled)return;
      if(failed.length)setLoadingError(true);else setReady(true);
    });
    return()=>{cancelled=true;};
  },[]);
  const toggleSound=async()=>{
    const audio=music.current;if(!audio)return;
    const next=!soundRequested.current;const request=++soundRequest.current;
    soundRequested.current=next;
    void playSound('click');
    if(!next){setMusicActive(false);setSound(false);setSoundStarting(false);setAnnouncement('Music off. Interface sounds remain on.');return;}
    setSoundStarting(true);setMusicActive(true);
    try{
      // Only the music transport is controlled here; effects stay enabled.
      await audio.play();
      if(request!==soundRequest.current)return;
      setSound(true);setSoundStarting(false);setAnnouncement('Music on');
    }catch{
      if(request!==soundRequest.current)return;
      soundRequested.current=false;setMusicActive(false);setSound(false);setSoundStarting(false);
      setAnnouncement('Music could not start. Press Music off to retry.');
    }
  };
  const act=(type:string,value:any,label:string)=>{
    void playSound(type==='equip'?'equip':'click');setTooltip(null);
    if(type==='hairstyle'||type==='hairColor'){
      setHairError(false);void hairSelection.current.select(type,value);return;
    }
    dispatch({type,value});setAnnouncement(label);
  };
  const hover=(e:React.MouseEvent,label?:string)=>{void playSound('hover');if(label){const r=e.currentTarget.getBoundingClientRect();setTooltip({label,x:r.left+r.width/2,y:r.top-10});}};
  const buttonEvents=(label?:string)=>({onMouseEnter:(e:React.MouseEvent)=>hover(e,label),onMouseLeave:()=>setTooltip(null),onBlur:()=>setTooltip(null)});
  const item=(key:string,equipped:boolean,x:number,y:number,w:number,h:number)=>{
    const entry=equipment[key],s=Math.min(w/entry.size[0],h/entry.size[1])*.91;
    const isPants=key.startsWith('pants-');
    return <button key={key} className={'item-button '+(equipped?'equipped':'')} data-bag-target={equipped?undefined:entry.cell.join('-')} style={rect(x,y,w,h)} aria-label={`${equipped?(isPants?'Change':'Unequip'):'Equip'} ${entry.label}`} {...buttonEvents(entry.label)} onClick={()=>act('equip',equipped&&isPants?(key==='pants-dark'?'pants-light':'pants-dark'):key,entry.label+(equipped?' changed':' equipped'))}>
      <span className="item-art" style={{width:entry.size[0],height:entry.size[1],transform:`translate(-50%,-50%) scale(${s})`}}>{key==='gloves'?<RawArt file="ef59d.png" x={0} y={0} w={89} h={107}/>:<ItemArt property1={entry.art}/>}</span>
    </button>;
  };
  return <>
    <main ref={viewport} className={'viewport '+(ready?'is-ready':'')} aria-label="Felix character studio">
      <div className="stage-wrap" style={{width:2965*scale,height:1668*scale}}>
        {/* Layout zoom is intentional. An outer transform makes WebKit retain
            full 2965×1668 backing surfaces (over 1 GB at phone DPR 3). */}
        <div ref={stage} className="stage" style={{zoom:scale}} inert={!ready}>
          <RawArt file="e759b.png" x={975} y={0} w={1572} h={1668}/>
          {ready&&<Particles/>}
          <div className="illustration" role="img" aria-label={`Felix portrait, ${state.hairColor==='w'?'blond':state.hairColor==='p'?'pink':'black'} ${state.hairstyle===1?'loose':'tied'} hair, ${state.eyeColor} eyes, blue shirt`}>
            <MaskGroup x={318} y={228} w={1281} h={1440} mask="04949.png" layers={[
              ['a1313.png',0,0,1281,1440],['94130.png',262,571,78,102],['ad026.png',0,671,1319,769],['1dc57.png',63,-185,886,1285]
            ]}/>
            {state.eyeColor!=='blue'&&<div className="portrait-eyes crossfade" style={rect(644,601,226,83)}><PortraitEyes property1={state.eyeColor==='red'?'Красные':'Черные'}/></div>}
            <RawArt file="596cc.png" x={132} y={458} w={1461} h={1210}/>
            <RawArt file="4c94c.png" x={959} y={1062} w={145} h={132}/>
            <div className="portrait-hair crossfade" data-color={state.hairColor} data-hairstyle={state.hairstyle} style={rect(424,state.hairstyle===1?183:126,state.hairstyle===1?738:805,state.hairstyle===1?1034:1250)}><PortraitHair property1={`Hair ${state.hairColor}${state.hairstyle}` as any}/></div>
            <RawArt file="3bf7f.png" x={530} y={529} w={494} h={276}/>
            <RawArt file="08706.png" x={129} y={791} w={2066} h={877}/>
          </div>

          <div className="figure" role="img" aria-label={`Felix full-length, ${state.hairColor==='w'?'blond':state.hairColor==='p'?'pink':'black'} ${state.hairstyle===1?'loose':'tied'} hair, original eyes, ${state.top||'no top'}, ${state.pants}${state.swords?', twin katanas':''}${state.gloves?', gloves':', bare hands'}`}>
            {/* Keep the ground shadow above the portrait fade and below the feet. */}
            <RawArt file="1b969.png" x={1349} y={1561} w={950} h={107} className="figure-shadow"/>
            <MaskGroup x={1547} y={242} w={516} h={1427} mask="39099.png" layers={[
              ['85ce5.png',0,0,516,1427],['1afc7.png',-631,-241,1719,1668]
            ]}/>
            <div className="figure-body-detail" style={rect(1594,252,417,792)}><RawArt file="5668e.png" x={0} y={0} w={538} h={1114}/></div>
            <div className="figure-clothing garment crossfade" style={rect(1533,736,506,884)}><Clothing property1={state.pants==='pants-dark'?'Штаны Хаки':'Джинсы'}/></div>
            {state.swords&&<div className="figure-clothing crossfade" style={rect(1500,266,609,609)}><Clothing property1="Катаны"/></div>}
            {state.top&&<div className="figure-clothing garment crossfade" style={rect(1602,431,423,state.top==='shirt'?490:494)}><Clothing property1={state.top==='shirt'?'Кофта':'Жилет'}/></div>}
            <div className={'figure-hair crossfade '+(state.hairColor==='b'?'hair-original':'hair-'+state.hairColor)} data-color={state.hairColor} data-hairstyle={state.hairstyle} style={rect(1678,220,185,320)}>{state.hairColor==='b'?<img className="original-hair" src={assetPathPrefix+(state.hairstyle===1?'/figure-hair-black-loose.png':'/figure-hair-black-tied.png')} alt="" draggable="false"/>:<FigureHair property1={state.hairstyle===1?'Hair w1':'Hair w2'}/>}</div>
            {state.gloves&&<div className="figure-clothing figure-gloves crossfade" style={rect(1590,846,412,174)}><Clothing property1="Перчатки"/></div>}
          </div>

          <header>
            <nav className="main-nav" aria-label="Main navigation">
              <span className="keycap" style={rect(201,49,61,59)}>Q</span>
              <button className="nav-item current" aria-current="page" style={rect(337,31,225,91)} {...buttonEvents()}>Character</button>
              <button className="nav-item unavailable" aria-disabled="true" tabIndex={-1} style={rect(669,36,108,80)} {...buttonEvents()}>Map</button>
              <button className="nav-item unavailable" aria-disabled="true" tabIndex={-1} style={rect(873,36,150,80)} {...buttonEvents()}>Quests</button>
              <button className="nav-item unavailable" aria-disabled="true" tabIndex={-1} style={rect(1127,36,173,80)} {...buttonEvents()}>Settings</button>
              <span className="keycap" style={rect(1383,45,61,59)}>E</span>
              <div className="nav-line"/>
              <RawArt file="17e83.png" x={319} y={105} w={245} h={43}/>
            </nav>
            <div className="avatar" style={rect(1930,51,141,141)}><RawArt file="01b12.png" x={0} y={0} w={358} h={148}/></div>
            <div className="player-info" style={rect(2102,48,184,141)}><span className="player-name">Felix</span><span className="level">Level 99</span><div className="xp" role="progressbar" aria-label="Experience" aria-valuenow={2900} aria-valuemin={0} aria-valuemax={5000}><i/></div><span className="xp-value">2900/5000</span></div>
            <div className="stat weight" style={rect(2393,58,171,105)}><span>Weight</span><span className="stat-value">18.7/50</span></div>
            <div className="stat credits" style={rect(2646,58,152,105)}><span>Credits:</span><span className="stat-value">14820</span></div>
          </header>

          <section className="appearance" aria-label="Appearance" aria-busy={hairPending}>
            {(hairPending||hairError)&&<p className="hair-status" role="status">{hairPending?'Loading hair…':'Hair unavailable. Select again to retry.'}</p>}
            <h2 className="field-label" style={rect(209,252,170,51)}>Hairstyle:</h2>
            {[1,2].map((v,i)=><button key={v} className={'appearance-button hairstyle '+(state.hairstyle===v?'selected':'')} style={rect(220,318+i*180,127,185)} aria-label={v===1?'Loose hair':'Tied hair'} aria-pressed={state.hairstyle===v} {...buttonEvents()} onClick={()=>act('hairstyle',v,v===1?'Loose hair selected':'Tied hair selected')}><HairstyleArt property1={v===1?'Frame 3':'Frame 2'}/></button>)}
            <h2 className="field-label" style={rect(1147,239,172,51)}>Hair color:</h2>
            {hairChoices.map(([value,label,art],i)=><button key={value} className={'appearance-button swatch '+(state.hairColor===value?'selected':'')} style={rect(1186,298+i*90,73,77)} aria-label={label+' hair'} aria-pressed={state.hairColor===value} {...buttonEvents()} onClick={()=>act('hairColor',value,label+' hair selected')}><HairSwatch property1={art as any}/></button>)}
            <h2 className="field-label" style={rect(1155,585,168,51)}>Eye color:</h2>
            {eyeChoices.map(([value,label,art],i)=><button key={value} className={'appearance-button swatch '+(state.eyeColor===value?'selected':'')} style={rect(1186,640+i*90,73,77)} aria-label={label+' eyes'} aria-pressed={state.eyeColor===value} {...buttonEvents()} onClick={()=>act('eyeColor',value,label+' eyes selected')}><EyeSwatch property1={art as any}/></button>)}
          </section>

          <section className="equipment" aria-label="Equipped items">
            {[[1403,240,134,185],[2044,240,134,185],[1403,576,134,206],[2044,576,134,206],[1403,975,134,215],[2044,975,134,215]].map((r,i)=><div key={i} className="equipment-slot" style={rect(...r as [number,number,number,number])}/>)}
            <button className="figure-hair-button" style={rect(1678,220,185,320)} aria-label="Change hairstyle on full-length character" {...buttonEvents('Change hairstyle')} onClick={()=>act('hairstyle',state.hairstyle===1?2:1,'Hairstyle changed on both portraits')}/>
          </section>

          <section className="backpack" aria-labelledby="backpack-title" style={{...rect(backpack.x,backpack.y,backpack.width,backpack.height),borderWidth:backpack.border}}>
            <h2 id="backpack-title" style={{height:backpack.header}}>Backpack:</h2>
            <div className="bag-grid" aria-hidden="true" style={{gridTemplateColumns:`repeat(${backpack.columns},1fr)`,gridTemplateRows:backpack.rows.map(h=>`${h}px`).join(' ')}}>{backpack.rows.flatMap((_,row)=>Array.from({length:backpack.columns},(_,col)=><div key={`${col}-${row}`} data-bag-cell={`${col}-${row}`} className="bag-cell"/>))}</div>
          </section>
          <div className="inventory-items">{Object.keys(equipment).map(key=>{
            if(key===state.top)return item(key,true,2048,277,125,140);
            if(key===state.pants)return item(key,true,2048,994,125,185);
            if(key==='swords'&&state.swords)return item(key,true,1398,580,142,200);
            if(key==='gloves'&&state.gloves)return item(key,true,2051,619,100,118);
            const e=equipment[key];return item(key,false,...backpackItemRect(e.cell[0],e.cell[1]));
          })}</div>

          <button className="mascot-target" style={rect(173,965,355,375)} aria-label="Say hello to Bokkari" onMouseEnter={()=>setMascotActive(true)} onMouseLeave={()=>setMascotActive(false)} onFocus={()=>setMascotActive(true)} onBlur={()=>setMascotActive(false)} onClick={()=>{void playSound('click');setMascotActive(v=>!v);}}><img className={'mascot-art '+(mascotActive?'wave':'')} src={assetPathPrefix+'/bokkari.png'} alt="" draggable="false"/></button>
          <button className={'sound-button '+(sound?'on':'')} style={rect(230,1342,242,86)} aria-label={soundStarting?'Cancel music playback':sound?'Mute music':'Enable music'} aria-pressed={sound} disabled={!ready} onClick={toggleSound} title="Background music only; clicks and hovers stay on">
            <svg className="sound-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M5 12h6l7-6v20l-7-6H5z"/>{sound?<><path d="M22 11c3 3 3 7 0 10"/><path d="M26 7c5 5 5 13 0 18"/></>:<path d="m23 12 7 8m0-8-7 8"/>}</svg>
            <svg className="sound-label" viewBox="0 0 154 50" aria-hidden="true"><path d={musicLabels[soundStarting?'starting':sound?'on':'off']}/></svg>
          </button>
        </div>
      </div>
      <audio ref={music} src="./assets/domino-instrumental.mp3" loop preload="none" aria-hidden="true"/>
    </main>
    {!ready&&<div className="loading" role="status"><span className="loading-name">Felix</span><p>{loadingError?'Some artwork is taking too long to load.':'Preparing your character'}</p><div className="loading-track"><i style={{width:progress+'%'}}/></div>{loadingError&&<><button onClick={()=>location.reload()}>Retry</button><button onClick={()=>setReady(true)}>Continue anyway</button></>}</div>}
    {tooltip&&<div className="item-tooltip" style={{left:tooltip.x,top:tooltip.y}}>{tooltip.label}</div>}
    <span className="sr-only" aria-live="polite">{announcement}</span>
    <Cursor/>
  </>;
}

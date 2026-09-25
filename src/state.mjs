export const initialState = Object.freeze({hairstyle:1,hairColor:'w',eyeColor:'blue',top:'shirt',pants:'pants-dark',swords:false,gloves:true});
export function characterReducer(state, {type,value}) {
  if(type==='hairReady'&&[1,2].includes(value?.hairstyle)&&['w','p','b'].includes(value?.hairColor))return {...state,hairstyle:value.hairstyle,hairColor:value.hairColor};
  if (type === 'hairstyle' && [1,2].includes(value)) return {...state,hairstyle:value};
  if (type === 'hairColor' && ['w','p','b'].includes(value)) return {...state,hairColor:value};
  if (type === 'eyeColor' && ['blue','red','black'].includes(value)) return {...state,eyeColor:value};
  if (type === 'equip') {
    if (['shirt','vest'].includes(value)) return {...state,top:state.top===value?null:value};
    if (['pants-dark','pants-light'].includes(value)) return {...state,pants:value};
    if (value==='swords') return {...state,swords:!state.swords};
    if (value==='gloves') return {...state,gloves:!state.gloves};
  }
  return state;
}
export function inventory(state) {
  return ['shirt','vest','swords','pants-light','pants-dark','gloves'].filter(item=>item!==state.top&&item!==state.pants&&!(item==='swords'&&state.swords)&&!(item==='gloves'&&state.gloves));
}

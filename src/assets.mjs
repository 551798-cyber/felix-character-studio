// Choose once at startup so rotating or zooming never downloads two asset sets.
// CSS dimensions remain identical; these copies only reduce decoded image memory.
export const assetPathPrefix=typeof matchMedia!=='undefined'&&matchMedia('(max-width: 1024px)').matches
  ? './assets/compact' : './assets';

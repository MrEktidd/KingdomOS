/** In-memory notification history; important feedback remains discoverable after toasts fade. */
export type NoticeTone="info"|"success"|"warning"|"error";
export interface Notice { id:number; message:string; tone:NoticeTone; createdAt:number }
const entries:Notice[]=[];
const listeners=new Set<(entry:Notice|null)=>void>();
let number=0;
export function notify(message:string,tone:NoticeTone="info"):Notice {
  const entry:Notice={id:++number,message,tone,createdAt:Date.now()};
  entries.unshift(entry);
  if(entries.length>50)entries.length=50;
  for(const listener of listeners)listener(entry);
  return entry;
}
export function noticeHistory():Notice[]{return entries.slice();}
export function clearNotices():void{entries.length=0;for(const listener of listeners)listener(null);}
export function subscribeNotices(listener:(entry:Notice|null)=>void):()=>void {
  listeners.add(listener);return()=>listeners.delete(listener);
}

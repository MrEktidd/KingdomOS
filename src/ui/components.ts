/**
 * Shared, theme-token-driven primitives for KingdomOS apps.
 * All controls size to their content unless explicitly icon-only.
 * Their API does not know about maps, app IDs, or window management.
 */
import {icon} from "./icons.js";

export type ButtonTone="default"|"primary"|"subtle"|"danger";
export interface ActionButtonOptions {
  label:string;
  icon?:string;
  tone?:ButtonTone;
  iconOnly?:boolean;
  title?:string;
  disabled?:boolean;
  onClick:()=>void;
}
export function actionButton(options:ActionButtonOptions):HTMLButtonElement {
  const el=document.createElement("button");
  el.type="button";
  el.className="ko-button ko-button--"+(options.tone??"default")+(options.iconOnly?" ko-button--icon":"");
  el.setAttribute("aria-label",options.label);
  el.title=options.title??options.label;
  el.disabled=Boolean(options.disabled);
  if(options.icon)el.innerHTML=icon(options.icon,16);
  if(!options.iconOnly){
    const label=document.createElement("span");
    label.textContent=options.label;
    el.append(label);
  }
  el.addEventListener("click",options.onClick);
  return el;
}
export function toolbarGroup(label:string,...elements:HTMLElement[]):HTMLDivElement {
  const group=document.createElement("div");
  group.className="ko-toolbar-group";
  group.setAttribute("role","group");
  group.setAttribute("aria-label",label);
  group.append(...elements);
  return group;
}
export function statusChip(label:string,tone:"success"|"warning"|"neutral"|"error"="neutral"):HTMLSpanElement {
  const span=document.createElement("span");
  span.className="ko-status ko-status--"+tone;
  span.setAttribute("role","status");
  const dot=document.createElement("i");
  dot.className="ko-status-dot";
  const text=document.createElement("span");
  text.textContent=label;
  span.append(dot,text);
  return span;
}
export interface MenuAction {
  label:string;
  icon?:string;
  onClick:()=>void;
  destructive?:boolean;
}
export function actionMenu(label:string,entries:MenuAction[]):HTMLDetailsElement {
  const details=document.createElement("details");
  details.className="ko-action-menu";
  const toggle=document.createElement("summary");
  toggle.className="ko-button ko-button--subtle ko-button--icon";
  toggle.title=label;
  toggle.setAttribute("aria-label",label);
  toggle.innerHTML=icon("ellipsis",17);
  const pop=document.createElement("div");
  pop.className="ko-action-menu-list";
  pop.setAttribute("role","group");
  pop.setAttribute("aria-label",label);
  for(const entry of entries){
    const b=actionButton({
      label:entry.label,icon:entry.icon,tone:entry.destructive?"danger":"subtle",
      onClick:()=>{
        details.open=false;
        entry.onClick();
      }
    });
    pop.append(b);
  }
  details.append(toggle,pop);
  document.addEventListener("pointerdown",event=>{
    if(details.open&&!details.contains(event.target as Node))details.open=false;
  },{signal:menuAbort(details).signal});
  return details;
}
const menuSignals=new WeakMap<HTMLDetailsElement,AbortController>();
function menuAbort(el:HTMLDetailsElement):AbortController {
  const abort=new AbortController();
  menuSignals.set(el,abort);
  return abort;
}
export function disposeActionMenu(el:HTMLDetailsElement):void {menuSignals.get(el)?.abort();}

function dialogShell(title:string,description:string):{dialog:HTMLDialogElement;content:HTMLDivElement;footer:HTMLDivElement} {
  const dialog=document.createElement("dialog");
  dialog.className="ko-dialog";
  const content=document.createElement("div");
  content.className="ko-dialog-body";
  const header=document.createElement("h2");header.textContent=title;
  const explanation=document.createElement("p");explanation.textContent=description;
  const footer=document.createElement("div");footer.className="ko-dialog-footer";
  content.append(header,explanation);dialog.append(content,footer);
  document.body.append(dialog);
  return {dialog,content,footer};
}
export function confirmAction(title:string,message:string,danger=false):Promise<boolean> {
  const {dialog,footer}=dialogShell(title,message);
  return new Promise(resolve=>{
    let finished=false;
    const finish=(value:boolean)=>{
      if(finished)return;
      finished=true;
      dialog.close();dialog.remove();
      resolve(value);
    };
    const cancel=actionButton({label:"Cancel",onClick:()=>finish(false)});
    const accept=actionButton({label:danger?"Delete":"Continue",tone:danger?"danger":"primary",onClick:()=>finish(true)});
    footer.append(cancel,accept);
    dialog.addEventListener("cancel",event=>{event.preventDefault();finish(false);},{once:true});
    dialog.showModal();cancel.focus();
  });
}
export function promptText(title:string,message:string,initial:string,maxLength=100):Promise<string|null> {
  const {dialog,content,footer}=dialogShell(title,message);
  const input=document.createElement("input");
  input.type="text";input.className="ko-dialog-input";input.value=initial;input.maxLength=maxLength;
  input.setAttribute("aria-label",title);
  content.append(input);
  return new Promise(resolve=>{
    let done=false;
    const finish=(value:string|null)=>{
      if(done)return;
      done=true;dialog.close();dialog.remove();resolve(value);
    };
    const cancel=actionButton({label:"Cancel",onClick:()=>finish(null)});
    const save=actionButton({label:"Save",icon:"check",tone:"primary",onClick:()=>finish(input.value.trim()||null)});
    footer.append(cancel,save);
    input.addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();finish(input.value.trim()||null);}});
    dialog.addEventListener("cancel",event=>{event.preventDefault();finish(null);},{once:true});
    dialog.showModal();input.focus();input.select();
  });
}

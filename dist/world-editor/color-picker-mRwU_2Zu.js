import{C as e,i as t,r as n}from"./index-DfkEhdNk.js";import{o as r}from"./color-utils-7EG96Nsk.js";import{D as i,O as a,T as o,r as s}from"./node-utils-BD0SusgU.js";import{t as c}from"./dialog-BW-Ar0Nf.js";import{t as l}from"./hatches-DPVQw6sc.js";var u=`colorPicker`,d=Array.from({length:12},(e,t)=>i(t*30,.7,.7).formatHex()),f=[0,1,2,3,4,5,6,8,9,10,11].map(e=>`hatch${e}`),p=[`hex`,`rgb`,`hsl`],m=`hex`,h=window.EyeDropper,g=`
  #${u} { padding: .6em; }
  #${u} > div { width: auto; }
  #${u} button { margin: 0; }
  #${u} svg { pointer-events: none; }
  #${u} .area { position: relative; height: 12em; border: 1px solid #9b9b9b; cursor: crosshair; touch-action: none;
    background: linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, var(--hue)); }
  #${u} .handle { position: absolute; width: .7em; height: .7em; margin: -.45em; border: 1px solid #fff; outline: 1px solid #000; pointer-events: none; }
  #${u} .controls, #${u} .fields { display: flex; align-items: center; gap: .4em; margin-top: .6em; }
  #${u} .controls button svg { display: block; width: 1em; height: 1em; fill: currentColor; }
  #${u} .preview { flex: none; width: 1.75em; height: 1.75em; box-sizing: border-box; border: 1px solid #9b9b9b; }
  #${u} .hue { flex: 1; min-width: 0; height: .8em; border: 1px solid #9b9b9b;
    background: linear-gradient(to right, #f00, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00); }
  #${u} .inputs { display: flex; flex: 1; gap: .4em; }
  #${u} .inputs label { display: grid; flex: 1; min-width: 0; }
  #${u} .inputs label > * { grid-area: 1 / 1; }
  #${u} .inputs input { width: 100%; padding: .2em 2.2em .2em .4em; -moz-appearance: textfield; }
  #${u} .inputs input::-webkit-inner-spin-button, #${u} .inputs input::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
  #${u} .inputs span { align-self: center; justify-self: end; padding-right: .5em; font-size: .9em; opacity: .6; pointer-events: none; }
  #${u} .swatches { display: grid; grid-template-columns: repeat(12, 1fr); gap: .3em; margin-top: .6em; padding-top: .6em; border-top: 1px solid #0000001a; }
  #${u} .swatch { aspect-ratio: 1; padding: 0; border: 1px solid #9b9b9b; background: none; }
  #${u} .swatch:hover { border-color: #000; }
  #${u} .swatch.selected { outline: 2px solid var(--dark-solid); outline-offset: 1px; }
  #${u} .swatches:not(.expanded) .extra { display: none; }
  #${u} .expand { padding: 0; }
  #${u} .swatches svg, #${u} .preview svg { display: block; width: 100%; height: 100%; }
  #${u} .patterns { position: absolute; }
`,_=`<svg viewBox="0 0 16 16"><path d="M13.4 2.6a2 2 0 0 0-2.8 0L8.9 4.3 8.2 3.6 7.1 4.7l.7.7L2.5 10.7V13.5h2.8l5.3-5.3.7.7 1.1-1.1-.7-.7 1.7-1.7a2 2 0 0 0 0-2.8ZM4.7 12H4v-.7l5-5 .7.7Z"/></svg>`;function v(){c.close(u)}function y(n,i){v();let a=l.parse(n),o=a?.hatch??``,{h:g,s:_,v:y}=E(a?.color||w(n)||d[0]);Number.isNaN(g)&&(g=0),s(`dialogs`).insertAdjacentHTML(`beforeend`,b());let D=s(u),O=e=>D.querySelector(e),[k,A,j,M,N,P]=[O(`.area`),O(`.handle`),O(`.hue`),O(`.preview rect`),O(`.inputs`),O(`.patterns`)],F=(e=!0)=>{let t=T(g,_,y);if(k.style.setProperty(`--hue`,T(g,1,1)),Object.assign(A.style,{left:`${_*100}%`,top:`${(1-y)*100}%`,background:t}),j.value=String(Math.round(g)),P.style.color=t,M.setAttribute(`fill`,o?`url(#picker-${o})`:t),e){let e=N.querySelectorAll(`input`);x(t,g).forEach((t,n)=>{e[n].value=String(t.value)})}for(let e of D.querySelectorAll(`[data-color]`))e.classList.toggle(`selected`,e.dataset.color===t);for(let e of D.querySelectorAll(`[data-hatch]`))e.classList.toggle(`selected`,e.dataset.hatch===o)},I=(e=!0)=>{let t=T(g,_,y),n=o?l.fill(o,t):t;F(e),l.ensure(n),i(n)},L=(e,t=!0)=>{let n=E(e);Number.isNaN(n.h)||(g=n.h),[_,y]=[n.s,n.v],I(t)},R=t=>{let{left:n,top:r,width:i,height:a}=k.getBoundingClientRect();_=e((t.clientX-n)/i,0,1),y=1-e((t.clientY-r)/a,0,1),I()};k.addEventListener(`pointerdown`,e=>{k.setPointerCapture(e.pointerId),R(e)}),k.addEventListener(`pointermove`,e=>{k.hasPointerCapture(e.pointerId)&&R(e)}),j.addEventListener(`input`,()=>{g=j.valueAsNumber,I()}),N.addEventListener(`input`,()=>{let e=Array.from(N.querySelectorAll(`input`),e=>e.value.trim()),t=C(e);t&&(L(t,!1),m===`hsl`&&(g=Number(e[0])%360,F(!1)))}),N.addEventListener(`change`,()=>F());let z=()=>{N.innerHTML=x(T(g,_,y),g).map(S).join(``)};O(`.format`).addEventListener(`click`,()=>{m=p[(p.indexOf(m)+1)%p.length],z()}),O(`.random`).addEventListener(`click`,()=>L(r()));let B=O(`.eyedropper`);h?B.addEventListener(`click`,async()=>{let e=await new h().open().then(e=>w(e.sRGBHex)).catch(()=>``);e&&D.isConnected&&L(e)}):B.remove(),D.addEventListener(`click`,e=>{let t=e.target.closest(`.swatch`);t?.dataset.color?L(t.dataset.color):t?.dataset.hatch&&(o=o===t.dataset.hatch?``:t.dataset.hatch,I())});let V=O(`.hatches`),H=O(`.expand`),U=e=>{V.classList.toggle(`expanded`,e),H.className=`expand ${e?`icon-up-open`:`icon-down-open`}`,H.dataset.tip=t(e?`Show only the basic hatchings`:`Show all hatchings`)};H.addEventListener(`click`,()=>U(!V.classList.contains(`expanded`))),U(!!o&&!f.includes(o)),z(),F(),c.open(u,{title:t(`Color Picker`),width:`26em`,position:{my:`center`,at:`center`,of:`svg`}})}function b(){let e=l.bases(),r=e.map(e=>l.recolor(e,`picker-${e.id}`,`currentColor`).outerHTML).join(``),i=(e,t,n,r=!1)=>`<button class="swatch${r?` extra`:``}" ${e} data-tip="${n}"><svg><rect width="100%" height="100%" fill="${t}" /></svg></button>`,a=d.map(e=>i(`data-color="${e}"`,e,t(`Click to fill with the color`))),o=e=>i(`data-hatch="${e}"`,`url(#picker-${e})`,n(t(`Click to fill with the hatching {{hatching}}`,{hatching:e}),t(`Click again to remove it`)),!f.includes(e)),s=e.map(({id:e})=>e).filter(e=>!f.includes(e));return`<div id="${u}" class="dialog">
    <style>${g}</style>
    <svg class="patterns" width="0" height="0"><defs>${r}</defs></svg>
    <div class="area" data-tip="${t(`Drag to set saturation and brightness`)}"><div class="handle"></div></div>
    <div class="controls">
      <button class="eyedropper" data-tip="${t(`Pick a color from the screen`)}">${_}</button>
      <span class="preview" data-tip="${t(`Current fill`)}"><svg><rect width="100%" height="100%" /></svg></span>
      <input class="hue" type="range" min="0" max="360" step="1" data-tip="${t(`Set hue`)}" />
      <button class="random icon-shuffle" data-tip="${t(`Pick a random color`)}"></button>
    </div>
    <div class="fields">
      <div class="inputs"></div>
      <button class="format icon-resize-vertical" data-tip="${t(`Switch color format`)}"></button>
    </div>
    <div class="swatches">${a.join(``)}</div>
    <div class="swatches hatches">
      ${f.map(o).join(``)}
      <button class="expand"></button>${s.map(o).join(``)}
    </div>
  </div>`}function x(e,t){if(m===`hex`)return[{label:`HEX`,value:e}];if(m===`rgb`){let{r:t,g:n,b:r}=a(e);return[{label:`R`,value:t,max:255},{label:`G`,value:n,max:255},{label:`B`,value:r,max:255}]}let{s:n,l:r}=i(e);return[{label:`H`,value:Math.round(t),max:360},{label:`S`,value:Math.round((n||0)*100),max:100},{label:`L`,value:Math.round(r*100),max:100}]}function S({label:e,value:t,max:n}){return`<label><input ${n?`type="number" min="0" max="${n}"`:`type="text" maxlength="7"`} value="${t}" spellcheck="false" autocomplete="off" /><span>${e}</span></label>`}function C(e){if(m===`hex`)return/^#?([\da-f]{3}|[\da-f]{6})$/i.test(e[0])?w(`#${e[0].replace(`#`,``)}`):``;let t=e.map(Number),n=m===`rgb`?[255,255,255]:[360,100,100];if(e.some(e=>e===``)||t.some((e,t)=>!(e>=0&&e<=n[t])))return``;let[r,o,s]=t;return m===`rgb`?a(r,o,s).formatHex():i(r,o/100,s/100).formatHex()}function w(e){return o(e)?.formatHex()||``}function T(e,t,n){let r=r=>{let i=(r+e/60)%6;return(n-n*t*Math.max(0,Math.min(i,4-i,1)))*255};return a(r(5),r(3),r(1)).formatHex()}function E(e){let{r:t,g:n,b:r}=a(e),[i,o,s]=[t/255,n/255,r/255],c=Math.max(i,o,s),l=c-Math.min(i,o,s);return{h:(l?c===i?((o-s)/l+6)%6:c===o?(s-i)/l+2:(i-o)/l+4:NaN)*60,s:c?l/c:0,v:c}}var D={open:y,close:v};export{D as ColorPicker};
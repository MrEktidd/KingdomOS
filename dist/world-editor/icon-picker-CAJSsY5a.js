import{d as e,i as t,p as n,r}from"./index-DOQT8b0l.js";import{Ft as i,f as a,h as o,m as s,nt as c}from"./options-model-DdZ2yl81.js";import{n as l,t as u}from"./file-utils-ChGs_4wd.js";import{i as d,r as f}from"./node-utils-B7j8BhBd.js";import{t as p}from"./dialog-3wqBPvBH.js";import{o as m}from"./tooltips-Nm9ri5Ws.js";import{t as h}from"./file-name-CjjRnvM3.js";import{t as g}from"./icons-archive-CEtN3O86.js";import{t as _}from"./pictures-t6TkHqvQ.js";var v=`iconPositioner`,y=.25,[b,x]=[25,400],S=`
  #${v} > div { width: auto; }
  #${v} .stage { width: 16em; height: 16em; margin: 0 auto; background: repeating-conic-gradient(#e8e8e8 0 25%, #fff 0 50%) 0 0 / 1em 1em; cursor: grab; touch-action: none; }
  #${v} .stage:active { cursor: grabbing; }
  #${v} .stage svg { display: block; width: 100%; height: 100%; }
  #${v} .controls { display: flex; align-items: center; gap: .4em; margin-top: .5em; }
  #${v} .controls slider-input { flex: 1; min-width: 0; }
  #${v} .controls input[type=range] { flex: 1; min-width: 0; }
  #${v} .previews { display: flex; justify-content: center; align-items: center; gap: 1em; margin-top: .5em; }
  #${v} .previews svg { width: 2em; height: 2em; }
  #${v} .previews .circle svg { border-radius: 50%; background: #d4c7a1; }
  #${v} .previews .small svg { width: 1em; height: 1em; }
`;function C(e){let t=d(v);t&&(!e||t.dataset.icon===e)&&p.close(v)}function w(e){let r=a.get(e);if(!r||!d(e))return;let i=t=>d(e)?.setAttribute(`viewBox`,t),o=r.viewBox,c=T(o),l={...c};C(),f(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${v}" class="dialog" data-icon="${n(e)}">
      <style>${S}</style>
      <div class="stage" data-tip="${t(`Drag to pan, scroll to zoom`)}">
        <svg><g class="art"${s.paintAttributes(e)}>${f(e).innerHTML}</g><path class="shade" fill="#000" fill-opacity=".45" fill-rule="evenodd"/><rect class="edge" fill="none" stroke="#d0240f" vector-effect="non-scaling-stroke" stroke-dasharray="4 3"/></svg>
      </div>
      <div class="controls">
        <span>${t(`Zoom`)}</span>
        <slider-input min="${b}" max="${x}" value="100"></slider-input>
        <button type="button" class="fit" data-tip="${t(`Fit the frame to the picture's visible content`)}">${t(`Fit`)}</button>
      </div>
      <div class="previews" data-tip="${t(`The icon at map sizes`)}">
        <span class="small">${s.html(e)}</span>
        <span>${s.html(e)}</span>
        <span class="circle">${s.html(e)}</span>
      </div>
    </div>`);let u=f(v),h=u.querySelector(`.stage svg`),g=u.querySelector(`slider-input`),w=(e,t=!1)=>{l=e;let{x:n,y:r,side:a}=l,o=a*y,[s,u,d]=[n-a/2-o,r-a/2-o,a+2*o];h.setAttribute(`viewBox`,`${s} ${u} ${d} ${d}`);let[f,p]=[n-a/2,r-a/2];h.querySelector(`.shade`).setAttribute(`d`,`M${s},${u}h${d}v${d}h${-d}z M${f},${p}v${a}h${a}v${-a}z`);let m=h.querySelector(`.edge`);for(let[e,t]of Object.entries({x:f,y:p,width:a,height:a}))m.setAttribute(e,String(t));t||(g.value=String(Math.round(c.side/a*100))),i(E(l))};w(l);let D=(e,t=!1)=>{let[n,r]=[c.side*100/x,c.side*100/b];w({...l,side:Math.min(r,Math.max(n,e))},t)};g.addEventListener(`input`,e=>{e.target===g&&D(c.side*100/g.valueAsNumber,!0)}),g.addEventListener(`change`,e=>{e.target===g&&w(l)}),h.addEventListener(`wheel`,e=>{e.preventDefault(),D(l.side*1.1**Math.sign(e.deltaY))}),h.addEventListener(`pointerdown`,e=>{h.setPointerCapture(e.pointerId);let t={x:e.clientX,y:e.clientY},n=e=>{let n=l.side*1.5/h.getBoundingClientRect().width;w({...l,x:l.x-(e.clientX-t.x)*n,y:l.y-(e.clientY-t.y)*n}),t={x:e.clientX,y:e.clientY}},r=()=>{h.removeEventListener(`pointermove`,n),h.removeEventListener(`pointerup`,r),h.removeEventListener(`pointercancel`,r)};h.addEventListener(`pointermove`,n),h.addEventListener(`pointerup`,r),h.addEventListener(`pointercancel`,r)}),u.querySelector(`.fit`).addEventListener(`click`,async()=>{let e=await _.fit(r);u.isConnected&&(w(T(e)),m(t(`The frame is fitted to the picture`),!1,`success`,2e3))});let O=!1;p.open(v,{title:t(`Position icon`),width:`20em`,position:{my:`center`,at:`center`,of:`svg`},onClose:()=>{O||i(o),p.destroy(v)},buttons:[{label:t(`Apply`),onClick:()=>{O=!0,a.update(e,{viewBox:E(l)}),p.close(v)}},{label:t(`Cancel`),onClick:()=>{p.close(v)}}]})}function T(e){let[t,n,r,i]=s.parseFrame(e)??[0,0,100,100];return{x:t+r/2,y:n+i/2,side:Math.max(r,i)}}function E({x:e,y:t,side:n}){return s.formatFrame([e-n/2,t-n/2,n,n])}var D=`iconPicker`,O=`
  #${D} { padding: .4em .6em; }
  #${D} > div { width: auto; }
  #${D} .head { display: flex; align-items: center; gap: .6em; padding-bottom: .5em; border-bottom: 1px solid #0000001a; }
  #${D} .current { display: flex; align-items: center; gap: .5em; flex: 1; min-width: 0; }
  #${D} .current .preview { flex: none; display: grid; place-items: center; width: 2.2em; height: 2.2em; border-radius: 4px; background: #0000000d; }
  #${D} .current .preview svg { width: 1.7em; height: 1.7em; overflow: visible; }
  #${D} .current .about { display: flex; align-items: baseline; gap: .5em; min-width: 0; white-space: nowrap; }
  #${D} .current .name { font-weight: bold; overflow: hidden; text-overflow: ellipsis; }
  #${D} .current .from { font-size: .85em; opacity: .65; overflow: hidden; text-overflow: ellipsis; }
  #${D} .currentActions { display: flex; gap: .2em; margin-left: auto; }
  #${D} .currentActions button { margin: 0; padding: .2em .4em; white-space: nowrap; }
  #${D} .search { width: 11em; }
  #${D} .body { display: grid; grid-template-columns: 11.5em 1fr; height: min(32em, 64vh); }
  #${D} nav { overflow-y: auto; padding: .4em .4em .4em 0; border-right: 1px solid #0000001a; }
  #${D} nav button { display: flex; justify-content: space-between; width: 100%; margin: 0; padding: .25em .4em; border: 0; border-radius: 4px; background: none; box-shadow: none; text-align: left; white-space: nowrap; }
  #${D} nav button:hover { background: #0000000d; }
  #${D} nav button.active { background: #0000001a; color: inherit; font-weight: bold; }
  #${D} nav button small { margin-left: .4em; opacity: .6; font-weight: normal; }
  #${D} nav .section { margin-top: .5em; font-weight: bold; }
  #${D} nav div.section { padding: .25em .4em; white-space: nowrap; }
  #${D} nav .entry { padding-left: 1.2em; }
  #${D} .panel { position: relative; overflow-y: auto; padding: .4em 0 .4em .6em; }
  #${D} .panel h4 { margin: .6em 0 .3em; font-size: .85em; opacity: .7; }
  #${D} .panel h4:first-child { margin-top: 0; }
  #${D} .choices { display: grid; grid-template-columns: repeat(auto-fill, minmax(5.4em, 1fr)); gap: .4em; }
  #${D} .choices button { display: grid; place-items: center; aspect-ratio: 1; margin: 0; padding: 0; border: 1px solid transparent; border-radius: 4px; background: #0000000a; box-shadow: none; font-size: 2.6em; }
  #${D} .choices button:hover { background: #00000017; }
  #${D} .choices button.pressed { border-color: var(--dark-solid); background: #0000001f; }
  #${D} .choices button svg { width: 80%; height: 80%; overflow: visible; pointer-events: none; }
  #${D} .glyphText { display: flex; align-items: center; gap: .4em; margin-bottom: .5em; }
  #${D} .glyphText input { width: 6em; }
  #${D} .customAdd { display: flex; gap: .3em; margin-bottom: .5em; }
  #${D} .customAdd input { flex: 1; min-width: 0; }
  #${D} .customAdd button { margin: 0; white-space: nowrap; }
  #${D} .customArchive { display: flex; gap: .3em; margin-top: .5em; }
  #${D} .customArchive button { margin: 0; }
  #${D} .replacing { margin: -.2em 0 .5em; padding: .3em .5em; border-radius: 4px; background: #ffd70033; }
  #${D} .replacing a { cursor: pointer; text-decoration: underline; }
  #${D} .note { margin: .6em 0 0; font-size: .85em; opacity: .7; }
  #${D} .empty { margin: 1em 0; font-style: italic; opacity: .7; }
  #${D}.busy { cursor: progress; }
  #${D}.busy :is(.customAdd, .customArchive) { pointer-events: none; opacity: .5; }
  @media (max-width: 600px) {
    #${D} .head { flex-wrap: wrap; }
    #${D} .search { width: 100%; }
    #${D} .body { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
    #${D} nav { display: flex; gap: .2em; overflow-x: auto; padding: .4em 0; border: 0; border-bottom: 1px solid #0000001a; }
    #${D} nav button { width: auto; white-space: nowrap; }
    #${D} nav .section, #${D} nav .entry { margin: 0; padding-left: .4em; }
    #${D} .choices { grid-template-columns: repeat(auto-fill, minmax(4.4em, 1fr)); }
    #${D} .panel { padding-left: 0; }
  }
`,k=null;function A({current:e,onPick:n,live:i=!1,preferCustom:o,profile:c=`icon`}){let d=e,v=!1,y=te(),b=N(e,y,o),x=``,S=null;p.destroy(D),f(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${D}" class="dialog">
      <style>${O}</style>
      <div class="head">
        <div class="current"></div>
        <input type="search" class="search" placeholder="${t(`Search built-in icons`)}" data-tip="${t(`Find a built-in icon or emoji by name`)}" />
      </div>
      <div class="body">
        <nav></nav>
        <div class="panel"></div>
      </div>
    </div>`);let T=f(D),E=T.querySelector(`nav`),A=T.querySelector(`.panel`),j=T.querySelector(`.search`),M=options.map,P=()=>T.isConnected&&options.map===M,F=()=>{T.querySelector(`.current`).innerHTML=I(e,S,y)},U=()=>{E.innerHTML=L(y,x?null:b)},W=()=>{if(x)A.innerHTML=B(y,x,e);else if(b===`custom`)A.innerHTML=H(e,S,c);else{let t=y.filter(({key:e})=>e===b);A.innerHTML=(b.startsWith(`glyph`)?V(e):``)+R(t,e),z(t)}G()},G=()=>{let e=A.querySelector(`.pressed`);A.scrollTop=e?e.offsetTop-A.clientHeight/2:0},K=e=>{b=e,x=``,j.value=``,U(),W()},q=t=>{e=t;for(let e of A.querySelectorAll(`.choices [data-icon]`))e.classList.toggle(`pressed`,e.dataset.icon===t);F(),i&&n(t)},J=()=>{v=!0,i||n(e),p.close(D)},Y=e=>{S=e,F(),e?K(`custom`):b===`custom`&&!x&&W()},X=()=>{U(),F(),b===`custom`&&!x&&W()},Z=async e=>{if(!P()||T.classList.contains(`busy`))return;let t=S,n=t??a.newId();T.classList.add(`busy`);try{let r=await e(n);if(!P()||S!==t)return;t?(C(n),a.update(n,r),S=null,X()):(a.add({id:n,...r}),X(),q(n))}catch(e){P()&&m(e.message,!1,`error`,6e3)}finally{T.classList.remove(`busy`)}},ne=()=>A.querySelector(`.customAdd input`)?.value??``,Q=(e,t)=>{k??=u(e),k.accept=e,k.onchange=()=>{let e=k.files?.[0];k.value=``,e&&t(e)},k.click()},re=()=>Q(`image/*,.svg`,e=>void Z(t=>_.fromFile(e,t,c))),ie=async()=>{let e=await g.pack();l(e,`${h(`Custom icons`)}.zip`,`application/zip`)},ae=n=>{P()&&!T.classList.contains(`busy`)&&(T.classList.add(`busy`),C(e),g.unpack(n).then(({added:e,unchanged:n,conflicts:i,invalid:a})=>{if(!P())return;X();let o=[`${t(`Added`)}: ${e}`,n&&t(`Already here: {{unchanged}}`,{unchanged:n}),a&&t(`Invalid, skipped: {{invalid}}`,{invalid:a})];m(r(t(`Custom icons imported`),o.filter(Boolean).join(`, `)),!1,`success`,5e3),i.length&&oe(i)}).catch(e=>P()&&m(e.message,!1,`error`,6e3)).finally(()=>T.classList.remove(`busy`)))},oe=e=>{p.confirm({title:t(`Import custom icons`),message:r(t(`Archived icons with the id of a different icon on this map: {{icons}}`,{icons:e.length}),t(`Replace the map's pictures with the archived ones?`),t(`Everything using them will change`)),confirm:t(`Replace`),cancel:t(`Keep the map's`),onConfirm:()=>{for(let{id:t}of e)C(t);g.replace(e),P()&&X(),m(t(`Custom icons replaced: {{icons}}`,{icons:e.length}),!1,`success`,4e3)}})},$={link:()=>void Z(()=>_.fromLink(ne())),upload:re,exportAll:()=>void ie().catch(e=>m(e.message,!1,`error`,6e3)),importArchive:()=>Q(`.zip,application/zip`,ae),stopReplacing:()=>Y(null),position:()=>w(e),replace:()=>Y(S===e?null:e),remove:()=>{let n=e,r=s.uses(n),i=Object.values(r).reduce((e,t)=>e+t,0);p.confirm({title:t(`Remove`),message:i?`${t(`The icon is used by {{uses}}. They will show no icon.`,{uses:s.describeUses(r)})}<br>${t(`Remove it anyway?`)}`:t(`The icon is not used on the map. Remove it?`),confirm:t(`Remove`),onConfirm:()=>{S===n&&(S=null),C(n),a.remove(n),X()}})}};T.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`nav [data-source]`)?.dataset.source;if(n)return K(n);let r=t.closest(`[data-action]`)?.dataset.action;if(r)return $[r]?.();let i=t.closest(`.choices [data-icon]`)?.dataset.icon;if(i===void 0)return;let a=A.querySelector(`.glyphText input`);a&&(a.value=s.glyphText(i)??``),q(i)}),A.addEventListener(`dblclick`,e=>{e.target.closest(`.choices [data-icon]`)&&J()}),A.addEventListener(`input`,e=>{let t=e.target;t.closest(`.glyphText`)&&q(s.glyph(t.value))}),A.addEventListener(`keydown`,e=>{e.key===`Enter`&&e.target.closest(`.customAdd`)&&$.link()}),j.addEventListener(`input`,()=>{x=j.value.trim().toLowerCase(),U(),W()}),F(),U(),W(),p.open(D,{title:t(`Select icon`),width:ee(),position:{my:`center`,at:`center`,of:`svg`},onClose:()=>{i&&!v&&e!==d&&n(d),p.destroy(D)},buttons:[{label:t(`Apply`),onClick:J},{label:t(`Cancel`),onClick:()=>p.close(D)}]}),G()}function ee(){let e=Number.parseFloat(getComputedStyle(document.body).fontSize)||10;return Math.min(52*e,(window.visualViewport?.width??window.innerWidth)-16)}function te(){return[...Object.entries(i).map(([e,n])=>({key:`glyph/${e}`,group:t(`Emoji`),label:c[e]??e,icons:Object.keys(n).map(e=>s.glyph(e))})),...o.sets().flatMap(j)]}function j({id:t,group:n}){let r=t,i=new Map;for(let e of o.files(r)){let t=e.slice(0,Math.max(0,e.lastIndexOf(`/`)));i.set(t,[...i.get(t)??[],o.symbolId(r,e)])}let a=t.slice(t.indexOf(`-`)+1);return[...i].map(([t,i])=>({key:t?`${r}/${t}`:r,group:n,label:e((t||a).replaceAll(/[-/]/g,` `).replace(/([a-z0-9])([A-Z])/g,`$1 $2`)),icons:i,set:r}))}function M(e,t){let n=o.setForId(t);return e.find(e=>e.icons.includes(t))??(n&&e.find(e=>e.set===n))}function N(e,t,n){let r=s.kind(e);return r===`custom`||!e&&n?`custom`:(M(t,e)??t.find(({set:e})=>r===`glyph`?!e:e))?.key??`custom`}function P(e){return e.label===e.group?F(e.group):`${F(e.group)} · ${e.label}`}var F=e=>c[e]??e;function I(r,i,o){let c=s.kind(r),l=c===`set`?M(o,r):void 0,u=r?c===`glyph`?t(`Emoji`):c===`custom`?t(`Carried by this map`):l?P(l):t(`Built-in`):t(`No icon selected`),d=c===`custom`&&a.get(r)?`<div class="currentActions">
          <button type="button" data-action="position" data-tip="${t(`Zoom and pan the picture in its frame`)}"><span class="icon-resize-full"></span> ${t(`Position`)}</button>
          <button type="button" data-action="replace" class="${i===r?`pressed`:``}" data-tip="${t(`Give the icon a new picture: every use follows`)}"><span class="icon-upload"></span> ${t(`Replace`)}</button>
          <button type="button" data-action="remove" data-tip="${t(`Remove`)}"><span class="icon-trash-empty"></span></button>
        </div>`:``;return`<span class="preview">${s.html(r)}</span>
    <div class="about"><span class="name">${n(r?e(s.name(r)):t(`None`))}</span><span class="from">${u}</span></div>
    ${d}`}function L(e,r){let i=(e,t,i,a=``)=>`<button type="button" data-source="${n(e)}" class="${a} ${e===r?`active`:``}">${t}${i?` <small>${i}</small>`:``}</button>`,o=``,s=e.map(e=>{if(e.label===e.group)return i(e.key,F(e.group),e.icons.length,`section`);let t=e.group===o?``:`<div class="section">${F(e.group)}</div>`;return o=e.group,t+i(e.key,e.label,e.icons.length,`entry`)});return i(`custom`,t(`Custom`),a.all.length)+s.join(``)}function R(e,t,n=!1){return e.map(e=>{let r=e.icons.map(e=>U(e,t)).join(``);return`${n?`<h4>${e.label}</h4>`:``}<div class="choices">${r}</div>`}).join(``)}function z(e){for(let t of new Set(e.map(e=>e.set)))t&&s.retry(t)}function B(e,n,r){let i=e.map(e=>({...e,label:P(e),icons:e.icons.filter(e=>s.name(e).toLowerCase().includes(n))})).filter(e=>e.icons.length);return z(i),i.length?R(i,r,!0):`<p class="empty">${t(`No built-in icon is called “{{query}}”.`,{query:n})}</p>`}function V(e){return`<label class="glyphText">${t(`Type any short text`)}
      <input value="${n(s.glyphText(e)??``)}" placeholder="XIV" />
    </label>`}function H(e,n,r){let i=a.all.map(({id:t})=>U(t,e));return`<div class="customAdd">
      <input type="url" placeholder="${t(`Paste a link to an image`)}" data-tip="${t(`A linked image keeps the map small; it shows while its site serves it`)}" />
      <button type="button" data-action="link">${t(`Add link`)}</button>
      <button type="button" data-action="upload" data-tip="${t(r===`emblem`?`Upload an SVG file (up to 1 MB) or a PNG, JPEG or WebP image (up to 10 MB, shrunk to 1024 px)`:`Upload an SVG file (up to 200 kB) or a PNG, JPEG or WebP image (up to 2 MB, shrunk to 256 px)`)}">${t(`Upload`)}</button>
    </div>
    <div class="replacing" ${n?``:`hidden`}>${t(`Link or upload the new picture of the selected icon.`)} <a data-action="stopReplacing">${t(`Cancel`)}</a></div>
    ${i.length?`<div class="choices">${i.join(``)}</div>`:`<p class="empty">${t(`This map carries no custom icons yet.`)}</p>`}
    <div class="customArchive">
      ${i.length?`<button type="button" data-action="exportAll" data-tip="${t(`Download all custom icons as a zip archive, to import them into another map`)}">${t(`Download all`)}</button>`:``}
      <button type="button" data-action="importArchive" data-tip="${t(`Import custom icons from a downloaded zip archive. An icon whose id the map uses for another picture is replaced only on confirmation`)}">${t(`Import zip`)}</button>
    </div>
    <p class="note">${t(`Free icons`)}: <a href="https://game-icons.net" target="_blank" rel="noopener">game-icons.net</a>, <a href="https://thenounproject.com" target="_blank" rel="noopener">The Noun Project</a>, <a href="https://openmoji.org" target="_blank" rel="noopener">OpenMoji</a>, <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikimedia Commons</a>.</p>`}function U(t,r){let i=t===r?`pressed`:``,a=s.glyphText(t),o=a===null?s.html(t):n(a);return`<button type="button" class="${i}" data-icon="${n(t)}" data-tip="${n(e(s.name(t)))}">${o}</button>`}var W={open:A};export{W as IconPicker};
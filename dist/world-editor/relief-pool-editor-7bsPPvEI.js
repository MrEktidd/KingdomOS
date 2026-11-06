import{C as e,E as t,i as n,p as r,r as i}from"./index-J388_yXx.js";import{g as a,n as o}from"./options-model-Cj3O8K4p.js";import{j as s,t as c}from"./layers-D3_jdNGw.js";import{r as l}from"./node-utils-BA3zRxIe.js";import{t as u}from"./dialog-BYT3Byo1.js";import{o as d}from"./tooltips-D4kIN3ad.js";import{t as f}from"./controllers-COq_bdk_.js";import{p}from"./units-DInzt-GH.js";import{t as m}from"./biomes-generator-BTv9AVJs.js";import{n as h,o as g,r as _,t as v}from"./relief-previews-Dd4bQjw-.js";var y=`reliefPoolEditor`,b=250,x=5,S=`#d8d2bb`,C=`
  #${y} { padding: .4em .6em; }
  #${y} > div { width: auto; }
  #${y} .patch { position: relative; height: 7em; margin-bottom: .3em; border-radius: 4px; overflow: hidden; }
  #${y} .patch .art, #${y} .patch svg { display: block; width: 100%; height: 100%; }
  #${y} .patch .empty { display: grid; place-items: center; height: 100%; margin: 0; }
  #${y} .patch .shuffle { position: absolute; top: .3em; right: .3em; margin: 0; padding: .1em .3em; border: 0; border-radius: 3px; background: #ffffffb0; box-shadow: none; cursor: pointer; }
  #${y} .heights { display: flex; justify-content: space-between; font-size: .85em; opacity: .7; }
  #${y} .setting { display: flex; align-items: center; gap: .5em; margin: .3em 0; }
  #${y} .setting > span:first-child { width: 3.6em; }
  #${y} .setting slider-input { flex: 1; }
  #${y} .setting input[type=range] { flex: 1; min-width: 0; }
  #${y} .setting input[type=number] { width: 4em; }
  #${y} .entries { display: grid; gap: .2em; max-height: 16em; overflow-y: auto; margin: .5em 0 .6em; }
  #${y} .entry, #${y} .head { display: grid; grid-template-columns: 2em 1fr 3.8em 3.8em 3em 1.6em; align-items: center; gap: 1em; }
  #${y} .head { opacity: .7; }
  #${y} .head span:nth-child(n+3) { text-align: center; }
  #${y} .entry .preview { display: grid; place-items: center; font-size: 1.8em; }
  #${y} .entry .preview svg { width: 1em; height: 1em; overflow: visible; }
  #${y} .entry .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  #${y} .entry .share { text-align: right; opacity: .7; }
  #${y} .entry button { margin: 0; padding: 0; border: 0; background: none; box-shadow: none; cursor: pointer; }
  #${y} .empty { margin: .4em 0; font-style: italic; opacity: .7; }
  #${y} .caption { margin: .4em 0 .3em; font-size: .85em; opacity: .7; }
  #${y} .types { display: grid; grid-template-columns: repeat(7, 1fr); gap: .3em; }
  #${y} .types button { display: grid; place-items: center; aspect-ratio: 1; margin: 0; padding: 0; border: 1px solid transparent; border-radius: 4px; background: #0000000a; box-shadow: none; font-size: 1.9em; cursor: pointer; }
  #${y} .types button:hover { background: #00000017; }
  #${y} .types button svg { width: 1em; height: 1em; overflow: visible; pointer-events: none; }
  #${y} .actions { display: flex; gap: .3em; margin: .5em 0 0; }
  #${y} .actions button { margin: 0; }
  #${y} .any { flex: 1; }
`,w=e=>structuredClone(e);function T(e){if(`rule`in e){let{rule:t}=e,r=t.biomes?.length===1?pack.biomes[t.biomes[0]]:void 0,i=a.getDefaultRules().find(({name:e})=>e===t.name);return{title:n(`Relief rule: {{- rule}}`,{rule:t.name}),place:n(`the cells the {{- rule}} rule claims`,{rule:t.name}),draft:{icons:w(t.icons),density:t.density,size:{...t.size}},rule:t,color:r?.color??S,write:e=>{Object.assign(t,e),o.save()},defaults:i&&(()=>({icons:i.icons,density:i.density,size:i.size})),covers:e=>a.claim(e)===t,exists:()=>options.map.relief.rules.includes(t)}}let t=pack.biomes[e.biome];return{title:n(`Relief pool: {{- biome}}`,{biome:t.name}),place:n(`{{- biome}} lowland`,{biome:t.name}),draft:{icons:w(t.icons),density:t.iconsDensity},color:t.color??S,write:({icons:e,density:n})=>Object.assign(t,{icons:e,iconsDensity:n}),defaults:()=>{let t=m.getDefault()[e.biome];return{icons:t?.icons??{},density:t?.iconsDensity??0}},covers:t=>a.isPoolCell(t,e.biome),exists:()=>pack.biomes[e.biome]===t&&!t.removed}}function E(o){let s=T(o),{set:c}=styles.relief.options,m=s.draft,{rule:S}=s,E=1,O=m.size?`<div class="setting ruleSize" data-tip="${n(`Icon size at the rule's lowest height, growing with height up to the second value. Each entry's size scales it`)}">
        <span>${n(`Size`)}</span>
        <input type="number" data-bound="min" min="0.1" step="0.1" value="${m.size.min}" />–<input type="number" data-bound="max" min="0.1" step="0.1" value="${m.size.max}" />
      </div>`:``,k=S?`<div class="heights"><span>${p(S.height.min)}</span><span>${n(`Height`)}</span><span>${p(S.height.max)}</span></div>`:``;u.destroy(y),l(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${y}" class="dialog">
      <style>${C}</style>
      <div class="patch" style="background: color-mix(in srgb, ${r(s.color)} 55%, white)" data-tip="${n(`A sample of the relief the pool places, at the map's sizes and spacing`)}">
        <div class="art"></div>
        <button type="button" class="shuffle icon-shuffle" data-tip="${n(`Draw another sample`)}"></button>
      </div>
      ${k}
      <div class="setting density" data-tip="${n(`How packed the relief is. 0 places none`)}">
        <span>${n(`Density`)}</span>
        <slider-input min="0" max="${b}" step="1" value="${m.density}"></slider-input>
      </div>
      ${O}
      <div class="entries"></div>
      <div class="caption">${n(`Add a relief type, drawn in the style's relief set`)}</div>
      <div class="types">${a.types.map(({type:e,label:t})=>`<button type="button" data-entry="${e}" data-tip="${n(`Add {{icon}}`,{icon:t})}">${h(e,c)}</button>`).join(``)}</div>
      <div class="actions">
        <button type="button" class="any" data-tip="${n(`Add your own icon, an emoji or another set's art`)}">${n(`Add any icon…`)}</button>
        ${s.defaults?`<button type="button" class="restore icon-ccw" data-tip="${m.size?i(n(`Restore the default pool, density and size`),n(`Apply to keep it`)):i(n(`Restore the default pool and density`),n(`Apply to keep it`))}"></button>`:``}
      </div>
    </div>`);let A=l(y),j=A.querySelector(`.patch .art`),M=A.querySelector(`.entries`),N=A.querySelector(`slider-input`),P=()=>{let e=S&&m.size?{...S,size:m.size}:void 0;j.innerHTML=g(m.icons,m.density,e,E)||`<p class="empty">${n(`No relief: {{place}} stays bare`,{place:s.place})}</p>`},F=()=>Object.values(m.icons).reduce((e,{weight:t})=>e+t,0),I=e=>`${t(e/F()*100)}%`,L=()=>{M.innerHTML=F()?`<div class="head"><span></span><span></span><span>${n(`Weight`)}</span><span>${n(`Size`)}</span><span>${n(`Share`,{context:`portion`})}</span><span></span></div>`+Object.entries(m.icons).map(([e,{weight:t,size:i=1}])=>`<div class="entry" data-entry="${r(e)}">
              <span class="preview">${h(e,c)}</span>
              <span class="name">${r(_(e))}</span>
              <input type="number" class="weight" min="1" step="1" value="${t}" data-tip="${n(`Weight: how often the entry is picked, relative to the others`)}" />
              <input type="number" class="size" min="0.1" max="${x}" step="0.1" value="${i}" data-tip="${n(`Size: the entry's icons as a multiple of the pool's size`)}" />
              <span class="share" data-tip="${n(`Share of the pool's relief`)}">${I(t)}</span>
              <button type="button" class="icon-trash-empty" data-tip="${n(`Remove`)}"></button>
            </div>`).join(``):`<p class="empty">${n(`The pool is empty: {{place}} gets no relief`,{place:s.place})}</p>`,v(A,c),P()},R=e=>{let t=m.icons[e];m.icons[e]={...t,weight:(t?.weight??0)+1},L()},z=e=>e.closest(`.entry`)?.dataset.entry??null,B=(n,r)=>{let i=z(n);if(i===null||!m.icons[i])return!1;let a=Number(n.value);if(!r&&!(a>0))return!1;let o=m.icons[i];if(n.classList.contains(`weight`))o.weight=Math.max(1,Math.round(a)||1);else if(n.classList.contains(`size`)){let n=e(t(a||1,2),.1,x);n===1?delete o.size:o.size=n}return!0};A.querySelector(`.types`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-entry]`)?.dataset.entry;t&&R(t)}),A.querySelector(`.any`).addEventListener(`click`,()=>{f.IconPicker.open({current:``,onPick:e=>e&&R(e)})}),A.querySelector(`.shuffle`).addEventListener(`click`,()=>{E++,P()}),N.addEventListener(`input`,t=>{t.target===N&&(m.density=e(Math.round(N.valueAsNumber)||0,0,b),P())}),A.querySelector(`.ruleSize`)?.addEventListener(`change`,e=>{let t=e.target,n=t.dataset.bound,r=m.size;r[n]=Math.max(.1,Number(t.value)||r[n]),r.min>r.max&&(r[n===`min`?`max`:`min`]=r[n]),V(),P()});let V=()=>{for(let e of A.querySelectorAll(`.ruleSize input`))e.value=String(m.size[e.dataset.bound])};A.querySelector(`.restore`)?.addEventListener(`click`,()=>{let{icons:e,density:t,size:n}=s.defaults();Object.assign(m,{icons:w(e),density:t},n&&{size:{...n}}),N.value=String(t),n&&V(),L()}),M.addEventListener(`input`,e=>{let t=e.target;if(B(t,!1)){for(let e of M.querySelectorAll(`.entry`))e.querySelector(`.share`).textContent=I(m.icons[e.dataset.entry].weight);P()}}),M.addEventListener(`change`,e=>{B(e.target,!0)&&L()}),M.addEventListener(`click`,e=>{let t=z(e.target);t!==null&&e.target.classList.contains(`icon-trash-empty`)&&(delete m.icons[t],L())}),L();let H=()=>{m.density=e(Math.round(N.valueAsNumber)||0,0,b),s.write(m),o.onApply?.()},U=()=>u.close(y),W=()=>d(n(`{{target}} no longer exists: nothing is applied`,{target:s.title}),!1,`error`);u.open(y,{title:s.title,width:`28em`,position:{my:`center`,at:`center`,of:`svg`},buttons:[{label:n(`Apply`),onClick:()=>{s.exists()?H():W(),U()}},{label:n(`Apply and re-place`),onClick:()=>{s.exists()?D(s.place,s.covers,()=>{H(),U()}):(W(),U())}},{label:n(`Cancel`),onClick:U}]})}function D(e,t,r){let o=pack.relief?.length?a.iconsOn(t).length:0;u.confirm({title:n(`Re-place relief`),message:i(n(`Replace relief icons on {{place}} with new ones ({{icons}})?`,{place:e,icons:o}),n(`Relief elsewhere is kept`)),confirm:n(`Re-place`),onConfirm:()=>{r?.(),pack.relief?.length&&a.regenerate(t),c.isOn(`relief`)?s():c.show(`relief`)}})}var O={open:E};export{D as n,O as t};
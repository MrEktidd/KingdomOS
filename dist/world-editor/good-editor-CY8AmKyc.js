import{E as e,d as t,i as n,p as r,r as i}from"./index-J388_yXx.js";import{F as a,K as o,L as s,M as c,N as l,Q as u,Z as d,m as f}from"./options-model-Cj3O8K4p.js";import{nt as p,t as m}from"./layers-D3_jdNGw.js";import{o as h}from"./color-utils-MHXfGsIt.js";import{i as g,r as _}from"./node-utils-BA3zRxIe.js";import{t as v}from"./dialog-BYT3Byo1.js";import{o as y}from"./tooltips-D4kIN3ad.js";import{t as b}from"./controllers-COq_bdk_.js";import{t as x}from"./production-generator-BjobV-51.js";import{d as S}from"./app-8AGFuk3c.js";function C(s,d){let h={...s?.demandCoverage||{}},C={...s?.biomeOutput||{}},A=()=>{let e=l.map(e=>[e,h[e]??0]).filter(([,e])=>e>0);return e.length?e.map(([e,n])=>`${c[e]} ${t(u[e])}: ${n}`).join(`, `):n(`None`)},j=()=>{let e=Object.entries(C).filter(([,e])=>(e??0)>0);return e.length?e.map(([e,t])=>`${pack.biomes[Number(e)].name}: ${t}`).join(`, `):n(`None`)},M={cultureType:{...s?.multipliers?.cultureType??{}},culture:{...s?.multipliers?.culture??{}},state:{...s?.multipliers?.state??{}},religion:{...s?.multipliers?.religion??{}},biome:{...s?.multipliers?.biome??{}},zone:{...s?.multipliers?.zone??{}}},N=t=>{let r=M[t]??{},i=Object.entries(r).filter(([,e])=>e!==1);return i.length?i.map(([n,r])=>`${E(t,n)} ×${e(r,2)}`).join(`, `):n(`None`)},P=(e,t)=>`
      <label data-tip="${i(n(`Production multiplier by {{dimension}}`,{dimension:t.toLowerCase()}),w)}">${t}</label>
      <div class="ge-edit-row">
        <span id="mSummary_${e}">${N(e)}</span>
        <button class="mEdit icon-pencil ge-edit" data-dim="${e}" data-tip="${n(`Edit {{dimension}} multipliers`,{dimension:t})}"></button>
      </div>`,F=s?.recipes||[],I=s?.icon||`goods-unknown`,L;R(),f.retry(a.iconSet.id),v.open(`goodEditor`,{width:`30em`,title:n(s?`Edit good`:`Add`),footer:s?`<div class="dontAsk" data-tip="${n(`Re-place this good and recompute production, trade and taxes. Uncheck to update the good only, without disturbing the current economy.`)}">
          <input id="goodRegenerateEconomy" class="checkbox" type="checkbox" checked />
          <label for="goodRegenerateEconomy" class="checkbox-label"><i>${n(`regenerate economy on apply`)}</i></label>
        </div>`:void 0,buttons:[{label:n(`Cancel`),onClick:()=>{v.close(`goodEditor`)}},{label:n(s?`Apply`:`Add`),onClick:()=>{let e=[],t=_(`newGoodName`).value.trim(),r=_(`newGoodTags`).value.trim(),i=o.parse(r),c=+_(`newGoodValue`).value,l=+_(`newGoodChance`).value,u=_(`newGoodUnit`).value.trim(),f=_(`newGoodColor`).value,p=_(`newGoodDistribution`).textContent?.trim()??``;if(t||e.push(n(`Name is required`)),(!Number.isFinite(c)||c<0)&&e.push(n(`Value must be a valid non-negative number`)),(!Number.isFinite(l)||l<0||l>100)&&e.push(n(`Chance must be between 0 and 100`)),p)try{let e=a.getMethods(),t=`{${Object.keys(e).join(`, `)}}`;Function(t,`return ${p}`)(e)}catch(t){e.push(n(`Distribution function is invalid: {{- error}}`,{error:t.message||String(t)}))}for(let t of F){for(let[r,i]of Object.entries(t)){let t=Number(r),o=a.get(t);o||e.push(n(`Recipe references unknown good id: {{- id}}`,{id:t}));let s=Number(i);(Number.isNaN(s)||!Number.isFinite(s)||s<=0)&&e.push(n(`Invalid recipe amount for good {{- good}}`,{good:o?.name}))}Object.keys(t).length||e.push(n(`Each recipe must have at least one ingredient`))}if(_(`newGoodError`).textContent=e.join(`. `),e.length)return;function g(){let e={};for(let[t,n]of Object.entries(M)){let r=Object.fromEntries(Object.entries(n??{}).filter(([,e])=>e!==void 0&&e!==1));Object.keys(r).length&&(e[t]=r)}return Object.keys(e).length?e:void 0}if(s){let e=s.i;a.rename(e,t),a.setTags(e,i),a.setIcon(e,I),a.recolor(e,f),a.setPrice(e,c),a.setUnit(e,u),a.setProduction(e,{chance:l,demandCoverage:h,multipliers:g()??null,biomeOutput:Object.keys(C).length?C:null,recipes:F.length?F:null}),s.distribution=p||void 0,_(`goodRegenerateEconomy`).checked?(a.regeneratePlacement(s.i),x.regenerateEconomy(),m.draw(`markets`,`goods`),m.draw(`trade`),S()):a.sync()}else pack.goods.push({i:(()=>{let e=pack.goods?.at(-1)?.i??1;for(;a.get(e);)e++;return e})(),name:t,tags:i,icon:I,color:f,value:c,chance:l,unit:u,demandCoverage:h,multipliers:g(),distribution:p||void 0,biomeOutput:Object.keys(C).length?C:void 0,recipes:F.length?F:void 0}),a.sync();y(n(s?`Good is updated`:`Good is added`),!1,`success`,5e3),d?.(),v.close(`goodEditor`)}}]});function R(){v.destroy(`goodEditor`),_(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="goodEditor" class="dialog">
    <style>
      .ge                 { display:flex; width: auto !important; flex-direction:column; gap:9px; max-height:72vh; overflow-y:auto; padding-right:2px; }
      .ge-section-title   { display:flex; align-items:center; justify-content:space-between; font-weight:bold; text-transform:uppercase; font-size:.8em; letter-spacing:.06em; margin-bottom:7px; padding-bottom:4px; border-bottom:1px solid #666; }
      .ge-grid            { display:grid; grid-template-columns:9em minmax(0, 1fr); gap:.2em; align-items:center; }
      .ge-grid--top       { align-items:start; }
      .ge-grid > *        { min-width:0; }
      .ge-grid > label    { color:#555; }
      .ge-field           { width:100%; }
      input.ge-num        { width:6em; }
      .ge-inline          { display:flex; align-items:center; gap:.4em; }
      .ge-icon-select     { flex:1; min-width:0; display:flex; align-items:center; gap:.4em; margin:0; }
      .ge-icon-preview    { flex-shrink:0; }
      .ge-color           { width:2.4em; height:1.4em; padding:0; border:none; flex-shrink:0; }
      .ge-edit-row        { display:flex; align-items:flex-start; justify-content:space-between; gap:6px; }
      .ge-edit-row > span { flex:1; min-width:0; }
      .ge-edit            { flex-shrink:0; }
      .ge-dist            { flex:1; min-width:0; color:#555; font-size:.9em; font-family:var(--monospace); word-break:break-all; }
      .ge-note            { color:#777; font-style:italic; font-size:.9em; }
      .ge-error           { color:#b20000; min-height:1.2em; }
      .ge-recipe-list     { display:flex; flex-direction:column; gap:.45em; }
      .ge-recipe          { border:1px solid #ccc; border-radius:3px; }
      .ge-recipe-head     { display:flex; align-items:center; justify-content:space-between; padding:.2em .3em; }
      .ge-recipe-actions  { display:flex; gap:.3em; }
      .ge-recipe-ings     { display:flex; flex-direction:column; gap:.2em; padding:.3em .4em; }
      .ge-recipe-ing      { display:grid; grid-template-columns:1fr 5em 1.5em; gap:.25em; align-items:center; }
    </style>

    <div class="ge">
      <div>
        <div class="ge-section-title">${n(`General`)}</div>
        <div class="ge-grid">
          <label for="newGoodName">${n(`Name`)}*</label>
          <input id="newGoodName" class="ge-field" value="${s?.name||``}" />

          <label for="newGoodTags">${n(`Tags`)}</label>
          <input id="newGoodTags" class="ge-field" value="${o.format(s?.tags)}" placeholder="${n(`comma separated`)}" />

          <label for="newGoodValue">${n(`Base Price`)}*</label>
          <span class="ge-inline"><input id="newGoodValue" class="ge-num" type="number" min="0" step="1" value="${s?.value??1}" /> 🟡</span>

          <label for="newGoodChance">${n(`Chance`)}</label>
          <input id="newGoodChance" class="ge-num" type="number" min="0" max="100" step="0.1" value="${s?.chance??1}" />

          <label for="newGoodUnit">${n(`Unit`)}</label>
          <input id="newGoodUnit" class="ge-field" placeholder="${n(`e.g. wagon, barrel`)}" value="${s?.unit||``}" />

          <label for="newGoodIcon">${n(`Icon`)}*</label>
          <div class="ge-inline">
            <button id="newGoodIcon" type="button" class="ge-icon-select" data-tip="${n(`Select the good's icon`)}">
              <svg class="ge-icon-preview" width="2em" height="2em">
                <circle id="newGoodIconCircle" cx="50%" cy="50%" r="42%" fill="${s?.color||`#ff5959`}" stroke="${a.getStroke(s?.color||`#ff5959`)}"/>
                <use id="newGoodIconPreview" href="${r(f.href(I))}" x="10%" y="10%" width="80%" height="80%"${p()}/>
              </svg>
              <span id="newGoodIconName">${r(f.name(I))}</span>
            </button>
            <input id="newGoodColor" class="ge-color" type="color" data-tip="${n(`Set stroke color`)}" value="${s?.color||`#ff5959`}" />
          </div>

          <label data-tip="${n(`How much of each demand category this good satisfies. Click the pencil icon to edit.`)}">${n(`Demand Coverage`)}</label>
          <div class="ge-edit-row">
            <span id="demandCoverageSummary" >${A()}</span>
            <button class="dcEdit icon-pencil ge-edit" data-tip="${n(`Edit demand coverage`)}"></button>
          </div>
        </div>
      </div>

      <div>
        <div class="ge-section-title">${n(`Raw Production`)}</div>
        <div class="ge-grid ge-grid--top">
          <label data-tip="${n(`For raw resources: sets the baseline production per biome`)}">${n(`Rural production`)}</label>
          <div class="ge-edit-row">
            <span id="biomeProductionSummary">${j()}</span>
            <button class="bpEdit icon-pencil ge-edit" data-tip="${n(`Edit biome baseline production`)}"></button>
          </div>

          <label data-tip="${n(`For raw resources: controls where and how this good is produced directly from the environment (e.g. biome, elevation, temperature)`)}">${n(`Bonus distribution`)}</label>
          <div class="ge-edit-row">
            <div id="newGoodDistribution" class="ge-dist">${s?.distribution||``}</div>
            <button id="newGoodDistributionEditor" class="icon-pencil ge-edit" data-tip="${n(`Open the Distribution visual editor`)}"></button>
          </div>
        </div>
        <div id="newGoodRawNote" class="ge-note"></div>
      </div>

      <div>
        <div class="ge-section-title">
          <span data-tip="${n(`For manufactured goods: recipes define which other goods are required to produce this good`)}">${n(`Recipes`)}</span>
          <button id="newGoodAddRecipe" class="icon-plus" data-tip="${n(`Add`)}"></button>
        </div>
        <div id="newGoodRecipeList" class="ge-recipe-list"></div>
        <div id="newGoodRecipeNote" class="ge-note"></div>
      </div>

      <div>
        <div class="ge-section-title">
          <span data-tip="${i(n(`Per-dimension production multipliers`),w)}">${n(`Multipliers`)}</span>
        </div>
        <div class="ge-grid ge-grid--top">
          ${P(`cultureType`,T.cultureType)}
          ${P(`culture`,T.culture)}
          ${P(`state`,T.state)}
          ${P(`religion`,T.religion)}
          ${P(`biome`,T.biome)}
          ${P(`zone`,T.zone)}
        </div>
      </div>

      <div id="newGoodError" class="ge-error"></div>
    </div>
  </div>`),L=_(`goodEditor`);let e=_(`newGoodRecipeList`),t=pack.goods[0]?.i??0,c=[...pack.goods].sort((e,t)=>e.name.localeCompare(t.name)),l=()=>!Object.values(C).some(e=>(e??0)>0)&&!g(`newGoodDistribution`)?.textContent?.trim(),u=()=>{let e=l(),t=F.length===0,r=_(`newGoodRecipeNote`);r.textContent=n(`This good is raw-only: gathered from the environment.`),r.style.display=t&&!e?``:`none`;let i=_(`newGoodRawNote`);i.textContent=n(`This good is manufactured-only: made from recipes in burgs.`),i.style.display=e&&!t?``:`none`},d=()=>{e.innerHTML=F.map((e,t)=>`
          <div class="recipeOption ge-recipe" data-recipe-index="${t}" >
            <div class="ge-recipe-head">
              <span>${n(`Recipe {{number}}`,{number:t+1})}</span>
              <div class="ge-recipe-actions">
                <span class="recipeAddIngredient icon-plus pointer" data-recipe-index="${t}" data-tip="${n(`Add`)}"></span>
                <span class="recipeRemoveOption icon-trash-empty pointer" data-recipe-index="${t}" data-tip="${n(`Remove`)}"></span>
              </div>
            </div>
            <div class="recipeIngredients ge-recipe-ings">
              ${Object.entries(e).map(([e,r],i)=>`
                    <div class="ge-recipe-ing" data-recipe-index="${t}" data-ingredient-index="${i}">
                      <select class="recipeGoodSelect" data-recipe-index="${t}" data-ingredient-index="${i}">${c.map(t=>`<option value="${t.i}" ${t.i===Number(e)?`selected`:``}>${t.name}</option>`).join(``)}</select>
                      <input class="recipeAmountInput" data-recipe-index="${t}" data-ingredient-index="${i}" type="number" min="1" step="1" value="${r}" />
                      <span class="recipeRemoveIngredient icon-trash-empty pointer" data-recipe-index="${t}" data-ingredient-index="${i}" data-tip="${n(`Remove`)}" />
                    </div>`).join(``)}
            </div>
          </div>
        `).join(``),e.querySelectorAll(`.recipeGoodSelect`).forEach(e=>{e.onchange=()=>{let t=+e.value,n=+e.dataset.recipeIndex,r=+e.dataset.ingredientIndex,i=F[n],a=i[r]||0;delete i[r],i[t]=a,d()}}),e.querySelectorAll(`.recipeAmountInput`).forEach(e=>{e.onchange=()=>{let t=+e.dataset.recipeIndex,n=+e.dataset.ingredientIndex,r=F[t],i=Number(Object.keys(r)[n]);r[i]=+e.value}}),e.querySelectorAll(`.recipeAddIngredient`).forEach(e=>{e.onclick=n=>{n.preventDefault();let r=+e.dataset.recipeIndex,i=F[r],a=Object.keys(i).length?Math.max(...Object.keys(i).map(e=>+e))+1:t;i[a]=1,d()}}),e.querySelectorAll(`.recipeRemoveIngredient`).forEach(e=>{e.onclick=t=>{t.preventDefault();let n=+e.dataset.recipeIndex,r=+e.dataset.ingredientIndex,i=F[n];if(Object.keys(i).length>1){let e=Number(Object.keys(i)[r]);delete i[e],d()}}}),e.querySelectorAll(`.recipeRemoveOption`).forEach(e=>{e.onclick=t=>{t.preventDefault();let n=+e.dataset.recipeIndex;F.splice(n,1),d()}}),u()};d(),L.querySelectorAll(`.mEdit`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.dim;D(t,M[t]??{},e=>{M[t]=e;let n=g(`mSummary_${t}`);n&&(n.textContent=N(t))})})}),L.querySelector(`.dcEdit`).addEventListener(`click`,()=>{O({...h},e=>{Object.keys(h).forEach(e=>void delete h[e]),Object.assign(h,e);let t=g(`demandCoverageSummary`);t&&(t.textContent=A())})}),L.querySelector(`.bpEdit`).addEventListener(`click`,()=>{k({...C},e=>{Object.keys(C).forEach(e=>void delete C[+e]),Object.assign(C,e);let t=g(`biomeProductionSummary`);t&&(t.textContent=j()),u()})}),_(`newGoodAddRecipe`).addEventListener(`click`,e=>{e.preventDefault(),F.push({[t]:1}),d()}),_(`newGoodDistributionEditor`).addEventListener(`click`,()=>{let e=_(`newGoodDistribution`);b.DistributionEditor.open(t=>{e.textContent=t,u()},e.textContent?.trim()??``)});let m=e=>{I=e,_(`newGoodIconPreview`).setAttribute(`href`,f.href(e)),_(`newGoodIconName`).textContent=f.name(e)};_(`newGoodIcon`).onclick=()=>b.IconPicker.open({current:I,onPick:m});let y=_(`newGoodColor`);y.oninput=()=>{let e=_(`newGoodIconCircle`);e.setAttribute(`fill`,y.value),e.setAttribute(`stroke`,a.getStroke(y.value))}}}var w=`1 = ${n(`no effect`)}, 0 = ${n(`fully suppressed`)}`,T={cultureType:n(`Culture type`),culture:n(`Culture`),state:n(`State`),religion:n(`Religion`),biome:n(`Biome`),zone:n(`Zone`)};function E(e,t){return e===`cultureType`?d[t]??t:e===`culture`?pack.cultures[+t]?.name??`Culture ${t}`:e===`state`?pack.states[+t]?.name??`State ${t}`:e===`religion`?pack.religions[+t]?.name??`Religion ${t}`:e===`zone`?pack.zones.find(e=>e.i===+t)?.name??`Zone ${t}`:pack.biomes[+t]?.name??`Biome ${t}`}function D(e,t,r){let i,a;switch(e){case`cultureType`:i=s.map(e=>({id:e,name:d[e]??e})),a=T.cultureType;break;case`culture`:i=pack.cultures.filter(e=>e.i&&!e.removed).map(e=>({id:String(e.i),name:e.name,color:e.color})),a=T.culture;break;case`state`:i=pack.states.filter(e=>e.i&&!e.removed).map(e=>({id:String(e.i),name:e.fullName||e.name,color:e.color})),a=T.state;break;case`religion`:i=pack.religions.filter(e=>e.i&&!e.removed).map(e=>({id:String(e.i),name:e.name,color:e.color})),a=T.religion;break;case`biome`:i=pack.biomes.filter(e=>!e.removed).map(({i:e,name:t,color:n})=>({id:String(e),name:t,color:n})),a=T.biome;break;case`zone`:i=pack.zones.map(e=>({id:String(e.i),name:e.name,color:e.color})),a=T.zone}let o=i.map(e=>{let n=t[e.id]??1;return`${`<fill-box fill="${e.color||h()}" size="1em" disabled data-tip="${e.name}"></fill-box>`}<span>${e.name}</span><input type="number" class="mPopupInput" data-id="${e.id}" min="0" step="0.1" style="width:5em;" value="${n}" />`}),c=document.createElement(`div`);c.innerHTML=`<div style="max-height:320px; overflow-y:auto; padding:.2em;">${o.length?`<div style="display:grid; grid-template-columns:auto 1fr 5em; gap:.3em .5em; align-items:center;">${o.join(``)}</div>`:`<div style="color:#777; font-style:italic;">${n(`No options available`)}</div>`}</div>`,v.message({id:`goodMultipliers`,message:c,title:n(`{{- dimension}} multipliers`,{dimension:a}),width:`22em`,buttons:[{label:n(`Cancel`)},{label:n(`Apply`),onClick:()=>{let e=Array.from(c.querySelectorAll(`.mPopupInput`)),t={};for(let n of e){let e=n.dataset.id,r=Number(n.value);Number.isFinite(r)&&r>=0&&r!==1&&(t[e]=r)}r(t)}}]})}function O(e,r){let i=l.map(n=>{let r=e[n]??0;return`<span>${c[n]} ${t(u[n])}</span><input type="number" class="dcPopupInput" data-cat="${n}" min="0" step="0.05" style="width:5em;" value="${r}" />`}).join(``),a=document.createElement(`div`);a.innerHTML=`<div style="display:grid;grid-template-columns:1fr 5em;gap:.3em .5em;align-items:center;padding:.2em;">${i}</div>`,v.message({id:`goodDemandCoverage`,message:a,title:n(`Demand Coverage`),width:`18em`,buttons:[{label:n(`Cancel`)},{label:n(`Apply`),onClick:()=>{let e={};a.querySelectorAll(`.dcPopupInput`).forEach(t=>{let n=t.dataset.cat,r=Number(t.value);Number.isFinite(r)&&r>0&&(e[n]=r)}),r(e)}}]})}function k(e,t){let r=pack.biomes.filter(e=>!e.removed).map(({i:t,name:n})=>`<span>${n}</span><input type="number" class="bpPopupInput" data-id="${t}" min="0" step="0.01" style="width:5em;" value="${e[t]??0}" />`).join(``),i=document.createElement(`div`);i.innerHTML=`<div style="max-height:320px;overflow-y:auto;padding:.2em;"><div style="display:grid;grid-template-columns:1fr 5em;gap:.3em .5em;align-items:center;">${r}</div></div>`,v.message({id:`goodBiomeProduction`,message:i,title:n(`Biome Baseline Production`),width:`22em`,buttons:[{label:n(`Cancel`)},{label:n(`Apply`),onClick:()=>{let e={};i.querySelectorAll(`.bpPopupInput`).forEach(t=>{let n=Number(t.dataset.id),r=Number(t.value);Number.isFinite(r)&&r>0&&(e[n]=r)}),t(e)}}]})}var A={open:C};export{A as GoodEditor};
import{D as e,E as t,i as n,r}from"./index-J388_yXx.js";import{K as i,V as a}from"./options-model-Cj3O8K4p.js";import{c as o,s}from"./notices-DWyx0Rz8.js";import{at as c,t as l}from"./layers-D3_jdNGw.js";import{l as u}from"./file-utils-CmE_irX5.js";import{i as d,r as f,z as p}from"./node-utils-BA3zRxIe.js";import{t as m}from"./csv-DubBayaC.js";import{t as h}from"./stratify-CGdiYggi.js";import{t as g}from"./pack-CyBKcrr4.js";import{n as _,t as v}from"./dialog-BYT3Byo1.js";import{o as y}from"./tooltips-D4kIN3ad.js";import{t as b}from"./controllers-COq_bdk_.js";import{s as x}from"./production-generator-BjobV-51.js";import{n as S,p as C,v as w}from"./units-DInzt-GH.js";import{d as T}from"./zoom-xenRyT_z.js";import{c as E,s as ee}from"./app-8AGFuk3c.js";import{a as te,i as ne,n as D,r as O}from"./table-DIPbIlqo.js";import{t as k}from"./highlighting-DhOzxliE.js";var A=`burgsOverview`,j=`Id.Burg.Province.Province Full Name.State.State Full Name.Culture.Religion.Group.Type.Population.Market.Product.Wealth.Treasury.X.Y.Latitude.Longitude.Elevation.Temperature.Temperature likeness.Capital.Port.Citadel.Walls.Plaza.Temple.Shanty Town.Emblem.Preview link.Tags`.split(`.`),M={my:`right top`,at:`right-10 top+10`,of:`svg`},N,P=[{key:`locate`,width:`0.8em`,permanent:!0},{key:`name`,label:n(`Burg`),width:`8em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`province`,label:n(`Province`),width:`8em`,hidden:!0,mobileHidden:!0,sortType:`alpha`,sortBy:e=>{let t=pack.cells.province[e.cell];return t&&pack.provinces[t]?.name||``}},{key:`state`,label:n(`State`),width:`8em`,sortBy:e=>pack.states[e.state]?.name||``,sortType:`alpha`},{key:`culture`,label:n(`Culture`),width:`10em`,mobileHidden:!0,sortBy:e=>pack.cultures[e.culture]?.name||``,sortType:`alpha`},{key:`group`,label:n(`Group`),width:`6em`,mobileHidden:!0,sortBy:e=>e.group||``,sortType:`alpha`},{key:`population`,label:n(`Population`),width:`7em`,defaultSort:`desc`,sortBy:e=>e.population*options.map.units.population.scale*options.map.units.population.urbanization.rate},{key:`grossproduct`,label:n(`Product`),width:`6.5em`,hidden:!0,mobileHidden:!0,sortBy:e=>t(e.product||0,2)},{key:`productpercapita`,label:n(`Wealth`),width:`6.5em`,mobileHidden:!0,tip:n(`Click to sort by burg wealth (gross product per capita)`),sortBy:e=>t(e.population>0?(e.product||0)/e.population:0,2)},{key:`treasury`,label:n(`Treasury`),width:`6.5em`,mobileHidden:!0,sortBy:e=>t(e.treasury||0,2)},{key:`features`,label:n(`Features`,{context:`burg`}),width:`6em`,mobileHidden:!0,sortType:`alpha`,sortBy:e=>e.capital&&e.port?`a-capital-port`:e.capital?`c-capital`:e.port?`p-port`:`z-burg`},{key:`tags`,label:n(`Tags`),width:`10em`,hidden:!0,sortBy:e=>i.format(e.tags),sortType:`alpha`},{key:`edit`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],F=O({getData:()=>E(A,V(),P),onUpdate:H});function re(e={}){options.app.mode||(N=_.get(A,`filters`,()=>({search:``,stateId:-1,cultureId:-1})),v.closeAll(`#${A}, .stable`),l.show(`burgIcons`,`labels`),e.stateId!=null&&(N.stateId=e.stateId),e.cultureId!=null&&(N.cultureId=e.cultureId),I(),z(),se(),F.reset(),v.open(A,{title:n(`Burgs Overview`),onClose:L,width:`fit-content`,position:M}))}function I(){v.destroy(`burgsOverview`);let e=`<div id="burgsOverview" class="dialog stable editorDialog">
      <div id="burgsBody" class="table">${ne({dialogId:A,columns:P})}</div>
      <div id="burgsFilters" data-tip="${n(`Apply a filter`)}" class="editorFilters">
        <label for="burgsSearch" data-tip="${n(`Filter by name, province, state, culture, group, or tag`)}"
          >${n(`Search`)}: <input id="burgsSearch" type="search"
        /></label>
        <label for="burgsFilterState"
          >${n(`State`)}:
          <select id="burgsFilterState"></select
        ></label>
        <label for="burgsFilterCulture"
          >${n(`Culture`)}:
          <select id="burgsFilterCulture"></select
        ></label>
      </div>
      <div id="burgsFooter" class="totalLine">
        <div data-tip="${n(`Burgs displayed`)}" style="margin-left: 5px">
          ${n(`Burgs`)}:&nbsp;<span id="burgsFooterBurgs">${n(`{{shown}} of {{total}}`,{shown:0,total:0})}</span>
        </div>
        <div data-tip="${n(`Average population`)}" style="margin-left: 12px" data-col="population">
          ${n(`Avg population`)}:&nbsp;<span id="burgsFooterPopulation">0</span>
        </div>
        <div data-tip="${n(`Average gross product`)}" style="margin-left: 12px" data-col="grossproduct">
          ${n(`Avg product`)}:&nbsp;<span id="burgsFooterGrossProduct">0</span> 🟡
        </div>
        <div data-tip="${n(`Average wealth (product per capita)`)}" style="margin-left: 12px" data-col="productpercapita">
          ${n(`Avg wealth`)}:&nbsp;<span id="burgsFooterProductPerCapita">0</span> 🟡
        </div>
        <div data-tip="${n(`Average treasury`)}" style="margin-left: 12px" data-col="treasury">
          ${n(`Avg treasury`)}:&nbsp;<span id="burgsFooterTreasury">0</span> 🟡
        </div>
      </div>
      <div id="burgsBottom" class="editorToolbar">
        <button id="burgsOverviewRefresh" data-tip="${n(`Refresh`)}" class="icon-cw"></button>
        <button id="burgsGroupsEditorButton" data-tip="${n(`Edit burg groups`)}" class="icon-cog"></button>
        <button id="burgsChart" data-tip="${n(`Burgs bubble chart`)}" class="icon-chart-area"></button>
        <button
          id="regenerateBurgNames"
          data-tip="${n(`Regenerate burg names based on assigned culture`)}"
          class="icon-retweet"
        ></button>
        <button id="addNewBurg" data-tip="${r(n(`Add`),n(`Hold Shift to add multiple`))}" class="icon-plus"></button>
        <button
          id="burgsExport"
          data-tip="${n(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="burgsImport" data-tip="${n(`Upload data from a CSV file`)}" class="icon-upload"></button>
        <button id="burgsLockAll" data-tip="${n(`Lock or unlock all burgs`)}" class="icon-lock"></button>
        <button
          id="burgsRemoveAll"
          data-tip="${n(`Remove all unlocked burgs except for capitals. To remove a capital remove its state first`)}"
          class="icon-trash"
        ></button>
      </div>
    </div>`;f(`dialogs`).insertAdjacentHTML(`beforeend`,e),f(`burgsSearch`).value=N.search,ee(A,F.reset),k(A,({target:e,cellId:t})=>{let n=pack.cells.burg[t];if(n)return n;let r=e.closest(`#labels [data-label-type='burg'][data-id], #burgIcons [data-id]`);return r?Number(r.dataset.id):void 0}),D({dialogId:A,columns:P,onUpdate:()=>v.update(A,{width:`fit-content`,position:M})}),f(`burgsOverviewRefresh`).addEventListener(`click`,R),f(`burgsGroupsEditorButton`).addEventListener(`click`,()=>b.BurgGroupEditor.open()),f(`burgsChart`).addEventListener(`click`,Z),f(`burgsFilterState`).addEventListener(`change`,B),f(`burgsFilterCulture`).addEventListener(`change`,B),f(`burgsSearch`).addEventListener(`input`,B),f(`regenerateBurgNames`).addEventListener(`click`,ie),f(`addNewBurg`).addEventListener(`click`,()=>void b.BurgCreator.toggle()),f(`burgsExport`).addEventListener(`click`,Q),f(`burgsImport`).addEventListener(`click`,()=>m.pick(le)),f(`burgsLockAll`).addEventListener(`click`,oe),f(`burgsRemoveAll`).addEventListener(`click`,ae)}function L(){d(`addBurgTool`)?.classList.contains(`pressed`)&&b.BurgCreator.stop(),v.destroy(`burgsOverview`)}function R(){z(),F.reset()}function z(){let e=f(`burgsFilterState`);new Set(pack.states.filter(e=>!e.removed).map(e=>e.i)).has(N.stateId)||(N.stateId=-1),e.options.length=0,e.options.add(new Option(n(`All`),`-1`,!1,N.stateId===-1)),e.options.add(new Option(pack.states[0].name,`0`,!1,N.stateId===0)),pack.states.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name>t.name?1:-1).forEach(t=>void e.options.add(new Option(t.name,String(t.i),!1,t.i===N.stateId)));let t=f(`burgsFilterCulture`);new Set(pack.cultures.filter(e=>!e.removed).map(e=>e.i)).has(N.cultureId)||(N.cultureId=-1),t.options.length=0,t.options.add(new Option(n(`All`),`-1`,!1,N.cultureId===-1)),t.options.add(new Option(pack.cultures[0].name,`0`,!1,N.cultureId===0)),pack.cultures.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name>t.name?1:-1).forEach(e=>void t.options.add(new Option(e.name,String(e.i),!1,e.i===N.cultureId))),_.set(A,`filters`,N)}function B(){N.search=f(`burgsSearch`).value,N.stateId=+f(`burgsFilterState`).value,N.cultureId=+f(`burgsFilterCulture`).value,_.set(A,`filters`,N),F.reset()}function V(){let e=N.search.toLowerCase().trim(),t=pack.burgs.filter(e=>e.i&&!e.removed);return e&&(t=t.filter(t=>{let n=pack.states[t.state]?.name||``,r=pack.cells.province[t.cell],a=r&&pack.provinces[r]?.name||``,o=pack.cultures[t.culture]?.name||``;return i.matches(e,t.name,t.tags,[n,a,o,t.group])})),N.stateId!==-1&&(t=t.filter(e=>e.state===N.stateId)),N.cultureId!==-1&&(t=t.filter(e=>e.culture===N.cultureId)),t}function H(r){let a=f(`burgsBody`),o=pack.burgs.filter(e=>e.i&&!e.removed).length;a.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()});let s=``,c=0,l=0,u=0,d=0;for(let e of r.all){let n=e.population*options.map.units.population.scale*options.map.units.population.urbanization.rate,r=t(e.product||0,2),i=t(e.population>0?(e.product||0)/e.population:0,2),a=t(e.treasury||0,2);c+=n,l+=r,u+=i,d+=a}for(let a of r.rows){let r=a.population*options.map.units.population.scale*options.map.units.population.urbanization.rate,o=t(a.product||0,2),c=t(a.population>0?(a.product||0)/a.population:0,2),l=t(a.treasury||0,2),u=a.capital&&a.port?`a-capital-port`:a.capital?`c-capital`:a.port?`p-port`:`z-burg`,d=pack.states[a.state].name,f=pack.cells.province[a.cell],p=f?pack.provinces[f].name:``,m=pack.cultures[a.culture].name;s+=`<div
        class="states"
        data-id=${a.i}
        data-name="${a.name}"
        data-state="${d}"
        data-province="${p}"
        data-culture="${m}"
        data-group="${a.group}"
        data-population=${r}
        data-grossproduct=${o}
        data-productpercapita=${c}
        data-treasury=${l}
        data-features="${u}"
      >
        <span data-tip="${n(`Click to zoom`)}" class="icon-dot-circled pointer" data-col="locate"></span>
        <input data-tip="${n(`Name`)}" class="burgName" value="${a.name}" data-col="name" disabled />
        <input data-tip="${n(`Burg province`)}" value="${p}" data-col="province" disabled />
        <input data-tip="${n(`Burg state`)}" value="${d}" data-col="state" disabled />
        <input data-tip="${n(`Dominant culture`)}" value="${m}" data-col="culture" disabled />
        <input data-tip="${n(`Burg group`)}" value="${a.group}" data-col="group" disabled />
        <div data-col="population">
          <span data-tip="${n(`Burg population`)}" class="icon-male"></span>
          <input data-tip="${n(`Burg population`)}" value=${e(r)} disabled />
        </div>
        <div data-col="grossproduct">
          <span data-tip="${n(`Gross Product: local sale revenue minus purchased ingredient costs during the production.`)}">🟡</span>
          <input data-tip="${n(`Gross Product: local sale revenue minus purchased ingredient costs during the production.`)}" value=${o} disabled />
        </div>
        <div data-col="productpercapita">
          <span data-tip="${n(`Wealth: gross product divided by population`)}">🟡</span>
          <input data-tip="${n(`Wealth: gross product divided by population`)}" value=${c} disabled />
        </div>
        <div data-col="treasury">
          <span data-tip="${n(`Treasury: accumulated cash balance`)}">🟡</span>
          <input data-tip="${n(`Treasury: accumulated cash balance`)}" value=${l} disabled />
        </div>
        <div data-col="features">
          <span
            data-tip="${a.capital?n(`This burg is a state capital`):n(`This burg is NOT a state capital`)}"
            class="icon-star-empty${a.capital?``:` inactive`}" style="padding: 0 1px;"></span>
          <span data-tip="${a.port?n(`This burg is a port`):n(`This burg is NOT a port`)}"
          class="icon-anchor${a.port?``:` inactive`}" style="font-size: .9em; padding: 0 1px;"></span>
        </div>
        <div data-col="tags">
          <input
            data-tip="${n(`Tags (comma-separated)`)}"
            class="burgTags"
            value="${i.format(a.tags)}"
            placeholder="${n(`Tags`)}"
            autocorrect="off"
            spellcheck="false"
          />
        </div>
        <span data-col="edit" data-tip="${n(`Edit Burg`)}" class="icon-pencil"></span>
        <span data-col="lock" class="locks pointer ${a.lock?`icon-lock`:`icon-lock-open inactive`}" data-lock-tip></span>
        <span data-col="remove" data-tip="${n(`Remove`)}" class="icon-trash-empty"></span>
      </div>`}a.insertAdjacentHTML(`beforeend`,s),f(`burgsFooterBurgs`).innerHTML=n(`{{shown}} of {{total}}`,{shown:r.all.length,total:o}),f(`burgsFooterPopulation`).innerHTML=r.all.length?e(c/r.all.length):`0`,f(`burgsFooterGrossProduct`).innerHTML=r.all.length?String(t(l/r.all.length,2)):`0`,f(`burgsFooterProductPerCapita`).innerHTML=r.all.length?String(t(u/r.all.length,2)):`0`,f(`burgsFooterTreasury`).innerHTML=r.all.length?String(t(d/r.all.length,2)):`0`,te(f(`burgsFooter`),r,F.goto),a.querySelectorAll(`div.states`).forEach(e=>void e.addEventListener(`mouseenter`,e=>W(e))),a.querySelectorAll(`div.states`).forEach(e=>void e.addEventListener(`mouseleave`,()=>G())),a.querySelectorAll(`div > span.icon-dot-circled`).forEach(e=>void e.addEventListener(`click`,K)),a.querySelectorAll(`div > span.locks`).forEach(e=>void e.addEventListener(`click`,q)),a.querySelectorAll(`div > span.icon-pencil`).forEach(e=>void e.addEventListener(`click`,J)),a.querySelectorAll(`div > input.burgTags`).forEach(e=>void e.addEventListener(`change`,U)),a.querySelectorAll(`div > span.icon-trash-empty`).forEach(e=>void e.addEventListener(`click`,Y))}function U(){let e=this.closest(`.states`),t=Number(e.dataset.id),n=pack.burgs[t];n&&(i.set(n,this.value),this.value=i.format(n.tags),N.search&&F.refresh())}function W(e){let t=+e.target.dataset.id,n=p(`#labels`).select(`[data-label-type='burg'][data-id='${t}']`);n.size()&&n.classed(`drag`,!0)}function G(){p(`#labels`).selectAll(`text[data-label-type='burg'].drag`).classed(`drag`,!1)}function K(){let e=+this.closest(`.states`).dataset.id,{x:t,y:n}=pack.burgs[e];T(t,n,8,2e3)}function q(){let e=+this.closest(`.states`).dataset.id;a.setLocked(e,!pack.burgs[e].lock),this.classList.contains(`icon-lock`)?(this.classList.remove(`icon-lock`),this.classList.add(`icon-lock-open`),this.classList.add(`inactive`)):(this.classList.remove(`icon-lock-open`),this.classList.add(`icon-lock`),this.classList.remove(`inactive`))}function J(){let e=+this.closest(`.states`).dataset.id;b.BurgEditor.open(e)}function Y(){let e=+this.closest(`.states`).dataset.id;pack.burgs[e].capital?y(r(n(`You cannot remove the capital`),n(`You must change the state capital first`)),!1,`error`):pack.markets?.some(t=>t.centerBurgId===e)?y(n(`You cannot remove a market center burg. Please remove the market first`),!1,`error`):v.confirm({title:n(`Remove`),message:`${n(`Are you sure you want to remove the burg?`)}<br>${n(`This action cannot be reverted`)}`,confirm:n(`Remove`),onConfirm:()=>{a.remove(e),c(`burg`,e),F.refresh(),l.draw(`burgIcons`,`labels`)}})}function ie(){for(let e of V())e.lock||(e.name=u.getCulture(e.culture));F.refresh(),l.draw(`labels`)}var X=(e,t)=>h().id(e=>String(e.id)).parentId(e=>{let n=t(e);return n==null?n:String(n)})(e).sum(e=>e.population??0).sort((e,t)=>t.value-e.value);function Z(){let t=pack.states.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i,state:e.i?0:null,color:t,name:n}}),r=pack.burgs.filter(e=>e.i&&!e.removed).map(e=>{let n=e.i+t.length-1,r=e.population,i=e.capital,a=pack.cells.province[e.cell],o=a?a+t.length-1:e.state;return{id:n,i:e.i,state:e.state,culture:e.culture,province:a,parent:o,name:e.name,population:r,capital:i,x:e.x,y:e.y}}),i=[...t,...r];if(i.length<2){y(n(`No burgs to show`),!1,`error`);return}let a=X(i,e=>e.state),o=f(`uiSize`).valueAsNumber,s=150+200*o,c=150+200*o,l={top:0,right:-50,bottom:-10,left:-50},u=s-l.left-l.right,d=c-l.top-l.bottom,m=g().size([u,d]).padding(3),h=document.createElement(`div`);h.innerHTML=`<select id="burgsTreeType" style="display:block; margin-left:13px; font-size:11px">
      <option value="states" selected>${n(`Group by state`)}</option>
      <option value="cultures">${n(`Group by culture`)}</option>
      <option value="parent">${n(`Group by province and state`)}</option>
      <option value="provinces">${n(`Group by province`)}</option>
    </select><div id='burgsInfo' class='chartInfo'>&#8205;</div>`;let _=p(h).insert(`svg`,`#burgsInfo`).attr(`id`,`burgsTree`).attr(`width`,s).attr(`height`,c-10).attr(`stroke-width`,2).append(`g`).attr(`transform`,`translate(-50, -10)`);h.querySelector(`#burgsTreeType`).addEventListener(`change`,C);let b=_.selectAll(`circle`).data(m(a).leaves()).join(`circle`).attr(`data-id`,e=>e.data.i??null).attr(`r`,e=>e.r).attr(`fill`,e=>e.parent.data.color).attr(`cx`,e=>e.x).attr(`cy`,e=>e.y).on(`mouseenter`,(e,t)=>x(e,t)).on(`mouseleave`,e=>S(e)).on(`click`,(e,t)=>T(t.data.x,t.data.y,8,2e3));function x(t,r){p(t.target).transition().duration(1500).attr(`stroke`,`#c13119`);let i=r.data.name,a=r.parent.data.name,o=e(r.value*options.map.units.population.scale*options.map.units.population.urbanization.rate);f(`burgsInfo`).innerHTML=`${i}. ${a}. ${`${n(`Population`)}: ${o}`}`,W(t),y(n(`Click to zoom`))}function S(e){G(),f(`burgsInfo`)&&(f(`burgsInfo`).innerHTML=`&#8205;`,p(e.target).transition().attr(`stroke`,null),y(``))}function C(){let e=()=>pack.states.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i,state:e.i?0:null,color:t,name:n}}),t=()=>pack.cultures.map(e=>{let t=e.color?e.color:`#ccc`;return{id:e.i,culture:e.i?0:null,color:t,name:e.name}}),n=()=>{let e=pack.states.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i,parent:e.i?0:null,color:t,name:n}}),t=pack.provinces.filter(e=>e.i&&!e.removed).map(t=>({id:t.i+e.length-1,parent:t.state,color:t.color,name:t.fullName}));return[...e,...t]},i=()=>pack.provinces.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i?e.i:0,province:e.i?0:null,color:t,name:n}}),a=e=>{if(this.value===`states`)return e.state;if(this.value===`cultures`)return e.culture;if(this.value===`parent`)return e.parent;if(this.value===`provinces`)return e.province},o={states:e,cultures:t,parent:n,provinces:i}[this.value]();r.forEach(e=>{e.id=e.i+o.length-1});let s=X([...o,...r],a);b.data(m(s).leaves()).transition().duration(2e3).attr(`data-id`,e=>e.data.i??null).attr(`fill`,e=>e.parent.data.color).attr(`cx`,e=>e.x).attr(`cy`,e=>e.y).attr(`r`,e=>e.r)}v.message({message:h,title:n(`Burgs bubble chart`),width:`fit-content`,position:{my:`left bottom`,at:`left+10 bottom-10`,of:`svg`},buttons:[]})}function Q(){let{coordinates:e}=options.map.geography,{scale:n,urbanization:r}=options.map.units.population,c=j.map(e=>e===`Elevation`?`Elevation (${options.map.units.height.unit})`:e),l=pack.burgs.filter(e=>e.i&&!e.removed).map(c=>{let l=pack.provinces[pack.cells.province[c.cell]],u=grid.cells.temp[pack.cells.g[c.cell]],d=x.get(c.market);return[c.i,c.name,l?.i?l.name:``,l?.i?l.fullName:``,pack.states[c.state].name,pack.states[c.state].fullName,pack.cultures[c.culture].name,pack.religions[pack.cells.religion[c.cell]].name,c.group,c.type,t(c.population*n*r.rate),d?x.getName(d):``,t(c.product||0,2),t(c.population>0?(c.product||0)/c.population:0,2),t(c.treasury||0,2),c.x,c.y,s(c.y,e,options.map.graph.height,2),o(c.x,e,options.map.graph.width,2),parseInt(C(pack.cells.h[c.cell]),10),S(u),w(u),c.capital?`capital`:``,c.port?`port`:``,c.citadel?`citadel`:``,c.walls?`walls`:``,c.plaza?`plaza`:``,c.temple?`temple`:``,c.shanty?`shanty town`:``,c.coa?JSON.stringify(c.coa).replace(/"/g,``).replace(/,/g,`;`):``,a.getPreview(c).link,i.format(c.tags)]});m.download(`Burgs`,c,l)}function ae(){let e=()=>pack.burgs.filter(e=>e.i&&!e.removed&&!(e.capital||e.lock)&&!pack.markets?.some(t=>t.centerBurgId===e.i));v.confirm({title:n(`Remove burgs ({{burgs}})`,{burgs:e().length}),message:`${n(`Are you sure you want to remove all unlocked burgs except for capitals and market centers?`)}<br><i>${n(`To remove a capital you have to remove its state first`)}</i>`,confirm:n(`Remove`),onConfirm:()=>{for(let t of e())a.remove(t.i),c(`burg`,t.i);F.refresh(),l.draw(`burgIcons`,`labels`)}})}function oe(){let e=pack.burgs.filter(e=>e.i&&!e.removed),t=e.every(e=>e.lock);for(let n of e)a.setLocked(n.i,!t);F.refresh(),f(`burgsLockAll`).className=t?`icon-lock`:`icon-lock-open`}function se(){let e=pack.burgs.every(({lock:e,i:t,removed:n})=>e||!t||n);f(`burgsLockAll`).className=e?`icon-lock-open`:`icon-lock`}var ce=[[`Citadel`,`citadel`],[`Walls`,`walls`],[`Plaza`,`plaza`],[`Temple`,`temple`],[`Shanty Town`,`shanty`]];async function le(e){let{scale:n,urbanization:r}=options.map.units.population,o=e=>e&&pack.burgs[e]&&!pack.burgs[e].removed?pack.burgs[e]:void 0,s=pack.burgs.filter(e=>e?.i&&!e.removed),c=new Set(s.filter(e=>e.capital).map(e=>e.i)),u=new Map(s.map(e=>[e.i,a.getPreview(e).link]));await b.CsvUpload.update(e,j,{find:o,units:[`Elevation`],text:[`Burg`,`Tags`]},(e,s)=>{let l=o(e);s.apply(`Burg`,t=>a.rename(e,t),l.name),s.apply(`Culture`,t=>a.setCulture(e,m.byName(pack.cultures,t).i),pack.cultures[l.culture]?.name),s.apply(`Group`,t=>a.setGroup(e,t),l.group),s.apply(`Type`,t=>a.setType(e,t),l.type),s.apply(`Population`,t=>a.setPopulation(e,+t),t(l.population*n*r.rate)),s.apply(`Treasury`,t=>a.setTreasury(e,+t),t(l.treasury||0,2)),s.apply(`Capital`,()=>a.setCapital(e),c.has(e)?`capital`:``),s.assign(`Port`,t=>a.setPort(e,!!t),l.port?`port`:``);for(let[t,n]of ce)s.assign(t,t=>a.setBuilding(e,n,!!t),l[n]?t.toLowerCase():``);s.apply(`Preview link`,t=>a.setLink(e,t),u.get(e)),s.assign(`Tags`,e=>i.set(l,e),i.format(l.tags))})&&(l.draw(`burgIcons`,`labels`,`emblems`,`population`),R())}var $={open:re,showChart:Z,exportCsv:Q};export{$ as BurgsOverview};
import{D as e,d as t,i as n,r}from"./index-J388_yXx.js";import{K as i,Mt as a,m as o,o as s}from"./options-model-Cj3O8K4p.js";import{t as c}from"./pack-generator-BfWP9wix.js";import{c as l,s as u,y as d}from"./notices-DWyx0Rz8.js";import{F as f,t as p}from"./layers-D3_jdNGw.js";import{a as m,i as h,r as g,z as _}from"./node-utils-BA3zRxIe.js";import{t as v}from"./csv-DubBayaC.js";import{n as y,t as b}from"./dialog-BYT3Byo1.js";import{t as x}from"./viewbox-events-Hxiu3rT6.js";import{o as S,t as C}from"./tooltips-D4kIN3ad.js";import{t as w}from"./controllers-COq_bdk_.js";import{c as T,s as E}from"./app-8AGFuk3c.js";import{a as D,i as O,n as k,r as A}from"./table-DIPbIlqo.js";var j=`regimentsOverview`,M={my:`right top`,at:`right-10 top+10`,of:`svg`},N,P=[],F=A({getData:V,onUpdate:U});function I(e){options.app.mode||(N=y.get(j,`filters`,()=>({stateId:-1,search:``})),N.search??=``,N.stateId??=-1,b.closeAll(`.stable`),p.show(`military`),e!==void 0&&(N.stateId=e),L(),G(),F.reset(),b.open(`regimentsOverview`,{title:n(`Regiments Overview`),width:`fit-content`,onClose:R,position:M}))}function L(){P=B(),b.destroy(`regimentsOverview`);let e=`<div id="${j}" class="dialog stable editorDialog">
      <div id="regimentsBody" class="table" data-type="absolute">
        ${O({dialogId:j,columns:P})}
      </div>
      <div id="regimentsFilters" class="editorFilters">
        <label for="regimentsSearch" data-tip="${n(`Filter by name, state, or tag`)}">
          ${n(`Search`)}: <input id="regimentsSearch" type="search" />
        </label>
        <label for="regimentsFilter" data-tip="${n(`Select state`)}">
          ${n(`State`)}: <select id="regimentsFilter"></select>
        </label>
      </div>
      <div id="regimentsFooter" class="totalLine"></div>
      <div id="regimentsBottom" class="editorToolbar">
        <button id="regimentsOverviewRefresh" data-tip="${n(`Refresh`)}" class="icon-cw"></button>
        <button
          id="regimentsPercentage"
          data-tip="${n(`Toggle percentage / absolute values views`)}"
          class="icon-percent"
        ></button>
        <button id="regimentsAddNew" data-tip="${n(`Add`)}" class="icon-user-plus"></button>
        <button
          id="regimentsExport"
          data-tip="${n(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
      </div>
    </div>`;g(`dialogs`).insertAdjacentHTML(`beforeend`,e),g(`regimentsSearch`).value=N.search,E(j,F.reset),k({dialogId:j,columns:P,onUpdate:()=>b.update(j,{width:`fit-content`,position:M})});let t=g(`regimentsBody`);g(`regimentsOverviewRefresh`).addEventListener(`click`,H),g(`regimentsPercentage`).addEventListener(`click`,J),g(`regimentsAddNew`).addEventListener(`click`,Y),g(`regimentsExport`).addEventListener(`click`,Z),g(`regimentsSearch`).addEventListener(`input`,e=>{N.search=e.target.value,y.set(j,`filters`,N),F.reset()}),g(`regimentsFilter`).addEventListener(`change`,e=>{N.stateId=+e.target.value,y.set(j,`filters`,N),F.reset()}),t.addEventListener(`click`,async e=>{let t=e.target.closest(`.regimentVisibility`);if(t){let e=t.closest(`.states`),n=+e.dataset.s,r=+e.dataset.id,i=pack.states[n]?.military?.find(e=>e.i===r);i&&(i.hidden=!i.hidden,t.className=`regimentVisibility pointer ${i.hidden?`icon-eye-off`:`icon-eye`}`,p.draw(`military`));return}let n=e.target.closest(`[data-edit-regiment]`);n&&w.RegimentEditor.open(`#${n.dataset.editRegiment}`)})}function R(){g(`regimentsAddNew`).classList.contains(`pressed`)&&Y(),b.destroy(`regimentsOverview`)}var z=e=>`unit:${e}`;function B(){let e=options.map.military.units.map(e=>({key:z(e.name),label:t(e.name.replace(/_/g,` `)),width:`5em`,mobileHidden:!0,tip:r(n(`{{unit}} units number`,{unit:e.name}),n(`Click to sort`)),sortBy:t=>t.regiment.u[e.name]||0}));return[{key:`color`,width:`1.2em`,permanent:!0},{key:`state`,label:n(`State`),width:`7em`,permanent:!0,sortBy:e=>e.state.name||``,sortType:`alpha`},{key:`emblem`,width:`1.2em`},{key:`name`,label:n(`Name`),width:`15em`,permanent:!0,sortBy:e=>e.regiment.name||``,sortType:`alpha`},...e,{key:`total`,label:n(`Total`),width:`5em`,defaultSort:`desc`,sortBy:e=>e.regiment.a,tip:r(n(`Total military personnel (not considering crew)`),n(`Click to sort`))},{key:`tags`,label:n(`Tags`),width:`10em`,hidden:!0,sortBy:e=>i.format(e.regiment.tags),sortType:`alpha`},{key:`visibility`,width:`1.4em`,sortBy:e=>+!!e.regiment.hidden,tip:n(`Toggle visibility`)},{key:`edit`,width:`1.4em`,permanent:!0}]}function V(){let e=[],t=N.search.toLowerCase().trim();for(let n of pack.states)if(n.i&&!n.removed&&n.military?.length&&(N.stateId===-1||n.i===N.stateId))for(let r of n.military)(!t||i.matches(t,r.name,r.tags,[n.name||``]))&&e.push({state:n,regiment:r});return T(j,e,P)}function H(){G(),F.refresh()}function U(r){let s=g(`regimentsBody`),c=s.dataset.type===`percentage`,l=Object.fromEntries(options.map.military.units.map(e=>[e.name,a(r.all.map(t=>t.regiment.u[e.name]||0))])),u=a(r.all.map(e=>e.regiment.a)),d=(e,t)=>`${Math.round(t?e/t*100:0)}%`,f=r.rows.map(({state:e,regiment:r})=>{let a=options.map.military.units.map(e=>{let i=r.u[e.name]||0;return`<div data-col="${z(e.name)}" data-tip="${n(`{{unit}} units number`,{unit:t(e.name)})}">${c?d(i,l[e.name]):i}</div>`}).join(``),s=`<span data-col="emblem" data-tip="${n(`Regiment's emblem`)}">${o.html(r.icon??``)}</span>`;return`<div class="states" data-id="${r.i}" data-s="${e.i}">
        <fill-box data-col="color" data-tip="${e.fullName}" fill="${e.color}" disabled></fill-box>
        <input data-col="state" data-tip="${e.fullName}" value="${e.name}" readonly />
        ${s}
        <input data-col="name" data-tip="${n(`Name`)}" value="${r.name}" readonly />
        ${a}
        <div data-col="total" data-tip="${n(`Total military personnel (not considering crew)`)}" style="font-weight:bold">${c?d(r.a,u):r.a}</div>
        <div data-col="tags">
          <input
            data-tip="${n(`Regiment tags (comma-separated)`)}"
            class="regimentTags"
            value="${i.format(r.tags)}"
            placeholder="${n(`Tags`)}"
            autocorrect="off"
            spellcheck="false"
          />
        </div>
        <span data-col="visibility" data-tip="${n(`Toggle visibility`)}" class="regimentVisibility pointer ${r.hidden?`icon-eye-off`:`icon-eye`}"></span>
        <span data-col="edit" data-tip="${n(`Edit Regiment`)}" data-edit-regiment="regiment${e.i}-${r.i}" class="icon-pencil pointer"></span>
      </div>`}).join(``);s.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),s.insertAdjacentHTML(`beforeend`,f);let p=g(`regimentsFooter`);p.innerHTML=`<div style="margin-left:4px">${n(`Regiments`)}:&nbsp;${r.all.length}</div>
    ${options.map.military.units.map(n=>`<div data-col="${z(n.name)}" style="margin-left:12px">${t(n.name)}:&nbsp;${e(l[n.name])}</div>`).join(``)}
    <div data-col="total" style="margin-left:12px">${n(`Total`)}:&nbsp;${e(u)}</div>`,D(p,r,F.goto),s.querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,K),e.addEventListener(`mouseleave`,q)}),s.querySelectorAll(`.regimentTags`).forEach(e=>{e.addEventListener(`change`,W)}),b.update(j,{width:`fit-content`,position:M})}function W(){let e=this.closest(`.states`),t=Number(e.dataset.s),n=Number(e.dataset.id),r=pack.states[t]?.military?.find(e=>e.i===n);r&&(i.set(r,this.value),this.value=i.format(r.tags),N.search&&F.refresh())}function G(){N.stateId!==-1&&!pack.states.some(e=>e.i===N.stateId&&!e.removed)&&(N.stateId=-1);let e=g(`regimentsFilter`);e.options.length=0,e.options.add(new Option(n(`All`),`-1`,!1,N.stateId===-1)),pack.states.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name>t.name?1:-1).forEach(t=>{e.options.add(new Option(t.name,String(t.i),!1,t.i===N.stateId))}),y.set(j,`filters`,N)}function K(e){let t=e.target,n=+t.dataset.s,r=+t.dataset.id;!options.app.mode&&n&&_(`#armies > g > g#regiment${n}-${r}`).transition().duration(2e3).style(`fill`,`#ff0000`)}function q(e){let t=e.target,n=+t.dataset.s,r=+t.dataset.id;_(`#armies > g > g#regiment${n}-${r}`).transition().duration(1e3).style(`fill`,null)}function J(){let e=g(`regimentsBody`);e.dataset.type=e.dataset.type===`absolute`?`percentage`:`absolute`,F.refresh()}function Y(){let e=g(`regimentsAddNew`);e.classList.toggle(`pressed`),e.classList.contains(`pressed`)?(_(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,X),S(n(`Click on map to create new regiment or fleet`),!0),h(`regimentAdd`)?.classList.add(`pressed`)):(C(),x(),H(),h(`regimentAdd`)?.classList.remove(`pressed`))}function X(e){let t=N.stateId;if(t===-1){S(n(`Please select state from the list`),!1,`error`);return}let r=m(e,this),i=c.findCell(r[0],r[1]);if(i===void 0)return;let a=pack.cells.p[i][0],l=pack.cells.p[i][1],u=pack.states[t].military,p={a:0,cell:i,i:u.length?d(u).i+1:0,n:+(pack.cells.h[i]<20),u:{},x:a,y:l,bx:a,by:l,state:t,icon:o.glyph(`🛡️`),name:``,tags:[],t:0,s:0,type:``};p.name=s.getName(p,u),u.push(p),s.generateNote(p,pack.states[t]),f(p,t),Y()}function Z(){let e=options.map.military.units.map(e=>e.name),{coordinates:n}=options.map.geography,{width:r,height:a}=options.map.graph,s=[`State`,`Id`,`Icon`,`Name`,...e.map(e=>t(e)),`Total`,`Tags`,`X`,`Y`,`Latitude`,`Longitude`,`Base X`,`Base Y`,`Base Latitude`,`Base Longitude`],c=pack.states.filter(e=>e.i&&!e.removed).flatMap(t=>(t.military??[]).map(s=>[t.name,s.i,o.glyphText(s.icon??``)??s.icon,s.name,...e.map(e=>s.u[e]),s.t,i.format(s.tags),s.x,s.y,u(s.y,n,a,2),l(s.x,n,r,2),s.bx,s.by,u(s.by,n,a,2),l(s.bx,n,r,2)]));v.download(`Regiments`,s,c)}var Q={open:I,exportCsv:Z};export{Q as RegimentsOverview};
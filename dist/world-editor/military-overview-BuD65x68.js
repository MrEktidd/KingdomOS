import{D as e,E as t,d as n,i as r,p as i,r as a,v as o}from"./index-DOQT8b0l.js";import{Mt as s,m as c,n as l,o as u}from"./options-model-DdZ2yl81.js";import{h as d}from"./notices-DwMq1C_Q.js";import{F as f,t as p}from"./layers-BuZ6CHWf.js";import{h as m,r as h,z as g}from"./node-utils-B7j8BhBd.js";import{t as _}from"./csv-CWKHeBVB.js";import{t as v}from"./dialog-3wqBPvBH.js";import{o as y}from"./tooltips-Nm9ri5Ws.js";import{t as b}from"./controllers-J2Zz1cm6.js";import{c as x,s as S}from"./app-JxGef4iz.js";import{a as C,i as w,n as T,r as E}from"./table-BUfHx-52.js";import{t as D}from"./highlighting-DuGg2bSe.js";import{n as O,t as k}from"./limitation-picker-DU2PSFYF.js";var A=`militaryOverview`,j={my:`right top`,at:`right-10 top+10`,of:`svg`},M=[],N=E({getData:V,onUpdate:U});function P(){options.app.mode||(v.closeAll(`#militaryOverview, .stable`),p.show(`states`,`borders`,`military`),F(),N.reset(),v.open(`militaryOverview`,{title:r(`Military Overview`),width:`fit-content`,onClose:I,position:j}))}function F(){M=R(),v.destroy(`militaryOverview`);let e=`<div id="${A}" class="dialog stable editorDialog">
      <div id="militaryBody" class="table" data-type="absolute">
        ${w({dialogId:A,columns:M})}
      </div>
      <div id="militaryFooter" class="totalLine">
        <div data-tip="${r(`States number`)}" style="margin-left: 4px">
          ${r(`States`)}:&nbsp;<span id="militaryFooterStates">0</span>
        </div>
        <div data-tip="${r(`Total military forces`)}" style="margin-left: 14px" data-col="total">
          ${r(`Total forces`)}:&nbsp;<span id="militaryFooterForcesTotal">0</span>
        </div>
        <div data-tip="${r(`Average military forces per state`)}" style="margin-left: 14px" data-col="total">
          ${r(`Average forces`)}:&nbsp;<span id="militaryFooterForces">0</span>
        </div>
        <div data-tip="${r(`Average forces rate per state`)}" style="margin-left: 14px" data-col="rate">
          ${r(`Average rate`)}:&nbsp;<span id="militaryFooterRate">0%</span>
        </div>
        <div data-tip="${r(`Average War Alert`)}" style="margin-left: 14px" data-col="alert">
          ${r(`Average alert`)}:&nbsp;<span id="militaryFooterAlert">0</span>
        </div>
      </div>
      <div id="militaryBottom" class="editorToolbar">
        <button id="militaryOverviewRefresh" data-tip="${r(`Refresh`)}" class="icon-cw"></button>
        <button id="militaryOptionsButton" data-tip="${r(`Edit Military Units`)}" class="icon-cog"></button>
        <button id="militaryRegimentsList" data-tip="${r(`Show regiments list`)}" class="icon-list-bullet"></button>
        <button
          id="militaryPercentage"
          data-tip="${r(`Toggle percentage / absolute values views`)}"
          class="icon-percent"
        ></button>
        <button
          id="militaryOverviewRecalculate"
          data-tip="${r(`Recalculate military forces based on current options`)}"
          class="icon-retweet"
        ></button>
        <button
          id="militaryExport"
          data-tip="${r(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="militaryWiki" data-tip="${r(`Open Military Forces Tutorial`)}" class="icon-info"></button>
      </div>
    </div>`;h(`dialogs`).insertAdjacentHTML(`beforeend`,e),z(),D(`militaryOverview`,({cellId:e})=>pack.cells.state[e]);let t=h(`militaryBody`);h(`militaryOverviewRefresh`).addEventListener(`click`,H),h(`militaryPercentage`).addEventListener(`click`,J),h(`militaryOptionsButton`).addEventListener(`click`,Y),h(`militaryRegimentsList`).addEventListener(`click`,()=>L(-1)),h(`militaryOverviewRecalculate`).addEventListener(`click`,Q),h(`militaryExport`).addEventListener(`click`,$),h(`militaryWiki`).addEventListener(`click`,()=>d(`Military-Forces`)),t.addEventListener(`change`,e=>{let t=e.target,n=t.closest(`.states`);n&&W(+n.dataset.id,+t.value)}),t.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.states`);if(!n)return;let r=+n.dataset.id;t.tagName===`SPAN`&&L(r)})}function I(){v.destroy(`militaryOverview`)}async function L(e){b.RegimentsOverview.open(e)}function R(){let e=options.map.military.units.map(e=>({key:`unit:${e.name}`,label:n(e.name.replace(/_/g,` `)),width:`5em`,mobileHidden:!0,tip:a(r(`{{unit}} units number`,{unit:e.name}),r(`Click to sort`)),sortBy:t=>t.forces[e.name]||0}));return[{key:`color`,width:`1.2em`,permanent:!0},{key:`state`,label:r(`State`),width:`7em`,permanent:!0,sortBy:e=>e.state.name||``,sortType:`alpha`},...e,{key:`total`,label:r(`Total`),width:`5em`,defaultSort:`desc`,sortBy:e=>e.total,tip:a(r(`Total military personnel (considering crew)`),r(`Click to sort`))},{key:`population`,label:r(`Population`),width:`6.5em`,mobileHidden:!0,sortBy:e=>e.population},{key:`rate`,label:r(`Rate`),width:`5em`,sortBy:e=>e.rate,tip:a(r(`Military personnel rate (% of state population)`),r(`Depends on war alert`),r(`Click to sort`))},{key:`alert`,label:r(`War Alert`),width:`5.5em`,sortBy:e=>e.alert,tip:a(r(`War Alert`),r(`Modifier to military forces number, depends on political situation`),r(`Click to sort`))},{key:`regiments`,width:`1.4em`,permanent:!0}]}function z(){S(A,N.reset),T({dialogId:A,columns:M,onUpdate:()=>v.update(A,{width:`fit-content`,position:j})})}function B(){M=R(),h(`${A}Header`).outerHTML=w({dialogId:A,columns:M}),z(),N.reset()}function V(){let e=pack.states.filter(e=>e.i&&!e.removed).map(e=>{let n=Object.fromEntries(options.map.military.units.map(t=>[t.name,(e.military||[]).reduce((e,n)=>e+(n.u[t.name]||0),0)])),r=t(((e.rural||0)+(e.urban||0)*options.map.units.population.urbanization.rate)*options.map.units.population.scale),i=options.map.military.units.reduce((e,t)=>e+(n[t.name]||0)*t.crew,0);return{state:e,forces:n,total:i,population:r,rate:r?i/r*100:0,alert:e.alert??0}});return x(A,e,M)}function H(){N.refresh()}function U(n){let i=h(`militaryBody`),o=i.dataset.type===`percentage`,s=n.all.reduce((e,t)=>{e.total+=t.total,e.population+=t.population;for(let n of options.map.military.units)e.units[n.name]=(e.units[n.name]||0)+t.forces[n.name];return e},{total:0,population:0,units:{}}),c=(e,n)=>`${t(n?e/n*100:0)}%`,l=n.rows.map(n=>{let i=options.map.military.units.map(e=>{let t=n.forces[e.name]||0;return`<div data-col="${`unit:${e.name}`}" data-tip="${r(`{{unit}} units number`,{unit:e.name})}">${o?c(t,s.units[e.name]||0):t}</div>`}).join(``);return`<div class="states" data-id="${n.state.i}">
        <fill-box data-col="color" data-tip="${n.state.fullName}" fill="${n.state.color}" disabled></fill-box>
        <input data-col="state" data-tip="${n.state.fullName}" value="${n.state.name}" readonly />
        ${i}
        <div data-col="total" data-tip="${r(`Total military personnel (considering crew)`)}" style="font-weight:bold">${o?c(n.total,s.total):e(n.total)}</div>
        <div data-col="population" data-tip="${r(`State population`)}">${o?c(n.population,s.population):e(n.population)}</div>
        <div data-col="rate" data-tip="${a(r(`Military personnel rate (% of state population)`),r(`Depends on war alert`))}">${t(n.rate,2)}%</div>
        <input data-col="alert" data-tip="${a(r(`War Alert`),r(`Modifier to military forces number, depends on political situation`))}" type="number" min="0" step=".01" value="${t(n.alert,2)}" />
        <span data-col="regiments" data-tip="${r(`Show regiments list`)}" class="icon-list-bullet pointer"></span>
      </div>`}).join(``);i.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),i.insertAdjacentHTML(`beforeend`,l),G(n),C(h(`militaryFooter`),n,N.goto),i.querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,K),e.addEventListener(`mouseleave`,q)}),v.update(A,{width:`fit-content`,position:j})}function W(e,t){t>=0&&u.setAlert(e,t);for(let t of pack.states[e].military??[])f(t,e);N.refresh()}function G(n){let r=n.all.length,i=s(n.all.map(e=>e.total));h(`militaryFooterStates`).innerHTML=String(r),h(`militaryFooterForcesTotal`).innerHTML=e(i),h(`militaryFooterForces`).innerHTML=e(r?i/r:0),h(`militaryFooterRate`).innerHTML=`${t(r?s(n.all.map(e=>e.rate))/r:0,2)}%`,h(`militaryFooterAlert`).innerHTML=String(t(r?s(n.all.map(e=>e.alert))/r:0,2))}function K(e){let t=+e.target.dataset.id;if(options.app.mode||!t||(g(`#armies > g > g#army${t}`).transition().duration(2e3).style(`fill`,`#ff0000`),!p.isOn(`states`)))return;let n=g(`#regions`).select(`#state${t}`).attr(`d`),r=g(`#debug`).append(`path`).attr(`class`,`highlight`).attr(`d`,n).attr(`fill`,`none`).attr(`stroke`,`red`).attr(`stroke-width`,1).attr(`opacity`,1).attr(`filter`,`url(#blur1)`),i=r.node().getTotalLength(),a=(i+5e3)/2,o=m(`0,${i}`,`${i},${i}`);r.transition().duration(a).attrTween(`stroke-dasharray`,()=>e=>o(e))}function q(e){g(`#debug`).selectAll(`.highlight`).each(function(){g(this).transition().duration(1e3).attr(`opacity`,0).remove()});let t=+e.target.dataset.id;g(`#armies > g > g#army${t}`).transition().duration(1e3).style(`fill`,null)}function J(){let e=h(`militaryBody`);e.dataset.type=e.dataset.type===`absolute`?`percentage`:`absolute`,N.refresh()}function Y(){X();let e=[`melee`,`ranged`,`mounted`,`machinery`,`naval`,`armored`,`aviation`,`magical`],t=h(`militaryOptions`).querySelector(`tbody`),n={biomes:r(`Select allowed biomes`),states:r(`Select allowed states`),cultures:r(`Select allowed cultures`),religions:r(`Select allowed religions`)};s(),options.map.military.units.map(e=>g(e)),v.open(`militaryOptions`,{title:r(`Edit Military Units`),width:`fit-content`,position:{my:`center`,at:`center`,of:`svg`},onClose:Z,buttons:[{label:r(`Apply`),onClick:C,tip:`${r(`Apply military units settings.`)} <span style="color:#cb5858">${r(`All forces will be recalculated!`)}</span>`},{label:r(`Add`),tip:r(`Add`),onClick:()=>g({icon:c.glyph(`🛡️`),name:`custom${h(`militaryOptionsTable`).rows.length}`,rural:.2,urban:.5,crew:1,power:1,type:`melee`,separate:0})},{label:r(`Restore`),onClick:x,tip:r(`Restore default military units and settings`)},{label:r(`Cancel`),tip:r(`Close the window without saving the changes`),onClick:()=>v.close(`militaryOptions`)}]}),t.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.dataset.type;if(n===`icon`)b.IconPicker.open({current:t.dataset.icon||``,onPick:e=>_(t,e)});else if(n===`biomes`)S(t,pack.biomes.filter(e=>!e.removed).map(({i:e,name:t,color:n})=>({i:e,name:t,color:n})));else{if(n===`states`)return S(t,pack.states);if(n===`cultures`)return S(t,pack.cultures);if(n===`religions`)return S(t,pack.religions)}});function s(){t.querySelectorAll(`tr`).forEach(e=>{e.remove()})}function d(e){return e?.join(`,`)||``}function f(e){return e?.length?`some`:`all`}function m(e,t){return e?.length?k(e,t):``}function g(o){let{type:s,icon:c,name:l,rural:u,urban:p,power:h,crew:g,separate:v}=o,y=document.createElement(`tr`),b=e.map(e=>`<option ${s===e?`selected`:``} value="${e}">${e}</option>`).join(` `),x=e=>{let t=pack[e];return`<button
          data-tip="${n[e]}"
          data-type="${e}"
          title="${i(m(o[e],t))}"
          data-value="${d(o[e])}">
          ${f(o[e])}
        </button>`};y.innerHTML=`<td>
          <button data-type="icon" data-tip="${r(`Click to select unit icon`)}" translate="no"></button>
        </td>
        <td><input data-tip="${a(r(`Name`),r(`If name is changed for existing unit, old unit will be replaced`))}" value="${l}" /></td>
        <td>${x(`biomes`)}</td>
        <td>${x(`states`)}</td>
        <td>${x(`cultures`)}</td>
        <td>${x(`religions`)}</td>
        <td><input data-tip="${r(`Conscription percentage for rural population`)}" type="number" min="0" max="100" step=".01" value="${u}" /></td>
        <td><input data-tip="${r(`Conscription percentage for urban population`)}" type="number" min="0" max="100" step=".01" value="${p}" /></td>
        <td><input data-tip="${r(`Average number of people in crew (used for total personnel calculation)`)}" type="number" min="1" step="1" value="${g}" /></td>
        <td><input data-tip="${r(`Unit military power (used for battle simulation)`)}" type="number" min="0" step=".1" value="${h}" /></td>
        <td>
          <select data-tip="${r(`Unit type to apply special rules on forces recalculation`)}">
            ${b}
          </select>
        </td>
        <td data-tip="${r(`Check if unit is separate and can be stacked only with units of the same type`)}">
          <input id="${l}Separate" type="checkbox" class="checkbox" ${v?`checked`:``} />
          <label for="${l}Separate" class="checkbox-label"></label>
        </td>
        <td data-tip="${r(`Remove`)}">
          <span data-tip="${r(`Remove`)}" class="icon-trash-empty pointer"></span>
        </td>`,y.querySelector(`.icon-trash-empty`).addEventListener(`click`,()=>y.remove()),_(y.querySelector(`button[data-type='icon']`),c||``),t.appendChild(y)}function _(e,t){e.dataset.icon=t,e.innerHTML=c.html(t)}function x(){s(),u.getDefaultOptions().map(e=>g(e))}function S(e,t){let n=e.dataset.type;O({title:r(`Limit unit`),heading:r(`Limit unit by {{type}}`,{type:n}),items:t,allowed:e.dataset.value?e.dataset.value.split(`,`).map(Number):[],onApply:n=>{e.dataset.value=n.join(`,`),e.innerHTML=f(n),e.setAttribute(`title`,m(n,t))}})}function C(){let e=Array.from(t.querySelectorAll(`tr`)),n=e.map(e=>o(e.querySelector(`input`).value));if(new Set(n).size!==n.length){y(r(`All units should have unique names`),!1,`error`);return}v.close(`militaryOptions`);let i=e.map((e,t)=>{let[r,,i,a,o,s,c,l,u,d,f,p]=Array.from(e.querySelectorAll(`input, button, select`)).map(e=>{let{type:t,value:n}=e.dataset||{};return t===`icon`?e.dataset.icon??``:t?n?n.split(`,`).map(e=>parseInt(e,10)):null:e.type===`number`?+e.value||0:e.type===`checkbox`?+e.checked||0:e.value}),m={icon:r,name:n[t],rural:c,urban:l,crew:u,power:d,type:f,separate:p};return i&&(m.biomes=i),a&&(m.states=a),o&&(m.cultures=o),s&&(m.religions=s),m});options.map.military.units=i,l.save(),B(),v.confirm({title:r(`Recalculate military`),message:`${r(`Units are saved. Recalculate military forces for all states?`)}<br>${r(`Regiments for all states will be regenerated, so manual changes to them will be lost`)}`,confirm:r(`Recalculate`),cancel:r(`Keep regiments`),onConfirm:()=>{u.generate(),p.draw(`military`),H()}})}}function X(){v.destroy(`militaryOptions`);let e=`<div id="militaryOptions" class="dialog stable">
      <div class="table">
        <table id="militaryOptionsTable">
          <thead>
            <tr>
              <th data-tip="${r(`Unit icon`)}">${r(`Icon`)}</th>
              <th data-tip="${a(r(`Name`),r(`If name is changed for existing unit, old unit will be replaced`))}">${r(`Name`)}</th>
              <th style="width: 5em" data-tip="${r(`Select allowed biomes`)}">${r(`Biomes`)}</th>
              <th style="width: 5em" data-tip="${r(`Select allowed states`)}">${r(`States`)}</th>
              <th style="width: 5em" data-tip="${r(`Select allowed cultures`)}">${r(`Cultures`)}</th>
              <th style="width: 5em" data-tip="${r(`Select allowed religions`)}">${r(`Religions`)}</th>
              <th data-tip="${r(`Conscription percentage for rural population`)}">${r(`Rural`)}</th>
              <th data-tip="${r(`Conscription percentage for urban population`)}">${r(`Urban`)}</th>
              <th data-tip="${r(`Average number of people in crew (used for total personnel calculation)`)}">${r(`Crew`)}</th>
              <th data-tip="${r(`Unit military power (used for battle simulation)`)}">${r(`Power`)}</th>
              <th data-tip="${r(`Unit type to apply special rules on forces recalculation`)}">${r(`Type`)}</th>
              <th data-tip="${r(`Check if unit is separate and can be stacked only with units of the same type`)}">
                ${r(`Separate`)}
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>`;h(`dialogs`).insertAdjacentHTML(`beforeend`,e)}function Z(){v.destroy(`militaryOptions`)}function Q(){v.confirm({title:r(`Recalculate military`),message:`${r(`Are you sure you want to recalculate military forces for all states?`)}<br>${r(`Regiments for all states will be regenerated`)}`,confirm:r(`Recalculate`),onConfirm:()=>{u.generate(),p.draw(`military`),H()}})}function $(){let e=options.map.military.units.map(e=>e.name),r=[`Id`,`State`,...e.map(e=>n(e)),`Total`,`Population`,`Rate`,`War Alert`],i=V().map(n=>[n.state.i,n.state.name,...e.map(e=>n.forces[e]||0),n.total,n.population,`${t(n.rate,2)}%`,n.alert]);_.download(`Military`,r,i)}var ee={open:P,exportCsv:$};export{ee as MilitaryOverview};
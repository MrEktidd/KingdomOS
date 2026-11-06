import{C as e,E as t,d as n,i as r,p as i,r as a}from"./index-J388_yXx.js";import{Mt as o,m as s,o as c}from"./options-model-Cj3O8K4p.js";import{t as l}from"./pack-generator-BfWP9wix.js";import{h as u,y as d}from"./notices-DWyx0Rz8.js";import{L as f,t as p}from"./layers-D3_jdNGw.js";import{E as m,_ as h,d as g,k as _,l as v,p as y,v as b}from"./file-utils-CmE_irX5.js";import{i as x,r as S,z as ee}from"./node-utils-BA3zRxIe.js";import{t as C}from"./dialog-BYT3Byo1.js";import{o as w}from"./tooltips-D4kIN3ad.js";import{a as T,o as E}from"./app-8AGFuk3c.js";var D=null;function O(e,t){if(options.app.mode)return;C.closeAll(`.stable`),options.app.mode=`battle`,k();let n=t.x,r=t.y;D={iteration:0,x:n,y:r,cell:l.findCell(n,r)??0,attackers:{regiments:[],distances:[],morale:100,casualties:0,power:0},defenders:{regiments:[],distances:[],morale:100,casualties:0,power:0},phasesRecord:[],place:null,type:`field`,name:``},N(),P(`attackers`,e),P(`defenders`,t),D.place=te(),A(),D.name=M(),W(),V(`attackers`),V(`defenders`),H(),C.open(`battleScreen`,{title:D.name,width:`fit-content`,position:{my:`center`,at:`center`,of:`#map`},onClose:Z})}function k(){x(`battleScreen`)?.remove(),x(`regimentSelectorScreen`)?.remove();let e=`<div id="battleScreen" class="dialog stable">
      <div id="battleBody">
        <template id="battlePhases_field">
          <button
            data-tip="${r(`Skirmish phase. Ranged units excel`)}"
            data-phase="skirmish"
            class="icon-button-skirmish"
          ></button>
          <button data-tip="${a(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${a(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${a(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_naval">
          <button
            data-tip="${r(`Shelling phase. Naval artillery bombardment of enemy fleet`)}"
            data-phase="shelling"
            class="icon-button-shelling"
          ></button>
          <button
            data-tip="${r(`Boarding phase. Melee units go aboard`)}"
            data-phase="boarding"
            class="icon-button-boarding"
          ></button>
          <button
            data-tip="${r(`Сhase phase. Naval units pursue and rarely shell enemy fleet`)}"
            data-phase="chase"
            class="icon-button-chase"
          ></button>
          <button
            data-tip="${r(`Withdrawal phase. Naval units try to escape enemy fleet`)}"
            data-phase="withdrawal"
            class="icon-button-withdrawal"
          ></button>
        </template>
        <template id="battlePhases_siege_attackers">
          <button
            data-tip="${r(`Blockade phase. Prepare or hold the blockade`)}"
            data-phase="blockade"
            class="icon-button-blockade"
          ></button>
          <button
            data-tip="${r(`Bombardment phase. Attack enemy with machinery units`)}"
            data-phase="bombardment"
            class="icon-button-bombardment"
          ></button>
          <button
            data-tip="${a(r(`Storming phase`),r(`Storm enemy town`),r(`Melee units excel`))}"
            data-phase="storming"
            class="icon-button-storming"
          ></button>
          <button
            data-tip="${a(r(`Looting phase`),r(`Plunder the town`),r(`Units strength increased`))}"
            data-phase="looting"
            class="icon-button-looting"
          ></button>
          <button
            data-tip="${a(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_siege_defenders">
          <button
            data-tip="${r(`Sheltering phase. Hide behind the walls and wait`)}"
            data-phase="sheltering"
            class="icon-button-sheltering"
          ></button>
          <button
            data-tip="${a(r(`Sortie phase`),r(`Make a sortie from besieged town`),r(`Melee units excel`))}"
            data-phase="sortie"
            class="icon-button-sortie"
          ></button>
          <button
            data-tip="${r(`Bombardment phase. Attack enemy with machinery units`)}"
            data-phase="bombardment"
            class="icon-button-bombardment"
          ></button>
          <button
            data-tip="${a(r(`Defense phase`),r(`Ranged and melee units excel`))}"
            data-phase="defense"
            class="icon-button-defense"
          ></button>
          <button
            data-tip="${a(r(`Surrendering phase`),r(`Give up the defense`),r(`Units strength reduced`))}"
            data-phase="surrendering"
            class="icon-button-surrendering"
          ></button>
          <button
            data-tip="${a(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
        </template>
        <template id="battlePhases_ambush_attackers">
          <button
            data-tip="${a(r(`Shock phase`),r(`Units strength reduced`))}"
            data-phase="shock"
            class="icon-button-shock"
          ></button>
          <button data-tip="${a(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${a(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${a(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_ambush_defenders">
          <button
            data-tip="${r(`Surprice attack phase. Units strength increased, ranged units excel`)}"
            data-phase="surprise"
            class="icon-button-surprise"
          ></button>
          <button data-tip="${a(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${a(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${a(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_landing_attackers">
          <button
            data-tip="${r(`Landing phase. Amphibious attack. Units are vulnerable against prepared defense`)}"
            data-phase="landing"
            class="icon-button-landing"
          ></button>
          <button data-tip="${a(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${a(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button data-tip="${a(r(`Flee phase`),r(`Units strength reduced`))}" data-phase="flee" class="icon-button-flee"></button>
        </template>
        <template id="battlePhases_landing_defenders">
          <button
            data-tip="${a(r(`Shock phase`),r(`Units are not prepared for a defense`))}"
            data-phase="shock"
            class="icon-button-shock"
          ></button>
          <button
            data-tip="${a(r(`Defense phase`),r(`Prepared defense`),r(`Units strength increased`))}"
            data-phase="defense"
            class="icon-button-defense"
          ></button>
          <button data-tip="${a(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${r(`Waiting phase. Cannot pursue fleeing naval`)}"
            data-phase="waiting"
            class="icon-button-waiting"
          ></button>
          <button
            data-tip="${a(r(`Pursue phase`),r(`Try to intercept fleeing attackers`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${a(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_air">
          <button
            data-tip="${a(r(`Maneuvering phase`),r(`Units strength reduced`))}"
            data-phase="maneuvering"
            class="icon-button-maneuvering"
          ></button>
          <button
            data-tip="${a(r(`Dogfight phase`),r(`Units strength increased`))}"
            data-phase="dogfight"
            class="icon-button-dogfight"
          ></button>
          <button
            data-tip="${a(r(`Pursue phase`),r(`Units strength increased`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${a(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <div style="font-size: 1.2em; font-weight: bold; width: unset">
          <span>${r(`Attackers`)}</span>
          <div style="float: right; font-size: 0.7em">
            <meter
              id="battleMorale_attackers"
              data-tip="${r(`Attackers morale`)}: "
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
            ></meter>
            <div
              id="battlePower_attackers"
              data-tip="${a(r(`Attackers strength during this phase`),r(`Strength defines dealt damage`))}"
              style="display: inline-block; text-align: center"
              class="icon-button-power"
            ></div>
            <div style="display: inline-block">
              <button id="battlePhase_attackers" style="width: 3.2em"></button>
              <div class="battlePhases" style="display: none"></div>
            </div>
            <button
              id="battleDie_attackers"
              data-tip="${a(r(`Random factor for attackers`),r(`Click to re-roll`))}"
              style="padding: 0.1em 0.2em; width: 3.2em"
              class="icon-button-die"
            ></button>
          </div>
        </div>
        <table id="battleAttackers"></table>
        <div style="font-size: 1.2em; font-weight: bold; width: unset">
          <span>${r(`Defenders`)}</span>
          <div style="float: right; font-size: 0.7em">
            <meter
              id="battleMorale_defenders"
              data-tip="${r(`Defenders morale`)}: "
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
            ></meter>
            <div
              id="battlePower_defenders"
              data-tip="${a(r(`Defenders strength during this phase`),r(`Strength defines dealt damage`))}"
              style="display: inline-block; text-align: center"
              class="icon-button-power"
            ></div>
            <div style="display: inline-block">
              <button id="battlePhase_defenders" style="width: 3.2em"></button>
              <div class="battlePhases" style="display: none"></div>
            </div>
            <button
              id="battleDie_defenders"
              data-tip="${a(r(`Random factor for defenders`),r(`Click to re-roll`))}"
              style="padding: 0.1em 0.2em; width: 3.2em"
              class="icon-button-die"
            ></button>
          </div>
        </div>
        <table id="battleDefenders"></table>
      </div>
      <div id="battleBottom">
        <button id="battleType" data-tip="${a(r(`Battle type`),r(`Click to change`))}"></button>
        <div class="battleTypes" style="display: none">
          <button
            data-tip="${r(`Field Battle: a standard type of combat`)}"
            data-type="field"
            class="icon-button-field"
          ></button>
          <button data-tip="${r(`Naval Battle: naval units combat`)}" data-type="naval" class="icon-button-naval"></button>
          <button data-tip="${r(`Siege: burg blockade and storming`)}" data-type="siege" class="icon-button-siege"></button>
          <button data-tip="${r(`Ambush: surprise attack`)}" data-type="ambush" class="icon-button-ambush"></button>
          <button data-tip="${r(`Landing: amphibious attack`)}" data-type="landing" class="icon-button-landing"></button>
          <button
            data-tip="${r(`Air Battle: maneuring fight of avia units`)}"
            data-type="air"
            class="icon-button-air"
          ></button>
        </div>
        <button id="battleNameShow" data-tip="${r(`Set battle name`)}" class="icon-font"></button>
        <div id="battleNameSection" style="display: none">
          <button id="battleNameHide" data-tip="${r(`Hide`)}" class="icon-font"></button>
          <input id="battleNamePlace" data-tip="${r(`Type place name`)}" style="width: 30%" />
          <input id="battleNameFull" data-tip="${r(`Type full battle name`)}" style="width: 46%" />
          <button
            id="battleNameCulture"
            data-tip="${r(`Generate culture-specific name`)}"
            class="icon-book"
          ></button>
          <button
            id="battleNameRandom"
            data-tip="${r(`Generate random name`)}"
            class="icon-globe"
          ></button>
        </div>
        <button id="battleAddRegiment" data-tip="${r(`Add regiment to the battle`)}" class="icon-user-plus"></button>
        <button id="battleRoll" data-tip="${r(`Roll dice to update random factor`)}" class="icon-die"></button>
        <button id="battleRun" data-tip="${r(`Iterate battle`)}" class="icon-play"></button>
        <button
          id="battleApply"
          data-tip="${r(`End battle: apply current results and close the screen`)}"
          class="icon-check"
        ></button>
        <button
          id="battleCancel"
          data-tip="${r(`Cancel battle: roll back results and close the screen`)}"
          class="icon-cancel"
        ></button>
        <button id="battleWiki" data-tip="${r(`Open Battle Simulation Tutorial`)}" class="icon-info"></button>
      </div>
    </div>
    <div id="regimentSelectorScreen" class="dialog">
      <div id="regimentSelectorHeader" class="header" style="grid-template-columns: 9em 13em 4em 6em">
        <div data-tip="${r(`Click to sort`)}" class="sortable alphabetically" data-sortby="state">
          ${r(`State`)}&nbsp;
        </div>
        <div data-tip="${r(`Click to sort`)}" class="sortable alphabetically" data-sortby="regiment">
          ${r(`Regiment`)}&nbsp;
        </div>
        <div data-tip="${r(`Click to sort`)}" class="sortable" data-sortby="total">${r(`Total`)}&nbsp;</div>
        <div
          data-tip="${r(`Click to sort`)}"
          class="sortable icon-sort-number-up"
          data-sortby="distance"
        >
          ${r(`Distance`)}&nbsp;
        </div>
      </div>
      <div id="regimentSelectorBody" class="table"></div>
    </div>`;S(`dialogs`).insertAdjacentHTML(`beforeend`,e),E(`battleScreen`,`regimentSelectorHeader`),S(`battleType`).addEventListener(`click`,e=>Y(e)),S(`battleType`).nextElementSibling.addEventListener(`click`,e=>ie(e)),S(`battleNameShow`).addEventListener(`click`,()=>I()),S(`battleNamePlace`).addEventListener(`change`,e=>{D&&(D.place=e.target.value)}),S(`battleNameFull`).addEventListener(`change`,e=>R(e)),S(`battleNameCulture`).addEventListener(`click`,()=>z(`culture`)),S(`battleNameRandom`).addEventListener(`click`,()=>z(`random`)),S(`battleNameHide`).addEventListener(`click`,()=>L()),S(`battleAddRegiment`).addEventListener(`click`,()=>F()),S(`battleRoll`).addEventListener(`click`,()=>W()),S(`battleRun`).addEventListener(`click`,()=>re()),S(`battleApply`).addEventListener(`click`,()=>oe()),S(`battleCancel`).addEventListener(`click`,()=>Z()),S(`battleWiki`).addEventListener(`click`,()=>u(`Battle-Simulator`)),S(`battlePhase_attackers`).addEventListener(`click`,e=>Y(e)),S(`battlePhase_attackers`).nextElementSibling.addEventListener(`click`,e=>X(e,`attackers`)),S(`battlePhase_defenders`).addEventListener(`click`,e=>Y(e)),S(`battlePhase_defenders`).nextElementSibling.addEventListener(`click`,e=>X(e,`defenders`)),S(`battleDie_attackers`).addEventListener(`click`,()=>G(`attackers`)),S(`battleDie_defenders`).addEventListener(`click`,()=>G(`defenders`))}function A(){let e=D,t=e.attackers.regiments[0],n=e.defenders.regiments[0];e.type=(()=>{let r=Object.keys(t.u).map(e=>options.map.military.units.find(t=>t.name===e).type),i=Object.keys(n.u).map(e=>options.map.military.units.find(t=>t.name===e).type);return t.n&&n.n?`naval`:r.every(e=>e===`aviation`)&&i.every(e=>e===`aviation`)?`air`:t.n&&!n.n&&r.some(e=>e!==`naval`)?`landing`:!n.n&&(pack.burgs[pack.cells.burg[e.cell]].walls||pack.burgs[pack.cells.burg[e.cell]].citadel)?`siege`:h(.1)&&[5,6,7,8,9,12].includes(pack.cells.biome[e.cell])?`ambush`:`field`})(),j()}function j(){let e=D;S(`battleType`).className=`icon-button-${e.type}`;let t=x(`battlePhases_${e.type}_attackers`),n=t?t.content:S(`battlePhases_${e.type}`).content,r=t?S(`battlePhases_${e.type}_defenders`).content:n,i=S(`battlePhase_attackers`).nextElementSibling,a=S(`battlePhase_defenders`).nextElementSibling;i.innerHTML=``,a.innerHTML=``,i.append(n.cloneNode(!0)),a.append(r.cloneNode(!0))}function te(){let e=pack.cells,t=D.cell,n=e.burg[t]?pack.burgs[e.burg[t]].name:null,r=!n&&e.r[t]?(e=>{let t=pack.rivers.find(t=>t.i===e);return`${t.name} ${t.type}`})(e.r[t]):null,i=n||r?null:v.getCulture(e.culture[t]);return n||r||i}function M(){let e=D;return e.type===`field`?`Battle of ${e.place}`:e.type===`naval`?`Naval Battle of ${e.place}`:e.type===`siege`?`Siege of ${e.place}`:e.type===`ambush`?`${e.place} Ambush`:e.type===`landing`?`${e.place} Landing`:`${e.place} ${h(.8)?`Air Battle`:`Dogfight`}`}function ne(){let e=D;return e.type===`field`?`field battle`:e.type===`naval`?`naval battle`:e.type===`siege`?`siege`:e.type===`ambush`?`ambush`:e.type===`landing`?`landing`:`battle`}function N(){let e=`<thead><tr><th></th><th></th>`;for(let t of options.map.military.units){let r=n(t.name.replace(/_/g,` `));e+=`<th data-tip="${r}">${s.html(t.icon)}</th>`}e+=`<th data-tip="${r(`Total military forces`)}">${r(`Total`)}</th></tr></thead>`,S(`battleAttackers`).innerHTML=e,S(`battleDefenders`).innerHTML=e}function P(e,t){let n=D;t.casualties=Object.keys(t.u).reduce((e,t)=>(e[t]=0,e),{}),t.survivors={...t.u};let a=pack.states[t.state],o=Math.hypot(n.y-t.by,n.x-t.bx)*options.map.units.distance.scale|0,c=`<svg width="1.4em" height="1.4em" style="margin-bottom: -.6em; stroke: #333">
      <rect x="0" y="0" width="100%" height="100%" fill="${a.color?.[0]===`#`?a.color:`#999`}"></rect>
      <use href="${i(s.href(t.icon??``))}" x="10%" y="10%" width="80%" height="80%" stroke="none"></use></svg>`,l=`<tbody id="battle${a.i}-${t.i}">`,u=`<tr class="battleInitial"><td>${c}</td><td class="regiment" data-tip="${t.name}">${t.name.slice(0,24)}</td>`,d=`<tr class="battleCasualties"><td></td><td data-tip="${a.fullName}">${a.fullName.slice(0,26)}</td>`,f=`<tr class="battleSurvivors"><td></td><td data-tip="${r(`Supply line length, affects morale`)}">${r(`Distance to base`)}: ${o} ${options.map.units.distance.unit}</td>`;for(let e of options.map.military.units)u+=`<td data-tip="${r(`Initial forces`)}" style="width: 2.5em; text-align: center">${t.u[e.name]||0}</td>`,d+=`<td data-tip="${r(`Casualties`)}" style="width: 2.5em; text-align: center; color: red">0</td>`,f+=`<td data-tip="${r(`Survivors`)}" style="width: 2.5em; text-align: center; color: green">${t.u[e.name]||0}</td>`;u+=`<td data-tip="${r(`Initial forces`)}" style="width: 2.5em; text-align: center">${t.a||0}</td></tr>`,d+=`<td data-tip="${r(`Casualties`)}"  style="width: 2.5em; text-align: center; color: red">0</td></tr>`,f+=`<td data-tip="${r(`Survivors`)}" style="width: 2.5em; text-align: center; color: green">${t.a||0}</td></tr>`;let p=S(e===`attackers`?`battleAttackers`:`battleDefenders`);p.innerHTML+=`${l+u+d+f}</tbody>`,n[e].regiments.push(t),n[e].distances.push(o)}function F(){let e=D,n=S(`regimentSelectorBody`),i=pack.states.filter(e=>e.military&&!e.removed).flatMap(e=>e.military),a=n=>t(Math.hypot(e.y-n.y,e.x-n.x)*options.map.units.distance.scale),o=t=>e.defenders.regiments.some(e=>e===t)||e.attackers.regiments.some(e=>e===t);n.innerHTML=i.map(e=>{let t=pack.states[e.state],n=o(e),i=n?0:a(e),c=`${i} ${options.map.units.distance.unit}`;return`<div ${n?`class='inactive'`:``} data-s=${t.i} data-i=${e.i} data-state=${t.name} data-regiment=${e.name}
        data-total=${e.a} data-distance="${i}" data-tip="${r(`Click to select regiment`)}">
        <svg width=".9em" height=".9em" style="margin-bottom:-1px; stroke: #333"><rect x="0" y="0" width="100%" height="100%" fill="${t.color}" ></svg>
        <div style="width:6em">${t.name.slice(0,11)}</div>
        <div style="width:1.2em; display:flex">${s.html(e.icon??``)}</div>
        <div style="width:13em">${e.name.slice(0,24)}</div>
        <div style="width:4em">${e.a}</div>
        <div style="width:4em">${c}</div>
      </div>`}).join(``),C.open(`regimentSelectorScreen`,{width:`fit-content`,title:r(`Add regiment to the battle`),position:{my:`left center`,at:`right+10 center`,of:`#battleScreen`},persistent:!0,onClose:u,buttons:[{label:r(`Add to attackers`),onClick:()=>l(`attackers`)},{label:r(`Add to defenders`),onClick:()=>l(`defenders`)},{label:r(`Cancel`),onClick:()=>C.close(`regimentSelectorScreen`)}]}),T(S(`regimentSelectorHeader`)),n.addEventListener(`click`,c);function c(e){let t=e.target;t.className===`inactive`?w(r(`Regiment is already in the battle`),!1,`error`):t.classList.toggle(`selected`)}function l(t){let i=n.querySelectorAll(`.selected`);i.length?(C.close(`regimentSelectorScreen`),i.forEach(n=>{let r=pack.states[+n.dataset.s].military.find(e=>e.i===+n.dataset.i);P(t,r),V(t),H();let i=e.defenders.regiments,a=e.attackers.regiments,o=t===`attackers`?a.length*-8:(i.length-1)*8;r.px=r.x,r.py=r.y,f(r,i[0].x,i[0].y+o)})):w(r(`Please select a regiment first`),!1,`error`)}function u(){n.innerHTML=``,n.removeEventListener(`click`,c)}}function I(){document.querySelectorAll(`#battleBottom > button`).forEach(e=>{e.style.display=`none`}),S(`battleNameSection`).style.display=`inline-block`,S(`battleNamePlace`).value=D.place??``,S(`battleNameFull`).value=D.name}function L(){document.querySelectorAll(`#battleBottom > button`).forEach(e=>{e.style.display=`inline-block`}),S(`battleNameSection`).style.display=`none`}function R(e){let t=e.target.value;D.name=t,C.open(`battleScreen`,{title:t})}function z(e){let t=D,n=e===`culture`?v.getCulture(pack.cells.culture[t.cell],void 0,void 0,``):v.getBase(m(v.nameBases.length-1));t.place=n,S(`battleNamePlace`).value=n,t.name=M(),S(`battleNameFull`).value=t.name,C.open(`battleScreen`,{title:t.name})}function B(e){return e.reduce((e,t)=>{for(let n in t.survivors)Object.hasOwn(t.survivors,n)&&(e[n]=(e[n]||0)+t.survivors[n]);return e},{})}function V(e){let t=D,n={skirmish:{melee:.2,ranged:2.4,mounted:.1,machinery:3,naval:1,armored:.2,aviation:1.8,magical:1.8},melee:{melee:2,ranged:1.2,mounted:1.5,machinery:.5,naval:.2,armored:2,aviation:.8,magical:.8},pursue:{melee:1,ranged:1,mounted:4,machinery:.05,naval:1,armored:1,aviation:1.5,magical:.6},retreat:{melee:.1,ranged:.01,mounted:.5,machinery:.01,naval:.2,armored:.1,aviation:.8,magical:.05},shelling:{melee:0,ranged:.2,mounted:0,machinery:2,naval:2,armored:0,aviation:.1,magical:.5},boarding:{melee:1,ranged:.5,mounted:.5,machinery:0,naval:.5,armored:.4,aviation:0,magical:.2},chase:{melee:0,ranged:.15,mounted:0,machinery:1,naval:1,armored:0,aviation:.15,magical:.5},withdrawal:{melee:0,ranged:.02,mounted:0,machinery:.5,naval:.1,armored:0,aviation:.1,magical:.3},blockade:{melee:.25,ranged:.25,mounted:.2,machinery:.5,naval:.2,armored:.1,aviation:.25,magical:.25},sheltering:{melee:.3,ranged:.5,mounted:.2,machinery:.5,naval:.2,armored:.1,aviation:.25,magical:.25},sortie:{melee:2,ranged:.5,mounted:1.2,machinery:.2,naval:.1,armored:.5,aviation:1,magical:1},bombardment:{melee:.2,ranged:.5,mounted:.2,machinery:3,naval:1,armored:.5,aviation:1,magical:1},storming:{melee:1,ranged:.6,mounted:.5,machinery:1,naval:.1,armored:.1,aviation:.5,magical:.5},defense:{melee:2,ranged:3,mounted:1,machinery:1,naval:.1,armored:1,aviation:.5,magical:1},looting:{melee:1.6,ranged:1.6,mounted:.5,machinery:.2,naval:.02,armored:.2,aviation:.1,magical:.3},surrendering:{melee:.1,ranged:.1,mounted:.05,machinery:.01,naval:.01,armored:.02,aviation:.01,magical:.03},surprise:{melee:2,ranged:2.4,mounted:1,machinery:1,naval:1,armored:1,aviation:.8,magical:1.2},shock:{melee:.5,ranged:.5,mounted:.5,machinery:.4,naval:.3,armored:.1,aviation:.4,magical:.5},landing:{melee:.8,ranged:.6,mounted:.6,machinery:.5,naval:.5,armored:.5,aviation:.5,magical:.6},flee:{melee:.1,ranged:.01,mounted:.5,machinery:.01,naval:.5,armored:.1,aviation:.2,magical:.05},waiting:{melee:.05,ranged:.5,mounted:.05,machinery:.5,naval:2,armored:.05,aviation:.5,magical:.5},maneuvering:{melee:0,ranged:.1,mounted:0,machinery:.2,naval:0,armored:0,aviation:1,magical:.2},dogfight:{melee:0,ranged:.1,mounted:0,machinery:.1,naval:0,armored:0,aviation:2,magical:.1}},r=B(t[e].regiments),i=t[e].phase,a=Math.max(options.map.units.population.scale/10,10);t[e].power=o(options.map.military.units.map(e=>(r[e.name]||0)*e.power*n[i][e.type]))/a;let s=t[e].power?Math.max(t[e].power|0,1):0;S(`battlePower_${e}`).innerHTML=String(s)}function H(){let t=D,n=t=>e(100-t**1.5*10+10,50,100),r=e=>Math.min((_(e)??0)/50,15),i=t.defenders.power/t.attackers.power;t.attackers.morale=n(i)-r(t.attackers.distances),t.defenders.morale=n(1/i)-r(t.defenders.distances),U(`attackers`),U(`defenders`)}function U(e){let t=D,n=S(`battleMorale_${e}`);n.dataset.tip=(n.dataset.tip||``).replace(n.value,``),n.value=String(t[e].morale|0),n.dataset.tip+=n.value}function W(){G(`attackers`),G(`defenders`),K(),V(`attackers`),V(`defenders`)}function G(e){let t=D,n=S(`battleDie_${e}`),r=+n.innerHTML,i;do i=m(1,6),n.innerHTML=String(i);while(i===r);t[e].die=i}function K(){let e=D,t=e.iteration,n=[e.attackers.morale,e.defenders.morale],r=e.attackers.power/e.defenders.power,i=()=>{let r=[e.attackers.phase||`skirmish`,e.defenders.phase||`skirmish`];if(h(1-n[0]/25))return[`retreat`,`pursue`];if(h(1-n[1]/25))return[`pursue`,`retreat`];if(r[0]===`skirmish`&&r[1]===`skirmish`){let n=B(e.attackers.regiments.concat(e.defenders.regiments)),r=o(Object.values(n)),i=o(options.map.military.units.filter(e=>e.type===`ranged`).map(e=>e.name).map(e=>n[e]))/r;if(h(i)||h(.8-t/10))return[`skirmish`,`skirmish`]}return[`melee`,`melee`]},a=()=>{let n=[e.attackers.phase||`shelling`,e.defenders.phase||`shelling`];if(n[0]===`withdrawal`)return[`withdrawal`,`chase`];if(n[0]===`chase`)return[`chase`,`withdrawal`];if(n[0]!==`boarding`){if(r<.5||h(e.attackers.casualties)&&r<1)return[`withdrawal`,`chase`];if(r>2||h(e.defenders.casualties)&&r>1)return[`chase`,`withdrawal`]}return n[0]===`boarding`||h(t/10-.1)?[`boarding`,`boarding`]:[`shelling`,`shelling`]},s=()=>{let i=[e.attackers.phase||`blockade`,e.defenders.phase||`sheltering`],a=[`blockade`,`sheltering`];if(i[0]===`retreat`||i[0]===`looting`)return i;if(h(1-n[0]/30)&&r<1)return[`retreat`,`pursue`];if(h(1-n[1]/15))return[`looting`,`surrendering`];if(h((r-1)/2))return[`storming`,`defense`];if(i[0]!==`storming`){let r=options.map.military.units.filter(e=>e.type===`machinery`).map(e=>e.name),s=B(e.attackers.regiments),c=o(r.map(e=>s[e]));t&&c&&h(.9)&&(a[0]=`bombardment`);let l=B(e.defenders.regiments),u=o(r.map(e=>l[e]));u&&h(.9)&&(a[1]=`bombardment`),t&&i[1]!==`sortie`&&u<c&&h(.25)&&h(n[1]/70)&&(a[1]=`sortie`)}return a},c=()=>[e.attackers.phase||`shock`,e.defenders.phase||`surprise`][1]===`surprise`&&h(1-r*t/5)?[`shock`,`surprise`]:h(1-n[0]/25)?[`retreat`,`pursue`]:h(1-n[1]/25)?[`pursue`,`retreat`]:[`melee`,`melee`],l=()=>{let r=[e.attackers.phase||`landing`,e.defenders.phase||`defense`];return r[1]===`waiting`?[`flee`,`waiting`]:r[1]===`pursue`?[`flee`,h(.3)?`pursue`:`waiting`]:r[1]===`retreat`?[`pursue`,`retreat`]:r[0]===`landing`?[h(t/2)?`melee`:`landing`,t?r[1]:h(.5)?`defense`:`shock`]:h(1-n[0]/40)?[`flee`,`pursue`]:h(1-n[1]/25)?[`pursue`,`retreat`]:[`melee`,`melee`]},u=()=>{let r=[e.attackers.phase||`maneuvering`,e.defenders.phase||`maneuvering`];return h(1-n[0]/25)?[`retreat`,`pursue`]:h(1-n[1]/25)?[`pursue`,`retreat`]:r[0]===`maneuvering`&&h(1-t/10)?[`maneuvering`,`maneuvering`]:[`dogfight`,`dogfight`]},d=(()=>{switch(e.type){case`field`:return i();case`naval`:return a();case`siege`:return s();case`ambush`:return c();case`landing`:return l();case`air`:return u();default:return i()}})();e.attackers.phase=d[0],e.defenders.phase=d[1];let f=S(`battlePhase_attackers`);f.className=`icon-button-${e.attackers.phase}`,f.dataset.tip=f.nextElementSibling.querySelector(`[data-phase='${d[0]}']`).dataset.tip;let p=S(`battlePhase_defenders`);p.className=`icon-button-${e.defenders.phase}`,p.dataset.tip=p.nextElementSibling.querySelector(`[data-phase='${d[1]}']`).dataset.tip}function re(){let e=D;if(!e.attackers.power){w(r(`Attackers army destroyed`),!1,`warn`);return}if(!e.defenders.power){w(r(`Defenders army destroyed`),!1,`warn`);return}let t=`Attackers: ${e.attackers.phase}, defenders: ${e.defenders.phase}`,n=e.phasesRecord.at(-1);n?.phase===t?n.count+=1:e.phasesRecord.push({phase:t,count:1});let i=e.attackers.power*(e.attackers.die/10+.4),a=e.defenders.power*(e.defenders.die/10+.4),o={skirmish:.1,melee:.2,pursue:.3,retreat:.3,boarding:.2,shelling:.1,chase:.03,withdrawal:.03,blockade:0,sheltering:0,sortie:.1,bombardment:.05,storming:.2,defense:.2,looting:.5,surrendering:.5,surprise:.3,shock:.3,landing:.3,flee:0,waiting:0,maneuvering:.1,dogfight:.2},s=Math.random()*Math.max(o[e.attackers.phase],o[e.defenders.phase]),c=s*a/(i+a),l=s*i/(i+a);q(`attackers`,c),q(`defenders`,l),e.attackers.casualties+=c,e.defenders.casualties+=l,e.attackers.morale=Math.max(e.attackers.morale-c*100-1,0),e.defenders.morale=Math.max(e.defenders.morale-l*100-1,0),J(`attackers`),J(`defenders`),e.iteration+=1,K(),V(`attackers`),V(`defenders`)}function q(e,t){let n=D;for(let r of n[e].regiments)for(let e in r.u){let n=.8+Math.random()*.4,i=Math.min(b(r.u[e]*t*n),r.survivors[e]);r.casualties[e]-=i,r.survivors[e]-=i}}function J(e){let t=D;for(let n of t[e].regiments){let e=S(`battle${n.state}-${n.i}`),t=e.querySelector(`.battleCasualties`),r=e.querySelector(`.battleSurvivors`),i=3;for(let e of options.map.military.units)t.querySelector(`td:nth-child(${i})`).innerHTML=String(n.casualties[e.name]||0),r.querySelector(`td:nth-child(${i})`).innerHTML=String(n.survivors[e.name]||0),i++;t.querySelector(`td:nth-child(${i})`).innerHTML=String(o(Object.values(n.casualties))),r.querySelector(`td:nth-child(${i})`).innerHTML=String(o(Object.values(n.survivors)))}U(e)}function Y(e){e.stopPropagation();let t=e.target,n=t.nextElementSibling,r=()=>{t.style.opacity=`1`,n.style.display=`none`};n.style.display===`block`?r():(t.style.opacity=`0.5`,n.style.display=`block`,document.getElementsByTagName(`body`)[0].addEventListener(`click`,r,{once:!0}))}function ie(e){let t=e.target;if(t.tagName!==`BUTTON`)return;let n=D;n.type=t.dataset.type,j(),K(),V(`attackers`),V(`defenders`),n.name=M(),C.open(`battleScreen`,{title:n.name})}function X(e,t){let n=e.target;if(n.tagName!==`BUTTON`)return;let r=D,i=n.dataset.phase;r[t].phase=i;let a=S(`battlePhase_${t}`);a.className=`icon-button-${i}`,a.dataset.tip=n.dataset.tip,V(t)}function ae(e){return e===1?`was annihilated`:e>.9?`was virtually wiped out`:e>.75?`was nearly destroyed`:e>.6?`was devastated`:e>.45?`sustained catastrophic losses`:e>.3?`sustained severe losses`:e>.2?`sustained heavy losses`:e>.1?`took considerable losses`:e>.05?`took noticeable losses`:e>0?`took minor losses`:`emerged unscathed`}function oe(){let e=D,n=e.name,i=Math.max(e.attackers.casualties,e.defenders.casualties),a=e.attackers.casualties+e.defenders.casualties,l=u(a?e.defenders.casualties/a:NaN,i);function u(e,t){return Number.isNaN(e)?[`standoff`,`standoff`]:t<.05?[`minor skirmishes`,`minor skirmishes`]:e>.95?[`attackers flawless victory`,`disorderly retreat of defenders`]:e>.7?[`attackers decisive victory`,`defenders disastrous defeat`]:e>.6?[`attackers victory`,`defenders defeat`]:e>.4?[`stalemate`,`stalemate`]:e>.3?[`attackers defeat`,`defenders victory`]:e>=0?[`attackers disorderly retreat`,`flawless victory of defenders`]:[`stalemate`,`stalemate`]}e.attackers.regiments.forEach(e=>{m(e,`attackers`)}),e.defenders.regiments.forEach(e=>{m(e,`defenders`)});function m(e,t){let r=`regiment${e.state}-${e.i}`;if(e.note){let r=t===`attackers`?l[0]:l[1],i=ae(e.a?Math.abs(o(Object.values(e.casualties)))/e.a:1),a=Object.keys(e.u).map(t=>e.u[t]?`${e.u[t]} ${t}`:null).filter(e=>!!e),s=a.length?` Initial forces: ${y(a)}.`:``,c=Object.keys(e.casualties).map(t=>e.casualties[t]?`${Math.abs(e.casualties[t])} ${t}`:null).filter(e=>!!e),u=c.length?` Casualties: ${y(c)}.`:``;e.note+=`<br><br>${n} (${options.map.lore.calendar.year} ${options.map.lore.calendar.eraShort}): ${r}. The regiment ${i}.${s}${u}`}e.u={...e.survivors},e.a=o(Object.values(e.u)),ee(`#armies`).select(`g#${r} > text`).text(c.getTotal(e)),f(e,e.px,e.py)}let _={i:(d(pack.markers)?.i??-1)+1,x:e.x,y:e.y,cell:e.cell,icon:s.glyph(`⚔️`),type:`battlefields`,dy:52,name:e.name,tags:[]};pack.markers.push(_),p.draw(`markers`);let v=(e,t)=>e.length>1?`${t?`regiments`:`forces`} of ${y([...new Set(e.map(e=>pack.states[e.state].name))])}`:`${g(pack.states[e[0].state].name)} ${e[0].name}`,b=e=>Math.min(t(e*100),100),x=(e,t)=>e.reduce((e,n)=>{for(let r in n.casualties)e[r]=(e[r]||0)+t(n,r);return e},{}),S=e=>{let t=Object.keys(e).map(t=>e[t]?`${e[t]} ${t}`:null).filter(e=>!!e);return t.length?y(t):``},C=(e,t)=>{let n=S(x(t.regiments,(e,t)=>(e.survivors[t]||0)+Math.abs(e.casualties[t]))),r=S(x(t.regiments,(e,t)=>Math.abs(e.casualties[t]))),i=n?`<br>${e} initial forces: ${n}.`:``;return r&&(i+=` Casualties: ${r}.`),i},T=l[+h(.7)],E=`The ${ne()} ended in ${T}`,O=`${e.name} took place in ${options.map.lore.calendar.year} ${options.map.lore.calendar.eraShort}. It was fought between ${v(e.attackers.regiments,1)} and ${v(e.defenders.regiments,0)}. ${E}.
      <br>Attackers losses: ${b(e.attackers.casualties)}%, defenders losses: ${b(e.defenders.casualties)}%.`;if(O+=C(`Attackers`,e.attackers),O+=C(`Defenders`,e.defenders),e.phasesRecord.length){let t=e.phasesRecord.map(e=>e.count>1?`${e.phase} (x${e.count})`:e.phase).join(`<br>`);O+=`<br><br>${r(`Engagement progression`)}:<br>${t}`}_.note=O,w(r(`{{battle}} is over. {{result}}`,{battle:e.name,result:E}),!0,`success`,4e3),Q(),$()}function Z(){let e=D;e.attackers.regiments.forEach(e=>{f(e,e.px,e.py)}),e.defenders.regiments.forEach(e=>{f(e,e.px,e.py)}),Q(),$()}function Q(){C.destroy(`battleScreen`),C.destroy(`regimentSelectorScreen`)}function $(){options.app.mode=null,D&&D.attackers.regiments.concat(D.defenders.regiments).forEach(e=>{delete e.px,delete e.py,delete e.casualties,delete e.survivors}),D=null}var se={open:O};export{se as BattleScreen};
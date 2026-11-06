import{i as e}from"./index-DOQT8b0l.js";import{c as t,ct as n,t as r}from"./layers-BuZ6CHWf.js";import{r as i}from"./node-utils-B7j8BhBd.js";import{t as a}from"./dialog-3wqBPvBH.js";import{o}from"./tooltips-Nm9ri5Ws.js";import{o as s}from"./production-generator-nLWGDzJc.js";import{d as c}from"./app-JxGef4iz.js";var l=`provincesRegeneration`;function u(){options.app.mode||(a.destroy(l),i(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${l}" class="dialog"></div>`),d(),a.open(l,{title:e(`Regenerate Provinces`),width:`32em`,maxHeight:600,position:{my:`center`,at:`center`,of:`svg`},buttons:[{label:e(`Regenerate`),onClick:f},{label:e(`Close`),onClick:()=>{a.close(l)}}]}))}function d(){let t=pack.states.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name.localeCompare(t.name)),r=e=>pack.provinces.filter(t=>t.i&&!t.removed&&t.state===e).length;for(let{i:e,coa:r}of t)r&&n.trigger(`stateCOA${e}`,r);let a=t.map(({i:e,name:t,fullName:n,color:i})=>`<div data-tip="${n||t}">
      <input id="${l}State${e}" class="checkbox" type="checkbox" value="${e}" checked />
      <label for="${l}State${e}" class="checkbox-label">
        <fill-box fill="${i}" disabled></fill-box>
        <svg class="coaIcon" viewBox="0 0 200 200"><use href="#stateCOA${e}"></use></svg>${t} (${r(e)})
      </label>
    </div>`),o=i(l);o.innerHTML=`
    <p style="margin-top: 0">${e(`Select states to regenerate provinces for. Locked provinces will remain as they are`)}</p>
    <div style="margin-bottom: 0.4em">
      <input id="${l}All" class="checkbox" type="checkbox" />
      <label for="${l}All" class="checkbox-label"><b>${e(`All states`)}</b></label>
    </div>
    <div class="stateList" style="width: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 0.3em">
      ${a.join(``)||e(`No states to regenerate provinces for`)}
    </div>`;let s=i(`${l}All`),c=Array.from(o.querySelectorAll(`.stateList input`)),u=()=>{let e=c.filter(e=>e.checked).length;s.checked=e===c.length,s.indeterminate=e>0&&e<c.length};u(),s.addEventListener(`change`,()=>{for(let e of c)e.checked=s.checked});for(let e of c)e.addEventListener(`change`,u)}function f(){let n=i(l).querySelectorAll(`.stateList input:checked`),u=Array.from(n,e=>Number(e.value));if(!u.length)return void o(e(`Please select at least one state`),!1,`error`);s.regenerate(!0,u),t(),r.draw(`borders`,`provinces`,`labels`,`emblems`),c(),a.close(l)}var p={open:u};export{p as ProvincesRegeneration};
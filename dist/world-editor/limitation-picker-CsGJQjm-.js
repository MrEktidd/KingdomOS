import{i as e,p as t}from"./index-J388_yXx.js";import{r as n}from"./node-utils-BA3zRxIe.js";import{t as r}from"./dialog-BYT3Byo1.js";import{o as i}from"./tooltips-D4kIN3ad.js";var a=`limitationPicker`,o=e=>e.filter(e=>e.i&&!e.removed);function s(e,t){return e?.length?e.map(e=>t.find(t=>t.i===e)?.name??``).join(`, `):`all`}function c({title:s,heading:c,items:l,allowed:u,onApply:d}){let f=o(l).map(({i:e,name:n,fullName:r,color:i})=>`<tr data-tip="${t(n)}">
      <td><span style="color:${t(i??``)}">⬤</span></td>
      <td>
        <input data-i="${e}" id="limitation${e}" type="checkbox" class="checkbox" ${!u?.length||u.includes(e)?`checked`:``}>
        <label for="limitation${e}" class="checkbox-label">${t(r||n)}</label>
      </td>
    </tr>`);r.destroy(a),n(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${a}" class="dialog"><b>${t(c)}:</b>
      <table style="margin-top:.3em"><tbody>${f.join(``)}</tbody></table>
    </div>`);let p=()=>Array.from(n(a).querySelectorAll(`input`));r.open(a,{width:`fit-content`,maxHeight:Math.max(window.innerHeight-40,300),title:s,position:{my:`center`,at:`center`,of:`svg`},buttons:[{label:e(`Invert`),onClick:()=>{for(let e of p())e.checked=!e.checked}},{label:e(`Apply`),onClick:()=>{let t=p().filter(e=>e.checked);if(!t.length)return i(e(`Select at least one element`),!1,`error`);d(t.length===p().length?[]:t.map(e=>Number(e.dataset.i))),r.close(a)}},{label:e(`Cancel`),onClick:()=>r.close(a)}]})}export{c as n,s as t};
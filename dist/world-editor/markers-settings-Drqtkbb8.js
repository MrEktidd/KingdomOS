import{i as e,p as t}from"./index-DOQT8b0l.js";import{m as n}from"./options-model-DdZ2yl81.js";import{t as r}from"./layers-BuZ6CHWf.js";import{r as i}from"./node-utils-B7j8BhBd.js";import{t as a}from"./dialog-3wqBPvBH.js";import{t as o}from"./controllers-J2Zz1cm6.js";import{W as s,d as c}from"./app-JxGef4iz.js";var l=`markersSettings`;function u(){options.app.mode||(a.destroy(l),i(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${l}" class="dialog"></div>`),f(),a.open(l,{title:e(`Markers generation settings`),maxHeight:600,position:{my:`left top`,at:`left+10 top+10`,of:`svg`},buttons:[{label:e(`Regenerate`),tip:e(`Apply changes and regenerate markers`),onClick:()=>{d(),s.regenerate(),r.draw(`markers`),c(),a.close(l)}},{label:e(`Close`),tip:e(`Close the window`),onClick:()=>a.close(l)}],onClose:p}))}function d(){let e=i(l).querySelectorAll(`tbody > tr`),t=Array.from(e).map(e=>{let t=e.querySelector(`.type`),n=e.querySelector(`.changeIcon`),r=e.querySelector(`.multiplier`);if(!t||!n||!r)throw Error(`Invalid markers configuration row`);return{type:t.value,icon:n.dataset.icon??``,multiplier:r.valueAsNumber}});s.setConfig(s.getConfig().map((e,n)=>({...e,...t[n]})))}function f(){let r=`<thead style='font-weight:bold'><tr>
    <td data-tip="${e(`Name`)}">${e(`Type`)}</td>
    <td data-tip="${e(`Marker icon`)}">${e(`Icon`)}</td>
    <td data-tip="${e(`Marker number multiplier`)}">${e(`Multiplier`)}</td>
    <td data-tip="${e(`Number of markers of that type on the current map`)}">${e(`Number`)}</td>
  </tr></thead>`,a=s.getConfig().map(({type:r,icon:i,multiplier:a})=>`<tr>
      <td><input class="type" value="${r}" /></td>
      <td>
        <button class="changeIcon" data-icon="${t(i)}" data-tip="${e(`Change the icon`)}" style="font-size: 1.2em">${n.html(i)}</button>
      </td>
      <td><input class="multiplier" type="number" min="0" max="100" step="0.1" value="${a}" /></td>
      <td style="text-align:center">${pack.markers.filter(e=>e.type===r).length}</td>
    </tr>`),c=i(l);c.innerHTML=`<table class="table">${r}<tbody>${a.join(``)}</tbody></table>`,c.querySelectorAll(`button.changeIcon`).forEach(e=>{e.addEventListener(`click`,()=>{o.IconPicker.open({current:e.dataset.icon??``,onPick:t=>{e.dataset.icon=t,e.innerHTML=n.html(t)}})})})}function p(){a.destroy(l)}var m={open:u};export{m as MarkersSettings};
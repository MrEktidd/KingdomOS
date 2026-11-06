import{i as e,r as t}from"./index-DOQT8b0l.js";import{cn as n,it as r,n as i,rt as a,sn as o}from"./options-model-DdZ2yl81.js";import{_ as s,h as c,t as l}from"./layers-BuZ6CHWf.js";import{r as u}from"./node-utils-B7j8BhBd.js";import{t as d}from"./dialog-3wqBPvBH.js";import{o as f}from"./tooltips-Nm9ri5Ws.js";import{t as p}from"./controllers-J2Zz1cm6.js";import{J as m,Y as h}from"./app-JxGef4iz.js";function g(){options.app.mode||(d.closeAll(`.stable`),_(),v(),d.open(`labelGroupsConfigurator`,{title:e(`Configure Label Groups`),maxHeight:Math.max(window.innerHeight-40,300),position:{my:`right top`,at:`right-10 top+10`,of:`svg`},onClose:A,buttons:[{label:e(`Apply`),onClick:()=>{u(`labelGroupsForm`).requestSubmit()}},{label:e(`Add`),onClick:()=>{u(`labelGroupsBody`).insertAdjacentHTML(`beforeend`,x({name:``,type:`state`,zoom:{min:null,max:null}},!0,0))}},{label:e(`Restore`),onClick:()=>{let e=n.getDefaultOptions();u(`labelsShowAll`).checked=e.showAll,v(e.groups)}},{label:e(`Cancel`),onClick:()=>{d.close(`labelGroupsConfigurator`)}}]}))}function _(){d.destroy(`labelGroupsConfigurator`);let n=`<div id="labelGroupsConfigurator" class="dialog stable">
    <form id="labelGroupsForm">
      <table class="table" style="white-space:nowrap; overflow-x:auto; max-width:100%">
        <colgroup>
          <col style="width:2.5em">
          <col style="width:8em">
          <col style="width:5.5em">
          <col style="width:4em">
          <col style="width:3.5em">
          <col style="width:3.5em">
          <col style="width:8.5em">
          <col style="width:3.5em">
          <col style="width:3.2em">
          <col style="width:3.2em">
        </colgroup>
        <thead>
          <tr>
            <th data-tip="${t(e(`Activate/deactivate group`),e(`Deactivated group labels are not visible`))}">${e(`Active`)}</th>
            <th data-tip="${t(e(`Group name`),e(`Must start with a letter or underscore, followed by letters, digits, underscores, or dashes`))}">${e(`Group`)}</th>
            <th data-tip="${e(`Label type, fixed after creation`)}">${e(`Type`)}</th>
            <th data-tip="${e(`Name display mode. Only applicable to States and Provinces`)}">${e(`Mode`)}</th>
            <th data-tip="${e(`Minimum zoom level to show the group`)}">${e(`Zoom min`)}</th>
            <th data-tip="${e(`Maximum zoom level to show the group`)}">${e(`Zoom max`)}</th>
            <th data-tip="${e(`Layer that must be toggled on for this group to be shown`)}">${e(`Layer dependency`)}</th>
            <th data-tip="${t(e(`Number of labels currently assigned to this group`),e(`Click the list icon to see them`))}">${e(`Labels`)}</th>
            <th data-tip="${e(`Rendering order: lower groups are rendered on top`)}">${e(`Order`)}</th>
            <th data-tip="${e(`Edit style or remove group`)}">${e(`Actions`)}</th>
          </tr>
        </thead>
        <tbody id="labelGroupsBody"></tbody>
      </table>
      <div id="labelGroupsMissingWrapper" style="display:none; gap:.4em; align-items:center; margin:.6em 0 0">
        <label data-tip="${e(`Groups referenced by labels but not defined here. Such labels are not rendered until they are reassigned to an existing group`)}"><strong>${e(`Missing groups`)}:</strong> <span id="labelGroupsMissing"></span></label>
      </div>
      <div style="display:flex; gap:1.2em; align-items:center; margin:.6em 0 0">
        <label data-tip="${e(`Ignore zoom bounds and show all labels regardless of the current zoom level`)}"><input id="labelsShowAll" class="checkbox" type="checkbox" ${options.app.labels.showAll?`checked`:``}><span class="checkbox-label">${e(`Show all labels`)} <small>[${e(`slow`)}]</small></span></label>
        <div style="padding: 0.5em 0; font-style: italic;">${e(`To change Burg Groups open {{- configurator}}.`,{configurator:`<a id="labelGroupsBurgGroupsLink" style="text-decoration: underline;">${e(`Burg Group Configurator`)}</a>`})}</div>
      </div>
    </form>
  </div>`;u(`dialogs`).insertAdjacentHTML(`beforeend`,n);let r=u(`labelGroupsForm`);r.addEventListener(`change`,D),r.addEventListener(`submit`,O),u(`labelGroupsBody`).addEventListener(`click`,w),u(`labelGroupsBody`).addEventListener(`change`,S),u(`labelGroupsBurgGroupsLink`).addEventListener(`click`,()=>p.BurgGroupEditor.open()),u(`labelGroupsMissing`).addEventListener(`click`,C)}function v(e=options.map.labels.groups){let t=b();u(`labelGroupsBody`).innerHTML=e.map(e=>x(e,!1,t.get(e.name)??0)).join(``),y(t,e)}function y(t,n){let r=new Set(n.map(({name:e})=>e)),i=[...t.entries()].filter(([e])=>!r.has(e)).sort();u(`labelGroupsMissingWrapper`).style.display=i.length?`flex`:`none`,u(`labelGroupsMissing`).innerHTML=i.map(([t,n])=>`${t} (${n})
        <button type="button" name="missing" data-group="${t}" class="icon-list-bullet"
          data-tip="${e(`Show labels of the {{group}} group in Labels Overview to reassign them`,{group:t})}"></button>`).join(`, `)}function b(){let e=new Map,t=t=>e.set(t,(e.get(t)??0)+1);return c().forEach(e=>void t(e.group)),e}function x(n,i=!1,s=0){let c=[`auto`,`short`,`full`],l=!!n.isDefault,u=l?e(`Default group for this type, can't be renamed`):t(e(`Group name`),e(`Must start with a letter or underscore, followed by letters, digits, underscores, or dashes`)),d=E(n.type),f=e(d?`Name display mode: auto picks the best fit, short/full force a specific name form`:`Name display mode. Only applicable to States and Provinces`),p=[...m.keys()].sort();return`<tr data-group="${i?``:n.name}" data-is-default="${l?`1`:``}">
      <td data-tip="${e(`Activate/deactivate group`)}"><input type="checkbox" name="active" class="native" ${n.active===!1?``:`checked`}></td>
      <td data-tip="${u}"><input type="text" name="name" value="${n.name}" ${l?`disabled`:`required`}></td>
      <td data-tip="${e(`Label type, fixed after creation`)}"><select name="type" ${i?``:`disabled`}>
        ${o.map(e=>`<option value="${e}" ${n.type===e?`selected`:``}>${r[e]}</option>`).join(``)}
      </select></td>
      <td data-tip="${f}"><select name="mode" ${d?``:`disabled`}>
        ${c.map(e=>`<option value="${e}" ${(n.mode||`auto`)===e?`selected`:``}>${a[e]??e}</option>`).join(``)}
      </select></td>
      <td data-tip="${e(`Minimum zoom to show the group, leave empty for no limit`)}"><input type="number" name="zoom-min" min="0.01" max="200" step=".01" value="${n.zoom.min??``}"></td>
      <td data-tip="${e(`Maximum zoom to show the group, leave empty for no limit`)}"><input type="number" name="zoom-max" min="0.01" max="200" step=".01" value="${n.zoom.max??``}"></td>
      <td data-tip="${e(`Layer that must be toggled on for this group to be shown`)}"><select name="dependency">
        <option value="">${e(`None`)}</option>
        ${p.map(e=>`<option value="${e}" ${n.layerDependency===e?`selected`:``}>${h(e)}</option>`).join(``)}
      </select></td>
      <td data-tip="${e(`Number of labels currently assigned to this group`)}" style="text-align:center">
        <div style="min-width:2em; display:inline-block">${s}</div>
        <button type="button" name="list" class="icon-list-bullet" data-tip="${e(`Show labels of this group in Labels Overview`)}"></button>
      </td>
      <td data-tip="${e(`Assignment order: move group up or down`)}"><button type="button" name="up" class="icon-up-open" data-tip="${e(`Move up`)}"></button><button type="button" name="down" class="icon-down-open" data-tip="${e(`Move down`)}"></button></td>
      <td><button type="button" name="style" class="icon-brush" data-tip="${e(`Edit style`)}"></button><span data-tip="${e(l?`Default groups can't be removed`:`Remove`)}"><button type="button" name="remove" class="icon-trash-empty" ${l?`disabled`:``}></button></span></td>
    </tr>`}function S(e){let t=e.target;if(!(t instanceof HTMLSelectElement)||t.name!==`type`)return;let n=t.closest(`tr`)?.querySelector(`[name="mode"]`);if(!n)return;let r=E(t.value);n.disabled=!r,r||(n.value=`auto`)}function C(e){let t=e.target.closest(`button[name='missing']`);t?.dataset.group&&p.LabelsOverview.open(t.dataset.group)}function w(e){let t=e.target.closest(`button[name]`);if(!t||t.disabled)return;let n=t.closest(`tr`);if(n){if(t.name===`up`){let e=n.previousElementSibling;e&&n.parentNode.insertBefore(n,e)}else if(t.name===`down`){let e=n.nextElementSibling;e&&n.parentNode.insertBefore(e,n)}else if(t.name===`style`){let e=n.querySelector(`[name="name"]`).value.trim();e&&p.StyleEditor.open(`labels`,e)}else if(t.name===`list`){let e=n.dataset.group;e&&p.LabelsOverview.open(e)}else t.name===`remove`&&T(n)}}function T(t){u(`labelGroupsBody`).children.length<2?f(e(`At least one group should be defined`),!1,`error`):d.confirm({title:e(`Remove`),message:e(`Remove the group? This won't affect labels unless the changes are applied.`),confirm:e(`Remove`),onConfirm:()=>{t.remove(),D()}})}function E(e){return[`state`,`province`].includes(e)}function D(){let t=u(`labelGroupsForm`),n=Array.from(t.querySelectorAll(`input[name="name"]`)),r=n.map(e=>e.value.trim());n.forEach(t=>{if(t.disabled){t.setCustomValidity(``);return}let n=``,i=t.value.trim(),a=/^[\p{L}_][\p{L}\p{N}_-]*$/u.test(i),o=r.filter(e=>e===i).length===1;a||(n=e(`Group name must start with a letter or underscore and not contain special characters`)),o||(n=e(`Group name should be unique`)),t.setCustomValidity(n)});let i=t.checkValidity();return i||t.reportValidity(),i}function O(t){if(t.preventDefault(),!D())return;let r=Array.from(u(`labelGroupsBody`).children);if(!r.length)return void f(e(`At least one group should be defined`),!1,`error`);let a=new Set;r.forEach(e=>{let t=e.dataset.group,r=k(e);a.add(r.name),r.name!==t&&(t?(n.regroup(t,r.name),styles.labels.groups[r.name]=styles.labels.groups[t],delete styles.labels.groups[t]):styles.labels.groups[r.name]=s(r))}),options.map.labels.groups.forEach(e=>{if(a.has(e.name))return;let t=n.getFallbackGroup(e.type);n.regroup(e.name,t.name),delete styles.labels.groups[e.name]}),options.map.labels.groups=r.map(k),i.set(e=>e.app.labels.showAll=u(`labelsShowAll`).checked);for(let e of options.map.labels.groups)styles.labels.groups[e.name]??=s(e);l.draw(`labels`),d.close(`labelGroupsConfigurator`)}function k(e){let t=e.querySelector(`[name="name"]`).value.trim(),n=e.querySelector(`[name="type"]`).value,r=e.querySelector(`[name="active"]`).checked,i=e.querySelector(`[name="mode"]`).value,a=e.querySelector(`[name="zoom-min"]`),o=e.querySelector(`[name="zoom-max"]`),s=e.querySelector(`[name="dependency"]`).value.trim(),c={name:t,type:n,zoom:{min:a.value===``?null:a.valueAsNumber,max:o.value===``?null:o.valueAsNumber}};return r||(c.active=!1),i!==`auto`&&(c.mode=i),l.has(s)&&(c.layerDependency=s),e.dataset.isDefault===`1`&&(c.isDefault=!0),c}function A(){d.destroy(`labelGroupsConfigurator`)}var j={open:g};export{j as LabelGroupsConfigurator};
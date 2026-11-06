import{i as e,m as t,r as n}from"./index-DOQT8b0l.js";import{V as r,cn as i,n as a}from"./options-model-DdZ2yl81.js";import{t as o}from"./layers-BuZ6CHWf.js";import{r as s}from"./node-utils-B7j8BhBd.js";import{t as c}from"./dialog-3wqBPvBH.js";import{o as l}from"./tooltips-Nm9ri5Ws.js";import{t as u}from"./controllers-J2Zz1cm6.js";import{d}from"./app-JxGef4iz.js";import{n as f}from"./limitation-picker-DU2PSFYF.js";var p=/^[\p{L}_][\p{L}\p{N}_-]*$/u;function m(){options.app.mode||(c.closeAll(`.stable`),h(),_(),c.open(`burgGroupsEditor`,{title:e(`Configure burg groups`),position:{my:`center`,at:`center`,of:`svg`},onClose:g,buttons:[{label:e(`Apply`),onClick:()=>{s(`burgGroupsForm`).requestSubmit()}},{label:e(`Add`),onClick:()=>{let e={name:``,order:Math.max(0,...options.map.burgs.groups.map(({order:e})=>e))+1,active:!0};s(`burgGroupsBody`).insertAdjacentHTML(`beforeend`,v(e))}},{label:e(`Restore`),onClick:()=>{_(r.getDefaultGroups())}},{label:e(`Cancel`),onClick:()=>{c.close(`burgGroupsEditor`)}}]}))}function h(){c.destroy(`burgGroupsEditor`);let t=`<div id="burgGroupsEditor" class="dialog stable">
    <form id="burgGroupsForm">
      <table class="table">
        <thead>
          <tr>
            <th data-tip="${e(`Rendering order: higher values are rendered on top`)}">${e(`Order`)}</th>
            <th data-tip="${e(`Group name`)}">${e(`Name`)}</th>
            <th data-tip="${e(`Burg preview generator`)}">${e(`Preview generator`)}</th>
            <th data-tip="${e(`Set min and max population constraint in population points (see the multiplier in Units Editor)`)}" colspan="3">${e(`Population`)}</th>
            <th data-tip="${e(`Select allowed biomes`)}">${e(`Biomes`)}</th>
            <th data-tip="${e(`Select allowed states`)}">${e(`States`)}</th>
            <th data-tip="${e(`Select allowed cultures`)}">${e(`Cultures`)}</th>
            <th data-tip="${e(`Select allowed religions`)}">${e(`Religions`)}</th>
            <th data-tip="${e(`Select allowed features`)}">${e(`Features`,{context:`burg`})}</th>
            <th data-tip="${e(`Number of burgs in group`)}">${e(`Count`)}</th>
            <th data-tip="${e(`Activate/deactivate group`)}">${e(`Active`)}</th>
            <th data-tip="${e(`Select group to be assigned if burg doesn't pass the criteria for other groups`)}">
              ${e(`Default`)}
            </th>
          </tr>
        </thead>
        <tbody id="burgGroupsBody"></tbody>
      </table>
    </form>
    <div style="padding: 0.5em 0; font-style: italic;">
      ${e(`Burg population is calculated as {{formula}}, see the {{- editor}}.`,{formula:`value * population_point * urbanization_rate`,editor:`<a style="text-decoration: underline;" id="burgGroupsUnitsEditorLink">${e(`Units Editor`)}</a>`})}
      <br>${e(`Applying changes reclassifies Burgs, but label groups are not affected. Reconcile label groups in {{- configurator}}.`,{configurator:`<a id="burgGroupsLabelGroupsLink" style="text-decoration: underline;">${e(`Label Group Configurator`)}</a>`})}
    </div>
  </div>`;s(`dialogs`).insertAdjacentHTML(`beforeend`,t);let n=s(`burgGroupsForm`);n.addEventListener(`change`,S),n.addEventListener(`submit`,T),s(`burgGroupsBody`).addEventListener(`click`,e=>{let t=e.target,n=t.closest(`tr`);if(n){if(t.getAttribute(`name`)===`biomes`)return y(t,pack.biomes.filter(e=>!e.removed).map(({i:e,name:t,color:n})=>({i:e,name:t,color:n})));if(t.getAttribute(`name`)===`states`)return y(t,pack.states);if(t.getAttribute(`name`)===`cultures`)return y(t,pack.cultures);if(t.getAttribute(`name`)===`religions`)return y(t,pack.religions);if(t.getAttribute(`name`)===`features`)return b(t);if(t.getAttribute(`name`)===`up`){let e=n.previousElementSibling;e&&n.parentNode.insertBefore(n,e)}else if(t.getAttribute(`name`)===`down`){let e=n.nextElementSibling;e&&n.parentNode.insertBefore(e,n)}else if(t.getAttribute(`name`)===`remove`)return x(n)}}),s(`burgGroupsUnitsEditorLink`).addEventListener(`click`,()=>u.UnitsEditor.open()),s(`burgGroupsLabelGroupsLink`).addEventListener(`click`,()=>u.LabelGroupsConfigurator.open())}function g(){c.destroy(`burgGroupsEditor`)}function _(e=options.map.burgs.groups){let t=e.map(v);s(`burgGroupsBody`).innerHTML=t.join(``)}function v(t){let r=pack.burgs.filter(e=>!e.removed&&e.group===t.name).length;return`<tr name="${t.name}">
      <td data-tip="${e(`Rendering order: higher values are rendered on top`)}"><input type="number" name="order" min="1" max="999" step="1" required value="${t.order||``}" /></td>
      <td data-tip="${n(e(`Group name`),e(`Must start with a letter or underscore, followed by letters, digits, underscores, or dashes`),e(`Spaces are not allowed`))}"><input type="text" name="name" value="${t.name}" required /></td>
      <td data-tip="${e(`Burg preview generator`)}">
        <select name="preview">
          <option value="" ${t.preview?``:`selected`}>${e(`No`)}</option>
          <option value="watabou-city" ${t.preview===`watabou-city`?`selected`:``}>Watabou City</option>
          <option value="watabou-village" ${t.preview===`watabou-village`?`selected`:``}>Watabou Village</option>
          <option value="watabou-dwelling" ${t.preview===`watabou-dwelling`?`selected`:``}>Watabou Dwelling</option>
        </select>
      </td>
      <td data-tip="${e(`Set min and max population constraint in population points (see the multiplier in Units Editor)`)}"><input type="number" name="min" min="0" step="any" value="${t.min||``}" /></td>
      <td data-tip="${e(`Set min and max population constraint in population points (see the multiplier in Units Editor)`)}"><input type="number" name="max" min="0" step="any" value="${t.max||``}" /></td>
      <td data-tip="${e(`Set population percentile: 0-100, where 90 means the burg must have a population higher than 90% of all burgs`)}"><input type="number" name="percentile" min="0" max="100" step="any" value="${t.percentile||``}" /></td>
      <td data-tip="${e(`Select allowed biomes`)}">
        <input type="hidden" name="biomes" value="${t.biomes||``}">
        <button type="button" name="biomes">${t.biomes?e(`Some`):e(`All`)}</button>
      </td>
      <td data-tip="${e(`Select allowed states`)}">
        <input type="hidden" name="states" value="${t.states||``}">
        <button type="button" name="states">${t.states?e(`Some`):e(`All`)}</button>
      </td>
      <td data-tip="${e(`Select allowed cultures`)}">
        <input type="hidden" name="cultures" value="${t.cultures||``}">
        <button type="button" name="cultures">${t.cultures?e(`Some`):e(`All`)}</button>
      </td>
      <td data-tip="${e(`Select allowed religions`)}">
        <input type="hidden" name="religions" value="${t.religions||``}">
        <button type="button" name="religions">${t.religions?e(`Some`):e(`All`)}</button>
      </td>
      <td data-tip="${e(`Select allowed features`)}" >
        <input type="hidden" name="features" value='${JSON.stringify(t.features||{})}'>
        <button type="button" name="features">${Object.keys(t.features||{}).length?e(`Some`):e(`Any`)}</button>
      </td>
      <td data-tip="${e(`Number of burgs in group`)}">${r}</td>
      <td data-tip="${e(`Activate/deactivate group`)}"><input type="checkbox" name="active" class="native" ${t.active&&`checked`} /></td>
      <td data-tip="${e(`Select group to be assigned if other groups are not passed`)}"><input type="radio" name="isDefault" ${t.isDefault&&`checked`}></td>
      <td data-tip="${e(`Assignment order: move group up or down`)}"><button type="button" name="up" class="icon-up-big"></button></td>
      <td data-tip="${e(`Assignment order: move group up or down`)}"><button type="button" name="down" class="icon-down-big"></button></td>
      <td data-tip="${e(`Remove`)}"><button type="button" name="remove" class="icon-trash"></button></td>
    </tr>`}function y(t,n){let r=t.previousElementSibling;f({title:e(`Limit group`),heading:e(`Limit group by {{feature}}`,{feature:t.getAttribute(`name`)}),items:n,allowed:r.value?r.value.split(`,`).map(Number):[],onApply:n=>{r.value=n.join(`,`),t.innerHTML=n.length?e(`Some`):e(`All`)}})}function b(t){let n=t.previousElementSibling.value,r=n?JSON.parse(n):{},i=[{name:`capital`,icon:`icon-star`},{name:`port`,icon:`icon-anchor`},{name:`citadel`,icon:`icon-chess-rook`},{name:`walls`,icon:`icon-fort-awesome`},{name:`plaza`,icon:`icon-store`},{name:`temple`,icon:`icon-chess-bishop`},{name:`shanty`,icon:`icon-campground`}],a=i.map(({name:t,icon:n})=>`
        <tr data-tip="${e(`Select limitation for burg feature: {{feature}}`,{feature:t})}">
          <td>
            <span class="${n}"></span>
            <span style="margin-left:.2em">${t}</span>
          </td>
          <td>
            <input type="radio" name="${t}" value="true" ${r[t]===!0?`checked`:``} style="margin:0" >
          </td>
          <td>
            <input type="radio" name="${t}" value="false" ${r[t]===!1?`checked`:``} style="margin:0">
          </td>
          <td>
            <input type="radio" name="${t}" value="undefined" ${r[t]===void 0?`checked`:``} style="margin:0">
          </td>
        </tr>`);c.message({message:`
      <form id="featuresLimitationForm">
        <table>
          <thead style="font-weight:bold">
            <td style="width:6em">${e(`Features`,{context:`burg`})}</td>
            <td style="width:3em">${e(`True`)}</td>
            <td style="width:3em">${e(`False`)}</td>
            <td style="width:3em">${e(`Any`)}</td>
          </thead>
          <tbody>
            ${a.join(``)}
          </tbody>
        </table>
      </form>`,width:`fit-content`,title:e(`Limit group by features`),buttons:[{label:e(`Apply`),onClick:()=>{let n=s(`featuresLimitationForm`),r=i.reduce((e,{name:t})=>{let r=n[t].value;return r!==`undefined`&&(e[t]=r===`true`),e},{});t.previousElementSibling.value=JSON.stringify(r),t.innerHTML=Object.keys(r).length?e(`Some`):e(`Any`)}},{label:e(`Cancel`)}]})}function x(t){s(`burgGroupsBody`).children.length<2?l(e(`At least one group should be defined`),!1,`error`):c.confirm({title:e(`Remove`),message:`${e(`Are you sure you want to remove the group?`)}<br>${e(`This WON'T change the burgs unless the changes are applied`)}`,confirm:e(`Remove`),onConfirm:()=>{t.remove(),S()}})}function S(){let t=s(`burgGroupsForm`),n=t.name;if(n.length){let t=Array.from(n).map(e=>e.value);n.forEach(n=>{let r=n.value,i=p.test(r),a=t.filter(e=>e===r).length===1,o=i?a?``:e(`Group name should be unique`):e(`Group name must start with a letter or underscore and then contain only letters, digits, underscores, or dashes`);n.setCustomValidity(o)})}else{let t=n.value,r=p.test(t)?``:e(`Group name must start with a letter or underscore and then contain only letters, digits, underscores, or dashes`);n.setCustomValidity(r)}let r=t.active;if(r.length){let t=Array.from(r).map(e=>e.checked);r[0].setCustomValidity(t.includes(!0)?``:e(`At least one group should be active`))}else r.setCustomValidity(r.checked?``:e(`At least one group should be active`));let i=t.isDefault;if(i.length){let t=Array.from(i).map(e=>e.checked);i[0].setCustomValidity(t.includes(!0)?``:e(`At least one group should be default`))}else i.setCustomValidity(i.checked?``:e(`At least one group should be default`));let a=t.checkValidity();return a||t.reportValidity(),a}function C(e){let t=t=>e.querySelector(`input[name="${t}"]`),n=e=>{let n=t(e).valueAsNumber;return Number.isNaN(n)||n===0?void 0:n},r=e=>{let n=t(e).value;return n?n.split(`,`).map(Number):void 0};return{name:t(`name`).value,order:t(`order`).valueAsNumber,active:t(`active`).checked,isDefault:t(`isDefault`).checked,preview:e.querySelector(`select[name="preview"]`).value||void 0,min:n(`min`),max:n(`max`),percentile:n(`percentile`),features:w(t(`features`).value),biomes:r(`biomes`),states:r(`states`),cultures:r(`cultures`),religions:r(`religions`)}}function w(e){if(!t(e))return;let n=JSON.parse(e);return Object.keys(n).length?n:void 0}function T(t){if(t.preventDefault(),!S())return;let n=Array.from(s(`burgGroupsBody`).children);if(!n.length){l(e(`At least one group should be defined`),!1,`error`);return}options.map.burgs.groups=n.map(C),a.save();let u=pack.burgs.filter(e=>e.i&&!e.removed),f=u.map(e=>e.population).sort((e,t)=>e-t);u.forEach(e=>void r.defineGroup(e,f)),i.ensureBurgLabelGroups(),r.ensureBurgGroupStyles(),o.draw(`burgIcons`),o.draw(`labels`),d(),c.close(`burgGroupsEditor`)}var E={open:m};export{E as BurgGroupEditor};
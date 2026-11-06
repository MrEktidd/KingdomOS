import{D as e,E as t,f as n,h as r,i,r as a}from"./index-J388_yXx.js";import{K as o,at as s,ot as c}from"./options-model-Cj3O8K4p.js";import{a as l,t as u}from"./pack-generator-BfWP9wix.js";import{a as d,v as f}from"./notices-DWyx0Rz8.js";import{Mt as p,n as m,t as h}from"./layers-D3_jdNGw.js";import{a as g,d as ee,i as te,r as _,z as v}from"./node-utils-BA3zRxIe.js";import{t as ne}from"./drag-DVHtGrYF.js";import{n as re}from"./highlight-D9-ri4j0.js";import{t as y}from"./csv-DubBayaC.js";import{n as b,t as x}from"./dialog-BYT3Byo1.js";import{t as ie}from"./viewbox-events-Hxiu3rT6.js";import{o as S,t as ae}from"./tooltips-D4kIN3ad.js";import{t as C}from"./controllers-COq_bdk_.js";import{a as w,o as T}from"./units-DInzt-GH.js";import{W as E,c as oe,s as se,u as ce}from"./app-8AGFuk3c.js";import{a as le,i as D,n as O,r as ue}from"./table-DIPbIlqo.js";import{t as de}from"./highlighting-DhOzxliE.js";var k=`religionsEditor`,A=[`Id`,`Name`,`Color`,`Type`,`Form`,`Supreme Deity`,`Culture`,`Area`,`Cells`,`Believers`,`Origins`,`Potential`,`Expansionism`,`Tags`],fe=`Religions`,j={my:`right top`,at:`right-10 top+10`,of:`svg`},M,N=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:i(`Religion`),width:`14em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`type`,label:i(`Type`),width:`7.5em`,defaultSort:`asc`,sortBy:e=>e.type||``,sortType:`alpha`},{key:`form`,label:i(`Form`),width:`7em`,mobileHidden:!0,sortBy:e=>e.form||``,sortType:`alpha`},{key:`deity`,label:i(`Deity`),width:`14em`,mobileHidden:!0,sortBy:e=>e.deity||``,sortType:`alpha`},{key:`area`,label:i(`Area`),width:`7em`,mobileHidden:!0,sortBy:e=>e.area||0},{key:`population`,label:i(`Population`),width:`6em`,sortBy:e=>(e.rural||0)*options.map.units.population.scale+(e.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate},{key:`expansion`,label:i(`Expansion`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansion||``,sortType:`alpha`},{key:`expansionism`,label:i(`Expansionism`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansionism||0},{key:`tags`,label:i(`Tags`),width:`10em`,hidden:!0,sortBy:e=>o.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}];function pe(){let e=M?.search?.toLowerCase().trim(),t=pack.religions.filter(e=>!e.removed&&!(e.i&&!e.cells&&!M.showExtinct));return e?t.filter(t=>o.matches(e,t.name,t.tags,[t.deity,t.form,t.type])):t}var P=ue({getData:()=>oe(k,pe(),N),onUpdate:B});function F(){options.app.mode||(M=b.get(k,`filters`,()=>({showExtinct:!1,search:``})),x.closeAll(`#${k}, .stable`),h.show(`religions`),h.hide(`states`,`biomes`),h.hide(`cultures`,`provinces`),L(),z(),K(),P.reset(),x.open(k,{title:i(`Religions Editor`),width:`fit-content`,onClose:Le,position:j}))}function I(){M.search=_(`religionsSearch`).value,b.set(k,`filters`,M),P.reset()}function L(){x.destroy(`religionsEditor`);let e=`<div id="religionsEditor" class="dialog stable editorDialog">
    <div id="religionsBody" class="table" data-type="absolute">${D({dialogId:k,columns:N})}</div>
    <div id="religionsFilters" data-tip="${i(`Apply a filter`)}" class="editorFilters">
      <label for="religionsSearch" data-tip="${i(`Filter by name, deity, form, type, or tag`)}">
        ${i(`Search`)}: <input id="religionsSearch" type="search" />
      </label>
    </div>

    <div id="religionsFooter" class="totalLine">
      <div data-tip="${i(`Total number of organized religions`)}" style="margin-left: 12px">
        ${i(`Organized`,{context:`count`})}:&nbsp;<span id="religionsOrganized">0</span>
      </div>
      <div data-tip="${i(`Total number of heresies`)}" style="margin-left: 12px">
        ${i(`Heresies`)}:&nbsp;<span id="religionsHeresies">0</span>
      </div>
      <div data-tip="${i(`Total number of cults`)}" style="margin-left: 12px">
        ${i(`Cults`)}:&nbsp;<span id="religionsCults">0</span>
      </div>
      <div data-tip="${i(`Total number of folk religions`)}" style="margin-left: 12px">
        ${i(`Folk`,{context:`count`})}:&nbsp;<span id="religionsFolk">0</span>
      </div>
      <div data-tip="${i(`Total land area`)}" style="margin-left: 12px" data-col="area">
        ${i(`Land area`)}:&nbsp;<span id="religionsFooterArea">0</span>
      </div>
      <div data-tip="${i(`Total number of believers (population)`)}" style="margin-left: 12px" data-col="population">
        ${i(`Believers`)}:&nbsp;<span id="religionsFooterPopulation">0</span>
      </div>
    </div>

    <div id="religionsBottom" class="editorToolbar">
      <button id="religionsEditorRefresh" data-tip="${i(`Refresh`)}" class="icon-cw"></button>
      <button id="religionsEditStyle" data-tip="${i(`Edit style in Style Editor`)}" class="icon-adjust"></button>
      <button id="religionsLegend" data-tip="${i(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="religionsPercentage" data-tip="${i(`Toggle percentage / absolute values views`)}" class="icon-percent"></button>
      <button id="religionsHeirarchy" data-tip="${i(`Religions tree`)}" class="icon-sitemap"></button>
      <button id="religionsExtinct" data-tip="${i(`Show/hide extinct religions (religions without cells)`)}" class="icon-eye-off"></button>

      <button id="religionsManually" data-tip="${i(`Manually re-assign religions`)}" class="icon-brush"></button>
      <button id="religionsAdd" data-tip="${a(i(`Add`),i(`Hold Shift to add multiple`))}" class="icon-plus"></button>
      <button id="religionsExport" data-tip="${i(`Save data as a CSV file`)}" class="icon-download"></button>
      <button id="religionsImport" data-tip="${i(`Upload data from a CSV file`)}" class="icon-upload"></button>
      <button id="religionsRecalculate" data-tip="${i(`Recalculate religions based on current values of growth-related attributes`)}" class="icon-retweet"></button>
      <span
        data-tip="${i(`Allow religion center, extent, and expansionism changes to take an immediate effect`)}"
        class="editorToolbarPanel"
      >
        <input id="religionsAutoChange" class="checkbox" type="checkbox" />
        <label for="religionsAutoChange" class="checkbox-label"><i>${i(`auto-apply changes`)}</i></label>
      </span>
    </div>
  </div>`;_(`dialogs`).insertAdjacentHTML(`beforeend`,e),Y();let t=_(`religionsSearch`);t.value=M.search??``,t.addEventListener(`input`,I),se(k,P.reset),de(k,({cellId:e})=>pack.cells.religion[e]),_(`religionsEditorRefresh`).addEventListener(`click`,R),O({dialogId:k,columns:N,onUpdate:()=>x.update(k,{width:`fit-content`,position:j})}),_(`religionsEditStyle`).addEventListener(`click`,()=>void C.StyleEditor.open(`religions`)),_(`religionsLegend`).addEventListener(`click`,Oe),_(`religionsPercentage`).addEventListener(`click`,q),_(`religionsHeirarchy`).addEventListener(`click`,J),_(`religionsExtinct`).addEventListener(`click`,ke),_(`religionsManually`).addEventListener(`click`,Ae),_(`religionsAdd`).addEventListener(`click`,Me),_(`religionsExport`).addEventListener(`click`,Pe),_(`religionsImport`).addEventListener(`click`,()=>y.pick(ze)),_(`religionsRecalculate`).addEventListener(`click`,()=>Q(!0))}function R(){z(),P.refresh()}function z(){let{cells:e,religions:t,burgs:n}=pack;t.forEach(e=>{e.cells=e.area=e.rural=e.urban=0});for(let r of e.i){if(e.h[r]<20)continue;let i=e.religion[r];t[i].cells+=1,t[i].area+=e.area[r],t[i].rural+=e.pop[r];let a=e.burg[r];a&&(t[i].urban+=n[a].population)}}function B(n){let r=` ${T()}`,s=``,c=0,l=0;for(let e of n.all)c+=w(e.area??0),l+=t((e.rural??0)*options.map.units.population.scale+(e.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate);for(let c of n.rows){let n=w(c.area??0),l=(c.rural??0)*options.map.units.population.scale,u=(c.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,d=t(l+u),f=a(i(`Believers: {{total}}; Rural areas: {{rural}}; Urban areas: {{urban}}`,{total:e(d),rural:e(l),urban:e(u)}),i(`Click to change`));c.i?s+=`<div
      class="states"
      data-id=${c.i}
      data-name="${c.name}"
      data-color="${c.color}"
      data-area=${n}
      data-population=${d}
      data-type="${c.type}"
      data-form="${c.form}"
      data-deity="${c.deity||``}"
      data-expansion="${c.expansion}"
      data-expansionism="${c.expansionism}"
    >
      <fill-box fill="${c.color}" data-col="color"></fill-box>
      <input data-tip="${a(i(`Name`),i(`Click and type to change`))}" class="religionName"
        value="${c.name}" autocorrect="off" spellcheck="false" data-col="name" />
      <select data-tip="${i(`Religion type`)}" class="religionType" data-col="type">
        ${V(c.type)}
      </select>
      <input data-tip="${i(`Religion form`)}" class="religionForm"
        value="${c.form}" autocorrect="off" spellcheck="false" data-col="form" />
      <div data-col="deity">
        <span data-tip="${i(`Click to re-generate supreme deity`)}" class="icon-arrows-cw pointer"></span>
        <input data-tip="${i(`Religion supreme deity`)}" class="religionDeity"
          value="${c.deity||``}" autocorrect="off" spellcheck="false" />
      </div>
      <div data-col="area">
        <span data-tip="${i(`Religion area`)}" style="padding-right: 4px" class="icon-map-o"></span>
        <div data-tip="${i(`Religion area`)}" class="religionArea">${e(n)+r}</div>
      </div>
      <div data-col="population">
        <span data-tip="${f}" class="icon-male"></span>
        <div data-tip="${f}" class="religionPopulation pointer">${e(d)}</div>
      </div>
      ${me(c)}
      <div data-col="tags">
        <input
          data-tip="${i(`Tags (comma-separated)`)}"
          class="religionTags"
          value="${o.format(c.tags)}"
          placeholder="${i(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
      ${ce(i(`Edit free text notes (legend)`))}
      <span data-col="locate" data-tip="${i(`Locate on map`)}" class="icon-target"></span>
      <span data-col="lock" data-tip="${i(`Lock`)}" class="icon-lock${c.lock?``:`-open`}"></span>
      <span data-col="remove" data-tip="${i(`Remove`)}" class="icon-trash-empty"></span>
    </div>`:s+=`<div
        class="states"
        data-id="${c.i}"
        data-name="${c.name}"
        data-color=""
        data-area="${n}"
        data-population="${d}"
        data-type=""
        data-form=""
        data-deity=""
        data-expansion=""
        data-expansionism=""
      >
        <svg width="9" height="9" class="placeholder" data-col="color"></svg>
        <input data-tip="${a(i(`Name`),i(`Click and type to change`))}" class="religionName italic"
          value="${c.name}" autocorrect="off" spellcheck="false" data-col="name" />
        <select data-tip="${i(`Religion type`)}" class="religionType placeholder" data-col="type">
          ${V(c.type)}
        </select>
        <input data-tip="${i(`Religion form`)}" class="religionForm placeholder" value="" autocorrect="off" spellcheck="false" data-col="form" />
        <div data-col="deity">
          <span class="icon-arrows-cw placeholder"></span>
          <input class="religionDeity placeholder" value="" autocorrect="off" spellcheck="false" />
        </div>
        <div data-col="area">
          <span data-tip="${i(`Religion area`)}" style="padding-right: 4px" class="icon-map-o"></span>
          <div data-tip="${i(`Religion area`)}" class="religionArea">${e(n)+r}</div>
        </div>
        <div data-col="population">
          <span data-tip="${f}" class="icon-male"></span>
          <div data-tip="${f}" class="religionPopulation pointer">${e(d)}</div>
        </div>
        <div data-col="expansion">
          <span class="icon-resize-full-alt placeholder" style="padding-right: 2px"></span>
          <span class="religionExtent placeholder">n/a</span>
        </div>
        <div data-col="expansionism">
          <span class="icon-resize-full placeholder"></span>
          <input class="religionExpantion placeholder" disabled type="number" value="0" />
        </div>
        <div data-col="tags"></div>
        <div data-col="note"></div>
        <div data-col="locate"></div>
        <div data-col="lock"></div>
        <div data-col="remove"></div>
      </div>`}let u=_(`religionsBody`);u.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),u.insertAdjacentHTML(`beforeend`,s);let d=pack.religions.filter(e=>e.i&&!e.removed);_(`religionsOrganized`).innerHTML=String(d.filter(e=>e.type===`Organized`).length),_(`religionsHeresies`).innerHTML=String(d.filter(e=>e.type===`Heresy`).length),_(`religionsCults`).innerHTML=String(d.filter(e=>e.type===`Cult`).length),_(`religionsFolk`).innerHTML=String(d.filter(e=>e.type===`Folk`).length),_(`religionsFooterArea`).innerHTML=e(c)+r,_(`religionsFooterPopulation`).innerHTML=e(l),_(`religionsFooterArea`).dataset.area=String(c),_(`religionsFooterPopulation`).dataset.population=String(l),le(_(`religionsFooter`),n,P.goto),_(`religionsBody`).querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,U),e.addEventListener(`mouseleave`,W)}),_(`religionsBody`).querySelectorAll(`fill-box`).forEach(e=>void e.addEventListener(`click`,ge)),_(`religionsBody`).querySelectorAll(`div > input.religionName`).forEach(e=>void e.addEventListener(`input`,_e)),_(`religionsBody`).querySelectorAll(`div > select.religionType`).forEach(e=>void e.addEventListener(`change`,ve)),_(`religionsBody`).querySelectorAll(`div > input.religionForm`).forEach(e=>void e.addEventListener(`input`,ye)),_(`religionsBody`).querySelectorAll(`div > input.religionDeity`).forEach(e=>void e.addEventListener(`input`,be)),_(`religionsBody`).querySelectorAll(`div > span.icon-arrows-cw`).forEach(e=>void e.addEventListener(`click`,xe)),_(`religionsBody`).querySelectorAll(`div > div.religionPopulation`).forEach(e=>void e.addEventListener(`click`,Se)),_(`religionsBody`).querySelectorAll(`div > select.religionExtent`).forEach(e=>void e.addEventListener(`change`,Ce)),_(`religionsBody`).querySelectorAll(`div > input.religionExpantion`).forEach(e=>void e.addEventListener(`change`,we)),_(`religionsBody`).querySelectorAll(`div > input.religionTags`).forEach(e=>void e.addEventListener(`change`,G)),_(`religionsBody`).querySelectorAll(`div > span.icon-trash-empty`).forEach(e=>void e.addEventListener(`click`,Te)),_(`religionsBody`).querySelectorAll(`div > span.icon-book`).forEach(e=>void e.addEventListener(`click`,Fe)),_(`religionsBody`).querySelectorAll(`div > span.icon-target`).forEach(e=>void e.addEventListener(`click`,Ie)),_(`religionsBody`).querySelectorAll(`div > span.icon-lock`).forEach(e=>void e.addEventListener(`click`,Z)),_(`religionsBody`).querySelectorAll(`div > span.icon-lock-open`).forEach(e=>void e.addEventListener(`click`,Z)),_(`religionsBody`).dataset.type===`percentage`&&(_(`religionsBody`).dataset.type=`absolute`,q()),x.update(k,{width:`fit-content`,position:j})}function V(e){let t=``;return[`Folk`,`Organized`,`Cult`,`Heresy`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${c[n]??n}</option>`}),t}function me(e){if(e.type===`Folk`){let e=i(`Folk religions are not competitive and do not expand. Initially they cover all cells of their parent culture, but get ousted by organized religions when they expand`);return`
      <div data-col="expansion">
        <span data-tip="${e}" class="icon-resize-full-alt" style="padding-right: 2px"></span>
        <span data-tip="${e}" class="religionExtent">${i(`culture`)}</span>
      </div>
      <div data-col="expansionism">
        <span data-tip="${e}" class="icon-resize-full"></span>
        <input data-tip="${e}" class="religionExpantion" disabled type="number" value='0' />
      </div>`}return`
    <div data-col="expansion">
      <span data-tip="${i(`Potential religion extent`)}" class="icon-resize-full-alt" style="padding-right: 2px"></span>
      <select data-tip="${i(`Potential religion extent`)}" class="religionExtent">
        ${he(e.expansion)}
      </select>
    </div>
    <div data-col="expansionism">
      <span data-tip="${a(i(`Religion expansionism`),i(`Defines competitive size`))}" class="icon-resize-full"></span>
      <input
        data-tip="${a(i(`Religion expansionism`),i(`Defines competitive size`),i(`Click to change, then click Recalculate to apply`))}"
        class="religionExpantion"
        type="number"
        min="0"
        max="99"
        step=".1"
        value=${e.expansionism}
      />
    </div>`}function he(e){let t=``;return[`global`,`state`,`culture`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${s[n]??n}</option>`}),t}var H=e=>Number(`data`in e?e.id:e.target?.dataset.id),U=d(e=>{let t=H(e),n=_(`religionsBody`).querySelector(`div[data-id='${t}']`);if(n&&n.classList.add(`active`),!h.isOn(`religions`)||options.app.mode)return;let r=ee().duration(2e3).ease(p);v(`#relig`).select(`#religion${t}`).raise().transition(r).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`),v(`#debug`).select(`#religionsCenter${t}`).raise().transition(r).attr(`r`,3).attr(`stroke`,`#d0240f`)},200);function W(e){let t=H(e),n=_(`religionsBody`).querySelector(`div[data-id='${t}']`);n&&n.classList.remove(`active`),v(`#relig`).select(`#religion${t}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),v(`#debug`).select(`#religionsCenter${t}`).transition().attr(`r`,2).attr(`stroke`,null)}function ge(){let e=this.getAttribute(`fill`)||`#ffffff`,t=+this.parentNode.dataset.id;C.ColorPicker.open(e,e=>{this.fill=e,pack.religions[t].color=e,v(`#relig`).select(`#religion${t}`).attr(`fill`,e),v(`#debug`).select(`#religionsCenter${t}`).attr(`fill`,e)})}function _e(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.name=this.value,this.value.trim()&&E.rename(e,this.value)}function ve(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.type=this.value,E.setType(e,this.value)}function ye(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.form=this.value,this.value.trim()&&E.setForm(e,this.value)}function be(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.deity=this.value,E.setDeity(t,this.value)}function G(){let e=this.closest(`.states`),t=Number(e.dataset.id),n=pack.religions[t];n&&(o.set(n,this.value),this.value=o.format(n.tags),M.search&&P.refresh())}function xe(){let e=this.closest(`.states`),t=+e.dataset.id,n=pack.religions[t].culture,r=E.getDeityName(n)??``;e.dataset.deity=r,pack.religions[t].deity=r,this.nextElementSibling.value=r}function Se(){let e=+this.closest(`.states`).dataset.id,r=pack.religions[e];if(!r.cells){S(i(`No cells, cannot change population`),!1,`error`);return}let a=t((r.rural??0)*options.map.units.population.scale),o=t((r.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString(),l=pack.burgs.filter(t=>!t.removed&&pack.cells.religion[t.cell]===e);x.message({message:`<div>
    <i>${i(`All population of religion territory is considered believers of this religion. It means believers number change will directly affect population`)}</i>
    <div style="margin: 0.5em 0">
      ${i(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" />
      ${i(`Urban`)}: <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em"
        ${l.length?``:`disabled`} />
    </div>
    <div>${i(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span>
      (<span id="totalPopPerc">100</span>%)
    </div>
  </div>`,title:i(`Change believers number`),width:`24em`,buttons:[{label:i(`Apply`),onClick:()=>{g()}},{label:i(`Cancel`)}]});let u=_(`ruralPop`),d=_(`urbanPop`),f=_(`totalPop`),p=_(`totalPopPerc`),m=()=>{let e=u.valueAsNumber+d.valueAsNumber;Number.isNaN(e)||(f.innerHTML=c(e),p.innerHTML=String(t(e/s*100)))};u.oninput=()=>m(),d.oninput=()=>m();function g(){try{E.setPopulation(e,+u.value||0,+d.value||0)}catch(e){S(n(e),!1,`error`);return}h.draw(`population`),R()}}function Ce(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansion=this.value,E.setExpansion(t,this.value),Q()}function we(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansionism=this.value,+this.value>=0&&+this.value<=99&&(E.setExpansionism(t,+this.value),Q())}function Te(){if(options.app.mode)return;let e=+this.closest(`.states`).dataset.id;x.confirm({title:i(`Remove`),message:`${i(`Are you sure you want to remove the religion?`)}<br>${i(`This action cannot be reverted`)}`,confirm:i(`Remove`),onConfirm:()=>Ee(e)})}function Ee(e){v(`#relig`).select(`#religion${e}`).remove(),v(`#relig`).select(`#religion-gap${e}`).remove(),v(`#debug`).select(`#religionsCenter${e}`).remove(),E.remove(e),R()}function K(){let e=v(`#debug`);e.select(`#religionCenters`).remove();let t=e.append(`g`).attr(`id`,`religionCenters`).attr(`stroke-width`,.8).attr(`stroke`,`#444444`).style(`cursor`,`move`),n=pack.religions.filter(e=>e.i&&e.center&&!e.removed);M.showExtinct||(n=n.filter(e=>(e.cells??0)>0)),t.selectAll(`circle`).data(n).enter().append(`circle`).attr(`id`,e=>`religionsCenter${e.i}`).attr(`data-id`,e=>e.i).attr(`r`,2).attr(`fill`,e=>e.color).attr(`cx`,e=>pack.cells.p[e.center][0]).attr(`cy`,e=>pack.cells.p[e.center][1]).on(`mouseenter`,(e,t)=>{S(i(`{{religion}}. Drag to move the religion center`,{religion:t.name}),!0),U(e)}).on(`mouseleave`,e=>{S(``,!0),W(e)}).call(ne().on(`start`,De))}function De(e){let t=Number(this.dataset.id),n=r(this.getAttribute(`transform`)),i=+n[0]-e.x,a=+n[1]-e.y;function o(e){let{x:n,y:r}=e;this.setAttribute(`transform`,`translate(${i+n},${a+r})`);let o=u.findCell(n,r);if(!(o==null||pack.cells.h[o]<20)){try{E.moveCenter(t,n,r)}catch(e){S(e instanceof Error?e.message:String(e),!1,`error`,2e3);return}Q()}}let s=d(o,50);e.on(`drag`,s)}function Oe(){m.toggle(fe,()=>pack.religions.filter(e=>e.i&&!e.removed&&e.area).sort((e,t)=>(t.area??0)-(e.area??0)).map(e=>[e.i,e.color,e.name]),i(`No religions to show`))}function q(){if(_(`religionsBody`).dataset.type===`absolute`){_(`religionsBody`).dataset.type=`percentage`;let e=+_(`religionsFooterArea`).dataset.area,n=+_(`religionsFooterPopulation`).dataset.population;_(`religionsBody`).querySelectorAll(`:scope > .states`).forEach(r=>{let{area:i,population:a}=r.dataset;r.querySelector(`.religionArea`).textContent=`${t(+i/e*100)}%`,r.querySelector(`.religionPopulation`).textContent=`${t(+a/n*100)}%`})}else _(`religionsBody`).dataset.type=`absolute`,P.refresh()}async function J(){options.app.mode||C.HierarchyTree.open({type:`religions`,data:pack.religions,onNodeEnter:U,onNodeLeave:W,getDescription:n=>{let{name:r,type:o,form:s,rural:l,urban:u}=n,d=()=>r.includes(o)||s.includes(o)?``:o===`Folk`?i(`Folk religion`):o===`Organized`?i(`Organized religion`):c[o]??o,f=(l??0)*options.map.units.population.scale+(u??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,p=f>0?i(`{{- population}} people`,{population:e(t(f))}):i(`Extinct`);return a(...[r,d(),s===o?``:s,p].filter(Boolean))},getShape:({type:e})=>{if(e===`Folk`)return`circle`;if(e===`Organized`)return`square`;if(e===`Cult`)return`hexagon`;if(e===`Heresy`)return`diamond`}})}function ke(){M.showExtinct=!M.showExtinct,b.set(k,`filters`,M),Y(),P.reset(),K()}function Y(){_(`religionsBody`).dataset.extinct=M.showExtinct?`show`:`hide`,_(`religionsExtinct`).classList.toggle(`active`,M.showExtinct)}function Ae(){h.show(`religions`),C.PaintEditor.open({title:i(`Paint Religions`),parentDialogId:k,onClose:F,items:pack.religions.filter(e=>!e.removed).map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`})),dontOverrideControl:!0,getValue:e=>pack.cells.religion[e],filterCell:e=>l(e,pack),onApply:je})}function je(e){for(let[t,n]of f(e))E.setCells(t,n);e.size&&(h.draw(`religions`),te(k)&&R(),K())}function Me(){this.classList.contains(`pressed`)?X():(options.app.mode=`addReligion`,this.classList.add(`pressed`),S(i(`Click on the map to add a new religion`),!0),v(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Ne),_(`religionsBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function X(){options.app.mode=null,ie(),ae(),_(`religionsBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=_(`religionsAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}function Ne(e){let[t,r]=g(e,this);try{E.add(t,r)}catch(e){S(n(e),!1,`error`);return}e.shiftKey===!1&&X(),h.draw(`religions`),R(),K()}function Pe(){let{scale:e,urbanization:n}=options.map.units.population,r=A.map(e=>e===`Area`?`Area ${T(`2`)}`:e),i=P.view().all.map(r=>[r.i,r.name,r.color,r.type,r.form,r.deity,r.i?pack.cultures[r.culture]?.name:``,w(r.area??0),r.cells,t((r.rural??0)*e+(r.urban??0)*e*n.rate),$(r),r.expansion,r.i?r.expansionism:``,o.format(r.tags)]);y.download(`Religions`,r,i)}function Fe(){let e=+this.closest(`.states`).dataset.id;C.NotesEditor.open({type:`religion`,id:e})}function Ie(){let e=+this.closest(`.states`).dataset.id,t=v(`#relig`).select(`#religion${e}`).node();t&&re(t,4)}function Z(){if(options.app.mode)return;let e=+this.closest(`.states`).dataset.id,t=this.classList;E.setLocked(e,!pack.religions[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}function Q(e){(e||_(`religionsAutoChange`).checked)&&(E.recalculate(),h.draw(`religions`),R(),K())}function Le(){v(`#debug`).select(`#religionCenters`).remove(),options.app.mode===`addReligion`&&X(),C.ColorPicker.close();let e=P.view();e.rows=[],e.all=[],x.destroy(`religionsEditor`)}var $=e=>(e.origins??[]).filter(e=>!!e).map(e=>pack.religions[e].name).join(`, `),Re=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean);async function ze(e){let{scale:t,urbanization:n}=options.map.units.population,r=e=>pack.religions[e]?.removed?void 0:pack.religions[e],i=[`Name`,`Type`,`Form`,`Supreme Deity`,`Potential`,`Tags`],a=pack.religions.filter(e=>!e.removed),s=new Map(a.map(e=>[e.i,$(e)])),c=new Map(a.map(e=>[e.name,e.i])),l=e=>c.get(e)??y.byName(pack.religions,e).i;await C.CsvUpload.update(e,A,{find:r,units:[`Area`],text:i},(e,i)=>{let a=r(e);i.apply(`Name`,t=>E.rename(e,t),a.name),i.apply(`Color`,t=>E.recolor(e,t),a.color),i.apply(`Type`,t=>E.setType(e,t),a.type),i.apply(`Form`,t=>E.setForm(e,t),a.form),i.apply(`Supreme Deity`,t=>E.setDeity(e,t),a.deity),i.apply(`Potential`,t=>E.setExpansion(e,t),a.expansion),i.apply(`Expansionism`,t=>E.setExpansionism(e,+t),a.expansionism),i.assign(`Origins`,t=>E.setOrigins(e,t?Re(t).map(l):[0]),s.get(e)),i.assign(`Tags`,e=>o.set(a,e),o.format(a.tags)),i.population([(a.rural??0)*t,(a.urban??0)*t*n.rate],(t,n)=>E.setPopulation(e,t,n),[`Believers`])})&&(h.draw(`religions`),R())}var Be={open:F,showHierarchy:J};export{Be as ReligionsEditor};
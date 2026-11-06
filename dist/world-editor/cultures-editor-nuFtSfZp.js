import{D as e,E as t,f as n,h as r,i,r as a}from"./index-DfkEhdNk.js";import{B as o,K as s,L as c,R as l,V as u,Z as d,ct as f}from"./options-model-baH24lwc.js";import{a as p,t as m}from"./pack-generator-itXjN9Pv.js";import{a as h,v as ee}from"./notices-CsL9NM9q.js";import{Mt as te,ct as ne,n as re,t as g}from"./layers-DJ8BJ3Zy.js";import{l as _}from"./file-utils-gMYr_JNq.js";import{a as ie,d as ae,i as v,r as y,z as b}from"./node-utils-BD0SusgU.js";import{t as x}from"./drag-BCEUs7e2.js";import{n as S}from"./highlight-CdQ_wUL5.js";import{t as C}from"./csv-CfLd6KH6.js";import{n as w,t as T}from"./dialog-BW-Ar0Nf.js";import{o as E,t as oe}from"./tooltips-BSJdaB-v.js";import{t as D}from"./controllers-DmSw-ZkU.js";import{a as O,o as k}from"./units-S5RZj9IM.js";import{c as se,s as ce,u as le,y as ue}from"./app-DaOF0_oJ.js";import{a as de,i as fe,n as pe,o as me,r as he}from"./table-DSOgM2sf.js";import{t as ge}from"./highlighting-mu1AuRTD.js";var A=`culturesEditor`,_e=`Cultures`,j={my:`right top`,at:`right-10 top+10`,of:`svg`},M,N=[`Id`,`Name`,`Ancestry`,`Color`,`Cells`,`Expansionism`,`Type`,`Area`,`Population`,`Namesbase`,`Emblems Shape`,`Origins`,`Tags`],P=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:i(`Culture`),width:`10em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`ancestry`,label:i(`Ancestry`),width:`7.5em`,mobileHidden:!0,sortBy:e=>e.ancestry||``,sortType:`alpha`},{key:`type`,label:i(`Type`),width:`7.5em`,mobileHidden:!0,sortBy:e=>e.type||``,sortType:`alpha`},{key:`base`,label:i(`Namesbase`),width:`9em`,mobileHidden:!0,sortBy:e=>e.base},{key:`cells`,label:i(`Cells`),width:`5em`,hidden:!0,sortBy:e=>e.cells||0},{key:`expansionism`,label:i(`Expansion`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansionism||0},{key:`area`,label:i(`Area`),width:`7em`,mobileHidden:!0,sortBy:e=>e.area||0},{key:`population`,label:i(`Population`),width:`6em`,defaultSort:`desc`,sortBy:e=>(e.rural||0)*options.map.units.population.scale+(e.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate},{key:`emblems`,label:i(`Emblems`),width:`7em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.shield||``,sortType:`alpha`},{key:`tags`,label:i(`Tags`),width:`9em`,hidden:!0,sortBy:e=>s.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}];function F(){let e=M?.search?.toLowerCase().trim(),t=pack.cultures.filter(e=>!e.removed);return e?t.filter(t=>s.matches(e,t.name,t.tags,[t.ancestry,t.type])):t}var I=he({getData:()=>se(A,F(),P),onUpdate:be});function L(){options.app.mode||(M=w.get(A,`filters`,()=>({search:``})),T.closeAll(`#${A}, .stable`),g.show(`cultures`),g.hide(`states`,`biomes`),g.hide(`religions`,`provinces`),ye(),z(),J(),I.reset(),T.open(A,{title:i(`Cultures Editor`),width:`fit-content`,onClose:He,position:j}))}function ve(){M.search=y(`culturesSearch`).value,w.set(A,`filters`,M),I.reset()}function ye(){let e=pack.cultures.some(e=>e.i&&!e.removed&&!!e.ancestry?.trim()),t=P.find(e=>e.key===`ancestry`);t&&(t.hidden=!e),T.destroy(`culturesEditor`);let n=`<div id="culturesEditor" class="dialog stable editorDialog">
    <div id="culturesBody" class="table" data-type="absolute">${fe({dialogId:A,columns:P})}</div>
    <div id="culturesFilters" data-tip="${i(`Apply a filter`)}" class="editorFilters">
      <label for="culturesSearch" data-tip="${i(`Filter by name, ancestry, type, or tag`)}">
        ${i(`Search`)}: <input id="culturesSearch" type="search" />
      </label>
    </div>

    <div id="culturesFooter" class="totalLine">
      <div data-tip="${i(`Cultures number`)}" style="margin-left: 12px">${i(`Cultures`)}:&nbsp;<span id="culturesFooterCultures">0</span></div>
      <div data-tip="${i(`Number of land cells`)}" style="margin-left: 12px" data-col="cells">${i(`Cells`)}:&nbsp;<span id="culturesFooterCells">0</span></div>
      <div data-tip="${i(`Total land area`)}" style="margin-left: 12px" data-col="area">${i(`Land area`)}:&nbsp;<span id="culturesFooterArea">0</span></div>
      <div data-tip="${i(`Total population`)}" style="margin-left: 12px" data-col="population">${i(`Population`)}:&nbsp;<span id="culturesFooterPopulation">0</span></div>
    </div>

    <div id="culturesBottom" class="editorToolbar">
      <button id="culturesEditorRefresh" data-tip="${i(`Refresh`)}" class="icon-cw"></button>
      <button id="culturesEditStyle" data-tip="${i(`Edit style in Style Editor`)}" class="icon-adjust"></button>
      <button id="culturesLegend" data-tip="${i(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="culturesPercentage" data-tip="${i(`Toggle percentage / absolute values views`)}" class="icon-percent"></button>
      <button id="culturesHeirarchy" data-tip="${i(`Cultures tree`)}" class="icon-sitemap"></button>
      <button id="culturesManually" data-tip="${i(`Manually re-assign cultures`)}" class="icon-brush"></button>
      <button id="culturesEditNamesBase" data-tip="${i(`Edit a database used for names generation`)}" class="icon-font"></button>
      <button id="culturesAdd" data-tip="${a(i(`Add`),i(`Hold Shift to add multiple`))}" class="icon-plus"></button>
      <button id="culturesExport" data-tip="${i(`Save data as a CSV file`)}" class="icon-download"></button>
      <button id="culturesImport" data-tip="${i(`Upload data from a CSV file`)}" class="icon-upload"></button>
      <button id="culturesRecalculate" data-tip="${i(`Recalculate cultures based on current values of growth-related attributes`)}" class="icon-retweet"></button>
      <span
        data-tip="${i(`Allow culture centers, expansion and type changes to take an immediate effect`)}"
        class="editorToolbarPanel"
        style="display: inline-flex"
      >
        <input id="culturesAutoChange" class="checkbox" type="checkbox" />
        <label for="culturesAutoChange" class="checkbox-label"><i>${i(`auto-apply changes`)}</i></label>
      </span>
    </div>
  </div>`;y(`dialogs`).insertAdjacentHTML(`beforeend`,n),y(`culturesSearch`).value=M.search,y(`culturesSearch`).addEventListener(`input`,ve),ce(A,I.reset),ge(A,({cellId:e})=>pack.cells.culture[e]),y(`culturesEditorRefresh`).addEventListener(`click`,R),pe({dialogId:A,columns:P,onUpdate:()=>T.update(A,{width:`fit-content`,position:j})}),y(`culturesEditStyle`).addEventListener(`click`,()=>void D.StyleEditor.open(`cultures`)),y(`culturesLegend`).addEventListener(`click`,Ie),y(`culturesPercentage`).addEventListener(`click`,Y),y(`culturesHeirarchy`).addEventListener(`click`,X),y(`culturesRecalculate`).addEventListener(`click`,()=>Z(!0)),y(`culturesManually`).addEventListener(`click`,Le),y(`culturesEditNamesBase`).addEventListener(`click`,()=>D.NamesbaseEditor.open()),y(`culturesAdd`).addEventListener(`click`,ze),y(`culturesExport`).addEventListener(`click`,Ve),y(`culturesImport`).addEventListener(`click`,()=>C.pick(We))}function R(){z(),I.refresh(),J()}function z(){let{cells:e,cultures:t,burgs:n}=pack;t.forEach(e=>{e.cells=e.area=e.rural=e.urban=0});for(let r of e.i){if(e.h[r]<20)continue;let i=e.culture[r];t[i].cells+=1,t[i].area+=e.area[r],t[i].rural+=e.pop[r];let a=e.burg[r];a&&(t[i].urban+=n[a].population)}}function be(n){let r=k(),c=``,l=0,u=0;for(let e of n.all)l+=O(e.area??0),u+=t((e.rural??0)*options.map.units.population.scale+(e.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate);for(let l of n.rows){let n=O(l.area??0),u=(l.rural??0)*options.map.units.population.scale,d=(l.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,f=t(u+d),p=a(`${i(`Total population`)}: ${e(f)}`,`${i(`Rural population`)}: ${e(u)}`,`${i(`Urban population`)}: ${e(d)}`,i(`Click to edit`));l.i?c+=`<div
        class="states"
        data-id="${l.i}"
        data-name="${l.name}"
        data-ancestry="${l.ancestry||``}"
        data-color="${l.color}"
        data-cells="${l.cells}"
        data-area="${n}"
        data-population="${f}"
        data-base="${l.base}"
        data-type="${l.type}"
        data-expansionism="${l.expansionism}"
        data-emblems="${l.shield}"
      >
        <fill-box fill="${l.color}" data-col="color"></fill-box>
        <div data-col="name">
          <input data-tip="${a(i(`Name`),i(`Click and type to change`))}" class="cultureName"
            value="${l.name}" autocorrect="off" spellcheck="false" />
          <span data-tip="${i(`Regenerate culture name`)}" class="icon-cw hiddenIcon" style="visibility: hidden"></span>
        </div>
        <div data-col="ancestry">
          <input data-tip="${a(i(`Ancestry`),i(`Culture ancestry or race`),i(`Click and type to change`))}" class="cultureAncestry"
            value="${l.ancestry||``}" autocorrect="off" spellcheck="false" />
        </div>
        <select data-tip="${a(i(`Culture type`),i(`Defines growth model`),i(`Click to change`))}"
          class="cultureType" data-col="type">${B(l.type)}</select>
        <div data-col="base">
          <span data-tip="${i(`Click to re-generate names for burgs with this culture assigned`)}" class="icon-arrows-cw"></span>
          <select data-tip="${a(i(`Culture namesbase`),i(`Click to change`),i(`Click on arrows to re-generate names`))}"
            class="cultureBase">${V(l.base)}</select>
        </div>
        <div data-col="cells">
          <span data-tip="${i(`Number of cells`)}" class="icon-check-empty"></span>
          <div data-tip="${i(`Number of cells`)}" class="cultureCells">${l.cells}</div>
        </div>
        <div data-col="expansionism">
          <span data-tip="${a(i(`Culture expansionism`),i(`Defines competitive size`))}" class="icon-resize-full"></span>
          <input
            data-tip="${a(i(`Culture expansionism`),i(`Defines competitive size`),i(`Click to change, then click Recalculate to apply`))}"
            class="cultureExpan"
            type="number"
            min="0"
            max="99"
            step=".1"
            value=${l.expansionism}
          />
        </div>
        <div data-col="area">
          <span data-tip="${i(`Culture area`)}" class="icon-map-o"></span>
          <div data-tip="${i(`Culture area`)}" class="cultureArea">${e(n)} ${r}</div>
        </div>
        <div data-col="population">
          <span data-tip="${p}" class="icon-male"></span>
          <div data-tip="${p}" class="culturePopulation pointer">${e(f)}</div>
        </div>
        <div data-col="emblems">${H(o.isDiversiform,l.shield)}</div>
        <div data-col="tags">
          <input data-tip="${a(i(`Culture tags`),i(`Click and type to change`))}" class="cultureTags"
            value="${s.format(l.tags)}" autocorrect="off" spellcheck="false" />
        </div>
        ${le(i(`Edit free text notes (legend)`))}
        <span data-col="locate" data-tip="${i(`Locate on map`)}" class="icon-target"></span>
        <span data-col="lock" data-tip="${i(`Lock`)}" class="icon-lock${l.lock?``:`-open`}"></span>
        <span data-col="remove" data-tip="${i(`Remove`)}" class="icon-trash-empty"></span>
      </div>`:c+=`<div
          class="states"
          data-id="${l.i}"
          data-name="${l.name}"
          data-color=""
          data-cells="${l.cells}"
          data-area="${n}"
          data-population="${f}"
          data-base="${l.base}"
          data-type=""
          data-expansionism=""
          data-emblems="${l.shield}"
        >
          <svg width="11" height="11" class="placeholder" data-col="color"></svg>
          <div data-col="name">
            <input data-tip="${a(i(`Neutral culture name`),i(`Click and type to change`))}" class="cultureName italic"
              value="${l.name}" autocorrect="off" spellcheck="false" />
            <span class="icon-cw placeholder"></span>
          </div>
          <div data-col="ancestry"></div>
          <select class="cultureType placeholder" data-col="type">${B(l.type)}</select>
          <div data-col="base">
            <span data-tip="${i(`Click to re-generate names for burgs with this culture assigned`)}" class="icon-arrows-cw"></span>
            <select data-tip="${a(i(`Culture namesbase`),i(`Click to change`),i(`Click on arrows to re-generate names`))}"
              class="cultureBase">${V(l.base)}</select>
          </div>
          <div data-col="cells">
            <span data-tip="${i(`Number of cells`)}" class="icon-check-empty"></span>
            <div data-tip="${i(`Number of cells`)}" class="cultureCells">${l.cells}</div>
          </div>
          <div data-col="expansionism">
            <span class="icon-resize-full placeholder"></span>
            <input class="cultureExpan placeholder" type="number" />
          </div>
          <div data-col="area">
            <span data-tip="${i(`Culture area`)}" class="icon-map-o"></span>
            <div data-tip="${i(`Culture area`)}" class="cultureArea">${e(n)} ${r}</div>
          </div>
          <div data-col="population">
            <span data-tip="${p}" class="icon-male"></span>
            <div data-tip="${p}" class="culturePopulation pointer">${e(f)}</div>
          </div>
          <div data-col="emblems">${H(o.isDiversiform,l.shield)}</div>
          <div data-col="tags"></div>
          <div data-col="note"></div>
          <div data-col="locate"></div>
          <div data-col="lock"></div>
          <div data-col="remove"></div>
        </div>`}let d=y(`culturesBody`);d.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),d.insertAdjacentHTML(`beforeend`,c),y(`culturesFooterCultures`).innerHTML=String(pack.cultures.filter(e=>e.i&&!e.removed).length),y(`culturesFooterCells`).innerHTML=String(pack.cells.h.filter(e=>e>=20).length),y(`culturesFooterArea`).innerHTML=`${e(l)} ${r}`,y(`culturesFooterPopulation`).innerHTML=e(u),y(`culturesFooterArea`).dataset.area=String(l),y(`culturesFooterPopulation`).dataset.population=String(u),de(y(`culturesFooter`),n,I.goto),y(`culturesBody`).querySelectorAll(`:scope > div.states`).forEach(e=>{e.addEventListener(`mouseenter`,G),e.addEventListener(`mouseleave`,K)}),y(`culturesBody`).querySelectorAll(`fill-box`).forEach(e=>void e.addEventListener(`click`,xe)),y(`culturesBody`).querySelectorAll(`div > input.cultureName`).forEach(e=>void e.addEventListener(`input`,Se)),y(`culturesBody`).querySelectorAll(`div > input.cultureAncestry`).forEach(e=>void e.addEventListener(`input`,Ce)),y(`culturesBody`).querySelectorAll(`div > input.cultureTags`).forEach(e=>void e.addEventListener(`change`,we)),y(`culturesBody`).querySelectorAll(`div > span.icon-cw`).forEach(e=>void e.addEventListener(`click`,q)),y(`culturesBody`).querySelectorAll(`div > input.cultureExpan`).forEach(e=>void e.addEventListener(`change`,Te)),y(`culturesBody`).querySelectorAll(`div > select.cultureType`).forEach(e=>void e.addEventListener(`change`,Ee)),y(`culturesBody`).querySelectorAll(`div > select.cultureBase`).forEach(e=>void e.addEventListener(`change`,De)),y(`culturesBody`).querySelectorAll(`div > select.cultureEmblems`).forEach(e=>void e.addEventListener(`change`,Oe)),y(`culturesBody`).querySelectorAll(`div > div.culturePopulation`).forEach(e=>void e.addEventListener(`click`,ke)),y(`culturesBody`).querySelectorAll(`div > span.icon-arrows-cw`).forEach(e=>void e.addEventListener(`click`,Ae)),y(`culturesBody`).querySelectorAll(`div > span.icon-book`).forEach(e=>void e.addEventListener(`click`,Me)),y(`culturesBody`).querySelectorAll(`div > span.icon-target`).forEach(e=>void e.addEventListener(`click`,Ne)),y(`culturesBody`).querySelectorAll(`div > span.icon-trash-empty`).forEach(e=>void e.addEventListener(`click`,Pe)),y(`culturesBody`).querySelectorAll(`div > span.icon-lock`).forEach(e=>void e.addEventListener(`click`,$)),y(`culturesBody`).querySelectorAll(`div > span.icon-lock-open`).forEach(e=>void e.addEventListener(`click`,$)),me(A,o.isDiversiform?[]:[`emblems`]),y(`culturesBody`).dataset.type===`percentage`&&(y(`culturesBody`).dataset.type=`absolute`,Y()),T.update(A,{width:`fit-content`,position:j})}function B(e){let t=``;return c.forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${d[n]??n}</option>`}),t}function V(e){let t=``;return _.nameBases.forEach((n,r)=>{t+=`<option ${e===r?`selected`:``} value="${r}">${n.name}</option>`}),_.nameBases[e]||(t+=`<option selected value="${e}">${i(`removed`)}</option>`),t}function H(e,t){if(!e)return``;let n=Object.keys(o.shields.types).flatMap(e=>Object.keys(o.shields[e])).map(e=>`<option ${e===t?`selected`:``} value="${e}">${f[e]??e}</option>`);return`<select data-tip="${a(i(`Emblem shape associated with culture`),i(`Click to change`))}" class="cultureEmblems">${n}</select>`}var U=e=>Number(`data`in e?e.id:e.target?.dataset.id),W=e=>`data`in e&&e.data.shadow?e.data.name:null,G=h(e=>{if(!g.isOn(`cultures`)||options.app.mode)return;let t=ae().duration(2e3).ease(te),n=W(e);if(n!==null){let e=pack.cultures.filter(e=>e.i&&!e.removed&&e.ancestry?.trim()===n);for(let n of e)b(`#cults`).select(`#culture${n.i}`).raise().transition(t).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`),b(`#debug`).select(`#cultureCenter${n.i}`).raise().transition(t).attr(`r`,3).attr(`stroke`,`#d0240f`);return}let r=U(e);b(`#cults`).select(`#culture${r}`).raise().transition(t).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`),b(`#debug`).select(`#cultureCenter${r}`).raise().transition(t).attr(`r`,3).attr(`stroke`,`#d0240f`)},200);function K(e){if(!g.isOn(`cultures`))return;let t=W(e);if(t!==null){let e=pack.cultures.filter(e=>e.i&&!e.removed&&e.ancestry?.trim()===t);for(let t of e)b(`#cults`).select(`#culture${t.i}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),b(`#debug`).select(`#cultureCenter${t.i}`).transition().attr(`r`,2).attr(`stroke`,null);return}let n=U(e);b(`#cults`).select(`#culture${n}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),b(`#debug`).select(`#cultureCenter${n}`).transition().attr(`r`,2).attr(`stroke`,null)}function xe(){let e=this.getAttribute(`fill`)||`#ffffff`,t=+this.parentNode.dataset.id;D.ColorPicker.open(e,e=>{this.fill=e,pack.cultures[t].color=e,b(`#cults`).select(`#culture${t}`).attr(`fill`,e),b(`#debug`).select(`#cultureCenter${t}`).attr(`fill`,e)})}function Se(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.name=this.value,this.value.trim()&&l.rename(t,this.value)}function Ce(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.ancestry=this.value.trim(),l.setAncestry(t,this.value)}function we(){let e=+this.closest(`.states`).dataset.id;s.set(pack.cultures[e],this.value),this.value=s.format(pack.cultures[e].tags),M.search&&I.refresh()}function q(){let e=+this.closest(`.states`).dataset.id,t=pack.cultures[e].base;if(!_.nameBases[t]){E(i(`Namesbase is not defined, please select a valid namesbase`),!1,`error`,5e3);return}let n=_.getCultureShort(e);this.parentNode.querySelector(`input.cultureName`).value=n,l.rename(e,n)}function Te(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansionism=this.value,+this.value>=0&&+this.value<=99&&(l.setExpansionism(t,+this.value),Z())}function Ee(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.type=this.value;let t=this.value;pack.cultures[e].type=t,Z()}function De(){let e=this.closest(`.states`),t=+e.dataset.id,n=+this.value;l.setBase(t,n),e.dataset.base=String(n)}function Oe(){let e=this.closest(`.states`),t=+e.dataset.id;l.setEmblemShape(t,this.value),e.dataset.emblems=pack.cultures[t].shield;let n=(e,t)=>{let n=v(e);n&&t&&(n.remove(),ne.trigger(e,t))};for(let e of pack.states)e.i&&e.culture===t&&n(`stateCOA${e.i}`,e.coa);for(let e of pack.provinces)e.i&&pack.cells.culture[e.center]===t&&n(`provinceCOA${e.i}`,e.coa);for(let e of pack.burgs)e?.i&&e.culture===t&&n(`burgCOA${e.i}`,e.coa)}function ke(){let e=+this.closest(`.states`).dataset.id,r=pack.cultures[e];if(!r.cells){E(i(`No cells, cannot change population`),!1,`error`);return}let a=t((r.rural??0)*options.map.units.population.scale),o=t((r.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString(),u=pack.burgs.filter(t=>!t.removed&&t.culture===e);T.message({message:`<div>
    <i>${i(`Change population of all cells assigned to the culture`)}</i>
    <div style="margin: 0.5em 0">
      ${i(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" />
      ${i(`Urban`)}: <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em"
        ${u.length?``:`disabled`} />
    </div>
    <div>${i(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span>
      (<span id="totalPopPerc">100</span>%)
    </div>
  </div>`,title:i(`Change culture population`),width:`24em`,buttons:[{label:i(`Apply`),onClick:()=>{try{l.setPopulation(e,+d.value||0,+f.value||0)}catch(e){return E(n(e),!1,`error`),!1}g.draw(`population`),R()}},{label:i(`Cancel`)}]});let d=y(`ruralPop`),f=y(`urbanPop`),p=y(`totalPop`),m=y(`totalPopPerc`),h=()=>{let e=d.valueAsNumber+f.valueAsNumber;Number.isNaN(e)||(p.innerHTML=c(e),m.innerHTML=String(t(e/s*100)))};d.oninput=()=>h(),f.oninput=()=>h()}function Ae(){let e=+this.closest(`.states`).dataset.id,t=pack.cultures[e].base;if(!_.nameBases[t]){E(i(`Namesbase is not defined, please select a valid namesbase`),!1,`error`,5e3);return}let n=pack.burgs.filter(t=>t.culture===e&&!t.removed&&!t.lock);for(let t of n)u.rename(t.i,_.getCulture(e));g.draw(`labels`),E(i(`Burg names regenerated: {{burgs}}`,{burgs:n.length}),!1,`success`)}function je(e){b(`#cults`).select(`#culture${e}`).remove(),b(`#debug`).select(`#cultureCenter${e}`).remove(),l.remove(e),R()}function Me(){let e=+this.closest(`.states`).dataset.id;D.NotesEditor.open({type:`culture`,id:e})}function Ne(){let e=+this.closest(`.states`).dataset.id;S(b(`#cults`).select(`#culture${e}`).node(),4)}function Pe(){if(options.app.mode)return;let e=+this.closest(`.states`).dataset.id;T.confirm({title:i(`Remove`),message:`${i(`Are you sure you want to remove the culture?`)}<br>${i(`This action cannot be reverted`)}`,confirm:i(`Remove`),onConfirm:()=>je(e)})}function J(){let e=i(`Drag to move the culture center (ancestral home)`),t=b(`#debug`);t.select(`#cultureCenters`).remove();let n=t.append(`g`).attr(`id`,`cultureCenters`).attr(`stroke-width`,.8).attr(`stroke`,`#444444`).style(`cursor`,`move`),r=pack.cultures.filter(e=>e.i&&!e.removed);n.selectAll(`circle`).data(r).enter().append(`circle`).attr(`id`,e=>`cultureCenter${e.i}`).attr(`data-id`,e=>e.i).attr(`r`,2).attr(`fill`,e=>e.color??null).attr(`cx`,e=>pack.cells.p[e.center][0]).attr(`cy`,e=>pack.cells.p[e.center][1]).on(`mouseenter`,(t,n)=>{E(e,!0),y(`culturesBody`).querySelector(`div[data-id='${n.i}']`)?.classList.add(`selected`),G(t)}).on(`mouseleave`,(e,t)=>{E(``,!0),y(`culturesBody`).querySelector(`div[data-id='${t.i}']`)?.classList.remove(`selected`),K(e)}).call(x().on(`start`,Fe))}function Fe(e){let t=+this.id.slice(13),n=r(this.getAttribute(`transform`)),i=+n[0]-e.x,a=+n[1]-e.y;function o(e){let{x:n,y:r}=e;this.setAttribute(`transform`,`translate(${i+n},${a+r})`);let o=m.findCell(n,r);if(!(o==null||pack.cells.h[o]<20)){try{l.moveCenter(t,n,r)}catch(e){E(e instanceof Error?e.message:String(e),!1,`error`,2e3);return}Z()}}let s=h(o,50);e.on(`drag`,s)}function Ie(){re.toggle(_e,()=>pack.cultures.filter(e=>e.i&&!e.removed&&e.cells).sort((e,t)=>(t.area??0)-(e.area??0)).map(e=>[e.i,e.color??``,e.name]),i(`No cultures to show`))}function Y(){if(y(`culturesBody`).dataset.type===`absolute`){y(`culturesBody`).dataset.type=`percentage`;let e=+y(`culturesFooterCells`).textContent,n=+y(`culturesFooterArea`).dataset.area,r=+y(`culturesFooterPopulation`).dataset.population;y(`culturesBody`).querySelectorAll(`:scope > div.states`).forEach(i=>{let{cells:a,area:o,population:s}=i.dataset;i.querySelector(`.cultureCells`).textContent=`${t(+a/e*100)}%`,i.querySelector(`.cultureArea`).textContent=`${t(+o/n*100)}%`,i.querySelector(`.culturePopulation`).textContent=`${t(+s/r*100)}%`})}else y(`culturesBody`).dataset.type=`absolute`,I.refresh()}async function X(){options.app.mode||D.HierarchyTree.open({type:`cultures`,data:pack.cultures,onNodeEnter:G,onNodeLeave:K,getDescription:n=>{if(n.shadow)return i(`{{- ancestry}} ancestry`,{ancestry:n.name});let{name:r,type:o,rural:s,urban:c}=n,l=(s??0)*options.map.units.population.scale+(c??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,u=l>0?i(`{{- population}} people`,{population:e(t(l))}):i(`Extinct`);return a(i(`{{- culture}} culture`,{culture:r}),d[o]??o,u)},getShape:({type:e,shadow:t})=>{if(t||e===`Generic`)return`circle`;if(e===`River`)return`diamond`;if(e===`Lake`)return`hexagon`;if(e===`Naval`)return`square`;if(e===`Highland`)return`concave`;if(e===`Nomadic`)return`octagon`;if(e===`Hunting`)return`pentagon`}})}function Z(e){(e||y(`culturesAutoChange`).checked)&&(l.recalculate(),g.draw(`cultures`),R())}function Le(){g.show(`cultures`),D.PaintEditor.open({title:i(`Paint Cultures`),parentDialogId:A,onClose:L,items:pack.cultures.filter(e=>!e.removed).map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`,lock:!!e.lock})),dontOverrideControl:!0,getValue:e=>pack.cells.culture[e],filterCell:e=>p(e,pack),onApply:Re})}function Re(e){for(let[t,n]of ee(e))l.setCells(t,n);e.size&&(g.draw(`cultures`),v(A)&&R())}function ze(){this.classList.contains(`pressed`)?Q():(options.app.mode=`addCulture`,this.classList.add(`pressed`),E(i(`Click on the map to add a new culture`),!0),b(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Be),y(`culturesBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function Q(){options.app.mode=null,ue(),oe(),y(`culturesBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=y(`culturesAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}function Be(e){let[t,r]=ie(e,this);try{l.add(t,r)}catch(e){E(n(e),!1,`error`);return}e.shiftKey===!1&&Q(),J(),I.refresh()}function Ve(){let e=k(`2`),n=N.map(t=>t===`Area`?`Area ${e}`:t),r=I.view().all.map(e=>{let n=O(e.area??0),r=t((e.rural??0)*options.map.units.population.scale+(e.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),i=_.nameBases[e.base].name,a=(e.origins??[]).filter(e=>!!e).map(e=>pack.cultures[e].name);return[e.i,e.name,e.i&&e.ancestry||``,e.i&&e.color||``,e.cells||0,e.i?e.expansionism||0:``,e.i?e.type:``,n,r,i,e.shield,a.join(`, `),s.format(e.tags)]});C.download(`Cultures`,n,r)}function He(){b(`#debug #cultureCenters`).remove(),options.app.mode===`addCulture`&&Q(),T.destroy(`culturesEditor`)}var Ue=e=>(e.origins??[]).filter(e=>!!e).map(e=>pack.cultures[e].name).join(`, `);async function We(e){let{scale:t,urbanization:n}=options.map.units.population,r=e=>pack.cultures[e]?.removed?void 0:pack.cultures[e],i=pack.cultures.filter(e=>!e.removed),a=new Map(i.map(e=>[e.i,Ue(e)])),o=new Map(i.map(e=>[e.name,e.i])),c=e=>o.get(e)??C.byName(pack.cultures,e).i;await D.CsvUpload.update(e,N,{find:r,units:[`Area`],text:[`Name`,`Ancestry`,`Tags`]},(e,i)=>{let o=r(e);i.apply(`Name`,t=>l.rename(e,t),o.name),i.apply(`Ancestry`,t=>l.setAncestry(e,t),o.ancestry),i.apply(`Color`,t=>l.recolor(e,t),o.color),i.apply(`Expansionism`,t=>l.setExpansionism(e,+t),o.expansionism),i.apply(`Type`,t=>l.setType(e,t),o.type),i.apply(`Namesbase`,t=>l.setBase(e,_.nameBases.indexOf(C.byName(_.nameBases,t))),_.nameBases[o.base]?.name),i.apply(`Emblems Shape`,t=>l.setEmblemShape(e,t),o.shield),i.assign(`Origins`,t=>l.setOrigins(e,t?t.split(`,`).map(e=>c(e.trim())):[0]),a.get(e)),i.assign(`Tags`,e=>s.set(o,e),s.format(o.tags)),i.population([(o.rural??0)*t,(o.urban??0)*t*n.rate],(t,n)=>l.setPopulation(e,t,n),[`Population`])})&&(g.draw(`cultures`,`emblems`),R())}function $(){if(options.app.mode)return;let e=+this.closest(`.states`).dataset.id,t=this.classList;l.setLocked(e,!pack.cultures[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}var Ge={open:L,showHierarchy:X};export{Ge as CulturesEditor};
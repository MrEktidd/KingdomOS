import{D as e,E as t,f as n,i as r,r as i}from"./index-J388_yXx.js";import{F as a,K as o,V as s,Z as c}from"./options-model-Cj3O8K4p.js";import{a as l,t as u}from"./pack-generator-BfWP9wix.js";import{v as d}from"./notices-DWyx0Rz8.js";import{at as f,c as p,ct as m,n as h,rt as g,s as ee,t as _,tt as te}from"./layers-D3_jdNGw.js";import{A as ne,E as re,d as ie,l as v}from"./file-utils-CmE_irX5.js";import{a as ae,i as y,r as b,t as x,z as S}from"./node-utils-BA3zRxIe.js";import{i as C,n as oe}from"./highlight-D9-ri4j0.js";import{t as w}from"./csv-DubBayaC.js";import{t as se}from"./stratify-CGdiYggi.js";import{t as ce}from"./pack-CyBKcrr4.js";import{n as T,t as E}from"./dialog-BYT3Byo1.js";import{t as le}from"./viewbox-events-Hxiu3rT6.js";import{o as D,t as ue}from"./tooltips-D4kIN3ad.js";import{t as O}from"./controllers-COq_bdk_.js";import{a as k,i as de,s as A}from"./production-generator-BjobV-51.js";import{a as j,o as M,r as N}from"./units-DInzt-GH.js";import{d as fe}from"./zoom-xenRyT_z.js";import{c as pe,s as me,t as P,u as he}from"./app-8AGFuk3c.js";import{a as ge,i as _e,n as ve,r as ye}from"./table-DIPbIlqo.js";import{t as F}from"./highlighting-DhOzxliE.js";import{t as be}from"./annex-mode-DJujyY1t.js";var I=`statesEditor`,xe=`States`,L={my:`right top`,at:`right-10 top+10`,of:`svg`},R,z=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:r(`State`),width:`7em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`emblem`,width:`1.4em`},{key:`form`,label:r(`Form`),width:`8em`,mobileHidden:!0,sortBy:e=>e.i&&e.formName||``,sortType:`alpha`},{key:`capital`,label:r(`Capital`),width:`7em`,sortBy:e=>e.i&&pack.burgs[e.capital]?.name||``,sortType:`alpha`},{key:`culture`,label:r(`Culture`),width:`6em`,mobileHidden:!0,sortBy:e=>e.i&&pack.cultures[e.culture]?.name||``,sortType:`alpha`},{key:`burgs`,label:r(`Burgs`),width:`5em`,mobileHidden:!0,sortBy:e=>e.burgs||0},{key:`cells`,label:r(`Cells`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.cells||0},{key:`area`,label:r(`Area`),width:`7em`,mobileHidden:!0,defaultSort:`desc`,sortBy:e=>j(e.area||0)},{key:`population`,label:r(`Population`),width:`6em`,sortBy:e=>t((e.rural||0)*options.map.units.population.scale+(e.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate)},{key:`treasury`,label:r(`Treasury`),width:`6em`,mobileHidden:!0,tip:r(`Click to sort by state treasury. Click on a value to view and edit taxes`),sortBy:e=>e.treasury||0},{key:`type`,label:r(`Type`),width:`5em`,hidden:!0,sortBy:e=>e.i&&e.type||``,sortType:`alpha`},{key:`expansionism`,label:r(`Expansion`),width:`5em`,hidden:!0,sortBy:e=>e.i&&e.expansionism||0},{key:`tags`,label:r(`Tags`),width:`10em`,hidden:!0,sortBy:e=>o.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`focus`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],B=[`Id`,`State`,`Full Name`,`Form`,`Color`,`Capital`,`Culture`,`Type`,`Expansionism`,`Cells`,`Burgs`,`Area`,`Total Population`,`Rural Population`,`Urban Population`,`Provinces`,`Neighbors`,`Sales Tax`,`Poll Tax`,`Treasury`,`Tags`],Se=[`Full Name`,`Form`,`Color`,`Capital`,`Culture`,`Type`,`Expansionism`,`Sales Tax`,`Poll Tax`,`Treasury`,`Tags`];function Ce(){let e=R?.search,t=pack.states.filter(e=>!e.removed);return e?t.filter(t=>t.i?o.matches(e,t.name,t.tags,[t.fullName]):o.matches(e,t.name)):t}var V=ye({getData:()=>pe(I,Ce(),z),onUpdate:Oe});function H(){options.app.mode||(R=T.get(I,`filters`,()=>({search:``})),E.closeAll(`#${I}, .stable`),_.show(`states`,`borders`),_.hide(`cultures`,`biomes`,`religions`),we(),k.collectStatistics(),V.reset(),E.open(I,{title:r(`States Editor`),resizable:!1,position:L,onClose:De}))}function we(){E.destroy(I);let e=`<div id="${I}" class="dialog stable editorDialog">
    <div id="statesBodySection" class="table" data-type="absolute">
      ${_e({dialogId:I,columns:z})}
    </div>

    <div id="statesFilters" class="editorFilters">
      <label for="statesSearch" data-tip="${r(`Filter by name or tag`)}">${r(`Search`)}: <input id="statesSearch" type="search" autocomplete="off" /></label>
    </div>

    <div id="statesFooter" class="totalLine">
      <div data-tip="${r(`States number`)}" style="margin-left: 5px">${r(`States`)}:&nbsp;<span id="statesFooterStates">0</span></div>
      <div data-tip="${r(`Number of burgs`)}" style="margin-left: 12px" data-col="burgs">${r(`Burgs`)}:&nbsp;<span id="statesFooterBurgs">0</span></div>
      <div data-tip="${r(`Total land area`)}" style="margin-left: 12px" data-col="area">${r(`Land area`)}:&nbsp;<span id="statesFooterArea">0</span></div>
      <div data-tip="${r(`Total population`)}" style="margin-left: 12px" data-col="population">${r(`Population`)}:&nbsp;<span id="statesFooterPopulation">0</span></div>
    </div>

    <div id="statesBottom" class="editorToolbar">
      <button id="statesEditorRefresh" data-tip="${r(`Refresh`)}" class="icon-cw"></button>
      <button id="statesEditStyle" data-tip="${r(`Edit style in Style Editor`)}" class="icon-adjust"></button>
      <button id="statesLegend" data-tip="${r(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="statesPercentage" data-tip="${r(`Toggle percentage / absolute values views`)}" class="icon-percent"></button>
      <button id="statesChart" data-tip="${r(`States bubble chart`)}" class="icon-chart-area"></button>

      <button id="statesRegenerate" data-tip="${r(`Show`)}" class="icon-cog-alt"></button>
      <div id="statesRegenerateButtons" style="display: none">
        <button id="statesRegenerateBack" data-tip="${r(`Hide`)}" class="icon-cog-alt"></button>
        <button id="statesRandomize" data-tip="${r(`Randomize states Expansion value and re-calculate states and provinces`)}" class="icon-shuffle"></button>
        <button id="statesRecalculate" data-tip="${r(`Recalculate states based on current values of growth-related attributes`)}" class="icon-retweet"></button>
        <div data-tip="${r(`Allow states neutral distance, expansion and type changes to take an immediate effect`)}" style="display: inline-block">
          <input id="statesAutoChange" class="checkbox" type="checkbox" />
          <label for="statesAutoChange" class="checkbox-label"><i>${r(`auto-apply changes`)}</i></label>
        </div>
        <div data-tip="${r(`Allow system to change state labels when states data is change`)}" style="display: inline-block">
          <input id="adjustLabels" class="checkbox" type="checkbox" />
          <label for="adjustLabels" class="checkbox-label"><i>${r(`auto-change labels`)}</i></label>
        </div>
      </div>

      <button id="statesManually" data-tip="${r(`Manually re-assign states`)}" class="icon-brush"></button>

      <button id="statesAdd" data-tip="${i(r(`Add`),r(`Hold Shift to add multiple`))}" class="icon-plus"></button>
      <button id="statesMerge" data-tip="${r(`Merge several states into one`)}" class="icon-layer-group"></button>
      <button id="statesAnnex" data-tip="${i(r(`Annex states: click the annexing state, then the states it absorbs`),r(`Hold Shift to keep annexing`))}" class="icon-crown"></button>
      <button id="statesExport" data-tip="${r(`Save data as a CSV file`)}" class="icon-download"></button>
      <button id="statesImport" data-tip="${r(`Upload data from a CSV file`)}" class="icon-upload"></button>
    </div>
  </div>`;b(`dialogs`).insertAdjacentHTML(`beforeend`,e),b(`statesSearch`).value=R.search,me(I,V.reset),F(I,({cellId:e})=>pack.cells.h[e]<20?void 0:pack.cells.state[e]),ve({dialogId:I,columns:z,onUpdate:()=>E.update(I,{width:`fit-content`,position:L})}),b(`statesSearch`).addEventListener(`input`,Te),b(`statesEditorRefresh`).addEventListener(`click`,U),b(`statesEditStyle`).addEventListener(`click`,()=>void O.StyleEditor.open(`states`)),b(`statesLegend`).addEventListener(`click`,Ue),b(`statesPercentage`).addEventListener(`click`,Y),b(`statesChart`).addEventListener(`click`,X),b(`statesRegenerate`).addEventListener(`click`,We),b(`statesRegenerateBack`).addEventListener(`click`,Ke),b(`statesRecalculate`).addEventListener(`click`,()=>Z(!0)),b(`statesRandomize`).addEventListener(`click`,Ge),b(`statesManually`).addEventListener(`click`,qe),b(`statesAdd`).addEventListener(`click`,Ye),b(`statesMerge`).addEventListener(`click`,Ze),b(`statesAnnex`).addEventListener(`click`,$e.toggle),b(`statesExport`).addEventListener(`click`,tt),b(`statesImport`).addEventListener(`click`,()=>w.pick(nt)),b(`statesBodySection`).addEventListener(`click`,e=>{let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=Number(r.dataset.id);t.tagName===`FILL-BOX`?ke(t):n.contains(`name`)?Ae(i):n.contains(`coaIcon`)?O.EmblemsEditor.open(`state`,`stateCOA${i}`,pack.states[i]):n.contains(`icon-star-empty`)?Ie(i):n.contains(`icon-dot-circled`)?O.BurgsOverview.open({stateId:i}):n.contains(`statePopulation`)?Me(i):n.contains(`stateTreasury`)?Ne(i):n.contains(`icon-book`)?O.NotesEditor.open({type:`state`,id:i}):n.contains(`icon-pin`)?Be(i,n):n.contains(`icon-target`)?oe(S(`#regions`).select(`#state${i}`).node(),4):n.contains(`icon-trash-empty`)?Ve(i):(n.contains(`icon-lock`)||n.contains(`icon-lock-open`))&&rt(i,n)}),b(`statesBodySection`).addEventListener(`change`,e=>{let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=+r.dataset.id;n.contains(`stateCulture`)?Le(i,r,t.value):n.contains(`cultureType`)?Re(i,r,t.value):n.contains(`statePower`)?ze(i,r,t.value):n.contains(`stateTags`)&&Ee(i,r,t)})}function Te(e){R.search=e.target.value,T.set(I,`filters`,R),V.reset()}function Ee(e,t,n){let r=pack.states[e];r&&(o.set(r,n.value),n.value=o.format(r.tags),t.dataset.tags=o.format(r.tags),R.search&&V.refresh())}function De(){options.app.mode===`addState`&&Q(),$e.exit(),O.ColorPicker.close(),S(`#debug`).selectAll(`.highlight`).remove();let e=V.view();e.rows=[],e.all=[]}function U(){k.collectStatistics(),V.refresh()}function Oe(n){let a=M(),s=0,c=0,l=0;for(let e of n.all){s+=j(e.area||0);let n=(e.rural||0)*options.map.units.population.scale,r=(e.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate;c+=t(n+r),l+=e.burgs||0}let u=``;for(let s of n.rows){let n=j(s.area||0),c=(s.rural||0)*options.map.units.population.scale,l=(s.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,d=t(c+l),f=i(`${r(`Total population`)}: ${e(d)}`,`${r(`Rural population`)}: ${e(c)}`,`${r(`Urban population`)}: ${e(l)}`,r(`Click to edit`)),p=S(`#deftemp`).select(`#fog #focusState${s.i}`).size(),h=r(`Current treasury: 🟡 {{treasury}}. Sales Tax: {{salesTax}}%. Poll Tax: {{pollTax}}%. Click to view and edit taxes`,{treasury:e(s.treasury),salesTax:t((s.salesTax||0)*100,1),pollTax:t((s.pollTax||0)*100,1)});if(!s.i){u+=`<div
        class="states"
        data-id=${s.i}
        data-name="${s.name}"
        data-cells=${s.cells}
        data-area=${n}
        data-population=${d}
        data-burgs=${s.burgs}
        data-treasury="0"
        data-color=""
        data-form=""
        data-capital=""
        data-culture=""
        data-type=""
        data-expansionism=""
        data-tags=""
      >
        <svg width="1em" height="1em" class="placeholder" data-col="color"></svg>
        <input data-tip="${i(r(`Neutral lands name`),r(`Click to change`))}" class="stateName name pointer italic" value="${s.name}" readonly data-col="name" />
        <svg class="coaIcon placeholder" viewBox="0 0 200 200" data-col="emblem"></svg>
        <input class="stateForm placeholder" value="none" data-col="form" />
        <div data-col="capital">
          <span class="icon-star-empty placeholder"></span>
          <div class="stateCapital placeholder"></div>
        </div>
        <select class="stateCulture placeholder" data-col="culture">${W(0)}</select>
        <div data-col="burgs">
          <span data-tip="${r(`Click to overview neutral burgs`)}" class="icon-dot-circled pointer" style="padding-right: 1px"></span>
          <div data-tip="${r(`Number of burgs`)}" class="stateBurgs">${s.burgs}</div>
        </div>
        <div data-col="cells">
          <span data-tip="${r(`Number of cells`)}" class="icon-check-empty"></span>
          <div data-tip="${r(`Number of cells`)}" class="stateCells">${s.cells}</div>
        </div>
        <div data-col="area">
          <span data-tip="${r(`Neutral lands area`)}" style="padding-right: 4px" class="icon-map-o"></span>
          <div data-tip="${r(`Neutral lands area`)}" class="stateArea">${e(n)} ${a}</div>
        </div>
        <div data-col="population">
          <span data-tip="${f}" class="icon-male"></span>
          <div data-tip="${f}" class="statePopulation pointer">${e(d)}</div>
        </div>
        <div data-tip="${r(`Neutrals collect no taxes`)}" class="stateTreasury placeholder" data-col="treasury"></div>
        <select class="cultureType placeholder" data-col="type">${G(0)}</select>
        <div data-col="expansionism">
          <span class="icon-resize-full placeholder"></span>
          <input class="statePower placeholder" type="number" value="0" />
        </div>
        <div data-col="tags" class="placeholder"></div>
        <div data-col="note"></div>
        <div data-col="locate"></div>
        <div data-col="focus"></div>
        <div data-col="lock"></div>
        <div data-col="remove"></div>
      </div>`;continue}let g=pack.burgs[s.capital].name;m.trigger(`stateCOA${s.i}`,s.coa),u+=`<div
      class="states"
      data-id=${s.i}
      data-name="${s.name}"
      data-form="${s.formName||``}"
      data-capital="${g}"
      data-color="${s.color}"
      data-cells=${s.cells}
      data-area=${n}
      data-population=${d}
      data-burgs=${s.burgs}
      data-treasury="${s.treasury}"
      data-culture=${pack.cultures[s.culture].name}
      data-type=${s.type}
      data-expansionism=${s.expansionism}
      data-tags="${o.format(s.tags)}"
    >
      <fill-box fill="${s.color}" data-col="color"></fill-box>
      <input data-tip="${i(r(`Name`),r(`Click to change`))}" class="stateName name pointer" value="${s.name}" readonly data-col="name" />
      <svg data-tip="${r(`Edit Emblem`)}" class="coaIcon pointer" viewBox="0 0 200 200" data-col="emblem"><use href="#stateCOA${s.i}"></use></svg>
      <input data-tip="${i(r(`Form name`),r(`Click to change`))}" class="stateForm name pointer" value="${s.formName||``}" readonly data-col="form" />
      <div data-col="capital">
        <span data-tip="${i(r(`State capital`),r(`Click to zoom`))}" class="icon-star-empty pointer"></span>
        <div data-tip="${r(`Capital name`)}" class="stateCapital">${g}</div>
      </div>
      <select data-tip="${i(r(`Dominant culture`),r(`Click to change`))}" class="stateCulture" data-col="culture">${W(s.culture)}</select>
      <div data-col="burgs">
        <span data-tip="${r(`Click to overview state burgs`)}" style="padding-right: 1px" class="icon-dot-circled pointer"></span>
        <div data-tip="${r(`Number of burgs`)}" class="stateBurgs">${s.burgs}</div>
      </div>
      <div data-col="cells">
        <span data-tip="${r(`Number of cells`)}" class="icon-check-empty"></span>
        <div data-tip="${r(`Number of cells`)}" class="stateCells">${s.cells}</div>
      </div>
      <div data-col="area">
        <span data-tip="${r(`State area`)}" style="padding-right: 4px" class="icon-map-o"></span>
        <div data-tip="${r(`State area`)}" class="stateArea">${e(n)} ${a}</div>
      </div>
      <div data-col="population">
        <span data-tip="${f}" class="icon-male"></span>
        <div data-tip="${f}" class="statePopulation pointer">${e(d)}</div>
      </div>
      <div data-tip="${h}" class="stateTreasury pointer" data-col="treasury">🟡 ${e(s.treasury)}</div>
      <select data-tip="${i(r(`State type`),r(`Defines growth model`),r(`Click to change`))}" class="cultureType" data-col="type">${G(s.type)}</select>
      <div data-col="expansionism">
        <span data-tip="${r(`State expansionism`)}" class="icon-resize-full"></span>
        <input data-tip="${r(`Expansionism (defines competitive size). Change to re-calculate states based on new value`)}"
          class="statePower" type="number" min="0" max="99" step=".1" value=${s.expansionism} />
      </div>
      <div data-col="tags">
        <input data-tip="${i(r(`State tags`),r(`Comma-separated list of tags`))}" class="stateTags" placeholder="${r(`none`)}" value="${o.format(s.tags)}" />
      </div>
      ${he(r(`Edit free text notes (legend)`))}
      <span data-col="locate" data-tip="${r(`Locate on map`)}" class="icon-target"></span>
      <span data-col="focus" data-tip="${r(`Toggle state focus`)}" class="icon-pin ${p?``:` inactive`}"></span>
      <span data-col="lock" data-tip="${r(`Lock`)}" class="icon-lock${s.lock?``:`-open`}"></span>
      <span data-col="remove" data-tip="${r(`Remove`)}" class="icon-trash-empty"></span>
    </div>`}let d=b(`statesBodySection`);d.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),d.insertAdjacentHTML(`beforeend`,u);let f=pack.states.filter(e=>e.i&&!e.removed).length,p=n.all.filter(e=>e.i&&!e.removed).length;b(`statesFooterStates`).innerHTML=p===f?String(f):r(`{{shown}} of {{total}}`,{shown:p,total:f}),b(`statesFooterBurgs`).innerHTML=String(l),b(`statesFooterArea`).innerHTML=e(s)+a,b(`statesFooterArea`).dataset.area=String(s),b(`statesFooterPopulation`).innerHTML=e(c),b(`statesFooterPopulation`).dataset.population=String(c),ge(b(`statesFooter`),n,V.goto),b(`statesBodySection`).querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,K),e.addEventListener(`mouseleave`,q)}),b(`statesBodySection`).dataset.type===`percentage`&&(b(`statesBodySection`).dataset.type=`absolute`,Y()),E.update(I,{width:`fit-content`,position:L})}function W(e){let t=``;return pack.cultures.forEach(n=>{n.removed||(t+=`<option ${n.i===e?`selected`:``} value="${n.i}">${n.name}</option>`)}),t}function G(e){let t=``;return[`Generic`,`River`,`Lake`,`Naval`,`Nomadic`,`Hunting`,`Highland`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${c[n]??n}</option>`}),t}function K(e){if(!_.isOn(`states`)||S(`#deftemp`).select(`#fog path`).size())return;let t=Number(e.target.dataset.id);!options.app.mode&&t&&C(S(`#regions`).select(`#state${t}`).attr(`d`))}function q(){S(`#debug`).selectAll(`.highlight`).each(function(){S(this).transition().duration(1e3).attr(`opacity`,0).remove()})}function ke(e){let t=e.getAttribute(`fill`)||`#ffffff`,n=+e.closest(`.states`).dataset.id;O.ColorPicker.open(t,t=>{e.fill=t,pack.states[n].color=t,_.draw(`states`),_.draw(`military`)})}function Ae(e){je();let t=b(`stateNameEditorCustomForm`),n=b(`stateNameEditorSelectForm`);t.value=``,t.style.display===`inline-block`&&(t.style.display=`none`,n.style.display=`inline-block`);let i=pack.states[e];b(`stateNameEditor`).dataset.state=String(e),b(`stateNameEditorShort`).value=i.name||``,x(n,i.formName||``),b(`stateNameEditorFull`).value=i.fullName||``,E.open(`stateNameEditor`,{resizable:!1,title:r(`Change state name`),buttons:[{label:r(`Apply`),onClick:()=>{l(i),E.close(`stateNameEditor`)}},{label:r(`Cancel`),onClick:()=>E.close(`stateNameEditor`)}],position:{my:`center`,at:`center`,of:`svg`}}),b(`stateNameEditorShortCulture`).addEventListener(`click`,a),b(`stateNameEditorShortRandom`).addEventListener(`click`,o),b(`stateNameEditorShortSpeak`).addEventListener(`click`,()=>P(b(`stateNameEditorShort`).value)),b(`stateNameEditorAddForm`).addEventListener(`click`,s),b(`stateNameEditorCustomForm`).addEventListener(`change`,s),b(`stateNameEditorFullRegenerate`).addEventListener(`click`,c),b(`stateNameEditorFullSpeak`).addEventListener(`click`,()=>P(b(`stateNameEditorFull`).value));function a(){let e=+b(`stateNameEditor`).dataset.state,t=pack.states[e].culture,n=v.getState(v.getCultureShort(t),t);b(`stateNameEditorShort`).value=n}function o(){let e=re(v.nameBases.length-1),t=v.getState(v.getBase(e),void 0,e);b(`stateNameEditorShort`).value=t}function s(){let e=t.value,r=t.style.display===`inline-block`;t.style.display=r?`none`:`inline-block`,n.style.display=r?`inline-block`:`none`,e&&r&&x(n,e),t.value=``}function c(){let e=b(`stateNameEditorShort`).value,t=b(`stateNameEditorSelectForm`).value;b(`stateNameEditorFull`).value=n();function n(){if(!t)return e;if(!e&&t)return`The ${t}`;let n=b(`stateNameEditorFullRegenerate`),r=+n.dataset.tick;return n.dataset.tick=String(r+1),r%2?`${ie(e)} ${t}`:`${t} of ${e}`}}function l(e){let t=b(`stateNameEditorShort`).value.trim(),n=b(`stateNameEditorSelectForm`).value,r=b(`stateNameEditorFull`).value.trim(),i=e.fullName,a=t!==e.name||n!==(e.formName??``)||r!==i;t&&t!==e.name&&k.rename(e.i,t),n!==(e.formName??``)&&k.setForm(e.i,n),r&&r!==i&&k.setFullName(e.i,r),a&&b(`stateNameEditorUpdateLabel`).checked&&(e.label?.text&&delete e.label.text,_.draw(`labels`)),U()}}function je(){E.destroy(`stateNameEditor`);let e=`<div id="stateNameEditor" class="dialog" data-state="0">
      <div>
        <div data-tip="${r(`Short name`)}" class="label">${r(`Short name`)}:</div>
        <input
          id="stateNameEditorShort"
          data-tip="${r(`Type to change the short name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="stateNameEditorShortSpeak" data-tip="${i(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="stateNameEditorShortCulture"
          data-tip="${r(`Generate culture-specific name`)}"
          class="icon-book pointer"
        ></span>
        <span id="stateNameEditorShortRandom" data-tip="${r(`Generate random name`)}" class="icon-globe pointer"></span>
      </div>
      <div data-tip="${r(`Select form name`)}">
        <div data-tip="${r(`Form name`)}" class="label">${r(`Form name`)}:</div>
        <select id="stateNameEditorSelectForm" style="width: 11em">
          <option value="">${r(`blank`)}</option>
          ${Object.entries(de).map(([e,t])=>`<optgroup label="${e}">${t.map(e=>`<option value="${e}">${e}</option>`).join(``)}</optgroup>`).join(``)}
        </select>
        <input
          id="stateNameEditorCustomForm"
          placeholder="${r(`Enter custom form name`)}"
          data-tip="${r(`Enter custom form name`)}"
          style="display: none; width: 11em"
        />
        <span
          id="stateNameEditorAddForm"
          data-tip="${r(`Click to add custom state form name to the list`)}"
          class="icon-plus pointer"
        ></span>
      </div>
      <div>
        <div data-tip="${r(`Full name`)}" class="label">${r(`Full name`)}:</div>
        <input
          id="stateNameEditorFull"
          data-tip="${r(`Type to change the full name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="stateNameEditorFullSpeak" data-tip="${i(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="stateNameEditorFullRegenerate"
          data-tip="${r(`Click to re-generate full name`)}"
          data-tick="0"
          class="icon-arrows-cw pointer"
        ></span>
      </div>
      <div data-tip="${r(`Uncheck to not update state label on name change`)}" style="padding-block: 0.2em">
        <input id="stateNameEditorUpdateLabel" class="checkbox" type="checkbox" checked />
        <label for="stateNameEditorUpdateLabel" class="checkbox-label"><i>${r(`Update label on Apply`)}</i></label>
      </div>
    </div>`;b(`dialogs`).insertAdjacentHTML(`beforeend`,e)}function Me(e){let i=pack.states[e];if(!i.cells){D(r(`No cells, cannot change population`),!1,`error`);return}let a=t((i.rural||0)*options.map.units.population.scale),o=t((i.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString();E.message({message:`<div>
    <i>${r(`Change population of all cells assigned to the state`)}</i>
    <div style="margin: 0.5em 0">
      ${r(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" />
      ${r(`Urban`)}: <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em" />
    </div>
    <div>${r(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span>
      (<span id="totalPopPerc">100</span>%)
    </div>
  </div>`,title:r(`Change state population`),width:`24em`,buttons:[{label:r(`Apply`),onClick:()=>{m()}},{label:r(`Cancel`)}]});let l=b(`ruralPop`),u=b(`urbanPop`),d=b(`totalPop`),f=b(`totalPopPerc`),p=()=>{let e=l.valueAsNumber+u.valueAsNumber;Number.isNaN(e)||(d.innerHTML=c(e),f.innerHTML=String(t(e/s*100)))};l.oninput=()=>p(),u.oninput=()=>p();function m(){try{k.setPopulation(e,+l.value||0,+u.value||0)}catch(e){D(n(e),!1,`error`);return}_.draw(`population`),U()}}function Ne(e){let n=pack.states[e];if(!e||!n||n.removed)return;let o=t((n.pollTax||0)*((n.rural||0)+(n.urban||0)),2),s=0,c=0;for(let t of pack.deals??[]){if(t.tax){let n=0;if(t.sellerType===`burg`)n=pack.burgs[t.seller]?.state||0;else if(t.sellerType===`market`){let e=A.get(t.seller)?.centerBurgId;n=e&&pack.burgs[e]?.state||0}n===e&&(s+=t.tax)}if(t.tariff&&t.buyerType===`market`){let n=A.get(t.buyer)?.centerBurgId;(n&&pack.burgs[n]?.state||0)===e&&(c+=t.tariff)}}let l=(n.tariffs??[]).map(e=>({states:Array.isArray(e.states)?[...e.states]:`all`,goods:Array.isArray(e.goods)?[...e.goods]:`all`,rate:e.rate})),u=e=>{if(!Array.isArray(e))return{label:r(`All states`),tip:i(r(`All foreign states`),r(`Click to select`))};let t=e.map(e=>pack.states[e]?.name||String(e));return{label:(t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`)||r(`None`),tip:i(t.join(`, `)||r(`None`),r(`Click to select`))}},d=e=>{if(!Array.isArray(e))return{label:r(`All goods`),tip:i(r(`All goods`),r(`Click to select`))};let t=e.map(e=>a.get(e)?.name||String(e));return{label:(t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`)||r(`None`),tip:i(t.join(`, `)||r(`None`),r(`Click to select`))}};E.message({message:`<div data-tip="${r(`Sales tax is applied to deals with a seller from the state. Poll tax is applied to all population of the state. Tariffs are applied to foreign goods imported into the state's markets. Tax changes take effect on Production regeneration`)}" style="margin: 0.6em 0; display: grid; grid-template-columns: 7em auto auto; row-gap: 0.4em; align-items: center">
      <label for="stateSalesTaxInput">${r(`Sales Tax`)}:</label>
      <input id="stateSalesTaxInput" type="number" min="0" max="1" step="0.01" value="${n.salesTax}" style="width: 6em"/> = ${N(s)}
      <label for="statePollTaxInput">${r(`Poll Tax`)}:</label>
      <input id="statePollTaxInput" type="number" min="0" max="10" step="0.01" value="${n.pollTax}" style="width: 6em"/> = ${N(o)}
      <label>${r(`Tariffs`)}:</label>
      <span></span> = ${N(c)}
      <label for="stateTreasuryInput">${r(`Treasury`)}:</label>
      <input id="stateTreasuryInput" type="number" step="1" value="${n.treasury}" style="width: 6em" />
    </div>
    <hr />
    <div style="display: flex; justify-content: space-between; align-items: center; margin: 0.4em 0;">
      <b data-tip="${r(`More specific rules override general rules. Embargoes block trade in both directions`)}">${r(`Tariffs and Embargoes`)}</b>
      <div style="display: flex; gap: 0.3em;">
        <button id="stateTariffReset" type="button" class="icon-arrows-cw" data-tip="${r(`Reset tariffs based on current diplomatic relations`)}"> ${r(`Reset`)}</button>
        <button id="stateTariffAdd" type="button" class="icon-plus" data-tip="${r(`Add tariff or embargo rule`)}"> ${r(`Add`)}</button>
      </div>
    </div>
    <div id="stateTariffsList" style="max-height: 15em; overflow-y: auto; display: flex; flex-direction: column; row-gap: 0.25em;"></div>`,title:r(`Taxes and Treasury: {{- state}}`,{state:n.name}),width:`32em`,buttons:[{label:r(`Apply`),onClick:()=>{let t=b(`stateSalesTaxInput`),r=b(`statePollTaxInput`),i=b(`stateTreasuryInput`),a=Math.max(0,Math.min(1,+t.value)),o=Math.max(0,+r.value),s=+i.value;k.setTaxes(e,Number.isFinite(a)?a:n.salesTax,Number.isFinite(o)?o:n.pollTax),k.setTariffs(e,l),Number.isFinite(s)&&k.setTreasury(e,s),U()}},{label:r(`Cancel`)}]});let f=b(`stateTariffsList`),p=()=>{l.length?f.innerHTML=l.map((e,t)=>{let n=u(e.states),i=d(e.goods),a=e.rate===`embargo`,o=a?.1:e.rate;return`<div class="tariffRuleRow" data-index="${t}" style="display: grid; grid-template-columns: 1fr 1fr 5.8em 4.5em 1.2em; column-gap: 0.3em; align-items: center;">
          <button type="button" class="tariffStatesBtn" data-tip="${n.tip}" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${n.label}</button>
          <button type="button" class="tariffGoodsBtn" data-tip="${i.tip}" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${i.label}</button>
          <select class="tariffTypeSelect" data-tip="${r(`Rule policy: tariff rate or complete trade embargo`)}">
            <option value="tariff" ${a?``:`selected`}>${r(`Tariff`)}</option>
            <option value="embargo" ${a?`selected`:``}>${r(`Embargo`)}</option>
          </select>
          <input class="tariffRateInput" type="number" min="0" max="10" step="0.01" value="${o}" data-tip="${r(`Import tariff rate`)}" style="width: 4.2em; ${a?`visibility: hidden;`:``}" />
          <span class="icon-trash-empty pointer tariffRemoveBtn" data-tip="${r(`Remove rule`)}"></span>
        </div>`}).join(``):f.innerHTML=`<div style="color: #666; font-style: italic; padding: 0.3em 0;">${r(`No tariff or embargo rules`)}</div>`};p(),b(`stateTariffReset`).addEventListener(`click`,()=>{l=k.defineTariffs(n).map(e=>({states:Array.isArray(e.states)?[...e.states]:`all`,goods:Array.isArray(e.goods)?[...e.goods]:`all`,rate:e.rate})),p()}),b(`stateTariffAdd`).addEventListener(`click`,()=>{l.push({states:`all`,goods:`all`,rate:.1}),p()}),f.addEventListener(`click`,t=>{let n=t.target,r=n.closest(`.tariffRuleRow`);if(!r)return;let i=+r.dataset.index,a=l[i];a&&(n.classList.contains(`tariffRemoveBtn`)?(l.splice(i,1),p()):n.classList.contains(`tariffStatesBtn`)?Pe(e,a,p):n.classList.contains(`tariffGoodsBtn`)&&Fe(a,p))}),f.addEventListener(`change`,e=>{let n=e.target,r=n.closest(`.tariffRuleRow`);if(!r)return;let i=+r.dataset.index,a=l[i];if(a){if(n.classList.contains(`tariffTypeSelect`)){let e=r.querySelector(`.tariffRateInput`);if(n.value===`embargo`)a.rate=`embargo`,e&&(e.style.visibility=`hidden`);else{let n=e?Math.max(0,Math.min(10,+e.value)):.1;a.rate=Number.isFinite(n)?t(n,4):.1,e&&(e.style.visibility=``)}}else if(n.classList.contains(`tariffRateInput`)){let e=Math.max(0,Math.min(10,+n.value));a.rate!==`embargo`&&(a.rate=Number.isFinite(e)?t(e,4):0)}}}),f.addEventListener(`input`,e=>{let n=e.target;if(!n.classList.contains(`tariffRateInput`))return;let r=n.closest(`.tariffRuleRow`);if(!r)return;let i=+r.dataset.index,a=l[i];if(!a||a.rate===`embargo`)return;let o=Math.max(0,Math.min(10,+n.value));a.rate=Number.isFinite(o)?t(o,4):0})}function Pe(e,t,n){let i=pack.states.filter(t=>t.i&&!t.removed&&t.i!==e),a=t.states===`all`,o=new Set(Array.isArray(t.states)?t.states:i.map(e=>e.i));J({title:r(`Select States`),allLabel:r(`All states`),isAll:a,items:i.map(e=>({id:e.i,name:e.name,badgeHtml:`<fill-box fill="${e.color||`#ccc`}" size=".8em" disabled></fill-box>`,checked:a||o.has(e.i)})),emptyWarning:r(`Select at least one state`),onSave:e=>{t.states=e,n()}})}function Fe(e,t){let n=pack.goods??[],i=e.goods===`all`,a=new Set(Array.isArray(e.goods)?e.goods:n.map(e=>e.i));J({title:r(`Select Goods`),allLabel:r(`All goods`),isAll:i,items:n.map(e=>({id:e.i,name:e.name,badgeHtml:e.icon?`<svg width="1.2em" height="1.2em" class="goodIcon" style="min-width: 1.2em; min-height: 1.2em; flex-shrink: 0;">${te(e)}</svg>`:`<fill-box fill="${e.color||`#ccc`}" size=".8em" disabled></fill-box>`,checked:i||a.has(e.i)})),emptyWarning:r(`Select at least one good`),onSave:n=>{e.goods=n,t()}})}function J({title:e,allLabel:t,isAll:n,items:i,emptyWarning:a,onSave:o}){E.destroy(`tariffSelectorDialog`);let s=document.createElement(`div`);s.id=`tariffSelectorDialog`,s.className=`dialog`,document.body.appendChild(s);let c=i.map(e=>`<label style="display: flex; align-items: center; column-gap: 0.35em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><input type="checkbox" class="native tariffItemCheck" value="${e.id}" ${e.checked?`checked`:``} />${e.badgeHtml??``}<span>${e.name}</span></label>`).join(``);s.innerHTML=`
    <div style="margin-bottom: 0.4em; padding-bottom: 0.3em; border-bottom: 1px solid #ccc;">
      <label style="display: flex; align-items: center; column-gap: 0.3em;">
        <input id="tariffAllCheck" type="checkbox" class="native" ${n?`checked`:``} />
        <b>${t}</b>
      </label>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25em 0.5em; max-height: 16em; overflow-y: auto;">
      ${c}
    </div>
  `;let l=b(`tariffAllCheck`),u=Array.from(s.querySelectorAll(`.tariffItemCheck`));l.addEventListener(`change`,()=>{for(let e of u)e.checked=l.checked}),s.addEventListener(`change`,e=>{e.target.classList.contains(`tariffItemCheck`)&&(l.checked=u.length>0&&u.every(e=>e.checked))});let d=()=>E.close(`tariffSelectorDialog`);E.open(`tariffSelectorDialog`,{resizable:!1,title:e,width:`24em`,buttons:[{label:r(`Apply`),onClick:()=>{if(l.checked)return o(`all`),d();let e=u.filter(e=>e.checked).map(e=>+e.value);if(!e.length)return D(a,!1,`error`);o(e.length===u.length?`all`:e),d()}},{label:r(`Cancel`),onClick:d}]})}function Ie(e){let t=pack.states[e].capital,{x:n,y:r}=pack.burgs[t];fe(n,r,8,2e3)}function Le(e,t,n){k.setCulture(e,+n),t.dataset.base=String(+n)}function Re(e,t,n){k.setType(e,n),t.dataset.type=n,Z()}function ze(e,t,n){let r=Number(n);r>=0&&r<=99&&(k.setExpansionism(e,r),t.dataset.expansionism=n,Z())}function Be(e,t){if(options.app.mode)return;let n=S(`#statesBody`).select(`#state${e}`).attr(`d`),r=`focusState${e}`;t.contains(`inactive`)?ee(r,n):p(r),t.toggle(`inactive`)}function Ve(e){options.app.mode||E.confirm({title:r(`Remove`),message:`${r(`Are you sure you want to remove the state?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>He(e)})}function He(e){p(`focusState${e}`),f(`state`,e);for(let t of pack.states[e].provinces||[])f(`province`,t);k.remove(e),S(`#debug`).selectAll(`.highlight`).remove(),_.draw(`burgIcons`,`labels`,`military`,`borders`,`provinces`,`states`),U()}function Ue(){h.toggle(xe,()=>pack.states.filter(e=>e.i&&!e.removed&&e.cells).sort((e,t)=>(t.area??0)-(e.area??0)).map(e=>[e.i,e.color??``,e.name]),r(`No states to show`))}function Y(){if(b(`statesBodySection`).dataset.type===`absolute`){b(`statesBodySection`).dataset.type=`percentage`;let e=+b(`statesFooterBurgs`).textContent,n=+b(`statesFooterArea`).dataset.area,r=+b(`statesFooterPopulation`).dataset.population,i=pack.states.reduce((e,t)=>e+(t.treasury||0),0),a=pack.states.reduce((e,t)=>e+(t.i&&!t.removed&&t.cells||0),0);b(`statesBodySection`).querySelectorAll(`:scope > .states`).forEach(o=>{let{burgs:s,area:c,population:l,treasury:u,cells:d}=o.dataset;o.querySelector(`.stateBurgs`).textContent=`${t(+s/e*100)}%`,o.querySelector(`.stateCells`).textContent=`${t(+d/a*100)}%`,o.querySelector(`.stateArea`).textContent=`${t(+c/n*100)}%`,o.querySelector(`.statePopulation`).textContent=`${t(+l/r*100)}%`,o.querySelector(`.stateTreasury`).textContent=`${t(+u/i*100,2)}%`})}else b(`statesBodySection`).dataset.type=`absolute`,V.refresh()}function X(){let n=pack.states.filter(e=>!e.removed);if(n.length<2){D(r(`No states to show`),!1,`error`);return}let i=se().id(e=>String(e.i)).parentId(e=>e.i?`0`:null)(n).sum(e=>e.area??0).sort((e,t)=>t.value-e.value),a=150+200*b(`uiSize`).valueAsNumber,o={top:0,right:-50,bottom:0,left:-50},s=a-o.left-o.right,c=a-o.top-o.bottom,l=ce().size([s,c]).padding(3),u=document.createElement(`div`);u.innerHTML=`<select id="statesTreeType" style="display:block; margin-left:13px; font-size:11px">
    <option value="area" selected>${r(`Area`)}</option>
    <option value="population">${r(`Total population`)}</option>
    <option value="rural">${r(`Rural population`)}</option>
    <option value="urban">${r(`Urban population`)}</option>
    <option value="burgs">${r(`Number of burgs`)}</option>
  </select><div id='statesInfo' class='chartInfo'>&#8205;</div>`;let d=S(u).insert(`svg`,`#statesInfo`).attr(`id`,`statesTree`).attr(`width`,a).attr(`height`,a).style(`font-family`,`Almendra SC`).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`central`).append(`g`).attr(`transform`,`translate(-50, 0)`);u.querySelector(`#statesTreeType`).addEventListener(`change`,ee);let f=d.selectAll(`g`).data(l(i).leaves()).enter().append(`g`).attr(`transform`,e=>`translate(${e.x},${e.y})`).attr(`data-id`,e=>e.data.i).on(`mouseenter`,(e,t)=>h(e,t)).on(`mouseleave`,e=>g(e));f.append(`circle`).attr(`fill`,e=>e.data.color??null).attr(`r`,e=>e.r);let p=/(?=[A-Z][^A-Z])/g,m=e=>(ne(e.split(p).map(e=>e.length))??0)+1;f.append(`text`).attr(`text-rendering`,`optimizeSpeed`).style(`font-size`,e=>`${t(e.r**.97*4/m(e.data.name),2)}px`).selectAll(`tspan`).data(e=>e.data.name.split(p)).join(`tspan`).attr(`x`,0).text(e=>e).attr(`dy`,(e,t,n)=>`${t?1:(n.length-1)/-2}em`);function h(n,i){S(n.target).select(`circle`).classed(`selected`,!0);let a=i.data.fullName,o=`${j(i.data.area)} ${M()}`,s=t(i.data.rural*options.map.units.population.scale),c=t(i.data.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),l=b(`statesTreeType`).value,u=l===`area`?`${r(`Area`)}: ${o}`:l===`rural`?`${r(`Rural population`)}: ${e(s)}`:l===`urban`?`${r(`Urban population`)}: ${e(c)}`:l===`burgs`?r(`Burgs number: {{burgs}}`,{burgs:i.data.burgs}):`${r(`Population`)}: ${e(s+c)}`;b(`statesInfo`).innerHTML=`${a}. ${u}`,K(n)}function g(e){q(),y(`statesInfo`)&&(b(`statesInfo`).innerHTML=`&#8205;`,S(e.target).select(`circle`).classed(`selected`,!1))}function ee(){let e=this.value===`area`?e=>e.area??0:this.value===`rural`?e=>e.rural??0:this.value===`urban`?e=>e.urban??0:this.value===`burgs`?e=>e.burgs??0:e=>(e.rural??0)+(e.urban??0);i.sum(e),f.data(l(i).leaves()),f.transition().duration(1500).attr(`transform`,e=>`translate(${e.x},${e.y})`),f.select(`circle`).transition().duration(1500).attr(`r`,e=>e.r),f.select(`text`).transition().duration(1500).style(`font-size`,e=>`${t(e.r**.97*4/m(e.data.name),2)}px`)}E.message({message:u,title:r(`States bubble chart`),width:`fit-content`,position:{my:`left bottom`,at:`left+10 bottom-10`,of:`svg`},buttons:[]})}function We(){b(`statesBottom`).querySelectorAll(`:scope > button`).forEach(e=>{e.style.display=`none`}),b(`statesRegenerateButtons`).style.display=`block`}function Z(e){if(e||b(`statesAutoChange`).checked){if(k.recalculate(),_.draw(`states`,`borders`,`provinces`,`goods`,`emblems`),b(`adjustLabels`).checked){for(let e of pack.states)e.label&&(e.label.pathPoints=void 0);_.draw(`labels`)}U()}}function Ge(){pack.states.forEach(e=>{if(!e.i||e.removed)return;let n=t(Math.random()*4+1,1);e.expansionism=n,b(`statesBodySection`).querySelector(`div.states[data-id='${e.i}'] input.statePower`).value=String(n)}),Z(!0)}function Ke(){b(`statesBottom`).querySelectorAll(`:scope > button`).forEach(e=>{e.style.display=`inline-block`}),b(`statesRegenerateButtons`).style.display=`none`}function qe(){_.show(`states`);let e=b(`adjustLabels`).checked;O.PaintEditor.open({title:r(`Paint States`),parentDialogId:I,onClose:H,items:pack.states.filter(e=>!e.removed).map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`,lock:!!e.lock})),dontOverrideControl:!0,getValue:e=>pack.cells.state[e],filterCell:(e,t)=>l(e,pack)&&e!==pack.states[t].center,onApply:t=>Je(t,e)})}function Je(e,t){if(!e.size)return;let n=new Set;for(let[t,r]of d(e)){for(let e of r)n.add(pack.cells.state[e]).add(t);k.setCells(t,r)}if(_.draw(`states`,`borders`,`provinces`,`emblems`),t){for(let e of n)delete pack.states[e].label;_.draw(`labels`)}y(I)&&U()}function Ye(){this.classList.contains(`pressed`)?Q():(options.app.mode=`addState`,this.classList.add(`pressed`),D(r(`Click on the map to create a new capital or promote an existing burg`),!0),S(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Xe),b(`statesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function Xe(e){let[t,r]=ae(e,this),i=pack.cells.burg[u.findCell(t,r)],a;try{a=k.add(t,r)}catch(e){D(n(e),!1,`error`);return}e.shiftKey===!1&&Q(),i||g(`burg`,pack.states[a].capital),g(`state`,a),_.hide(`provinces`),_.draw(`burgIcons`,`labels`,`routes`,`states`,`borders`),V.refresh()}function Q(){options.app.mode=null,le(),ue(),b(`statesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=b(`statesAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}var $=e=>`<svg class="coaIcon" viewBox="0 0 200 200"><use href="#stateCOA${e}"></use></svg>`;function Ze(){let e=pack.states.filter(e=>e.i&&!e.removed).map(e=>`
      <div data-id="${e.i}" data-tip="${e.fullName}" style="cursor:default">
        <input type="radio" name="rulingState" value="${e.i}" />
        <input id="selectState${e.i}" class="checkbox" type="checkbox" name="statesToMerge" value="${e.i}" />
        <label for="selectState${e.i}" class="checkbox-label"><fill-box fill="${e.color}" disabled></fill-box>${$(e.i)}${e.fullName}</label>
      </div>
    `).join(``);E.message({id:`mergeStates`,message:`
    <form id='mergeStatesForm' style="overflow: hidden; display: flex; flex-direction: column; gap: 1em;">
      <p style="margin:0">
        ${r(`Check the checkbox next to each state you want to merge. Use the radio button to pick the ruling state that will absorb all others (its name, color, and capital will be kept). Hover over a row to highlight the state on the map.`)}
      </p>
      <main style='display: grid; grid-template-columns: 1fr 1fr; gap: .3em;'>
        ${e}
      </main>
    </form>
  `,width:600,title:r(`Merge states`),onClose:q,buttons:[{label:r(`Merge`),onClick:()=>{let e=new FormData(b(`mergeStatesForm`)),t=Number(e.get(`rulingState`));if(!t)return D(r(`Please select a state to merge into`),!1,`error`),!1;let n=e.getAll(`statesToMerge`).map(Number).filter(e=>e!==t);return n.length?(Qe(n,t,()=>E.close(`mergeStates`)),!1):(D(r(`Please select several states to merge`),!1,`error`),!1)}},{label:r(`Cancel`)}]}),b(`mergeStatesForm`).querySelectorAll(`div[data-id]`).forEach(e=>{e.addEventListener(`mouseenter`,t),e.addEventListener(`mouseleave`,q)}),F(`mergeStates`,({cellId:e})=>pack.cells.state[e]);function t(e){if(!_.isOn(`states`))return;let t=Number(e.currentTarget.dataset.id);if(!t)return;let n=S(`#regions`).select(`#state${t}`).attr(`d`);n&&(q(),C(n))}}function Qe(e,t,n){let a=pack.states[t],o=`${$(a.i)}${a.name}`;E.confirm({title:r(`Merge states`),message:`
      <p>${r(`The following states will be removed`)}: ${e.map(e=>`${$(e)}${pack.states[e].name}`).join(`, `)}.</p>
      <p>${r(`Removed states data (burgs, provinces, regiments) will be assigned to {{- ruler}}.`,{ruler:o})}</p>
      <label style="display: flex; align-items: center"><input id="mergeStatesAsProvinces" class="checkbox native" type="checkbox"> ${r(`Keep each removed state as a province of {{- ruler}}, replacing its own provinces`,{ruler:o})}</label>
      <p>${i(r(`Are you sure you want to merge states?`),r(`This action cannot be reverted`))}</p>`,confirm:r(`Merge`),onConfirm:()=>{et(e,t,b(`mergeStatesAsProvinces`).checked),n?.()}})}var $e=be({buttonId:`statesAnnex`,bodySectionId:`statesBodySection`,tips:{start:i(r(`Click the state that annexes, then the states it absorbs`),r(`Hold Shift to keep annexing`)),pickLand:r(`Click on a land cell to pick a state`),nothingHere:r(`There is no state here`),annexing:e=>i(r(`Annexing into {{state}}`,{state:e}),r(`Click the states to annex`),r(`Hold Shift to keep annexing`)),isParent:e=>r(`{{state}} is the annexing state`,{state:e})},ownerOf:e=>pack.cells.state[e],colorOf:e=>pack.states[e].color??`#999999`,nameOf:e=>pack.states[e].name,commit:(e,t)=>Qe(t,e)});function et(e,t,n=!1){for(let t of e)f(`state`,t);k.merge(t,e,n),p(),S(`#debug`).selectAll(`.highlight`).remove(),_.draw(`states`,`borders`,`burgIcons`,`labels`,`provinces`,`military`,`emblems`),n&&_.show(`provinces`),U()}function tt(){let{scale:e,urbanization:t}=options.map.units.population,n=B.map(e=>e===`Area`?`Area ${M(`2`)}`:e),r=V.view().all.map(n=>{let r=Math.round((n.rural||0)*e),i=Math.round((n.urban||0)*e*t.rate),a=(n.neighbors||[]).filter(e=>e&&!pack.states[e]?.removed);return[n.i,n.name,n.i&&n.fullName||``,n.i&&n.formName||``,n.i&&n.color||``,n.i&&pack.burgs[n.capital].name||``,n.i?pack.cultures[n.culture].name:``,n.i?n.type:``,n.i?n.expansionism:``,n.cells||0,n.burgs||0,j(n.area||0),r+i,r,i,n.i?(n.provinces||[]).filter(e=>!pack.provinces[e]?.removed).length:``,n.i?a.map(e=>pack.states[e].name).join(`;`):``,n.i?n.salesTax||0:``,n.i?n.pollTax||0:``,n.i?n.treasury||0:``,n.i?(n.tags||[]).join(`;`):``]});w.download(`States`,n,r)}async function nt(e){let{scale:t,urbanization:n}=options.map.units.population,i=e=>pack.states[e]?.removed?void 0:pack.states[e];await O.CsvUpload.update(e,B,{find:i,units:[`Area`],text:[`State`,`Full Name`,`Form`,`Tags`]},(e,a)=>{let o=i(e),c=o.fullName;if(a.apply(`State`,t=>k.rename(e,t),o.name),e)a.apply(`Form`,t=>k.setForm(e,t),o.formName),a.apply(`Full Name`,t=>k.setFullName(e,t),c),a.apply(`Color`,t=>k.recolor(e,t),o.color),a.apply(`Capital`,t=>s.setCapital(w.byName(pack.burgs,t,t=>t.state===e).i),pack.burgs[o.capital]?.name),a.apply(`Culture`,t=>k.setCulture(e,w.byName(pack.cultures,t).i),pack.cultures[o.culture]?.name),a.apply(`Type`,t=>k.setType(e,t),o.type),a.apply(`Expansionism`,t=>k.setExpansionism(e,+t),o.expansionism),a.apply(`Sales Tax`,t=>k.setTaxes(e,+t,o.pollTax||0),o.salesTax||0),a.apply(`Poll Tax`,t=>k.setTaxes(e,o.salesTax||0,+t),o.pollTax||0),a.apply(`Treasury`,t=>k.setTreasury(e,+t),o.treasury||0),a.assign(`Tags`,t=>k.setTags(e,t),(o.tags??[]).join(`;`));else for(let e of Se)a.apply(e,()=>{throw Error(r(`Neutral lands have no government`))});a.population([Math.round((o.rural||0)*t),Math.round((o.urban||0)*t*n.rate)],(t,n)=>k.setPopulation(e,t,n))})&&(_.draw(`states`,`borders`,`burgIcons`,`labels`,`provinces`,`military`,`emblems`,`population`),U())}function rt(e,t){k.setLocked(e,!pack.states[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}var it={open:H,showChart:X};export{it as StatesEditor};
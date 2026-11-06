import{D as e,E as t,f as n,i as r,r as i}from"./index-DOQT8b0l.js";import{K as a}from"./options-model-DdZ2yl81.js";import{a as o}from"./pack-generator-D44ZN0et.js";import{b as s,v as c}from"./notices-DwMq1C_Q.js";import{l}from"./linear-DctFuBP5.js";import{Mt as u,at as d,c as f,ct as p,it as m,rt as h,s as g,t as _}from"./layers-BuZ6CHWf.js";import{E as v,l as y}from"./file-utils-ChGs_4wd.js";import{o as b}from"./color-utils-CrmZ_4uY.js";import{T as x,a as S,d as ee,i as C,r as w,t as T,z as E}from"./node-utils-B7j8BhBd.js";import{i as te,n as ne}from"./highlight-CsS0UzDS.js";import{t as D}from"./csv-CWKHeBVB.js";import{r as re,t as ie}from"./stratify-CGdiYggi.js";import{n as O,t as k}from"./constant-CUk6ox2a.js";import{n as A,t as j}from"./dialog-3wqBPvBH.js";import{o as M,t as ae}from"./tooltips-Nm9ri5Ws.js";import{t as N}from"./controllers-J2Zz1cm6.js";import{o as P}from"./production-generator-nLWGDzJc.js";import{a as F,o as oe}from"./units-DeXXwmkZ.js";import{d as se}from"./zoom-B3yUAAZp.js";import{c as ce,s as le,t as I,u as ue,y as de}from"./app-JxGef4iz.js";import{a as fe,i as pe,n as me,r as he}from"./table-BUfHx-52.js";import{t as ge}from"./highlighting-DuGg2bSe.js";import{t as _e}from"./annex-mode-CDu3PLhd.js";function ve(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}function ye(e,t,n,r,i){for(var a=e.children,o,s=-1,c=a.length,l=e.value&&(r-t)/e.value;++s<c;)o=a[s],o.y0=n,o.y1=i,o.x0=t,o.x1=t+=o.value*l}function be(e,t,n,r,i){for(var a=e.children,o,s=-1,c=a.length,l=e.value&&(i-n)/e.value;++s<c;)o=a[s],o.x0=t,o.x1=r,o.y0=n,o.y1=n+=o.value*l}var xe=(1+Math.sqrt(5))/2;function Se(e,t,n,r,i,a){for(var o=[],s=t.children,c,l,u=0,d=0,f=s.length,p,m,h=t.value,g,_,v,y,b,x,S;u<f;){p=i-n,m=a-r;do g=s[d++].value;while(!g&&d<f);for(_=v=g,x=Math.max(m/p,p/m)/(h*e),S=g*g*x,b=Math.max(v/S,S/_);d<f;++d){if(g+=l=s[d].value,l<_&&(_=l),l>v&&(v=l),S=g*g*x,y=Math.max(v/S,S/_),y>b){g-=l;break}b=y}o.push(c={value:g,dice:p<m,children:s.slice(u,d)}),c.dice?ye(c,n,r,i,h?r+=m*g/h:a):be(c,n,r,h?n+=p*g/h:i,a),h-=g,u=d}return o}var Ce=(function e(t){function n(e,n,r,i,a){Se(t,e,n,r,i,a)}return n.ratio=function(t){return e((t=+t)>1?t:1)},n})(xe);function we(){var e=Ce,t=!1,n=1,r=1,i=[0],a=k,o=k,s=k,c=k,l=k;function u(e){return e.x0=e.y0=0,e.x1=n,e.y1=r,e.eachBefore(d),i=[0],t&&e.eachBefore(ve),e}function d(t){var n=i[t.depth],r=t.x0+n,u=t.y0+n,d=t.x1-n,f=t.y1-n;d<r&&(r=d=(r+d)/2),f<u&&(u=f=(u+f)/2),t.x0=r,t.y0=u,t.x1=d,t.y1=f,t.children&&(n=i[t.depth+1]=a(t)/2,r+=l(t)-n,u+=o(t)-n,d-=s(t)-n,f-=c(t)-n,d<r&&(r=d=(r+d)/2),f<u&&(u=f=(u+f)/2),e(t,r,u,d,f))}return u.round=function(e){return arguments.length?(t=!!e,u):t},u.size=function(e){return arguments.length?(n=+e[0],r=+e[1],u):[n,r]},u.tile=function(t){return arguments.length?(e=re(t),u):e},u.padding=function(e){return arguments.length?u.paddingInner(e).paddingOuter(e):u.paddingInner()},u.paddingInner=function(e){return arguments.length?(a=typeof e==`function`?e:O(+e),u):a},u.paddingOuter=function(e){return arguments.length?u.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):u.paddingTop()},u.paddingTop=function(e){return arguments.length?(o=typeof e==`function`?e:O(+e),u):o},u.paddingRight=function(e){return arguments.length?(s=typeof e==`function`?e:O(+e),u):s},u.paddingBottom=function(e){return arguments.length?(c=typeof e==`function`?e:O(+e),u):c},u.paddingLeft=function(e){return arguments.length?(l=typeof e==`function`?e:O(+e),u):l},u}var L=`provincesEditor`,R=[`Id`,`Province`,`Full Name`,`Form`,`State`,`Color`,`Capital`,`Area`,`Total Population`,`Rural Population`,`Urban Population`,`Burgs`,`Tags`],z={my:`right top`,at:`right-10 top+10`,of:`svg`},B,V=e=>F(e.area),H=e=>t(e.rural*options.map.units.population.scale+e.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),U=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:r(`Province`),width:`7em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`emblem`,width:`1.4em`},{key:`form`,label:r(`Form`),width:`7em`,mobileHidden:!0,sortBy:e=>e.formName||``,sortType:`alpha`},{key:`capital`,label:r(`Capital`),width:`7em`,sortBy:e=>e.burg&&pack.burgs[e.burg]?.name||``,sortType:`alpha`},{key:`state`,label:r(`State`),width:`7em`,permanent:!0,sortBy:e=>pack.states[e.state]?.name||``,sortType:`alpha`},{key:`burgs`,label:r(`Burgs`),width:`5em`,mobileHidden:!0,sortBy:e=>e.burgs?.length||0},{key:`area`,label:r(`Area`),width:`7em`,mobileHidden:!0,defaultSort:`desc`,sortBy:V},{key:`population`,label:r(`Population`),width:`6em`,sortBy:H},{key:`tags`,label:r(`Tags`),width:`10em`,hidden:!0,sortBy:e=>a.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`independence`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`focus`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],W=he({getData:J,onUpdate:Oe});function G(){options.app.mode||(B=A.get(L,`filters`,()=>({stateId:1,search:``})),j.closeAll(`#provincesEditor, .stable`),_.show(`provinces`,`borders`),_.hide(`states`,`cultures`),Ee(),K(),j.open(`provincesEditor`,{title:r(`Provinces Editor`),width:`fit-content`,onClose:it,position:z}))}function Te(){B.search=w(`provincesSearch`).value,A.set(L,`filters`,B),W.reset()}function Ee(){j.destroy(`provincesEditor`);let e=`<div id="provincesEditor" class="dialog stable editorDialog">
      <div id="provincesBodySection" class="table" data-type="absolute">
        ${pe({dialogId:L,columns:U})}
      </div>
      <div id="provincesFilters" data-tip="${r(`Apply a filter`)}" class="editorFilters">
        <label for="provincesSearch" data-tip="${r(`Filter by name, form, capital, state, or tag`)}">
          ${r(`Search`)}: <input id="provincesSearch" type="search" />
        </label>
      </div>
      <div id="provincesFooter" class="totalLine">
        <div data-tip="${r(`Provinces displayed`)}" style="margin-left: 4px">
          ${r(`Provinces`)}:&nbsp;<span id="provincesFooterNumber">0</span>
        </div>
        <div data-tip="${r(`Number of burgs`)}" style="margin-left: 12px" data-col="burgs">
          ${r(`Burgs`)}:&nbsp;<span id="provincesFooterBurgs">0</span>
        </div>
        <div data-tip="${r(`Average area`)}" style="margin-left: 14px" data-col="area">
          ${r(`Mean area`)}:&nbsp;<span id="provincesFooterArea">0</span>
        </div>
        <div data-tip="${r(`Average population`)}" style="margin-left: 14px" data-col="population">
          ${r(`Mean population`)}:&nbsp;<span id="provincesFooterPopulation">0</span>
        </div>
      </div>
      <div id="provincesBottom" class="editorToolbar">
        <button id="provincesEditorRefresh" data-tip="${r(`Refresh`)}" class="icon-cw"></button>
        <button id="provincesEditStyle" data-tip="${r(`Edit style in Style Editor`)}" class="icon-adjust"></button>
        <button
          id="provincesRecolor"
          data-tip="${r(`Recolor listed provinces based on state color`)}"
          class="icon-paint-roller"
        ></button>
        <button
          id="provincesPercentage"
          data-tip="${r(`Toggle percentage / absolute values views`)}"
          class="icon-percent"
        ></button>
        <button id="provincesChart" data-tip="${r(`Provinces chart`)}" class="icon-chart-area"></button>
        <button
          id="provincesExport"
          data-tip="${r(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="provincesImport" data-tip="${r(`Upload data from a CSV file`)}" class="icon-upload"></button>
        <button id="provincesManually" data-tip="${r(`Manually re-assign provinces`)}" class="icon-brush"></button>
        <button
          id="provincesRelease"
          data-tip="${r(`Release all provinces. It will make all provinces with burgs independent`)}"
          class="icon-flag"
        ></button>
        <button
          id="provincesAdd"
          data-tip="${i(r(`Add`),r(`Hold Shift to add multiple`))}"
          class="icon-plus"
        ></button>
        <button id="provincesMerge" data-tip="${r(`Merge several provinces into one`)}" class="icon-layer-group"></button>
        <button
          id="provincesAnnex"
          data-tip="${i(r(`Annex provinces: click the annexing province, then the provinces of the same state it absorbs`),r(`Hold Shift to keep annexing`))}"
          class="icon-crown"
        ></button>
        <button
          id="provincesRemoveAll"
          data-tip="${i(r(`Remove all provinces`),r(`States will remain as they are`))}"
          class="icon-trash"
        ></button>
        <span>${r(`State`)}: </span>
        <select id="provincesFilterState"></select>
      </div>
    </div>`;w(`dialogs`).insertAdjacentHTML(`beforeend`,e);let t=w(`provincesSearch`);t.value=B.search??``,t.addEventListener(`input`,Te),le(L,W.reset),me({dialogId:L,columns:U,onUpdate:()=>j.update(L,{width:`fit-content`,position:z})}),ge(`provincesEditor`,({cellId:e})=>pack.cells.province[e]),w(`provincesEditorRefresh`).addEventListener(`click`,K),w(`provincesEditStyle`).addEventListener(`click`,()=>void N.StyleEditor.open(`provinces`)),w(`provincesFilterState`).addEventListener(`change`,e=>{B.stateId=+e.target.value,A.set(L,`filters`,B),W.reset()}),w(`provincesPercentage`).addEventListener(`click`,Je),w(`provincesChart`).addEventListener(`click`,Ye),w(`provincesExport`).addEventListener(`click`,nt),w(`provincesImport`).addEventListener(`click`,()=>D.pick(dt)),w(`provincesRemoveAll`).addEventListener(`click`,rt),w(`provincesManually`).addEventListener(`click`,Ze),w(`provincesRelease`).addEventListener(`click`,Xe),w(`provincesAdd`).addEventListener(`click`,$e),w(`provincesMerge`).addEventListener(`click`,at),w(`provincesAnnex`).addEventListener(`click`,$.toggle),w(`provincesRecolor`).addEventListener(`click`,tt),w(`provincesBodySection`).addEventListener(`click`,e=>{if(options.app.mode)return;let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=+r.dataset.id,a=pack.provinces[i].state;t.tagName===`FILL-BOX`?je(t):n.contains(`name`)?ze(i):n.contains(`coaIcon`)?N.EmblemsEditor.open(`province`,`provinceCOA${i}`,pack.provinces[i]):n.contains(`icon-star-empty`)?Me(i):n.contains(`icon-flag-empty`)?Ne(i):n.contains(`icon-dot-circled`)?N.BurgsOverview.open({stateId:a}):n.contains(`culturePopulation`)?Ie(i):n.contains(`icon-target`)?ne(E(`#provs`).select(`#province${i}`).node(),8):n.contains(`icon-pin`)?Le(i,n):n.contains(`icon-book`)?N.NotesEditor.open({type:`province`,id:i}):n.contains(`icon-trash-empty`)?Re(i):(n.contains(`icon-lock`)||n.contains(`icon-lock-open`))&&ut(i,n)}),w(`provincesBodySection`).addEventListener(`change`,e=>{let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=+r.dataset.id;n.contains(`cultureBase`)&&qe(i,r,t.value)})}function K(){q(),De(),W.reset()}function q(){let{cells:e,provinces:t,burgs:n}=pack;t.forEach(e=>{e.i&&!e.removed&&(e.area=e.rural=e.urban=0,e.burgs=[],(e.burg&&!n[e.burg]||n[e.burg]?.removed)&&(e.burg=0))});for(let r of e.i){let i=e.province[r];i&&(t[i].area+=e.area[r],t[i].rural+=e.pop[r],e.burg[r]&&(t[i].urban+=n[e.burg[r]].population??0,t[i].burgs.push(e.burg[r])))}t.forEach(e=>{e.i&&!e.removed&&!e.burg&&e.burgs.length&&(e.burg=e.burgs[0])})}function De(){let e=w(`provincesFilterState`);B.stateId!==-1&&!pack.states.some(e=>e.i===B.stateId&&!e.removed)&&(B.stateId=-1),e.options.length=0,e.options.add(new Option(r(`All`),`-1`,!1,B.stateId===-1)),pack.states.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name>t.name?1:-1).forEach(t=>{e.options.add(new Option(t.name,String(t.i),!1,t.i===B.stateId))}),A.set(L,`filters`,B)}function J(){let e=pack.provinces.filter(e=>e.i&&!e.removed),t=B.stateId===-1?e:e.filter(e=>e.state===B.stateId),n=B?.search?.toLowerCase().trim();return n&&(t=t.filter(e=>{let t=e.burg?pack.burgs[e.burg]?.name:``,r=pack.states[e.state]?.name;return a.matches(n,e.name,e.tags,[e.formName,t,r])})),ce(L,t,U)}function Oe(n){let o=w(`provincesBodySection`),s=` ${oe()}`,c=n.all.reduce((e,t)=>({area:e.area+V(t),population:e.population+H(t),burgs:e.burgs+t.burgs.length}),{area:0,population:0,burgs:0}),l=o.dataset.type===`percentage`,u=n.rows.map(n=>{let o=V(n),u=n.rural*options.map.units.population.scale,d=n.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate,f=H(n),m=i(`${r(`Total population`)}: ${e(f)}`,`${r(`Rural population`)}: ${e(u)}`,`${r(`Urban population`)}: ${e(d)}`),h=pack.states[n.state].name,g=n.burg&&n.burg!==pack.states[n.state].capital,_=E(`#deftemp`).select(`#fog #focusProvince${n.i}`).size();return p.trigger(`provinceCOA${n.i}`,n.coa),`<div class="states" data-id=${n.i}>
      <fill-box data-col="color" fill="${n.color}"></fill-box>
      <input data-col="name" data-tip="${i(r(`Name`),r(`Click to change`))}" class="name pointer" value="${n.name}" readonly />
      <svg data-col="emblem" data-tip="${r(`Edit Emblem`)}" class="coaIcon pointer" viewBox="0 0 200 200"><use href="#provinceCOA${n.i}"></use></svg>
      <input data-col="form" data-tip="${i(r(`Form name`),r(`Click to change`))}" class="name pointer" value="${n.formName}" readonly />
      <div data-col="capital">
        <span data-tip="${i(r(`Province capital`),r(`Click to zoom`))}" class="icon-star-empty pointer ${n.burg?``:`placeholder`}"></span>
        <select data-tip="${i(r(`Province capital`),r(`Click to select from burgs within the state`),r(`No capital means the province is governed from the state capital`))}" class="cultureBase ${n.burgs.length?``:`placeholder`}">${n.burgs.length?Ae(n.burgs,n.burg):``}</select>
      </div>
      <input data-col="state" data-tip="${r(`Province owner`)}" class="provinceOwner" value="${h}" disabled>
      <div data-col="burgs">
        <span data-tip="${r(`Click to overview province burgs`)}" class="icon-dot-circled pointer"></span>
        <span data-tip="${r(`Number of burgs`)}" class="provinceBurgs">${l?`${t(c.burgs?n.burgs.length/c.burgs*100:0)}%`:n.burgs.length}</span>
      </div>
      <div data-col="area">
        <span data-tip="${r(`Province area`)}" class="icon-map-o" style="padding-right: 4px"></span>
        <span data-tip="${r(`Province area`)}" class="biomeArea">${l?`${t(c.area?o/c.area*100:0)}%`:e(o)+s}</span>
      </div>
      <div data-col="population">
        <span data-tip="${m}" class="icon-male"></span>
        <span data-tip="${m}" class="culturePopulation">${l?`${t(c.population?f/c.population*100:0)}%`:e(f)}</span>
      </div>
      <div data-col="tags">
        <input
          data-tip="${r(`Tags (comma-separated)`)}"
          class="provinceTags"
          value="${a.format(n.tags)}"
          placeholder="${r(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
      ${ue(r(`Edit free text notes (legend)`))}
      <span data-col="independence" data-tip="${r(`Declare province independence (turn non-capital province with burgs into a new state)`)}" class="icon-flag-empty ${g?``:`placeholder`}"></span>
      <span data-col="locate" data-tip="${r(`Locate on map`)}" class="icon-target"></span>
      <span data-col="focus" data-tip="${r(`Toggle province focus`)}" class="icon-pin ${_?``:` inactive`}"></span>
      <span data-col="lock" data-tip="${r(`Lock`)}" class="icon-lock${n.lock?``:`-open`}"></span>
      <span data-col="remove" data-tip="${r(`Remove`)}" class="icon-trash-empty"></span>
    </div>`}).join(``);o.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),o.insertAdjacentHTML(`beforeend`,u),w(`provincesFooterNumber`).innerHTML=String(n.all.length),w(`provincesFooterBurgs`).innerHTML=String(c.burgs),w(`provincesFooterArea`).innerHTML=n.all.length?e(c.area/n.all.length)+s:`0${s}`,w(`provincesFooterPopulation`).innerHTML=n.all.length?e(c.population/n.all.length):`0`,w(`provincesFooterArea`).dataset.area=String(c.area),w(`provincesFooterPopulation`).dataset.population=String(c.population),fe(w(`provincesFooter`),n,W.goto),o.querySelectorAll(`div.states`).forEach(e=>{e.addEventListener(`mouseenter`,Y),e.addEventListener(`mouseleave`,X)}),o.querySelectorAll(`input.provinceTags`).forEach(e=>{e.addEventListener(`change`,ke)}),j.update(L,{width:`fit-content`,position:z})}function ke(){let e=this.closest(`.states`),t=Number(e.dataset.id),n=pack.provinces[t];n&&(a.set(n,this.value),this.value=a.format(n.tags),B.search&&W.refresh())}function Ae(e,t){let n=``;return e.forEach(e=>{n+=`<option ${e===t?`selected`:``} value="${e}">${pack.burgs[e].name}</option>`}),n}function Y(e){let t=+e.target.dataset.id,n=w(`provincesBodySection`).querySelector(`div[data-id='${t}']`);if(n&&n.classList.add(`active`),!_.isOn(`provinces`)||options.app.mode)return;let r=ee().duration(2e3).ease(u);E(`#provs`).select(`#province${t}`).raise().transition(r).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`)}function X(e){let t=(e?.target)?.dataset?.id,n=t?+t:null;if(n){let e=w(`provincesBodySection`).querySelector(`div[data-id='${n}']`);e&&e.classList.remove(`active`)}!_.isOn(`provinces`)||!n||E(`#provs`).select(`#province${n}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),E(`#debug`).selectAll(`.highlight`).remove()}function je(e){let t=e.getAttribute(`fill`),n=+e.closest(`.states`).dataset.id;N.ColorPicker.open(t,t=>{e.fill=t,pack.provinces[n].color=t,_.draw(`provinces`)})}function Me(e){let t=pack.provinces[e].burg,{x:n,y:r}=pack.burgs[t];se(n,r,8,2e3)}function Ne(e){j.confirm({title:r(`Declare independence`),message:`${r(`Are you sure you want to declare province independence?`)}<br>${r(`It will turn province into a new state`)}`,confirm:r(`Declare`),onConfirm:()=>{let t=Pe(e);if(!t)return;let[n,r]=t;Fe([n],[r])}})}function Pe(e){let t=pack.provinces[e].state;try{let n=P.declareIndependence(e);return d(`province`,e),[t,n]}catch(e){M(n(e),!1,`error`)}}function Fe(e,t){let n=s([...e,...t]);_.hide(`provinces`),_.show(`states`,`borders`),_.draw(`burgIcons`,`labels`),m(n.map(e=>[`state`,e])),f(),j.closeAll(),N.StatesEditor.open()}function Ie(e){let i=pack.provinces[e];if(!pack.cells.i.filter(t=>pack.cells.province[t]===e).length){M(r(`No cells, cannot change population`),!1,`error`);return}let a=t(i.rural*options.map.units.population.scale),o=t(i.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString();j.message({message:` ${r(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" /> ${r(`Urban`)}:
    <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em" ${i.burgs.length?``:`disabled`} />
    <p>${r(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span> (<span id="totalPopPerc">100</span>%)</p>`,title:r(`Change province population`),width:`24em`,buttons:[{label:r(`Apply`),onClick:()=>{f()}},{label:r(`Cancel`)}]});let l=w(`ruralPop`),u=w(`urbanPop`),d=()=>{let e=l.valueAsNumber+u.valueAsNumber;Number.isNaN(e)||(w(`totalPop`).innerHTML=c(e),w(`totalPopPerc`).innerHTML=String(t(e/s*100)))};l.oninput=()=>d(),u.oninput=()=>d();function f(){try{P.setPopulation(e,+l.value||0,+u.value||0)}catch(e){M(n(e),!1,`error`);return}_.draw(`population`),K()}}function Le(e,t){let n=E(`#provs`).select(`#province${e}`).attr(`d`),r=`focusProvince${e}`;t.contains(`inactive`)?g(r,n):f(r),t.toggle(`inactive`)}function Re(e){j.confirm({title:r(`Remove`),message:`${r(`Are you sure you want to remove the province?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{P.remove(e),f(`focusProvince${e}`),d(`province`,e);let t=E(`#provs`).select(`#provincesBody`);t.select(`#province${e}`).remove(),t.select(`#province-gap${e}`).remove(),_.draw(`borders`),_.draw(`labels`),K()}})}function ze(e){Be();let t=pack.provinces[e];w(`provinceNameEditor`).dataset.province=String(e),w(`provinceNameEditorShort`).value=t.name,T(w(`provinceNameEditorSelectForm`),t.formName),w(`provinceNameEditorFull`).value=t.fullName;let n=pack.cells.culture[t.center];w(`provinceCultureDisplay`).textContent=pack.cultures[n].name,j.open(`provinceNameEditor`,{title:r(`Change province name`),buttons:[{label:r(`Apply`),onClick:()=>{Ke(t),j.close(`provinceNameEditor`)}},{label:r(`Cancel`),onClick:()=>{j.close(`provinceNameEditor`)}}],position:{my:`center`,at:`center`,of:`svg`},onClose:Ve})}function Be(){j.destroy(`provinceNameEditor`);let e=`<div id="provinceNameEditor" class="dialog" data-province="0">
      <div>
        <div data-tip="${r(`Short name`)}" class="label">${r(`Short name`)}:</div>
        <input
          id="provinceNameEditorShort"
          data-tip="${r(`Type to change the short name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="provinceNameEditorShortSpeak" data-tip="${i(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="provinceNameEditorShortCulture"
          data-tip="${r(`Generate culture-specific name`)}"
          class="icon-book pointer"
        ></span>
        <span id="provinceNameEditorShortRandom" data-tip="${r(`Generate random name`)}" class="icon-globe pointer"></span>
      </div>
      <div data-tip="${r(`Select form name`)}">
        <div data-tip="${r(`Form name`)}" class="label">${r(`Form name`)}:</div>
        <select id="provinceNameEditorSelectForm" style="display: inline-block; width: 11em; height: 1.645em">
          <option value="">${r(`blank`)}</option>
          <option value="Area">${r(`Area`)}</option>
          <option value="Autonomy">${r(`Autonomy`)}</option>
          <option value="Barony">${r(`Barony`)}</option>
          <option value="Canton">${r(`Canton`)}</option>
          <option value="Captaincy">${r(`Captaincy`)}</option>
          <option value="Chiefdom">${r(`Chiefdom`)}</option>
          <option value="Clan">${r(`Clan`)}</option>
          <option value="Colony">${r(`Colony`)}</option>
          <option value="Council">${r(`Council`)}</option>
          <option value="County">${r(`County`)}</option>
          <option value="Deanery">${r(`Deanery`)}</option>
          <option value="Department">${r(`Department`)}</option>
          <option value="Dependency">${r(`Dependency`)}</option>
          <option value="Diaconate">${r(`Diaconate`)}</option>
          <option value="District">${r(`District`)}</option>
          <option value="Earldom">${r(`Earldom`)}</option>
          <option value="Governorate">${r(`Governorate`)}</option>
          <option value="Island">${r(`Island`)}</option>
          <option value="Islands">${r(`Islands`)}</option>
          <option value="Land">${r(`Land`)}</option>
          <option value="Landgrave">${r(`Landgrave`)}</option>
          <option value="Mandate">${r(`Mandate`)}</option>
          <option value="Margrave">${r(`Margrave`)}</option>
          <option value="Municipality">${r(`Municipality`)}</option>
          <option value="Occupation zone">${r(`Occupation zone`)}</option>
          <option value="Parish">${r(`Parish`)}</option>
          <option value="Prefecture">${r(`Prefecture`)}</option>
          <option value="Province">${r(`Province`)}</option>
          <option value="Region">${r(`Region`)}</option>
          <option value="Republic">${r(`Republic`)}</option>
          <option value="Reservation">${r(`Reservation`)}</option>
          <option value="Seneschalty">${r(`Seneschalty`)}</option>
          <option value="Shire">${r(`Shire`)}</option>
          <option value="State">${r(`State`)}</option>
          <option value="Territory">${r(`Territory`)}</option>
          <option value="Tribe">${r(`Tribe`)}</option>
        </select>
        <input
          id="provinceNameEditorCustomForm"
          placeholder="${r(`Enter custom form name`)}"
          data-tip="${r(`Create custom province form name`)}"
          style="display: none; width: 11em"
        />
        <span
          id="provinceNameEditorAddForm"
          data-tip="${r(`Click to add custom province form name to the list`)}"
          class="icon-plus pointer"
        ></span>
      </div>
      <div>
        <div data-tip="${r(`Full name`)}" class="label">${r(`Full name`)}:</div>
        <input
          id="provinceNameEditorFull"
          data-tip="${r(`Type to change the full name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="provinceNameEditorFullSpeak" data-tip="${i(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="provinceNameEditorFullRegenerate"
          data-tip="${r(`Click to re-generate full name`)}"
          class="icon-arrows-cw pointer"
        ></span>
      </div>
      <div
        id="provinceCultureName"
        data-tip="${r(`Dominant culture in the province. This defines culture-based naming. Can be changed via the Cultures Editor`)}"
        style="margin-top: 0.2em"
      >
        ${r(`Dominant culture`)}:&nbsp;<span id="provinceCultureDisplay"></span>
      </div>
    </div>`;w(`dialogs`).insertAdjacentHTML(`beforeend`,e),w(`provinceNameEditorShortCulture`).addEventListener(`click`,He),w(`provinceNameEditorShortRandom`).addEventListener(`click`,Ue),w(`provinceNameEditorShortSpeak`).addEventListener(`click`,()=>I(w(`provinceNameEditorShort`).value)),w(`provinceNameEditorAddForm`).addEventListener(`click`,We),w(`provinceNameEditorFullRegenerate`).addEventListener(`click`,Ge),w(`provinceNameEditorFullSpeak`).addEventListener(`click`,()=>I(w(`provinceNameEditorFull`).value))}function Ve(){j.destroy(`provinceNameEditor`)}function He(){let e=+w(`provinceNameEditor`).dataset.province,t=pack.cells.culture[pack.provinces[e].center],n=y.getState(y.getCultureShort(t),t);w(`provinceNameEditorShort`).value=n}function Ue(){let e=v(y.nameBases.length-1),t=y.getState(y.getBase(e),void 0,e);w(`provinceNameEditorShort`).value=t}function We(){let e=w(`provinceNameEditorCustomForm`),t=w(`provinceNameEditorSelectForm`),n=e.value,r=e.style.display===`inline-block`;e.style.display=r?`none`:`inline-block`,t.style.display=r?`inline-block`:`none`,r&&T(t,n)}function Ge(){let e=w(`provinceNameEditorShort`).value,t=w(`provinceNameEditorSelectForm`).value,n=()=>t?!e&&t?`The ${t}`:`${e} ${t}`:e;w(`provinceNameEditorFull`).value=n()}function Ke(e){let t=w(`provinceNameEditorShort`).value.trim(),n=w(`provinceNameEditorSelectForm`).value,r=w(`provinceNameEditorFull`).value.trim(),i=e.fullName;t&&t!==e.name&&P.rename(e.i,t),n!==(e.formName??``)&&P.setForm(e.i,n),r&&r!==i&&P.setFullName(e.i,r),_.draw(`provinces`),_.draw(`labels`),K()}function qe(e,t,n){P.setCapital(e,+n),t.dataset.capital=pack.burgs[+n].name}function Je(){let e=w(`provincesBodySection`);e.dataset.type=e.dataset.type===`absolute`?`percentage`:`absolute`,W.refresh()}function Ye(){q();let n=e=>!e.i||e.removed||e.color?.[0]!==`#`?`#666`:String(x(e.color).darker()),i=pack.states.map(e=>({id:e.i,state:e.i?0:null,color:n(e)})),a=pack.provinces.filter(e=>e.i&&!e.removed).map(e=>({id:e.i+i.length-1,i:e.i,state:e.state,color:e.color,name:e.name,fullName:e.fullName,area:e.area,urban:e.urban,rural:e.rural})),o=[...i,...a],s=ie().id(e=>String(e.id)).parentId(e=>e.state==null?null:String(e.state))(o).sum(e=>e.area??0),c=+w(`uiSize`).value,l=300+300*c,u=90+90*c,d={top:10,right:10,bottom:0,left:10},f=l-d.left-d.right,p=u-d.top-d.bottom,m=we().size([f,p]).padding(2),h=document.createElement(`div`);h.innerHTML=`<select id="provincesTreeType" style="display:block; margin-left:13px; font-size:11px">
    <option value="area" selected>${r(`Area`)}</option>
    <option value="population">${r(`Total population`)}</option>
    <option value="rural">${r(`Rural population`)}</option>
    <option value="urban">${r(`Urban population`)}</option>
  </select><div id='provinceInfo' class='chartInfo'>&#8205;</div>`;let g=E(h).insert(`svg`,`#provinceInfo`).attr(`id`,`provincesTree`).attr(`width`,l).attr(`height`,u).attr(`font-size`,`10px`).append(`g`).attr(`transform`,`translate(10, 0)`);h.querySelector(`#provincesTreeType`).addEventListener(`change`,S);let _=g.selectAll(`g`).data(m(s).leaves()).enter().append(`g`).attr(`data-id`,e=>e.data.i??null).on(`mouseenter`,(e,t)=>v(e,t)).on(`mouseleave`,e=>y(e));function v(n,i){E(n.currentTarget).select(`rect`).classed(`selected`,!0);let a=i.data.fullName,o=pack.states[i.data.state].fullName,s=`${F(i.data.area)} ${oe()}`,c=t(i.data.rural*options.map.units.population.scale),l=t(i.data.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),u=w(`provincesTreeType`).value,d=u===`area`?`${r(`Area`)}: ${s}`:u===`rural`?`${r(`Rural population`)}: ${e(c)}`:u===`urban`?`${r(`Urban population`)}: ${e(l)}`:`${r(`Population`)}: ${e(c+l)}`;w(`provinceInfo`).innerHTML=`${a}. ${o}. ${d}`,Y(n)}function y(e){X(e),C(`provinceInfo`)&&(w(`provinceInfo`).innerHTML=`&#8205;`,E(e.currentTarget).select(`rect`).classed(`selected`,!1))}_.append(`rect`).attr(`stroke`,e=>e.parent.data.color??null).attr(`stroke-width`,1).attr(`fill`,e=>e.data.color??null).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0).attr(`width`,e=>e.x1-e.x0).attr(`height`,e=>e.y1-e.y0),_.append(`text`).attr(`text-rendering`,`optimizeSpeed`).attr(`dx`,`.2em`).attr(`dy`,`1em`).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0);function b(){_.select(`text`).each(function(e){this.innerHTML=e.data.name??``;let t=this.getBBox();t.y+t.height>e.y1+1&&(this.innerHTML=``);for(let n=0;n<15&&t.width>0&&t.x+t.width>e.x1;n++){if(this.innerHTML.length<3){this.innerHTML=``;break}this.innerHTML=`${this.innerHTML.slice(0,-2)}…`,t=this.getBBox()}})}function S(){let e=this.value===`area`?e=>e.area??0:this.value===`rural`?e=>e.rural??0:this.value===`urban`?e=>e.urban??0:e=>(e.rural??0)+(e.urban??0);s.sum(e),_.data(m(s).leaves()),_.select(`rect`).transition().duration(1500).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0).attr(`width`,e=>e.x1-e.x0).attr(`height`,e=>e.y1-e.y0),_.select(`text`).transition().duration(1500).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0),setTimeout(b,2e3)}j.message({message:h,title:r(`Provinces chart`),width:`fit-content`,position:{my:`left bottom`,at:`left+10 bottom-10`,of:`svg`},buttons:[]}),b()}function Xe(){j.confirm({title:r(`Release provinces`),message:`${r(`Are you sure you want to release all provinces?`)}<br>${r(`It will turn all separable provinces into independent states.`)}<br>${r(`Capital province and provinces without any burgs will state as they are`)}`,confirm:r(`Release`),onConfirm:()=>{let e=[],t=[];J().forEach(n=>{if(!n.burg||n.burg===pack.states[n.state].capital||n.burgs.some(e=>pack.burgs[e].capital))return;let r=Pe(n.i);r&&(e.push(r[0]),t.push(r[1]))}),Fe(s(e),t)}})}function Ze(){_.show(`provinces`,`borders`),N.PaintEditor.open({title:r(`Paint Provinces`),parentDialogId:L,onClose:G,items:J().map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`})),getValue:e=>pack.cells.province[e],filterCell:(e,t,n)=>!o(e,pack)||!pack.cells.state[e]||pack.cells.state[e]!==pack.provinces[n].state?!1:!t||e!==pack.provinces[t].center||(M(r(`Province center cannot be assigned to a different region. Please remove the province first`),!1,`error`),!1),dontOverrideControl:!0,onApply:Qe})}function Qe(e){for(let[t,n]of c(e))P.setCells(t,n);_.draw(`borders`,`provinces`),_.draw(`labels`),C(L)&&K()}function $e(){this.classList.contains(`pressed`)?Z():(options.app.mode=`addProvince`,this.classList.add(`pressed`),M(r(`Click on the map to place a new province center`),!0),E(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,et),w(`provincesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function et(e){let[t,r]=S(e,this),i;try{i=P.add(t,r)}catch(e){M(n(e),!1,`error`);return}e.shiftKey===!1&&Z(),h(`province`,i),_.draw(`borders`,`provinces`,`labels`),q(),B.stateId=pack.provinces[i].state,A.set(L,`filters`,B),w(`provincesFilterState`).value=String(B.stateId),W.reset()}function Z(){options.app.mode=null,de(),ae(),w(`provincesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=w(`provincesAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}function tt(){let e=B.stateId;pack.provinces.forEach(t=>{if(!t||t.removed||e!==-1&&t.state!==e)return;let n=pack.states[t.state].color,r=b();t.color=n[0]===`#`?x(l(n,r)(.2)).hex():r}),_.draw(`provinces`),W.refresh()}function nt(){let e=options.map.units.area.unit===`square`?`${options.map.units.distance.unit}2`:options.map.units.area.unit,{scale:t,urbanization:n}=options.map.units.population,r=R.map(t=>t===`Area`?`Area ${e}`:t),i=J().map(e=>[e.i,e.name,e.fullName,e.formName,pack.states[e.state].name,e.color,e.burg?pack.burgs[e.burg].name:``,V(e),H(e),Math.round(e.rural*t),Math.round(e.urban*t*n.rate),e.burgs.length,a.format(e.tags)]);D.download(`Provinces`,r,i)}function rt(){j.confirm({title:r(`Remove all provinces`),message:`${r(`Are you sure you want to remove all provinces?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{pack.provinces.forEach(e=>{e.i&&d(`province`,e.i)}),pack.provinces=[0],pack.cells.province=new Uint16Array(pack.cells.i.length),pack.states.forEach(e=>{e.provinces=[]}),f(),_.draw(`borders`),E(`#provs`).select(`#provincesBody`).remove(),_.hide(`provinces`),_.draw(`labels`),W.reset()}})}function it(){options.app.mode===`addProvince`&&Z(),$.exit(),N.ColorPicker.close();let e=W.view();e.rows=[],e.all=[],j.destroy(`provincesEditor`)}function at(){let e=B.stateId;if(e===-1){j.message({message:r(`Please select a specific state from the filter to merge provinces within that state.`),title:r(`Merge Provinces`)});return}let t=pack.provinces.filter(t=>t.i&&!t.removed&&t.state===e);if(t.length<2){j.message({message:r(`Not enough provinces in the selected state to merge.`),title:r(`Merge Provinces`)});return}let n=t.map(e=>`
    <div data-id="${e.i}" data-tip="${e.fullName||e.name}" style="cursor:default">
      <input type="radio" name="rulingProvince" value="${e.i}" />
      <input id="selectProvince${e.i}" class="checkbox" type="checkbox" name="provincesToMerge" value="${e.i}" />
      <label for="selectProvince${e.i}" class="checkbox-label"><fill-box fill="${e.color}" disabled></fill-box>${Q(e.i)}${e.name}</label>
    </div>
  `).join(``);j.message({id:`mergeProvinces`,message:`
    <form id='mergeProvincesForm' style="overflow: hidden; display: flex; flex-direction: column; gap: 1em;">
      <p style="margin:0">
        ${r(`Check the checkbox next to each province you want to merge. Use the radio button to pick the primary province that will absorb all others. Hover over a row to highlight the province on the map.`)}
      </p>
      <main style='display: grid; grid-template-columns: 1fr 1fr; gap: .3em;'>
        ${n}
      </main>
    </form>
  `,width:600,title:r(`Merge Provinces`),onClose:()=>X(),buttons:[{label:r(`Merge`),onClick:()=>{let e=new FormData(w(`mergeProvincesForm`)),t=Number(e.get(`rulingProvince`));if(!t)return M(r(`Please select a province to merge into`),!1,`error`),!1;let n=e.getAll(`provincesToMerge`).map(Number).filter(e=>e!==t);return n.length?(ot(n,t,()=>j.close(`mergeProvinces`)),!1):(M(r(`Please select several provinces to merge`),!1,`error`),!1)}},{label:r(`Cancel`)}]}),w(`mergeProvincesForm`).querySelectorAll(`div[data-id]`).forEach(e=>{e.addEventListener(`mouseenter`,st),e.addEventListener(`mouseleave`,X)})}var Q=e=>`<svg class="coaIcon" viewBox="0 0 200 200"><use href="#provinceCOA${e}"></use></svg>`;function ot(e,t,n){j.confirm({title:r(`Merge Provinces`),message:`
      <p>${r(`The following provinces will be removed`)}: ${e.map(e=>`${Q(e)}${pack.provinces[e].name}`).join(`, `)}.</p>
      <p>${r(`Removed provinces data (burgs and cells) will be assigned to {{- province}}.`,{province:`${Q(t)}${pack.provinces[t].name}`})}</p>
      <p>${i(r(`Are you sure you want to merge provinces?`),r(`This action cannot be reverted`))}</p>`,confirm:r(`Merge`),onConfirm:()=>{lt(e,t),n?.()}})}var $=_e({buttonId:`provincesAnnex`,bodySectionId:`provincesBodySection`,tips:{start:i(r(`Click the province that annexes, then the provinces it absorbs`),r(`Hold Shift to keep annexing`)),pickLand:r(`Click on a land cell to pick a province`),nothingHere:r(`There is no province here`),annexing:e=>i(r(`Annexing into {{province}}`,{province:e}),r(`Click the provinces to annex`),r(`Hold Shift to keep annexing`)),isParent:e=>r(`{{province}} is the annexing province`,{province:e})},ownerOf:e=>pack.cells.province[e],colorOf:e=>pack.provinces[e].color,nameOf:e=>pack.provinces[e].name,rejectReason:(e,t)=>pack.provinces[t].state===pack.provinces[e].state?void 0:r(`{{province}} belongs to another state. Merge states first, or pick a province of {{state}}`,{province:pack.provinces[t].name,state:pack.states[pack.provinces[e].state].name}),commit:(e,t)=>ot(t,e)});function st(e){if(!_.isOn(`provinces`))return;let t=+e.currentTarget.dataset.id;if(!t)return;let n=E(`#provs`).select(`#province${t}`).attr(`d`);n&&(X(e),te(n))}function ct(e){f(`focusProvince${e}`),d(`province`,e)}function lt(e,t){for(let n of e)n!==t&&ct(n);P.merge(t,e),q(),_.draw(`provinces`,`borders`,`labels`),f(),E(`#debug`).selectAll(`.highlight`).remove(),K()}function ut(e,t){P.setLocked(e,!pack.provinces[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}async function dt(e){let{scale:t,urbanization:n}=options.map.units.population,r=e=>{let t=pack.provinces[e];return e&&t&&!t.removed?t:void 0};await N.CsvUpload.update(e,R,{find:r,units:[`Area`],text:[`Province`,`Full Name`,`Form`,`Tags`]},(e,i)=>{let o=r(e),s=o.fullName;i.apply(`Province`,t=>P.rename(e,t),o.name),i.apply(`Form`,t=>P.setForm(e,t),o.formName),i.apply(`Full Name`,t=>P.setFullName(e,t),s),i.apply(`Color`,t=>P.recolor(e,t),o.color),i.apply(`State`,t=>P.setState(e,D.byName(pack.states,t).i),pack.states[o.state].name);let c=t=>pack.cells.province[t.cell]===e;i.apply(`Capital`,t=>P.setCapital(e,D.byName(pack.burgs,t,c).i),pack.burgs[o.burg]?.name),i.assign(`Tags`,e=>a.set(o,e),a.format(o.tags)),i.population([(o.rural??0)*t,(o.urban??0)*t*n.rate],(t,n)=>P.setPopulation(e,t,n))})&&(_.draw(`states`,`provinces`,`borders`,`burgIcons`,`labels`,`emblems`,`population`),K())}var ft={open:G,showChart:Ye};export{ft as ProvincesEditor};
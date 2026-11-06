import{C as e,E as t,f as n,i as r,r as i}from"./index-DfkEhdNk.js";import{F as a,K as o,V as s,m as c}from"./options-model-baH24lwc.js";import{f as l}from"./notices-CsL9NM9q.js";import{at as u,ct as ee,nt as te,t as d}from"./layers-DJ8BJ3Zy.js";import{E as ne,l as f}from"./file-utils-gMYr_JNq.js";import{a as re,r as p,z as m}from"./node-utils-BD0SusgU.js";import{t as h}from"./dialog-BW-Ar0Nf.js";import{o as g,t as ie}from"./tooltips-BSJdaB-v.js";import{t as _}from"./controllers-DmSw-ZkU.js";import{s as v,t as ae}from"./production-generator-6t0nz-yt.js";import{n as oe,p as se,v as ce}from"./units-S5RZj9IM.js";import{d as le}from"./zoom-U9bkgxPn.js";import{l as ue,t as y,y as b}from"./app-DaOF0_oJ.js";var x={k:1,x:0,y:0};function S({k:t,x:n,y:r},i){return{k:t,x:e(n,i.width*(1-t),0),y:e(r,i.height*(1-t),0)}}function C(t,n,r,i,a=32){let o=e(t.k*r,1,Math.max(1,a)),s=o/t.k;return S({k:o,x:n.x-(n.x-t.x)*s,y:n.y-(n.y-t.y)*s},i)}function de(e,t,n,r){return S({k:e.k,x:e.x+t,y:e.y+n},r)}var w=null,T=null,E={...x},D=32,O=1,k=0,A=!1;function fe(e){options.app.mode||(h.closeAll(`.stable`),d.show(`burgIcons`,`labels`),T=+e,w=m(`#labels`).select(`[data-label-type='burg'][data-id='${e}']`),w.size()||(w=m(`#burgIcons`).select(`[data-id='${e}']`)),pe(),p(`burgEditor`).dataset.entity=`burg:${T}`,M(),h.open(`burgEditor`,{title:r(`Edit Burg`),onClose:ze,position:{my:`left top`,at:`left+10 top+10`,of:`svg`}}),N())}function pe(){h.destroy(`burgEditor`);let e=`<div id="burgEditor" class="dialog" data-burg-id="${j()}">
      <div id="burgBody" style="padding-bottom: 0.3em">
        <div style="display: flex; align-items: center">
          <svg data-tip="${i(r(`Burg emblem`),r(`Click to edit`))}" class="pointer" viewBox="0 0 200 200" width="13em" height="13em">
            <use id="burgEmblem"></use>
          </svg>
          <div style="display: grid; grid-auto-rows: minmax(1.6em, auto)">
            <div id="burgProvinceAndState" style="font-weight: bold; max-width: 16em"></div>
            <div>
              <div class="label">${r(`Name`)}:</div>
              <input
                id="burgName"
                data-tip="${r(`Type to rename`)}"
                autocorrect="off"
                spellcheck="false"
                style="width: 9em"
              />
              <span id="burgNameSpeak" data-tip="${i(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
              <span
                id="burgNameReRandom"
                data-tip="${r(`Generate random name`)}"
                class="icon-globe pointer"
              ></span>
            </div>
            <div data-tip="${r(`Select burg group. Groups defines burg icon, label size and style`)}">
              <div class="label">${r(`Group`)}:</div>
              <select id="burgGroup" style="width: 9em"></select>
              <span id="burgGroupConfigure" data-tip="${r(`Configure burg groups`)}" class="icon-cog pointer"></span>
            </div>
            <div data-tip="${r(`Select burg type. Type slightly affects emblem generation`)}">
              <div class="label">${r(`Type`)}:</div>
              <select id="burgType" style="width: 9em">
                <option value="Generic">${r(`Generic`)}</option>
                <option value="River">${r(`River`)}</option>
                <option value="Lake">${r(`Lake`)}</option>
                <option value="Naval">${r(`Naval`)}</option>
                <option value="Nomadic">${r(`Nomadic`)}</option>
                <option value="Hunting">${r(`Hunting`)}</option>
                <option value="Highland">${r(`Highland`)}</option>
              </select>
            </div>
            <div data-tip="${r(`Select dominant culture`)}">
              <div class="label">${r(`Culture`)}:</div>
              <select id="burgCulture" style="width: 9em"></select>
              <span
                id="burgNameReCulture"
                data-tip="${r(`Generate culture-specific name`)}"
                class="icon-book pointer"
              ></span>
            </div>
            <div data-tip="${r(`Set burg population`)}">
              <div class="label">${r(`Population`)}:</div>
              <input id="burgPopulation" type="number" min="0" step="1" style="width: 9em" />
            </div>
            <div data-tip="${r(`Burg average yearly temperature`)}" style="display: flex; justify-content: space-between">
              <div>
                <div class="label">${r(`Temperature`)}:</div>
                <span id="burgTemperature"></span>
              </div>
              <div style="display: flex; gap: 0.5em">
                <i class="icon-info-circled" id="burgTemperatureLikeIn"></i>
                <i
                  id="burgTemperatureGraph"
                  data-tip="${r(`Show temperature graph for the burg`)}"
                  class="icon-chart-area pointer"
                ></i>
              </div>
            </div>
            <div data-tip="${r(`Burg height above mean sea level`)}">
              <div class="label">${r(`Elevation`)}:</div>
              <span id="burgElevation"></span> ${r(`above sea level`)}
            </div>
            <div>
              <div class="label">${r(`Features`,{context:`burg`})}:</div>
              <span
                id="burgCapital"
                data-tip="${i(r(`Shows whether the burg is a state capital`),r(`Click to toggle`))}"
                data-feature="capital"
                class="burgFeature icon-star"
              ></span>
              <span
                id="burgPort"
                data-tip="${i(r(`Shows whether the burg is a port`),r(`Click to toggle`))}"
                data-feature="port"
                class="burgFeature icon-anchor"
              ></span>
              <span
                id="burgCitadel"
                data-tip="${i(r(`Shows whether the burg has a citadel (castle)`),r(`Click to toggle`))}"
                data-feature="citadel"
                class="burgFeature icon-chess-rook"
                style="font-size: 1.1em"
              ></span>
              <span
                id="burgWalls"
                data-tip="${i(r(`Shows whether the burg is walled`),r(`Click to toggle`))}"
                data-feature="walls"
                class="burgFeature icon-fort-awesome"
              ></span>
              <span
                id="burgPlaza"
                data-tip="${i(r(`Shows whether the burg is a trade center (market center)`),r(`Click to toggle`))}"
                data-feature="plaza"
                class="burgFeature icon-store"
                style="font-size: 1em"
              ></span>
              <span
                id="burgTemple"
                data-tip="${i(r(`Shows whether the burg is a religious center`),r(`Click to toggle`))}"
                data-feature="temple"
                class="burgFeature icon-chess-bishop"
                style="font-size: 1.1em; margin-left: 3px"
              ></span>
              <span
                id="burgShanty"
                data-tip="${i(r(`Shows whether the burg has a shanty town`),r(`Click to toggle`))}"
                data-feature="shanty"
                class="burgFeature icon-campground"
                style="font-size: 1em"
              ></span>
            </div>
            <div data-tip="${r(`Burg average daily production`)}">
              <div class="label">${r(`Production`)}:</div>
              <span id="burgProduction" style="display: inline-flex; flex-wrap: wrap; column-gap: 0.3em; max-width: 110px;"></span>
            </div>
            <div data-tip="${r(`Gross product per population point, daily average`)}">
              <div class="label">${r(`Wealth`)}</div>
              <span id="burgWealth"></span>
            </div>
            <div data-tip="${r(`Set treasury balance. Production won't be changed automatically`)}">
              <div class="label"><label for="burgTreasury">${r(`Treasury`)}:</label></div>
              <input id="burgTreasury" type="number" step="0.01" style="width: 9em" /> 🟡
            </div>
            <div data-tip="${r(`Burg tags (comma-separated)`)}">
              <div class="label"><label for="burgTags">${r(`Tags`)}:</label></div>
              <input
                id="burgTags"
                placeholder="${r(`Tags`)}"
                autocorrect="off"
                spellcheck="false"
                style="width: 9em"
              />
            </div>
          </div>
        </div>
        <div id="burgPreviewSection" data-tip="${r(`Burg map preview: scroll to zoom, drag to pan`)}" style="display: flex; flex-direction: column">
          <div style="display: flex; justify-content: space-between">
            <span>${r(`Burg preview`)}:</span>
            <div style="display: flex; gap: 0.5em">
              <i id="burgPreviewReset" data-tip="${r(`Reset preview zoom`)}" class="icon-ccw pointer"></i>
              <i id="burgLinkOpen" data-tip="${r(`Open burg map in a new tab`)}" class="icon-link-ext pointer"></i>
            </div>
          </div>
          <div
            id="burgPreviewObject"
            style="overflow: hidden; position: relative; touch-action: none; height: 320px; max-width: 60vw; max-height: 60vh"
          ></div>
        </div>
      </div>
      <div id="burgBottom">
        <button id="burgStyleShow" data-tip="${r(`Show`)}" class="icon-brush"></button>
        <div id="burgStyleSection" style="display: none">
          <button id="burgStyleHide" data-tip="${r(`Hide`)}" class="icon-brush"></button>
          <button
            id="burgEditLabelStyle"
            data-tip="${r(`Edit label style for burg group in Style Editor`)}"
            class="icon-font"
          ></button>
          <button
            id="burgEditGroupStyle"
            data-tip="${r(`Edit icon and anchor style for the burg group in Style Editor`)}"
            class="icon-dot-circled"
          ></button>
        </div>
        <button id="burgEditLabel" data-tip="${r(`Edit this burg label`)}" class="icon-font"></button>
        <button id="burgEditEmblem" data-tip="${r(`Edit Emblem`)}" class="icon-shield-alt"></button>
        <button id="burgSetPreviewLink" data-tip="${r(`Set custom burg map URL`)}" class="icon-map-o"></button>
        <button id="burgLocate" data-tip="${r(`Zoom map and center view in the burg`)}" class="icon-target"></button>
        <button
          id="burgProductionOverview"
          data-tip="${r(`Show production overview for this burg`)}"
          class="icon-chart-bar"
        ></button>
        <button
          id="burgRelocate"
          data-tip="${r(`Relocate burg. Click on map to move the burg`)}"
          class="icon-map-pin"
        ></button>
        ${ue(`burglLegend`,r(`Edit free text notes (legend)`))}
        <button id="burgLock" class="icon-lock-open" data-lock-tip></button>
        <button
          id="burgRemove"
          data-tip="${r(`Remove`)}"
          data-shortcut="Delete"
          class="icon-trash fastDelete"
        ></button>
      </div>
    </div>`;p(`dialogs`).insertAdjacentHTML(`beforeend`,e),p(`burgName`).addEventListener(`input`,P),p(`burgNameSpeak`).addEventListener(`click`,()=>y(p(`burgName`).value)),p(`burgNameReRandom`).addEventListener(`click`,F),p(`burgGroup`).addEventListener(`change`,I),p(`burgGroupConfigure`).addEventListener(`click`,Re),p(`burgType`).addEventListener(`change`,L),p(`burgCulture`).addEventListener(`change`,R),p(`burgNameReCulture`).addEventListener(`click`,z),p(`burgPopulation`).addEventListener(`change`,B),p(`burgTreasury`).addEventListener(`change`,me),p(`burgTags`).addEventListener(`change`,he),p(`burgBody`).querySelectorAll(`.burgFeature`).forEach(e=>void e.addEventListener(`click`,ge)),p(`burgLinkOpen`).addEventListener(`click`,je),p(`burgPreviewReset`).addEventListener(`click`,K),p(`burgPreviewObject`).addEventListener(`wheel`,Ee,{passive:!1}),p(`burgPreviewObject`).addEventListener(`dblclick`,De),p(`burgPreviewObject`).addEventListener(`pointerdown`,Oe),p(`burgStyleShow`).addEventListener(`click`,xe),p(`burgStyleHide`).addEventListener(`click`,Se),p(`burgEditLabelStyle`).addEventListener(`click`,Ce),p(`burgEditGroupStyle`).addEventListener(`click`,Te),p(`burgEmblem`).addEventListener(`click`,X),p(`burgSetPreviewLink`).addEventListener(`click`,Me),p(`burgEditEmblem`).addEventListener(`click`,X),p(`burgLocate`).addEventListener(`click`,Ne),p(`burgEditLabel`).addEventListener(`click`,we),p(`burgRelocate`).addEventListener(`click`,Q),p(`burglLegend`).addEventListener(`click`,$),p(`burgLock`).addEventListener(`click`,be),p(`burgRemove`).addEventListener(`click`,Le),p(`burgTemperatureGraph`).addEventListener(`click`,Fe),p(`burgProductionOverview`).addEventListener(`click`,Ie)}function j(){return T??+w.attr(`data-id`)}function M(){let e=p(`burgGroup`);e.options.length=0;for(let{name:t}of options.map.burgs.groups)e.options.add(new Option(t,t))}function N(){let e=j(),n=pack.burgs[e],i=pack.cells.province[n.cell],a=i?`${pack.provinces[i].fullName}, `:``,s=pack.states[n.state].fullName||pack.states[n.state].name;p(`burgProvinceAndState`).innerHTML=a+s,p(`burgName`).value=n.name,p(`burgGroup`).value=n.group,p(`burgType`).value=n.type||`Generic`,p(`burgPopulation`).value=String(t(n.population*options.map.units.population.scale*options.map.units.population.urbanization.rate)),p(`burgWealth`).innerHTML=`🟡 ${t(n.population>0?(n.product||0)/n.population:0,2)}`,p(`burgTreasury`).value=String(t(n.treasury||0,2)),p(`burgTags`).value=o.format(n.tags);let c=p(`burgCulture`);c.options.length=0,pack.cultures.filter(e=>!e.removed).forEach(e=>void c.options.add(new Option(e.name,String(e.i),!1,e.i===n.culture)));let l=grid.cells.temp[pack.cells.g[n.cell]];p(`burgTemperature`).innerHTML=oe(l),p(`burgTemperatureLikeIn`).dataset.tip=r(`Average yearly temperature is like in {{place}}`,{place:ce(l)}),p(`burgElevation`).innerHTML=se(pack.cells.h[n.cell]),p(`burgCapital`).classList.toggle(`inactive`,!n.capital),p(`burgPort`).classList.toggle(`inactive`,!n.port),p(`burgCitadel`).classList.toggle(`inactive`,!n.citadel),p(`burgWalls`).classList.toggle(`inactive`,!n.walls),p(`burgPlaza`).classList.toggle(`inactive`,!n.plaza),p(`burgTemple`).classList.toggle(`inactive`,!n.temple),p(`burgShanty`).classList.toggle(`inactive`,!n.shanty),p(`burgProduction`).innerHTML=Be(ae.getBurgProduction(n)),H();let u=`burgCOA${e}`;ee.trigger(u,n.coa),p(`burgEmblem`).setAttribute(`href`,`#${u}`),Y(n)}function P(){let e=p(`burgName`).value;e.trim()&&(s.rename(j(),e),d.draw(`labels`))}function F(){let e=ne(f.nameBases.length-1);p(`burgName`).value=f.getBase(e),P()}function I(){let e=j(),t=pack.burgs[e];s.changeGroup(t,this.value),d.draw(`burgIcons`,`labels`)}function L(){let e=j();s.setType(e,this.value)}function R(){s.setCulture(j(),+this.value)}function z(){let e=j(),t=pack.burgs[e].culture;p(`burgName`).value=f.getCulture(t),P()}function B(){let e=j(),t=pack.burgs[e],n=p(`burgPopulation`).valueAsNumber;Number.isFinite(n)&&n>=0&&s.setPopulation(e,n),Y(t)}function me(){let e=pack.burgs[j()];try{s.setTreasury(e.i,this.valueAsNumber)}catch{g(r(`Enter a valid treasury amount`),!1,`error`)}this.value=String(t(e.treasury||0,2))}function he(){let e=pack.burgs[j()];if(!e)return;let t=p(`burgTags`);o.set(e,t.value),t.value=o.format(e.tags)}function ge(){let e=j(),t=pack.burgs[e],n=this.dataset.feature,r=Number(this.classList.contains(`inactive`));if(n===`plaza`&&!r){let t=pack.markets?.find(t=>t.centerBurgId===e);if(t){_e(t);return}}n===`port`?ve(e):n===`capital`?ye(e):s.setBuilding(e,n,!!r),this.classList.toggle(`inactive`,!t[n]),Y(t)}function _e(e){h.confirm({title:r(`Remove`),message:`${r(`This burg is the center of the market “{{market}}”. Remove the market?`,{market:v.getName(e)})}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{v.removeMarket(e.i),d.draw(`markets`),N()}})}function ve(e){V(()=>s.setPort(e,!pack.burgs[e].port))&&d.draw(`burgIcons`)}function ye(e){pack.burgs[e].capital?g(r(`To change capital please assign a capital status to another burg of this state`),!1,`error`):V(()=>s.setCapital(e))&&d.draw(`burgIcons`,`labels`)}function V(e){try{return e(),!0}catch(e){return g(n(e),!1,`error`),!1}}function be(){let e=j();s.setLocked(e,!pack.burgs[e].lock),H()}function H(){let e=j();pack.burgs[e].lock?(p(`burgLock`).classList.remove(`icon-lock-open`),p(`burgLock`).classList.add(`icon-lock`)):(p(`burgLock`).classList.remove(`icon-lock`),p(`burgLock`).classList.add(`icon-lock-open`))}function xe(){document.querySelectorAll(`#burgBottom > button`).forEach(e=>{e.style.display=`none`}),p(`burgStyleSection`).style.display=`inline-block`}function Se(){document.querySelectorAll(`#burgBottom > button`).forEach(e=>{e.style.display=`inline-block`}),p(`burgStyleSection`).style.display=`none`}function Ce(){let e=pack.burgs[j()];h.closeAll(`.stable`),_.StyleEditor.open(`labels`,e.label?.group||e.group)}function we(){let e=j();h.close(`burgEditor`),_.LabelsEditor.open(`burg`,e)}function Te(){let e=pack.burgs[j()];h.closeAll(`.stable`),_.StyleEditor.open(`burgIcons`,e.group)}function U(){let e=p(`burgPreviewObject`);return{width:e.clientWidth,height:e.clientHeight}}function W(){let e=p(`burgPreviewObject`),t=e.querySelector(`iframe`);if(!t)return;let{k:n,x:r,y:i}=E;t.style.transformOrigin=`0 0`,t.style.transform=`translate(${r}px, ${i}px) scale(${n/O})`,t.style.left=`0`,t.style.top=`0`,e.style.cursor=n>1?`grab`:`default`,clearTimeout(k),A||(k=window.setTimeout(G,200))}function G(){if(A)return;let e=p(`burgPreviewObject`).querySelector(`iframe`);if(!e)return;let{k:t,x:n,y:r}=E;O=t,e.style.width=`${t*100}%`,e.style.height=`${t*100}%`,e.style.transform=`none`,e.style.left=`${n}px`,e.style.top=`${r}px`}function K(){E={...x},clearTimeout(k),A?W():G(),p(`burgPreviewObject`).style.cursor=`default`}function q(e){let t=p(`burgPreviewObject`).getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}function Ee(e){e.preventDefault();let t=Math.exp(-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002));E=C(E,q(e),t,U(),D),W()}function De(e){E=C(E,q(e),2,U(),D),W()}function Oe(e){if(E.k<=1)return;e.preventDefault();let t=p(`burgPreviewObject`);t.setPointerCapture(e.pointerId),t.style.cursor=`grabbing`;let n={x:e.clientX,y:e.clientY},r=e=>{let t=e;E=de(E,t.clientX-n.x,t.clientY-n.y,U()),n={x:t.clientX,y:t.clientY},W()},i=()=>{t.removeEventListener(`pointermove`,r),t.removeEventListener(`pointerup`,i),t.removeEventListener(`pointercancel`,i),t.style.cursor=`grab`};t.addEventListener(`pointermove`,r),t.addEventListener(`pointerup`,i),t.addEventListener(`pointercancel`,i)}var J=0;function ke(){if(!J){let e=document.createElement(`canvas`).getContext(`webgl`);J=e?e.getParameter(e.MAX_TEXTURE_SIZE):4096}return J}function Ae(){let{width:e,height:t}=U(),n=Math.max(e,t,1);return ke()/2/(devicePixelRatio*n)}function Y(e){let t=s.getPreview(e).preview;if(!t){p(`burgPreviewSection`).style.display=`none`;return}p(`burgPreviewSection`).style.display=`block`;let n=p(`burgPreviewObject`);n.innerHTML=``;let r=document.createElement(`iframe`);if(r.style.position=`absolute`,r.style.border=`none`,r.style.pointerEvents=`none`,r.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),r.src=t,n.insertBefore(r,null),A=t.includes(`watabou.github.io`),A){let e=Math.max(1,Math.min(4,Ae()));O=e,r.style.width=`${e*100}%`,r.style.height=`${e*100}%`,D=Math.min(32,e*2.5)}else O=1,D=32;K()}function je(){let e=j(),t=pack.burgs[e],n=s.getPreview(t).link;n&&l(n)}function Me(){let e=j(),t=pack.burgs[e];h.prompt(r(`Provide custom URL to the burg map. It can be a link to a generator or just an image. Leave empty to use the default map preview`),{default:s.getPreview(t).link||``,required:!1},n=>{try{s.setLink(e,String(n??``))}catch(e){g(e.message,!1,`error`)}Y(t)})}function X(){let e=j(),t=pack.burgs[e];_.EmblemsEditor.open(`burg`,`burgCOA${e}`,t)}function Ne(){let e=j(),t=pack.burgs[e];le(t.x,t.y,8,2e3)}var Z=!1;function Q(){p(`burgRelocate`).classList.toggle(`pressed`),p(`burgRelocate`).classList.contains(`pressed`)?(m(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Pe),g(r(`Click on map to relocate burg. Hold Shift for continuous move`),!0),d.isOn(`cells`)||(d.show(`cells`),Z=!0)):(ie(),b(),Z&&=(d.hide(`cells`),!1))}function Pe(e){let[t,n]=re(e,this);V(()=>s.move(j(),t,n))&&(d.draw(`burgIcons`,`labels`),e.shiftKey===!1&&Q())}function $(){_.NotesEditor.open({type:`burg`,id:j()})}function Fe(){let e=j();_.TemperatureGraph.open(e)}function Ie(){let e=j();_.ProductionOverview.open(e)}function Le(){let e=j();pack.burgs[e].capital?h.message({message:`${i(r(`You cannot remove the capital`),r(`You must change the state capital first`))}`,title:r(`Remove`)}):pack.markets?.some(t=>t.centerBurgId===e)?h.message({message:`${r(`You cannot remove a market center burg. Please remove the market first`)}`,title:r(`Remove`)}):h.confirm({title:r(`Remove`),message:`${r(`Are you sure you want to remove the burg?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{s.remove(e),u(`burg`,e),d.draw(`burgIcons`,`labels`),h.close(`burgEditor`)}})}function Re(){_.BurgGroupEditor.open()}function ze(){clearTimeout(k),p(`burgRelocate`).classList.contains(`pressed`)&&Q(),w=null,p(`burgPreviewObject`).replaceChildren(),h.destroy(`burgEditor`)}function Be(e){if(!e)return``;let t=``,n=Object.entries(e).sort(([,e],[,t])=>t-e);for(let[e,i]of n){let n=a.get(+e);if(!n)continue;let{name:o,unit:s,icon:l}=n,u=i===1?s:`${s}s`;t+=`<span data-tip="${r(`{{good}}: {{amount}} {{unit}} per day`,{good:o,amount:i,unit:u})}">
      <svg class="resIcon" width="1em" height="1em"><use href="${c.href(l)}"${te()}></use></svg>
      <span style="margin: 0 0.2em 0 -0.2em">${i}</span>
    </span>`}return t}var Ve={open:fe};export{Ve as BurgEditor};
import{E as e,i as t,r as n}from"./index-J388_yXx.js";import{K as r,ft as i}from"./options-model-Cj3O8K4p.js";import{t as a}from"./pack-generator-BfWP9wix.js";import{l as o}from"./notices-DWyx0Rz8.js";import{D as s,O as c,t as l}from"./layers-D3_jdNGw.js";import{E as u,l as d}from"./file-utils-CmE_irX5.js";import{a as f,i as p,r as m,z as h}from"./node-utils-BA3zRxIe.js";import{t as g}from"./drag-DVHtGrYF.js";import{t as _}from"./dialog-BYT3Byo1.js";import{o as v,t as y}from"./tooltips-D4kIN3ad.js";import{t as b}from"./controllers-COq_bdk_.js";import{l as x,t as S}from"./app-8AGFuk3c.js";var C,w=!1;function T(e){if(options.app.mode||p(`riverEditor`)&&e===C.attr(`id`))return;_.closeAll(`.stable`),l.show(`rivers`),w=!l.isOn(`cells`),l.show(`cells`),c(Number(e.slice(5))),C=h(`#${e}`).on(`click`,z),v(n(t(`Drag control points to change the river course`),t(`Click on point to remove it`),t(`Click on river to add additional control point`),t(`For major changes please create a new river instead`)),!0),h(`#debug`).append(`g`).attr(`id`,`controlCells`),h(`#debug`).append(`g`).attr(`id`,`controlPoints`),E(),m(`riverEditor`).dataset.entity=`river:${Number(e.slice(5))}`,A();let{cells:r,points:a}=k();F(i.getRiverPoints(r,a??null)),I(r),_.open(`riverEditor`,{title:t(`Edit River`),position:{my:`left top`,at:`left+10 top+10`,of:`#map`},onClose:Q})}function E(){_.destroy(`riverEditor`);let e=`<div id="riverEditor" class="dialog">
    <div id="riverBody" style="padding-bottom: 0.3em">
      <div>
        <div class="label" style="width: 4.8em">${t(`Name`)}:</div>
        <span id="riverNameCulture" data-tip="${t(`Generate culture-specific name`)}" class="icon-book pointer"></span>
        <span id="riverNameRandom" data-tip="${t(`Generate random name`)}" class="icon-globe pointer"></span>
        <input id="riverName" data-tip="${t(`Type to rename`)}" autocorrect="off" spellcheck="false" />
        <span id="riverNameSpeak" data-tip="${n(t(`Speak the name`),t(`You can change voice and language in options`))}" class="speaker">🔊</span>
      </div>
      <div data-tip="${t(`Type to change river type (e.g. fork, creek, river, brook, stream)`)}">
        <div class="label">${t(`Type`)}:</div>
        <input id="riverType" autocorrect="off" spellcheck="false" />
      </div>
      <div data-tip="${t(`River tags (comma-separated)`)}">
        <div class="label">${t(`Tags`)}:</div>
        <input
          id="riverTags"
          placeholder="${t(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
      <div data-tip="${t(`Select parent river`)}">
        <div class="label">${t(`Mainstem`)}:</div>
        <select id="riverMainstem"></select>
      </div>
      <div data-tip="${t(`River drainage basin (watershed)`)}">
        <div class="label">${t(`Basin`)}:</div>
        <input id="riverBasin" disabled />
      </div>
      <div data-tip="${t(`River discharge (flux power)`)}">
        <div class="label">${t(`Discharge`)}:</div>
        <input id="riverDischarge" disabled />
      </div>
      <div data-tip="${t(`River length in selected units`)}">
        <div class="label">${t(`Length`)}:</div>
        <input id="riverLength" disabled />
      </div>
      <div data-tip="${t(`River mouth width in selected units`)}">
        <div class="label">${t(`Mouth width`)}:</div>
        <input id="riverWidth" disabled />
      </div>
      <div data-tip="${t(`River source additional width. Default value is 0`)}">
        <div class="label">${t(`Source width`)}:</div>
        <input id="riverSourceWidth" type="number" min="0" max="3" step=".01" />
      </div>
      <div data-tip="${t(`River width multiplier. Default value is 1`)}">
        <div class="label">${t(`Width modifier`)}:</div>
        <input id="riverWidthFactor" type="number" min=".1" max="4" step=".1" />
      </div>
    </div>
    <div id="riverBottom">
      <button id="riverCreateSelectingCells" data-tip="${t(`Create a new river selecting river cells`)}" class="icon-map-pin"></button>
      <button id="riverEditStyle" data-tip="${t(`Edit style in Style Editor`)}" class="icon-brush"></button>
      <button id="riverElevationProfile" data-tip="${t(`Elevation profile`)}" class="icon-chart-area"></button>
      ${x(`riverLegend`,t(`Edit free text notes (legend)`))}
      <button id="riverLock" class="icon-lock-open" data-lock-tip></button>
      <button id="riverRemove" data-tip="${t(`Remove`)}" data-shortcut="Delete" class="icon-trash fastDelete"></button>
    </div>
  </div>`;m(`dialogs`).insertAdjacentHTML(`beforeend`,e),m(`riverCreateSelectingCells`).addEventListener(`click`,D),m(`riverEditStyle`).addEventListener(`click`,O),m(`riverElevationProfile`).addEventListener(`click`,Y),m(`riverLegend`).addEventListener(`click`,X),m(`riverLock`).addEventListener(`click`,j),m(`riverRemove`).addEventListener(`click`,Z),m(`riverName`).addEventListener(`input`,V),m(`riverNameSpeak`).addEventListener(`click`,()=>S(m(`riverName`).value)),m(`riverType`).addEventListener(`input`,H),m(`riverTags`).addEventListener(`change`,U),m(`riverNameCulture`).addEventListener(`click`,W),m(`riverNameRandom`).addEventListener(`click`,G),m(`riverMainstem`).addEventListener(`change`,K),m(`riverSourceWidth`).addEventListener(`input`,q),m(`riverWidthFactor`).addEventListener(`input`,J)}function D(){b.RiverCreator.open()}function O(){b.StyleEditor.open(`rivers`)}function k(){let e=+C.attr(`id`).slice(5);return pack.rivers.find(t=>t.i===e)}function A(){let e=k();m(`riverName`).value=e.name,m(`riverType`).value=e.type,m(`riverTags`).value=r.format(e.tags),M(e);let t=m(`riverMainstem`);t.options.length=0;let n=e.parent||e.i;pack.rivers.slice().sort((e,t)=>e.name>t.name?1:-1).forEach(e=>{let r=new Option(e.name,String(e.i),!1,e.i===n);t.options.add(r)}),m(`riverBasin`).value=pack.rivers.find(t=>t.i===e.basin).name,m(`riverDischarge`).value=`${e.discharge} m³/s`,m(`riverSourceWidth`).value=String(e.sourceWidth),m(`riverWidthFactor`).value=String(e.widthFactor),N(e),i.updateWidth(e),P(e)}function j(){let e=k();i.setLocked(e.i,!e.lock),M(e)}function M(e){m(`riverLock`).className=e.lock?`icon-lock`:`icon-lock-open`}function N(t){t.length=e(C.node().getTotalLength()/2,2);let n=`${e(t.length*options.map.units.distance.scale)} ${options.map.units.distance.unit}`;m(`riverLength`).value=n}function P(t){let n=`${e(t.width*options.map.units.distance.scale,3)} ${options.map.units.distance.unit}`;m(`riverWidth`).value=n}function F(e){h(`#controlPoints`).selectAll(`circle`).data(e).join(`circle`).attr(`cx`,e=>e[0]).attr(`cy`,e=>e[1]).attr(`r`,.6).call(g().on(`start`,L)).on(`click`,B)}function I(e){let t=[...new Set(e)].filter(e=>pack.cells.i[e]);h(`#controlCells`).selectAll(`polygon`).data(t).join(`polygon`).attr(`points`,e=>String(a.getPolygon(e)))}function L(t){let{r:n,fl:r}=pack.cells,i=k(),{x:o,y:s}=t,c=a.findCell(o,s),l=null;t.on(`drag`,function(t){let{x:n,y:r}=t,o=a.findCell(n,r);l=c===o?null:o,this.setAttribute(`cx`,String(n)),this.setAttribute(`cy`,String(r)),h(this).datum([e(n,1),e(r,1)]),R(),I(i.cells)}),t.on(`end`,()=>{if(l&&!n[l]){n[c]=0,n[l]=i.i;let e=r[c];r[c]=r[l],r[l]=e,R()}})}function R(){let e=k();e.points=h(`#controlPoints`).selectAll(`*`).data(),e.cells=e.points.map(([e,t])=>a.findCell(e,t)),s(e),N(e),l.draw(`labels`),p(`elevationProfile`)&&Y()}function z(t){let[n,r]=f(t,this),i=[e(n,1),e(r,1)],a=k();a.points||=h(`#controlPoints`).selectAll(`*`).data();let s=o(a.points,i,2);a.points.splice(s,0,i),F(a.points),R()}function B(){this.remove(),R();let{cells:e}=k();I(e)}function V(){this.value.trim()&&(i.rename(k().i,this.value),l.draw(`labels`))}function H(){this.value.trim()&&(i.setType(k().i,this.value),l.draw(`labels`))}function U(){let e=k();e&&(r.set(e,this.value),this.value=r.format(e.tags))}function W(){let e=k(),t=i.getName(e.mouth);m(`riverName`).value=t,i.rename(e.i,t),l.draw(`labels`)}function G(){let e=d.getBase(u(d.nameBases.length-1));m(`riverName`).value=e,i.rename(k().i,e),l.draw(`labels`)}function K(){let e=k();try{i.setParent(e.i,+this.value)}catch(t){v(t.message,!1,`error`),this.value=String(e.parent||e.i);return}m(`riverBasin`).value=pack.rivers.find(t=>t.i===e.basin).name}function q(){let e=k();i.setWidth(e.i,Math.max(0,+this.value||0),e.widthFactor),P(e),R()}function J(){let e=k();i.setWidth(e.i,e.sourceWidth??0,Math.max(0,+this.value||0)),P(e),R()}function Y(){let t=h(`#controlPoints`).selectAll(`*`).data().map(([e,t])=>a.findCell(e,t)),n=k(),r=e(n.length*options.map.units.distance.scale);b.ElevationProfile.open(t,r,!0)}function X(){b.NotesEditor.open({type:`river`,id:k().i})}function Z(){_.confirm({title:t(`Remove`),message:t(`Are you sure you want to remove the river? All tributaries will be auto-removed`),confirm:t(`Remove`),width:`22em`,onConfirm:()=>{let e=+C.attr(`id`).slice(5);i.remove(e),_.close(`riverEditor`),l.draw(`rivers`,`labels`)}})}function Q(){h(`#controlPoints`).remove(),h(`#controlCells`).remove(),C.on(`click`,null),c(null),y(),w&&l.hide(`cells`),w=!1,_.destroy(`riverEditor`),C=null}var $={open:T};export{$ as RiverEditor};
import{E as e,g as t,i as n,r}from"./index-J388_yXx.js";import{J as i,W as a,cn as o,ft as s}from"./options-model-Cj3O8K4p.js";import{t as c,u as ee}from"./pack-generator-BfWP9wix.js";import{d as l,l as u,p as d,t as f,xt as p}from"./layers-D3_jdNGw.js";import{l as m}from"./file-utils-CmE_irX5.js";import{a as h}from"./draw-heightmap-BRP03faT.js";import{a as g,r as _,z as v}from"./node-utils-BA3zRxIe.js";import{t as y}from"./drag-DVHtGrYF.js";import{t as b}from"./dialog-BYT3Byo1.js";import{t as x}from"./viewbox-events-Hxiu3rT6.js";import{a as S,o as C}from"./tooltips-D4kIN3ad.js";import{t as w}from"./controllers-COq_bdk_.js";import{t as te}from"./added-labels-DsJgS4kH.js";import{l as T,t as ne}from"./app-8AGFuk3c.js";import{t as E}from"./label-arc-BCMl6n3_.js";var D=``,O;function k(e,t){if(options.app.mode)return;b.closeAll(`.stable`),f.show(`labels`);let r=document.querySelector(`#labels text[data-label-type='${e}'][data-id='${t}']`);if(!r)return;let i=u(e,t);i&&(O={...i},$(r.id),v(`#viewbox`).on(`touchmove mousemove`,L),A(),b.open(`labelEditor`,{title:n(`Edit Label`),width:`fit-content`,position:{my:`center top+10`,at:`bottom`,of:r},onClose:be}),R(),j(O.group),P(),M())}function A(){b.destroy(`labelEditor`);let e=`<div id="labelEditor" class="dialog">
      <button id="labelGroupShow" data-tip="${n(`Show`)}" class="icon-tags"></button>
      <div id="labelGroupSection" style="display: none">
        <button id="labelGroupHide" data-tip="${n(`Hide`)}" class="icon-tags"></button>
        <select id="labelGroupSelect" data-tip="${n(`Select a group for this label`)}" style="width: 10em"></select>
        <button
          id="labelGroupsConfigure"
          data-tip="${n(`Open the Label Groups Configurator to create, edit and reorder groups`)}"
          class="icon-cog"
        ></button>
      </div>
      <button id="labelTextShow" data-tip="${n(`Show`)}" class="icon-pencil"></button>
      <div id="labelTextSection" style="display: none">
        <button id="labelTextHide" data-tip="${n(`Hide`)}" class="icon-pencil"></button>
        <input
          id="labelText"
          data-tip="${n(`Type to change the label. Enter “|” to move to a new line`)}"
          style="width: 12em"
        />
        <span id="labelTextSpeak" data-tip="${r(n(`Speak the name`),n(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span id="labelTextRandom" data-tip="${n(`Generate random name`)}" class="icon-shuffle pointer"></span>
      </div>
      <button id="labelEditStyle" data-tip="${n(`Edit style in Style Editor`)}" class="icon-brush"></button>
      <button id="labelPathToggle"></button>
      <button id="labelSizeShow" data-tip="${n(`Show`)}" class="icon-text-height"></button>
      <div id="labelSizeSection" style="display: none">
        <button id="labelSizeHide" data-tip="${n(`Hide`)}" class="icon-text-height"></button>
        <span data-tip="${n(`Set relative size for the particular label (% of group default)`)}">${n(`Size`)}:</span>
        <input
          id="labelRelativeSize"
          data-tip="${n(`Set relative size for the particular label (% of group default)`)}"
          type="number"
          min="30"
          max="300"
          step="1"
          style="width: 4.5em"
        />
      </div>
      <button id="labelOffsetShow" data-tip="${n(`Show`)}" class="icon-sliders"></button>
      <div id="labelOffsetSection" style="display: none">
        <button id="labelOffsetHide" data-tip="${n(`Hide`)}" class="icon-sliders"></button>
        <span data-tip="${n(`Set starting offset for the particular label (% along the path)`)}">${n(`Offset`)}:</span>
        <input
          id="labelStartOffset"
          data-tip="${n(`Set starting offset for the particular label (% along the path)`)}"
          type="range"
          min="20"
          max="80"
          style="width: 8em"
        />
        <input
          id="labelStartOffsetValue"
          type="number"
          min="20"
          max="80"
          step="1"
          style="width: 3.5em"
          data-tip="${n(`Set starting offset numerically`)}"
        />
      </div>
      <button id="labelLetterSpacingShow" data-tip="${n(`Show`)}" class="icon-text-width"></button>
      <div id="labelLetterSpacingSection" style="display: none">
        <button
          id="labelLetterSpacingHide"
          data-tip="${n(`Hide`)}"
          class="icon-text-width"
        ></button>
        <slider-input
          id="labelLetterSpacingSize"
          style="display: inline-block"
          data-tip="${n(`Set the letter spacing size for this label`)}"
          min="0"
          max="20"
          step=".01"
          value="0"
        ></slider-input>
      </div>
      <button id="labelVisibility"></button>
      ${T(`labelLegend`,n(`Edit free text notes (legend)`))}
      <button id="labelReset" data-tip="${n(`Reset to default`)}" class="icon-arrows-cw"></button>
      <button
        id="labelRemoveSingle"
        data-tip="${n(`Remove`)}"
        data-shortcut="Delete"
        class="icon-trash fastDelete"
      ></button>
    </div>`;_(`dialogs`).insertAdjacentHTML(`beforeend`,e),_(`labelGroupShow`).addEventListener(`click`,G),_(`labelGroupHide`).addEventListener(`click`,K),_(`labelGroupSelect`).addEventListener(`change`,q),_(`labelGroupsConfigure`).addEventListener(`click`,()=>void w.LabelGroupsConfigurator.open()),_(`labelTextShow`).addEventListener(`click`,J),_(`labelTextHide`).addEventListener(`click`,Y),_(`labelText`).addEventListener(`input`,X),_(`labelTextSpeak`).addEventListener(`click`,()=>ne(_(`labelText`).value)),_(`labelTextRandom`).addEventListener(`click`,re),_(`labelEditStyle`).addEventListener(`click`,ie),_(`labelSizeShow`).addEventListener(`click`,ae),_(`labelSizeHide`).addEventListener(`click`,oe),_(`labelOffsetShow`).addEventListener(`click`,se),_(`labelOffsetHide`).addEventListener(`click`,ce),_(`labelStartOffset`).addEventListener(`input`,de),_(`labelStartOffsetValue`).addEventListener(`input`,fe),_(`labelRelativeSize`).addEventListener(`input`,pe),_(`labelLetterSpacingShow`).addEventListener(`click`,le),_(`labelLetterSpacingHide`).addEventListener(`click`,ue),_(`labelLetterSpacingSize`).addEventListener(`input`,me),_(`labelPathToggle`).addEventListener(`click`,he),_(`labelVisibility`).addEventListener(`click`,ge),_(`labelLegend`).addEventListener(`click`,_e),_(`labelReset`).addEventListener(`click`,ye),_(`labelRemoveSingle`).addEventListener(`click`,ve)}function j(e){D=e,K();let t=_(`labelGroupSelect`);t.options.length=0;for(let n of options.map.labels.groups)t.options.add(new Option(n.name,n.name,!1,n.name===e))}function M(){let e=N(),t=!_(`labelEditor`).classList.contains(`section-open`);_(`labelOffsetShow`).style.display=t&&e?`inline-block`:`none`,_(`labelRemoveSingle`).style.display=t&&O.type===`added`?`inline-block`:`none`,_(`labelReset`).style.display=t&&o.hasOverride(O.type,O.entityId)?`inline-block`:`none`;let i=_(`labelPathToggle`);i.className=e?`icon-resize-horizontal`:`icon-bezier-curve`,i.dataset.tip=n(e?`Remove the label path, render the label as a straight text`:`Curve the label along a path`);let a=_(`labelVisibility`);a.className=O.hidden?`icon-eye-off`:`icon-eye`,a.dataset.tip=O.hidden?n(`Show`):r(n(`Hide`),n(`You can toggle it on later in Labels Overview`))}function N(){return!!O.pathPoints?.length}function P(){let e=O.startOffset||50;_(`labelText`).value=O.text||``,_(`labelStartOffset`).value=String(e),_(`labelStartOffsetValue`).value=String(e),_(`labelRelativeSize`).value=String(O.fontSize??100),_(`labelLetterSpacingSize`).value=String(O.letterSpacing??0)}function F(){_(`labelEditor`).classList.add(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`none`})}function I(){_(`labelEditor`).classList.remove(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`inline-block`}),M()}function L(e){S();let t=e.target,r=t.parentNode;t.closest(`#${O.id}`)?C(n(`Drag to move the label`)):r?.id===`controlPoints`&&(t.tagName===`circle`&&C(n(`Drag to move, click to delete the control point`)),t.tagName===`path`&&C(n(`Click to add a control point`)))}function R(){if(v(`#debug`).select(`#controlPoints`).remove(),!N())return;let e=O.dx||O.dy?`translate(${O.dx||0}, ${O.dy||0})`:null;v(`#debug`).append(`g`).attr(`id`,`controlPoints`).attr(`transform`,e).append(`path`).attr(`d`,d(O)).style(`stroke-width`,Math.max(2.2/p.scale,.2)).on(`click`,U),O.pathPoints?.forEach(z)}function z(e){v(`#debug`).select(`#controlPoints`).append(`circle`).attr(`cx`,e[0]).attr(`cy`,e[1]).attr(`r`,Math.max(3/p.scale,.35)).style(`stroke-width`,Math.max(1/p.scale,.15)).call(y().on(`drag`,B)).on(`click`,H)}function B(e){this.setAttribute(`cx`,String(e.x)),this.setAttribute(`cy`,String(e.y)),V()}function V(){let n=[];v(`#debug > #controlPoints`).selectAll(`circle`).each(function(){let t=e(+this.getAttribute(`cx`),2),r=e(+this.getAttribute(`cy`),2);n.push([t,r])});let r=ee().curve(h),i=t(r(n)||``);v(`#debug`).select(`#controlPoints > path`).attr(`d`,i),O.pathPoints=n,Q(),n.length||R()}function H(){this.remove(),V()}function U(e){let t=g(e,this),n=[];v(`#debug #controlPoints`).selectAll(`circle`).each(function(){let e=+this.getAttribute(`cx`),r=+this.getAttribute(`cy`);n.push((t[0]-e)**2+(t[1]-r)**2)});let r=n.length;if(n.length>1){let e=n.slice(0).sort((e,t)=>e-t),t=n.indexOf(e[0]),i=n.indexOf(e[1]);r=t<=i?t+1:i+1}let i=`:nth-child(${r+2})`;v(`#debug`).select(`#controlPoints`).insert(`circle`,i).attr(`cx`,t[0]).attr(`cy`,t[1]).attr(`r`,2.5).attr(`stroke-width`,.8).call(y().on(`drag`,B)).on(`click`,H),V()}function W(t){let n=(O.dx||0)-t.x,r=(O.dy||0)-t.y;t.on(`drag`,t=>{O.dx=e(n+t.x,2),O.dy=e(r+t.y,2);let i=`translate(${O.dx}, ${O.dy})`;this.setAttribute(`transform`,i),v(`#debug #controlPoints`).attr(`transform`,i)}),t.on(`end`,()=>Q())}function G(){F(),_(`labelGroupSection`).style.display=`inline-block`}function K(){I(),_(`labelGroupSection`).style.display=`none`}function q(){let e=this.value,t=options.map.labels.groups.find(t=>t.name===e)?.type,i=()=>{D=e,O.group=e,Q()};if(t===O.type)return void i();b.confirm({title:n(`Assign cross-type Label Group`),message:r(n(`Assign this {{type}} label to the {{targetType}} group “{{group}}”?`,{type:O.type,targetType:t,group:e}),n(`It's better to avoid such cross-type assignment`)),confirm:n(`Assign`),onConfirm:i,onCancel:()=>{this.value=O.group}})}function J(){F(),_(`labelTextSection`).style.display=`inline-block`}function Y(){I(),_(`labelTextSection`).style.display=`none`}function X(){let e=_(`labelText`).value;O.text=e,Q(),O.type===`state`&&C(n(`Use States Editor to change the actual state name, not just a label`),!1,`warn`),O.type===`province`&&C(n(`Use Provinces Editor to change the actual province name, not just a label`),!1,`warn`)}var Z={burg:e=>m.getCulture(pack.burgs[e.entityId].culture??0),state:e=>{let t=pack.states[e.entityId].culture;return m.getState(m.getCulture(t,4,7,``),t)},province:e=>{let t=pack.provinces[e.entityId];return m.getState(t.name,pack.cells.culture[t.center])},added:e=>{let t=c.findCell(...e.anchor);return t?m.getCulture(pack.cells.culture[t]):``},river:e=>{let t=c.findCell(...e.anchor);return t?s.getName(t):``},route:e=>{let t=pack.routes.find(t=>t.i===e.entityId)?.points??[];return a.generateName({group:e.group,points:t})||`Unnamed route segment`}};function re(){_(`labelText`).value=Z[O.type](O),X()}function ie(){w.StyleEditor.open(`labels`,O.group)}function ae(){F(),_(`labelSizeSection`).style.display=`inline-block`}function oe(){I(),_(`labelSizeSection`).style.display=`none`}function se(){F(),_(`labelOffsetSection`).style.display=`inline-block`}function ce(){I(),_(`labelOffsetSection`).style.display=`none`}function le(){F(),_(`labelLetterSpacingSection`).style.display=`inline-block`}function ue(){I(),_(`labelLetterSpacingSection`).style.display=`none`}function de(){if(!N())return;let e=this.value;_(`labelStartOffsetValue`).value=e,O.startOffset=+e,Q(),C(n(`Label offset: {{value}}%`,{value:e}))}function fe(){if(!N())return;let e=Math.min(80,Math.max(20,+this.value));_(`labelStartOffset`).value=String(e),this.value=String(e),O.startOffset=e,Q(),C(n(`Label offset: {{value}}%`,{value:e}))}function pe(){O.fontSize=+this.value,Q(),C(n(`Label relative size: {{value}}%`,{value:this.value}))}function me(){O.letterSpacing=+this.value,Q(),C(n(`Label letter-spacing size: {{value}}px`,{value:this.value}))}function he(){O.pathPoints=N()?[]:E(O),Q(),R()}function ge(){O.hidden?delete O.hidden:O.hidden=!0,Q()}function _e(){let e=i.resolveElement(O.id);e&&w.NotesEditor.open(e)}function ve(){b.confirm({title:n(`Remove`),message:n(`Are you sure you want to remove the label?`),confirm:n(`Remove`),onConfirm:()=>{O.type===`added`&&(te.remove(O.entityId),f.draw(`labels`),b.close(`labelEditor`))}})}function Q(){let e=o.getEntity(O.type,O.entityId);e&&(e.label=xe(),l(O),$(O.id),M())}function $(e){v(`#${e}`).call(y().on(`start`,W)).classed(`draggable`,!0)}function ye(){let{type:e,entityId:t}=O;o.reset(e,t),f.draw(`labels`),O={...u(e,t)??O},$(O.id),j(O.group),P(),M(),R()}function be(){v(`#debug`).select(`#controlPoints`).remove(),v(`#${O.id}`).on(`.drag`,null).classed(`draggable`,!1),x(),b.destroy(`labelEditor`)}function xe(){return{text:O.text,group:O.group,dx:O.dx,dy:O.dy,fontSize:O.fontSize,letterSpacing:O.letterSpacing,pathPoints:O.pathPoints??[],startOffset:O.startOffset,hidden:O.hidden}}var Se={open:k,getLastSelectedGroup:()=>D};export{Se as LabelsEditor};
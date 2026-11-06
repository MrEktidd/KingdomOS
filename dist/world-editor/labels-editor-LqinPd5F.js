import{E as e,g as t,i as n,r}from"./index-DOQT8b0l.js";import{J as i,W as a,cn as o,ft as s}from"./options-model-DdZ2yl81.js";import{t as c,u as l}from"./pack-generator-D44ZN0et.js";import{d as u,l as d,p as f,t as p,xt as m}from"./layers-BuZ6CHWf.js";import{l as h}from"./file-utils-ChGs_4wd.js";import{a as g}from"./draw-heightmap-D9CW0Lcq.js";import{a as _,r as v,z as y}from"./node-utils-B7j8BhBd.js";import{t as b}from"./drag-BpUrczx_.js";import{t as x}from"./dialog-3wqBPvBH.js";import{a as S,o as C}from"./tooltips-Nm9ri5Ws.js";import{t as w}from"./controllers-J2Zz1cm6.js";import{t as ee}from"./added-labels-BR1YnNI3.js";import{l as te,t as T,y as ne}from"./app-JxGef4iz.js";import{t as E}from"./label-arc-CnWmB7RW.js";var D=``,O;function k(e,t){if(options.app.mode)return;x.closeAll(`.stable`),p.show(`labels`);let r=document.querySelector(`#labels text[data-label-type='${e}'][data-id='${t}']`);if(!r)return;let i=d(e,t);i&&(O={...i},$(r.id),y(`#viewbox`).on(`touchmove mousemove`,L),A(),x.open(`labelEditor`,{title:n(`Edit Label`),width:`fit-content`,position:{my:`center top+10`,at:`bottom`,of:r},onClose:be}),R(),j(O.group),P(),M())}function A(){x.destroy(`labelEditor`);let e=`<div id="labelEditor" class="dialog">
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
      ${te(`labelLegend`,n(`Edit free text notes (legend)`))}
      <button id="labelReset" data-tip="${n(`Reset to default`)}" class="icon-arrows-cw"></button>
      <button
        id="labelRemoveSingle"
        data-tip="${n(`Remove`)}"
        data-shortcut="Delete"
        class="icon-trash fastDelete"
      ></button>
    </div>`;v(`dialogs`).insertAdjacentHTML(`beforeend`,e),v(`labelGroupShow`).addEventListener(`click`,G),v(`labelGroupHide`).addEventListener(`click`,K),v(`labelGroupSelect`).addEventListener(`change`,q),v(`labelGroupsConfigure`).addEventListener(`click`,()=>void w.LabelGroupsConfigurator.open()),v(`labelTextShow`).addEventListener(`click`,J),v(`labelTextHide`).addEventListener(`click`,Y),v(`labelText`).addEventListener(`input`,X),v(`labelTextSpeak`).addEventListener(`click`,()=>T(v(`labelText`).value)),v(`labelTextRandom`).addEventListener(`click`,re),v(`labelEditStyle`).addEventListener(`click`,ie),v(`labelSizeShow`).addEventListener(`click`,ae),v(`labelSizeHide`).addEventListener(`click`,oe),v(`labelOffsetShow`).addEventListener(`click`,se),v(`labelOffsetHide`).addEventListener(`click`,ce),v(`labelStartOffset`).addEventListener(`input`,de),v(`labelStartOffsetValue`).addEventListener(`input`,fe),v(`labelRelativeSize`).addEventListener(`input`,pe),v(`labelLetterSpacingShow`).addEventListener(`click`,le),v(`labelLetterSpacingHide`).addEventListener(`click`,ue),v(`labelLetterSpacingSize`).addEventListener(`input`,me),v(`labelPathToggle`).addEventListener(`click`,he),v(`labelVisibility`).addEventListener(`click`,ge),v(`labelLegend`).addEventListener(`click`,_e),v(`labelReset`).addEventListener(`click`,ye),v(`labelRemoveSingle`).addEventListener(`click`,ve)}function j(e){D=e,K();let t=v(`labelGroupSelect`);t.options.length=0;for(let n of options.map.labels.groups)t.options.add(new Option(n.name,n.name,!1,n.name===e))}function M(){let e=N(),t=!v(`labelEditor`).classList.contains(`section-open`);v(`labelOffsetShow`).style.display=t&&e?`inline-block`:`none`,v(`labelRemoveSingle`).style.display=t&&O.type===`added`?`inline-block`:`none`,v(`labelReset`).style.display=t&&o.hasOverride(O.type,O.entityId)?`inline-block`:`none`;let i=v(`labelPathToggle`);i.className=e?`icon-resize-horizontal`:`icon-bezier-curve`,i.dataset.tip=n(e?`Remove the label path, render the label as a straight text`:`Curve the label along a path`);let a=v(`labelVisibility`);a.className=O.hidden?`icon-eye-off`:`icon-eye`,a.dataset.tip=O.hidden?n(`Show`):r(n(`Hide`),n(`You can toggle it on later in Labels Overview`))}function N(){return!!O.pathPoints?.length}function P(){let e=O.startOffset||50;v(`labelText`).value=O.text||``,v(`labelStartOffset`).value=String(e),v(`labelStartOffsetValue`).value=String(e),v(`labelRelativeSize`).value=String(O.fontSize??100),v(`labelLetterSpacingSize`).value=String(O.letterSpacing??0)}function F(){v(`labelEditor`).classList.add(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`none`})}function I(){v(`labelEditor`).classList.remove(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`inline-block`}),M()}function L(e){S();let t=e.target,r=t.parentNode;t.closest(`#${O.id}`)?C(n(`Drag to move the label`)):r?.id===`controlPoints`&&(t.tagName===`circle`&&C(n(`Drag to move, click to delete the control point`)),t.tagName===`path`&&C(n(`Click to add a control point`)))}function R(){if(y(`#debug`).select(`#controlPoints`).remove(),!N())return;let e=O.dx||O.dy?`translate(${O.dx||0}, ${O.dy||0})`:null;y(`#debug`).append(`g`).attr(`id`,`controlPoints`).attr(`transform`,e).append(`path`).attr(`d`,f(O)).style(`stroke-width`,Math.max(2.2/m.scale,.2)).on(`click`,U),O.pathPoints?.forEach(z)}function z(e){y(`#debug`).select(`#controlPoints`).append(`circle`).attr(`cx`,e[0]).attr(`cy`,e[1]).attr(`r`,Math.max(3/m.scale,.35)).style(`stroke-width`,Math.max(1/m.scale,.15)).call(b().on(`drag`,B)).on(`click`,H)}function B(e){this.setAttribute(`cx`,String(e.x)),this.setAttribute(`cy`,String(e.y)),V()}function V(){let n=[];y(`#debug > #controlPoints`).selectAll(`circle`).each(function(){let t=e(+this.getAttribute(`cx`),2),r=e(+this.getAttribute(`cy`),2);n.push([t,r])});let r=l().curve(g),i=t(r(n)||``);y(`#debug`).select(`#controlPoints > path`).attr(`d`,i),O.pathPoints=n,Q(),n.length||R()}function H(){this.remove(),V()}function U(e){let t=_(e,this),n=[];y(`#debug #controlPoints`).selectAll(`circle`).each(function(){let e=+this.getAttribute(`cx`),r=+this.getAttribute(`cy`);n.push((t[0]-e)**2+(t[1]-r)**2)});let r=n.length;if(n.length>1){let e=n.slice(0).sort((e,t)=>e-t),t=n.indexOf(e[0]),i=n.indexOf(e[1]);r=t<=i?t+1:i+1}let i=`:nth-child(${r+2})`;y(`#debug`).select(`#controlPoints`).insert(`circle`,i).attr(`cx`,t[0]).attr(`cy`,t[1]).attr(`r`,2.5).attr(`stroke-width`,.8).call(b().on(`drag`,B)).on(`click`,H),V()}function W(t){let n=(O.dx||0)-t.x,r=(O.dy||0)-t.y;t.on(`drag`,t=>{O.dx=e(n+t.x,2),O.dy=e(r+t.y,2);let i=`translate(${O.dx}, ${O.dy})`;this.setAttribute(`transform`,i),y(`#debug #controlPoints`).attr(`transform`,i)}),t.on(`end`,()=>Q())}function G(){F(),v(`labelGroupSection`).style.display=`inline-block`}function K(){I(),v(`labelGroupSection`).style.display=`none`}function q(){let e=this.value,t=options.map.labels.groups.find(t=>t.name===e)?.type,i=()=>{D=e,O.group=e,Q()};if(t===O.type)return void i();x.confirm({title:n(`Assign cross-type Label Group`),message:r(n(`Assign this {{type}} label to the {{targetType}} group “{{group}}”?`,{type:O.type,targetType:t,group:e}),n(`It's better to avoid such cross-type assignment`)),confirm:n(`Assign`),onConfirm:i,onCancel:()=>{this.value=O.group}})}function J(){F(),v(`labelTextSection`).style.display=`inline-block`}function Y(){I(),v(`labelTextSection`).style.display=`none`}function X(){let e=v(`labelText`).value;O.text=e,Q(),O.type===`state`&&C(n(`Use States Editor to change the actual state name, not just a label`),!1,`warn`),O.type===`province`&&C(n(`Use Provinces Editor to change the actual province name, not just a label`),!1,`warn`)}var Z={burg:e=>h.getCulture(pack.burgs[e.entityId].culture??0),state:e=>{let t=pack.states[e.entityId].culture;return h.getState(h.getCulture(t,4,7,``),t)},province:e=>{let t=pack.provinces[e.entityId];return h.getState(t.name,pack.cells.culture[t.center])},added:e=>{let t=c.findCell(...e.anchor);return t?h.getCulture(pack.cells.culture[t]):``},river:e=>{let t=c.findCell(...e.anchor);return t?s.getName(t):``},route:e=>{let t=pack.routes.find(t=>t.i===e.entityId)?.points??[];return a.generateName({group:e.group,points:t})||`Unnamed route segment`}};function re(){v(`labelText`).value=Z[O.type](O),X()}function ie(){w.StyleEditor.open(`labels`,O.group)}function ae(){F(),v(`labelSizeSection`).style.display=`inline-block`}function oe(){I(),v(`labelSizeSection`).style.display=`none`}function se(){F(),v(`labelOffsetSection`).style.display=`inline-block`}function ce(){I(),v(`labelOffsetSection`).style.display=`none`}function le(){F(),v(`labelLetterSpacingSection`).style.display=`inline-block`}function ue(){I(),v(`labelLetterSpacingSection`).style.display=`none`}function de(){if(!N())return;let e=this.value;v(`labelStartOffsetValue`).value=e,O.startOffset=+e,Q(),C(n(`Label offset: {{value}}%`,{value:e}))}function fe(){if(!N())return;let e=Math.min(80,Math.max(20,+this.value));v(`labelStartOffset`).value=String(e),this.value=String(e),O.startOffset=e,Q(),C(n(`Label offset: {{value}}%`,{value:e}))}function pe(){O.fontSize=+this.value,Q(),C(n(`Label relative size: {{value}}%`,{value:this.value}))}function me(){O.letterSpacing=+this.value,Q(),C(n(`Label letter-spacing size: {{value}}px`,{value:this.value}))}function he(){O.pathPoints=N()?[]:E(O),Q(),R()}function ge(){O.hidden?delete O.hidden:O.hidden=!0,Q()}function _e(){let e=i.resolveElement(O.id);e&&w.NotesEditor.open(e)}function ve(){x.confirm({title:n(`Remove`),message:n(`Are you sure you want to remove the label?`),confirm:n(`Remove`),onConfirm:()=>{O.type===`added`&&(ee.remove(O.entityId),p.draw(`labels`),x.close(`labelEditor`))}})}function Q(){let e=o.getEntity(O.type,O.entityId);e&&(e.label=xe(),u(O),$(O.id),M())}function $(e){y(`#${e}`).call(b().on(`start`,W)).classed(`draggable`,!0)}function ye(){let{type:e,entityId:t}=O;o.reset(e,t),p.draw(`labels`),O={...d(e,t)??O},$(O.id),j(O.group),P(),M(),R()}function be(){y(`#debug`).select(`#controlPoints`).remove(),y(`#${O.id}`).on(`.drag`,null).classed(`draggable`,!1),ne(),x.destroy(`labelEditor`)}function xe(){return{text:O.text,group:O.group,dx:O.dx,dy:O.dy,fontSize:O.fontSize,letterSpacing:O.letterSpacing,pathPoints:O.pathPoints??[],startOffset:O.startOffset,hidden:O.hidden}}var Se={open:k,getLastSelectedGroup:()=>D};export{Se as LabelsEditor};
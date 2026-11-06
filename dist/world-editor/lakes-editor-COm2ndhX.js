import{D as e,i as t,r as n}from"./index-DfkEhdNk.js";import{$ as r,K as i,ht as a,pt as o}from"./options-model-baH24lwc.js";import{Z as s,t as c}from"./layers-DJ8BJ3Zy.js";import{E as l,k as u,l as d}from"./file-utils-gMYr_JNq.js";import{t as f}from"./min-CCch3uox.js";import{r as p,z as m}from"./node-utils-BD0SusgU.js";import{t as h}from"./dialog-BW-Ar0Nf.js";import{o as g}from"./tooltips-BSJdaB-v.js";import{t as _}from"./controllers-DmSw-ZkU.js";import{a as v,o as y,p as b}from"./units-S5RZj9IM.js";import{t as x}from"./styles-CL16qCtx.js";import{l as S,t as C}from"./app-DaOF0_oJ.js";function w(e){for(var t=-1,n=e.length,r=e[n-1],i,a,o=r[0],s=r[1],c=0;++t<n;)i=o,a=s,r=e[t],o=r[0],s=r[1],i-=o,a-=s,c+=Math.hypot(i,a);return c}var T;function E(e){options.app.mode||(h.closeAll(`.stable`),c.hide(`cells`),D(),T=m(e),k(),I(),h.open(`lakeEditor`,{title:t(`Edit Lake`),position:{my:`center top+20`,at:`top`,of:`svg`},onClose:W}))}function D(){h.destroy(`lakeEditor`);let e=`<div id="lakeEditor" class="dialog">
    <div id="lakeBody" style="padding-bottom: 0.3em">
      <div>
        <div class="label" style="width: 4.8em">${t(`Name`)}:</div>
        <span id="lakeNameCulture" data-tip="${t(`Generate culture-specific name`)}" class="icon-book pointer"></span>
        <span id="lakeNameRandom" data-tip="${t(`Generate random name`)}" class="icon-globe pointer"></span>
        <input id="lakeName" data-tip="${t(`Type to rename`)}" autocorrect="off" spellcheck="false" />
        <span id="lakeNameSpeak" data-tip="${n(t(`Speak the name`),t(`You can change voice and language in options`))}" class="speaker">🔊</span>
      </div>
      <div data-tip="${t(`Lake subtype. Generators read it: burgs cannot port on dry, frozen or lava lakes`)}">
        <div class="label" style="width: 7em">${t(`Subtype`)}:</div>
        <select id="lakeSubtype" data-tip="${t(`Select lake subtype`)}">
          ${a.map(e=>`<option value="${e}">${r[e]??e}</option>`).join(``)}
        </select>
      </div>
      <div data-tip="${n(t(`Rendering group: the svg group the lake is drawn in`),t(`Does not affect generation`))}">
        <div class="label" style="width: 4.8em">${t(`Group`)}:</div>
        <span id="lakeGroupRemove" data-tip="${t(`Remove`)}" class="icon-trash-empty pointer"></span>
        <span id="lakeGroupAdd" data-tip="${t(`Create a new group for the lake`)}" class="icon-plus pointer"></span>
        <select id="lakeGroup" data-tip="${t(`Select lake rendering group`)}"></select>
        <input id="lakeGroupName" placeholder="${t(`Group name`)}" data-tip="${t(`Provide a name for the new group`)}" style="display: none" />
        <span id="lakeEditStyle" data-tip="${t(`Edit style in Style Editor`)}" class="icon-brush pointer"></span>
      </div>
      <div data-tip="${t(`Lake tags (comma-separated)`)}">
        <div class="label" style="width: 4.8em">${t(`Tags`)}:</div>
        <input
          id="lakeTags"
          placeholder="${t(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
      <div data-tip="${t(`Lake area in selected units`)}">
        <div class="label">${t(`Area`)}:</div>
        <input id="lakeArea" disabled />
      </div>
      <div data-tip="${t(`Lake shore length in selected units`)}">
        <div class="label">${t(`Shore length`)}:</div>
        <input id="lakeShoreLength" disabled />
      </div>
      <div data-tip="${t(`Lake elevation in selected units`)}">
        <div class="label">${t(`Elevation`)}:</div>
        <input id="lakeElevation" disabled />
      </div>
      <div data-tip="${t(`Lake average depth in selected units`)}">
        <div class="label">${t(`Average depth`)}:</div>
        <input id="lakeAverageDepth" disabled />
      </div>
      <div data-tip="${t(`Lake maximum depth in selected units`)}">
        <div class="label">${t(`Max depth`)}:</div>
        <input id="lakeMaxDepth" disabled />
      </div>
      <div data-tip="${t(`Lake water supply. If supply > evaporation and there is an outlet, the lake water is fresh. If supply is very low, the lake becomes dry`)}">
        <div class="label">${t(`Supply`)}:</div>
        <input id="lakeFlux" disabled />
      </div>
      <div data-tip="${t(`Evaporation from lake surface. If evaporation > supply, the lake water is saline. If difference is high, the lake becomes dry`)}">
        <div class="label">${t(`Evaporation`)}:</div>
        <input id="lakeEvaporation" disabled />
      </div>
      <div data-tip="${t(`Number of lake inlet rivers`)}">
        <div class="label">${t(`Inlets`)}:</div>
        <input id="lakeInlets" disabled />
      </div>
      <div data-tip="${t(`Lake outlet river`)}">
        <div class="label">${t(`Outlet`)}:</div>
        <input id="lakeOutlet" disabled />
      </div>
    </div>
    <div id="lakeBottom">
      ${S(`lakeLegend`,t(`Edit free text notes (legend)`))}
    </div>
  </div>`;p(`dialogs`).insertAdjacentHTML(`beforeend`,e),p(`lakeName`).addEventListener(`input`,A),p(`lakeNameSpeak`).addEventListener(`click`,()=>C(p(`lakeName`).value)),p(`lakeNameCulture`).addEventListener(`click`,j),p(`lakeNameRandom`).addEventListener(`click`,M),p(`lakeSubtype`).addEventListener(`change`,N),p(`lakeGroup`).addEventListener(`change`,L),p(`lakeGroupAdd`).addEventListener(`click`,R),p(`lakeGroupName`).addEventListener(`change`,z),p(`lakeGroupRemove`).addEventListener(`click`,B),p(`lakeEditStyle`).addEventListener(`click`,V),p(`lakeTags`).addEventListener(`change`,H),p(`lakeLegend`).addEventListener(`click`,U)}function O(){let e=+T.attr(`data-f`);return pack.features.find(t=>t.i===e)}function k(){let{cells:t,vertices:n,rivers:r}=pack,a=O();p(`lakeName`).value=a.name,p(`lakeSubtype`).value=a.subtype||`freshwater`,p(`lakeTags`).value=i.format(a.tags),p(`lakeArea`).value=`${e(v(a.area))} ${y()}`;let o=w(a.vertices.map(e=>n.p[e]));p(`lakeShoreLength`).value=`${e(o*options.map.units.distance.scale)} ${options.map.units.distance.unit}`;let s=Array.from(t.i.filter(e=>t.f[e]===a.i)).map(e=>t.h[e]);p(`lakeElevation`).value=b(a.height),p(`lakeAverageDepth`).value=b(u(s)??0,!0),p(`lakeMaxDepth`).value=b(f(s)??0,!0),p(`lakeFlux`).value=String(a.flux),p(`lakeEvaporation`).value=String(a.evaporation);let c=a.inlets?.map(e=>r.find(t=>t.i===e)?.name),l=a.outlet?r.find(e=>e.i===a.outlet)?.name:`no`,d=p(`lakeInlets`);d.value=c?String(c.length):`no`,d.title=c?c.join(`, `):``,p(`lakeOutlet`).value=l??`no`}function A(){O().name=this.value}function j(){let e=O();e.name=p(`lakeName`).value=o.getName(e)}function M(){let e=O();e.name=p(`lakeName`).value=d.getBase(l(d.nameBases.length-1))}function N(){o.setSubtype(O().i,this.value)}var P=e=>e in x.defaults.lakes.groups,F=e=>pack.features.filter(t=>t?.type===`lake`&&t.group===e);function I(){let e=O().group,t=p(`lakeGroup`);t.options.length=0;for(let n of Object.keys(styles.lakes.groups))t.options.add(new Option(n,n,!1,n===e))}function L(){O().group=this.value,c.draw(`lakes`)}function R(){let e=p(`lakeGroupName`),t=p(`lakeGroup`);e.style.display===`none`?(e.style.display=`inline-block`,e.focus(),t.style.display=`none`):(e.style.display=`none`,t.style.display=`inline-block`)}function z(){if(!this.value){g(t(`Invalid group name`));return}let e=this.value.toLowerCase().replace(/ /g,`_`).replace(/[^\w\s]/gi,``);if(!s(styles.lakes.groups,e)){g(t(`Element with this name already exists. Provide a unique name`),!1,`error`);return}if(Number.isFinite(+e.charAt(0))){g(t(`Group name should start with a letter`),!1,`error`);return}let n=O(),r=n.group,i=styles.lakes.groups,a=p(`lakeGroup`);if(!P(r)&&F(r).length===1){let t=Object.entries(i);for(let[e]of t)delete i[e];for(let[n,a]of t)i[n===r?e:n]=a;a.selectedOptions[0].remove()}else i[e]=structuredClone(i[r]||i.freshwater);a.options.add(new Option(e,e,!1,!0)),n.group=e,c.draw(`lakes`),R(),p(`lakeGroupName`).value=``}function B(){let e=O().group;if(P(e)){g(t(`This is one of the default groups, it cannot be removed`),!1,`error`);return}let r=F(e).length;h.confirm({title:t(`Remove`),message:n(t(`Are you sure you want to remove the group?`),t(`All lakes of the group ({{lakes}}) will be turned into Freshwater`,{lakes:r})),confirm:t(`Remove`),onConfirm:()=>{for(let t of F(e))t.group=`freshwater`;delete styles.lakes.groups[e],c.draw(`lakes`),p(`lakeGroup`).selectedOptions[0].remove(),p(`lakeGroup`).value=`freshwater`}})}function V(){_.StyleEditor.open(`lakes`,O().group)}function H(){let e=O();e&&(i.set(e,this.value),this.value=i.format(e.tags))}function U(){_.NotesEditor.open({type:`feature`,id:O().i})}function W(){h.destroy(`lakeEditor`),T=null}var G={open:E};export{G as LakesEditor};
import{C as e,E as t,i as n,r}from"./index-DOQT8b0l.js";import{K as i,m as a}from"./options-model-DdZ2yl81.js";import{H as o,U as s}from"./layers-BuZ6CHWf.js";import{i as c,r as l,z as u}from"./node-utils-B7j8BhBd.js";import{t as d}from"./drag-BpUrczx_.js";import{t as f}from"./dialog-3wqBPvBH.js";import{o as p,t as m}from"./tooltips-Nm9ri5Ws.js";import{t as h}from"./controllers-J2Zz1cm6.js";import{W as g,d as _,l as v}from"./app-JxGef4iz.js";import{t as y}from"./map-placement-CJomdv9s.js";var b,x;function S(e,t){if(options.app.mode)return;f.closeAll(`.stable`);let r=w(e,t);r&&([b,x]=r,u(b).raise().call(d().on(`start`,E)).classed(`draggable`,!0),c(`notesEditor`)&&h.NotesEditor.open({type:`marker`,id:x.i}),C(),l(`markerEditor`).dataset.entity=`marker:${x.i}`,D(),f.open(`markerEditor`,{title:n(`Edit Marker`),position:{my:`left top`,at:`left+10 top+10`,of:`svg`},onClose:X}))}function C(){f.destroy(`markerEditor`);let e=`<div id="markerEditor" class="dialog">
    <div id="markerBody" style="padding-bottom: 0.3em">
      <div data-tip="${n(`Marker name, shown in the notes editor and overviews`)}">
        <div class="label">${n(`Name`)}:</div>
        <input id="markerName" style="width: 10.3em" />
      </div>
      <div data-tip="${r(n(`Marker type`),n(`Style changes will apply to all markers of the same type`),n(`Leave blank if the marker is unique`))}">
        <div class="label">${n(`Type`)}:</div>
        <input id="markerType" style="width: 10.3em" />
      </div>
      <div data-tip="${n(`Marker tags (comma-separated)`)}">
        <div class="label">${n(`Tags`)}:</div>
        <input
          id="markerTags"
          placeholder="${n(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 10.3em"
        />
      </div>
      <div data-tip="${n(`Marker icon`)}" style="display: flex; align-items: center">
        <div class="label">${n(`Icon`)}:</div>
        <div id="markerIcon" style="font-size: 1.5em; width: 3.7em; display: flex"></div>
        <button id="markerIconSelect" style="width: 5em">${n(`Select`)}</button>
      </div>
      <div data-tip="${n(`Marker marker element and icon sizes in pixels`)}">
        <div class="label">${n(`Size`)}:</div>
        <input data-tip="${n(`Marker element size in pixels`)}" id="markerSize" type="number" min="1" max="500" style="width: 5em" />
        <input data-tip="${n(`Marker icon sizes in pixels`)}" id="markerIconSize" type="number" min="1" max="50" step="0.1" style="width: 5em" />
      </div>
      <div data-tip="${n(`Marker icon shift (by X and by Y axis), percent. Set to 50 to position icon in center`)}">
        <div class="label">${n(`Icon shift`)}:</div>
        <input id="markerIconShiftX" type="number" min="0" max="100" step="1" style="width: 5em" />
        <input id="markerIconShiftY" type="number" min="0" max="100" step="1" style="width: 5em" />
      </div>
      <div data-tip="${n(`Marker pin shape`)}">
        <div class="label">${n(`Pin shape`)}:</div>
        <select id="markerPin" style="width: 10.3em">
          <option value="bubble">${n(`Bubble`)}</option>
          <option value="pin">${n(`Pin`)}</option>
          <option value="square">${n(`Square`)}</option>
          <option value="squarish">${n(`Squarish`)}</option>
          <option value="diamond">${n(`Diamond`)}</option>
          <option value="hex">${n(`Hex`)}</option>
          <option value="hexy">${n(`Hexy`)}</option>
          <option value="shieldy">${n(`Shieldy`)}</option>
          <option value="shield">${n(`Shield`)}</option>
          <option value="pentagon">${n(`Pentagon`)}</option>
          <option value="heptagon">${n(`Heptagon`)}</option>
          <option value="circle">${n(`Circle`)}</option>
          <option value="no">${n(`No`)}</option>
        </select>
      </div>
      <div data-tip="${n(`Pin fill and stroke colors`)}">
        <div class="label">${n(`Pin colors`)}:</div>
        <input id="markerFill" type="color" style="width: 5em; height: 1.6em" />
        <input id="markerStroke" type="color" style="width: 5em; height: 1.6em" />
      </div>
      <div data-tip="${n(`Icon fill and stroke colors: they paint the parts the icon leaves uncolored. Emoji keep their own colors`)}">
        <div class="label">${n(`Icon colors`)}:</div>
        <input id="markerIconFill" type="color" style="width: 5em; height: 1.6em" />
        <input id="markerIconStroke" type="color" style="width: 5em; height: 1.6em" />
        <i id="markerIconPaintReset" data-tip="${n(`Reset to default`)}" class="icon-ccw pointer"></i>
      </div>
    </div>
    <div id="markerBottom">
      ${v(`markerNotes`,n(`Edit free text notes (legend)`))}
      <button id="markerRadius" data-tip="${n(`Show markers within a radius of this one`)}" class="icon-dot-circled"></button>
      <button id="markerLock" class="icon-lock-open" data-lock-tip></button>
      <button id="markerAdd" data-tip="${n(`Add additional marker of that type`)}" class="icon-plus"></button>
      <button id="markerRemove" data-tip="${n(`Remove`)}" data-shortcut="Delete" class="icon-trash fastDelete"></button>
    </div>
  </div>`;l(`dialogs`).insertAdjacentHTML(`beforeend`,e),l(`markerName`).addEventListener(`change`,k),l(`markerType`).addEventListener(`change`,A),l(`markerTags`).addEventListener(`change`,j),l(`markerIconSelect`).addEventListener(`click`,M),l(`markerIconSize`).addEventListener(`input`,N),l(`markerIconShiftX`).addEventListener(`input`,P),l(`markerIconShiftY`).addEventListener(`input`,F),l(`markerSize`).addEventListener(`input`,I),l(`markerPin`).addEventListener(`change`,L),l(`markerFill`).addEventListener(`input`,R),l(`markerStroke`).addEventListener(`input`,z),l(`markerIconFill`).addEventListener(`input`,B),l(`markerIconStroke`).addEventListener(`input`,V),l(`markerIconPaintReset`).addEventListener(`click`,H),l(`markerNotes`).addEventListener(`click`,W),l(`markerRadius`).addEventListener(`click`,G),l(`markerLock`).addEventListener(`click`,K),l(`markerAdd`).addEventListener(`click`,q),l(`markerRemove`).addEventListener(`click`,J)}function w(e,t){let n=t?Number(t.closest(`svg`)?.id.slice(6)):e,r=pack.markers.find(({i:e})=>e===n);if(!r)return null;s(r);let i=c(`marker${n}`);return i||s(null),i?[i,r]:null}function T(){let e=x.type;return e?pack.markers.filter(({type:t})=>t===e):[x]}function E(n){let r=+this.getAttribute(`x`)-n.x,i=+this.getAttribute(`y`)-n.y;n.on(`drag`,function(e){this.setAttribute(`x`,String(r+e.x)),this.setAttribute(`y`,String(i+e.y))}),n.on(`end`,function(n){let{width:a,height:s}=options.map.graph,c=e(n.x+r,0,a),l=e(n.y+i,0,s);this.setAttribute(`x`,String(t(c,2))),this.setAttribute(`y`,String(t(l,2))),g.move(x.i,c,l),o()})}function D(){let e=x;O(),l(`markerName`).value=e.name||``,l(`markerType`).value=e.type||``,l(`markerTags`).value=i.format(e.tags),l(`markerIconSize`).value=String(e.px||12),l(`markerIconShiftX`).value=String(e.dx||50),l(`markerIconShiftY`).value=String(e.dy||50),l(`markerSize`).value=String(e.size||30),l(`markerPin`).value=e.pin||`bubble`,l(`markerFill`).value=e.fill||`#ffffff`,l(`markerStroke`).value=e.stroke||`#000000`,l(`markerLock`).className=e.lock?`icon-lock`:`icon-lock-open`}function O(){let{icon:e,iconFill:t,iconStroke:n}=x,r=a.paint(e),i=e=>e&&/^#[\da-f]{6}$/i.test(e)?e:`#000000`;l(`markerIcon`).innerHTML=a.html(e,{fill:t,stroke:n}),l(`markerIconFill`).value=i(t??r.fill),l(`markerIconStroke`).value=i(n??r.stroke),l(`markerIconPaintReset`).style.visibility=t||n?`visible`:`hidden`}function k(){this.value.trim()&&g.rename(x.i,this.value),c(`notesEditor`)&&h.NotesEditor.open({type:`marker`,id:x.i})}function A(){this.value.trim()&&g.setType(x.i,this.value)}function j(){i.set(x,this.value),this.value=i.format(x.tags)}function M(){h.IconPicker.open({current:x.icon,live:!0,onPick:e=>{for(let t of T())t.icon=e;O(),o()}})}function N(){U({px:+this.value})}function P(){U({dx:+this.value})}function F(){U({dy:+this.value})}function I(){U({size:+this.value})}function L(){U({pin:this.value})}function R(){U({fill:this.value})}function z(){U({stroke:this.value})}function B(){U({iconFill:this.value}),O()}function V(){U({iconStroke:this.value}),O()}function H(){U({iconFill:null,iconStroke:null}),O()}function U(e){try{for(let t of T())g.setAppearance(t.i,e)}catch(e){p(e.message,!1,`error`)}o()}function W(){h.NotesEditor.open({type:`marker`,id:x.i})}function G(){h.MarkersInRadius.open(x)}function K(){g.setLocked(x.i,!x.lock);let e=l(`markerLock`);e.classList.toggle(`icon-lock-open`),e.classList.toggle(`icon-lock`)}function q(){h.MarkerCreator.toggle(x)}function J(){f.confirm({title:n(`Remove`),message:r(n(`Are you sure you want to remove this marker?`),n(`This action cannot be reverted`)),confirm:n(`Remove`),onConfirm:Y})}function Y(){g.remove(x.i),o(),f.close(`markerEditor`),_()}function X(){u(b).on(`.drag`,null).classed(`draggable`,!1),s(null),l(`addMarker`).classList.contains(`pressed`)&&y(),m(),f.destroy(`markerEditor`),b=null,x=null}var Z={open:S};export{Z as MarkersEditor};
import{E as e,i as t,r as n,t as r}from"./index-DOQT8b0l.js";import{bn as i,xn as a}from"./options-model-DdZ2yl81.js";import{t as o}from"./layers-BuZ6CHWf.js";import{i as s,r as c}from"./node-utils-B7j8BhBd.js";import{t as l}from"./dialog-3wqBPvBH.js";import{o as u}from"./tooltips-Nm9ri5Ws.js";import{n as d}from"./map-history-Bmty1QtL.js";import{t as f}from"./services-MarV-huY.js";import{s as p}from"./zoom-B3yUAAZp.js";import{i as m,r as h,t as g}from"./canvas-B3cFGx2E.js";import{t as _}from"./map-restoration-BjyqKsRC.js";import{H as v,r as y,w as b}from"./app-JxGef4iz.js";var x=!1,S=0,C=0;function w(){T(),E(),O(),l.open(`transformTool`,{title:t(`Transform Map`),position:{my:`center`,at:`center`,of:`svg`},onClose:D,buttons:[{label:t(`Transform`),onClick:()=>{F(),l.close(`transformTool`)}},{label:t(`Cancel`),onClick:()=>{l.close(`transformTool`)}}]})}function T(){l.destroy(`transformTool`);let e=String(options.generation.graph.density),n=i[+e],r=`<div id="transformTool" class="dialog">
    <div style="padding-top: 0.5em; width: 40em; font-weight: bold">
      ${t(`This operation is destructive and irreversible. It will create a completely new map based on the current one. Don't forget to save the .map file to your machine first!`)}
    </div>
    <div
      id="transformToolBody"
      style="
        padding: 0.5em 0;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(5, 1fr);
        align-items: center;
      "
    >
      <div>${t(`Points number`)}</div>
      <div>
        <input id="transformPointsInput" type="range" min="1" max="13" value="${e}" />
        <output id="transformPointsFormatted" style="color: ${a(n)}">${n/1e3}K</output>
      </div>
      <div>${t(`Shift`)}</div>
      <div>
        <label>X: <input id="transformShiftX" type="number" size="4" value="0" /></label>
        <label>Y: <input id="transformShiftY" type="number" size="4" value="0" /></label>
      </div>
      <div>${t(`Rotate`)}</div>
      <div>
        <input id="transformAngleInput" type="range" min="0" max="359" value="0" />
        <output id="transformAngleOutput">0</output>°
      </div>
      <div>${t(`Scale`)}</div>
      <div>
        <input id="transformScaleInput" type="range" min="-25" max="25" value="0" />
        <output id="transformScaleResult">1</output>x
      </div>
      <div>${t(`Mirror`)}</div>
      <div style="display: flex; gap: 0.5em">
        <input type="checkbox" class="checkbox" id="transformMirrorH" />
        <label for="transformMirrorH" class="checkbox-label">${t(`horizontally`)}</label>
        <input type="checkbox" class="checkbox" id="transformMirrorV" />
        <label for="transformMirrorV" class="checkbox-label">${t(`vertically`)}</label>
      </div>
    </div>
    <div id="transformPreview" style="position: relative; overflow: hidden; outline: 1px solid #666">
      <canvas id="transformPreviewCanvas" style="position: absolute; transform-origin: center"></canvas>
    </div>
  </div>`;c(`dialogs`).insertAdjacentHTML(`beforeend`,r)}function E(){c(`transformToolBody`).addEventListener(`input`,A),c(`transformPointsInput`).oninput=k;let e=c(`transformPreview`);e.addEventListener(`mousedown`,j),e.addEventListener(`mouseup`,M),e.addEventListener(`mousemove`,N),e.addEventListener(`wheel`,P)}function D(){x=!1,l.destroy(`transformTool`)}async function O(){let e=Math.min(400,window.innerWidth*.5),t=e/options.map.graph.width,n=options.map.graph.height*t;c(`transformPreview`).style.width=`${e}px`,c(`transformPreview`).style.height=`${n}px`;let r=await f.ExportMap.getMapURL(`png`,{noWater:!0,fullMap:!0,noLabels:!0,noScaleBar:!0,noVignette:!0,noIce:!0}),i=new Image;i.src=r,i.onload=()=>{let t=s(`transformPreviewCanvas`);t&&(t.style.width=`${e}px`,t.style.height=`${n}px`,t.width=e*4,t.height=n*4,t.getContext(`2d`)?.drawImage(i,0,0,e*4,n*4))}}function k(e){let t=i[+e.target.value],n=c(`transformPointsFormatted`);n.value=`${t/1e3}K`,n.style.color=a(t)}function A(){let t=Math.min(400,window.innerWidth*.5)/options.map.graph.width,n=c(`transformAngleInput`).value;c(`transformAngleOutput`).value=n;let r=n/180*Math.PI,i=+c(`transformShiftX`).value,a=+c(`transformShiftY`).value,o=c(`transformMirrorH`).checked,s=c(`transformMirrorV`).checked,l=e(1.0965**c(`transformScaleInput`).value,2);c(`transformScaleResult`).value=String(l),c(`transformPreviewCanvas`).style.transform=`
    translate(${i*t}px, ${a*t}px)
    scale(${o?-l:l}, ${s?-l:l})
    rotate(${r}rad)
  `}function j(e){let t=Math.min(400,window.innerWidth*.5)/options.map.graph.width;x=!0;let n=+c(`transformShiftX`).value,r=+c(`transformShiftY`).value;S=n-e.clientX/t,C=r-e.clientY/t}function M(){x=!1}function N(e){if(!x)return;e.preventDefault();let t=Math.min(400,window.innerWidth*.5)/options.map.graph.width;c(`transformShiftX`).value=String(Math.round(S+e.clientX/t)),c(`transformShiftY`).value=String(Math.round(C+e.clientY/t)),A()}function P(e){let t=c(`transformScaleInput`);t.value=String(t.valueAsNumber-Math.sign(e.deltaY)),A()}function F(){r.group(`transformMap`);try{_.transaction(()=>{let e=c(`transformPointsInput`).value;e!==String(options.generation.graph.density)&&b.changeCellsDensity(+e);let[t,n]=I();g(),h(),p(0),v(),y.process({projection:t,inverse:n,scale:1})})}catch(e){r.error(e),m();let i=t(`Failed to transform the map: {{error}}`,{error:e.message});u(n(i,t(`The map is unchanged`)),!1,`error`,6e3),r.groupEnd();return}o.drawAll(),d(),r.groupEnd()}function I(){let e=options.map.graph.width/2,t=options.map.graph.height/2,n=+c(`transformShiftX`).value,r=+c(`transformShiftY`).value,i=c(`transformAngleInput`).value/180*Math.PI,a=Math.cos(i),o=Math.sin(i),s=+c(`transformScaleResult`).value,l=c(`transformMirrorH`).checked,u=c(`transformMirrorV`).checked;function d(c,d){return c-=e,d-=t,s!==1&&(c*=s,d*=s),i&&([c,d]=[c*a-d*o,c*o+d*a]),l&&(c=-c),u&&(d=-d),[c+e+n,d+t+r]}function f(c,d){return c-=e+n,d-=t+r,u&&(d=-d),l&&(c=-c),i!==0&&([c,d]=[c*a+d*o,-c*o+d*a]),s!==1&&(c/=s,d/=s),[c+e,d+t]}return[d,f]}var L={open:w};export{L as TransformTool};
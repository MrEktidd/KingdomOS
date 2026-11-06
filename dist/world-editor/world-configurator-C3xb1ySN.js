import{E as e,g as t,h as n,i as r}from"./index-DfkEhdNk.js";import{W as i,c as a,ft as o,n as s,pt as c,s as l}from"./options-model-baH24lwc.js";import{At as u,Ct as d,Dt as f,Et as p,M as m,Ot as h,Tt as g,jt as _,kt as ee,t as v,wt as y}from"./layers-DJ8BJ3Zy.js";import{l as b}from"./draw-heightmap-Dbhc88iA.js";import{_ as x,f as S}from"./color-utils-7EG96Nsk.js";import{i as C,r as w,z as T}from"./node-utils-BD0SusgU.js";import{t as E}from"./dialog-BW-Ar0Nf.js";import{t as D}from"./controllers-DmSw-ZkU.js";import{h as O,n as k}from"./units-S5RZj9IM.js";import{t as A}from"./biomes-generator-yijs_VMj.js";import{t as j}from"./temperature-generator-BqS5MeQ2.js";import{p as M}from"./app-DaOF0_oJ.js";function N(e){return function(t,n){var r=_(t*t+n*n),i=e(r),a=u(i),o=h(i);return[f(t*a,r*o),p(r&&n*a/r)]}}function P(e,t){return[h(t)*u(e),u(t)]}P.invert=N(p);function F(){return d(P).scale(249.5).clipAngle(90+ee)}var I=F().translate([100,100]).scale(100),L=y(I);function R(){options.app.mode||(z(),K(),Y(),J(),X(),E.open(`worldConfigurator`,{title:r(`Configure World`),buttons:[{label:r(`Update world`),onClick:q,tip:r(`Apply current settings to the map`)}],footer:`<div class="dontAsk" data-tip="${r(`Automatically update world on input changes and button clicks`)}">
      <input id="wcAutoChange" class="checkbox" type="checkbox" checked />
      <label for="wcAutoChange" class="checkbox-label"><i>${r(`auto-apply changes`)}</i></label>
    </div>`}))}function z(){E.destroy(`worldConfigurator`),w(`dialogs`).insertAdjacentHTML(`beforeend`,B()),V()}function B(){let e=(e,t,n)=>`<div>
    <i data-locked="0" id="lock_${e}" class="icon-lock-open"></i>
    <label data-tip="${n}">
      <i>${t}:</i>
      <input id="${e}Input" type="number" min="-50" max="50" />
      <span>°C<span id="${e}Converted"></span></span>
      <input id="${e}Output" type="range" min="-50" max="50" />
    </label>
  </div>`;return`<div id="worldConfigurator" class="dialog stable">
    <div style="display: flex">
      <div id="worldControls">
        ${e(`temperatureEquator`,r(`Equator`),r(`Set temperature at equator`))}
        ${e(`temperatureNorthPole`,r(`North Pole`),r(`Set the North Pole average yearly temperature`))}
        ${e(`temperatureSouthPole`,r(`South Pole`),r(`Set the South Pole average yearly temperature`))}
        <div>
          <i data-locked="0" id="lock_mapSize" class="icon-lock-open"></i>
          <label data-tip="${r(`Set map size relative to the world size`)}">
            <i>${r(`Map size`)}:</i>
            <input id="mapSizeInput" type="number" min="1" max="100" step="0.1" />%
            <input id="mapSizeOutput" type="range" min="1" max="100" step="0.1" />
          </label>
        </div>
        <div>
          <i data-locked="0" id="lock_latitude" class="icon-lock-open"></i>
          <label data-tip="${r(`Set a North-South map shift, set to 50 to make map center lie on Equator`)}">
            <i>${r(`Latitudes`)}:</i>
            <input id="latitudeInput" type="number" min="0" max="100" step="0.1" />
            <br /><i>N</i
            ><input
              id="latitudeOutput"
              type="range"
              min="0"
              max="100"
              step="0.1"
              style="width: 10.3em"
            /><i>S</i>
          </label>
        </div>
        <div>
          <i data-locked="0" id="lock_longitude" class="icon-lock-open"></i>
          <label data-tip="${r(`Set a West-East map shift, set to 50 to make map center lie on Prime meridian`)}">
            <i>${r(`Longitudes`)}:</i>
            <input id="longitudeInput" type="number" min="0" max="100" step="0.1" />
            <br /><i>W</i
            ><input
              id="longitudeOutput"
              type="range"
              min="0"
              max="100"
              step="0.1"
              style="width: 10.3em"
            /><i>E</i>
          </label>
        </div>
        <div>
          <label
            data-tip="${r(`Set precipitation - water amount clouds can bring. Defines rivers and biomes generation. Keep around 100% for default generation`)}"
          >
            <i data-locked="0" id="lock_prec" class="icon-lock-open"></i>
            <i>${r(`Precipitation`)}:</i>
            <input id="precInput" type="number" />%
            <input id="precOutput" type="range" min="0" max="500" />
          </label>
        </div>
        <div data-tip="${r(`The coordinate extent this map was generated on. The next map's is set in Options`)}">
          <i>${r(`Map size`)}:</i><br />
          <span id="mapSize"></span> px = <span id="mapSizeFriendly"></span>
        </div>
        <div>
          <i data-tip="${r(`Length of Meridian. Almost half of the equator length`)}">${r(`Meridian length`)}:</i><br />
          <span id="meridianLength" data-tip="${r(`Length of Meridian in pixels`)}"></span> px =
          <span
            id="meridianLengthFriendly"
            data-tip="${r(`Length of Meridian is friendly units (depends on user configuration)`)}"
          ></span>
          <span
            id="meridianLengthEarth"
            data-tip="${r(`Fantasy world Meridian length relative to real-world Earth (20k km)`)}"
          ></span>
        </div>
        <div data-tip="${r(`Map coordinates on globe`)}"><i>${r(`Coords`)}:</i> <span id="mapCoordinates"></span></div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-end">
        <svg id="globe" width="22em" viewBox="-20 -25 240 240">
          <defs>
            <linearGradient id="temperatureGradient" x1="0" x2="0" y1="0" y2="1">
              <stop id="grad90" offset="0%" stop-color="blue" />
              <stop id="grad60" offset="16.6%" stop-color="green" />
              <stop id="grad30" offset="33.3%" stop-color="yellow" />
              <stop id="grad0" offset="50%" stop-color="red" />
              <stop id="grad-30" offset="66.6%" stop-color="yellow" />
              <stop id="grad-60" offset="83.3%" stop-color="green" />
              <stop id="grad-90" offset="100%" stop-color="blue" />
            </linearGradient>
          </defs>
          <g id="globeNoteLines">
            <line x1="5" x2="220" y1="0" y2="0" />
            <line x1="5" x2="220" y1="13" y2="13" />
            <line x1="5" x2="220" y1="49.5" y2="49.5" />
            <line x1="-5" x2="220" y1="100" y2="100" />
            <line x1="5" x2="220" y1="150.5" y2="150.5" />
            <line x1="5" x2="220" y1="187" y2="187" />
            <line x1="5" x2="220" y1="200" y2="200" />
          </g>
          <g id="globeWindArrows" data-tip="${r(`Click to change wind direction`)}" stroke-linejoin="round">
            <circle cx="210" cy="6" r="12" />
            <path data-tier="0" d="M210,11 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(225 210 6)" />
            <circle cx="210" cy="30" r="12" />
            <path data-tier="1" d="M210,35 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(45 210 30)" />
            <circle cx="210" cy="75" r="12" />
            <path data-tier="2" d="M210,80 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(225 210 75)" />
            <circle cx="210" cy="130" r="12" />
            <path data-tier="3" d="M210,135 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(315 210 130)" />
            <circle cx="210" cy="173" r="12" />
            <path data-tier="4" d="M210,178 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(135 210 173)" />
            <circle cx="210" cy="194" r="12" />
            <path data-tier="5" d="M210,199 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(315 210 194)" />
          </g>
          <g id="globaAxisLabels">
            <text x="82%" y="-4%">${r(`wind`)}</text>
            <text x="-8%" y="-4%">${r(`Latitude`)}</text>
          </g>
          <g id="globeLatLabels">
            <text x="-15" y="5">90°</text>
            <text x="-15" y="18">60°</text>
            <text x="-15" y="53">30°</text>
            <text x="-15" y="103">0°</text>
            <text x="-15" y="153">30°</text>
            <text x="-15" y="190">60°</text>
            <text x="-15" y="204">90°</text>
          </g>
          <circle id="globeGradient" cx="100" cy="100" r="100" fill="url(#temperatureGradient)" stroke="none" />
          <line id="globePrimeMeridian" x1="100" x2="100" y1="0" y2="200" />
          <line id="globeEquator" x1="1" x2="200" y1="100" y2="100" />
          <circle id="globeOutline" cx="100" cy="100" r="100" fill="none" />
          <path id="globeGraticule" />
          <path id="globeArea" />
        </svg>
        <button id="restoreWinds" data-tip="${r(`Click to restore default (Earth-based) wind directions`)}">
          ${r(`Restore winds`)}
        </button>
      </div>
    </div>
    <div style="margin-top: 0.3em">
      <i>${r(`Presets`)}:</i>
      <button id="wcWholeWorld" data-tip="${r(`Click to set map size to cover the whole world`)}">${r(`Whole world`)}</button>
      <button id="wcNorthern" data-tip="${r(`Click to set map size to cover the Northern latitudes`)}">${r(`Northern`)}</button>
      <button id="wcTropical" data-tip="${r(`Click to set map size to cover the Tropical latitudes`)}">${r(`Tropical`)}</button>
      <button id="wcSouthern" data-tip="${r(`Click to set map size to cover the Southern latitudes`)}">${r(`Southern`)}</button>
    </div>
  </div>`}function V(){T(`#globe`).select(`#globeWindArrows`).on(`click`,Z),T(`#globe`).select(`#globeGraticule`).attr(`d`,t(L(g()())??``)),w(`worldConfigurator`).addEventListener(`input`,U),w(`restoreWinds`).addEventListener(`click`,Q),w(`wcWholeWorld`).addEventListener(`click`,()=>$(100,50)),w(`wcNorthern`).addEventListener(`click`,()=>$(33,25)),w(`wcTropical`).addEventListener(`click`,()=>$(33,50)),w(`wcSouthern`).addEventListener(`click`,()=>$(33,75)),M(w(`worldConfigurator`),H)}function H(e){let{temperature:t}=options.map.climate;if(e===`temperatureEquator`)return t.equator;if(e===`temperatureNorthPole`)return t.northPole;if(e===`temperatureSouthPole`)return t.southPole;if(e===`prec`)return options.map.climate.precipitation;if(e===`mapSize`)return options.map.geography.mapSize;if(e===`latitude`)return options.map.geography.latitude;if(e===`longitude`)return options.map.geography.longitude}function U(e){let t=e.target,n=t.id.match(/^(\w+?)(Input|Output)$/);if(!n||!t.value)return;let[,r,i]=n,o=Number(t.value);if(Number.isNaN(o))return;let c=C(`${r}${i===`Input`?`Output`:`Input`}`);c&&(c.value=t.value);let{geography:u,climate:d}=options.map;if(r===`temperatureEquator`)d.temperature.equator=o;else if(r===`temperatureNorthPole`)d.temperature.northPole=o;else if(r===`temperatureSouthPole`)d.temperature.southPole=o;else if(r===`prec`)d.precipitation=o;else if(r===`mapSize`||r===`latitude`||r===`longitude`)u[r]=o,l.calculate();else return;a.set(r,o),s.save(),G(),C(`wcAutoChange`)?.checked&&q()}function W(e){return options.map.units.temperature.unit===`°C`?``:` = ${k(e)}`}function G(){let{equator:e,northPole:t,southPole:n}=options.map.climate.temperature;w(`temperatureEquatorConverted`).textContent=W(e),w(`temperatureNorthPoleConverted`).textContent=W(t),w(`temperatureSouthPoleConverted`).textContent=W(n)}function K(){let{temperature:e,precipitation:t}=options.map.climate,{mapSize:n,latitude:r,longitude:i}=options.map.geography;for(let[a,o]of Object.entries({temperatureEquator:e.equator,temperatureNorthPole:e.northPole,temperatureSouthPole:e.southPole,prec:t,mapSize:n,latitude:r,longitude:i}))for(let e of[`Input`,`Output`]){let t=C(`${a}${e}`);t&&(t.value=String(o))}G()}function q(){Y(),J(),j.generate(),m.generate();let e=new Uint8Array(pack.cells.h);o.generate(!0,o.getLocked()),o.specify(),i.sync(),pack.cells.h=new Float32Array(e),A.define(),c.defineGroups(),c.defineNames(),v.draw(`temperature`,`precipitation`),v.draw(`biomes`,`coordinates`,`rivers`),C(`canvas3d`)&&setTimeout(()=>D.View3d.update(),500)}function J(){let n=options.map.graph.height/2*100/options.map.geography.mapSize;l.calculate();let r=options.map.geography.coordinates,i=options.map.units.distance.unit,a=n*2*options.map.units.distance.scale*O();w(`mapSize`).innerHTML=`${options.map.graph.width}x${options.map.graph.height}`,w(`mapSizeFriendly`).innerHTML=`${e(options.map.graph.width*options.map.units.distance.scale)}x${e(options.map.graph.height*options.map.units.distance.scale)} ${i}`,w(`meridianLength`).innerHTML=String(e(n*2)),w(`meridianLengthFriendly`).innerHTML=`${e(n*2*options.map.units.distance.scale)} ${i}`,w(`meridianLengthEarth`).innerHTML=a?` = ${e(a/200)}%🌏`:``,w(`mapCoordinates`).innerHTML=`${o(r.latN)} ${Math.abs(e(r.lonW))}°W; ${o(r.latS)} ${e(r.lonE)}°E`;function o(t){return t>0?`${Math.abs(e(t))}°N`:`${Math.abs(e(t))}°S`}let s=g().extent([[r.lonW??0,r.latN??0],[r.lonE??0,r.latS??0]]);T(`#globe`).select(`#globeArea`).attr(`d`,t(L(s.outline())??``))}function Y(){let e=options.map.climate.temperature.equator,t=options.map.climate.temperature.northPole,n=options.map.climate.temperature.southPole,r=S(b),i=e=>r(1-e),[a,o]=[-25,30],s=o-a;T(`#globe`).select(`#grad90`).attr(`stop-color`,i((t-a)/s)),T(`#globe`).select(`#grad60`).attr(`stop-color`,i((e-(e-t)*2/3-a)/s)),T(`#globe`).select(`#grad30`).attr(`stop-color`,i((e-(e-t)*1/4-a)/s)),T(`#globe`).select(`#grad0`).attr(`stop-color`,i((e-a)/s)),T(`#globe`).select(`#grad-30`).attr(`stop-color`,i((e-(e-n)*1/4-a)/s)),T(`#globe`).select(`#grad-60`).attr(`stop-color`,i((e-(e-n)*2/3-a)/s)),T(`#globe`).select(`#grad-90`).attr(`stop-color`,i((n-a)/s))}function X(){T(`#globe`).select(`#globeWindArrows`).selectAll(`path`).each(function(e,t){let r=n(this.getAttribute(`transform`)??``);this.setAttribute(`transform`,`rotate(${options.map.climate.winds[t]} ${r[1]} ${r[2]})`)})}function Z(e){let t=e.target,r=t.tagName===`path`?t:t.nextElementSibling;if(!r?.dataset.tier)return;let i=+r.dataset.tier;options.map.climate.winds[i]=(options.map.climate.winds[i]+45)%360,s.save();let a=n(r.getAttribute(`transform`)??``);r.setAttribute(`transform`,`rotate(${options.map.climate.winds[i]} ${a[1]} ${a[2]})`);let o=x(options.map.geography.coordinates.latN,options.map.geography.coordinates.latS,-30).map(e=>(90-e)/30|0);w(`wcAutoChange`).checked&&o.includes(i)&&q()}function Q(){let e=[225,45,225,315,135,315],t=x(options.map.geography.coordinates.latN,options.map.geography.coordinates.latS,-30).map(e=>(90-e)/30|0),n=w(`wcAutoChange`).checked&&t.some(t=>options.map.climate.winds[t]!==e[t]);options.map.climate.winds=e,s.save(),X(),n&&q()}function $(e,t){options.map.geography.mapSize=e,options.map.geography.latitude=t,l.calculate(),s.save(),a.set(`mapSize`,e),a.set(`latitude`,t),K(),C(`wcAutoChange`)?.checked&&q()}var te={open:R};export{te as WorldConfigurator};
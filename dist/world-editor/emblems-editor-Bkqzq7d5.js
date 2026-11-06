import{C as e,E as t,d as n,i as r,p as i}from"./index-DOQT8b0l.js";import{$t as a,B as o,Jt as s,Xt as c,Zt as l,f as u,m as d,nn as f,p}from"./options-model-DdZ2yl81.js";import{f as m}from"./notices-DwMq1C_Q.js";import{ct as h,dt as ee,ft as g,gt as _,ht as te,lt as ne,mt as re,pt as ie,rt as v,st as ae,ut as oe}from"./layers-BuZ6CHWf.js";import{n as se}from"./file-utils-ChGs_4wd.js";import{i as y,r as b,z as x}from"./node-utils-B7j8BhBd.js";import{t as ce}from"./drag-BpUrczx_.js";import{r as le}from"./highlight-CsS0UzDS.js";import{t as S}from"./tinctures-CsgIeV6I.js";import{t as C}from"./dialog-3wqBPvBH.js";import{o as w,t as ue}from"./tooltips-Nm9ri5Ws.js";import{t as de}from"./file-name-CjjRnvM3.js";import{t as fe}from"./pictures-t6TkHqvQ.js";import{IconPicker as pe}from"./icon-picker-CAJSsY5a.js";import{cloneEmblem as me,emblemURL as he,loadEmblemIcons as T}from"./emblem-image-8EfDmllj.js";var E=`https://azgaar.github.io/Armoria/`,ge=`https://armoria.herokuapp.com/`,D=r(`Paste an Armoria edit link, API link or COA string. Use the picture button for other images`);function O(e){let t=e.trim();if(!/^https?:\/\//i.test(t))return k(t);let n;try{n=new URL(t)}catch{throw Error(r(`The link is not a valid URL`))}if(!(n.origin===new URL(`https://azgaar.github.io/Armoria/`).origin&&n.pathname.startsWith(`/Armoria`)||n.origin===new URL(`https://armoria.herokuapp.com/`).origin)||!n.searchParams.has(`coa`))throw Error(D);return k(n.searchParams.get(`coa`)??``)}function k(e){if(!e)throw Error(D);try{let t=JSON.parse(/^%7b/i.test(e)?decodeURIComponent(e):e);if(A.safeParse(t).success)return t}catch{}throw Error(r(`The Armoria COA is not valid JSON with a field {{field}}`,{field:`tincture`}))}var A=l({t1:f(),shield:f().optional(),diaper:f().optional(),division:l({division:f(),t:f()}).optional(),charges:s(l({charge:f(),t:f(),p:f()})).optional(),ordinaries:s(l({ordinary:f(),t:f()})).optional(),inscriptions:s(l({text:f(),path:f()})).optional()});function _e(e){let t=new URL(ge);return t.searchParams.set(`size`,`1024`),t.searchParams.set(`format`,`svg`),t.searchParams.set(`coa`,JSON.stringify(e)),t.href}var ve=a({type:c(`armoria:coa`),version:c(1),session:f(),coa:A,svg:f()}),ye=class{sessions=new Map;start(e,t,n,r=new URL(E).origin){for(let[e,n]of this.sessions)n.key===t&&this.sessions.delete(e);let i=crypto.randomUUID();return this.sessions.set(i,{target:e,key:t,map:n,origin:r}),i}receive(e,t){let n=ve.safeParse(e.data);if(!n.success)return null;let{session:r,coa:i,svg:a}=n.data,o=this.sessions.get(r);return!o||e.origin!==o.origin||o.map!==t?null:{target:o.target,coa:i,svg:a}}};function be(e){let t=e=>{if(!e||typeof e!=`string`)return!1;if(e in _||/^#[\da-f]{3,8}$/i.test(e))return!0;let[n,r,i]=e.split(`-`);return!t(r)||!t(i)?!1:n.startsWith(`semy_of_`)?!!o.chargeIcon(n.slice(8)):n in ie},n=e=>!e||e in re,r=e=>{let t=ee(e,`heater`);return t?t in g:!!o.chargeArt(e)};return t(e.t1)&&(!e.shield||e.shield in g)&&(!e.diaper||e.diaper===`no`||e.diaper in te)&&(!e.division||(e.division.division===`no`||e.division.division in ne)&&t(e.division.t)&&n(e.division.line))&&(e.ordinaries??[]).every(e=>(e.ordinary===`bordure`||e.ordinary===`orle`||e.ordinary in oe)&&t(e.t)&&(!e.t2||t(e.t2))&&n(e.line))&&(e.charges??[]).every(e=>r(e.charge)&&t(e.t)&&(!e.t2||t(e.t2))&&(!e.t3||t(e.t3)))}var j=r(`Size of this emblem, 0 hides it. Change a whole category in Menu ⭢ Style ⭢ Emblems`),xe=`
  #emblemEditor { padding: .5em .7em .6em; }
  #emblemEditor > div { width: auto; }
  #emblemEditor .preview { width: 12em; height: 12em; margin: 0 auto .2em; }
  #emblemEditor .preview svg { width: 100%; height: 100%; overflow: visible; }
  #emblemArmiger { display: block; margin-bottom: .5em; text-align: center; }
  #emblemEditor .fields { display: grid; grid-template-columns: 6.4em minmax(0, 1fr); align-items: center; gap: .3em .4em; }
  #emblemEditor .fields .row { display: contents; }
  #emblemEditor .fields .row.hidden { display: none; }
  #emblemEditor .tincture { display: flex; align-items: center; gap: .35em; }
  #emblemEditor .tincture select { flex: 1; min-width: 0; }
  #emblemEditor .swatch { flex: none; width: 1.1em; height: 1.1em; border: 1px solid #0006; border-radius: 2px; }
  #emblemEditor .fields label { white-space: nowrap; padding: .15em .35em; border-radius: 3px; transition: background-color .3s ease-out; }
  #emblemEditor .fields label.active { background-color: #54ca7733; font-weight: bold; }
  #emblemEditor .fields select { width: 100%; min-width: 0; margin: 0; }
  #emblemEditor .fields hr { grid-column: 1 / -1; width: 100%; margin: .2em 0; border: 0; border-top: 1px solid #0000001f; }
  #emblemEditor .size { display: flex; align-items: center; gap: .4em; }
  #emblemEditor .size input[type="range"] { flex: 1; min-width: 0; margin: 0; }
  #emblemEditor .size input[type="number"] { width: 3.8em; margin: 0; }
  #emblemEditor .armoria { margin-top: .6em; }
  #emblemEditor .armoria button { width: 100%; margin: 0; padding: .4em; font-weight: bold; }
  #emblemEditor .armoria p { margin: .3em 0 0; font-size: .85em; opacity: .75; text-align: center; }
  #emblemEditor .toolbar { display: grid; grid-template-columns: repeat(7, 1fr); gap: .25em; margin-top: .7em; }
  #emblemEditor .control { display: flex; align-items: center; gap: .3em; margin-top: .4em; }
  #emblemEditor .control.hidden { display: none; }
  #emblemEditor .control input[type="text"] { flex: 1; min-width: 0; margin: 0; }
  #emblemEditor .control input[type="number"] { width: 4.6em; margin: 0; }
  #emblemEditor .control button { margin: 0; }
  #emblemEditor #emblemDownloadControl button { flex: 1; }
`,M,N,P,F,I=new ye,L=E;async function Se(){let e=pack.states.find(e=>e.i&&!e.removed&&e.coa),t=pack.burgs.find(e=>e.i&&!e.removed&&e.coa),n=e?`state`:`burg`,i=e??t;if(!i?.coa){w(r(`No emblems to edit, please generate states and burgs first`),!1,`error`);return}let a=`${n}COA${i.i}`;await h.trigger(a,i.coa),R(n,a,i)}function R(e,t,n,i){if(!options.app.mode){if(!t&&i)we(i);else{if(!e||!t||!n?.coa)return;M=e,N=t,P=n}Ce(),$(),F?.(),F=ae($),z(),C.open(`emblemEditor`,{title:r(`Edit Emblem`),resizable:!0,width:`22em`,height:`auto`,position:{my:`left top`,at:`left+10 top+10`,of:`svg`},onClose:Ke})}}function Ce(){C.destroy(`emblemEditor`);let e=`<div id="emblemEditor" class="dialog stable">
      <style>${xe}</style>
      <div class="preview"><svg viewBox="0 0 200 200"><use id="emblemImage"></use></svg></div>
      <b id="emblemArmiger"></b>
      <div class="fields">
        <label for="emblemStates" data-tip="${r(`Select state`)}">${r(`State`)}</label>
        <select id="emblemStates" data-tip="${r(`Select state`)}"></select>
        <label for="emblemProvinces" data-tip="${r(`Select province in state`)}">${r(`Province`)}</label>
        <select id="emblemProvinces" data-tip="${r(`Select province in state`)}"></select>
        <label for="emblemBurgs" data-tip="${r(`Select burg in province or state`)}">${r(`Burg`)}</label>
        <select id="emblemBurgs" data-tip="${r(`Select burg in province or state`)}"></select>
        <hr />
        <div id="emblemShapeRow" class="row">
        <label for="emblemShapeSelector" data-tip="${r(`Select shape of the emblem`)}">${r(`Shape`)}</label>
          <select id="emblemShapeSelector" data-tip="${r(`Select shape of the emblem`)}">
            <option value="">${r(`None`)}</option>
            <optgroup label="${r(`Basic`)}">
              <option value="heater">${r(`Heater`)}</option>
              <option value="spanish">${r(`Spanish`)}</option>
              <option value="french">${r(`French`)}</option>
            </optgroup>
            <optgroup label="${r(`Regional`)}">
              <option value="horsehead">${r(`Horsehead`)}</option>
              <option value="horsehead2">${r(`Horsehead Edgy`)}</option>
              <option value="polish">${r(`Polish`)}</option>
              <option value="hessen">${r(`Hessen`)}</option>
              <option value="swiss">${r(`Swiss`)}</option>
            </optgroup>
            <optgroup label="${r(`Historical`)}">
              <option value="boeotian">${r(`Boeotian`)}</option>
              <option value="roman">${r(`Roman`)}</option>
              <option value="kite">${r(`Kite`)}</option>
              <option value="oldFrench">${r(`Old French`)}</option>
              <option value="renaissance">${r(`Renaissance`)}</option>
              <option value="baroque">${r(`Baroque`)}</option>
            </optgroup>
            <optgroup label="${r(`Specific`)}">
              <option value="targe">${r(`Targe`)}</option>
              <option value="targe2">${r(`Targe`)} 2</option>
              <option value="pavise">${r(`Pavise`)}</option>
              <option value="wedged">${r(`Wedged`)}</option>
              <option value="embowed">${r(`Embowed`)}</option>
            </optgroup>
            <optgroup label="${r(`Banner`)}">
              <option value="flag">${r(`Flag`)}</option>
              <option value="pennon">${r(`Pennon`)}</option>
              <option value="guidon">${r(`Guidon`)}</option>
              <option value="banner">${r(`Banner`)}</option>
              <option value="dovetail">${r(`Dovetail`)}</option>
              <option value="gonfalon">${r(`Gonfalon`)}</option>
              <option value="pennant">${r(`Pennant`)}</option>
            </optgroup>
            <optgroup label="${r(`Simple`)}">
              <option value="round">${r(`Round`)}</option>
              <option value="oval">${r(`Oval`)}</option>
              <option value="vesicaPiscis">${r(`Vesica Piscis`)}</option>
              <option value="square">${r(`Square`)}</option>
              <option value="diamond">${r(`Diamond`)}</option>
              <option value="hexagon">${r(`Hexagon`)}</option>
            </optgroup>
            <optgroup label="${r(`Fantasy`)}">
              <option value="fantasy1">${r(`Fantasy`)} 1</option>
              <option value="fantasy2">${r(`Fantasy`)} 2</option>
              <option value="fantasy3">${r(`Fantasy`)} 3</option>
              <option value="fantasy4">${r(`Fantasy`)} 4</option>
              <option value="fantasy5">${r(`Fantasy`)} 5</option>
            </optgroup>
            <optgroup label="${r(`Middle Earth`)}">
              <option value="noldor">${r(`Noldor`)}</option>
              <option value="gondor">${r(`Gondor`)}</option>
              <option value="easterling">${r(`Easterling`)}</option>
              <option value="erebor">${r(`Erebor`)}</option>
              <option value="ironHills">${r(`Iron Hills`)}</option>
              <option value="urukHai">${r(`UrukHai`)}</option>
              <option value="moriaOrc">${r(`Moria Orc`)}</option>
            </optgroup>
          </select>
        </div>
        <div id="emblemFieldRow" class="row">
          <label for="emblemField" data-tip="${r(`Tincture of the field`)}">${r(`Field`)}</label>
          <div class="tincture"><span class="swatch"></span><select id="emblemField"></select></div>
        </div>
        <div id="emblemChargeRows" class="row">
          <label for="emblemChargeTincture" data-tip="${r(`Tincture of the main charge. A raster picture keeps its own colours`)}">${r(`Charge`)}</label>
          <div class="tincture"><span class="swatch"></span><select id="emblemChargeTincture"></select></div>
          <label for="emblemChargeSizeNumber" data-tip="${r(`Size of the main charge`)}">${r(`Charge size`)}</label>
          <div class="size" data-tip="${r(`Size of the main charge`)}">
            <input id="emblemChargeSizeSlider" type="range" min=".2" max="3" step=".05" />
            <input id="emblemChargeSizeNumber" type="number" min=".2" max="3" step=".05" />
          </div>
        </div>
        <label for="emblemSizeNumber" data-tip="${j}">${r(`Map size`,{context:`emblem`})}</label>
        <div class="size" data-tip="${j}">
          <input id="emblemSizeSlider" type="range" min="0" max="5" step=".1" />
          <input id="emblemSizeNumber" type="number" min="0" max="5" step=".1" />
        </div>
      </div>
      <div class="armoria">
        <button id="emblemsArmoria" type="button" data-tip="${r(`Open the emblem in Armoria, the heraldry editor: your changes show on the map as you make them`)}"><span class="icon-font"></span> ${r(`Edit in Armoria`)}</button>
      </div>
      <div class="toolbar">
        <button id="emblemsPaste" data-tip="${r(`Edit the COA string by hand, or paste an Armoria edit link, API link or COA string`)}" class="icon-link"></button>
        <button id="emblemsCharge" data-tip="${r(`Set the charge: choose, link or upload a picture to place on the field`)}" class="icon-chess-knight"></button>
        <button id="emblemsUpload" data-tip="${r(`Replace the whole emblem with a picture: choose, link or upload an image, such as a ready coat of arms`)}" class="icon-shield-alt"></button>
        <button id="emblemsDownload" data-tip="${r(`Download the emblem as an image`)}" class="icon-download"></button>
        <button id="emblemsGallery" data-tip="${r(`Download all emblems as an HTML gallery (open it in a browser; preparing takes a while)`)}" class="icon-layer-group"></button>
        <button id="emblemsRegenerate" data-tip="${r(`Regenerate the emblem`)}" class="icon-shuffle"></button>
        <button id="emblemsFocus" data-tip="${r(`Show the area or place of the emblem`)}" class="icon-target"></button>
      </div>
      <div id="emblemPasteControl" class="control hidden">
        <input id="emblemPaste" type="text" placeholder="${r(`Armoria link or COA string`)}" data-tip="${r(`The emblem's COA string: edit it, or replace it with an Armoria link or COA string, then Apply`)}" />
        <button id="emblemPasteApply" type="button" data-tip="${r(`Apply the pasted emblem`)}">${r(`Apply`)}</button>
      </div>
      <div id="emblemDownloadControl" class="control hidden">
        <input id="emblemsDownloadSize" data-tip="${r(`Image size in pixels`)}" type="number" value="500" step="100" min="100" max="10000" />
        <span>px</span>
        <button id="emblemsDownloadSVG" data-tip="${r(`Scalable vector image: best quality, opens in a browser or Inkscape`)}">SVG</button>
        <button id="emblemsDownloadPNG" data-tip="${r(`Lossless raster image with a transparent background`)}">PNG</button>
        <button id="emblemsDownloadJPG" data-tip="${r(`Compressed raster image on a white background`)}">JPG</button>
      </div>
    </div>`;b(`dialogs`).insertAdjacentHTML(`beforeend`,e),b(`emblemStates`).oninput=Te,b(`emblemProvinces`).oninput=Ee,b(`emblemBurgs`).oninput=De,b(`emblemShapeSelector`).oninput=Oe,b(`emblemField`).oninput=ke,b(`emblemChargeTincture`).oninput=Ae,b(`emblemChargeSizeSlider`).oninput=U,b(`emblemChargeSizeNumber`).oninput=U,b(`emblemSizeSlider`).oninput=q,b(`emblemSizeNumber`).oninput=q,b(`emblemsRegenerate`).onclick=Pe,b(`emblemsArmoria`).onclick=Ie,b(`emblemsCharge`).onclick=()=>ze(`charge`),b(`emblemsUpload`).onclick=()=>ze(`whole`),b(`emblemsPaste`).onclick=()=>J(`emblemPasteControl`),b(`emblemPasteApply`).onclick=()=>void Le(),b(`emblemPaste`).onkeydown=e=>{e.key===`Enter`&&Le()},b(`emblemsDownload`).onclick=()=>J(`emblemDownloadControl`),b(`emblemsDownloadSVG`).onclick=()=>Y(`svg`),b(`emblemsDownloadPNG`).onclick=()=>Y(`png`),b(`emblemsDownloadJPG`).onclick=()=>Y(`jpeg`),b(`emblemsGallery`).onclick=He,b(`emblemsFocus`).onclick=Ne}function we(e){let t=e.parentNode,n=t.id===`burgEmblems`?`burg`:t.id===`provinceEmblems`?`province`:`state`,r=+e.dataset.i,i=Z(n,r);if(!i)throw Error(`Cannot edit ${n} emblem ${r}`);M=n,N=`${M}COA${r}`,P=i}function z(){let e=M,t=P,n=b(`emblemStates`),r=b(`emblemProvinces`),i=b(`emblemBurgs`),a=0,o=0,s=0;for(let[t,a]of[[n,`state`],[r,`province`],[i,`burg`]])t.previousElementSibling?.classList.toggle(`active`,e===a);e===`state`?a=t.i:e===`province`?(o=t.i,a=pack.states[t.state].i):(s=t.i,o=pack.cells.province[t.cell]?pack.provinces[pack.cells.province[t.cell]].i:0,a=t.state??0);let c=pack.burgs.filter(e=>e.i&&!e.removed&&e.coa);n.options.length=0,c.filter(e=>!e.state).length&&n.options.add(new Option(pack.states[0].name,`0`,!1,!a)),pack.states.filter(e=>e.i&&!e.removed).forEach(e=>{n.options.add(new Option(e.name,String(e.i),!1,e.i===a))}),r.options.length=0,r.options.add(new Option(``,`0`,!1,!o)),pack.provinces.filter(e=>!e.removed&&e.state===a).forEach(e=>{r.options.add(new Option(e.name,String(e.i),!1,e.i===o))}),i.options.length=0,i.options.add(new Option(``,`0`,!1,!s)),c.filter(e=>o?pack.cells.province[e.cell]===o:e.state===a).forEach(e=>{i.options.add(new Option(e.capital?`👑 ${e.name}`:e.name,String(e.i),!1,e.i===s))}),i.options[0].disabled=!0,h.trigger(N,t.coa),B()}function B(){let e=P;if(!e.coa)return;b(`emblemImage`).setAttribute(`href`,`#${N}`);let t=e.fullName||e.name;M===`burg`&&(t=r(`Burg of {{- burg}}`,{burg:t})),b(`emblemArmiger`).textContent=t??``;let n=b(`emblemShapeSelector`);n.value=e.coa.shield??(`icon`in e.coa?``:`heater`);let i=e.coa,a=H(),s=!!a&&!o.chargeIcon(a.charge)&&!!d.kind(a.charge);b(`emblemShapeRow`).classList.toggle(`hidden`,!s&&!(`icon`in i)),b(`emblemFieldRow`).classList.toggle(`hidden`,!s),b(`emblemChargeRows`).classList.toggle(`hidden`,!s),s&&!(`icon`in i)&&K(`emblemField`,i.t1),s&&a&&(K(`emblemChargeTincture`,a.t),b(`emblemChargeSizeSlider`).value=String(a.size??1),b(`emblemChargeSizeNumber`).value=String(a.size??1));let c=b(`emblemPaste`);if(document.activeElement!==c){let e=Fe(i);c.value=e?JSON.stringify(e):``}let l=e.coa.size??1;b(`emblemSizeSlider`).value=String(l),b(`emblemSizeNumber`).value=String(l)}function Te(){let e=+b(`emblemStates`).value;if(e){if(!Q(`state`,e))return}else{let e=pack.burgs.filter(e=>e.i&&!e.removed&&!e.state);if(!e.length||!Q(`burg`,e[0].i))return}z()}function Ee(){let e=+b(`emblemProvinces`).value;if(e){if(!Q(`province`,e))return}else if(!Q(`state`,+b(`emblemStates`).value))return;z()}function De(){Q(`burg`,+b(`emblemBurgs`).value)&&z()}function Oe(){let e=b(`emblemShapeSelector`),t=e.value,n=P.coa;if(t)`icon`in n?P.coa=V(n.icon,t,n):n.shield=t;else if(!(`icon`in n)){let t=n.charges?.[0]&&o.chargeArt(n.charges[0].charge);if(!t){e.value=n.shield??`heater`,w(r(`Only an emblem with a charge can show it without a shield`),!1,`warn`);return}P.coa={icon:t,size:n.size,x:n.x,y:n.y}}y(N)?.remove(),h.trigger(N,P.coa),v(M,P.i),B()}function V(e,t,{size:n,x:r,y:i}){return{t1:`argent`,shield:t,charges:[{charge:o.chargeOf(e),t:`gules`,p:`e`,size:1.5}],size:n,x:r,y:i}}function H(){let e=P.coa;return`icon`in e?void 0:e.charges?.[0]}function ke(){let e=P.coa;`icon`in e||(e.t1=b(`emblemField`).value,W())}function Ae(){let e=H();e&&(e.t=b(`emblemChargeTincture`).value,W())}function U(e){let t=H(),n=+e.currentTarget.value;t&&n>0&&(t.size=n,W())}function W(){h.trigger(N,P.coa),B()}var G=[[r(`Metals`),S.metals],[r(`Colours`),S.colours],[r(`Stains`),S.stains]];function K(e,t){let r=b(e);r.innerHTML=(G.some(([,e])=>t in e)?``:`<option value="${i(t)}">${i(je(t))}</option>`)+G.map(([e,t])=>`<optgroup label="${e}">${Object.keys(t).map(e=>`<option value="${e}">${n(e)}</option>`).join(``)}</optgroup>`).join(``),r.value=t,r.previousElementSibling.style.background=Me(t)}function je(e){let[t,r,i]=e.split(`-`);return i?`${n(t.replace(`semy_of_`,`semy of `).replace(/([a-z])([A-Z])/g,`$1 $2`).toLowerCase())}: ${r} and ${i}`:e}function Me(e){let[,t,n]=e.split(`-`);return n?`repeating-linear-gradient(45deg, ${_[t]??t} 0 3px, ${_[n]??n} 3px 6px)`:_[e]??e}function Ne(){le(M,P)}function q(t){let n=e(+t.currentTarget.value||0,0,5);b(`emblemSizeSlider`).value=String(n),b(`emblemSizeNumber`).value=String(n);let{x:r,y:i}=P.coa;o.place(`${M}:${P.i}`,r??null,i??null,n),v(M,P.i)}function Pe(){o.regenerateOne(`${M}:${P.i}`),h.trigger(N,P.coa),v(M,P.i),B()}function Fe(e){if(`icon`in e){let t=u.get(e.icon);if(t?.kind!==`image`||!t.content.startsWith(`https://armoria.herokuapp.com/`))return null;try{return O(t.content)}catch{return null}}let{size:t,x:n,y:r,...i}=e;return i}function Ie(){let e=Fe(P.coa)??{t1:`sable`};e.charges?.some(({charge:e})=>!o.chargeIcon(e)&&d.kind(e))&&w(r(`Armoria cannot show pictures from the icon library: those charges are missing there`),!1,`warn`,6e3);let t=I.start({type:M,id:P.i,entity:P,queue:Promise.resolve()},`${M}:${P.i}`,options.map,new URL(L).origin),n=new URL(L);n.searchParams.set(`coa`,JSON.stringify(e)),n.searchParams.set(`from`,`FMG`),n.searchParams.set(`session`,t),n.searchParams.set(`returnOrigin`,location.origin),m(n.href)}async function Le(){try{await Re(M,P.i,O(b(`emblemPaste`).value)),J(`emblemPasteControl`)}catch(e){w(e.message,!1,`error`,6e3)}}async function Re(e,t,n,i,a){let o=Z(e,t);if(!o)return a;let s=options.map,{size:c,x:l,y:f}=o.coa,m;if(be(n))o.coa={...n,size:c,x:l,y:f},a&&u.get(a)&&!Object.keys(d.uses(a)).length&&u.remove(a);else{let t=a&&u.get(a)?a:void 0,d=t??u.newId(),h=i?await fe.fromFile(new File([i],`armoria.svg`,{type:`image/svg+xml`}),d,`emblem`):{kind:`image`,content:_e(n),viewBox:p};if(options.map!==s||Z(e,o.i)!==o)return a;t?u.update(t,h):u.add({id:d,...h}),o.coa={icon:d,size:c,x:l,y:f},m=d,t||w(r(`This COA uses art FMG cannot draw; it shows as Armoria's picture`),!1,`warn`,5e3)}return M===e&&P.i===t&&(h.trigger(N,o.coa),B()),v(e,t),m}window.addEventListener(`message`,e=>{let t=I.receive(e,options.map);if(!t)return;let n=t.target;n.queue=n.queue.then(async()=>{Z(n.type,n.id)===n.entity&&(n.picture=await Re(n.type,n.id,t.coa,t.svg,n.picture))}).catch(e=>w(e.message,!1,`error`,6e3))});function ze(e){let t=P,n=M,r=N,i=options.map,a=t.coa,s=`icon`in a?``:a.charges?.[0]?o.chargeArt(a.charges[0].charge)??``:``;pe.open({current:`icon`in a?a.icon:e===`charge`?s:``,preferCustom:!0,profile:`emblem`,onPick:a=>{if(!a||options.map!==i||Z(n,t.i)!==t)return;let s=t.coa;if(e===`whole`)t.coa={icon:a,size:s.size,x:s.x,y:s.y};else if(`icon`in s){let e=s.shield??o.getShield(t.culture??0,t.state);t.coa=V(a,e,s)}else{let e=o.chargeOf(a);s.charges?.length?s.charges[0]={...s.charges[0],charge:e}:s.charges=[{charge:e,t:/^(argent|or)$/.test(s.t1)?`gules`:`or`,p:`e`,size:1.5}]}h.trigger(r,t.coa),v(n,t.i),P===t&&B()}})}function J(e){for(let[t,n]of Object.entries({emblemPasteControl:`emblemsPaste`,emblemDownloadControl:`emblemsDownload`})){let r=t===e&&b(t).classList.contains(`hidden`);b(t).classList.toggle(`hidden`,!r),b(n).classList.toggle(`pressed`,r),r&&b(t).querySelector(`input`)?.focus()}}async function Y(e){await h.trigger(N,P.coa);let t=b(N);await T([t]);let n=+b(`emblemsDownloadSize`).value,r=await he(t,n,e!==`svg`),i=document.createElement(`a`);i.download=`${de(`Emblem ${P.fullName||P.name}`)}.${e}`,e===`svg`?Be(r,i):Ve(e,r,i,n),J(`emblemDownloadControl`)}function Be(e,t){t.href=e,t.click()}function Ve(e,t,n,r){let i=document.createElement(`canvas`),a=i.getContext(`2d`);i.width=r,i.height=r;let o=new Image;o.src=t,o.onload=()=>{e===`jpeg`&&(a.fillStyle=`#fff`,a.fillRect(0,0,i.width,i.height)),a.drawImage(o,0,0,i.width,i.height);let t=i.toDataURL(`image/${e}`,.92);n.href=t,n.click(),window.setTimeout(()=>window.URL.revokeObjectURL(t),6e3)}}function X(e,t){return new XMLSerializer().serializeToString(me(e,t))}async function He(){let e=de(`Emblems Gallery`),t=pack.states.filter(e=>e.i&&!e.removed&&e.coa),n=pack.provinces.filter(e=>e.i&&!e.removed&&e.coa),i=pack.burgs.filter(e=>e.i&&!e.removed&&e.coa);await Ue(t,n,i),await T([...document.querySelectorAll(`#coas > svg`)]);let a=`<a href="javascript:history.back()">${r(`Go Back`)}</a>`,o=`<div><h2>${r(`States`)}</h2>${t.map(e=>{let t=b(`stateCOA${e.i}`);return`<figure id="state_${e.i}"><a href="#provinces_${e.i}"><figcaption>${e.fullName}</figcaption>${X(t,200)}</a></figure>`}).join(``)}</div>`,s=t.map(e=>{let t=n.filter(t=>t.state===e.i),r=t.map(e=>{let t=b(`provinceCOA${e.i}`);return`<figure id="province_${e.i}"><a href="#burgs_${e.i}"><figcaption>${e.fullName}</figcaption>${X(t,200)}</a></figure>`}).join(``);return t.length?`<div id="provinces_${e.i}">${a}<h2>${e.fullName} provinces</h2>${r}</div>`:``}).join(``),c=t.map(e=>{let t=i.filter(t=>t.state===e.i),r=n.filter(t=>t.state===e.i).map(e=>{let n=t.filter(t=>pack.cells.province[t.cell]===e.i),r=n.map(e=>{let t=y(`burgCOA${e.i}`);return t?`<figure id="burg_${e.i}"><figcaption>${e.name}</figcaption>${X(t,200)}</figure>`:``}).join(``);return n.length?`<div id="burgs_${e.i}">${a}<h2>${e.fullName} burgs</h2>${r}</div>`:``}).join(``),o=t.filter(e=>!pack.cells.province[e.cell]).map(e=>{let t=y(`burgCOA${e.i}`);return t?`<figure id="burg_${e.i}"><figcaption>${e.name}</figcaption>${X(t,200)}</figure>`:``}).join(``);return o&&(r+=`<div><h2>${e.fullName} burgs under direct control</h2>${o}</div>`),r}).join(``),l=i.filter(e=>!e.state),u=l.length?`<div><h2>${r(`Independent burgs`)}</h2>${l.map(e=>{let t=y(`burgCOA${e.i}`);return t?`<figure id="burg_${e.i}"><figcaption>${e.name}</figcaption>${X(t,200)}</figure>`:``}).join(``)}</div>`:``,d=`<a href="https://azgaar.github.io/Fantasy-Map-Generator" target="_blank">${r(`Azgaar's Fantasy Map Generator`)}</a>`,f=`<a target="_blank" href="https://github.com/Azgaar/Armoria#license">${r(`the license`)}</a>`,p=`<!DOCTYPE html>
    <html>
      <head>
        <title>${r(`{{map}} Emblems Gallery`,{map:options.map.lore.name})}</title>
      </head>
      <style type="text/css">
        body { margin: 0; padding: 1em; font-family: serif; }
        h1, h2 { font-family: "Forum"; }
        div { width: 100%; max-width: 1018px; margin: 0 auto; border-bottom: 1px solid #ddd; }
        figure { margin: 0 0 2em; display: inline-block; transition: 0.2s; }
        figure:hover { background-color: #f6f6f6; }
        figcaption { text-align: center; margin: 0.4em 0; width: 200px; font-family: "Overlock SC"; }
        address { width: 100%; max-width: 1018px; margin: 0 auto; }
        a { color: black; }
        figure > a { text-decoration: none; }
        div > a { float: right; font-family: var(--monospace); margin-top: 0.8em; }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Forum&family=Overlock+SC" rel="stylesheet" />
      <body>
        <div><h1>${r(`{{map}} Emblems Gallery`,{map:options.map.lore.name})}</h1></div>
        ${o} ${s} ${c} ${u}
        <address>${r(`Generated by {{- generator}}. The tool is free, but images may be copyrighted, see {{- license}}`,{generator:d,license:f})}</address>
      </body>
    </html>`;se(p,`${e}.html`,`text/plain`)}async function Ue(e,t,n){w(r(`Preparing for download...`),!0,`warn`);let i=e.map(e=>h.trigger(`stateCOA${e.i}`,e.coa)),a=t.map(e=>h.trigger(`provinceCOA${e.i}`,e.coa)),o=n.map(e=>h.trigger(`burgCOA${e.i}`,e.coa)),s=[...i,...a,...o];await Promise.allSettled(s),ue()}function We(n){let r=Number(this.getAttribute(`x`))-n.x,i=Number(this.getAttribute(`y`))-n.y;n.on(`drag`,function(e){this.setAttribute(`x`,String(r+e.x)),this.setAttribute(`y`,String(i+e.y))}),n.on(`end`,function(n){let a=Number(this.parentNode.getAttribute(`font-size`))*Number.parseFloat(this.getAttribute(`width`)||`1`)/2,s=Ge(this.parentElement?.id),c=Number(this.dataset.i),l=s&&Number.isInteger(c)?Z(s,c):void 0;if(!s||!l)return;let{width:u,height:d}=options.map.graph,f=e(t(r+n.x+a,2),0,u),p=e(t(i+n.y+a,2),0,d);o.place(`${s}:${c}`,f,p,l.coa.size??null),v(s,c)})}function Ge(e){if(e===`burgEmblems`)return`burg`;if(e===`provinceEmblems`)return`province`;if(e===`stateEmblems`)return`state`}function Z(e,t){let n=e===`burg`?pack.burgs[t]:e===`province`?pack.provinces[t]:pack.states[t];return n?.coa?n:void 0}function Q(e,t){let n=Z(e,t);return n?(M=e,N=`${e}COA${t}`,P=n,!0):!1}function $(){x(`#emblems`).selectAll(`use`).call(ce().on(`drag`,We)).classed(`draggable`,!0)}function Ke(){F?.(),F=void 0,x(`#emblems`).selectAll(`use`).on(`.drag`,null).attr(`class`,null),C.destroy(`emblemEditor`)}var qe={open:R,openDefault:Se};export{qe as EmblemsEditor};
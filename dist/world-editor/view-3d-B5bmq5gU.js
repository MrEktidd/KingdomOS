const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["view-3d-renderer-BBkSbbCM.js","index-J388_yXx.js","rolldown-runtime-COiEfhsA.js","index-Elh14QzF.css","options-model-Cj3O8K4p.js","pack-generator-BfWP9wix.js","notices-DWyx0Rz8.js","node-utils-BA3zRxIe.js","file-utils-CmE_irX5.js","number-Da26Xeod.js","min-CCch3uox.js","color-utils-MHXfGsIt.js","linear-DMtbbU-e.js","charges-XaoNl-VI.js","line-weights-DMXPYRDE.js","divisions-yddbEqou.js","ordinaries-DXI0TOB4.js","shields-QQIBRbRT.js","tinctures-CsgIeV6I.js","dialog-BYT3Byo1.js","layers-D3_jdNGw.js","draw-heightmap-BRP03faT.js","grid-generator-cm7RQFp0.js","production-generator-BjobV-51.js","units-DInzt-GH.js","biomes-generator-BTv9AVJs.js","app-8AGFuk3c.js","viewbox-events-Hxiu3rT6.js","drag-DVHtGrYF.js","highlight-D9-ri4j0.js","zoom-xenRyT_z.js","tooltips-D4kIN3ad.js","environment-BDBII_BV.js","controllers-COq_bdk_.js","registry-CwrTqJ86.js","notes-C3Frhn9X.js","viewbox-events-CPj_OlBb.css","map-history-BpA0BOGb.js","graph-override-D_Dq9qWt.js","fonts-B2BtGxIk.js","file-name-CjjRnvM3.js","platform-C7bJU9gX.js","services-1VYD3jn8.js","canvas-CQTwu-ri.js","added-labels-DsJgS4kH.js","measurers-generator-DazKvylb.js","heightmap-generator-D5tbj616.js","ice-generator-BELtZZ3D.js","temperature-generator-Cji0DqcU.js","journeys-generator-RukuIhy7.js","styles-BNkHuKkw.js","map-restoration-D-c-Glw8.js"])))=>i.map(i=>d[i]);
import{a as e,i as t,r as n}from"./index-J388_yXx.js";import{_n as r,gn as i,mn as ee,n as te}from"./options-model-Cj3O8K4p.js";import{t as a}from"./notices-DWyx0Rz8.js";import{xt as o}from"./layers-D3_jdNGw.js";import{n as ne}from"./file-utils-CmE_irX5.js";import{i as s,r as c}from"./node-utils-BA3zRxIe.js";import{t as l}from"./dialog-BYT3Byo1.js";import{o as u,r as re}from"./tooltips-D4kIN3ad.js";import{t as ie}from"./controllers-COq_bdk_.js";import{t as d}from"./file-name-CjjRnvM3.js";import{n as ae}from"./platform-C7bJU9gX.js";import{t as f}from"./services-1VYD3jn8.js";import{L as oe}from"./app-8AGFuk3c.js";var p=null,m=()=>p?Promise.resolve(p):e(()=>import(`./view-3d-renderer-BBkSbbCM.js`).then(e=>(e.setMapImageSource((e,t)=>f.ExportMap.getMapURL(e,t)),e.setBuildListener(e=>e?g():_()),p=e,e)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),se=(e,n=`viewMesh`)=>m().then(t=>t.create(e,n),()=>(_(),a(t(`Cannot load 3d library`),`error`,4e3),!1)),h=null,g=()=>{h??=re(`${t(`Loading`)}…`)},_=()=>{h?.(),h=null},v=()=>m().then(e=>e.redraw()),y=()=>m().then(e=>e.update()),ce=()=>m().then(e=>e.stop()),le=e=>m().then(t=>t.setSunColor(e)),ue=e=>m().then(t=>t.setScale(e)),de=e=>m().then(t=>t.setResolutionScale(e)),fe=e=>m().then(t=>t.setLightness(e)),pe=(e,t,n)=>m().then(r=>r.setSun(e,t,n)),b=e=>m().then(t=>t.setRotation(e)),x=()=>m().then(e=>e.toggleLabels()),S=()=>m().then(e=>e.toggle3dSubdivision()),C=()=>m().then(e=>e.toggleErosion()),w=e=>m().then(t=>t.setErosionStrength(e)),T=e=>m().then(t=>t.setErosionRiverDepth(e)),E=e=>m().then(t=>t.setErosionDetail(e)),D=e=>m().then(t=>t.setErosionOctaves(e)),O=()=>m().then(e=>e.toggleSatellite()),k=()=>m().then(e=>e.toggleWireframe()),A=()=>m().then(e=>e.toggleSky()),j=e=>m().then(t=>t.setResolution(e)),M=(e,t)=>m().then(n=>n.setColors(e,t)),N=e=>m().then(t=>t.setTimeOfDay(e)),P=async()=>{let e=(await m()).screenshotUrl(),n=document.createElement(`a`);n.download=`${d()}.jpeg`,n.href=e,n.click(),u(ae(t(`Screenshot`)),!0,`success`,7e3)},F=async()=>ne(await(await m()).exportOBJ(),`${d()}.obj`,`text/plain;charset=UTF-8`),I=()=>oe(),L=e=>m().then(t=>t.isCached(e)),R=(e,t,n)=>m().then(r=>r.heightAt(e,t,n));function z(){s(`canvas3d`)&&(ce(),s(`canvas3d`)?.remove(),s(`options3d`)&&l.close(`options3d`),s(`preview3d`)&&l.close(`preview3d`))}function B(){c(`viewMode`).querySelectorAll(`.pressed`).forEach(e=>{e.classList.remove(`pressed`)}),c(`heightmap3DView`).classList.remove(`pressed`),c(`viewStandard`).classList.add(`pressed`),z()}async function V(e){B(),c(`viewStandard`).classList.remove(`pressed`),c(e).classList.add(`pressed`);let n=document.createElement(`canvas`);if(n.id=`canvas3d`,n.dataset.type=e,e===`heightmap3DView`?(n.width=parseFloat(s(`preview3d`)?.style.width??``)||options.map.graph.width/3,n.height=n.width/(options.map.graph.width/options.map.graph.height),n.style.display=`block`):(n.width=o.width,n.height=o.height,n.style.position=`absolute`,n.style.display=`none`),g(),!await se(n,e))return B();n.style.display=`block`,n.onmouseenter=()=>{let e=[t(`Drag to pan`),t(`Scroll to zoom`),t(`Right-click drag to rotate`),t(`O to toggle options`)].join(` • `);+n.dataset.hovered>2?u(``):u(e),n.dataset.hovered=String((n.dataset.hovered|0)+1)},e===`heightmap3DView`?(me(),c(`preview3d`).appendChild(n),l.open(`preview3d`,{title:t(`3D Preview`),resizable:!0,position:{my:`left bottom`,at:`left+10 bottom-20`,of:`svg`},onResize:ge,onClose:he})):document.body.insertBefore(n,c(`optionsContainer`)),H()}function me(){s(`preview3d`)?.remove(),c(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="preview3d" class="dialog stable" style="padding: 0px"></div>`)}function he(){l.destroy(`preview3d`),B()}function ge(){let e=s(`canvas3d`);if(!e)return;let t=c(`preview3d`);e.width=parseFloat(t.style.width),e.height=parseFloat(t.style.height)-2,v()}function H(){s(`options3d`)?l.close(`options3d`):(_e(),l.open(`options3d`,{title:t(`3D mode settings`),width:`fit-content`,position:{my:`right top`,at:`right-30 top+10`,of:`svg`},onClose:ye}),G())}function _e(){s(`options3d`)?.remove();let e=`<div id="options3d" class="dialog stable">
      <div id="options3dMesh" style="display: none">
        <div data-tip="${n(t(`Set map rotation speed`),t(`Set to 0 is you want to toggle off the rotation`))}">
          <div>${t(`Rotation`)}:</div>
          <input id="options3dMeshRotationRange" type="range" min="0" max="10" step=".1" />
          <input id="options3dMeshRotationNumber" type="number" min="0" max="10" step=".1" style="width: 4em" />
        </div>
        <div data-tip="${t(`Set height scale`)}">
          <div>${t(`Height scale`)}:</div>
          <input id="options3dScaleRange" type="range" min="0" max="100" />
          <input id="options3dScaleNumber" type="number" min="0" max="1000" style="width: 4em" />
        </div>
        <div data-tip="${t(`Set scene lightness`)}">
          <div>${t(`Lightness`)}:</div>
          <input id="options3dLightnessRange" type="range" min="0" max="100" />
          <input id="options3dLightnessNumber" type="number" min="0" max="500" style="width: 4em" />
        </div>
        <div data-tip="${t(`Set mesh texture resolution`)}">
          <div>${t(`Texture resolution`)}:</div>
          <select id="options3dMeshSkinResolution" style="width: 10em">
            <option value="512">512x512px</option>
            <option value="1024">1024x1024px</option>
            <option value="2048">2048x2048px</option>
            <option value="4096" selected>4096x4096px</option>
            <option value="8192">8192x8192px</option>
          </select>
        </div>
        <div data-tip="${t(`Quick preset lighting for different times of day`)}" style="margin-top: 0.4em">
          <label>${t(`Time of day`)}:</label>
          <select id="options3dTimeOfDay" style="width: 10em; margin-bottom: 0.3em">
            <option value="custom">${t(`Custom`)}</option>
            <option value="dawn">${t(`Dawn`)}</option>
            <option value="noon" selected>${t(`Noon`)}</option>
            <option value="evening">${t(`Evening`)}</option>
            <option value="night">${t(`Night`)}</option>
          </select>
        </div>
        <div data-tip="${t(`Set sun position (x, y) and color`)}" style="margin-top: 0.4em">
          <label>${t(`Sun position and color`)}:</label>
          <div style="display: flex; gap: 0.2em">
            <input id="options3dSunX" type="number" min="-2500" max="2500" step="100" style="width: 4.7em" />
            <input id="options3dSunY" type="number" min="0" max="5000" step="100" style="width: 4.7em" />
            <input id="options3dSunColor" type="color" style="padding: 0; height: 1.5em; border: none" />
          </div>
        </div>
        <div data-tip="${t(`Toggle 3d labels`)}" style="margin: 0.6em 0 0.3em -0.2em">
          <input id="options3dMeshLabels3d" class="checkbox" type="checkbox" />
          <label for="options3dMeshLabels3d" class="checkbox-label"><i>${t(`Show labels as sprites`)}</i></label>
        </div>
        <div data-tip="${t(`Toggle sky mode`)}" style="margin: 0.6em 0 0.3em -0.2em">
          <input id="options3dMeshSkyMode" class="checkbox" type="checkbox" />
          <label for="options3dMeshSkyMode" class="checkbox-label"><i>${t(`Show sky and extend water`)}</i></label>
        </div>
        <div
          data-tip="${t(`Increases the polygon count to smooth the sharp points. Please note that it can take some time to calculate`)}"
          style="margin: 0.6em 0 0.3em -0.2em"
        >
          <input id="options3dSubdivide" class="checkbox" type="checkbox" />
          <label for="options3dSubdivide" class="checkbox-label"
            ><i>${t(`Smooth geometry`)} <small style="color: darkred">[${t(`slow`)}]</small></i></label
          >
        </div>

        <div
          data-tip="${t(`Texture the terrain as a satellite image. Replaces the standard map texture`)}"
          style="margin: 0.6em 0 0.3em -0.2em"
        >
          <input id="options3dSatellite" class="checkbox" type="checkbox" />
          <label for="options3dSatellite" class="checkbox-label"><i>${t(`Satellite texture`)}</i></label>
        </div>

        <div
          data-tip="${t(`Bake procedural erosion detail into the 3D terrain. Visual only, the map data is not changed`)}"
          style="margin: 0.6em 0 0.3em -0.2em"
        >
          <input id="options3dErosion" class="checkbox" type="checkbox" />
          <label for="options3dErosion" class="checkbox-label"><i>${t(`Erode terrain`)}</i></label>
        </div>

        <div id="options3dErosionSection" style="display: none">
          <div data-tip="${t(`Set eroded mesh detail level (vertices on the long side)`)}">
            <div>${t(`Mesh detail`)}:</div>
            <select id="options3dErosionDetail" style="width: 10em">
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024" selected>1024</option>
              <option value="2048">2048 [${t(`slow`)}]</option>
            </select>
          </div>

          <div data-tip="${t(`Set the strength of erosion gullies and ridges`)}">
            <div>${t(`Gully strength`)}:</div>
            <input id="options3dErosionStrengthRange" type="range" min="0" max="100" />
            <input id="options3dErosionStrengthNumber" type="number" min="0" max="100" style="width: 4em" />
          </div>

          <div data-tip="${t(`Set how deep the valleys are carved along the rivers`)}">
            <div>${t(`River valleys`)}:</div>
            <input id="options3dErosionRiverDepthRange" type="range" min="0" max="100" />
            <input id="options3dErosionRiverDepthNumber" type="number" min="0" max="100" style="width: 4em" />
          </div>

          <div data-tip="${t(`Set the number of erosion detail layers. More octaves add finer gullies`)}">
            <div>${t(`Detail octaves`)}:</div>
            <select id="options3dErosionOctaves" style="width: 6em">
              <option value="1">1</option>
              <option value="2" selected>2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div data-tip="${t(`Toggle wireframe mode`)}" style="margin: 0.6em 0 0.3em -0.2em">
          <input id="options3dMeshWireframeMode" class="checkbox" type="checkbox" />
          <label for="options3dMeshWireframeMode" class="checkbox-label"><i>${t(`Show wireframe`)}</i></label>
        </div>
        <div data-tip="${t(`Set sky and water color`)}" id="options3dColorSection" style="display: none">
          <span>${t(`Sky`)}:</span
          ><input
            id="options3dMeshSky"
            type="color"
            style="width: 4.4em; height: 1em; border: 0; padding: 0; margin: 0 0.2em"
          />
          <span>${t(`Water`)}:</span
          ><input
            id="options3dMeshWater"
            type="color"
            style="width: 4.4em; height: 1em; border: 0; padding: 0; margin: 0 0.2em"
          />
        </div>
      </div>
      <div id="options3dGlobe" style="display: none">
        <div data-tip="${n(t(`Set globe rotation speed`),t(`Set to 0 is you want to toggle off the rotation`))}">
          <div>${t(`Rotation`)}:</div>
          <input id="options3dGlobeRotationRange" type="range" min="0" max="10" step=".1" />
          <input id="options3dGlobeRotationNumber" type="number" min="0" max="10" step=".1" style="width: 4em" />
        </div>
        <div data-tip="${t(`Set globe texture resolution`)}">
          <div>${t(`Texture resolution`)}:</div>
          <select id="options3dGlobeResolution" style="width: 5em">
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="4">4x</option>
            <option value="8">8x</option>
          </select>
        </div>
        <div
          data-tip="${t(`Equirectangular projection is used: distortion is maximum on poles. Use map with aspect ratio 2:1 for best result`)}"
          style="font-style: italic; margin: 0.2em 0"
        >
          ${t(`Equirectangular projection is used`)}
        </div>
      </div>
      <div id="options3dBottom" style="margin-top: 0.2em">
        <button id="options3dUpdate" data-tip="${t(`Update the scene`)}" class="icon-cw"></button>
        <button
          id="options3dConfigureWorld"
          data-tip="${t(`Configure world and map size and climate settings`)}"
          class="icon-globe"
        ></button>
        <button id="options3dSave" data-tip="${t(`Save screenshot of the 3d scene`)}" class="icon-button-screenshot"></button>
        <button id="options3dOBJSave" data-tip="${t(`Save OBJ file of the 3d scene`)}" class="icon-download"></button>
        <button id="options3dReset" data-tip="${t(`Reset to default`)}" class="icon-ccw"></button>
      </div>
    </div>`;c(`dialogs`).insertAdjacentHTML(`beforeend`,e),c(`options3dUpdate`).addEventListener(`click`,()=>void y()),c(`options3dConfigureWorld`).addEventListener(`click`,()=>ie.WorldConfigurator.open()),c(`options3dSave`).addEventListener(`click`,()=>void P()),c(`options3dOBJSave`).addEventListener(`click`,()=>void F()),c(`options3dReset`).addEventListener(`click`,ve),c(`options3dScaleRange`).addEventListener(`input`,q),c(`options3dScaleNumber`).addEventListener(`change`,q),c(`options3dLightnessRange`).addEventListener(`input`,J),c(`options3dLightnessNumber`).addEventListener(`change`,J),c(`options3dSunX`).addEventListener(`change`,Y),c(`options3dSunY`).addEventListener(`change`,Y),c(`options3dMeshSkinResolution`).addEventListener(`change`,Se),c(`options3dMeshRotationRange`).addEventListener(`input`,X),c(`options3dMeshRotationNumber`).addEventListener(`change`,X),c(`options3dGlobeRotationRange`).addEventListener(`input`,X),c(`options3dGlobeRotationNumber`).addEventListener(`change`,X),c(`options3dMeshLabels3d`).addEventListener(`change`,()=>void x()),c(`options3dMeshSkyMode`).addEventListener(`change`,Oe),c(`options3dMeshSky`).addEventListener(`input`,$),c(`options3dMeshWater`).addEventListener(`input`,$),c(`options3dGlobeResolution`).addEventListener(`change`,ke),c(`options3dMeshWireframeMode`).addEventListener(`change`,()=>void k()),c(`options3dSunColor`).addEventListener(`input`,Ce),c(`options3dSubdivide`).addEventListener(`change`,()=>void S()),c(`options3dTimeOfDay`).addEventListener(`change`,xe),c(`options3dErosion`).addEventListener(`change`,we),c(`options3dErosionDetail`).addEventListener(`change`,Te),c(`options3dErosionStrengthRange`).addEventListener(`change`,Z),c(`options3dErosionStrengthNumber`).addEventListener(`change`,Z),c(`options3dErosionRiverDepthRange`).addEventListener(`change`,Q),c(`options3dErosionRiverDepthNumber`).addEventListener(`change`,Q),c(`options3dErosionOctaves`).addEventListener(`change`,De),c(`options3dSatellite`).addEventListener(`change`,Ee)}function ve(e){l.confirm({event:e,confirm:t(`Reset`),onConfirm:()=>{let e=s(`canvas3d`)?.dataset.type??`viewMesh`;te.set(e=>e.app.threeD=structuredClone(ee)),V(e)}})}function ye(){l.destroy(`options3d`)}function U(e,t){c(e).value=String(t)}function W(e,t){c(e).checked=t}function G(){let e=options.app.threeD,t=s(`canvas3d`)?.dataset.type===`viewGlobe`;c(`options3dMesh`).style.display=t?`none`:`block`,c(`options3dGlobe`).style.display=t?`block`:`none`,c(`options3dOBJSave`).style.display=t?`none`:`inline-block`,U(`options3dScaleRange`,e.scale),U(`options3dScaleNumber`,e.scale),U(`options3dLightnessRange`,e.lightness*100),U(`options3dLightnessNumber`,e.lightness*100),U(`options3dSunX`,e.sun.x),U(`options3dSunY`,e.sun.y),U(`options3dMeshRotationRange`,e.rotateMesh),U(`options3dMeshRotationNumber`,e.rotateMesh),U(`options3dMeshSkinResolution`,e.resolutionScale),U(`options3dGlobeRotationRange`,e.rotateGlobe),U(`options3dGlobeRotationNumber`,e.rotateGlobe),W(`options3dMeshLabels3d`,!!e.labels3d),W(`options3dMeshSkyMode`,!!e.extendedWater),c(`options3dColorSection`).style.display=e.extendedWater?`block`:`none`,U(`options3dMeshSky`,e.skyColor),U(`options3dMeshWater`,e.waterColor),U(`options3dGlobeResolution`,i(e.resolutionScale)),U(`options3dSunColor`,e.sunColor),W(`options3dSubdivide`,!!e.subdivide),c(`options3dSubdivide`).disabled=!!e.erosion,W(`options3dErosion`,!!e.erosion),c(`options3dErosionSection`).style.display=e.erosion?`block`:`none`,U(`options3dErosionDetail`,e.erosionDetail),U(`options3dErosionStrengthRange`,e.erosionStrength),U(`options3dErosionStrengthNumber`,e.erosionStrength),U(`options3dErosionRiverDepthRange`,e.erosionRiverDepth),U(`options3dErosionRiverDepthNumber`,e.erosionRiverDepth),U(`options3dErosionOctaves`,e.erosionOctaves),W(`options3dSatellite`,!!e.satellite),W(`options3dMeshWireframeMode`,!!e.wireframe),be()}function be(){let e=c(`options3dTimeOfDay`),t=options.app.threeD,n=`custom`;for(let[e,i]of Object.entries(r))if(i.sun.x===t.sun.x&&i.sun.y===t.sun.y&&i.sun.z===t.sun.z&&i.sunColor===t.sunColor&&Math.abs(i.lightness-t.lightness)<.05){n=e;break}e.value=n}function K(){let e=c(`options3dTimeOfDay`);e.value!==`custom`&&(e.value=`custom`)}function xe(){this.value!==`custom`&&(N(this.value),G())}function q(){U(`options3dScaleRange`,this.value),U(`options3dScaleNumber`,this.value),ue(+this.value)}function Se(){U(`options3dMeshSkinResolution`,this.value),de(+this.value)}function J(){U(`options3dLightnessRange`,this.value),U(`options3dLightnessNumber`,this.value),fe(this.value/100),K()}function Ce(){le(c(`options3dSunColor`).value),K()}function Y(){pe(+c(`options3dSunX`).value,+c(`options3dSunY`).value),K()}function X(){let e=this.nextElementSibling||this.previousElementSibling;e&&(e.value=this.value),b(+this.value)}function we(){let e=!options.app.threeD.erosion;c(`options3dErosionSection`).style.display=e?`block`:`none`,c(`options3dSubdivide`).disabled=e,e&&u(t(`Baking eroded terrain...`),!1,`warn`,4e3),C()}function Te(){E(+this.value)}function Z(){U(`options3dErosionStrengthRange`,this.value),U(`options3dErosionStrengthNumber`,this.value),w(+this.value)}function Q(){U(`options3dErosionRiverDepthRange`,this.value),U(`options3dErosionRiverDepthNumber`,this.value),T(+this.value)}function Ee(){options.app.threeD.satellite||u(t(`Baking satellite texture...`),!1,`warn`,4e3),O()}function De(){D(+this.value)}function Oe(){let e=options.app.threeD.extendedWater;c(`options3dColorSection`).style.display=e?`none`:`block`,A()}function $(){M(c(`options3dMeshSky`).value,c(`options3dMeshWater`).value)}function ke(){j(+this.value)}var Ae={open:V,enterStandard:B,toggleOptions:H,redraw:v,update:y,isOn:I,isCached:L,heightAt:R};export{Ae as View3d};
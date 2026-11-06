import{i as e}from"./rolldown-runtime-COiEfhsA.js";import{i as t,r as n}from"./index-DfkEhdNk.js";import{Sn as r,c as i,n as a,tt as o,yn as s}from"./options-model-baH24lwc.js";import{_ as c}from"./pack-generator-itXjN9Pv.js";import{S as l}from"./file-utils-gMYr_JNq.js";import{i as u,n as d}from"./draw-heightmap-Dbhc88iA.js";import{i as f,r as p}from"./node-utils-BD0SusgU.js";import{t as m}from"./dialog-BW-Ar0Nf.js";import{t as h}from"./controllers-DmSw-ZkU.js";import{t as g}from"./grid-generator-Bw7amUrQ.js";import{t as _}from"./heightmap-generator-CoN5wc8x.js";import{m as v,w as y}from"./app-DaOF0_oJ.js";var b=e(c()),x=l(),S=null,C=null;function w(){m.closeAll(`.stable`),S=M(),C=N(),E(),D(),O(),A(options.generation.template),p(`heightmapSelection`).style.setProperty(`--preview-aspect-ratio`,`${S.width}/${S.height}`),L(),m.open(`heightmapSelection`,{title:t(`Select Heightmap`),position:{my:`center`,at:`center`,of:`svg`},onClose:T,buttons:[{label:t(`Cancel`),onClick:()=>{m.close(`heightmapSelection`)}},{label:t(`Select`),onClick:()=>{let e=k();e&&(a.set(t=>t.generation.template=e),y.syncOptionInputs(),i.set(`template`,options.generation.template),m.close(`heightmapSelection`))}},{label:t(`New Map`),onClick:()=>{let e=k();if(!e)return;a.set(t=>t.generation.template=e),y.syncOptionInputs(),i.set(`template`,options.generation.template);let t=j(),n=C,r=S;m.close(`heightmapSelection`),n&&r&&y.regeneratePrompt({seed:t,graph:n,...r})}}]})}function T(){m.destroy(`heightmapSelection`),f(`heightmapSelectionStyle`)?.remove(),C=null,S=null,_.clearData()}function E(){if(f(`heightmapSelectionStyle`))return;let e=document.createElement(`style`);e.id=`heightmapSelectionStyle`,e.textContent=`
    div.dialog > div.heightmap-selection {
      width: 70vw;
      height: 70vh;
    }

    .heightmap-selection_container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      grid-gap: 6px;
    }

    @media (max-width: 600px) {
      .heightmap-selection_container {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        grid-gap: 4px;
      }
    }

    @media (min-width: 2000px) {
      .heightmap-selection_container {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 8px;
      }
    }

    .heightmap-selection_options {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .heightmap-selection_options > div:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-self: start;
      justify-items: start;
    }

    @media (max-width: 600px) {
      .heightmap-selection_options {
        grid-template-columns: 3fr 1fr;
      }

      .heightmap-selection_options > div:first-child {
        display: block;
      }
    }

    .heightmap-selection_options > div:last-child {
      justify-self: end;
    }

    .heightmap-selection article {
      padding: 4px;
      border-radius: 8px;
      transition: all 0.1s ease-in-out;
      filter: drop-shadow(1px 1px 4px #999);
    }

    .heightmap-selection article:hover {
      background-color: #ddd;
      filter: drop-shadow(1px 1px 8px #999);
      cursor: pointer;
    }

    .heightmap-selection article.selected {
      background-color: #ccc;
      outline: 1px solid var(--dark-solid);
      filter: drop-shadow(1px 1px 8px #999);
    }

    .heightmap-selection article > div {
      display: flex;
      justify-content: space-between;
      padding: 2px 1px;
    }

    .heightmap-selection article > img {
      width: 100%;
      aspect-ratio: var(--preview-aspect-ratio);
      border-radius: 8px;
      object-fit: fill;
    }

    .heightmap-selection article .regeneratePreview {
      outline: 1px solid #bbb;
      padding: 1px 3px;
      border-radius: 4px;
      transition: all 0.1s ease-in-out;
    }

    .heightmap-selection article .regeneratePreview:hover {
      outline: 1px solid #666;
    }

    .heightmap-selection article .regeneratePreview:active {
      outline: 1px solid #333;
      color: #000;
      transform: rotate(45deg);
    }
  `,document.head.appendChild(e)}function D(){m.destroy(`heightmapSelection`);let e=C,n=S;if(!e||!n)return;let r=u.names().map(e=>`<option value="${e}">${o[e]??e}</option>`).join(``),i=`<div id="heightmapSelection" class="dialog stable">
    <div class="heightmap-selection">
      <section data-tip="${t(`Select heightmap template – template provides unique, but similar-looking maps on generation`)}">
        <header><h1>${t(`Heightmap templates`)}</h1></header>
        <div class="heightmap-selection_container"></div>
      </section>
      <section data-tip="${t(`Select precreated heightmap – it will be the same for each map`)}">
        <header><h1>${t(`Precreated heightmaps`)}</h1></header>
        <div class="heightmap-selection_container"></div>
      </section>
      <section>
        <header><h1>${t(`Options`)}</h1></header>
        <div class="heightmap-selection_options">
          <div>
            <label data-tip="${t(`Rerender all preview images`)}" class="checkbox-label" id="heightmapSelectionRedrawPreview">
              <i class="icon-cw"></i>
              ${t(`Redraw preview`)}
            </label>
            <div>
              <input id="heightmapSelectionRenderOcean" class="checkbox" type="checkbox" />
              <label data-tip="${t(`Draw heights of water cells`)}" for="heightmapSelectionRenderOcean" class="checkbox-label">${t(`Render ocean heights`)}</label>
            </div>
            <div data-tip="${t(`Color scheme used for heightmap preview`)}">
              ${t(`Color scheme`)}
              <select id="heightmapSelectionColorScheme">${r}</select>
            </div>
          </div>
          <div>
            <button data-tip="${t(`Template Editor`)}" data-tool="templateEditor" id="heightmapSelectionEditTemplates">${t(`Edit Templates`)}</button>
            <button data-tip="${t(`Image Converter`)}" data-tool="imageConverter" id="heightmapSelectionImportHeightmap">${t(`Import Heightmap`)}</button>
          </div>
        </div>
      </section>
    </div>
  </div>`;p(`dialogs`).insertAdjacentHTML(`beforeend`,i);let a=document.getElementsByClassName(`heightmap-selection_container`);a[0].innerHTML=Object.keys(s).map(r=>{let i=s[r].name;return Math.random=(0,b.default)(x),`<article data-id="${r}" data-seed="${x}">
        <img src="${z(_.fromTemplate(e,r,n))}" alt="${i}" />
        <div>
          ${i}
          <span data-tip="${t(`Regenerate preview`)}" class="icon-cw regeneratePreview"></span>
        </div>
      </article>`}).join(``),a[1].innerHTML=Object.keys(v).map(e=>{let t=v[e].name;return F(e),`<article data-id="${e}" data-seed="${x}">
        <img alt="${t}" />
        <div>${t}</div>
      </article>`}).join(``)}function O(){p(`heightmapSelection`).addEventListener(`click`,e=>{let t=e.target,n=t.closest(`#heightmapSelection article`);if(!n)return;let r=n.dataset.id;r&&(t.matches(`span.icon-cw`)&&I(n,r),A(r))}),p(`heightmapSelectionRenderOcean`).addEventListener(`change`,L),p(`heightmapSelectionColorScheme`).addEventListener(`change`,L),p(`heightmapSelectionRedrawPreview`).addEventListener(`click`,L),p(`heightmapSelectionEditTemplates`).addEventListener(`click`,e=>R(e.currentTarget)),p(`heightmapSelectionImportHeightmap`).addEventListener(`click`,e=>R(e.currentTarget))}function k(){return p(`heightmapSelection`).querySelector(`.selected`)?.dataset?.id}function A(e){let t=p(`heightmapSelection`);t.querySelector(`.selected`)?.classList?.remove(`selected`),t.querySelector(`[data-id="${e}"]`)?.classList?.add(`selected`)}function j(){return p(`heightmapSelection`).querySelector(`.selected`)?.dataset?.seed}function M(){let{width:e,height:t,density:n,sampling:i,jitter:a}=options.generation.graph;return{width:e,height:t,points:r(n),sampling:i,jitter:a}}function N(){let e=S??M(),t=options.map.graph;if([`width`,`height`,`points`,`sampling`,`jitter`].some(n=>t[n]!==e[n]))return g.generate(x,e);let n=structuredClone(grid);return g.resetHeights(n),n}function P(e){let t=C,n=S;if(!t||!n)return;let r=z(_.fromTemplate(t,e,n));p(`heightmapSelection`).querySelector(`[data-id="${e}"]`)?.querySelector(`img`)?.setAttribute(`src`,r)}async function F(e){let t=C,n=S;if(!t||!n)return;let r=await _.fromPrecreated(t,e,n);if(t!==C)return;let i=z(r);p(`heightmapSelection`).querySelector(`[data-id="${e}"]`)?.querySelector(`img`)?.setAttribute(`src`,i)}function I(e,t){if(!C)return;g.resetHeights(C);let n=l();e.dataset.seed=n,Math.random=(0,b.default)(n),P(t)}function L(){if(!C)return;g.resetHeights(C);let e=p(`heightmapSelection`).querySelectorAll(`article`);for(let t of e){let{id:e,seed:n}=t.dataset;e&&n&&(Math.random=(0,b.default)(n),e in s?P(e):F(e))}}function R(e){let r=e.dataset.tool;r&&m.confirm({title:e.dataset.tip??``,message:n(t(`Opening the tool will erase the current map`),t(`Are you sure you want to proceed?`)),confirm:t(`Continue`),onConfirm:()=>h.HeightmapEditor.open({mode:`erase`,tool:r})})}function z(e){if(!C||!S||!e?.length)return``;let t=u.get(p(`heightmapSelectionColorScheme`).value),n=p(`heightmapSelectionRenderOcean`).checked;return d({heights:e,raster:g.getRaster(C,S.width,S.height),scheme:t,renderOcean:n})}var B={open:w};export{B as HeightmapSelection};
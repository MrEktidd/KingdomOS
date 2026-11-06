import{E as e,i as t,r as n}from"./index-J388_yXx.js";import{F as r,m as i}from"./options-model-Cj3O8K4p.js";import{t as a}from"./pack-generator-BfWP9wix.js";import{ct as o,t as s,tt as c}from"./layers-D3_jdNGw.js";import{a as l,r as u,z as d}from"./node-utils-BA3zRxIe.js";import{t as f}from"./csv-DubBayaC.js";import{t as p}from"./dialog-BYT3Byo1.js";import{t as m}from"./viewbox-events-Hxiu3rT6.js";import{o as h,t as g}from"./tooltips-D4kIN3ad.js";import{t as _}from"./controllers-COq_bdk_.js";import{s as v}from"./production-generator-BjobV-51.js";import{r as y}from"./units-DInzt-GH.js";import{c as b,l as x,s as S}from"./app-8AGFuk3c.js";import{a as C,i as w,n as T,r as E}from"./table-DIPbIlqo.js";var D=0,O=`marketOverview`,k={my:`right top`,at:`right-10 top+10`,of:`svg`},A=[{key:`icon`,width:`2.5em`,permanent:!0},{key:`good`,label:t(`Good`),width:`8em`,permanent:!0,sortBy:e=>e.good,sortType:`alpha`},{key:`stock`,label:t(`Stock`),width:`5em`,sortBy:e=>e.stock,defaultSort:`desc`},{key:`price`,label:t(`Price`),width:`5em`,permanent:!0,sortBy:e=>e.price}],j=E({getData:R,onUpdate:z});function M(e){if(i.retry(`goods`),options.app.mode)return;let r=v.get(e);r?(D=e,p.closeAll(`#${O}, .stable`),N(),j.reset(),P(r),p.open(O,{title:t(`Market Stock: {{- market}}`,{market:v.getName(r)}),width:`auto`,onClose:U,position:k})):h(n(t(`Invalid market`),t(`The selected market does not exist`)),!0,`error`,5e3)}function N(){p.destroy(O);let e=`<div id="${O}" class="dialog stable editorDialog">
      ${w({dialogId:O,columns:A})}
      <div id="marketOverviewGoodsBody" class="table" style="max-height:40em"></div>
      <div id="marketOverviewSummary" class="totalLine"></div>
      <div id="marketOverviewNameLine" style="display: flex; align-items: center; margin-bottom: 0.4em">
        <div class="label">${t(`Name`)}:</div>
        <input
          id="marketOverviewName"
          data-tip="${t(`Type to rename the market. Clear the field to reset to the default name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em; margin-left: 0.3em;"
        />
        <span
          id="marketOverviewNameReset"
          data-tip="${t(`Reset to the default name (center burg name)`)}"
          class="icon-ccw pointer"
          style="margin-left: 0.3em"
        ></span>
      </div>
      <div id="marketOverviewInfo" style="margin-bottom: 0.3em"></div>
      <div id="marketOverviewBottom">
        <button id="marketOverviewRefresh" data-tip="${t(`Refresh`)}" class="icon-cw"></button>
        <button id="marketOverviewOpenDeals" data-tip="${t(`View market deals`)}" class="icon-list-bullet"></button>
        ${x(`marketOverviewLegend`,t(`Edit free text notes (legend)`))}
        <button
          id="marketOverviewRelocate"
          data-tip="${t(`Relocate market. Click on a burg on the map to move the market center`)}"
          class="icon-map-pin"
        ></button>
        <button id="marketOverviewExport" data-tip="${t(`Save data as a CSV file`)}" class="icon-download"></button>
      </div>
  </div>`;u(`dialogs`).insertAdjacentHTML(`beforeend`,e),S(O,j.reset),T({dialogId:O,columns:A,onUpdate:()=>p.update(O,{width:`fit-content`,position:k})}),u(`marketOverviewRefresh`).addEventListener(`click`,j.refresh),u(`marketOverviewExport`).addEventListener(`click`,H),u(`marketOverviewOpenDeals`).addEventListener(`click`,()=>_.MarketDealsOverview.open(D)),u(`marketOverviewRelocate`).addEventListener(`click`,B),u(`marketOverviewLegend`).addEventListener(`click`,F),u(`marketOverviewName`).addEventListener(`input`,I),u(`marketOverviewNameReset`).addEventListener(`click`,L)}function P(e){let t=u(`marketOverviewName`);t.value=e.name||``,t.placeholder=pack.burgs[e.centerBurgId]?.name||`Market ${e.i}`}function F(){_.NotesEditor.open({type:`market`,id:D})}function I(){let e=v.get(D);e&&(v.rename(e.i,this.value),p.update(`marketOverview`,{title:t(`Market Stock: {{- market}}`,{market:v.getName(e)})}))}function L(){let e=v.get(D);e&&(v.rename(e.i,``),u(`marketOverviewName`).value=``,p.update(`marketOverview`,{title:t(`Market Stock: {{- market}}`,{market:v.getName(e)})}))}function R(){let e=v.get(D);if(!e)return h(n(t(`Invalid market`),t(`The selected market does not exist`)),!0,`error`,5e3),[];let i=pack.burgs[e.centerBurgId];if(!i||i.removed)return h(n(t(`Invalid market`),t(`The selected market has no center burg`)),!0,`error`,5e3),[];let a=Object.entries(e.goods).flatMap(([e,t])=>{let n=r.get(+e);return n?[{goodId:+e,good:n.name,stock:t.stock,price:t.price}]:[]});return b(O,a,A)}function z(n){let i=v.get(D);if(!i)return;let a=n.rows.map(n=>{let i=r.get(n.goodId);return`<div class="states marketGood"
      data-good="${i.name}"
      data-stock="${e(n.stock,2)}"
      data-price="${e(n.price,2)}">
      <svg data-col="icon" data-tip="${t(`Good icon`)}" width="2em" height="2em" class="goodIcon">
        ${c(i)}
      </svg>
      <div data-col="good" data-tip="${t(`Name`)}" class="goodName">${i.name}</div>
      <div data-col="stock" data-tip="${t(`Good stock`)}" class="marketGoodStock">${e(n.stock,2)}</div>
      <div data-col="price" data-tip="${t(`Good price`)}" class="marketGoodPrice">${y(n.price)}</div>
    </div>`});u(`marketOverviewGoodsBody`).innerHTML=a.join(``)||t(`No goods available`);let s=pack.burgs[i.centerBurgId],l=pack.states[s?.state||0],d=`stateCOA${l.i}`;l&&o.trigger(d,l.coa),u(`marketOverviewInfo`).innerHTML=`<svg class="coaIcon" viewBox="0 0 200 200"><use href="#${d}"></use></svg><b>${t(`Owner`)}:</b> ${l.fullName||l.name}`;let f=pack.burgs.filter(e=>!e.removed&&e.market===i.i),m=n.all.reduce((e,t)=>e+t.stock,0);u(`marketOverviewSummary`).innerHTML=`
    <div style="margin-left:5px">${t(`Cells`)}: ${pack.cells.market.reduce((e,t)=>e+ +(t===i.i),0)}</div>
    <div style="margin-left:12px">${t(`Burgs`)}: ${f.length}</div>
    <div data-col="stock" style="margin-left:12px">${t(`Stock`)}: ${e(m,2)}</div>`,C(u(`marketOverviewSummary`),n,j.goto),p.update(O,{width:`fit-content`,position:k})}function B(){let e=u(`marketOverviewRelocate`);e.classList.toggle(`pressed`),e.classList.contains(`pressed`)?(d(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,V),h(t(`Click on a burg on the map to relocate the market center`),!0)):(g(),m())}function V(e){let n=v.get(D);if(!n)return;let[r,i]=l(e,this),o=a.findCell(r,i);if(o===void 0)return;let c=pack.cells.burg[o],u=pack.burgs[c];!c||!u||u.removed?h(t(`No valid burg in this cell. Click on a cell with a burg`),!1,`error`):c===n.centerBurgId?h(t(`This burg is already a market center`),!1,`error`):pack.markets.some(e=>e.centerBurgId===c)?h(t(`This burg is already a center of another market`),!1,`error`):v.relocateMarket(D,c)&&(B(),s.draw(`markets`),P(n),p.update(`marketOverview`,{title:t(`Market Stock: {{- market}}`,{market:v.getName(n)})}),j.refresh())}function H(){let t=v.get(D);if(!t)return;let n=Object.entries(t.goods).flatMap(([t,n])=>{let i=r.get(Number(t));if(!i)return[];let a=e(v.customerBuyPrice(n.price),2),o=e(v.customerSellPrice(n.price),2);return[[i.name,e(n.stock,2),a,o]]});f.download(`Market`,[`Good`,`Stock`,`Buy Price`,`Sell Price`],n)}function U(){u(`marketOverviewRelocate`).classList.contains(`pressed`)&&B(),p.destroy(O)}var W={open:M};export{W as MarketOverview};
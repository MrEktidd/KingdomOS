import{E as e,i as t,r as n}from"./index-DfkEhdNk.js";import{F as r,m as i}from"./options-model-baH24lwc.js";import{tt as a}from"./layers-DJ8BJ3Zy.js";import{r as o}from"./node-utils-BD0SusgU.js";import{t as s}from"./csv-CfLd6KH6.js";import{n as c,t as l}from"./dialog-BW-Ar0Nf.js";import{o as u}from"./tooltips-BSJdaB-v.js";import{s as d}from"./production-generator-6t0nz-yt.js";import{r as f}from"./units-S5RZj9IM.js";import{d as p}from"./zoom-U9bkgxPn.js";import{c as m,s as h}from"./app-DaOF0_oJ.js";import{a as g,i as _,n as v,r as y}from"./table-DSOgM2sf.js";var b=0,x,S=`marketDeals`,C={my:`right top`,at:`right bottom+10`,of:`#marketOverview`},w=[{key:`icon`,width:`2em`,permanent:!0},{key:`good`,label:t(`Good`),width:`6.8em`,permanent:!0,sortBy:e=>r.get(e.good)?.name??``,sortType:`alpha`},{key:`direction`,label:t(`Type`),width:`5em`,sortBy:e=>N(e,b),sortType:`alpha`},{key:`counterparty`,label:t(`Counterparty`),width:`8em`,sortBy:e=>I(e)?.name??``,sortType:`alpha`},{key:`units`,label:t(`Units`),width:`5em`,sortBy:e=>e.units},{key:`income`,label:t(`Income`),width:`5em`,permanent:!0,sortBy:e=>L(e,b)}],T=y({getData:k,onUpdate:A});function E(e){i.retry(`goods`);let r=d.get(e);r?(x=c.get(S,`filters`,()=>({scope:`all`})),[`all`,`local`,`global`].includes(x.scope)||(x.scope=`all`),c.set(S,`filters`,x),b=e,D(),o(`marketDealsFilter`).value=x.scope,T.reset(),l.open(S,{title:t(`{{- market}} Market Deals`,{market:d.getName(r)}),position:C,onClose:O})):u(n(t(`Invalid market`),t(`The selected market does not exist`)),!0,`error`,5e3)}function D(){l.destroy(S);let e=`<div id="${S}" class="dialog stable editorDialog">
      <div>
        ${_({dialogId:S,columns:w})}
        <div id="marketDealsBody" class="table" style="max-height:30em"></div>

        <div id="marketDealsFooter" class="totalLine">
          <div style="margin-left: 5px" data-tip="${t(`Deals count`)}">${t(`Deals`)}: <span id="marketDealsFooterDeals">0</span></div>
          <div data-col="income" style="margin-left: 12px" data-tip="${t(`Net flow for this market`)}">${t(`Net Flow`)}: <span id="marketDealsFooterNet">🟡 0</span></div>
        </div>

        <div id="marketDealsBottom">
          <button id="marketDealsRefresh" data-tip="${t(`Refresh`)}" class="icon-cw"></button>
          <button id="marketDealsExport" data-tip="${t(`Save data as a CSV file`)}" class="icon-download"></button>
          <select id="marketDealsFilter" data-tip="${t(`Filter deals by scope`)}" style="margin-left: 8px">
            <option value="all">${t(`All`)}</option>
            <option value="local">${t(`Local`)}</option>
            <option value="global">${t(`Global`)}</option>
          </select>
        </div>
      </div>
  </div>`;o(`dialogs`).insertAdjacentHTML(`beforeend`,e),h(S,T.reset),v({dialogId:S,columns:w,onUpdate:()=>l.update(S,{width:`fit-content`,position:C})}),o(`marketDealsRefresh`).addEventListener(`click`,T.refresh),o(`marketDealsExport`).addEventListener(`click`,R),o(`marketDealsBody`).addEventListener(`click`,e=>{let t=e.target.closest(`.marketDealParty`)?.closest(`.marketDeal`)?.dataset.id,n=pack.deals.find(e=>e.i===Number(t));if(!n)return;let r=I(n);r&&p(r.x,r.y,8,2e3)}),o(`marketDealsFilter`).addEventListener(`change`,e=>{x.scope=e.target.value,c.set(S,`filters`,x),T.reset()})}function O(){l.destroy(S)}function k(){if(!d.get(b))return u(n(t(`Invalid market`),t(`The selected market does not exist`)),!0,`error`,5e3),[];let e=j(pack.deals,b).filter(e=>{if(x.scope===`all`)return!0;let t=P(e,b);return x.scope===`local`?t.type===`burg`:t.type===`market`});return m(S,e,w)}function A(e){let n=e.rows.map(F).join(``),r=e.all.reduce((e,t)=>e+L(t,b),0);o(`marketDealsBody`).innerHTML=n||t(`No market deals recorded`),o(`marketDealsFooterDeals`).innerHTML=String(e.all.length),o(`marketDealsFooterNet`).innerHTML=f(r),g(o(`marketDealsFooter`),e,T.goto),l.update(S,{width:`fit-content`,position:C})}function j(e,t){return e.filter(e=>e.sellerType===`market`&&e.seller===t||e.buyerType===`market`&&e.buyer===t)}function M(e,t){return e.sellerType===`market`&&e.seller===t}function N(e,t){return M(e,t)?`out`:`in`}function P(e,t){return M(e,t)?{id:e.buyer,type:e.buyerType}:{id:e.seller,type:e.sellerType}}function F(n){let i=r.get(n.good);if(!i)return``;let o=L(n,b),s=I(n),c=P(n,b),l=N(n,b),u=o>=0?`#2a6`:`#c44`,d=o>=0?`#dff0d8`:`#f2dede`;return`<div class="states marketDeal" data-id="${n.i}" data-good="${i.name}" data-direction="${l}" data-units="${e(n.units,2)}" data-counterparty="${c.type}_${s?.name}" data-income="${o}">
      <svg data-col="icon" data-tip="${t(`Good icon`)}" width="1.3em" height="1.3em" class="goodIcon">
        ${a(i)}
      </svg>
      <div data-col="good" data-tip="${t(`Name`)}" class="goodName">${i.name}</div>
      <div data-col="direction"><span class="marketBadge" style="background:${d}; color:${u}">${l.toUpperCase()}</span></div>
      <div data-col="counterparty" class="marketDealParty pointer" data-tip="${t(`Click to zoom`)}">
        <div class="${c.type===`burg`?`icon-dot-circled`:`icon-store`}" style="display:inline-block; width: 0.8em; ${c.type===`market`?`font-size: 0.85em;`:``}"></div>
        <div style="display:inline-block; width: 6.8em;">${s?.name}</div>
      </div>
      <div data-col="units" class="marketDealUnits">${e(n.units,2)}</div>
      <div data-col="income" class="marketDealIncome" style="color:${u}">${f(o)}</div>
    </div>`}function I(e){let t=P(e,b),n=t.type===`burg`?t.id:d.get(t.id)?.centerBurgId;return n&&pack.burgs[n]||null}function L(t,n){let r=e(t.units*t.price,2);return M(t,n)?r:-r}function R(){if(!d.get(b))return;let t=j(pack.deals,b).flatMap(t=>{let n=r.get(t.good);return n?[[t.i,n.name,N(t,b),I(t)?.name??``,e(t.units,2),e(t.price,2),e(L(t,b),2)]]:[]});s.download(`Market_${b}_Deals`,[`Id`,`Good`,`Type`,`Client`,`Units`,`Price`,`Net`],t)}var z={open:E};export{z as MarketDealsOverview};
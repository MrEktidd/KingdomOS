import{D as e,E as t,i as n}from"./index-DOQT8b0l.js";import{F as r,Mt as i,Nt as a}from"./options-model-DdZ2yl81.js";import{f as o,o as s,p as c}from"./pack-generator-D44ZN0et.js";import{s as l,t as u}from"./linear-DctFuBP5.js";import{A as d,k as f,n as p}from"./file-utils-ChGs_4wd.js";import{t as m}from"./min-CCch3uox.js";import{_ as h}from"./color-utils-CrmZ_4uY.js";import{n as g,r as ee}from"./axis-ChvWZg1j.js";import{B as _,i as v,r as y,z as b}from"./node-utils-B7j8BhBd.js";import{t as x}from"./csv-CWKHeBVB.js";import{t as S}from"./dialog-3wqBPvBH.js";import{o as C}from"./tooltips-Nm9ri5Ws.js";import{s as w,t as T}from"./production-generator-nLWGDzJc.js";import{_ as E,a as D,n as O,o as k,p as A,r as j}from"./units-DeXXwmkZ.js";import{t as M}from"./map-history-Bmty1QtL.js";import{t as N}from"./file-name-CjjRnvM3.js";var P=class extends Map{constructor(e,t=te){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(let[t,n]of e)this.set(t,n)}get(e){return super.get(F(this,e))}has(e){return super.has(F(this,e))}set(e,t){return super.set(I(this,e),t)}delete(e){return super.delete(L(this,e))}};function F({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):n}function I({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function L({_intern:e,_key:t},n){let r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function te(e){return typeof e==`object`&&e?e.valueOf():e}function ne(e,t,...n){return R(e,Array.from,t,n)}function R(e,t,n,r){return(function e(i,a){if(a>=r.length)return n(i);let o=new P,s=r[a++],c=-1;for(let e of i){let t=s(e,++c,i),n=o.get(t);n?n.push(e):o.set(t,[e])}for(let[t,n]of o)o.set(t,e(n,a));return t(o)})(e,0)}function re(e){return b(_(e).call(document.documentElement))}var z=Symbol(`implicit`);function B(){var e=new P,t=[],n=[],r=z;function i(i){let a=e.get(i);if(a===void 0){if(r!==z)return r;e.set(i,a=t.push(i)-1)}return n[a%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new P;for(let r of n)e.has(r)||e.set(r,t.push(r)-1);return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return B(t,n).unknown(r)},l.apply(i,arguments),i}function ie(){var e=B().unknown(void 0),t=e.domain,n=e.range,r=0,i=1,a,o,s=!1,c=0,u=0,d=.5;delete e.unknown;function f(){var e=t().length,l=i<r,f=l?i:r,p=l?r:i;a=(p-f)/Math.max(1,e-c+u*2),s&&(a=Math.floor(a)),f+=(p-f-a*(e-c))*d,o=a*(1-c),s&&(f=Math.round(f),o=Math.round(o));var m=h(e).map(function(e){return f+a*e});return n(l?m.reverse():m)}return e.domain=function(e){return arguments.length?(t(e),f()):t()},e.range=function(e){return arguments.length?([r,i]=e,r=+r,i=+i,f()):[r,i]},e.rangeRound=function(e){return[r,i]=e,r=+r,i=+i,s=!0,f()},e.bandwidth=function(){return o},e.step=function(){return a},e.round=function(e){return arguments.length?(s=!!e,f()):s},e.padding=function(e){return arguments.length?(c=Math.min(1,u=+e),f()):c},e.paddingInner=function(e){return arguments.length?(c=Math.min(1,e),f()):c},e.paddingOuter=function(e){return arguments.length?(u=+e,f()):u},e.align=function(e){return arguments.length?(d=Math.max(0,Math.min(1,e)),f()):d},e.copy=function(){return ie(t(),[r,i]).round(s).paddingInner(c).paddingOuter(u).align(d)},l.apply(f(),arguments)}function V(e,t){if((o=e.length)>1)for(var n=1,r,i,a=e[t[0]],o,s=a.length;n<o;++n)for(i=a,a=e[t[n]],r=0;r<s;++r)a[r][1]+=a[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function H(e){for(var t=e.length,n=Array(t);--t>=0;)n[t]=t;return n}function ae(e,t){return e[t]}function oe(e){let t=[];return t.key=e,t}function se(){var e=c([]),t=H,n=V,r=ae;function i(i){var a=Array.from(e.apply(this,arguments),oe),s,c=a.length,l=-1,u;for(let e of i)for(s=0,++l;s<c;++s)(a[s][l]=[0,+r(e,a[s].key,l,i)]).data=e;for(s=0,u=o(t(a));s<c;++s)a[u[s]].index=s;return n(a,u),a}return i.keys=function(t){return arguments.length?(e=typeof t==`function`?t:c(Array.from(t)),i):e},i.value=function(e){return arguments.length?(r=typeof e==`function`?e:c(+e),i):r},i.order=function(e){return arguments.length?(t=e==null?H:typeof e==`function`?e:c(Array.from(e)),i):t},i.offset=function(e){return arguments.length?(n=e??V,i):n},i}function ce(e,t){if((r=e.length)>0){for(var n,r,i=0,a=e[0].length,o;i<a;++i){for(o=n=0;n<r;++n)o+=e[n][i][1]||0;if(o)for(n=0;n<r;++n)e[n][i][1]/=o}V(e,t)}}function le(e,t){if((c=e.length)>0)for(var n,r=0,i,a,o,s,c,l=e[t[0]].length;r<l;++r)for(o=s=0,n=0;n<c;++n)(a=(i=e[t[n]][r])[1]-i[0])>0?(i[0]=o,i[1]=o+=a):a<0?(i[1]=s,i[0]=s+=a):(i[0]=0,i[1]=a)}var U={states:{label:n(`State`),getId:e=>pack.cells.state[e],getName:X(`states`),getColors:Z(`states`),landOnly:!0},cultures:{label:n(`Culture`),getId:e=>pack.cells.culture[e],getName:X(`cultures`),getColors:Z(`cultures`),landOnly:!0},religions:{label:n(`Religion`),getId:e=>pack.cells.religion[e],getName:X(`religions`),getColors:Z(`religions`),landOnly:!0},provinces:{label:n(`Province`),getId:e=>pack.cells.province[e],getName:X(`provinces`),getColors:Z(`provinces`),landOnly:!0},biomes:{label:n(`Biome`),getId:e=>pack.cells.biome[e],getName:Ee,getColors:De,landOnly:!1},markets:{label:n(`Market`),getId:e=>pack.cells.market[e],getName:Oe,getColors:ke,landOnly:!1},goods:{label:n(`Good`),requires:`good`,getId:(e,t)=>t.good,getName:Ae,getColors:je,landOnly:!1}},W={total_population:{label:n(`Total population`),quantize:e=>Me(e)+$(e),aggregate:e=>t(i(e)),formatTicks:t=>e(t),stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},urban_population:{label:n(`Urban population`),quantize:Me,aggregate:e=>t(i(e)),formatTicks:t=>e(t),stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},rural_population:{label:n(`Rural population`),quantize:$,aggregate:e=>t(i(e)),formatTicks:t=>e(t),stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},area:{label:n(`Land area`),quantize:e=>D(pack.cells.area[e]),aggregate:e=>t(i(e)),formatTicks:t=>`${e(t)} ${k()}`,stringify:e=>`${e.toLocaleString()} ${k()}`,stackable:!0,landOnly:!0},cells:{label:n(`Cells`),hint:n(`Number of land cells`),quantize:()=>1,aggregate:e=>i(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},burgs_number:{label:n(`Burgs`),hint:n(`Number of burgs`),quantize:e=>+!!pack.cells.burg[e],aggregate:e=>i(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},average_elevation:{label:n(`Average elevation`),quantize:e=>pack.cells.h[e],aggregate:e=>f(e),formatTicks:e=>A(e),stringify:e=>A(e),stackable:!1,landOnly:!1},max_elevation:{label:n(`Maximum mean elevation`),quantize:e=>pack.cells.h[e],aggregate:e=>d(e),formatTicks:e=>A(e),stringify:e=>A(e),stackable:!1,landOnly:!1},min_elevation:{label:n(`Minimum mean elevation`),quantize:e=>pack.cells.h[e],aggregate:e=>m(e),formatTicks:e=>A(e),stringify:e=>A(e),stackable:!1,landOnly:!1},average_temperature:{label:n(`Annual mean temperature`),quantize:e=>grid.cells.temp[pack.cells.g[e]],aggregate:e=>f(e),formatTicks:e=>O(e),stringify:e=>O(e),stackable:!1,landOnly:!1},max_temperature:{label:n(`Annual max temperature`),hint:n(`Highest mean temperature of the year`),quantize:e=>grid.cells.temp[pack.cells.g[e]],aggregate:e=>d(e),formatTicks:e=>O(e),stringify:e=>O(e),stackable:!1,landOnly:!1},min_temperature:{label:n(`Annual min temperature`),hint:n(`Lowest mean temperature of the year`),quantize:e=>grid.cells.temp[pack.cells.g[e]],aggregate:e=>m(e),formatTicks:e=>O(e),stringify:e=>O(e),stackable:!1,landOnly:!1},average_precipitation:{label:n(`Annual mean precipitation`),quantize:e=>grid.cells.prec[pack.cells.g[e]],aggregate:e=>t(f(e)),formatTicks:e=>E(t(e)),stringify:e=>E(t(e)),stackable:!1,landOnly:!0},max_precipitation:{label:n(`Annual max precipitation`),hint:n(`Highest mean precipitation of the year`),quantize:e=>grid.cells.prec[pack.cells.g[e]],aggregate:e=>t(d(e)),formatTicks:e=>E(t(e)),stringify:e=>E(t(e)),stackable:!1,landOnly:!0},min_precipitation:{label:n(`Annual min precipitation`),hint:n(`Lowest mean precipitation of the year`),quantize:e=>grid.cells.prec[pack.cells.g[e]],aggregate:e=>t(m(e)),formatTicks:e=>E(t(e)),stringify:e=>E(t(e)),stackable:!1,landOnly:!0},coastal_cells:{label:n(`Number of coastal cells`),quantize:e=>+(pack.cells.t[e]===1),aggregate:e=>i(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},river_cells:{label:n(`Number of river cells`),quantize:e=>+!!pack.cells.r[e],aggregate:e=>i(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},production_value:{label:n(`Production value`),hint:n(`Worth of produced goods`),provides:[`good`],prepare:()=>({biomeProduction:r.getBiomesProduction()}),getContributions:(e,{biomeProduction:t})=>{let n=Q(e,t),i=[];for(let[e,t]of Object.entries(n)){let n=r.get(+e);n&&i.push({good:+e,value:t*n.value})}return i},aggregate:e=>t(i(e)),formatTicks:t=>e(t),stringify:e=>j(e),stackable:!0,landOnly:!0},production_units:{label:n(`Production volume`),hint:n(`Units of goods produced`),provides:[`good`],prepare:()=>({biomeProduction:r.getBiomesProduction()}),getContributions:(e,{biomeProduction:t})=>{let n=Q(e,t),r=[];for(let[e,t]of Object.entries(n))r.push({good:+e,value:t});return r},aggregate:e=>t(i(e)),formatTicks:t=>e(t),stringify:e=>`${e.toLocaleString()} units`,stackable:!0,landOnly:!0},burgs_profit:{label:n(`Burgs profit`),hint:n(`Burgs profit from trade and manufacturing`),quantize:e=>{let t=pack.cells.burg[e];return t&&pack.burgs[t].product||0},aggregate:e=>t(i(e)),formatTicks:t=>e(t),stringify:e=>j(e),stackable:!0,landOnly:!0}},ue={stackedBar:{offset:le},normalizedStackedBar:{offset:ce,formatX:e=>`${t(e*100)}%`}},G=[],de;function fe(){pe(),ye(),me(),S.closeAll(`#chartsOverview, .stable`);let e=M.at(-1)?.created;if(de!==e&&(G=[],de=e),!G.length)he();else for(let e of G)ge(e);S.open(`chartsOverview`,{resizable:!0,title:n(`Data Charts`),width:`60vw`,height:`auto`,position:{my:`center`,at:`center`,of:`svg`},onClose:be})}function pe(){S.destroy(`chartsOverview`);let e=Object.entries(U).map(([e,{label:t}])=>[e,t]),t=Object.entries(W).map(([e,{label:t}])=>[e,t]),r=([e,t])=>`<option value="${e}">${t}</option>`,i=e=>e.map(r).join(``),a=`<div id="chartsOverview" class="dialog stable">
    <form id="chartsOverview__form">
      <div>
        <button data-tip="${n(`Add`)}" type="submit">${n(`Plot`)}</button>

        <select data-tip="${n(`Select entity (y axis)`)}" id="chartsOverview__entitiesSelect">
          ${i(e)}
        </select>

        <label for="chartsOverview__plotBySelect" data-tip="${n(`Select metric to plot (x axis)`)}">
          <span>${n(`by`)}</span>
          <select id="chartsOverview__plotBySelect">
            ${i(t)}
          </select>
          <i id="chartsOverview__plotByInfo" class="icon-info-circled" style="display: none"></i>
        </label>

        <label for="chartsOverview__groupBySelect" data-tip="${n(`Select entity to group by. If you don't need grouping, set it the same as the entity`)}">
          <span>${n(`grouped by`)}</span>
          <select id="chartsOverview__groupBySelect">
            ${i(e)}
          </select>
        </label>

        <label data-tip="${n(`Sorting type`)}" for="chartsOverview__sortingSelect">
          <span>${n(`sorted`)}</span>
          <select id="chartsOverview__sortingSelect">
            <option value="value">${n(`by value`)}</option>
            <option value="name">${n(`by name`)}</option>
            <option value="natural">${n(`naturally`)}</option>
          </select>
        </label>
      </div>

      <div>
        <label data-tip="${n(`Select chart type`)}" for="chartsOverview__chartType">
          <span>${n(`Type`)}</span>
          <select id="chartsOverview__chartType">
            <option value="stackedBar" selected>${n(`Stacked Bar`)}</option>
            <option value="normalizedStackedBar">${n(`Normalized Bar`)}</option>
          </select>
        </label>

        <label data-tip="${n(`Show the charts in 1, 2, 3 or 4 columns`)}" for="chartsOverview__viewColumns">
          <span>${n(`Columns`)}</span>
          <select id="chartsOverview__viewColumns">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <label data-tip="${n(`Exclude zero element from the results (id 0, e.g. the neutral state)`)}" for="chartsOverview__excludeNeutral">
          <input id="chartsOverview__excludeNeutral" type="checkbox" class="native" />
          <span>${n(`Exclude neutral`)}</span>
        </label>
      </div>
    </form>

    <section id="chartsOverview__charts"></section>
  </div>`;y(`dialogs`).insertAdjacentHTML(`beforeend`,a),y(`chartsOverview__entitiesSelect`).value=`states`,y(`chartsOverview__plotBySelect`).value=`total_population`,y(`chartsOverview__groupBySelect`).value=`cultures`,y(`chartsOverview__form`).addEventListener(`submit`,he),y(`chartsOverview__viewColumns`).addEventListener(`change`,ye),y(`chartsOverview__plotBySelect`).addEventListener(`change`,me),v(`chartsOverviewStyle`)?.remove();let o=document.createElement(`style`);o.id=`chartsOverviewStyle`,o.textContent=`
    #chartsOverview {
      max-width: 90vw !important;
      max-height: 90vh !important;
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    #chartsOverview__form {
      display: grid;
      font-size: 1.1em;
      margin: 0.3em 0;
    }

    #chartsOverview__form > div:first-child {
      display: flex;
      align-items: center;
      gap: 0.2em;
    }

    #chartsOverview__form > div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 1em;
    }

    #chartsOverview__form label {
      display: inline-flex;
      align-items: center;
    }

    #chartsOverview__charts {
      overflow: auto;
      scroll-behavior: smooth;
      display: grid;
    }

    #chartsOverview__charts figure {
      margin: 0;
      padding: 0.6em 0 1em;
      border-top: 1px solid rgba(128, 128, 128, 0.4);
    }

    #chartsOverview__charts figcaption {
      font-size: 1.2em;
      margin: 0 1% 0.4em 4%;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
    }

    #chartsOverview__plotByInfo {
      margin-left: 0.3em;
      cursor: help;
      opacity: 0.6;
    }
  `,document.head.appendChild(o)}function me(){let e=y(`chartsOverview__plotBySelect`).value,t=y(`chartsOverview__plotByInfo`),{hint:n}=W[e];n?(t.dataset.tip=n,t.style.display=``):t.style.display=`none`}function he(e){e&&e.preventDefault();let t=y(`chartsOverview__entitiesSelect`).value,r=y(`chartsOverview__plotBySelect`).value,i=y(`chartsOverview__groupBySelect`).value,a=y(`chartsOverview__sortingSelect`).value,o=y(`chartsOverview__chartType`).value,s=y(`chartsOverview__excludeNeutral`).checked,{label:c,stackable:l,provides:u=[]}=W[r],d=[t,i].find(e=>{let t=U[e].requires;return t?!u.includes(t):!1});if(d){C(n(`{{plot}} cannot be broken down by {{group}}`,{plot:c,group:U[d].label.toLowerCase()}),!1,`error`,4e3);return}!l&&i!==t&&(C(n(`Grouping is not supported for {{plot}}`,{plot:r}),!1,`warn`,4e3),i=t);let f={id:Date.now(),entity:t,plotBy:r,groupBy:i,sorting:a,type:o,excludeNeutral:s};G.push(f),ge(f),K()}function ge({id:e,entity:r,plotBy:i,groupBy:a,sorting:o,type:c,excludeNeutral:l}){let{label:u,stringify:d,quantize:f,getContributions:p,prepare:m,aggregate:h,formatTicks:g,landOnly:ee}=W[i],_=a===r,{label:v,getName:b,getId:x,landOnly:S}=U[r],{label:C,getName:w,getId:T,getColors:E}=U[a],D=m?m():void 0,O=p?e=>p(e,D):e=>[{value:f(e)}],k=_?n(`{{- metric}} by {{- entity}}`,{metric:u,entity:v}):n(`{{- metric}} by {{- entity}}, grouped by {{- group}}`,{metric:u,entity:v,group:C}),A=(e,n,r,i)=>{let a=`${v}: ${e}`,o=_?``:`${C}: ${n}`,s=`${u}: ${d(r)}`;return _||(s+=` (${t(i*100)}%)`),[a,o,s].filter(Boolean)},j={},M=new Set;for(let e of pack.cells.i)if(!((S||ee)&&s(e,pack)))for(let t of O(e)){let n=x(e,t),r=T(e,t);if(l&&(n===0||r===0))continue;let{value:i}=t;j[n]?j[n][r]?j[n][r].push(i):j[n][r]=[i]:j[n]={[r]:[i]},M.add(r)}let N=Ne(Object.entries(j).flatMap(([e,t])=>{let n=b(e);return Object.entries(t).map(([e,t])=>{let r=w(e),i=h(t);return{name:n,group:r,value:i}})}),o),P=E(),{offset:F,formatX:I=g}=ue[c];ve(e,N,_e(N,{colors:P,tooltip:A,offset:F,formatX:I}),k),y(`chartsOverview__charts`).lastElementChild?.scrollIntoView()}function _e(e,{colors:t,tooltip:n,offset:r,formatX:o}){let s=e.map(e=>e.value),c=e.map(e=>e.name),l=e.map(e=>e.group),d=new Set(c),f=new Set(l),p=h(s.length).filter(e=>d.has(c[e])&&f.has(l[e])),m=Array.from(d),_=Array.from(f),v=we(m),y=Te(_,Y-v-15),b={top:30,right:15,bottom:y*20+10,left:v},x=[b.left,Y-b.right],S=d.size*25+b.top+b.bottom,w=[S-b.bottom,b.top],T=ne(p,([e])=>e,e=>c[e],e=>l[e]),E=se().keys(_).value(([,e],t)=>s[new Map(e).get(t)]).order(H).offset(r)(T).map(e=>{let t=e.filter(e=>!Number.isNaN(e[1])).map(t=>Object.assign(t,{i:new Map(t.data[1]).get(e.key)}));return{key:e.key,data:t}}),D=E.flatMap(e=>e.data.flatMap(e=>[e[0],e[1]])),O=a(D),k=u(O,x),A=ie(m,w).paddingInner(xe),j=ee(k).ticks(Y/80,null),M=g(A).tickSizeOuter(0),N=re(`svg`).attr(`version`,`1.1`).attr(`xmlns`,`http://www.w3.org/2000/svg`).attr(`viewBox`,`0 0 ${Y} ${S}`).attr(`style`,`max-width: 100%; height: auto; height: intrinsic;`);N.append(`g`).attr(`transform`,`translate(0,${b.top})`).call(j).call(e=>e.select(`.domain`).remove()).call(e=>e.selectAll(`text`).text(e=>o(e))).call(e=>e.selectAll(`.tick line`).clone().attr(`y2`,S-b.top-b.bottom).attr(`stroke-opacity`,.1));let P=N.append(`g`).attr(`stroke`,`#666`).attr(`stroke-width`,.5).selectAll(`g`).data(E).join(`g`).attr(`fill`,e=>t[e.key]).selectAll(`rect`).data(e=>e.data.filter(([e,t])=>e!==t)).join(`rect`).attr(`x`,([e,t])=>Math.min(k(e),k(t))).attr(`y`,({i:e})=>A(c[e])).attr(`width`,([e,t])=>Math.abs(k(e)-k(t))).attr(`height`,A.bandwidth()),F=Object.fromEntries(ne(p,e=>i(e,e=>s[e]),e=>c[e])),I=({i:e})=>n(c[e],l[e],s[e],s[e]/F[c[e]]);P.append(`title`).text(e=>I(e).join(`\r
`)),P.on(`mouseover`,(e,t)=>C(I(t).join(`. `))),N.append(`g`).attr(`transform`,`translate(${k(0)},0)`).call(M);let L=Math.ceil(_.length/y),te=Y/(L+.5),R=(e,t)=>t%L*te,z=(e,t)=>R(e,t)+Ce,B=(e,t)=>Math.floor(t/L)*20,V=N.append(`g`).attr(`stroke`,`#666`).attr(`stroke-width`,.5).attr(`dominant-baseline`,`central`).attr(`transform`,`translate(${b.left},${S-b.bottom+15})`);return V.selectAll(`circle`).data(_).join(`rect`).attr(`x`,R).attr(`y`,B).attr(`width`,10).attr(`height`,10).attr(`transform`,`translate(-5, -5)`).attr(`fill`,e=>t[e]),V.selectAll(`text`).data(_).join(`text`).attr(`x`,z).attr(`y`,B).text(e=>e),N.node()}function ve(e,t,r,i){let a=y(`chartsOverview__charts`),o=document.createElement(`figure`),s=document.createElement(`figcaption`),c=a.childElementCount+1;s.innerHTML=`
    <div>
      <strong>${n(`Figure {{number}}`,{number:c})}</strong>. ${i}
    </div>
    <div>
      <button data-tip="${n(`Download the chart data as a CSV file`)}" class="icon-download"></button>
      <button data-tip="${n(`Download the chart as a PNG image`)}" class="icon-export"></button>
      <button data-tip="${n(`Download the chart in SVG format (vector, opens in a browser or Inkscape)`)}" class="icon-chart-bar"></button>
      <button data-tip="${n(`Remove`)}" class="icon-trash"></button>
    </div>
  `,o.appendChild(s),o.appendChild(r),a.appendChild(o),o.querySelector(`button.icon-download`)?.addEventListener(`click`,()=>{let e=t.map(({name:e,group:t,value:n})=>[e,t,n]);x.download(i,[`Name`,`Group`,`Value`],e)}),o.querySelector(`button.icon-export`)?.addEventListener(`click`,()=>{let{width:e,height:t}=r.viewBox.baseVal,n=r.cloneNode(!0);n.setAttribute(`width`,String(e)),n.setAttribute(`height`,String(t));let a=new XMLSerializer().serializeToString(n),o=URL.createObjectURL(new Blob([a],{type:`image/svg+xml;charset=utf-8`})),s=new Image;s.onload=()=>{let n=document.createElement(`canvas`);n.width=e*2,n.height=t*2;let r=n.getContext(`2d`);r&&(r.fillStyle=`#fff`,r.fillRect(0,0,n.width,n.height),r.drawImage(s,0,0,n.width,n.height),n.toBlob(e=>e&&p(e,`${N(i)}.png`,`image/png`))),URL.revokeObjectURL(o)},s.src=o}),o.querySelector(`button.icon-chart-bar`)?.addEventListener(`click`,()=>{let e=`${N(i)}.svg`;p(r.outerHTML,e)}),o.querySelector(`button.icon-trash`)?.addEventListener(`click`,()=>{o.remove(),G=G.filter(t=>t.id!==e),K()})}function ye(){let e=y(`chartsOverview__viewColumns`).value,t=y(`chartsOverview__charts`);t.style.gridTemplateColumns=`repeat(${e}, 1fr)`,K()}function K(){S.update(`chartsOverview`,{position:{my:`center`,at:`center`,of:`svg`}})}function be(){S.destroy(`chartsOverview`),v(`chartsOverviewStyle`)?.remove()}var q=`#ccc`,J=`no`,Y=800,xe=.2,Se=7,Ce=10;function we(e){return d(e.map(e=>e.length))*Se}function Te(e,t){if(!e.length)return 0;let n=Ce+we(e),r=Math.max(1,Math.floor(t/n));return Math.ceil(e.length/r)}function X(e){return t=>pack[e][+t]?.name||J}function Z(e){return()=>Object.fromEntries(pack[e].map(e=>[e.name||J,e.color||q]))}function Ee(e){return pack.biomes[+e]?.name||J}function De(){return Object.fromEntries(pack.biomes.map(({name:e,color:t})=>[e,t]))}function Oe(e){let t=w.get(+e);return t?t.name||pack.burgs[t.centerBurgId]?.name||`Market ${t.i}`:J}function ke(){return Object.fromEntries((pack.markets||[]).map(e=>[Oe(e.i),e.color||q]))}function Ae(e){return r.get(+e)?.name||J}function je(){return Object.fromEntries((pack.goods||[]).map(e=>[e.name||J,e.color||q]))}function Q(e,t){let n=T.getCellProduction(e,t),r=pack.cells.burg[e];if(r){let e=T.getBurgProduction(pack.burgs[r]);for(let[t,r]of Object.entries(e))n[+t]=(n[+t]||0)+r}return n}function Me(e){let t=pack.cells.burg[e];return t?(pack.burgs[t].population||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate:0}function $(e){return pack.cells.pop[e]*options.map.units.population.scale}function Ne(e,t){if(t===`natural`)return e;if(t===`name`)return e.sort((e,t)=>e.name===t.name?e.group.localeCompare(t.group):t.name.localeCompare(e.name));if(t===`value`){let t={},n={};for(let{name:r,group:i,value:a}of e)t[r]=(t[r]||0)+a,n[i]=(n[i]||0)+a;return e.sort((e,r)=>e.name===r.name?n[r.group]-n[e.group]:t[e.name]-t[r.name])}return e}var Pe={open:fe};export{Pe as ChartsOverview};
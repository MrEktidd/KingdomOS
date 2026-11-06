import{D as e,E as t,i as n,r}from"./index-DfkEhdNk.js";import{Mt as i,U as a}from"./options-model-baH24lwc.js";import{a as o}from"./pack-generator-itXjN9Pv.js";import{f as s,v as c}from"./notices-CsL9NM9q.js";import{Mt as l,n as u,t as d}from"./layers-DJ8BJ3Zy.js";import{o as f}from"./color-utils-7EG96Nsk.js";import{d as p,i as m,r as h,z as g}from"./node-utils-BD0SusgU.js";import{t as _}from"./csv-CfLd6KH6.js";import{t as v}from"./dialog-BW-Ar0Nf.js";import{o as y}from"./tooltips-BSJdaB-v.js";import{t as b}from"./controllers-DmSw-ZkU.js";import{a as x,o as ee}from"./units-S5RZj9IM.js";import{t as S}from"./biomes-generator-yijs_VMj.js";import{c as C,s as w,u as T}from"./app-DaOF0_oJ.js";import{a as E,i as D,n as O,r as k}from"./table-DSOgM2sf.js";import{i as A,t as te}from"./relief-previews-JyNAQX5R.js";import{t as j}from"./relief-pool-editor-DSySEEJb.js";import{t as ne}from"./highlighting-mu1AuRTD.js";var M=`biomesEditor`,N=[`Id`,`Biome`,`Color`,`Habitability`,`Cells`,`Area`,`Population`],P=`Biomes`,F={my:`right top`,at:`right-10 top+10`,of:`svg`},I=[],L=[{key:`name`,label:n(`Biome`),width:`15em`,permanent:!0,sortBy:e=>e.name,sortType:`alpha`},{key:`habitability`,label:n(`Habitability`),width:`6.5em`,sortBy:e=>e.habitability},{key:`relief`,label:n(`Relief`),width:`6.5em`,sortBy:e=>e.iconsDensity},{key:`cells`,label:n(`Cells`),width:`5em`,sortBy:e=>I[e.i]?.cells??0,defaultSort:`desc`},{key:`area`,label:n(`Area`),width:`7em`,mobileHidden:!0,sortBy:e=>I[e.i]?.area??0},{key:`population`,label:n(`Population`),width:`6.2em`,mobileHidden:!0,sortBy:e=>{let t=I[e.i];return t?t.rural+t.urban:0}},{key:`note`,width:`1.1em`},{key:`wiki`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],R=k({getData:()=>C(M,pack.biomes.filter(e=>e.i&&!e.removed),L),onUpdate:e=>W(e,I)});function z(){options.app.mode||(v.closeAll(`#${M}, .stable`),d.show(`biomes`),d.hide(`states`,`cultures`),d.hide(`religions`,`provinces`),B(),I=U(),R.reset(),v.open(M,{title:n(`Biomes Editor`),onClose:fe,position:F}))}function B(){v.destroy(M);let e=`<div id="${M}" class="dialog stable editorDialog">
      ${D({dialogId:M,columns:L})}
      <div id="biomesBody" class="table" data-type="absolute"></div>
      <div id="biomesFooter" class="totalLine">
        <div data-tip="${n(`Number of land biomes`)}" style="margin-left: 12px">
          ${n(`Biomes`)}:&nbsp;<span id="biomesFooterBiomes">0</span>
        </div>
        <div data-col="cells" data-tip="${n(`Number of land cells`)}" style="margin-left: 12px">
          ${n(`Cells`)}:&nbsp;<span id="biomesFooterCells">0</span>
        </div>
        <div data-col="area" data-tip="${n(`Total land area`)}" style="margin-left: 12px">
          ${n(`Land area`)}:&nbsp;<span id="biomesFooterArea">0</span>
        </div>
        <div data-col="population" data-tip="${n(`Total population`)}" style="margin-left: 12px">
          ${n(`Population`)}:&nbsp;<span id="biomesFooterPopulation">0</span>
        </div>
      </div>
      <div id="biomesBottom">
        <button id="biomesEditorRefresh" data-tip="${n(`Refresh`)}" class="icon-cw"></button>
        <button id="biomesEditStyle" data-tip="${n(`Edit style in Style Editor`)}" class="icon-adjust"></button>
        <button id="biomesLegend" data-tip="${n(`Toggle Legend box`)}" class="icon-list-bullet"></button>
        <button
          id="biomesPercentage"
          data-tip="${n(`Toggle percentage / absolute values views`)}"
          class="icon-percent"
        ></button>
        <button
          id="biomesManually"
          data-tip="${n(`Manually re-assign biomes to not follow the default moisture/temperature pattern`)}"
          class="icon-brush"
        ></button>
        <button id="biomesReliefRules" data-tip="${n(`Edit the relief rules: hills, mountains and other relief placed by elevation`)}" class="icon-mountain"></button>
        <button id="biomesAdd" data-tip="${n(`Add`)}" class="icon-plus"></button>
        <button
          id="biomesRestore"
          data-tip="${n(`Restore the defaults and re-define biomes based on current moisture and temperature`)}"
          class="icon-history"
        ></button>
        <button
          id="biomesExport"
          data-tip="${n(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="biomesImport" data-tip="${n(`Upload data from a CSV file`)}" class="icon-upload"></button>
      </div>
    </div>`;h(`dialogs`).insertAdjacentHTML(`beforeend`,e),O({dialogId:M,columns:L,onUpdate:()=>v.update(M,{width:`fit-content`,position:F})}),h(`biomesEditorRefresh`).addEventListener(`click`,V),h(`biomesEditStyle`).addEventListener(`click`,()=>void b.StyleEditor.open(`biomes`)),h(`biomesLegend`).addEventListener(`click`,oe),h(`biomesPercentage`).addEventListener(`click`,Z),h(`biomesManually`).addEventListener(`click`,le),h(`biomesRestore`).addEventListener(`click`,de),h(`biomesReliefRules`).addEventListener(`click`,()=>void b.ReliefRulesEditor.open()),h(`biomesAdd`).addEventListener(`click`,se),h(`biomesExport`).addEventListener(`click`,Q),h(`biomesImport`).addEventListener(`click`,()=>_.pick(pe)),w(M,R.reset),ne(M,({cellId:e})=>e&&pack.cells.biome[e]),h(`biomesBody`).addEventListener(`click`,e=>{let t=e.target,n=t.classList;t.tagName===`FILL-BOX`?re(t):n.contains(`icon-book`)?ie(t):n.contains(`icon-info-circled`)?ae(t):n.contains(`icon-trash-empty`)?ce(t):t.closest(`.biomeRelief`)&&K(t)}),h(`biomesBody`).addEventListener(`change`,e=>{let t=e.target,n=t.classList;n.contains(`biomeName`)?Y(t):n.contains(`biomeHabitability`)&&X(t)})}function V(){I=U(),R.refresh()}function H(e=pack){let{cells:t}=e,n=e.biomes.map(()=>({cells:0,area:0,rural:0,urban:0}));for(let r of t.i){if(t.h[r]<20)continue;let i=n[t.biome[r]];i.cells++,i.area+=t.area[r],i.rural+=t.pop[r];let a=t.burg[r]?e.burgs[t.burg[r]]:null;a&&(i.urban+=a.population??0)}return n}function U(){return H(pack)}function W(a,o){let s=` ${ee()}`,c=``,l=0,u=0;for(let i of a.rows){let{i:a,name:l,color:u,habitability:d}=i,{cells:f,area:p,rural:m,urban:h}=o[a],g=x(p),_=m*options.map.units.population.scale,v=h*options.map.units.population.scale*options.map.units.population.urbanization.rate,y=t(_+v),b=r(`${n(`Total population`)}: ${e(y)}`,`${n(`Rural population`)}: ${e(_)}`,`${n(`Urban population`)}: ${e(v)}`);c+=`
      <div
        class="states biomes"
        data-id="${a}"
        data-name="${l}"
        data-habitability="${d}"
        data-cells=${f}
        data-area=${g}
        data-population=${y}
        data-color=${u}
      >
        <div data-col="name">
          <fill-box fill="${u}"></fill-box>
          <input data-tip="${r(n(`Name`),n(`Click and type to change`))}" class="biomeName" value="${l}" autocorrect="off" spellcheck="false" />
        </div>
        <div data-col="habitability" class="hide">
          <span data-tip="${n(`Biome habitability percent`)}">%</span>
          <input data-tip="${r(n(`Biome habitability percent`),n(`Click and type to change`))}" type="number" min="0" max="9999" class="biomeHabitability" value=${d} />
        </div>
        <div data-col="relief" class="hide">${G(i)}</div>
        <div data-col="cells" class="hide"><span data-tip="${n(`Number of cells`)}" class="icon-check-empty"></span><span data-tip="${n(`Number of cells`)}" class="biomeCells">${f}</span></div>
        <div data-col="area" class="hide"><span data-tip="${n(`Biome area`)}" class="icon-map-o" style="padding-right: 2px"></span><span data-tip="${n(`Biome area`)}" class="biomeArea">${e(g)+s}</span></div>
        <div data-col="population" class="hide"><span data-tip="${b}" class="icon-male"></span><span data-tip="${b}" class="biomePopulation">${e(y)}</span></div>
        ${T(n(`Edit free text notes (legend)`))}
        <span data-col="wiki" data-tip="${n(`Open Wikipedia article about the biome`)}" class="icon-info-circled pointer"></span>
        <span data-col="remove" ${a>12&&!f?`data-tip="${n(`Remove`)}" class="icon-trash-empty"`:``}></span>
      </div>
    `}let d=h(`biomesBody`);d.innerHTML=c,te(d,styles.relief.options.set);for(let e of a.all){let n=o[e.i];l+=x(n.area),u+=t(n.rural*options.map.units.population.scale+n.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate)}let f=x(i(pack.cells.area));h(`biomesFooterBiomes`).innerHTML=String(a.all.length),h(`biomesFooterCells`).innerHTML=String(pack.cells.h.filter(e=>e>=20).length);let p=h(`biomesFooterArea`);p.innerHTML=e(l)+s,h(`biomesFooterPopulation`).innerHTML=e(u),p.dataset.area=String(l),p.dataset.mapArea=String(f),h(`biomesFooterPopulation`).dataset.population=String(u),E(h(`biomesFooter`),a,R.goto),d.querySelectorAll(`div.biomes`).forEach(e=>{e.addEventListener(`mouseenter`,q)}),d.querySelectorAll(`div.biomes`).forEach(e=>{e.addEventListener(`mouseleave`,J)}),d.dataset.type===`percentage`&&(d.dataset.type=`absolute`,Z()),v.update(M,{width:`fit-content`,position:F})}function G({icons:e,iconsDensity:t}){return A(e,t,`biomeRelief`)}function K(e){let t=Number(e.closest(`.biomes`).dataset.id);j.open({biome:t,onApply:V})}function q(e){let t=+e.target.dataset.id,n=p().duration(2e3).ease(l);g(`#biomes > #biome${t}`).raise().transition(n).attr(`stroke-width`,2).attr(`stroke`,`#cd4c11`)}function J(e){let t=+e.target.dataset.id,n=pack.biomes[t].color;g(`#biomes > #biome${t}`).transition().attr(`stroke-width`,.7).attr(`stroke`,n)}function re(e){let t=e.getAttribute(`fill`),n=+e.closest(`.biomes`).dataset.id;b.ColorPicker.open(t,t=>{e.fill=t,pack.biomes[n].color=t,d.draw(`biomes`)})}function Y(e){let t=e.closest(`.biomes`),n=+t.dataset.id;e.value.trim()?(S.rename(n,e.value),t.dataset.name=pack.biomes[n].name):e.value=pack.biomes[n].name}function X(e){let t=e.closest(`.biomes`),r=+t.dataset.id;Number.isNaN(+e.value)||+e.value<0||+e.value>9999?(e.value=String(pack.biomes[r].habitability),y(n(`Please provide a valid number in range 0-9999`),!1,`error`)):(S.setHabitability(r,+e.value),t.dataset.habitability=e.value,$(),V())}function ie(e){let t=+(e.closest(`.biomes`)?.dataset.id||0);b.NotesEditor.open({type:`biome`,id:t})}function ae(e){let t=e.closest(`.biomes`)?.dataset.name;if(t===`Custom`||!t){y(n(`Please fill in the biome name`),!1,`error`);return}let r={"Hot desert":`Desert_climate#Hot_desert_climates`,"Cold desert":`Desert_climate#Cold_desert_climates`,Savanna:`Tropical_and_subtropical_grasslands,_savannas,_and_shrublands`,Grassland:`Temperate_grasslands,_savannas,_and_shrublands`,"Tropical seasonal forest":`Seasonal_tropical_forest`,"Temperate deciduous forest":`Temperate_deciduous_forest`,"Tropical rainforest":`Tropical_rainforest`,"Temperate rainforest":`Temperate_rainforest`,Taiga:`Taiga`,Tundra:`Tundra`,Glacier:`Glacier`,Wetland:`Wetland`},i=`https://en.wikipedia.org/w/index.php?search=${t}`,a=r[t]?`https://en.wikipedia.org/wiki/`+r[t]:i;s(a)}function oe(){u.toggle(P,()=>{let e=U();return pack.biomes.filter(({i:t})=>e[t].cells).sort((t,n)=>e[n.i].area-e[t.i].area).map(({i:e,color:t,name:n})=>[e,t,n])},n(`No biomes to show`))}function Z(){let e=h(`biomesBody`);if(e.dataset.type===`absolute`){e.dataset.type=`percentage`;let n=+h(`biomesFooterCells`).innerHTML,r=h(`biomesFooterArea`),i=+r.dataset.area,a=+r.dataset.mapArea,o=+h(`biomesFooterPopulation`).dataset.population;e.querySelectorAll(`:scope > div`).forEach(e=>{e.querySelector(`.biomeCells`).innerHTML=`${t(+e.dataset.cells/n*100)}%`,e.querySelector(`.biomeArea`).innerHTML=`${t(+e.dataset.area/i*100)}%`,e.querySelector(`.biomePopulation`).innerHTML=`${t(+e.dataset.population/o*100)}%`}),r.innerHTML=`${t(i/a*100)}%`}else e.dataset.type=`absolute`,R.refresh()}function se(){try{S.add(`Custom`,f(),50)}catch{y(n(`Maximum number of biomes reached (255), data cleansing is required`),!1,`error`);return}I=U(),R.refresh()}function ce(e){let t=+e.closest(`.biomes`).dataset.id;try{S.remove(t)}catch{return}I=U(),R.refresh()}function Q(){let e=options.map.units.area.unit===`square`?`${options.map.units.distance.unit}2`:options.map.units.area.unit,{scale:n,urbanization:r}=options.map.units.population,i=U(),a=pack.biomes.filter(e=>e.i&&!e.removed).map(e=>{let{cells:a,area:o,rural:s,urban:c}=i[e.i],l=t(s*n+c*n*r.rate);return[e.i,e.name,e.color,`${e.habitability}%`,a,x(o),l]});_.download(`Biomes`,N.map(t=>t===`Area`?`Area ${e}`:t),a)}function le(){d.show(`biomes`),b.PaintEditor.open({title:n(`Paint Biomes`),parentDialogId:M,onClose:z,items:pack.biomes.filter(e=>e.i&&!e.removed).map(e=>({id:e.i,name:e.name,color:e.color})),getValue:e=>pack.cells.biome[e],filterCell:e=>o(e,pack),onApply:ue})}function ue(e){for(let[t,n]of c(e))S.setCells(t,n);e.size&&(d.draw(`biomes`),m(M)&&V())}function de(){S.restore(),d.draw(`biomes`),$(),V()}function fe(){v.destroy(`biomesEditor`)}function $(){a.regenerate(),d.draw(`population`,`goods`)}async function pe(e){let t=e=>e&&pack.biomes[e]&&!pack.biomes[e].removed?pack.biomes[e]:void 0;await b.CsvUpload.update(e,N,{find:t,units:[`Area`],text:[`Biome`]},(e,n)=>{let r=t(e);n.apply(`Biome`,e=>S.rename(r.i,e),r.name),n.apply(`Color`,e=>S.recolor(r.i,e),r.color),n.apply(`Habitability`,e=>S.setHabitability(r.i,Number.parseFloat(e)),`${r.habitability}%`)})&&(d.draw(`biomes`),V())}var me={open:z,exportCsv:Q};export{me as BiomesEditor};
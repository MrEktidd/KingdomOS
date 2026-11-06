import{E as e,i as t,p as n,r,t as i}from"./index-DfkEhdNk.js";import{b as a,f as o}from"./notices-CsL9NM9q.js";import{A as s,O as c,c as l,k as u,l as d,n as f,t as p}from"./file-utils-gMYr_JNq.js";import{t as m}from"./min-CCch3uox.js";import{r as h}from"./node-utils-BD0SusgU.js";import{t as g}from"./dialog-BW-Ar0Nf.js";import{o as _}from"./tooltips-BSJdaB-v.js";import{t as v}from"./file-name-CjjRnvM3.js";import{t as y}from"./app-DaOF0_oJ.js";var b=null;function x(){options.app.mode||(g.closeAll(`#namesbaseEditor, .stable`),S(),w(),T(),g.open(`namesbaseEditor`,{resizable:!0,title:t(`Namesbase Editor`),width:`60vw`,position:{my:`center`,at:`center`,of:`svg`},onClose:C}))}function S(){g.destroy(`namesbaseEditor`);let e=`<div id="namesbaseEditor" class="dialog stable textual">
      <div id="namesbaseBasesTop">
        <span>${t(`Select base`)}: </span>
        <select id="namesbaseSelect" data-tip="${t(`Select base to edit`)}" style="width: 12em" value="0"></select>
        <span style="margin-left: 2px">${t(`Names data`)}: </span>
      </div>
      <div id="namesbaseBody" style="margin-block: 2px; width: auto">
        <textarea
          id="namesbaseTextarea"
          data-base="0"
          rows="13"
          data-tip="${t(`Names data: a comma separated list of source names used for names generation`)}"
          placeholder="${t(`Provide a names data: a comma separated list of source names`)}"
          autocorrect="off"
          spellcheck="false"
          style="resize: none"
        ></textarea>
        <div>
          <span>${t(`Name`)}: </span>
          <input
            id="namesbaseName"
            data-tip="${t(`Type to change a base name`)}"
            placeholder="${t(`Base name`)}"
            autocorrect="off"
            spellcheck="false"
            style="width: 12em"
          />
          <span>${t(`Length`)}: </span>
          <input id="namesbaseMin" data-tip="${t(`Recommended minimum name length`)}" type="number" min="2" max="100" />
          <input id="namesbaseMax" data-tip="${t(`Recommended maximum name length`)}" type="number" min="2" value="10" />
          <span>${t(`Doubled`)}: </span>
          <input
            id="namesbaseDouble"
            data-tip="${t(`Populate with letters that can be used twice in a row (geminates)`)}"
            autocorrect="off"
            spellcheck="false"
            style="width: 10em"
          />
        </div>
        <fieldset>
          <legend>${t(`Generated examples`)}:</legend>
          <div id="namesbaseExamples" data-tip="${t(`Examples. Click to re-generate`)}"></div>
        </fieldset>
      </div>
      <div id="namesbaseBottom">
        <button
          id="namesbaseUpdateExamples"
          data-tip="${t(`Re-generate examples based on provided data`)}"
          class="icon-arrows-cw"
        ></button>
        <button id="namesbaseAdd" data-tip="${t(`Add`)}" class="icon-plus"></button>
        <button id="namesbaseDefault" data-tip="${t(`Restore default namesbase`)}" class="icon-cancel"></button>
        <button id="namesbaseDownload" data-tip="${t(`Download namesbase to PC`)}" class="icon-download"></button>
        <button
          id="namesbaseUpload"
          data-tip="${t(`Upload a namesbase from PC, replacing the current set`)}"
          class="icon-upload"
        ></button>
        <button
          id="namesbaseUploadExtend"
          data-tip="${t(`Upload a namesbase from PC, extending the current set`)}"
          class="icon-up-circled2"
        ></button>
        <button
          id="namesbaseCA"
          data-tip="${t(`Find or share custom namesbase on Cartography Assets portal`)}"
          class="icon-drafting-compass"
        ></button>
        <button
          id="namesbaseAnalyze"
          data-tip="${t(`Analyze namesbase to get a validity and quality overview`)}"
          class="icon-flask"
        ></button>
        <button
          id="namesbaseSpeak"
          data-tip="${r(t(`Speak the examples`),t(`You can change voice and language in options`))}"
          class="icon-voice"
        ></button>
      </div>
    </div>`;h(`dialogs`).insertAdjacentHTML(`beforeend`,e),h(`namesbaseSelect`).addEventListener(`change`,T),h(`namesbaseTextarea`).addEventListener(`change`,D),h(`namesbaseUpdateExamples`).addEventListener(`click`,E),h(`namesbaseExamples`).addEventListener(`click`,E),h(`namesbaseName`).addEventListener(`input`,e=>O(e.target.value)),h(`namesbaseMin`).addEventListener(`input`,e=>k(e.target.value)),h(`namesbaseMax`).addEventListener(`input`,e=>A(e.target.value)),h(`namesbaseDouble`).addEventListener(`input`,e=>j(e.target.value)),h(`namesbaseAdd`).addEventListener(`click`,N),h(`namesbaseAnalyze`).addEventListener(`click`,M),h(`namesbaseDefault`).addEventListener(`click`,P),h(`namesbaseDownload`).addEventListener(`click`,F),h(`namesbaseUpload`).addEventListener(`click`,()=>I(!0)),h(`namesbaseUploadExtend`).addEventListener(`click`,()=>I(!1)),h(`namesbaseCA`).addEventListener(`click`,()=>o(`https://cartographyassets.com/asset-category/specific-assets/azgaars-generator/namebases/`)),h(`namesbaseSpeak`).addEventListener(`click`,()=>y(h(`namesbaseExamples`).textContent??``))}function C(){g.destroy(`namesbaseEditor`)}function w(){let e=h(`namesbaseSelect`);e.innerHTML=``,d.nameBases.forEach((t,n)=>{e.options.add(new Option(t.name,String(n)))})}function T(){let e=+h(`namesbaseSelect`).value;d.nameBases[e]?(h(`namesbaseTextarea`).value=d.nameBases[e].b,h(`namesbaseName`).value=d.nameBases[e].name,h(`namesbaseMin`).value=String(d.nameBases[e].min),h(`namesbaseMax`).value=String(d.nameBases[e].max),h(`namesbaseDouble`).value=d.nameBases[e].d,E()):_(t(`Namesbase {{base}} is not defined`,{base:e}),!1,`error`)}function E(){let e=+h(`namesbaseSelect`).value,n=``;for(let r=0;r<7;r++){let i=d.getBase(e);if(i===void 0){n=t(`Cannot generate examples. Please verify the data`);break}r&&(n+=`, `),n+=i}h(`namesbaseExamples`).innerHTML=n}function D(){let e=+h(`namesbaseSelect`).value,n=h(`namesbaseTextarea`);if(n.value.split(`,`).length<3){_(t(`The names data provided is too short or incorrect`),!1,`error`);return}let r=n.value.replace(/[/|]/g,``);d.nameBases[e].b=r,n.value=r,d.updateChain(e)}function O(e){let t=+h(`namesbaseSelect`).value,n=h(`namesbaseSelect`),r=e.replace(/[/|]/g,``);n.options[n.selectedIndex].innerHTML=r,d.nameBases[t].name=r}function k(e){let n=+h(`namesbaseSelect`).value;+e>d.nameBases[n].max?_(t(`Minimal length cannot be greater than maximal`),!1,`error`):d.nameBases[n].min=+e}function A(e){let n=+h(`namesbaseSelect`).value;+e<d.nameBases[n].min?_(t(`Maximal length should be greater than minimal`),!1,`error`):d.nameBases[n].max=+e}function j(e){let t=+h(`namesbaseSelect`).value;d.nameBases[t].d=e}function M(){let n=h(`namesbaseTextarea`).value,r=n.toLowerCase().split(`,`),i=r.length;if(!n||!i){_(t(`Names data should not be empty`),!1,`error`);return}let o=d.calculateChain(n),l=Object.values(o),f=e(u(l.map(e=>e.length))??0),p=r.map(e=>e.length),v=n.match(/[\u0080-\uFFFF]/gu)?a(n.match(/[\u0080-\uFFFF]/gu).join(``).toLowerCase().split(``)).join(``):`none`,y=r.flatMap(e=>e.match(/[^\w\s]|(.)(?=\1)/g)??[]),b=a(y).filter(e=>y.filter(t=>t===e).length>3),x=b.length?b.join(``):`none`,S=a(r.filter((e,t,n)=>n.indexOf(e)!==t)).join(`, `)||`none`,C=u(r.map(e=>+e.includes(` `)))??0;g.message({message:`<div style="line-height: 1.6em; max-width: 20em">
      <div data-tip="${t(`Number of names provided`)}">${t(`Namesbase length`)}: ${i} ${i<30?`<span data-tip="${t(`Namesbase contains < 30 names - not enough to generate reasonable data`)}" style="color:red">[${t(`not enough`)}]</span>`:i<100?`<span data-tip="${t(`Namesbase contains < 100 names - not enough to generate good names`)}" style="color:darkred">[${t(`low`)}]</span>`:i<=400?`<span data-tip="${t(`Namesbase contains a reasonable number of samples`)}" style="color:green">[${t(`good`)}]</span>`:`<span data-tip="${t(`Namesbase contains > 400 names. That is too much, try to reduce it to ~300 names`)}" style="color:darkred">[${t(`overmuch`)}]</span>`}</div>
      <div data-tip="${t(`Average number of generation variants for each key in the chain`)}">${t(`Namesbase variety`)}: ${f} ${f<15?`<span data-tip="${t(`Namesbase average variety < 15 - generated names will be too repetitive`)}" style="color:red">[${t(`low`)}]</span>`:f<30?`<span data-tip="${t(`Namesbase average variety < 30 - names can be too repetitive`)}" style="color:orange">[${t(`mean`)}]</span>`:`<span data-tip="${t(`Namesbase variety is good`)}" style="color:green">[${t(`good`)}]</span>`}</div>
      <hr />
      <div data-tip="${t(`The shortest name length`)}">${t(`Min name length`)}: ${m(p)}</div>
      <div data-tip="${t(`The longest name length`)}">${t(`Max name length`)}: ${s(p)}</div>
      <div data-tip="${t(`Average name length`)}">${t(`Mean name length`)}: ${e(u(p)??0,1)}</div>
      <div data-tip="${t(`Common name length`)}">${t(`Median name length`)}: ${c(p)}</div>
      <hr />
      <div data-tip="${t(`Characters outside of Basic Latin have bad font support`)}">${t(`Non-basic chars`)}: ${v}</div>
      <div data-tip="${t(`Characters that are frequently (more than 3 times) doubled`)}">${t(`Doubled chars`)}: ${x}</div>
      <div data-tip="${t(`Names used more than one time`)}">${t(`Duplicates`)}: ${S}</div>
      <div data-tip="${t(`Percentage of names containing space character`)}">${t(`Multi-word names`)}: ${e(C*100,2)}%</div>
    </div>`,title:t(`Data Analysis`),width:`auto`,position:{my:`left top-30`,at:`right+10 top`,of:`#namesbaseEditor`}})}function N(){let e=d.nameBases.length,n=`This,is,an,example,of,name,base,showing,correct,format,It,should,have,at,least,one,hundred,names,separated,with,comma`;d.nameBases.push({name:`Base${e}`,i:e,min:5,max:12,d:``,m:0,b:n}),h(`namesbaseSelect`).add(new Option(`Base${e}`,String(e))),h(`namesbaseSelect`).value=String(e),h(`namesbaseTextarea`).value=n,h(`namesbaseName`).value=`Base${e}`,h(`namesbaseMin`).value=`5`,h(`namesbaseMax`).value=`12`,h(`namesbaseDouble`).value=``,h(`namesbaseExamples`).innerHTML=t(`Please provide names data`)}function P(){g.confirm({title:t(`Restore default data`),message:t(`Are you sure you want to restore default namesbase?`),confirm:t(`Restore`),onConfirm:()=>{d.clearChains(),d.nameBases=d.getNameBases(),w(),T()}})}function F(){let e=d.nameBases.map(e=>`${e.name}|${e.min}|${e.max}|${e.d}|${e.m}|${e.b}`).join(`\r
`),t=`${v(`Namesbase`)}.txt`;f(e,t)}function I(e){b??=p(`.txt`),b.onchange=()=>l(b,t=>L(t,e)),b.click()}function L(e,a=!0){let o=e.replace(/\r\n|\r/g,`
`).split(`
`).filter(Boolean);if(!o.length){_(r(t(`Cannot load a namesbase`),t(`Please check the data format`)),!1,`error`);return}d.clearChains(),a&&(d.nameBases=[]);let s=[];if(o.forEach((e,n)=>{try{let[n,r,i,a,o,s]=e.split(`|`),c=n?.replace(R,``);if(!c)throw Error(t(`Name is missing`));let l=s?.replace(R,``);if(!l)throw Error(t(`Names are missing`));d.nameBases.push({name:c,i:d.nameBases.length,min:+r,max:+i,d:a,m:+o,b:l})}catch(t){s.push({id:n+1,line:e,error:t.message}),i.error(t)}}),s.length>0){i.error(`Namesbase upload errors`,s);let e=s.map(({id:e,line:r,error:i})=>`<li style="padding:0.6em 0;border-top:1px solid #ddd;">
            <div>
              ${t(`Line {{number}}`,{number:e})}:
              <span style="color:#8b0000">${n(i)}.</span> ${t(`Data`)}:
            </div>
            <div style="margin-top:0.35em;font-family:var(--font-monospace,monospace);line-height:1.4;word-break:break-word;color:#333;">
              ${n(r)||`<i>${t(`empty line`)}</i>`}
            </div>
          </li>`).join(``);g.message({message:`<div>
        <p style="margin:0.75em;">
          <strong>${t(`File parsing error. Only {{added}} out of {{total}} namebases added.`,{added:o.length-s.length,total:o.length})}</strong>
          ${t(`Each namebase should be on its own line and follow the format: name|min|max|duplication|m|names. Parameters should be separated with the | character, and this character should not be used within the parameters. Another prohibited character is /. The most common issue is names and other parameters being on two separate lines.`)}
          <ul style="margin:0.5em;">
            <li><code>name</code>: ${t(`name of the base.`)}</li>
            <li><code>min</code>: ${t(`minimal recommended length of generated names. It should be a number.`)}</li>
            <li><code>max</code>: ${t(`maximal recommended length of generated names. It should be a number greater than minimal length.`)}</li>
            <li><code>duplication</code>: ${t(`characters that can be duplicated in generated names. For example lkd means names like “Kalla”, “Mikkor”, “Dalddur” are possible. This parameter can be empty.`)}</li>
            <li><code>m</code>: ${t(`unused parameter, populate with 0.`)}</li>
            <li><code>names</code>: ${t(`names data, separated with commas. It should contain at least 3 names to be valid.`)}</li>
          </ul>
        </p>
        <div>
          <ul style="margin:0;padding-left:1.5em;">
            ${e}
          </ul>
        </div>
      </div>`,title:t(`Parsing error`),width:`min(72vw, 68em)`,position:{my:`center center-4em`,at:`center`,of:`svg`},buttons:[{label:t(`Continue`)}]})}w(),T()}var R=/[|/]/g,z={open:x};export{z as NamesbaseEditor};
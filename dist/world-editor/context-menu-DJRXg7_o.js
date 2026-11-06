import{E as e,i as t,p as n}from"./index-DOQT8b0l.js";import{J as r}from"./options-model-DdZ2yl81.js";import{t as i}from"./pack-generator-D44ZN0et.js";import{t as a}from"./layers-BuZ6CHWf.js";import{a as o,i as s}from"./node-utils-B7j8BhBd.js";import{t as c}from"./controllers-J2Zz1cm6.js";import{b as l}from"./app-JxGef4iz.js";import{r as u}from"./connection-n8dq6t8o.js";import{a as d,r as f}from"./reveal-Dklyhulx.js";var p=[`Escape`,`ArrowDown`,`ArrowUp`,`Enter`,` `],m=new class{root;events;rows=[];cell=0;point=[0,0];open(t){this.close();let n=s(`viewbox`);if(!n||!pack.cells?.p)return;let[r,a]=o(t,n),c=i.findCell(r,a);c!==void 0&&(this.cell=c,this.point=[e(r,2),e(a,2)],this.rows=this.collect(t.clientX,t.clientY,c),this.render(t.clientX,t.clientY),this.listen())}close(){this.root?.remove(),this.root=void 0,this.rows=[],this.events?.abort(),this.events=void 0}collect(e,t,n){let i=new Map,a=(e,t)=>{let n=r.key(e);!i.has(n)&&r.get(e)&&i.set(n,{ref:e,element:t})};for(let n of document.elementsFromPoint(e,t)){let e=r.resolveTarget(n);e&&a(e,n)}let o=i.values().next().value;for(let e of r.at(n))a(e,this.element(e));let s=({ref:e})=>r.getDisplay(e).scale,c=[...i.values()].filter(e=>e!==o).sort((e,t)=>s(t)-s(e));return o?[o,...c]:c}render(e,i){let a=document.createElement(`div`);a.id=`contextMenu`,a.setAttribute(`role`,`menu`);let o=this.rows.map(({ref:e,element:i},a)=>{let{kind:o,icon:s}=r.getDisplay(e),c=!i&&this.hidden(e),l=r.getName(e);return`<button type="button" role="menuitem" data-index="${a}" ${c?`class="dim" data-tip="${t(`The layer is hidden`)}"`:``}>
        <span class="${s}"></span><span class="name">${n(l||o)}</span>${l?`<span class="kind">${n(o)}</span>`:``}
      </button>`});u()&&o.push(`<button type="button" role="menuitem" data-action="ask">
        <span class="icon-help"></span><span class="name">${t(`What's there?`)}</span>
      </button>`),a.innerHTML=`
      <style>
        #contextMenu {
          position: fixed;
          z-index: 100000;
          box-sizing: border-box;
          min-width: 14em;
          max-width: min(24em, calc(100vw - 8px));
          max-height: calc(100vh - 8px);
          overflow-y: auto;
          padding: 0.25em;
          background: var(--bg-dialogs, rgb(250 250 250 / 97%));
          color: #30343b;
          box-shadow: 0 0.5em 1.5em #00000030;
          font: 1.1em/1.3 var(--sans-serif);
        }

        #contextMenu button {
          display: flex;
          align-items: center;
          gap: 0.6em;
          width: 100%;
          padding: 0.3em 0.6em;
          border: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }

        #contextMenu button:hover,
        #contextMenu button:focus-visible {
          outline: none;
          background: color-mix(in srgb, var(--dark-solid) 12%, transparent);
        }

        #contextMenu button.dim {
          opacity: 0.55;
        }

        #contextMenu button[data-action="ask"] {
          margin-top: 0.25em;
          border-top: 1px solid color-mix(in srgb, var(--bg-main) 22%, transparent);
        }

        #contextMenu button > [class^="icon-"] {
          flex: 0 0 1.3em;
          color: var(--dark-solid);
          text-align: center;
        }

        #contextMenu .name {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        #contextMenu .kind {
          color: color-mix(in srgb, currentColor 55%, transparent);
          font-size: 0.85em;
          white-space: nowrap;
        }
      </style>
      ${o.join(``)}`,document.body.append(a);let{width:s,height:c}=a.getBoundingClientRect();a.style.left=`${Math.max(4,Math.min(e,window.innerWidth-s-4))}px`,a.style.top=`${Math.max(4,Math.min(i,window.innerHeight-c-4))}px`,this.root=a}listen(){let e=this.root;if(!e)return;this.events=new AbortController;let t=this.events.signal,n={capture:!0,signal:t};e.addEventListener(`click`,e=>this.activate(e.target),{signal:t}),e.addEventListener(`contextmenu`,e=>e.preventDefault(),{signal:t});let r=e=>p.includes(e.key);window.addEventListener(`keydown`,e=>{r(e)?((e.key===`ArrowDown`||e.key===`ArrowUp`)&&this.move(e.key===`ArrowDown`?1:-1),e.key!==`Enter`&&e.key!==` `&&e.preventDefault(),e.stopImmediatePropagation()):this.close()},n),window.addEventListener(`keyup`,e=>{r(e)&&(e.stopImmediatePropagation(),e.key===`Escape`&&this.close())},n);let i=t=>{e.contains(t.target)||this.close()};window.addEventListener(`pointerdown`,i,n),window.addEventListener(`wheel`,i,n);for(let e of[`blur`,`resize`,`map:generated`])window.addEventListener(e,()=>this.close(),{signal:t})}move(e){let t=Array.from(this.root?.querySelectorAll(`button`)??[]),n=t.indexOf(document.activeElement);t[n===-1?e>0?0:t.length-1:(n+e+t.length)%t.length]?.focus()}activate(e){let t=e.closest(`button`);if(!t)return;if(t.dataset.action===`ask`){this.ask();return}let n=this.rowOf(t);this.close(),!(!n||n.element&&l(n.element))&&(f(n.ref)||d(n.ref))}ask(){let[e,n]=this.point,r=`${t(`What's there?`)} cell:${this.cell}, x:${e}, y:${n}`;this.close(),c.Assistant.ask(r)}element(e){let t=this.hidden(e)?null:s(r.getElementId(e)??``);return t&&!t.closest(`#labels`)?t:void 0}hidden(e){let{layers:t}=r.getDisplay(e);return t.length>0&&!t.some(e=>a.isOn(e))}rowOf(e){let t=e?.closest(`button[data-index]`)?.dataset.index;return t===void 0?void 0:this.rows[Number(t)]}};export{m as ContextMenu};
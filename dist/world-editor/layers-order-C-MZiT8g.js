import{i as e}from"./index-DOQT8b0l.js";import{t}from"./layers-BuZ6CHWf.js";import{i as n,r}from"./node-utils-B7j8BhBd.js";import{t as i}from"./dialog-3wqBPvBH.js";import{J as a}from"./app-JxGef4iz.js";import{t as o}from"./sortable-list-CfNQwgmH.js";var s=`layersOrder`,c=`
  #${s} { padding: .4em .5em; }
  #${s} > .rows { width: auto; }
  #${s} .row { display: grid; grid-template-columns: 1em 1fr 1.2em; align-items: center; gap: .4em; height: 1.9em; padding: 0 .4em; border-radius: 3px; white-space: nowrap; }
  #${s} .row:hover { background: rgba(0, 0, 0, .06); }
  #${s} .row.off :is(.name, .eye) { opacity: .5; }
  #${s} .row .icon-resize-vertical { cursor: row-resize; opacity: .6; touch-action: none; }
  #${s} .row .eye { cursor: pointer; text-align: center; }
`,l;function u(){if(n(s))return void i.open(s);r(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${s}" class="dialog"><style>${c}</style><div class="rows"></div></div>`);let a=r(s).querySelector(`.rows`);a.addEventListener(`click`,e=>{let n=e.target.closest(`.eye`)?.closest(`.row`)?.dataset.layer;n&&t.has(n)&&t.toggle(n)}),o(a,{items:`.row`,handle:`.icon-resize-vertical`,onReorder:p}),l=t.subscribe(f),i.open(s,{title:e(`Layers Order`),width:`16em`,maxHeight:Math.round(window.innerHeight*.8),position:{my:`left top`,at:`right+10 top`,of:`#options`},buttons:[{label:e(`Restore`),tip:e(`Restore the default layer order`),onClick:()=>t.resetOrder()}],onClose:d}),f()}function d(){l?.(),l=void 0}function f(){let r=n(s)?.querySelector(`.rows`);r&&(r.innerHTML=t.all.filter(e=>e.params.parent===`viewbox`&&a.has(e.id)).reverse().map(n=>{let{label:r}=a.get(n.id),i=t.isOn(n.id);return`<div class="row${i?``:` off`}" data-layer="${n.id}">
        <span class="icon-resize-vertical" data-tip="${e(`Drag to reorder`)}"></span>
        <span class="name">${r}</span>
        <span class="eye ${i?`icon-eye`:`icon-eye-off`}" data-tip="${e(`Toggle {{- layer}}`,{layer:r})}"></span>
      </div>`}).join(``))}function p(e){let n=e.dataset.layer,r=e.previousElementSibling?.dataset.layer;n&&t.has(n)&&t.move(n,r&&t.has(r)?r:void 0)}var m={open:u};export{m as LayersOrder};
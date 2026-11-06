import{C as e,E as t,i as n}from"./index-J388_yXx.js";import{xt as r}from"./layers-D3_jdNGw.js";import{i,r as a}from"./node-utils-BA3zRxIe.js";import{t as o}from"./dialog-BYT3Byo1.js";import{a as s,d as c}from"./zoom-xenRyT_z.js";var l;function u(){o.closeAll(`#minimap, .stable`),d(),m(),l??=s(m),o.open(`minimap`,{title:n(`Minimap`),width:`auto`,position:{my:`left bottom`,at:`left+10 bottom-25`,of:`svg`},onClose:f})}function d(){o.destroy(`minimap`);let e=`<div id="minimap" class="dialog stable">
      <div id="minimapViewportWrap">
        <svg id="minimapSurface" preserveAspectRatio="xMidYMid meet" aria-label="${n(`Map minimap`)}">
          <use id="minimapMapUse" href="#viewbox"></use>
          <rect id="minimapViewport"></rect>
        </svg>
      </div>
    </div>`;a(`dialogs`).insertAdjacentHTML(`beforeend`,e),a(`minimapSurface`).addEventListener(`click`,p),i(`minimapStyles`)?.remove();let t=document.createElement(`style`);t.id=`minimapStyles`,t.textContent=`
    #minimap {
      padding: 0;
      overflow: hidden;
      background: transparent;
    }

    #minimapViewportWrap {
      position: relative;
      width: 20em;
      border: 0;
    }

    #minimapSurface {
      display: block;
      width: 100%;
      height: auto;
      cursor: crosshair;
    }

    #minimapMapUse {
      pointer-events: none;
    }

    #minimapViewport {
      fill: rgba(190, 255, 137, 0.1);
      stroke: #624954;
      stroke-width: 1;
      stroke-dasharray: 4;
      vector-effect: non-scaling-stroke;
      pointer-events: none;
    }
  `,document.head.append(t)}function f(){l?.(),l=void 0,o.destroy(`minimap`),i(`minimapStyles`)?.remove()}function p(t){let n=i(`minimapSurface`);if(!n)return;let a=n.createSVGPoint();a.x=t.clientX,a.y=t.clientY;let o=n.getScreenCTM();if(!o)return;let s=a.matrixTransform(o.inverse()),l=e(s.x,0,options.map.graph.width),u=e(s.y,0,options.map.graph.height);c(l,u,r.scale,450)}function m(){let e=i(`minimapSurface`),n=i(`minimapViewport`),a=i(`minimapMapUse`);if(!e||!n||!a)return;e.setAttribute(`viewBox`,`0 0 ${options.map.graph.width} ${options.map.graph.height}`);let o=r.scale?1/r.scale:1;a.setAttribute(`transform`,`translate(${t(-r.x*o,3)} ${t(-r.y*o,3)}) scale(${t(o,6)})`);let s=Math.max(0,-r.x*o),c=Math.max(0,-r.y*o),l=Math.min(options.map.graph.width,s+r.width*o),u=Math.min(options.map.graph.height,c+r.height*o);n.setAttribute(`x`,String(t(s,3))),n.setAttribute(`y`,String(t(c,3))),n.setAttribute(`width`,String(t(Math.max(0,l-s),3))),n.setAttribute(`height`,String(t(Math.max(0,u-c),3)))}var h={open:u};export{h as Minimap};
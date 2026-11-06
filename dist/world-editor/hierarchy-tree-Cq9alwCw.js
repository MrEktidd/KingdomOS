import{C as e,i as t,p as n,r}from"./index-DfkEhdNk.js";import{R as i}from"./options-model-baH24lwc.js";import{k as a,u as o}from"./file-utils-gMYr_JNq.js";import{c as s,i as c,r as l,z as u}from"./node-utils-BD0SusgU.js";import{t as d}from"./drag-BCEUs7e2.js";import{i as f,t as p}from"./stratify-CGdiYggi.js";import{t as m}from"./dialog-BW-Ar0Nf.js";import{o as h}from"./tooltips-BSJdaB-v.js";import{K as g}from"./app-DaOF0_oJ.js";function _(e,t){return e.parent===t.parent?1:2}function v(e){var t=e.children;return t?t[0]:e.t}function y(e){var t=e.children;return t?t[t.length-1]:e.t}function b(e,t,n){var r=n/(t.i-e.i);t.c-=r,t.s+=n,e.c+=r,t.z+=n,t.m+=n}function x(e){for(var t=0,n=0,r=e.children,i=r.length,a;--i>=0;)a=r[i],a.z+=t,a.m+=t,t+=a.s+(n+=a.c)}function ee(e,t,n){return e.a.parent===t.parent?e.a:n}function S(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}S.prototype=Object.create(f.prototype);function C(e){for(var t=new S(e,0),n,r=[t],i,a,o,s;n=r.pop();)if(a=n._.children)for(n.children=Array(s=a.length),o=s-1;o>=0;--o)r.push(i=n.children[o]=new S(a[o],o)),i.parent=n;return(t.parent=new S(null,0)).children=[t],t}function w(){var e=_,t=1,n=1,r=null;function i(i){var s=C(i);if(s.eachAfter(a),s.parent.m=-s.z,s.eachBefore(o),r)i.eachBefore(c);else{var l=i,u=i,d=i;i.eachBefore(function(e){e.x<l.x&&(l=e),e.x>u.x&&(u=e),e.depth>d.depth&&(d=e)});var f=l===u?1:e(l,u)/2,p=f-l.x,m=t/(u.x+f+p),h=n/(d.depth||1);i.eachBefore(function(e){e.x=(e.x+p)*m,e.y=e.depth*h})}return i}function a(t){var n=t.children,r=t.parent.children,i=t.i?r[t.i-1]:null;if(n){x(t);var a=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+e(t._,i._),t.m=t.z-a):t.z=a}else i&&(t.z=i.z+e(t._,i._));t.parent.A=s(t,i,t.parent.A||r[0])}function o(e){e._.x=e.z+e.parent.m,e.m+=e.parent.m}function s(t,n,r){if(n){for(var i=t,a=t,o=n,s=i.parent.children[0],c=i.m,l=a.m,u=o.m,d=s.m,f;o=y(o),i=v(i),o&&i;)s=v(s),a=y(a),a.a=t,f=o.z+u-i.z-c+e(o._,i._),f>0&&(b(ee(o,t,r),t,f),c+=f,l+=f),u+=o.m,c+=i.m,d+=s.m,l+=a.m;o&&!y(a)&&(a.t=o,a.m+=u-l),i&&!v(s)&&(s.t=i,s.m+=c-d,r=t)}return r}function c(e){e.x*=t,e.y=e.depth*n}return i.separation=function(t){return arguments.length?(e=t,i):e},i.size=function(e){return arguments.length?(r=!1,t=+e[0],n=+e[1],i):r?null:[t,n]},i.nodeSize=function(e){return arguments.length?(r=!0,t=+e[0],n=+e[1],i):r?[t,n]:null},i}var T={top:10,right:10,bottom:-5,left:10},E=s().scaleExtent([.2,1.5]).on(`zoom`,e=>k.attr(`transform`,e.transform.toString())),D=null,O,k,A,j,M,N;function te(){re(),ie(),O=u(`#hierarchyTree > svg`).call(E),k=O.select(`g#hierarchyTree_viewbox`),A=k.select(`g#hierarchyTree_linksPrimary`),j=k.select(`g#hierarchyTree_linksSecondary`),M=k.select(`g#hierarchyTree_nodes`),N=k.select(`path#hierarchyTree_dragLine`)}var P,F,I,L,R,z,B;function V(n){if(m.closeAll(`#hierarchyTree, .stable`),P=n.data,F=n.type===`cultures`?i:g,I=U(P),I.filter(e=>!e.shadow).length<3){h(n.type===`cultures`?t(`Not enough cultures to show hierarchy`):t(`Not enough religions to show hierarchy`),!1,`error`),H();return}L=n.onNodeEnter,R=n.onNodeLeave,z=n.getDescription,B=n.getShape;let r=G();if(!r){H();return}let a=r.leaves().length*50,o=r.height*50,s=a-T.left-T.right,c=o+30-T.top-T.bottom,l=w().size([s,c]),u=e(a,300,innerWidth*.75),d=e(o,200,innerHeight*.75);te(),E.extent([[0,0],[u,d]]),O.attr(`viewBox`,`0, 0, ${u}, ${d}`),m.open(`hierarchyTree`,{resizable:!0,title:n.type===`cultures`?t(`Cultures tree`):t(`Religions tree`),position:{my:`left center`,at:`left+10 center`,of:`svg`},width:u,onClose:ne}),Z(r,l)}function ne(){m.destroy(`hierarchyTree_originSelector`),m.destroy(`hierarchyTree`),c(`hierarchyTreeStyle`)?.remove(),H()}function H(){D=null,O=null,k=null,A=null,j=null,M=null,N=null,F=null,P=null,I=null,L=null,R=null,z=null,B=null}function re(){if(c(`hierarchyTreeStyle`))return;let e=document.createElement(`style`);e.id=`hierarchyTreeStyle`,e.textContent=`
    #hierarchyTree_selectedOrigins > button {
      margin: 0 2px;
    }

    #hierarchyTree {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    #hierarchyTree > svg {
      height: 100%;
    }

    .hierarchyTree_selectedOrigins {
      margin-right: 15px;
    }

    .hierarchyTree_selectedOrigin {
      border: 1px solid #aaa;
      background: none;
      padding: 1px 4px;
    }

    .hierarchyTree_selectedOrigin:hover {
      border: 1px solid #333;
    }

    .hierarchyTree_selectedOrigin::after {
      content: "✕";
      margin-left: 8px;
      color: #999;
    }

    .hierarchyTree_selectedOrigin:hover:after {
      color: #333;
    }

    #hierarchyTree_originSelector {
      display: none;
    }

    #hierarchyTree_originSelector > form > div {
      padding: 0.3em;
      margin: 1px 0;
      border-radius: 1em;
    }

    #hierarchyTree_originSelector > form > div:hover {
      background-color: #ddd;
    }

    #hierarchyTree_originSelector > form > div[checked] {
      background-color: #c6d6d6;
    }

    #hierarchyTree_nodes > g > text {
      pointer-events: none;
      stroke: none;
      font-size: 11px;
    }

    #hierarchyTree_nodes > g.selected {
      stroke: #c13119;
      stroke-width: 1;
      cursor: move;
    }

    #hierarchyTree_dragLine {
      marker-end: url(#end-arrow);
      stroke: #333333;
      stroke-dasharray: 5;
      stroke-dashoffset: 1000;
      animation: dash 80s linear backwards;
    }
  `,document.head.appendChild(e)}function ie(){m.destroy(`hierarchyTree`);let e=`<div id="hierarchyTree" class="dialog" style="overflow: hidden;">
    <svg>
      <g id="hierarchyTree_viewbox" style="text-anchor: middle; dominant-baseline: central">
        <g transform="translate(10, -45)">
          <g id="hierarchyTree_links" fill="none" stroke="#aaa">
            <g id="hierarchyTree_linksPrimary"></g>
            <g id="hierarchyTree_linksSecondary" stroke-dasharray="1"></g>
          </g>
          <g id="hierarchyTree_nodes"></g>
          <path id="hierarchyTree_dragLine" path='' />
        </g>
      </g>
    </svg>

    <div id="hierarchyTree_details" class='chartInfo'>
      <div id='hierarchyTree_infoLine' style="display: block">&#8205;</div>
      <div id='hierarchyTree_selected' style="display: none">
        <span><span id='hierarchyTree_selectedName'></span>. </span>
        <span data-name="Type short name (abbreviation)">${t(`Abbreviation`)}: <input id='hierarchyTree_selectedCode' type='text' maxlength='3' size='3' /></span>
        <span>${t(`Origins`)}: <span id='hierarchyTree_selectedOrigins'></span></span>
        <button data-tip='Edit this node's origins' class="hierarchyTree_selectedButton" id='hierarchyTree_selectedSelectButton'>Edit</button>
        <button data-tip='Unselect this node' class="hierarchyTree_selectedButton" id='hierarchyTree_selectedCloseButton'>Unselect</button>
      </div>
    </div>
    <div id="hierarchyTree_originSelector"></div>
  </div>`;l(`dialogs`).insertAdjacentHTML(`beforeend`,e)}function U(e){let t=e.filter(e=>!e.removed).map(e=>({...e,origins:[...e.origins||[]]}));for(let e of t)e.i===0?e.origins=[null]:e.origins.length&&t.find(t=>e.origins[0]===t.i)||(e.origins=[0]),e.origins=e.origins.filter((e,n)=>!n||t.some(t=>t.i&&t.i===e));let n=new Map;for(let e of t){if(!e.i)continue;let t=typeof e.ancestry==`string`?e.ancestry.trim():``;t&&(n.has(t)||n.set(t,[]),n.get(t).push(e))}if(n.size>0){let e=-1,r=[];for(let[i,a]of n.entries()){let n=a.filter(e=>e.origins[0]===0);if(!n.length)continue;let s=e--,c=[...t.map(e=>e.code).filter(Boolean),...r.map(e=>e.code).filter(Boolean)],l={i:s,name:i,code:o(i,c),color:`#ffffff`,type:`Generic`,origins:[0],shadow:!0,ancestry:i};r.push(l);for(let e of n)e.origins[0]=s}t.push(...r)}return t}function W(e,t){try{let n=t.map(e=>Math.max(e,0)),r=[...new Set(n)],i=r.length>1?r.filter(Boolean):r;return F.setOrigins(e,i.length?i:[0]),!0}catch(e){return h(e instanceof Error?e.message:String(e),!1,`error`,4e3),!1}}function G(){try{let e=p().id(e=>String(e.i)).parentId(e=>e.origins[0]==null?null:String(e.origins[0]))(I);return D=e,e}catch(e){return h(r(t(`Hierarchy data issue`),n(String(e))),!1,`error`,6e3),D}}function K(e){return`${e.source.id}-${e.target.id}`}function q(e){return e.id??``}function J(e){let{source:{x:t,y:n},target:{x:r,y:i}}=e;return`M${t},${n} C${t},${(n*3+i)/4} ${r},${(n*2+i)/3} ${r},${i}`}function Y(e){let t=e.descendants(),n=[];for(let e of t){let r=e.data.origins;for(let i=1;i<r.length;i++){let a=t.find(e=>e.data.i===r[i]);a&&n.push({source:a,target:e})}}return n}var ae={undefined:`M5,0A5,5,0,1,1,-5,0A5,5,0,1,1,5,0`,circle:`M11.3,0A11.3,11.3,0,1,1,-11.3,0A11.3,11.3,0,1,1,11.3,0`,square:`M-11,-11h22v22h-22Z`,hexagon:`M-6.5,-11.26l13,0l6.5,11.26l-6.5,11.26l-13,0l-6.5,-11.26Z`,diamond:`M0,-14L14,0L0,14L-14,0Z`,concave:`M-11,-11l11,2l11,-2l-2,11l2,11l-11,-2l-11,2l2,-11Z`,octagon:`M-4.97,-12.01 l9.95,0 l7.04,7.04 l0,9.95 l-7.04,7.04 l-9.95,0 l-7.04,-7.04 l0,-9.95Z`,pentagon:`M0,-14l14,11l-6,14h-16l-6,-14Z`},X=e=>{let t=e.descendants(),n=t.flatMap(({data:e})=>e.origins.slice(1));if(n.length>0)return a(n)??0;if(e.data.shadow){let e=t.filter(e=>!e.data.shadow&&e.data.i>0);if(e.length)return Math.min(...e.map(e=>e.data.i))}return e.data.i};function Z(e,t){t(e.sort((e,t)=>X(e)-X(t))),A.selectAll(`path`).data(e.links(),K).join(`path`).attr(`d`,J),j.selectAll(`path`).data(Y(e),K).join(`path`).attr(`d`,J);let n=M.selectAll(`g`).data(e.descendants(),q).join(`g`).attr(`data-id`,e=>e.data.i).attr(`stroke`,`#333`).attr(`transform`,e=>`translate(${e.x}, ${e.y})`).on(`mouseenter`,se).on(`mouseleave`,ce).on(`click`,(e,t)=>$(t)).call(d().on(`start`,le));n.selectAll(`path`).data(e=>[e]).join(`path`).attr(`d`,e=>ae[B(e.data)??`undefined`]).attr(`fill`,e=>e.data.color||`#ffffff`).attr(`stroke-dasharray`,e=>e.data.cells?`none`:`1`),n.selectAll(`text`).data(e=>[e]).join(`text`).text(e=>e.data.code||``)}function oe(e,t){e.x=t.x,e.y=t.y;for(let n of e.descendants()){let e=t.descendants().find(e=>e.data.i===n.data.i);e&&(n.x=e.x,n.y=e.y)}}function Q(){let e=D;I=U(P);let t=G();if(!t)return;e&&oe(t,e);let n=1e3,r=e=>e.append(`path`).attr(`d`,J).attr(`opacity`,0).call(e=>e.transition().duration(50).attr(`opacity`,1)),i=e=>e.call(e=>e.transition().duration(50).attr(`d`,J)),a=e=>e.call(e=>e.transition().duration(50).attr(`opacity`,0).remove()),o=e=>e.selectAll(`path`);o(A).data(t.links(),K).join(r,i,a),o(j).data(Y(t),K).join(r,i,a);let s=t.leaves().length*50,c=t.height*50,l=s-T.left-T.right,u=c+30-T.top-T.bottom;w().size([l,u])(t.sort((e,t)=>X(e)-X(t))),A.selectAll(`path`).data(t.links(),K).transition().duration(n).delay(50).attr(`d`,J),j.selectAll(`path`).data(Y(t),K).transition().duration(n).delay(50).attr(`d`,J),M.selectAll(`g`).data(t.descendants(),q).transition().delay(50).duration(n).attr(`transform`,e=>`translate(${e.x},${e.y})`)}function $(e){let n=e.data;if(!n.i||n.shadow){M.selectAll(`g`).style(`outline`,`none`),l(`hierarchyTree_selected`).style.display=`none`,l(`hierarchyTree_infoLine`).style.display=`block`;return}let i=M.select(`g[data-id="${e.id}"]`);M.selectAll(`g`).style(`outline`,`none`),i.style(`outline`,`1px solid #c13119`),l(`hierarchyTree_selected`).style.display=`block`,l(`hierarchyTree_infoLine`).style.display=`none`,l(`hierarchyTree_selectedName`).textContent=n.name,l(`hierarchyTree_selectedCode`).value=n.code||``,l(`hierarchyTree_selectedCode`).onchange=function(){let e=this;if(e.value.length>3)return h(t(`Abbreviation must be 3 characters or less`),!1,`error`,3e3);if(!e.value.length)return h(t(`Abbreviation cannot be empty`),!1,`error`,3e3);F.setCode(n.i,e.value),i.select(`text`).text(n.code||``)};let a=()=>{l(`hierarchyTree_selectedOrigins`).innerHTML=n.origins.filter(e=>e&&e>0).map((e,n)=>{let{name:i,code:a}=I.find(t=>t.i===e)||{};return`<button data-id="${e}" class="hierarchyTree_selectedButton hierarchyTree_selectedOrigin" data-tip="${r(t(n?`Secondary origin: {{name}}`:`Primary origin: {{name}}`,{name:i}),t(`Click to remove link to that origin`))}">${a??i??e}</button>`}).join(``),l(`hierarchyTree_selectedOrigins`).onclick=e=>{let t=e.target;if(t.tagName!==`BUTTON`)return;let r=Number(t.dataset.id),i=n.origins.filter(e=>e!==r);W(n.i,i.length?i:[0])&&(t.remove(),Q())}};a(),l(`hierarchyTree_selectedSelectButton`).onclick=()=>{let r=n.origins,i=e.descendants().map(e=>e.data.i),o=I.filter(({i:e,shadow:t})=>!i.includes(e)&&!t).map(({i:e,name:n,code:i,color:a})=>{let o=r[0]===e||e===0&&(r[0]==null||r[0]<=0)?`checked`:``,s=r.includes(e)?`checked`:``;return e===0?`
        <div ${s}>
          <input data-tip="${t(`Set as primary origin`)}" type="radio" name="primary" value="${e}" ${o} />
          ${t(`Top level`)}
        </div>
      `:`
        <div ${s}>
          <input data-tip="${t(`Set as primary origin`)}" type="radio" name="primary" value="${e}" ${o} />
          <input data-id="${e}" id="selectElementOrigin${e}" class="checkbox" type="checkbox" ${s} />
          <label data-tip="${t(`Check to set as a secondary origin`)}" for="selectElementOrigin${e}" class="checkbox-label">
            <fill-box fill="${a}" size=".8em" disabled></fill-box>
            ${i}: ${n}
          </label>
        </div>
      `});l(`hierarchyTree_originSelector`).innerHTML=`
      <form style="max-height: 35vh">
        ${o.join(``)}
      </form>
    `,m.open(`hierarchyTree_originSelector`,{title:t(`Select origins`),position:{my:`center`,at:`center`,of:`svg`},buttons:[{label:t(`Select`),onClick:()=>{m.close(`hierarchyTree_originSelector`);let e=l(`hierarchyTree_originSelector`),t=e.querySelector(`input[type='radio']:checked`),r=e.querySelectorAll(`input[type='checkbox']:checked`),i=t?Number(t.value):0,o=Array.from(r).map(e=>Number(e.dataset.id)).filter(e=>e!==i);W(n.i,[i,...o])&&(Q(),a())}},{label:t(`Cancel`),onClick:()=>{m.close(`hierarchyTree_originSelector`)}}]})},l(`hierarchyTree_selectedCloseButton`).onclick=()=>{i.style(`outline`,`none`),l(`hierarchyTree_selected`).style.display=`none`,l(`hierarchyTree_infoLine`).style.display=`block`}}function se(e,n){n.depth!==0&&(this.classList.add(`selected`),L(n),l(`hierarchyTree_infoLine`).textContent=z(n.data),n.data.shadow?h(t(`Ancestry`)):h(t(`Drag to other node to add parent, click to edit`)))}function ce(e,t){this.classList.remove(`selected`),R(t),l(`hierarchyTree_infoLine`).innerHTML=`&#8205;`,h(``)}function le(e,t){t.data.i&&!t.data.shadow&&(N.attr(`d`,`M${t.x},${t.y}L${t.x},${t.y}`),e.on(`drag`,e=>{N.attr(`d`,`M${t.x},${t.y}L${e.x},${e.y}`)}),e.on(`end`,()=>{N.attr(`d`,``);let e=M.select(`g.selected`);if(!e.size())return;let n=t.data.i,r=e.datum()?.data;if(!r)return;let i=!!r.shadow,a=i?0:r.i;if(n===a||t.data.origins.includes(r.i)||t.descendants().some(e=>e.data.i===r.i))return;let o=P.find(({i:e})=>e===n);if(o){if(i||a===0){if(!W(n,[0]))return}else if(!W(n,[...o.origins?.[0]===0?[]:o.origins??[],a]))return;$(t),Q()}}))}var ue={open:V};export{ue as HierarchyTree};
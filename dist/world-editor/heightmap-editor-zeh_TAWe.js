import{i as e,t}from"./rolldown-runtime-COiEfhsA.js";import{C as n,E as r,S as i,i as a,r as o,t as s}from"./index-DfkEhdNk.js";import{Et as c,n as l,yn as u}from"./options-model-baH24lwc.js";import{_ as d}from"./pack-generator-itXjN9Pv.js";import{d as f,f as p,h as m,y as h}from"./notices-CsL9NM9q.js";import{c as g}from"./linear-C9i-EIkT.js";import{M as _,Nt as v,t as y,xt as b}from"./layers-DJ8BJ3Zy.js";import{A as x,S,c as C,k as w,n as T,t as E}from"./file-utils-gMYr_JNq.js";import{i as D,l as ee}from"./draw-heightmap-Dbhc88iA.js";import{_ as O,f as k,m as te,p as A}from"./color-utils-7EG96Nsk.js";import{A as j,C as ne,D as re,S as ie,a as M,i as N,j as ae,k as oe,n as se,r as P,z as F}from"./node-utils-BD0SusgU.js";import{t as ce}from"./drag-BCEUs7e2.js";import{n as le,t as I}from"./dialog-BW-Ar0Nf.js";import{a as ue,o as L,t as de}from"./tooltips-BSJdaB-v.js";import{t as fe}from"./controllers-DmSw-ZkU.js";import{t as R}from"./grid-generator-Bw7amUrQ.js";import{m as pe,y as me}from"./units-S5RZj9IM.js";import{t as he}from"./file-name-CjjRnvM3.js";import{t as ge}from"./services-DSJYmPRP.js";import{s as _e}from"./zoom-U9bkgxPn.js";import{t as z}from"./heightmap-generator-CoN5wc8x.js";import{t as ve}from"./temperature-generator-BqS5MeQ2.js";import{t as ye}from"./map-restoration-CSpjVqDZ.js";import{H as be,U as xe,d as Se,f as Ce,y as we}from"./app-DaOF0_oJ.js";import{n as Te,t as Ee}from"./brush-circle-CtgYOR0J.js";import{t as De}from"./brush-utils-B5xtY9tr.js";import{t as Oe}from"./sortable-list-Brr5kHW5.js";var B=18,ke=.96422,Ae=1,je=.82521,Me=4/29,V=6/29,Ne=3*V*V,Pe=V*V*V;function Fe(e){if(e instanceof H)return new H(e.l,e.a,e.b,e.opacity);if(e instanceof U)return Ue(e);e instanceof ne||(e=oe(e));var t=Be(e.r),n=Be(e.g),r=Be(e.b),i=Le((.2225045*t+.7168786*n+.0606169*r)/Ae),a,o;return t===n&&n===r?a=o=i:(a=Le((.4360747*t+.3850649*n+.1430804*r)/ke),o=Le((.0139322*t+.0971045*n+.7141733*r)/je)),new H(116*i-16,500*(a-i),200*(i-o),e.opacity)}function Ie(e,t,n,r){return arguments.length===1?Fe(e):new H(e,t,n,r??1)}function H(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}j(H,Ie,ae(ie,{brighter(e){return new H(this.l+B*(e??1),this.a,this.b,this.opacity)},darker(e){return new H(this.l-B*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=ke*Re(t),e=Ae*Re(e),n=je*Re(n),new ne(ze(3.1338561*t-1.6168667*e-.4906146*n),ze(-.9787684*t+1.9161415*e+.033454*n),ze(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function Le(e){return e>Pe?e**(1/3):e/Ne+Me}function Re(e){return e>V?e*e*e:Ne*(e-Me)}function ze(e){return 255*(e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055)}function Be(e){return(e/=255)<=.04045?e/12.92:((e+.055)/1.055)**2.4}function Ve(e){if(e instanceof U)return new U(e.h,e.c,e.l,e.opacity);if(e instanceof H||(e=Fe(e)),e.a===0&&e.b===0)return new U(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*A;return new U(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function He(e,t,n,r){return arguments.length===1?Ve(e):new U(e,t,n,r??1)}function U(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}function Ue(e){if(isNaN(e.h))return new H(e.l,0,0,e.opacity);var t=e.h*te;return new H(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}j(U,He,ae(ie,{brighter(e){return new U(this.h,this.c,this.l+B*(e??1),this.opacity)},darker(e){return new U(this.h,this.c,this.l-B*(e??1),this.opacity)},rgb(){return Ue(this).rgb()}}));var We=t(((e,t,n)=>{(function(){function e(e){if(e||={},this.method=e.method||2,this.colors=e.colors||256,this.initColors=e.initColors||4096,this.initDist=e.initDist||.01,this.distIncr=e.distIncr||.005,this.hueGroups=e.hueGroups||10,this.satGroups=e.satGroups||10,this.lumGroups=e.lumGroups||10,this.minHueCols=e.minHueCols||0,this.hueStats=this.minHueCols?new n(this.hueGroups,this.minHueCols):null,this.boxSize=e.boxSize||[64,64],this.boxPxls=e.boxPxls||2,this.palLocked=!1,this.dithKern=e.dithKern||null,this.dithSerp=e.dithSerp||!1,this.dithDelta=e.dithDelta||0,this.histogram={},this.idxrgb=e.palette?e.palette.slice(0):[],this.idxi32=[],this.i32idx={},this.i32rgb={},this.useCache=e.useCache!==!1,this.cacheFreq=e.cacheFreq||10,this.reIndex=e.reIndex||this.idxrgb.length==0,this.colorDist=e.colorDist==`manhattan`?p:d,this.idxrgb.length>0){var t=this;this.idxrgb.forEach(function(e,n){var r=(255<<24|e[2]<<16|e[1]<<8|e[0])>>>0;t.idxi32[n]=r,t.i32idx[r]=n,t.i32rgb[r]=e})}}e.prototype.sample=function(e,t){if(this.palLocked)throw`Cannot sample additional images, palette already assembled.`;var n=S(e,t);switch(this.method){case 1:this.colorStats1D(n.buf32);break;case 2:this.colorStats2D(n.buf32,n.width)}},e.prototype.reduce=function(e,t,n,r){if(this.palLocked||this.buildPal(),n||=this.dithKern,r=r===void 0?this.dithSerp:r,t||=1,n)var i=this.dither(e,n,r);else for(var a=S(e).buf32,o=a.length,i=new Uint32Array(o),s=0;s<o;s++){var c=a[s];i[s]=this.nearestColor(c)}if(t==1)return new Uint8Array(i.buffer);if(t==2){for(var l=[],o=i.length,s=0;s<o;s++){var c=i[s];l[s]=this.i32idx[c]}return l}},e.prototype.dither=function(e,t,n){var r={FloydSteinberg:[[7/16,1,0],[3/16,-1,1],[5/16,0,1],[1/16,1,1]],FalseFloydSteinberg:[[3/8,1,0],[3/8,0,1],[2/8,1,1]],Stucki:[[8/42,1,0],[4/42,2,0],[2/42,-2,1],[4/42,-1,1],[8/42,0,1],[4/42,1,1],[2/42,2,1],[1/42,-2,2],[2/42,-1,2],[4/42,0,2],[2/42,1,2],[1/42,2,2]],Atkinson:[[1/8,1,0],[1/8,2,0],[1/8,-1,1],[1/8,0,1],[1/8,1,1],[1/8,0,2]],Jarvis:[[7/48,1,0],[5/48,2,0],[3/48,-2,1],[5/48,-1,1],[7/48,0,1],[5/48,1,1],[3/48,2,1],[1/48,-2,2],[3/48,-1,2],[5/48,0,2],[3/48,1,2],[1/48,2,2]],Burkes:[[8/32,1,0],[4/32,2,0],[2/32,-2,1],[4/32,-1,1],[8/32,0,1],[4/32,1,1],[2/32,2,1]],Sierra:[[5/32,1,0],[3/32,2,0],[2/32,-2,1],[4/32,-1,1],[5/32,0,1],[4/32,1,1],[2/32,2,1],[2/32,-1,2],[3/32,0,2],[2/32,1,2]],TwoSierra:[[4/16,1,0],[3/16,2,0],[1/16,-2,1],[2/16,-1,1],[3/16,0,1],[2/16,1,1],[1/16,2,1]],SierraLite:[[2/4,1,0],[1/4,-1,1],[1/4,0,1]]};if(!t||!r[t])throw`Unknown dithering kernel: `+t;var i=r[t],a=S(e),o=a.buf32,s=a.width,c=a.height;o.length;for(var l=n?-1:1,u=0;u<c;u++){n&&(l*=-1);for(var d=u*s,f=l==1?0:s-1,p=l==1?s:0;f!==p;f+=l){var m=d+f,h=o[m],g=h&255,_=(h&65280)>>8,v=(h&16711680)>>16,y=this.nearestColor(h),b=y&255,x=(y&65280)>>8,C=(y&16711680)>>16;if(o[m]=255<<24|C<<16|x<<8|b,!(this.dithDelta&&this.colorDist([g,_,v],[b,x,C])<this.dithDelta))for(var w=g-b,T=_-x,E=v-C,D=l==1?0:i.length-1,ee=l==1?i.length:0;D!==ee;D+=l){var O=i[D][1]*l,k=i[D][2],te=k*s;if(O+f>=0&&O+f<s&&k+u>=0&&k+u<c){var A=i[D][0],j=m+(te+O),ne=o[j]&255,re=(o[j]&65280)>>8,ie=(o[j]&16711680)>>16,M=Math.max(0,Math.min(255,ne+w*A)),N=Math.max(0,Math.min(255,re+T*A));o[j]=255<<24|Math.max(0,Math.min(255,ie+E*A))<<16|N<<8|M}}}}return o},e.prototype.buildPal=function(e){if(!(this.palLocked||this.idxrgb.length>0&&this.idxrgb.length<=this.colors)){var t=this.histogram,n=T(t,!0);if(n.length==0)throw`Nothing has been sampled, palette cannot be built.`;switch(this.method){case 1:for(var r=this.initColors,i=t[n[r-1]],a=n.slice(0,r),o=r,s=n.length;o<s&&t[n[o]]==i;)a.push(n[o++]);this.hueStats&&this.hueStats.inject(a);break;case 2:var a=n}a=a.map(function(e){return+e}),this.reducePal(a),!e&&this.reIndex&&this.sortPal(),this.useCache&&this.cacheHistogram(a),this.palLocked=!0}},e.prototype.palette=function(e,t){return this.buildPal(t),e?this.idxrgb:new Uint8Array(new Uint32Array(this.idxi32).buffer)},e.prototype.prunePal=function(e){for(var t,n=0;n<this.idxrgb.length;n++)e[n]||(t=this.idxi32[n],this.idxrgb[n]=null,this.idxi32[n]=null,delete this.i32idx[t]);if(this.reIndex){for(var r=[],i=[],a={},n=0,o=0;n<this.idxrgb.length;n++)this.idxrgb[n]&&(t=this.idxi32[n],r[o]=this.idxrgb[n],a[t]=o,i[o]=t,o++);this.idxrgb=r,this.idxi32=i,this.i32idx=a}},e.prototype.reducePal=function(e){if(this.idxrgb.length>this.colors){for(var t=e.length,n={},r=0,i,a=!1,o=0;o<t;o++)r==this.colors&&!a&&(this.prunePal(n),a=!0),i=this.nearestIndex(e[o]),r<this.colors&&!n[i]&&(n[i]=!0,r++);a||=(this.prunePal(n),!0)}else{var s=e.map(function(e){return[e&255,(e&65280)>>8,(e&16711680)>>16]}),t=s.length,c=t,l=this.initDist;if(c>this.colors){for(;c>this.colors;){for(var u=[],o=0;o<t;o++){var d=s[o];if(e[o],d)for(var f=o+1;f<t;f++){var p=s[f],m=e[f];if(p){var h=this.colorDist(d,p);h<l&&(u.push([f,p,m,h]),delete s[f],c--)}}}l+=c>this.colors*3?this.initDist:this.distIncr}if(c<this.colors){y.call(u,function(e,t){return t[3]-e[3]});for(var g=0;c<this.colors;)s[u[g][0]]=u[g][1],c++,g++}}for(var t=s.length,o=0;o<t;o++)s[o]&&(this.idxrgb.push(s[o]),this.idxi32.push(e[o]),this.i32idx[e[o]]=this.idxi32.length-1,this.i32rgb[e[o]]=s[o])}},e.prototype.colorStats1D=function(e){for(var t=this.histogram,n,r=e.length,i=0;i<r;i++)n=e[i],(n&4278190080)>>24&&(this.hueStats&&this.hueStats.check(n),n in t?t[n]++:t[n]=1)},e.prototype.colorStats2D=function(e,t){var n=this.boxSize[0],r=this.boxSize[1],i=n*r,a=C(t,e.length/t,n,r),o=this.histogram,s=this;a.forEach(function(n){var r=Math.max(Math.round(n.w*n.h/i)*s.boxPxls,2),a={},c;w(n,t,function(t){c=e[t],(c&4278190080)>>24&&(s.hueStats&&s.hueStats.check(c),c in o?o[c]++:c in a?++a[c]>=r&&(o[c]=a[c]):a[c]=1)})}),this.hueStats&&this.hueStats.inject(o)},e.prototype.sortPal=function(){var e=this;this.idxi32.sort(function(t,n){var r=e.i32idx[t],i=e.i32idx[n],a=e.idxrgb[r],o=e.idxrgb[i],s=m(a[0],a[1],a[2]),c=m(o[0],o[1],o[2]),l=a[0]==a[1]&&a[1]==a[2]?-1:h(s.h,e.hueGroups),u=(o[0]==o[1]&&o[1]==o[2]?-1:h(c.h,e.hueGroups))-l;if(u)return-u;var d=_(+c.l.toFixed(2))-_(+s.l.toFixed(2));if(d)return-d;var f=g(+c.s.toFixed(2))-g(+s.s.toFixed(2));if(f)return-f}),this.idxi32.forEach(function(t,n){e.idxrgb[n]=e.i32rgb[t],e.i32idx[t]=n})},e.prototype.nearestColor=function(e){var t=this.nearestIndex(e);return t===null?0:this.idxi32[t]},e.prototype.nearestIndex=function(e){if(!((e&4278190080)>>24))return null;if(this.useCache&&``+e in this.i32idx)return this.i32idx[e];for(var t=1e3,n,r=[e&255,(e&65280)>>8,(e&16711680)>>16],i=this.idxrgb.length,a=0;a<i;a++)if(this.idxrgb[a]){var o=this.colorDist(r,this.idxrgb[a]);o<t&&(t=o,n=a)}return n},e.prototype.cacheHistogram=function(e){for(var t=0,n=e[t];t<e.length&&this.histogram[n]>=this.cacheFreq;n=e[t++])this.i32idx[n]=this.nearestIndex(n)};function n(e,t){this.numGroups=e,this.minCols=t,this.stats={};for(var n=-1;n<e;n++)this.stats[n]={num:0,cols:[]};this.groupsFull=0}n.prototype.check=function(e){this.groupsFull==this.numGroups+1&&(this.check=function(){});var t=e&255,n=(e&65280)>>8,r=(e&16711680)>>16,i=t==n&&n==r?-1:h(m(t,n,r).h,this.numGroups),a=this.stats[i],o=this.minCols;a.num++,!(a.num>o)&&(a.num==o&&this.groupsFull++,a.num<=o&&this.stats[i].cols.push(e))},n.prototype.inject=function(e){for(var t=-1;t<this.numGroups;t++)if(this.stats[t].num<=this.minCols)switch(v(e)){case`Array`:this.stats[t].cols.forEach(function(t){e.indexOf(t)==-1&&e.push(t)});break;case`Object`:this.stats[t].cols.forEach(function(t){e[t]?e[t]++:e[t]=1})}};var r=.2126,i=.7152,a=.0722;function o(e,t,n){return Math.sqrt(r*e*e+i*t*t+a*n*n)}var s=255,c=255,l=255,u=Math.sqrt(r*s*s+i*c*c+a*l*l);function d(e,t){var n=t[0]-e[0],o=t[1]-e[1],s=t[2]-e[2];return Math.sqrt(r*n*n+i*o*o+a*s*s)/u}var f=r*s+i*c+a*l;function p(e,t){var n=Math.abs(t[0]-e[0]),o=Math.abs(t[1]-e[1]),s=Math.abs(t[2]-e[2]);return(r*n+i*o+a*s)/f}function m(e,t,n){var r,i,a,s,c,l;if(e/=255,t/=255,n/=255,r=Math.max(e,t,n),i=Math.min(e,t,n),c=(r+i)/2,r==i)a=s=0;else{switch(l=r-i,s=c>.5?l/(2-r-i):l/(r+i),r){case e:a=(t-n)/l+(t<n?6:0);break;case t:a=(n-e)/l+2;break;case n:a=(e-t)/l+4}a/=6}return{h:a,s,l:o(e,t,n)}}function h(e,t){var n=1/t,r=n/2;if(e>=1-r||e<=r)return 0;for(var i=1;i<t;i++){var a=i*n;if(e>=a-r&&e<=a+r)return i}}function g(e){return e}function _(e){return e}function v(e){return Object.prototype.toString.call(e).slice(8,-1)}var y=x()?Array.prototype.sort:b;function b(e){var t=v(this[0]);if(t==`Number`||t==`String`){for(var n={},r=this.length,i,a=0;a<r;a++)i=this[a],!(n[i]||n[i]===0)&&(n[i]=a);return this.sort(function(t,r){return e(t,r)||n[t]-n[r]})}var n=this.map(function(e){return e});return this.sort(function(t,r){return e(t,r)||n.indexOf(t)-n.indexOf(r)})}function x(){var e=`abcdefghijklmnopqrstuvwxyz`;return e.split(``).sort(function(t,n){return~~(e.indexOf(n)/2.3)-~~(e.indexOf(t)/2.3)}).join(``)==`xyzvwtursopqmnklhijfgdeabc`}function S(e,t){var n,r,i,a,o,s;switch(v(e)){case`HTMLImageElement`:n=document.createElement(`canvas`),n.width=e.naturalWidth,n.height=e.naturalHeight,r=n.getContext(`2d`),r.drawImage(e,0,0);case`Canvas`:case`HTMLCanvasElement`:n||=e,r||=n.getContext(`2d`);case`CanvasRenderingContext2D`:r||=e,n||=r.canvas,i=r.getImageData(0,0,n.width,n.height);case`ImageData`:i||=e,t=i.width,a=v(i.data)==`CanvasPixelArray`?new Uint8Array(i.data):i.data;case`Array`:case`CanvasPixelArray`:a||=new Uint8Array(e);case`Uint8Array`:case`Uint8ClampedArray`:a||=e,o=new Uint32Array(a.buffer);case`Uint32Array`:o||=e,a||=new Uint8Array(o.buffer),t||=o.length,s=o.length/t}return{can:n,ctx:r,imgd:i,buf8:a,buf32:o,width:t,height:s}}function C(e,t,n,r){~~(e/n);var i=e%n;~~(t/r);for(var a=t%r,o=e-i,s=t-a,c=[],l=0;l<t;l+=r)for(var u=0;u<e;u+=n)c.push({x:u,y:l,w:u==o?i:n,h:l==s?a:r});return c}function w(e,t,n){var r=e,i=r.y*t+r.x,a=(r.y+r.h-1)*t+(r.x+r.w-1),o=0,s=t-r.w+1,c=i;do n.call(this,c),c+=++o%r.w==0?s:1;while(c<=a)}function T(e,t){var n=[];for(var r in e)n.push(r);return y.call(n,function(n,r){return t?e[r]-e[n]:e[n]-e[r]})}this.RgbQuant=e,t!==void 0&&t.exports&&(t.exports=e)}).call(n)})),Ge=e(d()),Ke=e(We()),qe=[{stroke:`#888`,width:.4,opacity:.8},{stroke:`#444`,width:.5,opacity:.8},{stroke:`#3d9df0`,width:.8,opacity:1},{stroke:`#1a6fd6`,width:1,opacity:1},{stroke:`#0a49ad`,width:1.2,opacity:1}],Je=2,Ye=14,Xe=.5;function Ze(e){let{cells:t,points:i,spacing:a}=grid,o=e?R.findDeepDepressionLakes(t,options.generation.lakeElevationLimit):[],s=Uint8Array.from(t.h);for(let e of o)for(let t of e)s[t]=19;let{target:c,flux:l,depth:u,river:d}=tt({...t,h:s},Qe(s)),f=a/Ye,p=a*.25,m=r(a*.35,2),h=qe.map(()=>[]),g=[],_=e=>{let t=Math.floor(Math.log2(l[e]/30)/2)+Je;return n(t,0,d[e]?qe.length-1:1)},v=e=>r(Math.min(.5+e/30,1),2);for(let e of t.i){if(u[e]>=Xe&&g.push(`<polygon points="${R.getPolygon(e)}" fill-opacity="${v(u[e])}"/>`),c[e]===-1)continue;let[t,n]=i[e],[a,o]=i[c[e]],s=a-t,l=o-n,d=Math.hypot(s,l)||1,f=s/d,m=l/d,[y,b]=[t+f*d*.15,n+m*d*.15],[x,S]=[t+f*d*.7,n+m*d*.7],[C,w]=[x-p*(f*.87-m*.5),S-p*(m*.87+f*.5)],[T,E]=[x-p*(f*.87+m*.5),S-p*(m*.87-f*.5)];h[_(e)].push(`M${r(y,1)},${r(b,1)}L${r(x,1)},${r(S,1)}M${r(C,1)},${r(w,1)}L${r(x,1)},${r(S,1)}L${r(T,1)},${r(E,1)}`)}let y=h.map((e,t)=>{if(!e.length)return``;let{stroke:n,width:i,opacity:a}=qe[t],o=`stroke="${n}" stroke-width="${r(i*f,2)}" opacity="${a}"`;return`<path d="${e.join(``)}" ${o}/>`}),b=o.flat().map(e=>`<polygon points="${R.getPolygon(e)}"/>`),x=()=>{let e=N(`drainage`);if(e)return e;let t=se(`g`,`drainage`,{"pointer-events":`none`});return P(`debug`).append(t),t};x().innerHTML=`
    <pattern id="drainageHatch" width="${m}" height="${m}" patternUnits="userSpaceOnUse">
      <path d="M0,${m}L${m},0" stroke="#333" stroke-width="${r(.5*f,2)}"/>
    </pattern>
    <pattern id="drainageLakeHatch" width="${m}" height="${m}" patternUnits="userSpaceOnUse">
      <path d="M0,0L${m},${m}" stroke="#1a5fc8" stroke-width="${r(.8*f,2)}"/>
    </pattern>
    <g fill="url(#drainageHatch)" stroke="#000" stroke-width="${r(.3*f,2)}">${g.join(``)}</g>
    <g fill="url(#drainageLakeHatch)" stroke="#1a5fc8" stroke-width="${r(.5*f,2)}">${b.join(``)}</g>
    <g fill="none">${y.join(``)}</g>`}var Qe=e=>_.compute(e,ve.compute(e));function $e(){N(`drainage`)?.remove()}var et=1e-4;function tt(e,t){let{c:n,b:r,h:i}=e,a=e.i.length,o=new Float64Array(a),s=new Uint8Array(a),l=new c;for(let e=0;e<a;e++)i[e]>=20&&!r[e]||(o[e]=i[e],s[e]=1,l.push(e,i[e]));for(;l.length;){let e=l.pop();for(let t of n[e])s[t]||(s[t]=1,o[t]=Math.max(i[t],o[e]+et),l.push(t,o[t]))}let u=new Int32Array(a).fill(-1),d=new Float32Array(a),f=new Float32Array(a),p=[];for(let e=0;e<a;e++)if(!(i[e]<20||r[e])){p.push(e),f[e]=o[e]-i[e];for(let t of n[e])o[t]<o[u[e]===-1?e:u[e]]&&(u[e]=t)}let m=(R.getCellsDesired()/1e4)**.25;p.sort((e,t)=>o[t]-o[e]);for(let e of p)d[e]=Math.floor(d[e]+t[e]/m),u[e]!==-1&&(d[u[e]]+=d[e]);let h=new Uint8Array(a);for(let e of p)d[e]<30||u[e]===-1||(i[u[e]]>=20&&(h[e]=1),h[u[e]]=1);return{target:u,flux:d,depth:f,river:h}}var nt=k(ee),rt=`heightmapEditor`,it=[`renderOcean`,`showDrainage`,`allowErosion`],at=100,W,G=Object.assign([],{n:0}),K=null,ot=null,q=null;function st(e){W=le.get(rt,`filters`,()=>({cellType:`all`})),[`all`,`land`,`water`].includes(W.cellType)||(W.cellType=`all`),le.set(rt,`filters`,W);let{mode:t,tool:n}=e||{};z.clearData(),Tt(),F(`#viewbox`).selectAll(`#heights`).remove(),F(`#viewbox`).insert(`g`,`#terrs`).attr(`id`,`heights`),t?Y(t,n):pt(n)}dt();function ct(){I.destroy(`templateEditor`);let e=`<div id="templateEditor" class="dialog stable">
      <div id="templateTop">
        <i>${a(`Select template`)}: </i>
        <select id="templateSelect" style="width: 16em" data-prev="templateCustom" data-tip="${a(`Select base template`)}">
          <option value="custom" selected>${a(`Custom`)}</option>
          <option value="volcano">${a(`Volcano`)}</option>
          <option value="highIsland">${a(`High Island`)}</option>
          <option value="lowIsland">${a(`Low Island`)}</option>
          <option value="continents">${a(`Continents`)}</option>
          <option value="archipelago">${a(`Archipelago`)}</option>
          <option value="atoll">${a(`Atoll`)}</option>
          <option value="mediterranean">${a(`Mediterranean`)}</option>
          <option value="peninsula">${a(`Peninsula`)}</option>
          <option value="pangea">${a(`Pangea`)}</option>
          <option value="isthmus">${a(`Isthmus`)}</option>
          <option value="shattered">${a(`Shattered`)}</option>
          <option value="taklamakan">${a(`Taklamakan`)}</option>
          <option value="oldWorld">${a(`Old World`)}</option>
          <option value="fractious">${a(`Fractious`)}</option>
        </select>
      </div>
      <div id="templateTools">
        <button data-type="Hill" data-tip="${a(`Hill: small blob`)}">H</button>
        <button data-type="Pit" data-tip="${a(`Pit: round depression`)}">P</button>
        <button data-type="Range" data-tip="${a(`Range: elongated elevation`)}">R</button>
        <button data-type="Trough" data-tip="${a(`Trough: elongated depression`)}">T</button>
        <button data-type="Strait" data-tip="${a(`Strait: centered vertical or horizontal depression`)}">S</button>
        <button data-type="Mask" data-tip="${a(`Mask: lower cells near edges or in map center`)}">M</button>
        <button data-type="Invert" data-tip="${a(`Invert heightmap along the axes`)}">I</button>
        <button data-type="Add" data-tip="${a(`Add or subtract value from all heights in range`)}">+</button>
        <button data-type="Multiply" data-tip="${a(`Multiply all heights in range by factor`)}">*</button>
        <button
          data-type="Smooth"
          data-tip="${a(`Smooth the map replacing cell heights by an average values of its neighbors`)}"
        >
          ~
        </button>
      </div>
      <div id="templateBody" data-changed="0" class="table" style="padding: 2px 0">
        <div data-type="Hill">
          <div class="icon-check" data-tip="${a(`Click to skip the step`)}"></div>
          <div style="width: 4em">${a(`Hill`)}</div>
          <i class="icon-trash-empty pointer" data-tip="${a(`Remove`)}"></i>
          <i class="icon-resize-vertical" data-tip="${a(`Drag to reorder`)}"></i>
          <span
            >y:<input class="templateY" data-tip="${a(`Y axis position in percentage (minY-maxY or Y)`)}" value="47-53"
          /></span>
          <span
            >x:<input class="templateX" data-tip="${a(`X axis position in percentage (minX-maxX or X)`)}" value="65-75"
          /></span>
          <span
            >h:<input
              class="templateHeight"
              data-tip="${a(`Blob maximum height, use hyphen to get a random number in range`)}"
              value="90-100"
          /></span>
          <span
            >n:<input
              class="templateCount"
              data-tip="${a(`Blobs to add, use hyphen to get a random number in range`)}"
              value="1"
          /></span>
        </div>
      </div>
      <div id="templateBottom">
        <button id="templateRun" data-tip="${a(`Execute the template`)}" class="icon-play-circled2"></button>
        <button id="templateUndo" data-tip="${a(`Undo the latest action`)}" class="icon-ccw" disabled></button>
        <button id="templateRedo" data-tip="${a(`Redo the action`)}" class="icon-cw" disabled></button>
        <button id="templateSave" data-tip="${a(`Download the template as a text file`)}" class="icon-download"></button>
        <button id="templateLoad" data-tip="${a(`Open previously downloaded template`)}" class="icon-upload"></button>
        <button
          id="templateCA"
          data-tip="${a(`Find or share custom template on Cartography Assets portal`)}"
          class="icon-drafting-compass"
        ></button>
        <button
          id="templateTutorial"
          data-tip="${a(`Open Template Editor Tutorial`)}"
          class="icon-info"
        ></button>
        <label
          data-tip="${a(`Enter seed for template to generate the same heightmap each time`)}"
        >
          ${a(`Seed`)}: <input id="templateSeed" value="" type="number" min="1" max="999999999" step="1" style="width: 8em" />
        </label>
      </div>
    </div>`;P(`dialogs`).insertAdjacentHTML(`beforeend`,e);let t=P(`templateBody`);Oe(t,{items:`div`,handle:`.icon-resize-vertical`}),t.addEventListener(`click`,e=>{let n=e.target;n.classList.contains(`icon-check`)?(n.classList.remove(`icon-check`),n.classList.add(`icon-check-empty`),n.parentElement.style.opacity=`0.5`,t.dataset.changed=`1`):n.classList.contains(`icon-check-empty`)?(n.classList.add(`icon-check`),n.classList.remove(`icon-check-empty`),n.parentElement.style.opacity=`1`):n.classList.contains(`icon-trash-empty`)&&n.parentElement.remove()}),P(`templateEditor`).addEventListener(`keypress`,e=>{e.key===`Enter`&&(e.preventDefault(),$t())}),P(`templateTools`).addEventListener(`click`,Kt),P(`templateSelect`).addEventListener(`change`,Zt),P(`templateRun`).addEventListener(`click`,$t),P(`templateCA`).addEventListener(`click`,()=>p(`https://cartographyassets.com/asset-category/specific-assets/azgaars-generator/templates`)),P(`templateTutorial`).addEventListener(`click`,()=>m(`Heightmap-template-editor`)),P(`templateUndo`).addEventListener(`click`,()=>$(G.n-1)),P(`templateRedo`).addEventListener(`click`,()=>$(G.n+1)),P(`templateSave`).addEventListener(`click`,en),P(`templateLoad`).addEventListener(`click`,tn)}function lt(){I.destroy(`imageConverter`);let e=`<div id="imageConverter" class="dialog stable">
      <div id="convertImageButtons">
        <button id="convertImageLoad" data-tip="${a(`Load image to convert`)}" class="icon-upload"></button>
        <button
          id="convertAutoLum"
          data-tip="${a(`Auto-assign colors based on liminosity (good for monochrome images)`)}"
          class="icon-adjust"
        ></button>
        <button
          id="convertAutoHue"
          data-tip="${a(`Auto-assign colors based on hue (good for colored images)`)}"
          class="icon-paint-roller"
        ></button>
        <button
          id="convertAutoFMG"
          data-tip="${a(`Auto-assign colors using generator scheme (for exported colored heightmaps)`)}"
          class="icon-layer-group"
        ></button>
        <button id="convertColorsButton" data-tip="${a(`Set maximum number of colors`)}" class="icon-signal"></button>
        <input id="convertColors" value="100" style="display: none" />
        <button
          id="convertCancel"
          data-tip="${a(`Cancel the conversion. Previous heightmap will be restored`)}"
          class="icon-cancel"
        ></button>
      </div>
      <div data-tip="${a(`Set opacity of the loaded image`)}" style="padding-top: 0.4em">
        <i>${a(`Overlay opacity`)}:</i><br />
        <input id="convertOverlay" type="range" min="0" max="1" step=".01" value="0" style="width: 12.6em" />
        <input id="convertOverlayNumber" type="number" min="0" max="1" step=".01" value="0" style="width: 4.2em" />
      </div>
      <div data-tip="${a(`Select a color to assign a height value`)}" id="colorsSelect" style="display: none">
        <i>${a(`Set height`)}: </i>
        <span id="colorsSelectValue"></span>
        <span>(<span id="colorsSelectFriendly">0</span>)</span><br />
        <div id="imageConverterPalette"></div>
      </div>
      <div data-tip="${a(`Select a color to re-assign the height value`)}" id="colorsAssigned" style="display: none">
        <i>${a(`Assigned colors`)} (<span id="colorsAssignedNumber"></span>):</i>
        <div id="colorsAssignedContainer" class="colorsContainer"></div>
      </div>
      <div data-tip="${a(`Select a color to assign a height value`)}" id="colorsUnassigned" style="display: none">
        <i>${a(`Unassigned colors`)} (<span id="colorsUnassignedNumber"></span>):</i>
        <div id="colorsUnassignedContainer" class="colorsContainer"></div>
      </div>
      <button
        id="convertComplete"
        data-tip="${o(a(`Complete the conversion`),a(`All unassigned colors will be considered as ocean`))}"
        style="margin: 0.4em 0"
        class="glow"
      >
        ${a(`Complete the conversion`)}
      </button>
    </div>`;P(`dialogs`).insertAdjacentHTML(`beforeend`,e),F(`#imageConverterPalette`).selectAll(`div`).data(O(101)).enter().append(`div`).attr(`data-color`,e=>e).style(`background-color`,e=>nt(1-(e<20?e-5:e)/100)).style(`width`,e=>e<40||e>68?`.2em`:`.1em`).on(`touchmove mousemove`,on).on(`click`,dn),P(`convertImageLoad`).addEventListener(`click`,rn),P(`convertAutoLum`).addEventListener(`click`,()=>fn(`lum`)),P(`convertAutoHue`).addEventListener(`click`,()=>fn(`hue`)),P(`convertAutoFMG`).addEventListener(`click`,()=>fn(`scheme`)),P(`convertColorsButton`).addEventListener(`click`,pn),P(`convertComplete`).addEventListener(`click`,hn),P(`convertCancel`).addEventListener(`click`,gn),P(`convertOverlay`).addEventListener(`input`,function(){mn(+this.value)}),P(`convertOverlayNumber`).addEventListener(`input`,function(){mn(+this.value)})}var ut=[];function dt(){P(`paintBrushes`).addEventListener(`click`,Et),P(`applyTemplate`).addEventListener(`click`,Wt),P(`convertImage`).addEventListener(`click`,an),P(`heightmapPreview`).addEventListener(`click`,yn),P(`heightmap3DView`).addEventListener(`click`,Ce),P(`finalizeHeightmap`).addEventListener(`click`,gt);for(let e of it)P(e).addEventListener(`change`,function(){l.set(t=>t.app.heightmapEditor[e]=this.checked),e===`renderOcean`&&Z(),e!==`renderOcean`&&ft()})}function ft(){options.app.heightmapEditor.showDrainage?J():$e()}function J(){if(options.app.mode!==`heightmap`||!options.app.heightmapEditor.showDrainage)return;let e=P(`heightmapEditMode`).innerHTML;Ze(e!==`keep`&&options.app.heightmapEditor.allowErosion)}function pt(e){I.message({title:a(`Edit Heightmap`),message:`${a(`Heightmap is a core element on which all other data (rivers, burgs, states etc) is based. So the best edit approach is to erase the secondary data and let the system automatically regenerate it on edit completion.`)}
    <p>${a(`Erase mode also allows you Convert an Image into a heightmap or use Template Editor.`)}</p>
    <p>${a(`You can keep the data, but you won't be able to change the coastline.`)}</p>
    <p>${a(`Try risk mode to change the coastline and keep the data. The data will be restored as much as possible, but it can cause unpredictable errors.`)}</p>
    <p>${a(`Please {{- save}} before editing the heightmap!`,{save:`<span id="modeDialogSave" class="pseudoLink">${a(`save the map`)}</span>`})}</p>
    <p style="margin-bottom: 0">${a(`Check out {{- wiki}} for guidance.`,{wiki:f(`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Heightmap-customization`,a(`wiki`))})}</p>`,width:`28em`,buttons:[{label:a(`Erase`),onClick:()=>Y(`erase`,e)},{label:a(`Keep`),onClick:()=>Y(`keep`,e)},{label:a(`Risk`),onClick:()=>Y(`risk`,e)},{label:a(`Cancel`)}]}),P(`modeDialogSave`).addEventListener(`click`,()=>ge.Save.toMachine())}function Y(e,t){ut=y.state.active,y.set([]),options.app.mode=`heightmap`,I.closeAll(),L(a(`Heightmap edit mode is active. Click on “Exit Customization” to finalize the heightmap`),!0),P(`options`).querySelectorAll(`.tabcontent`).forEach(e=>{e.style.display=`none`}),P(`options`).querySelector(`.tab > .active`).classList.remove(`active`),P(`heightmapMenu`).style.display=`block`,P(`toolsTab`).classList.add(`active`),P(`heightmapEditMode`).innerHTML=e;for(let e of it)P(e).checked=options.app.heightmapEditor[e];e===`erase`?(be(),W.cellType=`all`):e===`keep`?(y.get(`landmass`).getEl().replaceChildren(),W.cellType=`land`):e===`risk`&&(ot=grid.cells.h.slice(),F(`#deftemp`).selectAll(`#land, #water`).selectAll(`path`).remove(),F(`#deftemp`).select(`#featurePaths`).selectAll(`path`).remove(),F(`#viewbox`).selectAll(`#coastline use, #lakes path, #oceanLayers path`).remove(),W.cellType=`all`);let n=N(`cellTypeFilter`);n&&(n.value=W.cellType),le.set(rt,`filters`,W),P(`applyTemplate`).style.display=e===`erase`?`inline-block`:`none`,P(`convertImage`).style.display=e===`erase`?`inline-block`:`none`,P(`allowErosionBox`).style.display=e===`keep`?`none`:`inline-block`;let r=P(`heightmapFinalize`);if(sessionStorage.getItem(`noExitButtonAnimation`))r.style.display=`block`;else{sessionStorage.setItem(`noExitButtonAnimation`,`true`),r.style.opacity=`0`;let e=12*P(`uiSize`).value*11;r.style.right=`${(b.width-e)/2}px`,r.style.bottom=`${b.height/2}px`,r.style.transform=`scale(2)`,r.style.display=`block`,F(`#heightmapFinalize`).transition().duration(1e3).style(`opacity`,1).transition().duration(2e3).ease(v).style(`right`,`10px`).style(`bottom`,`10px`).style(`transform`,`scale(1)`)}let i=P(`layersPreset`);i.value=`heightmap`,i.disabled=!0,Z(),J(),F(`#viewbox`).on(`touchmove mousemove`,mt),F(`#map`).on(`dblclick.zoom`,null),t===`templateEditor`?Wt():t===`imageConverter`?an():Et()}function mt(e){let[t,n]=M(e,this),i=R.findCell(t,n);P(`heightmapInfoX`).innerHTML=String(r(t)),P(`heightmapInfoY`).innerHTML=String(r(n)),P(`heightmapInfoCell`).innerHTML=String(i),P(`heightmapInfoHeight`).innerHTML=`${grid.cells.h[i]} (${ht(grid.cells.h[i])})`,P(`tooltip`).dataset.main&&ue();let a=N(`brushesButtons`)?.querySelector(`button.pressed`);a&&(a.id===`brushLine`?F(`#debug`).select(`line`).attr(`x2`,t).attr(`y2`,n):a.id===`brushFill`?Te():Ee(t,n,P(`heightmapBrushRadius`).valueAsNumber))}function ht(e){return`${r(me(e)*pe())} ${options.map.units.height.unit}`}async function gt(){if(F(`#viewbox`).select(`#heights`).selectAll(`*`).size()<200){L(a(`Insufficient land area. There should be at least 200 land cells!`),!1,`error`);return}if(N(`imageConverter`)){L(a(`Please exit the Image Conversion mode first`),!1,`error`);return}G=Object.assign([],{n:0}),Ct(!0,!0),z.clearData(),options.app.mode=null,P(`heightmapMenu`).style.display=`none`,P(`options`).querySelector(`.tab > button.active`).id===`toolsTab`&&(P(`toolsContent`).style.display=`block`),P(`layersPreset`).disabled=!1,P(`heightmapFinalize`).style.display=`none`,I.closeAll(),we(),de(),_e(),N(`preview`)?.remove(),N(`canvas3d`)&&fe.View3d.enterStandard();let e=P(`heightmapEditMode`).innerHTML;try{e===`erase`?await _t():e===`keep`?vt():e===`risk`&&yt()}catch(t){s.error(t);let n=a(`Failed to apply the edited heightmap: {{error}}`,{error:t.message});L(e===`risk`?o(n,a(`The map is unchanged`)):n,!1,`error`,6e3)}F(`#viewbox`).selectAll(`#heights`).remove(),$e(),y.draw(`ocean`,`landmass`,`lakes`,`coastline`),y.set(ut)}async function _t(){pack.cultures=[],pack.burgs=[],pack.states=[],pack.provinces=[],pack.religions=[],pack.relief=[];let e=options.app.heightmapEditor.allowErosion;await xe.run({erosion:e})}function vt(){for(let e of pack.cells.i)pack.cells.h[e]=grid.cells.h[pack.cells.g[e]]}function yt(){let e=grid.cells.h;grid.cells.h=ot,ye.applyHeights(e,{erosion:options.app.heightmapEditor.allowErosion}),Se(),F(`#ice`).selectAll(`*`).remove()}function X(){let e=h(G),t=grid.cells.h.reduce((t,n,r)=>n===e[r]?t:t+1,0);if(L(a(`Cells changed: {{cells}}`,{cells:t})),!t)return;let n=N(`cellTypeFilter`)?.value??W.cellType;if(n===`land`)for(let t of grid.cells.i)(e[t]<20||grid.cells.h[t]<20)&&(grid.cells.h[t]=e[t]);if(n===`water`)for(let t of grid.cells.i)(e[t]>=20||grid.cells.h[t]>=20)&&(grid.cells.h[t]=e[t]);Z(),Q()}var bt=e=>D.getColor(e);function Z(){let e=Array.from(grid.cells.i),t=options.app.heightmapEditor.renderOcean?e:e.filter(e=>grid.cells.h[e]>=20);F(`#viewbox`).select(`#heights`).selectAll(`polygon`).data(t).join(`polygon`).attr(`points`,e=>String(R.getPolygon(e))).attr(`id`,e=>`cell${e}`).attr(`fill`,e=>bt(grid.cells.h[e]))}function xt(e){let t=options.app.heightmapEditor.renderOcean;e.forEach(e=>{let n=F(`#viewbox`).select(`#heights`).select(`#cell${e}`);!t&&grid.cells.h[e]<20?n.remove():(n.size()||(n=F(`#viewbox`).select(`#heights`).append(`polygon`).attr(`points`,String(R.getPolygon(e))).attr(`id`,`cell${e}`)),n.attr(`fill`,bt(grid.cells.h[e])))})}function St(){let e=grid.cells.h.reduce((e,t)=>t>=20?e+1:e,0);P(`landmassCounter`).textContent=`${e} (${r(e/grid.cells.i.length*100)}%)`,P(`landmassAverage`).textContent=String(r(w(grid.cells.h)??0))}function Ct(e,t){let n=(n,r)=>{let i=N(n);i&&(i.disabled=e);let a=N(r);a&&(a.disabled=t)};n(`undo`,`redo`),n(`templateUndo`,`templateRedo`)}function Q(e){let t=G.n;if(G=Object.assign(G.slice(0,t),{n:t+1}),G[t]=grid.cells.h.slice(),G.length>at){let e=G.length-at;G.splice(0,e),G.n-=e}Ct(G.n<=1,!0),e||(St(),wt())}function wt(){N(`preview`)&&bn(),N(`canvas3d`)&&fe.View3d.redraw(),J()}function $(e){G.n=e,Ct(G.n<=1,G.n>=G.length),G[G.n-1]!==void 0&&(grid.cells.h=G[G.n-1].slice(),Z(),St(),wt())}function Tt(){G=Object.assign([],{n:0}),Ct(!0,!0),Q()}function Et(){N(`brushesPanel`)||(Dt(),I.open(`brushesPanel`,{title:a(`Paint Brushes`),position:{my:`right top`,at:`right-10 top+10`,of:`svg`},onClose:Ot}))}function Dt(){I.destroy(`brushesPanel`);let e=`<div id="brushesPanel" class="dialog stable">
    <div id="brushesButtons" style="display: inline-block">
      <button id="brushRaise" data-tip="${a(`Raise brush: increase height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,39 h60 M50,85 v-35 l-12,8 m12,-8 l12,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushElevate" data-tip="${a(`Elevate brush: drag to gradually increase height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,50 q30,-35 60,0 M50,85 v-35 l-12,8 m12,-8 l12,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushLower" data-tip="${a(`Lower brush: drag to decrease height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="M50,30 v35 l-12,-8 m12,8 l12,-8 M20,78 h60" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushDepress" data-tip="${a(`Depress brush: drag to gradually decrease height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="M50,30 v35 l-12,-8 m12,8 l12,-8 M20,63 q30,35 60,0" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushAlign" data-tip="${a(`Align brush: drag to set height of cells in radius to height of the cell at mousepoint`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,50 h56 m0,20 h-56" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushSmooth" data-tip="${a(`Smooth brush: drag to level height of cells in radius to height of adjacent cells`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m15,60 q15,-15 30,0 q15,15 35,0" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushDisrupt" data-tip="${a(`Disrupt brush: drag to randomize height of cells in radius based on Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m15,63 l15,-13 15,20 15,-20 15,19 15,-14" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushFill" data-tip="${a(`Fill: click enclosed water or same-height land area to create a cone blob`)}">
        <svg viewBox="20 10 60 60" height="1em" width="1.6em">
          <path d="M30,70 h40 M30,70 q0,-20 20,-20 q20,0 20,20" fill="none" stroke="#000" stroke-width="5" />
          <path d="M50,20 v25 M50,20 l-10,8 M50,20 l10,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushLine" data-tip="${a(`Line: select two points to change heights along the line`)}">
        <svg viewBox="0 -5 100 100" height="1em" width="1.6em">
          <path d="M0 90 L100 10" fill="none" stroke="#000" stroke-width="7"></path>
        </svg>
      </button>
    </div>
    <div id="brushesSliders" style="display: none">
      <div data-tip="${o(a(`Change brush size`),a(`Shortcut: + to increase; – to decrease`))}">
        <slider-input id="heightmapBrushRadius" data-brush-size min="1" max="100" value="25">
          <div style="width: 3.5em">${a(`Radius`)}:</div>
        </slider-input>
      </div>
      <div data-tip="${a(`Change brush power`)}">
        <slider-input id="heightmapBrushPower" data-brush-size min="1" max="10" value="5">
          <div style="width: 3.5em">${a(`Power`)}:</div>
        </slider-input>
      </div>
    </div>
    <div id="lineSlider" style="display: none">
      <div data-tip="${o(a(`Change tool power`),a(`Shortcut: + to increase; – to decrease`))}">
        <slider-input id="heightmapLinePower" data-brush-size min="-100" max="100" value="30">
          <div style="width: 5.5em">${a(`Power`)}:</div>
        </slider-input>
      </div>
      <div data-tip="${a(`Change line randomness. Zero makes the line as straight as possible`)}">
        <slider-input id="heightmapLineRandomness" min="0" max="100" value="30">
          <div style="width: 5.5em">${a(`Randomness`)}:</div>
        </slider-input>
      </div>
    </div>
    <div data-tip="${a(`Restrict brush to specific cell types`)}" style="margin-bottom: 0.6em">
      <label for="cellTypeFilter"><i>${a(`Cells to change`)}:</i></label>
      <select id="cellTypeFilter">
        <option value="all" ${W.cellType===`all`?`selected`:``}>${a(`all cells`)}</option>
        <option value="land" ${W.cellType===`land`?`selected`:``}>${a(`only land cells`)}</option>
        <option value="water" ${W.cellType===`water`?`selected`:``}>${a(`only water cells`)}</option>
      </select>
    </div>
    <div id="modifyButtons">
      <button id="undo" data-tip="${a(`Undo the latest action (Ctrl + Z)`)}" class="icon-ccw" disabled></button>
      <button id="redo" data-tip="${a(`Redo the action (Ctrl + Y)`)}" class="icon-cw" disabled></button>
      <button id="rescaleShow" data-tip="${a(`Show`)}" class="icon-exchange"></button>
      <button id="rescaleCondShow" data-tip="${a(`Rescaler: change height if condition is fulfilled`)}" class="icon-if"></button>
      <button id="smoothHeights" data-tip="${a(`Smooth all heights a bit`)}" class="icon-smooth"></button>
      <button id="disruptHeights" data-tip="${a(`Disrupt (randomize) heights a bit`)}" class="icon-disrupt"></button>
      <button id="brushClear" data-tip="${a(`Set height for all cells to 0 (erase the map)`)}" class="icon-eraser"></button>
    </div>
    <div id="rescaleSection" style="display: none">
      <button id="rescaleHide" data-tip="${a(`Hide`)}" class="icon-exchange"></button>
      <input id="rescaler" data-tip="${a(`Change height for all cells`)}" type="range" min="-10" max="10" step="1" value="0" />
    </div>
    <div
      id="rescaleCondSection"
      data-tip="${a(`If height is greater or equal to X and less or equal to Y, then perform an operation Z with operand V`)}"
      style="display: none"
    >
      <button id="rescaleCondHide" data-tip="${a(`Hide`)}" class="icon-if"></button>
      <label>h ≥</label>
      <input id="rescaleLower" value="20" type="number" min="0" max="100" />
      <label>≤</label>
      <input id="rescaleHigher" value="100" type="number" min="1" max="100" />
      <label>⇒</label>
      <select id="conditionSign">
        <option value="multiply" selected>×</option>
        <option value="divide">÷</option>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="exponent">^</option>
      </select>
      <input id="rescaleModifier" type="number" value="0.9" min="0" max="1.5" step="0.01" />
      <button id="rescaleExecute" data-tip="${a(`Click to perform an operation`)}" class="icon-play-circled2"></button>
    </div>
  </div>`;P(`dialogs`).insertAdjacentHTML(`beforeend`,e),kt()}function Ot(){At(),I.destroy(`brushesPanel`)}function kt(){P(`brushesButtons`).addEventListener(`click`,jt),P(`cellTypeFilter`).addEventListener(`change`,Rt),P(`undo`).addEventListener(`click`,()=>$(G.n-1)),P(`redo`).addEventListener(`click`,()=>$(G.n+1)),P(`rescaleShow`).addEventListener(`click`,()=>{P(`modifyButtons`).style.display=`none`,P(`rescaleSection`).style.display=`block`}),P(`rescaleHide`).addEventListener(`click`,()=>{P(`modifyButtons`).style.display=`block`,P(`rescaleSection`).style.display=`none`}),P(`rescaler`).addEventListener(`change`,e=>zt(e.target.valueAsNumber)),P(`rescaleCondShow`).addEventListener(`click`,()=>{P(`modifyButtons`).style.display=`none`,P(`rescaleCondSection`).style.display=`block`}),P(`rescaleCondHide`).addEventListener(`click`,()=>{P(`modifyButtons`).style.display=`block`,P(`rescaleCondSection`).style.display=`none`}),P(`rescaleExecute`).addEventListener(`click`,Bt),P(`smoothHeights`).addEventListener(`click`,Vt),P(`disruptHeights`).addEventListener(`click`,Ht),P(`brushClear`).addEventListener(`click`,Ut)}function At(){let e=document.querySelector(`#brushesButtons > button.pressed`);e&&e.classList.remove(`pressed`),we(),F(`#map`).on(`dblclick.zoom`,null),F(`#viewbox`).on(`touchmove mousemove`,mt),F(`#debug`).selectAll(`#brushCircle, .lineCircle`).remove(),Te(),P(`brushesSliders`).style.display=`none`,P(`lineSlider`).style.display=`none`}function jt(e){let t=e.target.closest(`#brushesButtons > button`);if(!t)return;if(t.classList.contains(`pressed`)){At();return}At(),t.classList.add(`pressed`);let n=P(`heightmapBrushRadius`).parentElement;n&&(n.style.display=t.id===`brushFill`?`none`:``),t.id===`brushLine`?(P(`lineSlider`).style.display=`block`,F(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Mt)):t.id===`brushFill`?(P(`brushesSliders`).style.display=`block`,F(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Nt)):(P(`brushesSliders`).style.display=`block`,F(`#viewbox`).style(`cursor`,`crosshair`).call(ce().on(`start`,It)))}function Mt(e){let[t,n]=M(e,this),r=R.findCell(t,n),i=F(`#debug`).selectAll(`.lineCircle`);if(!i.size()){F(`#debug`).append(`line`).attr(`id`,`brushCircle`).attr(`x1`,t).attr(`y1`,n).attr(`x2`,t).attr(`y2`,n),F(`#debug`).append(`circle`).attr(`data-cell`,r).attr(`class`,`lineCircle`).attr(`r`,6).attr(`cx`,t).attr(`cy`,n).attr(`fill`,`yellow`).attr(`stroke`,`#333`).attr(`stroke-width`,2);return}let o=+i.attr(`data-cell`);F(`#debug`).selectAll(`*`).remove();let s=P(`heightmapLinePower`).valueAsNumber;if(s===0){L(a(`Power should not be zero`),!1,`error`);return}let c=P(`heightmapLineRandomness`).valueAsNumber/200,l=grid.cells.h,u=s>0?z.addRange.bind(z):z.addTrough.bind(z);z.setGraph(grid),u(`1`,String(Math.abs(s)),``,``,o,r,c);let d=z.getHeights(),f=P(`cellTypeFilter`).value,p=[];for(let e=0;e<l.length;e++)d[e]!==l[e]&&(f===`land`&&l[e]<20||f===`water`&&l[e]>=20||(l[e]=d[e],p.push(e)));xt(p),Q()}function Nt(e){let[t,n]=M(e,this),r=R.findCell(t,n),i=grid.cells.h[r],o=i<20,s=P(`cellTypeFilter`).value;if(s===`water`){L(a(`Fill brush is not available with 'only water cells' filter`),!1,`error`);return}if(s===`land`&&o){L(a(`Land filter is active, water areas cannot be filled`),!1,`error`);return}let{selection:c,reachedBorder:l}=Pt(r,o,i);if(c.length<3){L(a(`No enclosed area found to fill`),!1,`error`);return}if(o&&l){L(a(`Selected water area is open to map border and is not enclosed`),!1,`error`);return}let u=Ft(c,o,i);u.length&&(xt(u),X())}function Pt(e,t,n){let{h:r,c:i,i:a}=grid.cells,o=new Uint8Array(a.length),s=[e],c=[],l=!1;for(;s.length;){let e=s.pop();o[e]||(o[e]=1,(t?r[e]<20:r[e]===n)&&(c.push(e),grid.cells.b[e]&&(l=!0),i[e].forEach(e=>{o[e]||s.push(e)})))}return{selection:c,reachedBorder:l}}function Ft(e,t,r){let i=P(`heightmapBrushPower`).valueAsNumber*10,{h:a,c:o,i:s}=grid.cells,c=new Uint8Array(s.length),l=new Uint16Array(s.length),u=[];e.forEach(e=>{c[e]=1});let d=[],f=0;for(e.forEach(e=>{o[e].some(e=>!c[e])&&(c[e]=2,d.push(e))});f<d.length;){let e=d[f++],t=l[e]+1;o[e].forEach(e=>{c[e]===1&&(c[e]=2,l[e]=t,d.push(e))})}let p=x(e,e=>l[e])||0,m=t?20:r;return e.forEach(e=>{let t=p?l[e]/p:1,r=Math.max(1,Math.round(i*t)),o=n(m+r,0,100);o!==a[e]&&(a[e]=o,u.push(e))}),u}function It(e){let t=P(`heightmapBrushRadius`).valueAsNumber,[n,r]=M(e,this),i=R.findCell(n,r),a=De(t/2,(e,n)=>{let r=R.findAll(e,n,t),a=r,o=P(`cellTypeFilter`).value;o===`land`?a=r.filter(e=>grid.cells.h[e]>=20):o===`water`&&(a=r.filter(e=>grid.cells.h[e]<20)),a?.length&&Lt(a,i)});a.moveTo(n,r),e.on(`drag`,e=>{let[n,r]=M(e,this);Ee(n,r,t),a.moveTo(n,r)}),e.on(`end`,X)}function Lt(e,t){let i=P(`heightmapBrushPower`).valueAsNumber,a=g(i,1),o=P(`cellTypeFilter`).value===`land`,s=P(`cellTypeFilter`).value===`water`,c=e=>n(e,o?20:0,s?19:100),l=grid.cells.h,u=document.querySelector(`#brushesButtons > button.pressed`).id;u===`brushRaise`?e.forEach(e=>{l[e]=!s&&l[e]<20?20:c(l[e]+i)}):u===`brushElevate`?e.forEach((t,n)=>{l[t]=c(l[t]+a(n/Math.max(e.length-1,1)))}):u===`brushLower`?e.forEach(e=>{l[e]=c(l[e]-i)}):u===`brushDepress`?e.forEach((t,n)=>{l[t]=c(l[t]-a(n/Math.max(e.length-1,1)))}):u===`brushAlign`?e.forEach(e=>{l[e]=c(l[t])}):u===`brushSmooth`?e.forEach(e=>{l[e]=r(((w(grid.cells.c[e].filter(e=>o?l[e]>=20:!s||l[e]<20).map(e=>l[e]))??0)+l[e]*(10-i)+.6)/(11-i),1)}):u===`brushDisrupt`&&e.forEach(e=>{l[e]=l[e]<15?l[e]:c(l[e]+i/1.6-Math.random()*i)}),xt(e)}function Rt(){let e=P(`cellTypeFilter`);e.value===`land`&&P(`heightmapEditMode`).innerHTML===`keep`&&(L(a(`You cannot change the coastline in 'Keep' edit mode`),!1,`error`),e.value=`all`),W.cellType=e.value,le.set(rt,`filters`,W)}function zt(e){let t=P(`cellTypeFilter`).value===`land`,n=P(`cellTypeFilter`).value===`water`;grid.cells.h=grid.cells.h.map(r=>{if(t&&(r<20||r+e<20)||n&&r>=20)return r;let a=i(r+e);return n?Math.min(a,19):a}),X(),P(`rescaler`).value=`0`}function Bt(){let e=`${P(`rescaleLower`).value}-${P(`rescaleHigher`).value}`,t=P(`conditionSign`).value,n=P(`rescaleModifier`).valueAsNumber;Number.isNaN(n)?L(a(`Operand should be a number`),!1,`error`):(t===`add`||t===`subtract`)&&!Number.isInteger(n)?L(a(`Operand should be an integer`),!1,`error`):(z.setGraph(grid),t===`multiply`?z.modify(e,0,n,0):t===`divide`?z.modify(e,0,1/n,0):t===`add`?z.modify(e,n,1,0):t===`subtract`?z.modify(e,-1*n,1,0):t===`exponent`&&z.modify(e,0,1,n),grid.cells.h=z.getHeights(),X())}function Vt(){z.setGraph(grid),z.smooth(4,1.5),grid.cells.h=z.getHeights(),X()}function Ht(){grid.cells.h=grid.cells.h.map(e=>e<15?e:i(e+2.5-Math.random()*4)),X()}function Ut(){let e=P(`cellTypeFilter`).value;e===`land`?L(a(`Not allowed when 'only land cells' filter is set`),!1,`error`):e===`water`?L(a(`Not allowed when 'only water cells' filter is set`),!1,`error`):grid.cells.h.some(e=>e)?(grid.cells.h=new Uint8Array(grid.cells.i.length),F(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),Q()):L(a(`Heightmap is already cleared, please do not click twice if not required`),!1,`error`)}function Wt(){N(`templateEditor`)||(ct(),I.open(`templateEditor`,{title:a(`Template Editor`),width:`fit-content`,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},onClose:Gt}))}function Gt(){I.destroy(`templateEditor`)}function Kt(e){let t=e.target;if(t.tagName!==`BUTTON`)return;let n=t.dataset.type;P(`templateBody`).dataset.changed=`1`,qt(n)}function qt(e,t,n,r,i){let a=P(`templateBody`);a.insertAdjacentHTML(`beforeend`,Yt(e,t,n,r,i));let o=a.querySelector(`div:last-child > span > .templateDist`);if(o&&o.addEventListener(`change`,Xt),n&&o&&o.tagName===`SELECT`){for(let e of Array.from(o.options))e.value===n&&(o.value=n);if(o.value!==n){let e=document.createElement(`option`);e.value=e.innerHTML=n,o.add(e),o.value=n}}}var Jt={Hill:a(`Hill`),Pit:a(`Pit`),Range:a(`Range`),Trough:a(`Trough`),Strait:a(`Strait`),Mask:a(`Mask`),Invert:a(`Invert`),Add:a(`Add`),Multiply:a(`Multiply`),Smooth:a(`Smooth`)};function Yt(e,t,n,r,i){let o=`<i class="icon-trash-empty pointer" data-tip="${a(`Remove`)}"></i>`,s=`<div class="icon-check" data-tip="${a(`Click to skip the step`)}"></div>`,c=`<i class="icon-resize-vertical" data-tip="${a(`Drag to reorder`)}"></i>`,l=`<div data-type="${e}">${s}<div style="width:4em">${Jt[e]??e}</div>${o}${c}`,u=`<span>y:
      <input class="templateY" data-tip="${a(`Placement range percentage along Y axis (minY-maxY)`)}" value=${i||`20-80`} />
    </span>`,d=`<span>x:
      <input class="templateX" data-tip="${a(`Placement range percentage along X axis (minX-maxX)`)}" value=${r||`15-85`} />
    </span>`,f=`<span>h:
      <input class="templateHeight" data-tip="${a(`Blob maximum height, use hyphen to get a random number in range`)}" value=${n||`40-50`} />
    </span>`,p=`<span>n:
      <input class="templateCount" data-tip="${a(`Blobs to add, use hyphen to get a random number in range`)}" value=${t||`1-2`} />
    </span>`;return e===`Hill`||e===`Pit`||e===`Range`||e===`Trough`?`${l}${u}${d}${f}${p}</div>`:e===`Strait`?`${l}
      <span>d:
        <select class="templateDist" data-tip="${a(`Strait direction`)}">
          <option value="vertical" selected>${a(`vertical`)}</option>
          <option value="horizontal">${a(`horizontal`)}</option>
        </select>
      </span>
      <span>w:
        <input class="templateCount" data-tip="${a(`Strait width, use hyphen to get a random number in range`)}" value=${t||`2-7`} />
      </span>
    </div>`:e===`Invert`?`${l}
      <span>${a(`by`)}:
        <select class="templateDist" data-tip="${a(`Mirror heightmap along axis`)}" style="width: 7.8em">
          <option value="x" selected>x</option>
          <option value="y">y</option>
          <option value="xy">${a(`both`)}</option>
        </select>
      </span>
      <span>n:
        <input class="templateCount" data-tip="${a(`Probability of inversion, range 0-1`)}" value=${t||`0.5`} />
      </span>
    </div>`:e===`Mask`?`${l}
      <span>f:
        <input class="templateCount"
          data-tip="${a(`Set masking fraction. 1 - full insulation (prevent land on map edges), 2 - half-insulation, etc. Negative number to inverse the effect`)}"
          type="number" min=-10 max=10 value=${t||1} />
      </span>
    </div>`:e===`Add`?`${l}
      <span>${a(`to`)}:
        <select class="templateDist" data-tip="${a(`Change only land or all cells`)}">
          <option value="all" selected>${a(`all cells`)}</option>
          <option value="land">${a(`land only`)}</option>
          <option value="interval">${a(`Interval`)}</option>
        </select>
      </span>
      <span>v:
        <input class="templateCount" data-tip="${a(`Add value to height of all cells (negative values are allowed)`)}"
        type="number" value=${t||-10} min=-100 max=100 step=1 />
      </span>
    </div>`:e===`Multiply`?`${l}
      <span>${a(`to`)}:
        <select class="templateDist" data-tip="${a(`Change only land or all cells`)}">
          <option value="all" selected>${a(`all cells`)}</option>
          <option value="land">${a(`land only`)}</option>
          <option value="interval">${a(`Interval`)}</option>
        </select>
      </span>
      <span>v:
        <input class="templateCount" data-tip="${a(`Multiply all cells Height by the value`)}" type="number"
          value=${t||1.1} min=0 max=10 step=.1 />
      </span>
    </div>`:e===`Smooth`?`${l}
      <span>f:
        <input class="templateCount" data-tip="${a(`Set smooth fraction. 1 - full smooth, 2 - half-smooth, etc.`)}"
          type="number" min=1 max=10 step=1 value=${t||2} />
      </span>
    </div>`:``}function Xt(e){let t=e.target;t.value===`interval`&&I.prompt(a(`Set a height interval. Avoid space, use hyphen as a separator`),{default:`17-20`},e=>{let n=document.createElement(`option`);n.value=n.innerHTML=String(e),t.add(n),t.value=String(e)})}function Zt(e){let t=P(`templateBody`),n=t.querySelectorAll(`div`).length,r=+t.getAttribute(`data-changed`),i=e.target.value;!n||!r?Qt(i):I.message({message:a(`Are you sure you want to select a different template? All changes will be lost.`),title:a(`Change Template`),buttons:[{label:a(`Change`),onClick:()=>{Qt(i)}},{label:a(`Cancel`)}]})}function Qt(e){let t=P(`templateBody`);t.setAttribute(`data-changed`,`0`),t.innerHTML=``;let n=u[e]?.template;if(!n)return;let r=n.split(`
`);if(!r.length)L(a(`Heightmap template: no steps defined`),!1,`error`);else for(let e of r){let t=e.trim().split(` `);qt(t[0],t[1],t[2],t[3],t[4])}}function $t(){let e=P(`templateBody`).querySelectorAll(`#templateBody > div`);if(!e.length)return;let t=P(`templateSeed`).value;Math.random=(0,Ge.default)(t||S()),grid.cells.h=new Uint8Array(grid.points.length),z.setGraph(grid),Tt();for(let t of e){if(t.style.opacity===`0.5`)continue;let e=t.querySelector(`.templateCount`)?.value||``,n=t.querySelector(`.templateHeight`)?.value||``,r=t.querySelector(`.templateDist`)?.value||``,i=t.querySelector(`.templateX`)?.value||``,a=t.querySelector(`.templateY`)?.value||``,o=t.dataset.type;o===`Hill`?z.addHill(e,n,i,a):o===`Pit`?z.addPit(e,n,i,a):o===`Range`?z.addRange(e,n,i,a):o===`Trough`?z.addTrough(e,n,i,a):o===`Strait`?z.addStrait(e,r):o===`Mask`?z.mask(+e):o===`Invert`?z.invert(+e,r):o===`Add`?z.modify(r,+e,1):o===`Multiply`?z.modify(r,0,+e):o===`Smooth`&&z.smooth(+e),grid.cells.h=z.getHeights(),Q(`noStat`)}grid.cells.h=z.getHeights(),St(),Z(),wt()}function en(){let e=P(`templateBody`);e.dataset.changed=`0`;let t=e.querySelectorAll(`#templateBody > div`);if(!t.length)return;let n=``;for(let e of Array.from(t)){if(e.style.opacity===`0.5`)continue;let t=e.getAttribute(`data-type`),r=e.querySelector(`.templateCount`)?.value||`0`,i=e.querySelector(`.templateHeight`)?.value||e.querySelector(`.templateDist`)?.value||`0`,a=e.querySelector(`.templateX`)?.value||`0`,o=e.querySelector(`.templateY`)?.value||`0`;n+=`${t} ${r} ${i} ${a} ${o}\r\n`}let r=`template_${Date.now()}.txt`;T(n,r)}function tn(){K??=E(`.txt`),K.onchange=()=>C(K,nn),K.click()}function nn(e){let t=e.split(/\r?\n/).filter(Boolean);if(!t.length)L(a(`Cannot parse the template, please check the file`),!1,`error`);else{P(`templateBody`).innerHTML=``;for(let e of t){let t=e.split(` `);t.length===5?qt(t[0],t[1],t[2],t[3],t[4]):s.error(`Cannot parse step, wrong arguments count`,e)}}}function rn(){q??=E(`image/*`),q.onchange=()=>sn.call(q),q.click()}function an(){if(N(`imageConverter`))return;rn(),I.closeAll(`#imageConverter`),lt(),I.open(`imageConverter`,{title:a(`Image Converter`),maxHeight:b.height*.8,width:`20em`,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},beforeClose:vn});let e=document.createElement(`canvas`);e.id=`canvas`,e.width=options.map.graph.width,e.height=options.map.graph.height,document.body.insertBefore(e,P(`optionsContainer`)),mn(0),de(),L(a(`Image Converter is opened. Upload image and assign height value for each color`),!1,`warn`),grid.cells.h=new Uint8Array(grid.cells.i.length),F(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),Q()}function on(){let e=+this.getAttribute(`data-color`);P(`colorsSelectValue`).innerHTML=String(e),P(`colorsSelectFriendly`).innerHTML=ht(e);let t=P(`imageConverterPalette`).querySelector(`.hoveredColor`);t&&(t.className=``),this.className=`hoveredColor`}function sn(){let e=this.files[0];this.value=``;let t=new FileReader,n=new Image;n.id=`imageToConvert`,n.style.display=`none`,document.body.appendChild(n),n.onload=()=>{P(`canvas`).getContext(`2d`).drawImage(n,0,0,options.map.graph.width,options.map.graph.height),cn(+P(`convertColors`).value),_e()},t.onloadend=()=>{n.src=t.result},t.readAsDataURL(e)}function cn(e){let t=P(`canvas`),n=document.createElement(`canvas`);n.width=grid.cellsX,n.height=grid.cellsY,n.getContext(`2d`).drawImage(t,0,0,grid.cellsX,grid.cellsY);let r=new Ke.default({colors:e});r.sample(n);let i=r.reduce(n),a=r.palette(!0);F(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),F(`#imageConverter`).selectAll(`div.color-div`).remove(),P(`colorsSelect`).style.display=`block`,P(`colorsUnassigned`).style.display=`block`,P(`colorsAssigned`).style.display=`none`,n.remove(),F(`#viewbox`).select(`#heights`).selectAll(`polygon`).data(Array.from(grid.cells.i)).join(`polygon`).attr(`points`,e=>String(R.getPolygon(e))).attr(`id`,e=>`cell${e}`).attr(`fill`,e=>`rgb(${i[e*4]}, ${i[e*4+1]}, ${i[e*4+2]})`).on(`click`,ln);let o=a.map(e=>`rgb(${e[0]}, ${e[1]}, ${e[2]})`);F(`#colorsUnassignedContainer`).selectAll(`div`).data(o).enter().append(`div`).attr(`data-color`,e=>e).style(`background-color`,e=>e).attr(`class`,`color-div`).on(`click`,un),P(`colorsUnassignedNumber`).innerHTML=String(o.length)}function ln(){let e=this.getAttribute(`fill`);P(`imageConverter`).querySelector(`div[data-color="${e}"]`)?.click()}function un(){F(`#viewbox`).select(`#heights`).selectAll(`.selectedCell`).attr(`class`,null);let e=this.classList.contains(`selectedColor`),t=P(`imageConverter`).querySelector(`div.selectedColor`);t&&t.classList.remove(`selectedColor`);let n=P(`imageConverterPalette`).querySelector(`div.hoveredColor`);if(n&&n.classList.remove(`hoveredColor`),P(`colorsSelectValue`).innerHTML=P(`colorsSelectFriendly`).innerHTML=`0`,e)return;if(this.classList.add(`selectedColor`),this.dataset.height){let e=+this.dataset.height;P(`imageConverterPalette`).querySelector(`div[data-color="${e}"]`)?.classList.add(`hoveredColor`),P(`colorsSelectValue`).innerHTML=String(e),P(`colorsSelectFriendly`).innerHTML=ht(e)}let r=this.getAttribute(`data-color`);F(`#viewbox`).select(`#heights`).selectAll(`polygon.selectedCell`).classed(`selectedCell`,!1),F(`#viewbox`).select(`#heights`).selectAll(`polygon[fill='${r}']`).classed(`selectedCell`,!0)}function dn(){let e=+this.dataset.color,t=nt(1-(e<20?e-5:e)/100),n=P(`imageConverter`).querySelector(`div.selectedColor`);n.style.backgroundColor=t,n.setAttribute(`data-color`,t),n.setAttribute(`data-height`,String(e)),F(`#viewbox`).select(`#heights`).selectAll(`.selectedCell`).each(function(){this.setAttribute(`fill`,t),this.setAttribute(`data-height`,String(e))}),n.parentNode.id===`colorsUnassignedContainer`&&(P(`colorsAssignedContainer`).appendChild(n),P(`colorsAssigned`).style.display=`block`,P(`colorsUnassignedNumber`).innerHTML=String(P(`colorsUnassignedContainer`).childElementCount-2),P(`colorsAssignedNumber`).innerHTML=String(P(`colorsAssignedContainer`).childElementCount-2))}function fn(e){let t=P(`colorsUnassignedContainer`),n=t.querySelectorAll(`div`);if(!n.length&&(cn(+P(`convertColors`).value),n=t.querySelectorAll(`div`),!n.length)){L(a(`No unassigned colors. Please load an image and click the button again`),!1,`error`);return}let r=e=>{let t=re(e).h;return t>300&&(t-=360),t>170?Math.abs(t-250)/3|0:Math.abs(t-250+20)/3|0},i=e=>{let t=Ie(e).l;return t<13?t/13*20|0:t|0},o=O(101).map(e=>bt(e)),s=o.map(e=>re(e).h|0),c=e=>{let t=o.indexOf(e);if(t!==-1)return t;let n=re(e).h,r=s.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e);return s.indexOf(r)},l=[],u=P(`colorsAssignedContainer`);n.forEach(t=>{let n=t.dataset.color,a=e===`hue`?r(n):e===`lum`?i(n):c(n),o=nt(1-(a<20?(a-5)/100:a/100));F(`#viewbox`).select(`#heights`).selectAll(`polygon[fill='${n}']`).attr(`fill`,o).attr(`data-height`,a),l[a]?t.remove():(t.style.backgroundColor=t.dataset.color=o,t.dataset.height=String(a),u.appendChild(t),l[a]=!0)}),Array.from(u.children).sort((e,t)=>+e.dataset.height-t.dataset.height).forEach(e=>{u.appendChild(e)}),P(`colorsAssigned`).style.display=`block`,P(`colorsUnassigned`).style.display=`none`,P(`colorsAssignedNumber`).innerHTML=String(u.childElementCount-2)}function pn(){I.prompt(`${a(`Set maximum number of colors`)}<br>${a(`An actual number is usually lower and depends on color scheme`)}`,{default:+P(`convertColors`).value,step:1,min:3,max:255},e=>{P(`convertColors`).value=String(e),cn(+e)})}function mn(e){P(`convertOverlay`).value=P(`convertOverlayNumber`).value=String(e),P(`canvas`).style.opacity=String(e)}function hn(){P(`colorsAssignedContainer`).childElementCount<3?L(a(`Please assign colors to heights first`),!1,`error`):(F(`#viewbox`).select(`#heights`).selectAll(`polygon`).each(function(){let e=+(this.dataset.height??`0`)||0,t=+this.id.slice(4);grid.cells.h[t]=e}),F(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),X(),_n())}function gn(){_n(),F(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),$(G.n-1)}function _n(){N(`canvas`)?.remove(),N(`imageToConvert`)?.remove(),F(`#imageConverter`).selectAll(`div.color-div`).remove(),P(`colorsAssigned`).style.display=`none`,P(`colorsUnassigned`).style.display=`none`,P(`colorsSelectValue`).innerHTML=P(`colorsSelectFriendly`).innerHTML=`0`,F(`#viewbox`).style(`cursor`,`default`).on(`.drag`,null),L(a(`Heightmap edit mode is active. Click on “Exit Customization” to finalize the heightmap`),!0),I.destroy(`imageConverter`),Et()}function vn(){return I.message({message:a(`Are you sure you want to close the Image Converter? Click “Cancel” to keep editing. Click “Complete” to apply the conversion and close the tool. Click “Close” to discard the conversion and restore the previous heightmap.`),title:a(`Close Image Converter`),buttons:[{label:a(`Cancel`)},{label:a(`Complete`),onClick:()=>{hn()}},{label:a(`Close`),onClick:()=>{_n(),F(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),$(G.n-1)}}]}),!1}function yn(){let e=N(`preview`);if(e){e.remove();return}let t=document.createElement(`canvas`);t.id=`preview`;let n=R.getRaster();t.width=n.width,t.height=n.height,document.body.insertBefore(t,P(`optionsContainer`)),t.addEventListener(`mouseover`,()=>L(a(`Heightmap preview. Click to download a screen-sized image`))),t.addEventListener(`click`,xn),bn()}function bn(){let e=P(`preview`).getContext(`2d`),t=R.getRaster(),n=e.createImageData(t.width,t.height);R.rasterize(grid.cells.h,t).forEach((e,t)=>{let r=(e<20?Math.max(e/1.5,0):e)/100*255,i=t*4;n.data[i]=r,n.data[i+1]=r,n.data[i+2]=r,n.data[i+3]=255}),e.putImageData(n,0,0)}function xn(){let e=P(`preview`).toDataURL(`image/png`),t=new Image;t.src=e,t.onload=()=>{let e=document.createElement(`canvas`),n=e.getContext(`2d`);e.width=options.map.graph.width,e.height=options.map.graph.height,document.body.insertBefore(e,P(`optionsContainer`)),n.drawImage(t,0,0,options.map.graph.width,options.map.graph.height);let r=e.toDataURL(`image/png`),i=document.createElement(`a`);i.download=`${he(`Heightmap`)}.png`,i.href=r,i.click(),e.remove()}}var Sn={open:st,redrawDrainage:J};export{Sn as HeightmapEditor};
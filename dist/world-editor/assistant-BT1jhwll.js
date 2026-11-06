const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["style-presets-BDZALvMj.js","rolldown-runtime-COiEfhsA.js","index-DfkEhdNk.js","index-Elh14QzF.css","options-model-baH24lwc.js","pack-generator-itXjN9Pv.js","notices-CsL9NM9q.js","node-utils-BD0SusgU.js","file-utils-gMYr_JNq.js","number-Da26Xeod.js","min-CCch3uox.js","color-utils-7EG96Nsk.js","linear-C9i-EIkT.js","charges-XaoNl-VI.js","line-weights-DMXPYRDE.js","divisions-yddbEqou.js","ordinaries-DXI0TOB4.js","shields-QQIBRbRT.js","tinctures-CsgIeV6I.js","dialog-BW-Ar0Nf.js","services-DSJYmPRP.js","layers-DJ8BJ3Zy.js","draw-heightmap-Dbhc88iA.js","grid-generator-Bw7amUrQ.js","production-generator-6t0nz-yt.js","units-S5RZj9IM.js","environment-BDBII_BV.js","tooltips-BSJdaB-v.js","registry-CwrTqJ86.js","map-history-B_U7uEk3.js","graph-override-Duzk4-iC.js","notes-DH8U4MQ0.js","fonts-LgPRtIBX.js","file-name-CjjRnvM3.js","platform-BaiDCNRc.js","styles-CL16qCtx.js","app-DaOF0_oJ.js","drag-BCEUs7e2.js","highlight-CdQ_wUL5.js","zoom-U9bkgxPn.js","controllers-DmSw-ZkU.js","canvas-BdqyLS7H.js","added-labels-C7OWu1aA.js","measurers-generator-DazKvylb.js","biomes-generator-yijs_VMj.js","heightmap-generator-CoN5wc8x.js","ice-generator-C-QO6g37.js","temperature-generator-BqS5MeQ2.js","journeys-generator-DQORvHKL.js","map-restoration-CSpjVqDZ.js","style-preset-JMqVLt_v.js","icons-archive-B3iUM2nm.js","style-reference-C0FxfdFZ.js","schema-form-ChaXyWY9.js","textures-ghb1UR1E.js","emblem-image-BlNMu7dp.js","export-D_E9toDt.js"])))=>i.map(i=>d[i]);
import{D as e,E as t,a as n,d as r,f as i,i as a,p as o,t as s}from"./index-DfkEhdNk.js";import{B as c,F as l,J as u,R as d,V as f,W as p,X as ee,Y as m,a as h,cn as te,ft as ne,ln as re,m as g,n as _,o as ie,pt as ae,q as oe,r as se,yt as ce}from"./options-model-baH24lwc.js";import{ct as le,t as ue,tt as de,xt as fe}from"./layers-DJ8BJ3Zy.js";import{i as pe}from"./draw-heightmap-Dbhc88iA.js";import{d as me}from"./color-utils-7EG96Nsk.js";import{i as v,r as y}from"./node-utils-BD0SusgU.js";import{t as he}from"./dialog-BW-Ar0Nf.js";import{o as ge}from"./tooltips-BSJdaB-v.js";import{t as b}from"./controllers-DmSw-ZkU.js";import{a as _e,l as ve,o as ye,s as be}from"./production-generator-6t0nz-yt.js";import{_ as xe,a as Se,c as Ce,g as x,i as we,l as Te,n as Ee,o as De,p as Oe,r as ke}from"./units-S5RZj9IM.js";import{t as Ae}from"./map-history-B_U7uEk3.js";import{t as je}from"./notes-DH8U4MQ0.js";import{i as Me}from"./zoom-U9bkgxPn.js";import{t as Ne}from"./added-labels-C7OWu1aA.js";import{t as Pe}from"./biomes-generator-yijs_VMj.js";import{t as Fe}from"./journeys-generator-DQORvHKL.js";import{t as Ie}from"./styles-CL16qCtx.js";import{C as Le,I as Re,K as ze,L as Be,R as Ve,W as He,Y as Ue,d as We,n as Ge,q as Ke,w as qe}from"./app-DaOF0_oJ.js";import{a as Je,c as Ye,d as Xe,f as Ze,i as Qe,l as $e,m as et,n as S,o as tt,p as nt,r as rt,s as it,t as at,u as ot}from"./connection-DvuPAGzl.js";import{t as st}from"./effects-DeghHLGB.js";import{t as C}from"./world-CwMjaq9n.js";import{a as ct,i as lt,n as ut,r as dt,t as ft}from"./reveal-CFICSYEx.js";var pt=me(`4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab`),w=class extends Error{code;retryAfter;constructor(e,t,n){super(t),this.name=`AzgaarServerError`,this.code=e,this.retryAfter=n}},mt=()=>``,ht=()=>mt().replace(/\/+$/,``)||`https://ask.azgaarsfmg.com`,gt=()=>!window.electron&&(location.origin===`https://azgaar.github.io`||!!mt());async function _t(e,t){let n=Be(),r={...t.headers,...n?{Authorization:`Bearer ${n}`}:{}},i;try{i=await fetch(`${ht()}${e}`,{...t,headers:r})}catch(e){throw t.signal?.aborted?e:new w(`unreachable`,`The assistant is unreachable. Check your connection and try again.`)}if(i.ok){if(i.status===204)return;try{return await i.json()}catch{throw new w(`provider_error`,`The assistant returned an unreadable response.`)}}if(i.status===401)throw Re(),new w(`unauthorized`,`Your sign-in has expired. Sign in with Discord again for more questions.`);let o=`provider_error`,s=a(`The assistant returned an error ({{status}}).`,{status:i.status}),c;try{let e=await i.json();e?.error&&(o=e.error.code??o,s=e.error.message??s,c=e.error.retryAfter)}catch{}throw new w(o,s,c)}var vt=async(e,t,n)=>{let r=await _t(`/v1/ask`,{method:`POST`,signal:n,headers:{"Content-Type":`application/json`},body:JSON.stringify(t?{question:e,conversationId:t}:{question:e})});if(!r)throw new w(`provider_error`,`The assistant returned an unreadable response.`);return r},yt=(e,t)=>_t(`/v1/feedback`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({requestId:e,rating:t})}),bt=()=>_t(`/v1/limits`,{method:`GET`}),xt=()=>Ve(`${ht()}/v1/auth/discord`);async function St(){try{await _t(`/v1/auth/logout`,{method:`POST`})}catch{}Re()}async function Ct(e,t,n,r){n({kind:`question`,text:t});let i=e.serverChatId;try{let a=await vt(t,i,r);if(r.aborted)return;e.serverChatId=a.conversationId,i&&i!==a.conversationId&&n({kind:`divider`}),n({kind:`answer`,text:a.answer,ratingId:a.requestId})}catch(t){if(r.aborted)return;throw t instanceof w&&t.code===`invalid_request`&&(e.serverChatId=void 0),t}}var wt=`fmg-assistant-chats`,Tt=`fmg-assistant-current-chat`,Et=60,T=[],Dt=``,Ot=!1,kt,At=!1,jt=!1;function Mt(){return kt??=h.get(wt).then(e=>{T=Array.isArray(e)?e.filter(e=>e?.id&&Array.isArray(e.items)):[],Dt=localStorage.getItem(Tt)||T[0]?.id||``,Ot=!0},e=>{throw kt=void 0,e}),kt}var Nt=()=>[...T].sort((e,t)=>t.updated-e.updated),Pt=()=>T.find(e=>e.id===Dt);function Ft(e){let t=T.find(t=>t.id===e);return t?(Dt=e,localStorage.setItem(Tt,e),zt(t),t):Pt()}function It(e,t,n){let r={id:globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,title:a(`New chat`),updated:Date.now(),tier:e,mapId:t,mapName:n,items:[],messages:[],usage:{input:0,output:0,cached:0}};return T.push(r),Ft(r.id),r}function Lt(e){T=T.filter(t=>t.id!==e),Dt===e&&(Dt=``,localStorage.removeItem(Tt)),Ht()}function Rt(e,t){if(t.kind===`question`&&!e.items.some(e=>e.kind===`question`)){let n=t.text||`Image`;e.title=n.length>Et?`${n.slice(0,Et).trimEnd()}…`:n}e.items.push(t),zt(e)}function zt(e){e.updated=Date.now(),Ht()}function Bt(e,t,n){return!!t&&e.tier===`key`==(t===`key`)&&e.mapId===n}var Vt=e=>e.tier===`key`&&JSON.stringify(e.messages,(e,t)=>e===`data`&&typeof t==`string`?``:t).length>1e5;function Ht(){Ot&&h.isSupported()&&(jt=!0,!At&&(At=!0,(async()=>{try{for(;jt;)jt=!1,await h.set(wt,T)}catch(e){s.error(`Assistant chats could not be saved`,e)}finally{At=!1}})()))}var Ut=`StylePresets.apply`,Wt=new class{loaded=new Map;ensureGroupStyles;async preload(e){let t=new Set,r=e=>{if(Array.isArray(e))e.forEach(r);else if(e&&typeof e==`object`){let{op:n,args:i}=e;n===Ut&&Array.isArray(i)&&typeof i[0]==`string`?t.add(i[0]):Object.values(e).forEach(r)}};if(r(e),!t.size)return;let[{StylePresetsService:i},{ensureGroupStyles:a}]=await Promise.all([n(()=>import(`./style-presets-BDZALvMj.js`).then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49])),n(()=>import(`./style-preset-JMqVLt_v.js`),__vite__mapDeps([50,2,1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,27,26,40,28,39,35,0,20,29,30,31,32,33,34,36,37,38,41,42,43,44,45,46,47,48,49,51]))]);this.ensureGroupStyles=a;for(let e of t){let t=!i.isSystem(e);if(t&&this.loaded.delete(e),this.loaded.has(e)||t&&!i.listCustom().includes(e))continue;let{styles:n,error:r}=await i.load(e),a=!r&&i.parse(n);a&&this.loaded.set(e,a)}}apply(e){let t=this.loaded.get(e);if(!t)throw Error(`No style preset "${e}"; read_docs(["Styles"]) lists them`);let n=styles.relief.options.density;Object.assign(styles,structuredClone(t)),styles.relief.options.density=n,this.ensureGroupStyles?.()}},Gt={AddedLabels:Ne,Biomes:Pe,Burgs:f,Cultures:d,Emblems:c,Features:ae,Goods:l,Journeys:Fe,Labels:te,Lore:Ge,Markers:He,Markets:be,Military:ie,Notes:je,Provinces:ye,Religions:ze,Rivers:ne,Routes:p,States:_e,Styles:Ie,StylePresets:Wt,Zones:Ke},Kt={Burgs:[`rename`,`setPopulation`,`setGroup`,`setType`,`setBuilding`,`setCulture`,`setPort`,`setCapital`,`move`,`add`,`remove`,`setTreasury`,`setLocked`,`setLink`],States:[`rename`,`recolor`,`setFullName`,`setForm`,`setCulture`,`setType`,`setExpansionism`,`setRelation`,`recalculate`,`merge`,`add`,`remove`,`setTaxes`,`setTreasury`,`setLocked`,`setChronicleEntry`,`setCells`,`setPopulation`],Provinces:[`rename`,`recolor`,`setFullName`,`setForm`,`setCapital`,`setState`,`add`,`declareIndependence`,`remove`,`merge`,`setPopulation`,`setLocked`,`setCells`],Cultures:[`rename`,`recolor`,`setType`,`setBase`,`setExpansionism`,`recalculate`,`add`,`remove`,`setEmblemShape`,`setLocked`,`setOrigins`,`setCode`,`moveCenter`,`setCells`,`setPopulation`],Religions:[`rename`,`recolor`,`setDeity`,`setType`,`setForm`,`setExpansion`,`setExpansionism`,`recalculate`,`add`,`remove`,`setLocked`,`setOrigins`,`setCode`,`moveCenter`,`setCells`,`setPopulation`],Biomes:[`rename`,`recolor`,`setHabitability`,`add`,`remove`,`setCells`,`restore`],Rivers:[`rename`,`setType`,`add`,`remove`,`setParent`,`setWidth`,`setLocked`,`create`],Routes:[`rename`,`setGroup`,`add`,`remove`,`setLocked`,`create`,`split`,`join`],Features:[`rename`,`setSubtype`,`setGroup`,`setCoastline`],Zones:[`rename`,`recolor`,`setType`,`setHidden`,`setCells`,`add`,`remove`,`setPopulation`],Markers:[`rename`,`setIcon`,`setType`,`setHidden`,`place`,`remove`,`move`,`setPinned`,`setLocked`,`setAppearance`],AddedLabels:[`rename`,`place`,`remove`],Labels:[`setGroup`,`setLayout`,`reset`],Military:[`rename`,`remove`,`add`,`setAlert`,`setUnits`,`setNaval`,`setIcon`,`move`,`rotate`,`setBase`,`split`,`attach`],Emblems:[`set`,`regenerateOne`,`place`],Journeys:[`add`,`remove`,`rename`,`setType`,`recolor`,`setHidden`,`setLocked`,`addSegment`,`removeSegment`,`moveSegment`,`setSegment`,`resetSegment`],Goods:[`rename`,`setIcon`,`recolor`,`setPrice`,`setUnit`,`setTags`,`setProduction`],Markets:[`rename`,`recolor`],Lore:[`rename`,`setYear`,`setEra`,`setDescription`],Notes:[`write`],Styles:[`setValue`],StylePresets:[`apply`]},qt=new Set(Object.entries(Kt).flatMap(([e,t])=>t.map(t=>`${e}.${t}`)));function Jt(e,t){let[n,r]=e.split(`.`);return Gt[n][r](...t)}var Yt=`declare const FMG: {
  // replaced wholesale on regeneration and load, so read through getters
  pack: PackedGraph;
  grid: GridGraph;
  options: OptionsData;
  styles: StylesData;
  // helpers
  // from arrayUtils: last, unique, groupByValue, TYPED_ARRAY_MAX
  // from colorUtils: toHEX, toColorHex, requireColor, requireFill, C_12, getCardinalColor, getColors, getRandomColor, getMixedColor
  // from commonUtils: clipPoly, getSegmentId, debounce, throttle, parseError, openURL, wiki, link, isCtrlClick, getLongitude, getLatitude, getCoordinates
  // from fileUtils: downloadFile, sanitizeSvgIcon, scopeSvgIcon, isImageIcon, createFileInput, uploadFile, getBase64
  // from heightUtils: SEA_LEVEL, isLand, isWater
  // from languageUtils: isVowel, trimVowels, getAdjective, nth, abbreviate, replaceWholeWord, list
  // from nodeUtils: ensureEl, findEl, htmlEl, createEl, getPointer, getNextId, applyOption
  // from numberUtils: rn, minmax, lim, normalize, lerp, si, distanceSquared
  // from objectUtils: getPath, deepMerge
  // from pathUtils: getIsolines, getVertexPath, getPolesOfInaccessibility, connectVertices, findPath, parsePathPoints, meander, getBounds, projectToNearestEdge, wavyDash, curveLength
  // from probabilityUtils: rand, P, each, gauss, Pint, ra, rw, biased, getNumberInRange, generateSeed
  // from stringUtils: round, capitalize, errorText, escapeHtml, parseTransform, isValidJSON, safeParseJSON, sanitizeId
  // from units: convertTemperature, getHeight, getHeightUnitRatio, heightToMeters, metersToHeight, getPrecipitation, getFriendlyPrecipitation, getFriendlyHeight, getPeople, getCellPopulation, formatPrice, getTemperatureLikeness, getDistanceUnit, getDistance, getKmInDistanceUnit, getDistanceUnitRatio, convertSpeed, formatSpeed, parseSpeed, getAreaUnit, getArea
  speak(text: string): void;
  getFileName(dataType?: string): string;
  VERSION: string;
  mapHistory: MapHistoryEntry[];
  log: Logger;
  fonts: FontDefinition[];
  heightmapTemplates: Record<string, HeightmapTemplate>;
  precreatedHeightmaps: Record<string, PrecreatedHeightmap>;
  AddedLabels: AddedLabelsModule;
  Biomes: BiomesGenerator;
  Burgs: BurgModule;
  Coastline: CoastlineGenerator;
  Coordinates: CoordinatesModule;
  Cultures: CulturesGenerator;
  CustomIcons: CustomIconList;
  Emblems: EmblemsGenerator;
  ErasePipeline: Pipeline;
  Features: FeatureModule;
  GenerationPipeline: Pipeline;
  Goods: GoodsModule;
  GraphOverride: GraphOverrideModule;
  Grid: GridModule;
  HeightmapGenerator: HeightmapModule;
  Ice: IceModule;
  IconSets: IconSetRegistry;
  Icons: IconLibrary;
  Journeys: JourneysModule;
  Labels: LabelsModule;
  Lakes: LakesModule;
  Legends: LegendsModule;
  Lore: LoreModel;
  MapEntities: EntityLookup;
  MapIntegrity: MapIntegrityModule;
  MapRestoration: MapRestorationModule;
  Markers: MarkersModule;
  Markets: MarketsModule;
  Measurers: typeof Measurers;
  Military: MilitaryModule;
  Names: NamesGenerator;
  Notes: NotesStore;
  Ocean: OceanModule;
  Options: OptionsModel;
  Pack: PackModule;
  Pins: PinStore;
  Population: PopulationModule;
  Precipitation: PrecipitationModule;
  Production: ProductionModule;
  Provinces: ProvinceModule;
  Relief: ReliefModel;
  Religions: ReligionsModule;
  Resample: Resampler;
  Rivers: RiverModule;
  Routes: RoutesModule;
  States: StatesModule;
  Styles: StylesStore;
  Tags: TagsModule;
  Temperature: TemperatureModule;
  Transports: TransportsModule;
  Zones: ZonesModule;
  Layers: LayersRegistry;
  ViewportLayers: ViewportRenderer;
  TradeAnimation: TradeAnimationModule;
  EmblemRenderer: EmblemRendererModule;
  getLabelsData(): LabelData[];
  fitLegendBox(): void;
  Controllers: typeof Controllers;
  Services: typeof Services;
  tip(message: string, main = false, type: TipType = "info", time = 0): void;
  clearMainTip(): void;
  Dialog: DialogManager;
  zoomTo(x: number, y: number, z = 8, duration = 2000): void;
  resetZoom(duration = 1000): void;
  setMapZoom(value: number): void;
  setZoomExtent(min: number, max: number): void;
  setTranslateExtent(x0: number, y0: number, x1: number, y1: number): void;
  invokeActiveZooming(): void;
  regenerateMap: typeof regenerateMap;
  regeneratePrompt(config?: GenerationConfig): void;
  generateMapWithSeed(): void;
  restoreSeed(index: number): void;
  showSeedHistoryDialog(): void;
  applyLayersPreset(): void;
  applyURLLayers(params: URLSearchParams): void;
  toggleOptions(event?: Event): void;
  hideOptions(event?: Event): void;
  changeCellsDensity(density: number): void;
  initiateAutosave(): void;
  toggleSaveReminder(): void;
  copyMapURL(): void;
  cleanupData(): Promise<void>;
  // debugging aids for the devtools prompt, drawn into the #debug layer
  drawCellsValue(data: unknown[], points = pack.cells.p);
  drawPolygons(data: number[]);
  drawRouteConnections();
  drawPoint([x, y]: [number, number], { color = "red", radius = 0.5 }): void;
  drawPath(points: [number, number][], { color = "red", width = 0.5 }): void;
  getVertexPath(cells: number[]);
};`,Xt=`Biomes, Burgs, Coastline, Cultures, Emblems, Features, Goods, Grid, HeightmapGenerator, Ice, Journeys, Labels, Markers, Markets, Measurers, Military, Names, Ocean, Pack, Population, Precipitation, Production, Provinces, Relief, Religions, Rivers, Routes, States, Temperature, Transports, Zones`,Zt=`Voronoi data (grid): grid.{sampling, spacing, cellsY, cellsX, points, boundary, cells, vertices}; grid.cells.{i, c, v, b}; grid.vertices.{p, c, v}
Voronoi data (pack): pack.{cells, vertices}; pack.cells.{i, p, c, v, b, g}; pack.vertices.{p, c, v}
Features data (grid): grid.{features}; i, land, border, type
Features data (pack): pack.{features}; i, land, border, type, subtype, group, cells, area, firstCell, vertices, name, note, coastline
Specific cells data (grid): grid.cells.{h, f, t, temp, prec}
Specific cells data (pack): pack.cells.{h, f, t, s, biome, burg, culture, state, province, religion, good, market, area, pop, r, fl, conf, harbor, haven, routes}
Cultures: i, base, name, ancestry, origins, shield, center, code, color, expansionism, type, area, cells, rural, urban, lock, removed, note
Burgs: i, name, cell, x, y, culture, state, feature, population, type, group, label, coa, MFCG, link, capital, port, market, production, product, treasury, citadel, plaza, shanty, temple, walls, lock, removed, note
States: i, name, form, formName, fullName, color, center, pole, culture, type, expansionism, area, burgs, cells, rural, urban, neighbors, provinces, diplomacy, campaigns, alert, military, label, coa, salesTax, pollTax, treasury, tariffs, lock, removed, note
States (regiment): i, x, y, bx, by, angle, icon, cell, state, name, n, u, note
Provinces: i, name, formName, fullName, color, center, pole, area, burg, burgs, cells, rural, urban, coa, label, lock, removed, note
Religions: i, name, type, form, deity, color, code, origins, center, culture, expansionism, expansion, area, cells, rural, urban, lock, removed, note
Rivers: i, name, type, source, mouth, parent, basin, cells, points, discharge, length, width, sourceWidth, note, lock
Markers: i, name, icon, x, y, cell, type, size, fill, stroke, pin, pinned, dx, dy, px, lock, note
Labels: text, group, dx, dy, pathPoints, startOffset, fontSize, letterSpacing, i, label, note, groups, name, type, active, layerDependency, mode
Routes: i, points, feature, group, length, name, lock, note
Zones: i, name, type, color, cells, lock, hidden, note
Ice: i, type, offset, points
Measurers: type, points
Goods: i, name, tags, value, unit, icon, color, chance, distribution, biomeOutput, recipes, multipliers, demandCoverage, note
Markets: i, centerBurgId, color, goods, name, note
Biomes: i, name, color, cost, habitability, icons, iconsDensity, removed, note
Deals: i, seller, sellerType, buyer, buyerType, good, units, price, tax, tariff
Journeys: i, name, type, color, segments, visible, lock, note, transport, speed, distance, points, avoidRoads, duration, custom
Legends: name, items
Transports: i, name, speed, domain, hoursPerDay
Name bases: i, name, b, min, max, d, m`,Qt=`Burgs.rename(burgId: number, name: string) // Rename a burg; its label text follows the name
Burgs.setPopulation(burgId: number, people: number) // Set a burg's population as shown in the Burg Editor, in people
Burgs.setGroup(burgId: number, group: string) // Move a burg to an existing burg group
Burgs.setType(burgId: number, type: string) // Set a burg's culture type, which is about geography, not rank
Burgs.setBuilding(burgId: number, building: string, present: boolean) // Turn one of a burg's buildings on or off: citadel, plaza, shanty, temple or walls
Burgs.setCulture(burgId: number, cultureId: number) // Set the culture of a burg's people
Burgs.setPort(burgId: number, port: boolean) // Make a burg a port on the water body it faces or drains to, or stop it being one
Burgs.setCapital(burgId: number) // Make a burg the capital of the state it is in; the old capital becomes an ordinary burg
Burgs.move(burgId: number, x: number, y: number) // Move a burg to a free land cell at a map point; a capital stays inside its state or province. A port trades by the water at its new place, if any
Burgs.add(x: number, y: number) // Found a burg on a free land cell at a map point; returns its id
Burgs.remove(burgId: number) // Remove a burg that is neither a capital nor a market center
Burgs.setTreasury(burgId: number, amount: number) // Set a burg's treasury, in the map's currency
Burgs.setLocked(burgId: number, locked: boolean) // Lock a burg so regeneration keeps it, or unlock it
Burgs.setLink(burgId: number, url: string) // Set the URL of a burg's map preview: a generator link or an image. Empty restores the default preview
States.rename(stateId: number, name: string) // Rename a state; a custom full name or label keeps its pattern when the old name stands in it as a whole word
States.recolor(stateId: number, color: string) // Set a state's color
States.setFullName(stateId: number, fullName: string) // Set a state's full name, such as "Grand Duchy of Orwin"
States.setForm(stateId: number, formName: string, form?: string) // Set a state's form name, such as Kingdom or Free City; empty clears it. Its government (Monarchy, Republic, Union, Theocracy or Anarchy) follows a listed name, or \`form\` for a custom one. The full name is rebuilt
States.setCulture(stateId: number, cultureId: number) // Set a state's dominant culture
States.setType(stateId: number, type: string) // Set a state's type, which steers its expansion: Generic, Hunting, Highland, River, Lake, Naval or Nomadic
States.setExpansionism(stateId: number, expansionism: number) // Set how strongly a state expands when states are recalculated, from 0 to 99
States.setRelation(stateId: number, otherId: number, relation: string) // Set a state's relation towards another; the other takes the inverse and the chronicle records the change
States.recalculate() // Redraw state borders from their capitals, types and expansionism; provinces are regenerated
States.merge(rulingStateId: number, stateIds: number[], asProvinces = false) // Merge states into a ruling one, which takes their lands, burgs, provinces and regiments. With \`asProvinces\`, each merged state becomes one province of the ruling state instead of keeping its own provinces
States.add(x: number, y: number) // Found a state at a map point with the burg there, or a new one, as its capital. It owns only that cell. Returns its id
States.remove(stateId: number) // Remove a state with its provinces; its lands and burgs become neutral
States.setTaxes(stateId: number, salesTax: number, pollTax: number) // Set a state's sales tax (0 to 1, on deals it sells) and poll tax (per person); they take effect when production is regenerated
States.setTreasury(stateId: number, amount: number) // Set a state's treasury, in the map's currency
States.setLocked(stateId: number, locked: boolean) // Lock a state so regeneration keeps it, or unlock it
States.setChronicleEntry(index: number, lines: string[]) // Replace a chronicle entry with text lines, the first being its title. Index -1 adds an entry after any the batch records before it (setRelation does); no lines removes it
States.setCells(stateId: number, cellIds: number[]) // Give land cells to a state, or to neutral lands with id 0, with their burgs. Provinces follow: a province wholly taken changes owner, a split one is divided
States.setPopulation(stateId: number, rural: number, urban: number) // Set a state's rural and urban population, in people: its cells and burgs scale to the totals
Provinces.rename(provinceId: number, name: string) // Rename a province; a custom full name or label keeps its pattern when the old name stands in it as a whole word
Provinces.recolor(provinceId: number, color: string) // Set a province's color
Provinces.setFullName(provinceId: number, fullName: string) // Set a province's full name, such as "County of Vel"
Provinces.setForm(provinceId: number, formName: string) // Set a province's form, such as County or Duchy; empty clears it. The full name is rebuilt from it
Provinces.setCapital(provinceId: number, burgId: number) // Make a burg inside a province its capital
Provinces.setState(provinceId: number, stateId: number) // Give a province, with its lands and burgs, to another state
Provinces.add(x: number, y: number) // Found a province at a map point inside a state, with the cell and its neighbors in that state. Returns its id
Provinces.declareIndependence(provinceId: number) // Turn a province with a burg into a new state that takes its lands and burgs. Returns the state id
Provinces.remove(provinceId: number) // Remove a province; its lands stay with the state
Provinces.merge(primaryId: number, provinceIds: number[]) // Merge provinces of one state into a primary one, which takes their lands and burgs
Provinces.setPopulation(provinceId: number, rural: number, urban: number) // Set a province's rural and urban population, in people: its cells and burgs scale to the totals
Provinces.setLocked(provinceId: number, locked: boolean) // Lock a province so regeneration keeps it, or unlock it
Provinces.setCells(provinceId: number, cellIds: number[]) // Give land cells of the province's state to a province; another province's center cannot move
Cultures.rename(cultureId: number, name: string) // Rename a culture; its code is recomputed
Cultures.recolor(cultureId: number, color: string) // Set a culture's color
Cultures.setType(cultureId: number, type: string) // Set a culture's type: Generic, Hunting, Highland, River, Lake, Naval or Nomadic
Cultures.setBase(cultureId: number, baseId: number) // Set the name base a culture takes its names from, by index in Names.nameBases
Cultures.setExpansionism(cultureId: number, expansionism: number) // Set how strongly a culture expands when cultures are recalculated, from 0 to 99
Cultures.recalculate() // Redraw culture borders from their centers, types and expansionism; burgs take their cell's culture
Cultures.add(x: number, y: number) // Found a culture centered at a map point; it takes land when cultures are recalculated. Returns its id
Cultures.remove(cultureId: number) // Remove a culture; its lands, burgs, states and religions fall to the wildlands
Cultures.setEmblemShape(cultureId: number, shape: string) // Set a culture's emblem shape; emblems of its states, provinces and burgs take it, except icon emblems
Cultures.setLocked(cultureId: number, locked: boolean) // Lock a culture so regeneration keeps it, or unlock it
Cultures.setOrigins(cultureId: number, originIds: number[]) // Set a culture's origins, as the Hierarchy tree does: the first is primary (0 = top level), the rest secondary
Cultures.setCode(cultureId: number, code: string) // Set a culture's short code, 1 to 3 characters
Cultures.moveCenter(cultureId: number, x: number, y: number) // Move a culture's center to a land cell at a map point; it takes effect when cultures are recalculated
Cultures.setCells(cultureId: number, cellIds: number[]) // Give land cells to a culture, or to the wildlands with id 0; burgs there take it too
Cultures.setPopulation(cultureId: number, rural: number, urban: number) // Set a culture's rural and urban population, in people: its cells and burgs scale to the totals
Religions.rename(religionId: number, name: string) // Rename a religion; its code is recomputed
Religions.recolor(religionId: number, color: string) // Set a religion's color
Religions.setDeity(religionId: number, deity: string) // Set the deity a religion worships; empty clears it
Religions.setType(religionId: number, type: string) // Set a religion's type: Folk, Organized, Cult or Heresy
Religions.setForm(religionId: number, form: string) // Set a religion's form, a free label such as Polytheism or Dualism
Religions.setExpansion(religionId: number, expansion: string) // Set how far a religion may expand: global, state or culture
Religions.setExpansionism(religionId: number, expansionism: number) // Set how strongly a religion expands when religions are recalculated, from 0 to 99
Religions.recalculate() // Redraw religion borders from their centers, expansion and expansionism
Religions.add(x: number, y: number) // Found a religion centered at a map point, its type and name drawn from the local culture and faith. Returns its id
Religions.remove(religionId: number) // Remove a religion; its believers lose their faith
Religions.setLocked(religionId: number, locked: boolean) // Lock a religion so regeneration keeps it, or unlock it
Religions.setOrigins(religionId: number, originIds: number[]) // Set a religion's origins, as the Hierarchy tree does: the first is primary (0 = top level), the rest secondary
Religions.setCode(religionId: number, code: string) // Set a religion's short code, 1 to 3 characters
Religions.moveCenter(religionId: number, x: number, y: number) // Move a religion's center to a land cell at a map point; it takes effect when religions are recalculated
Religions.setCells(religionId: number, cellIds: number[]) // Give land cells to a religion, or to no religion with id 0
Religions.setPopulation(religionId: number, rural: number, urban: number) // Set a religion's rural and urban population, in people: its cells and burgs scale to the totals
Biomes.rename(biomeId: number, name: string) // Rename a biome
Biomes.recolor(biomeId: number, color: string) // Set a biome's color
Biomes.setHabitability(biomeId: number, percent: number) // Set a biome's habitability, in percent
Biomes.add(name: string, color: string, habitability: number) // Add a custom biome for painting; returns its id. There can be at most 255 biomes
Biomes.remove(biomeId: number) // Remove a custom biome that no cell uses; the generated biomes stay
Biomes.setCells(biomeId: number, cellIds: number[]) // Paint land cells with a biome; a cell's rural population does not follow until population is regenerated
Biomes.restore() // Restore the generated biomes: their default names, colors and habitability, and the cells they cover. Custom biomes are removed
Rivers.rename(riverId: number, name: string) // Rename a river; a custom label keeps its pattern when the old name stands in it as a whole word
Rivers.setType(riverId: number, type: string) // Set a river's type, a free label such as River, Creek or Fork
Rivers.add(x: number, y: number) // Start a river at a land point; it flows downhill to the sea, a lake or another river. Returns the river holding it
Rivers.remove(riverId: number) // Remove a river with all its tributaries; lakes forget them
Rivers.setParent(riverId: number, parentId: number) // Make a river a tributary of another, or a mainstem when the parent is itself; the basin follows
Rivers.setWidth(riverId: number, sourceWidth: number, widthFactor: number) // Set a river's width at its source and how fast it widens downstream; its mouth width follows
Rivers.setLocked(riverId: number, locked: boolean) // Lock a river so regeneration keeps its course and data, or unlock it
Rivers.create(cellIds: number[]) // Draw a river through cells from source to mouth, each a neighbor of the one before (\`pack.cells.c\`); it joins the river at its last cell, if any. Returns its id
Routes.rename(routeId: number, name: string) // Rename a route
Routes.setGroup(routeId: number, group: string) // Move a route to another route group, such as roads, trails or searoutes
Routes.add(fromBurgId: number, toBurgId: number, group: string) // Build a route between two burgs along the cheapest path: roads and trails by land, searoutes by water. Returns its id
Routes.remove(routeId: number) // Remove a route and its cell connections
Routes.setLocked(routeId: number, locked: boolean) // Lock a route so regeneration keeps it, or unlock it
Routes.create(points: number[][], group: string) // Draw a route in a group through map points [x, y], each in the cell under it. Returns its id
Routes.split(routeId: number, pointIndex: number) // Split a route at one of its inner points: the route ends there and a new one of the same group goes on. Returns the new id
Routes.join(routeId: number, otherId: number) // Join a route of the same group that starts or ends where this one starts or ends; the other route is removed
Features.rename(featureId: number, name: string) // Rename a geographical feature: an island, lake or ocean
Features.setSubtype(featureId: number, subtype: string) // Set a feature's subtype within its type: a lake's freshwater, salt, dry…, an island's continent, island or isle, an ocean's ocean, sea or gulf. Generators read it on their next run
Features.setGroup(featureId: number, group: string) // Move a lake to another lake group, which sets how it is drawn
Features.setCoastline(featureId: number, settings: Partial<CoastlineSettings> | null) // Give a feature its own coastline settings, merged over the current ones; null makes it follow the map settings again
Zones.rename(zoneId: number, name: string) // Rename a zone; its name is its description
Zones.recolor(zoneId: number, color: string) // Set a zone's color
Zones.setType(zoneId: number, type: string) // Set a zone's type, a free label such as Invasion or Disease
Zones.setHidden(zoneId: number, hidden: boolean) // Hide or show a zone
Zones.setCells(zoneId: number, cells: number[]) // Set the cells a zone covers, as a list of cell ids
Zones.add(name: string, type: string, cells: number[]) // Add a zone over a list of cell ids; returns its id
Zones.remove(zoneId: number) // Remove a zone
Zones.setPopulation(zoneId: number, rural: number, urban: number) // Set the rural and urban population of a zone's land, in people: its cells and burgs scale to the totals
Markers.rename(markerId: number, name: string) // Rename a marker
Markers.setIcon(markerId: number, icon: string) // Set a marker's icon: an emoji or an icon id
Markers.setType(markerId: number, type: string) // Set a marker's type, a free label such as volcano or ruins
Markers.setHidden(markerId: number, hidden: boolean) // Hide or show a marker
Markers.place(x: number, y: number, type: string, details: MarkerDetails = {}) // Place a marker at a map point with details: its name, legend note (HTML, as Notes.write takes) and icon (an emoji or icon id). A type from the markers config, such as volcanoes or ruins, generates all three, each replaced by the one given; any other type needs a note. Returns its id
Markers.remove(markerId: number) // Remove a marker
Markers.move(markerId: number, x: number, y: number) // Move a marker to a map point
Markers.setPinned(markerId: number, pinned: boolean) // Pin a marker so it shows even when its type is filtered out, or unpin it
Markers.setLocked(markerId: number, locked: boolean) // Lock a marker so regeneration keeps it, or unlock it
Markers.setAppearance(markerId: number, appearance: MarkerAppearance) // Set how a marker looks: size (marker), px (icon size), dx and dy (icon shift, %), pin shape, fill and stroke (pin), iconFill and iconStroke. null restores a default
AddedLabels.rename(labelId: number, text: string) // Change the text of a label placed on the map
AddedLabels.place(x: number, y: number, text: string, group?: string) // Place a text label at a map point, in an "added" label group (default: the first one). Returns its id
AddedLabels.remove(labelId: number) // Remove a label placed on the map
Labels.setGroup(type: LabelType, id: number, group: string) // Move a label to a label group, which sets its style and when it shows
Labels.setLayout(type: LabelType, id: number, layout: LabelLayout) // Adjust a label: dx and dy shift it, fontSize (30–300%) and letterSpacing (0–20 px) size its text, startOffset (0–100%) slides a label along its path, hidden hides it. null restores the automatic value
Labels.reset(type: LabelType, id: number) // Return a label to its automatic placement and style; an added label keeps its text and group
Military.rename(stateId: number, regimentId: number, name: string) // Rename a regiment, addressed by its state and its own id
Military.remove(stateId: number, regimentId: number) // Disband a regiment, addressed by its state and its own id
Military.add(stateId: number, x: number, y: number) // Raise an empty regiment of a state at a map point, a fleet on water; returns its id
Military.setAlert(stateId: number, alert: number) // Set a state's war alert, the modifier of its forces (generated from 0.1 to 5): every regiment's troops scale with it
Military.setUnits(stateId: number, regimentId: number, units: Record<string, number>) // Set a regiment's troops by unit name, such as { infantry: 800, archers: 200 }; the total follows
Military.setNaval(stateId: number, regimentId: number, naval: boolean) // Make a regiment a fleet or a land regiment
Military.setIcon(stateId: number, regimentId: number, icon: string) // Set a regiment's icon: an emoji or an icon id
Military.move(stateId: number, regimentId: number, x: number, y: number) // Move a regiment to a map point; its base stays
Military.rotate(stateId: number, regimentId: number, angle: number) // Turn a regiment to an angle in degrees, from -180 to 180
Military.setBase(stateId: number, regimentId: number, x: number, y: number) // Move a regiment's base, where it is stationed, to a map point
Military.split(stateId: number, regimentId: number) // Split a regiment in two halves; the new one stands just below. Returns its id
Military.attach(stateId: number, regimentId: number, targetStateId: number, targetId: number) // Attach a regiment to another, of any state: its troops and note join the target and it is disbanded
Emblems.set(key: string, coa: Emblem) // Set the emblem of a state, province or burg, keyed like "state:3": a heraldic emblem in the generator's vocabulary, or { icon } for a picture. Its size and position stay
Emblems.regenerateOne(key: string) // Draw a new emblem for a state, province or burg, akin to its overlord's; its shield, size and position stay
Emblems.place(key: string, x: number | null, y: number | null, size: number | null) // Place an emblem on the map: x and y in map units, size from 0 to 5. null returns a value to automatic
Journeys.add(random = false) // Add a journey, empty or a random story between burgs; returns its id
Journeys.remove(journeyId: number) // Remove a journey
Journeys.rename(journeyId: number, name: string) // Rename a journey
Journeys.setType(journeyId: number, type: string) // Set a journey's type, a free label such as Quest, Raid or Pilgrimage
Journeys.recolor(journeyId: number, color: string) // Set a journey's color; segments without their own color take it
Journeys.setHidden(journeyId: number, hidden: boolean) // Hide or show a journey on the map
Journeys.setLocked(journeyId: number, locked: boolean) // Lock a journey so regeneration keeps it, or unlock it
Journeys.addSegment(journeyId: number) // Append an empty segment to a journey, starting where the previous one ended; returns its id
Journeys.removeSegment(journeyId: number, segmentId: number) // Remove a segment of a journey
Journeys.moveSegment(journeyId: number, segmentId: number, index: number) // Move a segment to a position in its journey, counted from 0
Journeys.setSegment(journeyId: number, segmentId: number, fields: SegmentFields) // Change a segment: name, color (null = the journey's), hidden, transport, speed (km/h), duration (hours, null = from distance and speed), from and to (cells), avoidRoads. A changed transport, endpoint or road choice reroutes it
Journeys.resetSegment(journeyId: number, segmentId: number) // Drop a segment's manual overrides, color, speed, duration and drawn path, and route it again
Goods.rename(goodId: number, name: string) // Rename a good
Goods.setIcon(goodId: number, icon: string) // Set a good's icon: an emoji or an icon id
Goods.recolor(goodId: number, color: string) // Set a good's color on the Goods layer
Goods.setPrice(goodId: number, value: number) // Set a good's base value per unit, in the map's currency; markets price it from this on the next economy run
Goods.setUnit(goodId: number, unit: string) // Set the unit a good is counted in, such as "barrel"; empty for none
Goods.setTags(goodId: number, tags: string[]) // Set a good's tags, such as "food, luxury"
Goods.setProduction(goodId: number, rules: ProductionRules) // Set how a good is produced: chance (0–100), recipes ([{ goodId: amount }]), biomeOutput ({ biomeId: amount }), multipliers ({ cultureType | culture | state | religion | biome | zone: { key: factor } }), demandCoverage ({ category: share }). A key set to null clears it. Takes effect on the next economy run
Markets.rename(marketId: number, name: string) // Rename a market; empty takes its center burg's name again
Markets.recolor(marketId: number, color: string) // Set a market's color on the Markets layer
Lore.rename(name: string) // Rename the map; files it is downloaded as take the name
Lore.setYear(year: number) // Set the current year, a whole number that may be negative; history and battle reports are dated by it
Lore.setEra(era: string, eraShort?: string) // Set the era the current year belongs to and its short form, such as "Winter Era" and "WE"; without one the short form is abbreviated from the era
Lore.setDescription(text: string) // Set the author's free-text description of the world; empty clears it
Notes.write(key: string, html: string) // Replace an entity's note with HTML from the notes editor's subset; empty html removes the note
Styles.setValue(path: string, value: unknown) // Set one value of \`styles\` by its path, such as "ocean.groups.base.attrs.fill"; null unsets an attr. Draws nothing
StylePresets.apply(name: string) // Replace the whole style with a preset's, such as "ancient", keeping the relief density; Styles.setValue after it adjusts the result`,$t=`interface CoastlineSettings {
  enabled: boolean; // master toggle — false bypasses all fractalization
  maxDepth: number; // max recursion depth per edge
  baseAmplitude: number; // peak displacement (scales with √edgeLength)
  amplitudeDecay: number; // amplitude multiplier per recursion level
  minEdge: number; // edges shorter than this are never subdivided
  smoothThreshold: number; // roughness values below this → zero displacement
  roughnessContrast: number; // power applied to the roughness field
  roughnessScale: number; // size of a calm or rough stretch of coast, in map units
  lakeSmoothThreshMult: number; // smooth-threshold multiplier for lake shores (1 = same as ocean, higher = calmer)
  variant: number; // reshuffles the coastlines of the map, changing nothing else about them
}
type MarkerDetails = { name?: string; note?: string; icon?: string };
type MarkerAppearance = Partial<
  Record<"size" | "px" | "dx" | "dy", number | null> &
    Record<"pin" | "fill" | "stroke" | "iconFill" | "iconStroke", string | null>
>;
type LabelType = (typeof LABEL_TYPES)[number];
type LabelLayout = Partial<
  Record<"dx" | "dy" | "fontSize" | "letterSpacing" | "startOffset", number | null> & { hidden: boolean | null }
>;
type Emblem = HeraldicEmblem | PictureEmblem;
type SegmentFields = Partial<{
  name: string;
  color: string | null;
  hidden: boolean;
  transport: string;
  speed: number;
  duration: number | null;
  from: number;
  to: number;
  avoidRoads: boolean;
}>;
type ProductionRules = Partial<{
  chance: number | null;
  recipes: Record<number, number>[] | null;
  biomeOutput: Partial<Record<number, number>> | null;
  multipliers: Good["multipliers"] | null;
  demandCoverage: Good["demandCoverage"] | null;
}>;
const LABEL_TYPES = ["state", "province", "burg", "river", "route", "added"] as const;
interface HeraldicEmblem extends EmblemBase {
  t1: string;
  division?: EmblemDivision;
  ordinaries?: EmblemOrdinary[];
  charges?: EmblemCharge[];
  inscriptions?: EmblemInscription[];
  diaper?: string;
  zoom?: number;
}
interface PictureEmblem extends EmblemBase {
  icon: string;
}
interface EmblemBase {
  size?: number;
  x?: number;
  y?: number;
  shield?: string;
}
interface EmblemDivision {
  division: string;
  t: string;
  line?: string;
}
interface EmblemOrdinary extends EmblemPlacement {
  ordinary: string;
  t: string;
  t2?: string;
  line?: string;
  above?: boolean;
  strokeWidth?: number;
  compony?: number; // bordure and orle tile length
  gyronny?: number; // bordure and orle sector count
}
interface EmblemCharge extends EmblemPlacement {
  charge: string;
  t: string;
  p: string;
  t2?: string;
  t3?: string;
  sinister?: number | boolean;
  reversed?: number | boolean;
  layered?: number | boolean; // redraws the charge's foreground over what it overlaps
  outside?: "above" | "below" | "around"; // drawn over or under the shield outline
}
interface EmblemInscription {
  text: string; // \`|\` breaks lines
  font: string;
  size: number;
  color: string;
  path: string; // around the shield center
  bold?: boolean;
  italic?: boolean;
  spacing?: number;
  shadow?: { x: number; y: number; blur: number; color: string };
}
interface EmblemPlacement {
  size?: number;
  stretch?: number; // negative widens, positive heightens
  x?: number;
  y?: number;
  angle?: number;
  stroke?: string;
  divided?: Divided;
}
type Divided = "field" | "division" | "counter";`,en=[...oe,...m].join(`, `),tn=Object.entries(Kt).map(([e,t])=>`${e}: ${t.join(`, `)}`).join(`
`),nn=[{type:`text`,text:["You are Azgaar Assistant in Fantasy Map Generator. Tools: `read_help` searches the Knowledge Base for\nhow-to questions; `read_map` runs scripts for facts about the open map (never guess them); `read_docs` returns\nreference docs; `propose_change` edits the map; `show_*` place widgets; `view_emblem` and `view_map` show you\nan emblem or the map.\n\nScope: the generator, the open map, cartography and world-building. Real-world knowledge is fine when it serves\nthe user's world. Reply in one sentence that other requests are out of scope. Never be polite.",`# Scripts (read_map)

- Read-only: never assign to map data or call mutating methods. Changes go only through \`propose_change\`.
- \`return\` the answer. Only it and console output come back, cut at 8000 characters: aggregate, count and slice;
  never return a whole entity array. Plan first: one script gathers all the answer needs, and independent calls
  share one turn. Stop reading once you can answer. On an error, fix and retry.
- Unsure of a shape? \`return describe("pack.burgs[1]")\`, an object (also works on singletons, e.g.
  \`describe("States")\`), or call \`read_docs\`. Declarations summarize the code, so check when it matters.
- In scope by name, as \`FMG.*\` in the console: \`pack\` (map data), \`grid\` (pre-repack grid), \`options\`
  (\`options.map\` holds the map's settings), \`styles\`, \`mapHistory\`, the app's helpers and singletons such as
  ${Xt}. \`read_docs(["Globals"])\` lists every member.
- \`downloadFile(content, "name.csv", "text/csv")\` saves a file for the user; name it in the answer.
- Do not call \`draw*\` functions: applying a proposal redraws the map.`,'# Units\n\nAnswer in the map\'s units only (e.g. "152K mi²"); never mention map units, coordinates, pixels or cells unless asked.\nName a place by its nearest burg or province. Scripts have `units`, the app\'s own formatters: `si(n)` → "1.4M";\n`rn(n, decimals = 0)`; `getArea(mapUnits²)` with `getAreaUnit()`; `getDistance(mapUnits)` → "92 mi" for every distance you state, e.g. of `Math.hypot(dx, dy)`;\n`getHeight(h)` → "1640ft"; `convertTemperature(°C)`; `getPrecipitation(prec)`; `formatSpeed(km/h)`; `formatPrice(n)` for money.\nExample: `units.si(units.getArea(state.area)) + " " + units.getAreaUnit()`.',`# Gotchas

- Index 0 is reserved in states (neutrals), cultures (wildlands), religions (none) and provinces; in burgs and
  features element 0 is the number \`0\`. Cell 0 is real. Deleted entities keep their slot with \`removed: true\`:
  filter with \`x => x.i && !x.removed\`.
- Ids are not always array indices: goods and markets start at 1 (\`pack.goods[0]\` is good 1); rivers, markers,
  routes, zones, journeys and often deals are unordered. Look up with \`.find(x => x.i === id)\` or \`Goods.get(id)\`,
  \`Markets.get(id)\`; never \`pack.goods[id]\`. Burg \`production\` records hold \`good\`/\`dealId\` ids: resolve each.
- A cell's owner is \`cells.state[i]\` (0 = neutral); \`cells.s\` is a burg-site score. \`burgs\` and \`cells\` of states,
  provinces, cultures and religions are counts: a state's cells are
  \`pack.cells.i.filter(i => pack.cells.state[i] === id)\`, its burgs those with \`burg.state === id\`. \`center\` is a
  cell id; capitals are \`state.capital\`, \`province.burg\`.
- Cell arrays are typed: \`filter\` and \`map\` on them stay typed and wrap negatives (-1 → 4294967295). Use
  \`Array.from(cells)\` before mapping to other values.
- \`state.diplomacy[j]\`: relation to state j (${Object.keys(ve).join(`, `)}); \`Enemy\` is war,
  \`Vassal\` of j, \`Suzerain\` over j.
- States have no religion: read their cells' \`cells.religion\`. Bordering states are \`state.neighbors\`; diplomacy says
  nothing of borders.
- \`burg.type\` is the culture type (Generic, River, Naval…), never rank: capital is \`burg.capital\` (1/0),
  size class is \`burg.group\`.
- Land is \`pack.cells.h[i] >= 20\` (heights 0–100). Water body: \`pack.features[pack.cells.f[i]]\`, type ocean/lake/island.
  Shore: \`cells.t[i]\` is 1 on coastal land, -1 on coastal water; \`cells.haven[i]\` is a coastal cell's water neighbor.
  Climate is on the grid: \`grid.cells.temp[pack.cells.g[i]]\` (°C), \`grid.cells.prec[…]\`.
- Population fields are points, not people: \`burg.population\`, \`cells.pop\`, \`rural\`/\`urban\`. Never show, compare or
  chart points: convert with \`units.getPeople(rural, urban)\`, e.g. \`units.getPeople(0, burg.population)\`, then \`si\`.
  Only states keep \`rural\`/\`urban\`/\`area\` current. For provinces, cultures and religions sum their cells'
  points (\`cells.pop[i]\` rural, burg \`cells.burg[i]\` urban) and \`pack.cells.area[i]\`.
- Areas (\`state.area\`, \`pack.cells.area[i]\`) are map units². Coordinates (\`cells.p[i]\` is [x, y]) are map units within
  \`options.map.graph.width\` × \`height\`; \`Pack.findCell(x, y)\` gives the cell. \`cells.b\` is 0/1, not boolean.`,`# Answers

Images the user attached are not the map: describe them, never read the map to guess them.
State only facts a result or image in this question gave (numbers, ranks, comparisons, terrain); compute
every comparison or count you state ("twice as large", "four remain"). Name
only UI that read_help or read_docs returned, or say it is not covered. Never repeat a proposal's content: its card
shows it.

Answer with a widget whenever one fits, with prose around it. A widget replaces the text it shows: never repeat its
content, add only what it does not say. Pick by the question, and combine widgets when several fit:

- one state is the subject (tell me about, describe, who rules) → \`show_card\`;
- 3 or more entities in the answer (which, list, find) → \`show_entities\` instead of a list;
- one number compared or ranked across items → \`show_chart\` bar; parts of one whole → pie. A table only when several
  columns matter;
- where something is, what a place or region is like → \`show_inset\`;
- ideas for the user to pick (names, options) → \`show_choices\`, a rename operation per name idea; then stop;
- an emblem, coat of arms or heraldry → \`view_emblem\` before describing it;
- how the map or a place looks (style, shapes) → \`view_map\` first;
- a \`read_help\` answer → \`show_source\`.

Otherwise prose, rendered as Markdown: a list for several findings, \`code\` for fields, bold for a headline number.
A one-line answer needs no formatting. No raw JSON unless asked.

Link every map entity you name by its key, \`[Vel](burg:12)\`: the user clicks to see it on the map. Key types: ${en}
(\`i\` for most; the array index for cells, relief and measurers). Use only ids you
have read (return them from read_map), else leave the name unlinked. Link the editor
or dialog that answers a how-to, \`[Heightmap editor](command:editHeightmapButton)\`; ids come from
\`read_docs(["Commands"])\`, never guess one.`,`# Changing the map

\`propose_change({ summary, operations: [{ op, args }] })\` proposes ONE batch; the user previews before → after and
applies or discards it. \`args\` go in order, e.g. \`{ op: "Burgs.rename", args: [12, "Saltmere"] }\`. \`{ result: n }\`
stands for what operation n (from 0) of the batch returned, such as a new id: \`[{ op: "States.add", args: [410, 220] },
{ op: "States.rename", args: [{ result: 0 }, "Varn"] }]\`; \`{ result: n, type: "burg" }\` stands for its key, "burg:12",
for \`Notes\` and \`Emblems\`. Put everything asked into one proposal; \`summary\` is a short card title. On a validation
error nothing is proposed: fix and retry.
Success means the proposal is WAITING: say what you proposed, never that the map changed. Operations keep dependent
data (labels, full names, codes, cell ownership) in sync. "Proposals in this chat" in the map context shows what the
user did. If no operation can make a change, say so. Operations by model; ids are \`i\`, points are map units. Read
\`read_docs(["Operations: States, Markers"])\` (the models you need) for signatures and allowed values before using one
new to this chat, and \`read_docs(["Emblems"])\` for the heraldry \`Emblems.set\` accepts:

${tn}

The map's look is \`styles\`, a record by layer (\`attrs\` SVG attributes, \`options\` renderer inputs, \`groups\` nested
nodes): \`Styles.setValue("ocean.groups.base.attrs.fill", "#0d2240")\`, one op per value; a whole new look starts with
\`StylePresets.apply(name)\` of the closest preset. Read \`read_docs(["Styles"])\` for presets and choices, then
\`["Styles: ocean, labels"]\` for paths and values; never fetch source files. Heightmap, relief icons and ice have no operations: link their editor and stop.

A marker's story is its note: place every marker with a name, a fitting note and an emoji icon,
\`Markers.place(x, y, type, { name, note, icon })\`; prefer a configured type, \`Markers.configuration.map(c => c.type)\`.
Notes are HTML in an entity's \`note\` field (\`pack.burgs[12].note\`); there is no notes array. Keys are \`type:id\`
(\`burg:12\`, \`marker:0\`, \`route:0\`; regiments \`regiment:stateId-regimentId\`) of an existing entity, whose name is
the note's title; cells, ice, relief, measurers, deals, transports and name bases have no notes. \`Notes.write\` replaces the WHOLE note. Allowed: p, br, strong, em, u, s, a, img, ul/ol/li,
blockquote, h1–h6, sub, sup, span, div, simple tables, inline code, hr and inline styles; no classes, handlers,
scripts, iframes, javascript: URLs or Markdown. Keep the user's text unless asked; say in one line what changed.`,'# Asking first\n\nBefore creating something or a sweeping change, know what the user wants. When an essential detail is missing or\nambiguous (where, which entity, how much land), ask one short question and stop, offering likely answers with\n`show_choices` (a choice without operations becomes the reply). Never ask about what can be generated (names, colors,\nemblems, forms): propose it, then offer tweaks. Resolve places ("north of Vel", "on the coast") to points with\n`read_map`, e.g. a free land cell\'s `pack.cells.p[i]`. New states, provinces, cultures and religions start small (a\nstate owns only its capital cell): to grow them, add `Provinces.setState` for chosen provinces, or `recalculate()`,\nwhich redraws every border of that kind; ask which when the user did not say.',`# Data fields

Field names by data-model section. For meanings and types, pass section names to \`read_docs\`, as well as
Configuration, Globals, Registries or PackedGraph.

${Zt}`].join(`

`),cache_control:{type:`ephemeral`}}],rn=null,an=async()=>{let[{charges:e},{divisions:t},{lineWeights:r},{ordinaries:i},{shields:a},{tinctures:o}]=await Promise.all([n(()=>import(`./charges-XaoNl-VI.js`).then(e=>e.n),__vite__mapDeps([13,1])),n(()=>import(`./divisions-yddbEqou.js`).then(e=>e.n),__vite__mapDeps([15,1,14])),n(()=>import(`./line-weights-DMXPYRDE.js`).then(e=>e.n),__vite__mapDeps([14,1])),n(()=>import(`./ordinaries-DXI0TOB4.js`).then(e=>e.n),__vite__mapDeps([16,1])),n(()=>import(`./shields-QQIBRbRT.js`).then(e=>e.n),__vite__mapDeps([17,1])),n(()=>import(`./tinctures-CsgIeV6I.js`).then(e=>e.n),__vite__mapDeps([18,1]))]);return{charges:e,divisions:t,lineWeights:r,ordinaries:i,shields:a,tinctures:o}};async function on(){let[e,t,r,i]=await Promise.all([n(()=>import(`./data-model-BU4ftqdG.js`),[]),n(()=>import(`./configuration-BtAjepSE.js`),[]),n(()=>import(`./packed-graph-DJUG9s0n.js`),[]),an()]),a=new Map;for(let t of e.default.split(/(?=^#{1,2} )/m)){let e=t.match(/^## (.+)$/m)?.[1];e&&a.set(e,t.trim())}a.set(`Configuration`,t.default),a.set(`Globals`,`\`\`\`ts\n${Yt}\n\`\`\``),a.set(`Registries`,"Callable as `await Controllers.X.open()` / `await Services.X.method()`:\n\n"),a.set(`PackedGraph`,`\`\`\`ts\n${r.default}\n\`\`\``),a.set(`Operations`,`Operations for \`propose_change\`, with argument types:\n\`\`\`ts\n${Qt}\n\`\`\`\n\nThe types they name:\n\`\`\`ts\n${$t}\n\`\`\``),a.set(`Emblems`,dn(i));let o=qe.mapCommands.filter(qe.isLinkable).map(({id:e,name:t})=>`${e}: ${t}`);return a.set(`Commands`,`Command ids for \`[label](command:id)\` links, as \`id: name\`:\n${o.join(`
`)}`),new Map([...a].map(([e,t])=>[e.toLowerCase(),{title:e,text:t}]))}var sn=[...$t.matchAll(/^(?:type|interface|const) (\w+)/gm)].map(e=>e[1]);function cn(e){let t=e.match(/^operations\s*:(.+)$/i)?.[1].split(/[\s,]+/).filter(Boolean);if(!t?.length)return;let n=t.map(e=>`${e.toLowerCase()}.`),r=Qt.split(`
`).filter(e=>n.some(t=>e.toLowerCase().startsWith(t)));if(!r.length)return;let i=r.join(`
`);return{title:e,text:`Operations for \`propose_change\`:\n\`\`\`ts\n${i}\n\`\`\`${sn.some(e=>RegExp(`\\b${e}\\b`).test(i))?`\n\nThe types they name:\n\`\`\`ts\n${$t}\n\`\`\``:``}`}}async function ln(e){let t=e.match(/^styles\s*(?::(.*))?$/i);if(!t)return;let{styleFields:r,styleOverview:i}=await n(async()=>{let{styleFields:e,styleOverview:t}=await import(`./style-reference-C0FxfdFZ.js`);return{styleFields:e,styleOverview:t}},__vite__mapDeps([52,22,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,23,32,27,26,35,21,24,25,36,37,38,39,40,28,29,30,31,33,34,20,41,42,43,44,45,46,47,48,49,53,54,0])),a=t[1]?.split(/[\s,]+/).filter(Boolean);return{title:e,text:a?.length?r(a):i()}}async function un(e){rn??=await on();let t=await Promise.all(e.map(e=>ln(e.trim()))),n=e.map((e,n)=>t[n]??cn(e.trim())??rn.get(e.replace(/\(.*\)/,``).trim().toLowerCase())),r=n.flatMap(e=>e?.text??[]),i=e.filter((e,t)=>!n[t]);return i.length&&r.push(`Unknown topics: ${i.join(`, `)}. Available: ${[...rn.values()].map(e=>e.title).join(`, `)}, "Operations: <Model>, <Model>", Styles, "Styles: <element>, <element>"`),r.join(`

`)}function dn({charges:e,divisions:t,lineWeights:n,ordinaries:r,shields:i,tinctures:a}){let o=e=>Object.keys(e).join(`, `),s=e,c=Object.keys(e.types).filter(e=>s[e]);return["Heraldic emblems for `Emblems.set`, in the generator's vocabulary (the `Emblem` type is in the Operations topic).",`Tinctures. Metals: ${o(a.metals)}. Colours: ${o(a.colours)}. Stains: ${o(a.stains)}.`,`Patterns fill a tincture slot as "pattern-tincture-tincture", such as "vair-argent-azure": ${o(a.patterns)}; "semy_of_<charge>-or-gules" strews a charge.`,`Divisions (\`division.division\`): ${o(t.variants)}.`,`Ordinaries that take a \`line\`: ${o(r.lined)}. Straight ordinaries: ${o(r.straight)}.`,`Lines: ${o(n)}.`,`Shields (\`shield\`): ${Object.keys(i.types).flatMap(e=>Object.keys(i[e]??{})).join(`, `)}.`,"Charge positions (`p`, one letter per copy): a b c / d e f / g h i are the 3×3 grid from the top left; e is the center; j k l / m n o a tighter grid above and below it; p q left and right of the center; y the top left corner, z the base; A–L around the border.",`Charges by category:`,...c.map(e=>`- ${e}: ${o(s[e])}`)].join(`
`)}var fn=3,pn=2500,mn=new Set([`_Footer`,`Home`,`Changelog`,`Dependencies`]),hn=new Set(`the and for how can what why does with from that this are not you your into there their have has get make map use way any all its was will where when which who also than then them they just only some more like want do my me is it to of in on an or be`.split(` `)),gn=null,_n=Object.assign({"../../../../docs/wiki/Advanced-options.md":()=>n(()=>import(`./Advanced-options-CUTInXyC.js`).then(e=>e.default),[]),"../../../../docs/wiki/Assistant.md":()=>n(()=>import(`./Assistant-j3pecW0_.js`).then(e=>e.default),[]),"../../../../docs/wiki/Battle-Simulator.md":()=>n(()=>import(`./Battle-Simulator-EvJFGvEI.js`).then(e=>e.default),[]),"../../../../docs/wiki/Changelog.md":()=>n(()=>import(`./Changelog-D7ERvHvh.js`).then(e=>e.default),[]),"../../../../docs/wiki/Coastline-Editor.md":()=>n(()=>import(`./Coastline-Editor-Bm7KFlWw.js`).then(e=>e.default),[]),"../../../../docs/wiki/Culture-sets.md":()=>n(()=>import(`./Culture-sets-BkWbFNHf.js`).then(e=>e.default),[]),"../../../../docs/wiki/Culture-types.md":()=>n(()=>import(`./Culture-types-DX_IO-Hj.js`).then(e=>e.default),[]),"../../../../docs/wiki/Data-import.md":()=>n(()=>import(`./Data-import-Cgd_JOZG.js`).then(e=>e.default),[]),"../../../../docs/wiki/Dependencies.md":()=>n(()=>import(`./Dependencies-CNvYzxcl.js`).then(e=>e.default),[]),"../../../../docs/wiki/Emblems.md":()=>n(()=>import(`./Emblems-DAd_L6DZ.js`).then(e=>e.default),[]),"../../../../docs/wiki/GIS-data-export.md":()=>n(()=>import(`./GIS-data-export-Bm5b3jxy.js`).then(e=>e.default),[]),"../../../../docs/wiki/Geographical-Features-Overview.md":()=>n(()=>import(`./Geographical-Features-Overview-B-dotX0_.js`).then(e=>e.default),[]),"../../../../docs/wiki/Goods-spread-functions.md":()=>n(()=>import(`./Goods-spread-functions--Kgi-eUT.js`).then(e=>e.default),[]),"../../../../docs/wiki/Heightmap-customization.md":()=>n(()=>import(`./Heightmap-customization-Bwv0gqk7.js`).then(e=>e.default),[]),"../../../../docs/wiki/Heightmap-image-overlay.md":()=>n(()=>import(`./Heightmap-image-overlay-DrFCjdsw.js`).then(e=>e.default),[]),"../../../../docs/wiki/Heightmap-template-editor.md":()=>n(()=>import(`./Heightmap-template-editor-Dy3ZRcdZ.js`).then(e=>e.default),[]),"../../../../docs/wiki/Home.md":()=>n(()=>import(`./Home-CzTFJhK0.js`).then(e=>e.default),[]),"../../../../docs/wiki/Hotkeys.md":()=>n(()=>import(`./Hotkeys-FK852lXt.js`).then(e=>e.default),[]),"../../../../docs/wiki/Icons.md":()=>n(()=>import(`./Icons-BkM6eRZn.js`).then(e=>e.default),[]),"../../../../docs/wiki/Install-with-Nix.md":()=>n(()=>import(`./Install-with-Nix-DyyKMmMl.js`).then(e=>e.default),[]),"../../../../docs/wiki/Journeys.md":()=>n(()=>import(`./Journeys-CYRbQVdj.js`).then(e=>e.default),[]),"../../../../docs/wiki/Knowledge Base.md":()=>n(()=>import(`./Knowledge Base-2iwhsWJC.js`).then(e=>e.default),[]),"../../../../docs/wiki/Map-embellishments.md":()=>n(()=>import(`./Map-embellishments-Ds6n3Van.js`).then(e=>e.default),[]),"../../../../docs/wiki/Markers.md":()=>n(()=>import(`./Markers-BViFNwgf.js`).then(e=>e.default),[]),"../../../../docs/wiki/Military-Forces.md":()=>n(()=>import(`./Military-Forces-tf4bnRnO.js`).then(e=>e.default),[]),"../../../../docs/wiki/Ollama-text-generation.md":()=>n(()=>import(`./Ollama-text-generation-DP-WeU7w.js`).then(e=>e.default),[]),"../../../../docs/wiki/Omnibar.md":()=>n(()=>import(`./Omnibar-xZanHWOb.js`).then(e=>e.default),[]),"../../../../docs/wiki/Performance-settings.md":()=>n(()=>import(`./Performance-settings-DguNxvMG.js`).then(e=>e.default),[]),"../../../../docs/wiki/Policy.md":()=>n(()=>import(`./Policy-DkWTYuVJ.js`).then(e=>e.default),[]),"../../../../docs/wiki/Q&A.md":()=>n(()=>import(`./Q_A-mpTX1OBh.js`).then(e=>e.default),[]),"../../../../docs/wiki/Quick-Start-Tutorial.md":()=>n(()=>import(`./Quick-Start-Tutorial-BnrS-tB1.js`).then(e=>e.default),[]),"../../../../docs/wiki/Reporting-bugs-and-ideas.md":()=>n(()=>import(`./Reporting-bugs-and-ideas-CJDEmQvV.js`).then(e=>e.default),[]),"../../../../docs/wiki/River-Editor.md":()=>n(()=>import(`./River-Editor-BvGwqtYw.js`).then(e=>e.default),[]),"../../../../docs/wiki/Run-FMG-locally.md":()=>n(()=>import(`./Run-FMG-locally-DCjn9mNi.js`).then(e=>e.default),[]),"../../../../docs/wiki/Scale-and-distance.md":()=>n(()=>import(`./Scale-and-distance-CMJ7Vnse.js`).then(e=>e.default),[]),"../../../../docs/wiki/URL-parameters.md":()=>n(()=>import(`./URL-parameters-Bbj7Po6E.js`).then(e=>e.default),[]),"../../../../docs/wiki/User-Interface.md":()=>n(()=>import(`./User-Interface-DgM9yhfZ.js`).then(e=>e.default),[]),"../../../../docs/wiki/Working-offline.md":()=>n(()=>import(`./Working-offline-BjcPaP9y.js`).then(e=>e.default),[]),"../../../../docs/wiki/Wrap-Tool.md":()=>n(()=>import(`./Wrap-Tool-CvixOv1C.js`).then(e=>e.default),[]),"../../../../docs/wiki/_Footer.md":()=>n(()=>import(`./_Footer-CoCNk46l.js`).then(e=>e.default),[])}),vn=e=>e.match(/([^/]+)\.md$/)[1],yn=Object.keys(_n).map(vn).filter(e=>!mn.has(e)),bn=e=>(e.toLowerCase().match(/[a-z0-9]+/g)??[]).filter(e=>e.length>1&&!hn.has(e)).map(e=>e.length>3?e.replace(/(?:es|s)$/,``):e);async function xn(){return(await Promise.all(Object.entries(_n).map(async([e,t])=>[vn(e),await t()]))).flatMap(([e,t])=>mn.has(e)?[]:Sn(e,t))}function Sn(e,t){let n=e.replace(/-/g,` `),r=e===`Knowledge Base`;return t.split(/(?=^#{2,3} )/m).flatMap(e=>{let t=e.match(/^#{2,3} (.+)$/m)?.[1];if(r&&!t)return[];let i=r?t:t?`${n} › ${t}`:n,a=t?e.replace(/^#{2,3} .+$/m,``).trim():e.trim();return a?[{heading:i,text:`### ${i}\n\n${a}`,headingTerms:new Set(bn(i)),bodyTerms:new Set(bn(a))}]:[]})}var Cn=e=>e.length<=pn?e:`${e.slice(0,pn)}\n… (cut: pass the heading as the query to read it all)`;async function wn(e){gn??=await xn();let t=gn.find(t=>t.heading===e.trim());if(t)return t.text;let n=[...new Set(bn(e))],r=gn.map(e=>({section:e,score:n.reduce((t,n)=>t+(e.headingTerms.has(n)?3:0)+ +!!e.bodyTerms.has(n),0)})).filter(({score:e})=>e>0).sort((e,t)=>t.score-e.score);if(!r.length)return`No help sections match "${e}". Try other words.`;let i=r.slice(0,fn).map(({section:e})=>Cn(e.text)),a=r.slice(fn,9).map(({section:e})=>`- ${e.heading}`);return a.length&&i.push(`Other matches (pass a heading as the query to read it):\n${a.join(`
`)}`),i.join(`

`)}var Tn=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`):[],En=[{status:`Reading help`,definition:{name:`read_help`,description:`Search the Knowledge Base for how to use the generator. Returns the best-matching sections and other matching headings; pass a heading to read that section.`,input_schema:{type:`object`,properties:{query:{type:`string`}},required:[`query`]}},handle:async e=>({content:await wn(String(e.query??``))})},{status:`Reading docs`,definition:{name:`read_docs`,description:`Read reference docs by topic: data-model sections, Configuration, Globals, Registries, PackedGraph, Operations, Commands, Styles (elements and choices), "Styles: ocean, labels" (their paths and values).`,input_schema:{type:`object`,properties:{topics:{type:`array`,items:{type:`string`}}},required:[`topics`]}},handle:async e=>({content:await un(Tn(e.topics))})}],Dn=30,On=32e3,kn=`[Earlier tool result shortened]`,An=1e3,jn=`[The image is not available: this model cannot see images]`,Mn=`[The user attached an image, but this model cannot see images. Tell the user; never guess it from the map]`,Nn=`The user attached these images to the question:`,Pn=`This model cannot see images, so it answered without yours. Connect a model with vision to ask about images.`,Fn=/image|vision|multimodal/i,In=/^(read|view)_/,Ln=`Your reply was cut off at the output limit. Think briefly and keep calls small: split a large batch into several propose_change calls.`,Rn=/\bI(?:'ve| have)? (?:proposed|prepared|submitted)\b|\b(?:proposal|batch|card)\b[^.\n]{0,40}\b(?:is waiting|waiting for|pending|above)\b/i,zn=/\bproposed nothing\b|\bnothing (?:to propose|proposed)\b/i,Bn=`Your answer says something was proposed, but no propose_change call succeeded in this question, so the user sees no card. Call propose_change now, or say plainly that nothing was proposed.`;async function Vn(e,t,n,r,{tools:a,context:o,onStatus:s,images:c=[]}){let l=[...En,...a],u=l.map(e=>e.definition),d=new Map(l.map(e=>[e.definition.name,e]));n(c.length?{kind:`question`,text:t,images:c}:{kind:`question`,text:t});let f=e.messages.length,p=f,ee=``,m=``,h=``,te=!1,ne=!1;try{for(let t of Hn(e.messages.slice(0,f)))t.content=kn;for(let a=0;a<Dn;a++){r.throwIfAborted(),s?.(a?`Thinking · step ${a+1}`:`Thinking`);let l=await o();r.throwIfAborted(),a?l!==ee&&e.messages.at(-1).content.push({type:`text`,text:l}):e.messages.push({role:`user`,content:[{type:`text`,text:l},...c.length?[{type:`text`,text:Nn},...c.map(Ze)]:[],...t?[{type:`text`,text:t}]:[]]}),ee=l,Wn(e.messages.slice(f));let re={...S(),system:nn,messages:e.messages,tools:u,signal:r},g=await ot(re).catch(t=>{let a=!r.aborted&&Fn.test(i(t))&&Gn(e.messages);if(!a)throw t;return a===`attached`&&n({kind:`notice`,text:Pn}),ot(re)});if(r.aborted)throw r.reason;e.usage.input+=g.usage.input,e.usage.output+=g.usage.output,e.usage.cached+=g.usage.cached,g.content.length&&e.messages.push({role:`assistant`,content:g.content});let _=g.content.filter(e=>e.type===`text`).map(e=>e.text).join(`

`).trim(),ie=g.content.filter(e=>e.type===`tool_use`);if(!ie.length&&g.truncated){e.messages.push({role:`user`,content:[{type:`text`,text:Ln}]});continue}if(!ie.length){if(h+=_,(_||m)&&n({kind:`answer`,text:_||m}),!ne&&d.has(`propose_change`)&&!te&&Rn.test(h)&&!zn.test(h)){ne=!0,m=``,e.messages.push({role:`user`,content:[{type:`text`,text:Bn}]});continue}!_&&!m&&n({kind:`notice`,text:`The model ended without an answer. Ask again.`});return}let ae=[],oe=[];for(let e of ie){let t=d.get(e.name);r.aborted||s?.(t?.status??`Working`);let n=r.aborted?{content:`Cancelled before this tool ran.`,isError:!0}:`invalidArguments`in e.input?{content:String(e.input[tt]),isError:!0}:t?await t.handle(e.input).catch(e=>({content:i(e),isError:!0})):{content:`Unknown tool ${e.name}. Available: ${[...d.keys()].join(`, `)}`,isError:!0};n.item&&oe.push(n.item),ae.push({type:`tool_result`,tool_use_id:e.id,content:n.content,is_error:n.isError??!1})}_&&(ie.every(e=>In.test(e.name))||ae.some(e=>e.is_error))?m=_:_&&(h+=_,n({kind:`answer`,text:_}),m=``),oe.some(e=>e.kind===`proposal`)&&(te=!0);for(let e of oe)n(e);e.messages.push({role:`user`,content:ae}),p=e.messages.length,r.throwIfAborted()}n({kind:`notice`,text:`Stopped after ${Dn} steps. Ask again to continue.`})}catch(t){throw e.messages.splice(p),t}}var Hn=e=>e.flatMap(e=>e.content.filter(e=>e.type===`tool_result`)),Un=({content:e})=>typeof e==`string`?e.length:e.reduce((e,t)=>e+(t.type===`text`?t.text.length:An),0);function Wn(e){let t=Hn(e),n=Hn(e.slice(-1)).length,r=t.reduce((e,t)=>e+Un(t),0);for(let e of t.slice(0,t.length-n)){if(r<=On)return;r-=Un(e)-31,e.content=kn}}function Gn(e){let t=!1;for(let n of e)n.content=n.content.map(e=>e.type===`image`?(t=`attached`,{type:`text`,text:Mn}):e);for(let n of Hn(e))typeof n.content!=`string`&&(n.content=n.content.map(e=>e.type===`image`?(t||=`tool`,{type:`text`,text:jn}):e));return t}var Kn=/^ {0,3}```(\S*)\s*$/,qn=/^ {0,3}(#{1,6})\s+(.*)$/,Jn=/^ {0,3}([-*_])(?:\s*\1){2,}\s*$/,Yn=/^ {0,3}>\s?(.*)$/,Xn=/^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/,Zn=/^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/,Qn=`\0`,$n=RegExp(`${Qn}(\\d+)${Qn}`,`g`);function er(e,t){let n=e.replace(/\r\n?/g,`
`).split(`
`),r=[],i=0;for(;i<n.length;){let e=n[i];if(!e.trim()){i++;continue}if(Kn.test(e)){let e=[];for(i++;i<n.length&&!Kn.test(n[i]);)e.push(n[i++]);i++,r.push(`<pre><code>${or(e.join(`
`))}</code></pre>`);continue}let a=e.match(qn);if(a){let e=Math.min(a[1].length+2,6);r.push(`<h${e}>${ar(a[2],t)}</h${e}>`),i++;continue}if(Jn.test(e)){r.push(`<hr />`),i++;continue}if(Yn.test(e)){let e=[];for(;i<n.length&&Yn.test(n[i]);)e.push(n[i++].match(Yn)?.[1]??``);r.push(`<blockquote>${er(e.join(`
`),t)}</blockquote>`);continue}if(Xn.test(e)){let e=[];for(;i<n.length;){let t=n[i].match(Xn);if(!t)break;e.push({indent:t[1].length,ordered:/\d/.test(t[2]),text:t[3]}),i++}r.push(nr(e,0,t).html);continue}if(e.includes(`|`)&&i+1<n.length&&Zn.test(n[i+1])){i=rr(n,i,r,t);continue}let o=[];for(;i<n.length&&n[i].trim()&&!tr(n[i]);)o.push(n[i++]);r.push(`<p>${o.map(e=>ar(e,t)).join(`<br />`)}</p>`)}return r.join(``)}function tr(e){return Kn.test(e)||qn.test(e)||Jn.test(e)||Yn.test(e)||Xn.test(e)}function nr(e,t,n){let{indent:r,ordered:i}=e[t],a=[],o=t;for(;o<e.length&&e[o].indent>=r;)if(e[o].indent>r&&a.length){let t=nr(e,o,n);a[a.length-1]+=t.html,o=t.next}else a.push(ar(e[o].text,n)),o++;let s=i?`ol`:`ul`;return{html:`<${s}>${a.map(e=>`<li>${e}</li>`).join(``)}</${s}>`,next:o}}function rr(e,t,n,r){let i=ir(e[t]),a=ir(e[t+1]).map(e=>e.startsWith(`:`)&&e.endsWith(`:`)?` style="text-align: center"`:e.endsWith(`:`)?` style="text-align: right"`:``),o=(e,t,n)=>`<${n}${a[t]??``}>${ar(e,r)}</${n}>`,s=[],c=t+2;for(;c<e.length&&e[c].includes(`|`);){let t=ir(e[c]);s.push(`<tr>${t.map((e,t)=>o(e,t,`td`)).join(``)}</tr>`),c++}let l=i.map((e,t)=>o(e,t,`th`)).join(``);return n.push(`<table><thead><tr>${l}</tr></thead><tbody>${s.join(``)}</tbody></table>`),c}var ir=e=>e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim());function ar(e,t){let n=[];return or(e.replace(/`([^`]+)`/g,(e,t)=>(n.push(`<code>${or(t)}</code>`),`${Qn}${n.length-1}${Qn}`))).replace(/\[([^\]\n]+)\]\(([^)\s]+)\)/g,(e,n,r)=>/^https?:\/\//i.test(r)?`<a href="${r}" target="_blank" rel="noopener noreferrer">${n}</a>`:t?.(n,r)??e).replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g,`<strong>$2</strong>`).replace(/\*(?=\S)([^*\n]*\S)\*/g,`<em>$1</em>`).replace(/~~(?=\S)([\s\S]*?\S)~~/g,`<del>$1</del>`).replace($n,(e,t)=>n[Number(t)])}var or=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),sr=1568,cr=2e7;async function lr(e){if(e.size>cr)throw Error(a(`The image is over {{size}}`,{size:`20 MB`}));let t=await createImageBitmap(e).catch(()=>{throw Error(a(`The pasted file cannot be read as an image`))}),n=Math.min(1,sr/Math.max(t.width,t.height)),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n));let i=r.getContext(`2d`);return i.fillStyle=`#fff`,i.fillRect(0,0,r.width,r.height),i.drawImage(t,0,0,r.width,r.height),t.close(),r.toDataURL(`image/jpeg`,.85)}var ur={read:lr},dr={anthropic:{include:/^claude/},gemini:{include:/^gemini-/,exclude:/embed|image|audio|tts|live|robotics|computer-use/},openai:{include:/^(gpt|o\d)/,exclude:/audio|realtime|image|tts|embed|whisper|moderation|transcribe|dall|gpt-6-astra/},mistral:{exclude:/embed|moderation|ocr|voxtral|transcribe/},qwen:{include:/^qwen/,exclude:/embed|ocr|audio|tts|asr|image|video|omni|vl|mt/},deepseek:{include:/^deepseek/}};function fr(e,t){let n=dr[e];return n?t.filter(e=>(!n.include||n.include.test(e))&&!n.exclude?.test(e)):t}async function pr(e,t,n=``,r){return fr(e,await mr(e,t,n,r))}async function mr(e,t,n,r){if(e===`qwen`)return hr(t,r);let i=await fetch(gr(e,n),{headers:_r(e,t),signal:r});if(!i.ok)throw Error(await et(i));return((await i.json()).data??[]).map(e=>e.id)}async function hr(e,t){let n=[];for(let r=1;;r++){let i=`https://dashscope-intl.aliyuncs.com/api/v1/models?providers=qwen&features=function-calling&page_no=${r}&page_size=100`,a=await fetch(i,{headers:_r(`qwen`,e),signal:t});if(!a.ok)throw Error(await et(a));let o=await a.json(),s=o.output?.models??[];if(n.push(...s.map(e=>e.model)),!s.length||n.length>=(o.output?.total??n.length))return n}}function gr(e,t){return e===`anthropic`?`https://api.anthropic.com/v1/models?limit=1000`:`${Xe(e,t)}/models`}var _r=(e,t)=>e===`anthropic`?Ye(t):$e(t),vr=new class{timer=null;discovery=null;wire(){y(`assistantProvider`).addEventListener(`change`,()=>this.fillProvider()),y(`assistantApiKey`).addEventListener(`input`,()=>this.scheduleDiscovery()),y(`assistantLocalUrl`).addEventListener(`input`,()=>this.scheduleDiscovery())}fill(){let e=S();y(`assistantProvider`).value=e.provider,this.input(`assistantLocalUrl`).value=e.localUrl,y(`assistantDisconnect`).hidden=!rt(),this.fillProvider()}cancelDiscovery(){this.discovery?.abort(),this.discovery=null,this.timer&&clearTimeout(this.timer),this.timer=null}save(){let e=this.provider.id,t=e===`local`,n=this.input(`assistantModel`).value.trim(),r=this.input(`assistantApiKey`).value.trim();return!n||!t&&!r?(y(`assistantDiscoveryError`).textContent=a(t?`Enter a model name.`:`Enter a model and API key.`),!1):(Qe({provider:e,model:n,key:t?``:r,localUrl:this.input(`assistantLocalUrl`).value.trim()||S().localUrl}),!0)}get provider(){return nt(y(`assistantProvider`).value)??Je}input(e){return y(e)}setModels(e){y(`assistantModels`).replaceChildren(...e.map(e=>new Option(e)))}fillProvider(){let e=this.provider,t=e.id===`local`,n=S(e.id);this.input(`assistantModel`).value=n.model,this.input(`assistantApiKey`).value=n.key,y(`assistantModelLabel`).textContent=t?`Model name`:`Model`,y(`assistantKeyLink`).href=e.keyLink;for(let e of y(`assistantKey`).querySelectorAll(`[data-remote]`))e.hidden=t;for(let e of y(`assistantKey`).querySelectorAll(`[data-local]`))e.hidden=!t;this.setModels(e.fallbackModel?[e.fallbackModel]:[]),this.discover()}scheduleDiscovery(){this.cancelDiscovery(),y(`assistantDiscoveryError`).textContent=``,this.setModels([]),this.timer=setTimeout(()=>void this.discover(),350)}async discover(){let e=this.provider,t=this.input(`assistantApiKey`).value.trim(),n=this.input(`assistantLocalUrl`).value.trim();this.discovery?.abort(),this.discovery=new AbortController;let{signal:r}=this.discovery,a=y(`assistantDiscoveryError`);if(a.textContent=``,e.id!==`local`&&!t)return this.setModels([]);try{let i=await pr(e.id,t,n,r);r.aborted||this.setModels(i)}catch(e){r.aborted||(a.textContent=i(e))}}},yr=8e3,E=200,br=50,xr=500,Sr=4,Cr=()=>{let e=globalThis.FMG??{},t=Object.keys(e);return[t,t.map(t=>e[t])]},wr=Object.getPrototypeOf(async()=>{}).constructor;async function Tr(e,t={}){let n=[],r=Pr(n),i=performance.now();try{let[r,a]=Cr();return{ok:!0,value:Nr(await new wr(...r,`describe`,...Object.keys(t),e)(...a,Or,...Object.values(t))),logs:n,ms:Er(i)}}catch(e){let t=e instanceof Error?e:Error(String(e)),r=(t.stack??``).split(`
`).slice(0,Sr).join(`
`);return{ok:!1,value:``,logs:n,error:{message:t.message,stack:r},ms:Er(i)}}finally{r()}}var Er=e=>Math.round(performance.now()-e),Dr=e=>ArrayBuffer.isView(e)?e:void 0;function Or(e){if(typeof e==`string`)try{let[t,n]=Cr();return{path:e,...Ar(Function(...t,`return (${e})`)(...n)),...kr(/^styles\b/.test(e))}}catch{}return{...Ar(e),...kr(e===globalThis.styles)}}var kr=e=>e?{hint:`read_docs(["Styles"]) lists the elements and choices, ["Styles: ocean"] every path and value`}:{};function Ar(e){if(e===null)return{type:`null`};if(e===void 0)return{type:`undefined`};let t=Dr(e);if(t)return{type:t.constructor.name,length:t.length,sample:Array.from(t.slice(0,5))};if(Array.isArray(e))return{type:`Array`,length:e.length,sample:e.slice(0,3).map(Mr)};if(typeof e==`function`)return{type:`function`,name:e.name||`anonymous`,arity:e.length};if(typeof e==`object`){let t=e,n={};for(let e of Object.keys(t))n[e]=Mr(t[e]);let r={type:t.constructor?.name??`object`,keys:n},i=jr(t);return i.length&&(r.methods=i),r}return{type:typeof e,value:e}}function jr(e){let t=Object.getPrototypeOf(e);return!t||t===Object.prototype?[]:Object.getOwnPropertyNames(t).filter(e=>e!==`constructor`)}function Mr(e){if(e===null)return`null`;let t=Dr(e);if(t)return`${t.constructor.name}(${t.length})`;if(Array.isArray(e))return`Array(${e.length})`;if(typeof e==`string`)return`string(${e.length})`;if(typeof e==`object`){let t=Object.keys(e);return`object{${t.slice(0,5).join(`, `)}${t.length>5?`, …`:``}}`}return typeof e}function Nr(e,t=yr){if(e===void 0)return`undefined`;let n=new WeakSet,r=(e,t)=>{if(typeof t==`function`)return`[Function ${t.name||`anonymous`}]`;if(typeof t==`bigint`)return String(t);let r=Dr(t);if(r){let e=Array.from(r.slice(0,10)).join(`, `);return`[${r.constructor.name}(${r.length}) ${e}${r.length>10?`, …`:``}]`}if(t instanceof Set)return{Set:[...t].slice(0,E)};if(t instanceof Map)return{Map:[...t.entries()].slice(0,E)};if(t&&typeof t==`object`){if(typeof t.nodeType==`number`)return`[Node ${t.nodeName??`?`}]`;if(n.has(t))return`[Circular]`;if(n.add(t),Array.isArray(t)&&t.length>E)return[...t.slice(0,E),`… ${t.length-E} more items`]}return t},a;try{a=JSON.stringify(e,r,1)??String(e)}catch(e){a=`[unserializable: ${i(e)}]`}return a.length<=t?a:`${a.slice(0,t)}\n… truncated, ${a.length-t} more characters. Return less data.`}function Pr(e){let t=[`log`,`info`,`warn`,`error`],n=t.map(e=>console[e]);return t.forEach((t,r)=>{console[t]=(...i)=>{if(e.length<br){let n=i.map(e=>typeof e==`object`?Nr(e,xr):String(e)).join(` `);e.push(t===`log`?n:`[${t}] ${n}`)}n[r].apply(console,i)}}),()=>t.forEach((e,t)=>{console[e]=n[t]})}var Fr=[`states`,`borders`,`provinces`,`burgIcons`,`labels`,`military`,`emblems`],Ir=[`provinces`,`borders`,`labels`,`emblems`],D={burg:{label:a(`Burg`),layers:[`burgIcons`,`labels`],references:`burg`},state:{label:a(`State`),layers:Fr,references:`state`},province:{label:a(`Province`),layers:Ir,references:`province`},culture:{label:a(`Culture`),layers:[`cultures`],references:`culture`},religion:{label:a(`Religion`),layers:[`religions`],references:`religion`},biome:{label:a(`Biome`),layers:[`biomes`],references:`biome`},pop:{label:a(`Rural population`),layers:[`population`]},r:{label:a(`River`),layers:[`rivers`],references:`river`},fl:{label:a(`Water flux`),layers:[`rivers`]},conf:{label:a(`Confluence`),layers:[`rivers`]},routes:{label:a(`Route links`),layers:[`routes`]}},Lr=[`burgIcons`,`labels`,`emblems`,`population`],Rr={name:[`labels`],fullName:[`labels`],formName:[`labels`],form:[`labels`]},zr={burg:{"":[...Lr,`goods`],...Rr,group:[`burgIcons`,`labels`],capital:[`burgIcons`,`labels`],port:[`burgIcons`],x:Lr,y:Lr,population:[`population`],production:[`goods`]},state:{"":Fr,...Rr,color:[`states`,`military`],military:[`military`]},province:{"":Ir,...Rr,name:[`provinces`,`labels`],color:[`provinces`],center:[`emblems`]},culture:{"":[`cultures`],color:[`cultures`]},religion:{"":[`religions`],color:[`religions`]},biome:{"":[`biomes`],color:[`biomes`]},river:{"":[`rivers`,`labels`],name:[`labels`],type:[`labels`],sourceWidth:[`rivers`],widthFactor:[`rivers`]},route:{"*":[`routes`,`labels`]},feature:{group:[`lakes`],coastline:[`landmass`,`coastline`,`lakes`]},zone:{"*":[`zones`]},marker:{"*":[`markers`]},addedLabel:{"*":[`labels`]},journey:{"*":[`journeys`]},good:{icon:[`goods`],color:[`goods`]},market:{"*":[`markets`]}},Br={label:[`labels`],coa:[`emblems`],note:[],lock:[]};function Vr({key:e,field:t}){let n=e.split(`:`)[0];if(n===`cells`)return D[t]?.layers??[];let r=zr[n];if(!r)return[];let i=t.split(`.`)[0];return i===`removed`||!i?r[``]??r[`*`]??[]:r[i]??Br[i]??r[`*`]??[]}function Hr(e){return[...new Set(e.flatMap(Vr))]}var Ur=e=>typeof e==`object`&&!!e&&!ArrayBuffer.isView(e),O=(e,t)=>e===t||JSON.stringify(e)===JSON.stringify(t);function Wr(e,t){for(let n=e.length-t.length;n>=0;n--)if(t.every((t,r)=>O(e[n+r],t)))return n;return-1}var k=class e{rows;static CELLS=`cells`;static LORE=`lore`;static STYLE=`style`;addedOrRemoved;constructor(e){this.rows=e,this.addedOrRemoved=new Set(e.filter(e=>!e.field||e.field===`removed`).map(e=>e.key))}static record(t,n){return[...e.entityRows(t,n),...e.cellRows(t,n),...e.recordRows(e.LORE,t,n),...e.recordRows(e.STYLE,t,n)]}get keys(){return new Set(this.rows.map(e=>e.key))}get layers(){return Hr(this.rows)}get stylePaths(){return this.rows.filter(t=>t.key===e.STYLE).map(e=>e.field.split(`.`))}matches(e,t){let n=t===`before`?`after`:`before`,r=new Set(this.rows.filter(e=>!e.field&&e[n]===void 0).map(e=>e.key));return this.rows.every(n=>{if(!this.rowMatches(e,n,t))return!1;if(n.field||!r.has(n.key))return!0;let{list:i,indexed:a,i:o}=e.find(n.key),s=n.key.split(`:`)[0];return!a||i.every(e=>!C.isItem(e)||e.i<=o||r.has(`${s}:${e.i}`))})}keepsReferencesIntact(t,n){let r=this.addedOrRemoved.size?this.writtenDraft(t,n):t,i=[...this.keys].filter(t=>t!==e.CELLS&&!e.isRecord(t)).filter(e=>!r.exists(e));return!i.some(e=>!this.addedOrRemoved.has(e))&&this.pointsOnlyAtExisting(r,n)&&this.nothingPointsAt(r,new Set(i))}writeTo(e,t){let n=t===`after`?this.rows:[...this.rows].reverse();for(let r of n)this.writeRow(e,r,t)}static entityRows(t,n){let r=[],i=(e,t)=>new Map((e.items(t)??[]).filter(C.isItem).map(e=>[e.i,e]));for(let{type:a,field:o,indexed:s}of u.collections()){let[c,l]=[i(t,o),i(n,o)];for(let i of new Set([...c.keys(),...l.keys()])){let u=`${a}:${i}`,[d,f]=[c.get(i),l.get(i)];if(d&&f){for(let t of e.diff(d,f))r.push({key:u,...t});continue}let p={key:u,field:``,before:structuredClone(d),after:f};if(!s){let e=(d?t:n).items(o),r=e.slice(e.indexOf(d??f)+1).filter(C.isItem);p.nextId=(d?r[0]:r.find(e=>c.has(e.i)))?.i??null}r.push(p)}}return r}static cellRows(t,n){let r=[];for(let i of Object.keys(D)){let[a,o]=[t.cells(i),n.cells(i)??{}];if(!a)continue;let s={},c={},l=ArrayBuffer.isView(a)?Array.from(a,(e,t)=>t):[...new Set([...Object.keys(a),...Object.keys(o)])].map(Number);for(let e of l)O(a[e],o[e])||(s[e]=structuredClone(a[e]),c[e]=o[e]);Object.keys(c).length&&r.push({key:e.CELLS,field:i,before:s,after:c})}return r}static recordRows(t,n,r){let i=e.recordOf(n,t);return i?e.diff(i,e.recordOf(r,t)).map(e=>({key:t,...e})):[]}static isRecord(t){return t===e.LORE||t===e.STYLE}static recordOf(t,n){return n===e.LORE?t.lore:t.styles}static diff(t,n,r=[]){return Array.isArray(t)&&Array.isArray(n)&&n.length>t.length&&t.every((e,t)=>O(e,n[t]))?[{field:r.join(`.`),after:n.slice(t.length),append:!0}]:Ur(t)&&Ur(n)&&Array.isArray(t)===Array.isArray(n)&&(!Array.isArray(t)||t.length===n.length)?[...new Set([...Object.keys(t),...Object.keys(n)])].flatMap(i=>e.diff(t[i],n[i],[...r,i])):O(t,n)?[]:[{field:r.join(`.`),before:structuredClone(t),after:n}]}rowMatches(t,n,r){let i=n[r];if(n.key===e.CELLS){let e=t.cells(n.field);return!!e&&Object.entries(i).every(([t,n])=>O(e[+t],n))}let a=e.isRecord(n.key)?void 0:t.find(n.key),o=e.isRecord(n.key)?e.recordOf(t,n.key):a?.item;if(!n.field)return!!a&&O(o,i);if(!o)return!1;let s=n.field.split(`.`).reduce((e,t)=>Ur(e)?e[t]:void 0,o);return n.append?Array.isArray(s)&&(r===`before`||Wr(s,i)>=0):O(s,i)}writtenDraft(e,t){let n=e.draft();return this.writeTo(n,t),n}pointsOnlyAtExisting(t,n){let r=e=>t.exists(e);return this.rows.every(i=>{let a=i[n];if(e.isRecord(i.key))return!0;if(i.key===e.CELLS)return Object.values(a).every(t=>e.everyId(D[i.field]?.references,t,r));if(!t.exists(i.key))return!0;let o=i.key.split(`:`)[0];return(i.field?[[i.field.split(`.`)[0],a]]:Object.entries(a)).every(([t,n])=>e.everyId(u.referenceType(o,t),n,r))})}nothingPointsAt(t,n){if(!n.size)return!0;let r=e=>!n.has(e);for(let{field:n,references:i={}}of u.collections()){let a=Object.entries(i);if(a.length){for(let i of t.items(n)??[])if(C.isItem(i)&&!i.removed&&!a.every(([t,n])=>e.everyId(n,i[t],r)))return!1}}return Object.entries(D).every(([n,{references:i}])=>!i||Object.values(t.cells(n)??{}).every(t=>e.everyId(i,t,r)))}static everyId(t,n,r){return t?Array.isArray(n)?n.every(n=>e.everyId(t,n,r)):!n||typeof n!=`number`||r(`${t}:${n}`):!0}writeRow(t,n,r){let i=n[r];if(n.key===e.CELLS){let e=t.cells(n.field);for(let[t,n]of Object.entries(i))n===void 0?delete e[+t]:e[+t]=structuredClone(n);return}let{list:a,i:o,item:s}=e.isRecord(n.key)?{list:[],i:0,item:e.recordOf(t,n.key)}:t.find(n.key);if(!n.field){if(s&&a.splice(a.indexOf(s),1),i===void 0)return;let e=a.findIndex(e=>C.isItem(e)&&(n.nextId===void 0?e.i>o:e.i===n.nextId));a.splice(e<0?a.length:e,0,structuredClone(i));return}let c=n.field.split(`.`),l=c.pop(),u=s;for(let e of c)Ur(u[e])||(u[e]={}),u=u[e];if(n.append){let[e,t]=[u[l],n.after];r===`after`?e.push(...structuredClone(t)):e.splice(Wr(e,t),t.length)}else i===void 0?delete u[l]:u[l]=structuredClone(i)}},Gr={apply:{from:`proposed`,expects:`before`,writes:`after`,to:`applied`},undo:{from:`applied`,expects:`after`,writes:`before`,to:`undone`},redo:{from:`undone`,expects:`before`,writes:`after`,to:`applied`}},A=new class{prepare(e){return Wt.preload(e)}propose(e,t,n,r){let a=this.parse(t);if(typeof a==`string`)return a;let o=C.live(),s=o.draft(),c,l;try{[c,l]=s.asLive(()=>{let e=[];for(let{op:t,args:n}of a)e.push(Jt(t,this.resolve(n,e)));let t=k.record(o,s);return[t,new Map(t.map(({key:e})=>[e,this.name(e)]))]})}catch(e){return i(e)}if(!c.length)return`These operations change nothing`;let u=c.find(e=>e.key===k.STYLE&&st(e.field.split(`.`))===`regenerateRelief`);return u?`${u.field} regenerates every relief icon, which Undo cannot restore: the user changes it in the Style tab`:{number:n,mapId:r,summary:e,operations:a,change:c.map(e=>({...e,entity:this.label(e.key,l.get(e.key))})),state:`proposed`}}ready(e,t,n){let{from:r,expects:i}=Gr[e];return t.state!==r||t.mapId!==n?!1:new k(t.change).matches(C.live(),i)}can(e,t,n){return this.ready(e,t,n)?new k(t.change).keepsReferencesIntact(C.live(),Gr[e].writes):!1}run(e,t,n){if(!this.can(e,t,n))return!1;let r=new k(t.change);return r.writeTo(C.live(),Gr[e].writes),t.state=Gr[e].to,this.refresh(r),!0}discard(e){e.state===`proposed`&&(e.state=`discarded`)}parse(e){if(!Array.isArray(e)||!e.length)return`Propose at least one operation`;let t=[];for(let n of e){let{op:e,args:r=[]}=n??{};if(typeof e!=`string`||!qt.has(e))return`Unknown operation ${JSON.stringify(e)}. Registered operations: ${[...qt].join(`, `)}`;if(!Array.isArray(r))return`The args of ${e} must be a list, in the order of its parameters`;t.push({op:e,args:r})}return t}resolve(e,t){if(Array.isArray(e))return e.map(e=>this.resolve(e,t));if(typeof e!=`object`||!e||!Number.isInteger(e.result))return e;let{result:n,type:r,...i}=e;if(Object.keys(i).length||r!==void 0&&typeof r!=`string`)return e;if(n<0||n>=t.length)throw Error(`{ result: ${n} } must name an earlier operation of the batch, counted from 0`);if(t[n]===void 0)throw Error(`Operation ${n} returns nothing to refer to`);return r===void 0?t[n]:`${r}:${t[n]}`}name(e){let t=u.parseKey(e);return t?u.getName(t):``}label(e,t){if(e===k.LORE)return`Map lore`;if(e===k.STYLE)return`Style`;let n=u.parseKey(e);if(!n)return`Cells`;let{kind:r}=u.getDisplay(n),i=this.name(e)||t;return i?`${r}: ${i}`:r}refresh(e){ue.draw(...e.layers),this.refreshStyle(e.stylePaths),We();for(let t of e.keys)this.refreshNameInputs(t);v(`notesEditor`)&&b.NotesEditor.refresh(),e.keys.has(k.LORE)&&(_.save(),v(`loreEditor`)&&b.LoreEditor.refresh())}refreshStyle(e){if(!e.length)return;let t=new Set,n=!1;for(let r of e){let e=st(r);r.includes(`attrs`)&&Ie.writeAttr(r),r.at(-1)===`scheme`&&pe.ensure(se(styles,r)),e===`zoom`&&(n=!0),e===`draw`&&ue.has(r[0])&&t.add(r[0])}ue.draw(...t),n&&Me(),v(`styleForm`)?.childElementCount&&b.StyleEditor.refresh()}refreshNameInputs(e){let t=u.parseKey(e),n=t&&u.get(t);if(!t||!n)return;let r=n.name??``;if(t.type===`state`||t.type===`province`){if(v(`${t.type}NameEditor`)?.dataset[t.type]!==String(t.id))return;let e=v(`${t.type}NameEditorShort`),i=v(`${t.type}NameEditorFull`);e&&(e.value=r),i&&(i.value=n.fullName??r)}else{let n=v(`${t.type}Editor`),i=v(`${t.type}Name`);n?.dataset.entity===e&&i&&(i.value=r)}}},Kr=8,qr={proposed:`apply`,applied:`undo`,undone:`redo`},Jr={fullName:a(`Full name`),"label.text":a(`Label`)},Yr={apply:a(`Apply`),undo:a(`Undo`),redo:a(`Redo`)},Xr={proposed:a(`Proposed`),applied:a(`Applied`),undone:a(`Undone`),discarded:a(`Discarded`)},Zr=new Set([`treasury`,`pollTax`]),Qr=new Set([`pole`,`center`,`cells`,`neighbors`]),$r={burg:[`group`,`population`,`port`,`capital`],state:[`form`,`culture`],province:[`state`,`burg`],culture:[`type`],religion:[`type`,`culture`],marker:[`type`]},ei=new Set([`groups`,`attrs`,`options`]),ti=/^#[0-9a-f]{3,8}$/i,j=(t,n)=>`${e(t)} ${n}${t===1?``:`s`}`,ni=new class{html(e,t,n){let{change:i,state:s}=e,c=this.displayRows(i),l=[];for(let e of c.slice(0,Kr)){let t=l.at(-1);t?.[0].key===e.key?t.push(e):l.push([e])}let u=c.length-Kr,d=`${l.map(e=>`<div class="assistantChangeEntity">
          <div class="assistantChangeName">${o(this.entityLabel(e[0]))}${this.entityIcon(e[0])}${this.wholeTag(e[0])}</div>
          ${e.map(e=>this.rowHtml(e)).join(``)}
        </div>`).join(``)}${u>0?`<div class="assistantChangeMore">… ${a(`{{more}} more`,{more:u})}</div>`:``}`,f=new Set(c.map(e=>e.key)).size,p=`${a(`Changes: {{changes}}`,{changes:c.length})}${f>1?` · ${a(`Entities: {{entities}}`,{entities:f})}`:``}`,ee=(e,n,r,i=!1)=>`<button type="button" class="assistantButton${i?` assistantPrimary`:``}" data-action="${e}" data-index="${t}" ${r?``:`disabled`}>${n}</button>`,m=qr[s],h=!!(m&&A.ready(m,e,n)),te=m?ee(m,h?Yr[m]:a(`Changed since`),h,s===`proposed`):``,ne=s===`proposed`;return`<div class="assistantItem assistantProposal ${s}">
      <div class="assistantProposalHeader">
        <span class="assistantProposalState">${Xr[s]??r(s)}</span>
        <span class="assistantProposalSummary">${o(e.summary)}</span>
        ${ne?``:te}
      </div>
      ${ne?`<div class="assistantProposalBody">${d}</div>
        <div class="assistantProposalFooter"><span>${p}</span><span class="assistantProposalActions">${ee(`discard`,a(`Discard`),!0)}${te}</span></div>`:`<details class="assistantProposalBody"><summary>${a(`Show changes ({{changes}})`,{changes:c.length})}</summary>${d}</details>`}
    </div>`}text(e,t=20){let n=this.displayRows(e),r=n.slice(0,t).map(e=>{if(!e.field&&e.before===void 0)return[`${e.entity}: added`,...this.addedFields(e).map(([e,t])=>`${e}: ${t}`)].join(` · `);if(!e.field)return`${e.entity}: ${a(`removed`)}`;if(e.field===`coa`)return`${e.entity} · ${a(`Emblem: redrawn`)}`;if(e.key===`cells`)return`Cells · ${D[e.field]?.label??e.field}: ${j(Object.keys(e.after).length,`cell`)}`;if(e.field===`note`)return`${e.entity} · ${a(`Note: rewritten`)}`;if(e.append)return`${this.entityLabel(e)} · ${this.fieldLabel(e)}: + ${this.addedText(e)}`;let[t,n]=[this.valueText(e,e.before),this.valueText(e,e.after)];return`${this.entityLabel(e)} · ${this.fieldLabel(e)}: ${t??`none`} → ${n??`none`}`}),i=n.length-t;return r.join(`
`)+(i>0?`\n… ${i} more`:``)}displayRows(e){let t=this.wholeRows(e),n=new Set,r=t.flatMap(e=>e.field!==`coa`&&!e.field.startsWith(`coa.`)?[e]:n.has(e.key)?[]:(n.add(e.key),[{...e,field:`coa`,before:void 0,after:void 0}])),i=r.filter(e=>!(e.key.includes(`:`)&&Qr.has(e.field.split(`.`)[0])));return i.length?i:r}wholeRows(e){let t=new Map;for(let n of e)n.field?n.field===`removed`&&n.after===!0&&!n.before&&t.set(n.key,{...n,field:``,before:!0,after:void 0}):t.set(n.key,n);let n=new Set;return e.flatMap(e=>{let r=t.get(e.key);return r?n.has(e.key)?[]:(n.add(e.key),[r]):[e]})}rowHtml(e){let{key:t,field:n,before:i,after:s}=e,c=(e,t,n=``)=>`<div class="assistantChangeField">
      <span>${e}</span>
      <span>${t}</span>
      ${n}
    </div>`;if(!n){let t=this.notePreview(i===void 0?s?.note:void 0);return(i===void 0?this.addedFields(e):[]).map(([e,t])=>c(o(e),o(t))).join(``)+t}if(n===`coa`)return c(`Emblem`,`redrawn`);if(t===`cells`)return c(D[n]?.label??r(n),j(Object.keys(s).length,`cell`));let l=o(this.fieldLabel(e));if(e.append)return c(l,`<ins>+ ${o(this.addedText(e))}</ins>`);if(n===`note`){let e=e=>typeof e==`string`&&e?j(e.length,`character`):`empty`;return c(l,`<del>${e(i)}</del><i>→</i><ins>${e(s)}</ins>`,this.notePreview(s))}let u=t=>{let n=this.valueText(e,t);return n===null?`<em>${a(`None`)}</em>`:(ti.test(n)?`<span class="assistantSwatch" style="background:${n}"></span>`:``)+o(n)};return c(l,`<del>${u(i)}</del><i>→</i><ins>${u(s)}</ins>`)}fieldLabel(e){if(this.isChronicle(e))return`Entries`;if(e.key===`style`){let[t,...n]=e.field.split(`.`);return[Ue(t),...n.filter(e=>!ei.has(e)).map(e=>r(e.replace(/[-_]/g,` `).replace(/([a-z])([A-Z])/g,`$1 $2`).toLowerCase()))].join(` · `)}let t=e.key.startsWith(`state:`)&&e.field.match(/^diplomacy\.(\d+)$/);return t?`Relation to ${this.entityName(`state:${t[1]}`)||`state ${t[1]}`}`:Jr[e.field]??r(e.field.replace(/\./g,` `).replace(/([a-z])([A-Z])/g,`$1 $2`).toLowerCase())}valueText(n,r){let{key:i,field:a}=n;if(r==null||r===``)return null;let o=i.slice(0,i.indexOf(`:`));if(typeof r==`number`){if(a===`population`&&o===`burg`)return e(x(0,r));if(a===`rural`)return e(x(r,0));if(a===`urban`)return e(x(0,r));if(Zr.has(a)||a===`value`&&o===`good`)return ke(r);if(a===`salesTax`)return`${t(r*100,2)}%`;if((a===`capital`||a===`port`)&&o===`burg`)return r?`yes`:`no`;if(a===`area`)return`${e(Se(r))} ${De()}`;let n=u.referenceType(o,a);if(n)return this.entityName(`${n}:${r}`)||String(r)}if(Array.isArray(r))return this.isChronicle(n)?String(r.length):j(r.length,`item`);let s=typeof r==`string`?r:JSON.stringify(r);return s.length>80?`${s.slice(0,80)}…`:s}entityLabel(e){return this.isChronicle(e)?`Chronicle`:e.entity}addedFields(e){let t=e.after;return($r[e.key.split(`:`)[0]]??[]).flatMap(n=>{let r=t?.[n],i=r?this.valueText({...e,field:n},r):null;return i===null?[]:[[this.fieldLabel({...e,field:n}),i]]})}addedText(e){let t=e.after;return this.isChronicle(e)?t.map(e=>e[0]).join(`, `):j(t.length,`item`)}entityIcon({key:e,field:t,before:n,after:r}){let i=t?void 0:r??n,a=this.refOf(e),o=typeof i==`object`?i?.icon:a&&u.get(a)?.icon;return typeof o==`string`&&o?` ${g.html(o)}`:``}wholeTag({field:e,before:t}){if(e)return``;let n=t===void 0;return`<span class="assistantChangeTag ${n?`add`:`remove`}">${n?`Add`:`Remove`}</span>`}notePreview(e){if(typeof e!=`string`||!e)return``;if(!re(e))return`<div class="assistantNotePreview">${o(e)}</div>`;let t=document.createElement(`template`);t.innerHTML=e;for(let e of t.content.querySelectorAll(`img`))e.replaceWith(`[${e.alt||`image`}]`);return`<div class="assistantNotePreview">${t.innerHTML}</div>`}isChronicle({key:e,field:t}){return e===`state:0`&&t===`diplomacy`}refOf(e){return globalThis.pack?u.parseKey(e):void 0}entityName(e){let t=this.refOf(e);return t?u.getName(t):``}},ri=80;function ii(e,t,n=!1){if(!e.length)return;let[r,i,a,o]=ce(e),s=n?1:1.3,c=[Math.max(a-r,n?1:ri)*s,Math.max(o-i,n?1:ri)*s],l=t.width/t.height;c=c[0]/c[1]<l?[c[1]*l,c[1]]:[c[0],c[0]/l];let u=(e,t,n)=>t>=n?n/2:Math.min(Math.max(e,t/2),n-t/2),d=u((r+a)/2,c[0],options.map.graph.width),f=u((i+o)/2,c[1],options.map.graph.height);return{x0:d-c[0]/2,y0:f-c[1]/2,x1:d+c[0]/2,y1:f+c[1]/2,...t}}var ai=4e3,oi=50,si=30;function ci(){return Ae===void 0?0:Ae.at(-1)?.created??0}function li(){return typeof options>`u`?`Unnamed map`:options.map.lore.name||`Unnamed map`}async function ui(e){if(typeof pack>`u`||!pack.cells)return`# Current map

No map is loaded yet.`;let n=e=>e?.filter(e=>e.i&&!e.removed).length??0,{distance:r,height:i,temperature:a}=options.map.units,o=[`name: ${li()} (the world itself, not an entity: never link it)`,`seed: ${options.map.seed}`,`size: ${t(options.map.graph.width*r.scale)} × ${t(options.map.graph.height*r.scale)} ${r.unit}`,`units: 1 map unit = ${r.scale} ${r.unit}; 1 map unit² = ${t(Se(1),4)} ${De()}; elevation in ${i.unit}; temperature in ${a.unit}`,`cells: ${pack.cells.i.length}`,`states: ${n(pack.states)}`,`burgs: ${n(pack.burgs)}`,`provinces: ${n(pack.provinces)}`,`cultures: ${n(pack.cultures)}`,`religions: ${n(pack.religions)}`,`rivers: ${pack.rivers?.length??0}`,`markers: ${pack.markers?.length??0}`,`chronicle entries: ${pack.states[0]?.diplomacy?.length??0} (\`States.getChronicle()\`: entries as text lines, the first the title; HTML-escaped)`],s=pack.states.flatMap(e=>e.i&&!e.removed?(e.diplomacy??[]).flatMap((t,n)=>t===`Vassal`?[`${e.name} (state:${e.i}) of ${pack.states[n]?.name} (state:${n})`]:[]):[]);return s.length&&o.push(`vassals: ${s.join(`; `)}`),[`# Current map\n\n${o.map(e=>`- ${e}`).join(`
`)}`,await fi(),di(e)].filter(Boolean).join(`

`)}function di(e){let t=e.items.findLastIndex(e=>e.kind===`question`),n=e.items.slice(0,t<0?void 0:t).flatMap(e=>e.kind===`proposal`?[e.proposal]:[]).slice(-20);if(!n.length)return null;let r={proposed:`waiting for the user`,applied:`applied`,undone:`applied, then undone`,discarded:`discarded`};return`# Proposals in this chat\n\n${n.map(({number:e,summary:t,state:n})=>`- #${e} ${r[n]}: ${t}`).join(`
`)}`}async function fi(){let e=await b.NotesEditor.current();if(!e)return null;let t=await b.NotesEditor.getSelectionHtml(),n=[`# Notes editor`,``,`The notes editor is open on note \`${e.id}\` ("${e.name}"). To rewrite it, propose \`Notes.write\` with the key \`${e.id}\`.`,``,`Current note HTML:`,"```html",pi(e),"```"];return t&&n.push(``,`The user has this part selected:`,"```html",t,"```"),n.join(`
`)}function pi(e){if(!e.legend)return`(empty)`;if(e.legend.length<=ai)return e.legend;let t=e.legend.length-ai;return`${e.legend.slice(0,ai)}\n… ${t} more characters — read the entity's .note field with read_map for the rest (entity key: ${e.id})`}var mi={si:e,rn:t,getArea:Se,getAreaUnit:De,getDistance:Ce,getDistanceUnit:Te,getHeight:Oe,convertTemperature:Ee,getPrecipitation:xe,formatSpeed:we,formatPrice:ke,getPeople:x},hi=[`state`,`province`,`burg`,`culture`,`religion`,`river`,`marker`,`feature`,`zone`,`route`,`good`],gi=40,_i=/[\p{L}\p{N}]/u;function vi(e,t){for(let n=e.indexOf(t);n>=0;n=e.indexOf(t,n+1))if(!_i.test(e[n-1]??``)&&!_i.test(e[n+t.length]??``))return n;return-1}function yi(e){let t=new Map;for(let n of hi)for(let{ref:r,entity:i}of u.collect(n)){let{name:n}=i;if(typeof n!=`string`||n.length<3)continue;let a=t.get(n)?.at??vi(e,n);if(a<0)continue;let o=t.get(n)??{at:a,keys:[]};o.keys.push(u.key(r)),t.set(n,o)}let n=[...t].sort(([,e],[,t])=>e.at-t.at).slice(0,gi).map(([e,{keys:t}])=>`${e}: ${t.join(`, `)}`);return n.length?`\n# Keys of the names above\n${n.join(`
`)}`:``}var bi={status:`Reading the map`,definition:{name:`read_map`,description:`Run read-only JavaScript in the page. Return the result; describe(value) inspects a value. Scripts may call downloadFile for CSV or JSON. The result ends with the keys of map entities it names.`,input_schema:{type:`object`,properties:{code:{type:`string`}},required:[`code`]}},async handle(e){let t=typeof e.code==`string`?e.code:``,n=await Tr(t,{units:mi});if(!n.ok)return{content:n.error?.message||`Script failed`,item:{kind:`step`,code:t,result:n},isError:!0};let r=`${n.value}\n${n.logs.join(`
`)}`;return{content:r+yi(r),item:{kind:`step`,code:t,result:n}}}},xi={type:`array`,items:{type:`object`,properties:{op:{type:`string`},args:{type:`array`,items:{description:`A number, string, boolean or array, or { result: n }: what operation n returned`}}},required:[`op`,`args`]}},Si=new Set([`population`,`rural`,`urban`]),Ci=({field:e,before:t,after:n})=>Si.has(e)&&typeof t==`number`&&typeof n==`number`&&t>0&&n>0&&Math.max(n/t,t/n)>=100;function wi(e){let t=0,n=``;return{status:`Preparing a change`,definition:{name:`propose_change`,description:`Propose one batch of registered operations. It never changes the map: the user previews the batch and applies or discards it.`,input_schema:{type:`object`,properties:{summary:{type:`string`},operations:xi},required:[`summary`,`operations`]}},async handle(r){let i=Math.max(t,e.items.filter(e=>e.kind===`proposal`).length)+1,a=typeof r.summary==`string`&&r.summary.trim()?r.summary.trim():`Change`;await A.prepare(r.operations);let o=A.propose(a,r.operations,i,ci());if(typeof o==`string`)return{content:o,isError:!0};let s=o.change.filter(Ci),c=JSON.stringify(o.operations);if(s.length&&c!==n)return n=c,{content:`Nothing proposed: these populations change 100-fold or more, as if given in points instead of people. Fix the amounts, or send the same batch again if this is meant:\n${ni.text(s)}`,isError:!0};t=i;let l=o.change.length;return{content:`Proposal #${i} (${l} change${l===1?``:`s`}) is waiting for the user to apply or discard it. Nothing has changed yet. Check its change does what was asked, as the user sees it:\n${ni.text(o.change)}`,item:{kind:`proposal`,proposal:o}}}}}var M=e=>typeof e==`string`?e.trim():``,Ti=e=>M(e).replace(/\[([^\]]*)\]\([^)]*\)/g,`$1`),Ei=([e,t,n,r])=>n-e<=options.map.graph.width/2&&r-t<=options.map.graph.height/2,N=e=>`No entity ${e} on this map. Keys are type:id, e.g. burg:12`,Di=Object.entries({entities:{description:`Show several map entities as a list the user can locate and ring on the map. Use it instead of a Markdown list whenever an answer names 3 or more entities (which, list, find, where are…).`,input_schema:{type:`object`,properties:{title:{type:`string`},entities:{type:`array`,items:{type:`string`}}},required:[`title`,`entities`]},parse(e){let t=Array.isArray(e.entities)?e.entities.map(String):[];if(!t.length||t.length>oi)return`entities takes 1 to ${oi} keys`;let n=t.find(e=>!u.resolveKey(e));return n?N(n):{type:`entities`,title:Ti(e.title)||`Entities`,entities:t}}},card:{description:`Show a state's profile card: emblem, full name and form, capital, population, area, burgs, culture, religion and the start of its note. Use it whenever one state is the subject (tell me about, describe, overview, who rules), then add only what the card does not say.`,input_schema:{type:`object`,properties:{entity:{type:`string`}},required:[`entity`]},parse(e){let t=M(e.entity);return u.resolveKey(t)?t.startsWith(`state:`)?{type:`card`,entity:t}:`Cards show states for now`:N(t)}},chart:{description:`Show numbers you computed with read_map as a chart. bar: one measure compared or ranked across items (largest states, burgs by population, top religions). pie: parts of one whole (population by culture, land by biome), given as amounts, not percentages: the chart computes shares. unit names the amounts (people, mi²); "money" for prices, treasuries and taxes. Prefer it to a table when each item has one number.`,input_schema:{type:`object`,properties:{chart:{type:`string`,enum:[`bar`,`pie`]},title:{type:`string`},unit:{type:`string`},rows:{type:`array`,items:{type:`object`,properties:{label:{type:`string`},value:{type:`number`},entity:{type:`string`}},required:[`label`,`value`]}}},required:[`chart`,`title`,`rows`]},parse(e){if(e.chart!==`bar`&&e.chart!==`pie`)return`chart is bar or pie`;let t=Array.isArray(e.rows)?e.rows:[];if(!t.length||t.length>si)return`rows takes 1 to ${si} items`;let n=[];for(let e of t){let{label:t,value:r,entity:i}=e??{};if(!M(t)||typeof r!=`number`||!Number.isFinite(r)||r<0)return`Each row needs a label and a non-negative number value, got ${JSON.stringify(e)}`;if(i!==void 0&&!u.resolveKey(i))return N(i);n.push(i===void 0?{label:M(t),value:r}:{label:M(t),value:r,entity:String(i)})}if(e.chart===`pie`&&!n.some(e=>e.value>0))return`A pie needs amounts that add up to more than 0`;let r=M(e.unit);return{type:`chart`,chart:e.chart,title:Ti(e.title)||`Chart`,...r&&{unit:r},rows:n}}},choices:{description:`Offer 2-4 alternatives for the user to pick: name ideas, options, directions. Give a choice operations (as in propose_change) when picking it should change the map, such as one rename per name idea; otherwise its label becomes the user's next question. Use it instead of listing suggestions, then stop and wait.`,input_schema:{type:`object`,properties:{title:{type:`string`},choices:{type:`array`,items:{type:`object`,properties:{label:{type:`string`},operations:xi},required:[`label`]}}},required:[`title`,`choices`]},parse(e){let t=Array.isArray(e.choices)?e.choices:[];if(t.length<2||t.length>4)return`choices takes 2 to 4 options`;let n=[];for(let[e,r]of t.entries()){let{label:t,operations:i}=r??{};if(!M(t))return`Choice ${e+1} needs a label`;if(i===void 0||Array.isArray(i)&&!i.length){n.push({label:M(t)});continue}let a=A.propose(M(t),i,0,ci());if(typeof a==`string`)return`Choice ${e+1}: ${a}`;n.push({label:M(t),operations:a.operations})}return{type:`choices`,title:Ti(e.title)||`Choose one`,choices:n}}},inset:{description:`Show a picture of a small part of the map (at most half its width and height) around an entity key, or a box [x0, y0, x1, y1] in map units; clicking it zooms the map there. Use it when an answer is about where something is or what a place is like.`,input_schema:{type:`object`,properties:{title:{type:`string`},entity:{type:`string`},box:{type:`array`,items:{type:`number`}}}},parse(e){let t=Ti(e.title);if(e.entity!==void 0){let n=M(e.entity),r=u.resolveKey(n);if(!r)return N(n);let i=u.getPoints(r);return i.length?Ei(ce(i))?{type:`inset`,title:t||u.getName(r),entity:n}:`${n} covers too much of the map for an inset`:`${n} has no place on the map`}let n=Array.isArray(e.box)?e.box:[],{width:r,height:i}=options.map.graph,[a,o,s,c]=n;return n.length!==4||!n.every(Number.isFinite)||s<=a||c<=o||s<0||c<0||a>r||o>i?`An inset takes an entity key or a box [x0, y0, x1, y1] in map units within ${r} × ${i}`:Ei([a,o,s,c])?{type:`inset`,title:t||`Map`,box:[a,o,s,c]}:`An inset shows a small part of the map, not most of it`}},source:{description:`Link the wiki page an answer from read_help came from, so the user can read more. page is the part of a section heading before " › ", or "Knowledge Base".`,input_schema:{type:`object`,properties:{page:{type:`string`}},required:[`page`]},parse(e){let t=M(e.page).replace(/[\s-]+/g,` `).toLowerCase(),n=yn.find(e=>e.replace(/-/g,` `).toLowerCase()===t);return n?{type:`source`,page:n}:`No wiki page "${M(e.page)}". Pages: ${yn.join(`, `)}`}}}).map(([e,{parse:t,...n}])=>({definition:{name:`show_${e}`,...n},status:`Preparing a widget`,async handle(e){await A.prepare(e);let n=t(e);return typeof n==`string`?{content:n,isError:!0}:{content:n.type===`choices`?`The choices are waiting for the user. Stop here: their pick arrives as a proposal or as their next question.`:`Shown the ${n.type} widget to the user`,item:{kind:`widget`,widget:n}}}})),Oi=[`state`,`province`,`burg`],ki=256,Ai={status:`Looking at the emblem`,definition:{name:`view_emblem`,description:`See the emblem (coat of arms) of a state, province or burg as an image, to describe it or match lore to it. The user sees it too.`,input_schema:{type:`object`,properties:{entity:{type:`string`}},required:[`entity`]}},async handle(e){let t=M(e.entity);if(!Oi.some(e=>t.startsWith(`${e}:`)))return{content:`Emblems belong to states, provinces and burgs`,isError:!0};let r=u.resolveKey(t);if(!r)return{content:N(t),isError:!0};let i=u.get(r).coa;if(!i)return{content:`${t} has no emblem`,isError:!0};let{emblemPng:a}=await n(async()=>{let{emblemPng:e}=await import(`./emblem-image-BlNMu7dp.js`);return{emblemPng:e}},__vite__mapDeps([55,4,1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,56,27,26,32,33,34])),o=await a(`${r.type}COA${r.id}`,i,ki);return{content:[{type:`text`,text:`The emblem of ${u.getName(r)}`},Ze(o)],item:{kind:`widget`,widget:{type:`emblem`,entity:t}}}}},ji=1024,Mi=(e,t)=>{let n=ji/Math.max(e,t);return{width:Math.round(e*n),height:Math.round(t*n)}};function Ni(e){let{width:t,height:n}=options.map.graph;if(e===`map`)return{x0:0,y0:0,x1:t,y1:n,...Mi(t,n)};if(e===`view`){let{scale:e,x:t,y:n}=fe,[r,i]=[-t/e,-n/e],[a,o]=[r+fe.width/e,i+fe.height/e];return{x0:r,y0:i,x1:a,y1:o,...Mi(a-r,o-i)}}let r=u.resolveKey(e);return r?ii(u.getPoints(r),Mi(16,10))??`${e} has no place on the map`:N(e)}var Pi={status:`Looking at the map`,definition:{name:`view_map`,description:`See the map as the user sees it, in its current style and visible layers: an entity framed, "view" for what the user has on screen, or "map" for the whole map. For looks, shapes and layout; read names and numbers with read_map.`,input_schema:{type:`object`,properties:{target:{type:`string`,description:`An entity key, "view" or "map"`}},required:[`target`]}},async handle(e){let t=M(e.target)||`view`,r=Ni(t);if(typeof r==`string`)return{content:r,isError:!0};let{ExportMap:i}=await n(async()=>{let{ExportMap:e}=await import(`./export-D_E9toDt.js`).then(e=>e.t);return{ExportMap:e}},__vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,27,26,32,33,34])),a=await i.getRegionImage(r,1,`image/jpeg`);return{content:[{type:`text`,text:`${t===`map`?`The whole map`:t===`view`?`The user's view`:`The map around ${t}`}.${ue===void 0?``:` Visible layers: ${ue.state.active.join(`, `)}.`}`},Ze(a)]}}};function Fi(e){return[bi,wi(e),...Di,Ai,Pi]}var P={id:ci,name:li,context:ui,tools:Fi},Ii=240,Li=`money`,Ri={width:480,height:300},zi=new WeakMap,Bi=0,Vi=null,Hi=()=>v(`assistant`)?.getBoundingClientRect();function Ui(e){let t=qe.mapCommands.find(t=>t.id===e);return t&&qe.isLinkable(t)?t:void 0}function Wi(e){let t=e.type===`good`?u.get(e):void 0;return t?`<svg class="assistantGood" viewBox="0 0 100 100" aria-hidden="true">${de(t)}</svg>`:`<span class="${u.getDisplay(e).icon}" aria-hidden="true"></span>`}var Gi=(e,t)=>`<button type="button" class="assistantEntity" data-action="entity" data-id="${u.key(e)}" data-tip="${a(`Show on map`)}">${Wi(e)}${t}</button>`;function Ki(e,t,n=``){let r=t?u.resolveKey(e):void 0;return r?Gi(r,o(u.getName(r)||n)):o(n)}function qi(e){return(t,n)=>{if(n.startsWith(`command:`)){let e=Ui(n.slice(8));return e?Qi(e.id,t):t}if(!n.includes(`:`)||!ee(n.split(`:`)[0]))return null;let r=e?u.resolveKey(n):void 0;return r&&Zi(r,t)?Gi(r,t):t}}var Ji=`(?:${[...oe,...m].join(`|`)}):\\d+(?:-\\d+)?`,Yi=RegExp(`\`[^\`\\n]*\`|\\[(${Ji})\\]\\(\\1\\)|\\[[^\\]\\n]*\\]\\([^)\\s]*\\)|\\b(${Ji})\\b`,`g`);function Xi(e,t){let n=``,r=0;for(let i of e.matchAll(Yi)){let a=i[1]??i[2];if(!a)continue;let o=i.index,s=o+i[0].length,c=e[o-1]===`(`&&e[s]===`)`;c&&([o,s]=[o-1,s+1]);let l=e.slice(r,o),d=t?u.resolveKey(a):void 0,f=d?[u.get(d)?.name,u.getName(d)]:[],[p]=f.filter(e=>typeof e==`string`&&!!e);if(!c)n+=l+(p?`[${p}](${a})`:i[0]);else{let e=l.match(/[\s*_]*$/)[0],t=l.slice(0,l.length-e.length),r=f.find(e=>typeof e==`string`&&!!e&&t.toLowerCase().endsWith(e.toLowerCase()));n+=r?`${t.slice(0,-r.length)}[${t.slice(-r.length)}](${a})${e.trimEnd()}`:`${t}${e.trimEnd()}`}r=s}return er(n+e.slice(r),qi(t))}function Zi(e,t){if(m.includes(e.type))return!0;let n=o(u.getName(e)).toLowerCase(),r=t.replace(/[*_~]/g,``).toLowerCase();return!n||!r||n.includes(r)||r.includes(n)}var Qi=(e,t,n=`assistantCommand`)=>`<button type="button" class="${n}" data-action="command" data-id="${e}" data-tip="${o(Ui(e)?.name??``)}">${t}</button>`,F=(e,t,n)=>`<div class="assistantItem assistantWidget">
    <div class="assistantWidgetHeader">${e}</div>
    ${n?``:`<div class="assistantWidgetNote">${a(`Its map is not open`)}</div>`}
    ${t}
  </div>`;function $i(e,t){return e.type===`card`?na(e,t.live):e.type===`chart`?la(e,t.live):e.type===`choices`?da(e,t):e.type===`inset`?_a(e,t):e.type===`emblem`?ia(e,t.live):e.type===`source`?oa(e):ea(e,t)}function ea(e,{index:t,live:n}){let r=e.entities.map(e=>{let t=n?u.resolveKey(e):void 0;if(!t)return`<li class="gone">${o(e)}</li>`;let r=u.getContext(t);return`<li>${Gi(t,o(u.getName(t)||u.getDisplay(t).kind))}${r?`<small>${o(r)}</small>`:``}</li>`}).join(``),i=Vi===e,s=`<button type="button" class="assistantButton" data-action="mark" data-index="${t}" aria-pressed="${i}" ${n?``:`disabled`}>${a(i?`Hide on map`:`Show on map`)}</button>`;return F(`<span>${o(e.title)}</span>${s}`,`<ul>${r}</ul>`,n)}function ta(e){let t=document.createElement(`template`);return t.innerHTML=e,(t.content.textContent??``).replace(/\s+/g,` `).trim()}function na(t,n){let r=n?u.resolveKey(t.entity):void 0,i=r&&u.get(r);if(!r||!i)return F(`<span>${o(t.entity)}</span>`,n?`<div class="assistantWidgetNote">${a(`No longer on this map`)}</div>`:``,n);let s=x(i.rural,i.urban),c=pack.burgs[i.capital],l=c?pack.cells.religion?.[c.cell]:void 0,d=[[`Capital`,c?Ki(`burg:${c.i}`,n,c.name):`none`],[`Population`,e(s)],[`Area`,`${e(Se(i.area||0))} ${De()}`],[`Burgs`,String(i.burgs??0)],[`Culture`,Ki(`culture:${i.culture}`,n)],[`Religion`,l?Ki(`religion:${l}`,n):``]],f=i.note?ta(i.note):``,p=f.length>Ii?`${f.slice(0,Ii)}…`:f;return`<div class="assistantItem assistantWidget assistantCard">
    <div class="assistantCardHead">
      ${ra(`stateCOA${i.i}`,i.coa)}
      <div>
        <strong>${o(i.fullName||i.name)}</strong>
        <small>${o(i.formName||i.form||`State`)}</small>
      </div>
    </div>
    <dl>${d.filter(([,e])=>e).map(([e,t])=>`<dt>${e}</dt><dd>${t}</dd>`).join(``)}</dl>
    ${p?`<p class="assistantCardNote">${o(p)}</p>`:``}
    <div class="assistantActions">
      <button type="button" class="assistantButton" data-action="entity" data-id="${u.key(r)}">${a(`Locate`)}</button>
      ${Qi(`editStatesButton`,`Edit`,`assistantButton`)}
    </div>
  </div>`}function ra(e,t,n=``){return t&&le?.trigger(e,t),`<svg${n&&` class="${n}"`} viewBox="0 0 200 200" aria-hidden="true"><use href="#${e}"></use></svg>`}function ia(e,t){let n=t?u.resolveKey(e.entity):void 0,r=n&&u.get(n)?.coa;return!n||!r?F(`<span>${o(e.entity)}</span>`,``,t):F(Ki(e.entity,t),ra(`${n.type}COA${n.id}`,r,`assistantEmblem`),!0)}var aa=`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/`;function oa({page:e}){let t=`<a href="${aa+encodeURIComponent(e.replace(/ /g,`-`))}" target="_blank" rel="noopener noreferrer">${o(e.replace(/-/g,` `))}</a>`;return F(`<span>${a(`Source`)}</span>`,`<div class="assistantSource">📖 ${t}</div>`,!0)}function sa(n,r){if(r===Li)return ke(n);let i=n>=1e4?e(n):String(t(n,2));return r?`${i} ${o(r)}`:i}function ca(e,t){let n=t?u.resolveKey(e.entity):void 0;return n?Gi(n,o(e.label)):o(e.label)}function la(e,n){let r=`<span>${o(e.title)}</span>`;if(e.chart===`pie`)return F(r,ua(e,n),!0);let i=Math.max(...e.rows.map(e=>e.value),0)||1;return F(r,`<div class="assistantChart">${e.rows.map(r=>`<div class="assistantBar">
        <span>${ca(r,n)}</span>
        <span class="assistantBarTrack"><i style="width: ${t(r.value/i*100,2)}%"></i></span>
        <span>${sa(r.value,e.unit)}</span>
      </div>`).join(``)}</div>`,!0)}function ua(e,n){let r=e.rows.reduce((e,t)=>e+t.value,0),i=e=>r?e/r:0,o=e=>pt[e%pt.length],s=-Math.PI/2,c=e.rows.map((e,n)=>{let r=i(e.value);if(r>=1)return`<circle r="1" fill="${o(n)}"></circle>`;let a=s;s+=r*Math.PI*2;let[c,l,u,d]=[Math.cos(a),Math.sin(a),Math.cos(s),Math.sin(s)].map(e=>t(e,4));return`<path d="M0 0L${c} ${l}A1 1 0 ${+(r>.5)} 1 ${u} ${d}Z" fill="${o(n)}"></path>`}).join(``),l=e.unit===`%`;return`<div class="assistantPie"><svg viewBox="-1 -1 2 2" aria-hidden="true">${c}</svg><ul>${e.rows.map((r,a)=>`<li${l?``:` data-tip="${sa(r.value,e.unit)}"`}>
        <i style="background: ${o(a)}"></i>${ca(r,n)}
        <small>${t(i(r.value)*100,1)}%</small>
      </li>`).join(``)}</ul></div><div class="assistantChartCaption">${l?a(`Share of the total`):`Share of ${sa(r,e.unit)}`}</div>`}function da(e,{index:t,live:n,canAsk:r}){let i=e.choices.map((i,s)=>{let c=e.picked===s,l=e.picked===void 0&&(i.operations?n:r),u=i.operations?a(`Propose this change`):`Ask this`;return`<button type="button" class="assistantButton${c?` assistantPrimary`:``}" data-action="choose" data-index="${t}" data-choice="${s}" data-tip="${u}" aria-pressed="${c}" ${l?``:`disabled`}>${o(i.label)}</button>`}).join(``);return F(`<span>${o(e.title)}</span>`,`<div class="assistantActions assistantChoices">${i}</div>`,!0)}function fa(e){if(e.box)return[e.box.slice(0,2),e.box.slice(2)];let t=u.resolveKey(e.entity);return t?u.getPoints(t):[]}var pa=e=>ii(fa(e),Ri,!!e.box);function ma(e,{x0:t,y0:n,x1:r,y1:i}){let a=u.resolveKey(e.entity),o=a&&u.getAnchor(a);if(!o)return``;let s=(r-t)/40;return`<svg viewBox="${t} ${n} ${r-t} ${i-n}" aria-hidden="true"><circle cx="${o[0]}" cy="${o[1]}" r="${s}" fill="none" stroke="#d0240f" stroke-width="${s/4}"></circle></svg>`}var ha=(e,{region:t,image:n,failed:r})=>n&&t?`<img src="${n}" alt="" />${ma(e,t)}`:`<span>${a(r?`Could not draw this part of the map`:`Drawing the map…`)}</span>`;async function ga(e,t){try{if(!t.region)throw Error(`No region`);let{ExportMap:e}=await n(async()=>{let{ExportMap:e}=await import(`./export-D_E9toDt.js`).then(e=>e.t);return{ExportMap:e}},__vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,27,26,32,33,34]));t.image=await e.getRegionImage(t.region)}catch{t.failed=!0}let r=v(t.id);r&&(r.innerHTML=ha(e,t))}function _a(e,{index:t,live:n}){let r=`<span>${o(e.title)}</span>`;if(!n)return F(r,``,!1);let i=zi.get(e);return i||(i={id:`assistantInset${++Bi}`,region:pa(e)},zi.set(e,i),ga(e,i)),F(r,`<button type="button" id="${i.id}" class="assistantInset" data-action="inset" data-index="${t}" data-tip="${a(`Show on map`)}">${ha(e,i)}</button>`,!0)}function va(e){let t=u.resolveKey(e.entity);t?ct(t,Hi()):lt(fa(e),{layers:[],maxScale:20,element:()=>null,cover:Hi()})}function ya(e){let t=u.resolveKey(e);t&&(ct(t,Hi())||dt(t)||ge(a(`This element has no map location`),!1,`warn`,4e3))}function ba(e){Ui(e)?.run()}function xa(e){if(Vi===e){Sa();return}let t=e.entities.flatMap(e=>u.resolveKey(e)??[]);Vi=ut(t,Hi())?e:null,Vi||ge(a(`These entities have no map location`),!1,`warn`,4e3)}function Sa(){Vi=null,ft()}var I={answer:Xi,html:$i,openEntity:ya,runCommand:ba,revealInset:va,toggleMarks:xa,clearMarks:Sa},L=`assistant`,Ca=2e3,wa=4,Ta=`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Policy`,Ea=`https://discordapp.com/invite/X7E84HU`,Da=`https://www.patreon.com/azgaar`,R,z=`chat`,B=!1,Oa=null,ka=null,V=null,H=!1,Aa,ja=0,Ma=null,U=null,Na=`Thinking`,W=[],G=()=>rt()?`key`:gt()?Be()?`member`:`guest`:null,Pa=e=>e?e.usage.input+e.usage.output+e.usage.cached:0,K=e=>!!(e&&Bt(e,G(),P.id())),Fa=()=>v(L)!==null,q=!1,Ia=!1,J=e=>y(e);function La(){q?he.close(L):Ra()}function Ra(){Fa()?(he.open(L),q||(q=!0,X(!Ia),Ia=!1),ro()):(q=!0,za()),Le(!0)}function za(){z=`chat`,Ha(),he.open(L,{title:a(`Azgaar Assistant`),position:{my:`right bottom`,at:`right-16 bottom-44`,of:window},width:Math.min(340,window.innerWidth-24),height:Math.min(580,window.innerHeight-140),minWidth:300,minHeight:320,resizable:!0,persistent:!0,titlebarButtons:[{id:`assistantOpenChats`,label:`Chats`,tip:a(`Chats`),className:`icon-list-bullet`,onClick:()=>{!B&&H&&Y(z===`chats`?`chat`:`chats`)}}],onClose:Ba}),Aa=Wa()}function Ba(){q=!1,Le(!1),I.clearMarks()}var Va=`
  <style>
    #assistant { display: flex; flex-direction: column; gap: .5em; overflow: hidden; padding: .6em .7em .5em; font-family: var(--sans-serif); }
    #assistant > * { width: auto; }
    #assistant [hidden] { display: none !important; }
    #assistant button { cursor: pointer; font: inherit; }
    #assistant button:disabled { cursor: default; opacity: .5; }
    #assistant pre, #assistant code { font-family: var(--monospace); }
    #assistantOpenChats { font-size: .62em; }

    #assistantTranscript, #assistantChats, #assistantKey { flex: 1; min-height: 0; overflow: hidden auto; padding-right: .2em; line-height: 1.45; }

    #assistant .assistantItem { max-width: 92%; margin: 0 0 .7em; overflow-wrap: anywhere; }
    #assistant .assistantItem > :first-child { margin-top: 0; }
    #assistant .assistantItem > :last-child { margin-bottom: 0; }
    #assistant .assistantItem p { margin: .45em 0; }
    #assistant .assistantItem :is(h1, h2, h3, h4, h5, h6) { margin: .7em 0 .3em; font-size: 1em; }
    #assistant .assistantItem :is(ol, ul) { margin: .45em 0; padding-left: 1.3em; }
    #assistant .assistantItem pre { overflow: auto; max-height: 14em; margin: .45em 0; padding: .4em .55em; border-radius: .3em; background: rgb(0 0 0 / 6%); white-space: pre-wrap; }
    #assistant .assistantItem table { display: block; overflow-x: auto; margin: .45em 0; border-collapse: collapse; font-size: .92em; }
    #assistant .assistantItem :is(td, th) { padding: .2em .5em; border: 1px solid rgb(0 0 0 / 14%); }
    #assistant .assistantItem th { background: rgb(0 0 0 / 5%); }

    #assistant .assistantQuestion { width: fit-content; margin-left: auto; padding: .45em .7em; border-radius: .8em .8em .2em .8em; background: var(--header); color: #fff; white-space: pre-wrap; }
    #assistant .assistantQuestionImages { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: .3em; }
    #assistant .assistantQuestionImages:not(:last-child) { margin-bottom: .35em; }
    #assistant .assistantQuestionImages img { max-width: 100%; max-height: 8em; border-radius: .4em; }
    #assistant .assistantAnswer { padding: .1em .1em 0; }
    #assistant .assistantWelcome { padding: .6em .75em; border-radius: .5em; background: rgb(0 0 0 / 5%); }

    #assistant .assistantStep { width: fit-content; margin: 0 0 .5em; font-size: .9em; opacity: .75; }
    #assistant .assistantStep summary { cursor: pointer; }
    #assistant .assistantStep.failed summary { color: #a3262e; }
    #assistant .assistantProposal { width: 100%; overflow: hidden; border: 1px solid rgb(0 0 0 / 14%); border-radius: .55em; background: rgb(255 255 255 / 60%); }
    #assistant .assistantProposalHeader { display: flex; align-items: center; gap: .55em; padding: .5em .7em; border-bottom: 1px solid rgb(0 0 0 / 8%); background: rgb(0 0 0 / 3%); }
    #assistant .assistantProposalState { flex: none; padding: .1em .55em; border-radius: 1em; background: var(--header); color: #fff; font-size: .72em; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; }
    #assistant .assistantProposal.applied .assistantProposalState { background: #3d7a3a; }
    #assistant .assistantProposal:is(.undone, .discarded) .assistantProposalState { background: rgb(0 0 0 / 40%); }
    #assistant .assistantProposalSummary { flex: 1; font-weight: 600; }
    #assistant .assistantProposalHeader .assistantButton { flex: none; padding: .1em .6em; font-size: .9em; }
    #assistant .assistantProposalBody { display: grid; gap: .55em; padding: .55em .7em; }
    #assistant details.assistantProposalBody:not([open]) { padding-block: .35em; }
    #assistant .assistantProposalBody > summary { cursor: pointer; opacity: .7; font-size: .9em; }
    #assistant .assistantChangeName { display: flex; align-items: center; gap: .35em; margin-bottom: .1em; font-weight: 600; }
    #assistant .assistantChangeName > svg { flex: none; }
    #assistant .assistantChangeTag { margin-left: auto; padding: 0 .5em; border-radius: 1em; font-size: .75em; font-weight: 600; }
    #assistant .assistantChangeTag.add { background: rgb(61 122 58 / 15%); color: #2f6a2c; }
    #assistant .assistantChangeTag.remove { background: rgb(160 40 40 / 12%); color: #8a2a2a; }
    #assistant .assistantChangeField { display: grid; grid-template-columns: 5.5em minmax(0, 1fr); gap: 0 .6em; padding-left: .6em; font-size: .92em; }
    #assistant .assistantChangeField > span:first-child { opacity: .6; }
    #assistant .assistantChangeField del { opacity: .55; }
    #assistant .assistantChangeField i { margin: 0 .35em; font-style: normal; opacity: .45; }
    #assistant .assistantChangeField ins { font-weight: 600; text-decoration: none; }
    #assistant .assistantChangeField em { opacity: .6; }
    #assistant .assistantSwatch { display: inline-block; width: .8em; height: .8em; margin-right: .3em; border: 1px solid rgb(0 0 0 / 25%); border-radius: 2px; vertical-align: -.1em; }
    #assistant .assistantChangeMore { opacity: .6; font-size: .9em; }
    #assistant .assistantNotePreview { contain: paint; grid-column: 1 / -1; max-height: 10em; overflow: auto; margin-top: .35em; padding: .35em .6em; border-radius: .35em; background: rgb(0 0 0 / 4%); }
    #assistant .assistantNotePreview p { margin: .3em 0; }
    #assistant .assistantChangeEntity > .assistantNotePreview { margin: .15em 0 0 .6em; font-size: .92em; }
    #assistant .assistantProposalFooter { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .4em; padding: .4em .7em; border-top: 1px solid rgb(0 0 0 / 8%); }
    #assistant .assistantProposalFooter > span:first-child { opacity: .6; font-size: .88em; }
    #assistant .assistantProposalActions { display: flex; gap: .4em; }
    #assistant :is(.assistantEntity, .assistantCommand) { padding: 0; border: 0; background: none; color: inherit; }
    #assistant .assistantEntity { text-decoration-line: underline; text-decoration-style: dotted; text-underline-offset: 2px; }
    #assistant .assistantEntity:hover { color: var(--header-active); }
    #assistant .assistantEntity > span { display: inline-block; margin-right: .35em; opacity: .55; font-size: .9em; }
    #assistant .assistantEntity > .assistantGood { width: 1.2em; height: 1.2em; margin-right: .3em; vertical-align: -.25em; }
    #assistant .assistantCommand { padding: 0 .4em; border: 1px solid var(--header); border-radius: .35em; }
    #assistant .assistantCommand:hover { background: rgb(0 0 0 / 5%); }
    #assistant .assistantWidget { width: 100%; overflow: hidden; border: 1px solid rgb(0 0 0 / 14%); border-radius: .55em; background: rgb(255 255 255 / 60%); }
    #assistant .assistantWidgetHeader { display: flex; align-items: center; justify-content: space-between; gap: .55em; padding: .4em .7em; border-bottom: 1px solid rgb(0 0 0 / 8%); background: rgb(0 0 0 / 3%); font-weight: 600; }
    #assistant .assistantWidgetHeader .assistantButton { flex: none; padding: .1em .6em; font-size: .9em; font-weight: normal; }
    #assistant .assistantWidgetHeader .assistantButton[aria-pressed="true"] { background: var(--header); color: #fff; }
    #assistant .assistantWidgetNote { padding: .3em .7em 0; opacity: .6; font-size: .9em; }
    #assistant .assistantWidget ul { max-height: 16em; overflow-y: auto; margin: 0; padding: .35em .7em; list-style: none; }
    #assistant .assistantWidget li { display: flex; align-items: baseline; gap: .4em; padding: .1em 0; }
    #assistant .assistantWidget li small { margin-left: auto; opacity: .6; text-align: right; }
    #assistant .assistantWidget li.gone { opacity: .5; }
    #assistant .assistantCard { padding: .6em .7em; }
    #assistant .assistantCardHead { display: flex; align-items: center; gap: .6em; }
    #assistant .assistantCardHead svg { flex: none; width: 3.6em; height: 3.6em; }
    #assistant .assistantCardHead strong { display: block; font-size: 1.05em; }
    #assistant .assistantCardHead small { opacity: .6; }
    #assistant .assistantCard dl { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: .15em .8em; margin: .55em 0 0; }
    #assistant .assistantCard dt { opacity: .6; }
    #assistant .assistantCard dd { margin: 0; }
    #assistant .assistantCardNote { margin: .5em 0 0; opacity: .8; font-size: .92em; }
    #assistant .assistantChart { display: grid; grid-template-columns: minmax(0, max-content) minmax(3em, 1fr) auto; align-items: center; gap: .25em .6em; padding: .45em .7em; }
    #assistant .assistantBar { display: contents; }
    #assistant .assistantBar > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    #assistant .assistantBar > span:last-child { font-variant-numeric: tabular-nums; opacity: .75; text-align: right; }
    #assistant .assistantBarTrack { height: .75em; border-radius: .2em; background: rgb(0 0 0 / 6%); }
    #assistant .assistantBarTrack i { display: block; height: 100%; min-width: 1px; border-radius: .2em; background: var(--header); }
    #assistant .assistantPie { display: flex; align-items: center; gap: .8em; padding: .45em .7em; }
    #assistant .assistantPie svg { flex: none; width: 6.5em; height: 6.5em; }
    #assistant .assistantPie ul { flex: 1; padding: 0; }
    #assistant .assistantPie li i { flex: none; width: .75em; height: .75em; border-radius: .15em; }
    #assistant .assistantChoices { margin: 0; padding: .5em .7em; }
    #assistant .assistantChartCaption { padding: 0 .7em .45em; opacity: .6; font-size: .88em; }
    #assistant .assistantInset { position: relative; display: grid; place-items: center; width: 100%; aspect-ratio: 480 / 300; padding: 0; border: 0; background: rgb(0 0 0 / 4%); color: inherit; }
    #assistant .assistantInset :is(img, svg) { position: absolute; inset: 0; display: block; width: 100%; height: 100%; }
    #assistant .assistantInset span { opacity: .6; font-size: .9em; }
    #assistant .assistantSource { padding: .45em .7em; }
    #assistant .assistantSource a { color: inherit; }
    #assistant .assistantEmblem { display: block; width: 9em; height: 9em; margin: .5em auto; }
    #assistant .assistantNoticeItem { padding: .4em .6em; border-left: 3px solid var(--header); border-radius: .25em; background: rgb(0 0 0 / 4%); font-size: .9em; }
    #assistant .assistantDivider { display: flex; align-items: center; gap: .6em; margin: .8em 0; opacity: .5; font-size: .78em; text-transform: uppercase; letter-spacing: .06em; }
    #assistant .assistantDivider::before, #assistant .assistantDivider::after { content: ""; flex: 1; height: 1px; background: currentcolor; }

    #assistant .assistantActions { display: flex; flex-wrap: wrap; gap: .4em; margin-top: .5em; }
    #assistant .assistantButton { padding: .25em .7em; border: 1px solid var(--header); border-radius: .35em; background: none; color: inherit; }
    #assistant .assistantButton:hover:not(:disabled) { background: rgb(0 0 0 / 5%); }
    #assistant .assistantPrimary { background: var(--header); color: #fff; }
    #assistant .assistantPrimary:hover:not(:disabled) { background: var(--header-active); }
    #assistant .assistantLink { padding: 0; border: 0; background: none; color: inherit; text-decoration: underline; }
    #assistant .assistantLink:hover:not(:disabled) { color: var(--header-active); }

    #assistant .assistantFeedback { display: flex; gap: .15em; margin-top: .2em; }
    #assistant .assistantFeedback button { padding: 0 .2em; border: 0; background: none; opacity: .3; font-size: .9em; }
    #assistant .assistantFeedback button:hover { opacity: .7; }
    #assistant .assistantFeedback button[aria-pressed="true"] { opacity: 1; }

    #assistant .assistantTyping { display: flex; align-items: center; gap: .28em; padding: .2em .1em; opacity: .7; }
    #assistant .assistantTyping i { width: .4em; height: .4em; border-radius: 50%; background: currentcolor; animation: assistantTyping 1.2s infinite ease-in-out; }
    #assistant .assistantTyping i:nth-child(2) { animation-delay: .15s; }
    #assistant .assistantTyping i:nth-child(3) { animation-delay: .3s; margin-right: .35em; }
    @keyframes assistantTyping { 0%, 60%, 100% { opacity: .25; transform: none; } 30% { opacity: .9; transform: translateY(-.18em); } }
    @media (prefers-reduced-motion: reduce) { #assistant .assistantTyping i { animation: none; } }

    #assistantContext { flex: none; align-self: flex-start; padding: .1em .55em; border-radius: 1em; background: rgb(0 0 0 / 6%); font-size: .9em; }
    #assistantNotice { flex: none; max-height: 30%; overflow-y: auto; padding: .45em .6em; border-left: 3px solid var(--header); border-radius: .25em; background: rgb(0 0 0 / 5%); font-size: .9em; }
    #assistantNotice p { margin: 0 0 .3em; }

    #assistantComposer { flex: none; display: flex; flex-wrap: wrap; align-items: flex-end; gap: .4em; padding: .3em .3em .3em .6em; border: 1px solid rgb(0 0 0 / 20%); border-radius: .6em; background: rgb(255 255 255 / 70%); }
    #assistantComposer:focus-within { border-color: var(--header); }
    #assistantQuestion { flex: 1; min-width: 0; height: 1.7em; max-height: 108px; padding: .2em 0; border: 0; outline: none; background: none; resize: none; font: inherit; line-height: 1.4; }
    #assistantAsk { flex: none; display: flex; align-items: center; justify-content: center; width: 1.9em; height: 1.9em; padding: 0; border: 0; border-radius: .45em; background: var(--header); color: #fff; }
    #assistantAsk::before { margin: 0; }
    #assistantAsk:hover { background: var(--header-active); }
    #assistantQuestion:placeholder-shown + #assistantAsk:not(.busy) { opacity: .45; }
    #assistantAttachments { flex-basis: 100%; display: flex; flex-wrap: wrap; gap: .4em; padding-top: .3em; }
    #assistantAttachments:not([hidden]) ~ #assistantAsk:not(.busy) { opacity: 1; }
    #assistant .assistantAttachment { position: relative; }
    #assistant .assistantAttachment img { display: block; max-width: 6em; height: 3.2em; object-fit: cover; border-radius: .3em; }
    #assistant .assistantAttachment button { position: absolute; top: -.4em; right: -.4em; width: 1.4em; height: 1.4em; padding: 0; border: 0; border-radius: 50%; background: rgb(0 0 0 / 65%); color: #fff; font-size: .8em; line-height: 1; }

    #assistant .assistantFooter { flex: none; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .2em .8em; padding-top: .4em; border-top: 1px solid rgb(0 0 0 / 10%); font-size: .9em; }
    #assistant .assistantFooter > span { display: flex; flex-wrap: wrap; align-items: center; gap: .2em .7em; }
    #assistant .assistantFooter a { color: inherit; }
    #assistantTier { padding: 0 .5em; border-radius: 1em; background: var(--header); color: #fff; }

    #assistant .assistantViewHeader { display: flex; justify-content: space-between; align-items: center; padding-bottom: .45em; border-bottom: 1px solid rgb(0 0 0 / 15%); }
    #assistant .assistantChatRow { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: .1em .6em; padding: .45em .3em; border-bottom: 1px solid rgb(0 0 0 / 8%); }
    #assistant .assistantChatRow:hover, #assistant .assistantChatRow.current { background: rgb(0 0 0 / 4%); }
    #assistant .assistantChatRow.current .assistantChatTitle { font-weight: bold; }
    #assistant .assistantChatTitle { overflow: hidden; padding: 0; border: 0; background: none; color: inherit; text-align: left; text-overflow: ellipsis; white-space: nowrap; }
    #assistant .assistantChatRow :is(time, small) { font-size: .9em; opacity: .65; }
    #assistant .assistantChatRow small { grid-column: 1 / -1; }
    #assistant .assistantDelete { padding: 0 .2em; border: 0; background: none; opacity: .4; }
    #assistant .assistantDelete:is(:hover, :focus-visible) { opacity: 1; }
    #assistant .assistantEmpty { padding: 1em 0; opacity: .65; }

    #assistantKey h3 { margin: 0 0 .4em; font-size: 1.1em; }
    #assistantKey p { margin: 0 0 .5em; }
    #assistantKey .assistantFields { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: .45em .6em; margin: .8em 0 .4em; }
    #assistantKey .assistantFields :is(input, select) { width: 100%; box-sizing: border-box; }
    #assistantKey .assistantFields a { grid-column: 2; justify-self: start; color: inherit; font-size: .9em; }
    #assistantLocalHint { font-size: .9em; opacity: .8; }
    #assistantDiscoveryError { min-height: 1.2em; color: #a3262e; font-size: .9em; overflow-wrap: anywhere; }
    #assistant .assistantSheetActions { display: flex; justify-content: flex-end; gap: .5em; margin-top: .4em; }
  </style>`;function Ha(){let e=it.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``),t=`<div id="${L}" class="dialog stable">
    ${Va}
    <div id="assistantTranscript" role="log" aria-live="polite" aria-label="${a(`Assistant chat`)}"></div>

    <div id="assistantChats" hidden>
      <div class="assistantViewHeader">
        <strong>${a(`Chats`)}</strong>
        <button type="button" class="assistantLink" data-action="new-chat">+ ${a(`New chat`)}</button>
      </div>
      <div id="assistantChatList"></div>
    </div>

    <form id="assistantKey" hidden>
      <h3>${a(`Connect your AI key`)}</h3>
      <p>${a(`Unlimited questions, and I can read and edit this map. Your key stays in this browser and goes only to the provider. I run scripts in this page to read your map. Only use me on maps from sources you trust.`)}</p>
      <div class="assistantFields">
        <label for="assistantProvider">${a(`Provider`)}</label>
        <select id="assistantProvider">${e}</select>
        <label id="assistantModelLabel" for="assistantModel">${a(`Model`)}</label>
        <input id="assistantModel" list="assistantModels" autocomplete="off" spellcheck="false" />
        <label for="assistantApiKey" data-remote>${a(`API key`)}</label>
        <input id="assistantApiKey" type="password" autocomplete="off" data-remote />
        <a id="assistantKeyLink" target="_blank" rel="noopener noreferrer" data-remote>${a(`Where to get one`)}</a>
        <label for="assistantLocalUrl" data-local>${a(`Server`)}</label>
        <input id="assistantLocalUrl" autocomplete="off" spellcheck="false" data-local />
      </div>
      <datalist id="assistantModels"></datalist>
      <p id="assistantLocalHint" data-local>ⓘ ${a(`Local models need no key. Point to the server and enter the model name. Set the server's context window to at least 8k tokens (Ollama's num_ctx).`)}</p>
      <div id="assistantDiscoveryError" role="status"></div>
      <div class="assistantSheetActions">
        <button type="button" class="assistantButton" data-action="close-key">${a(`Cancel`)}</button>
        <button type="button" id="assistantDisconnect" class="assistantButton" data-action="disconnect">${a(`Disconnect`)}</button>
        <button type="submit" class="assistantButton assistantPrimary">${a(`Connect`)}</button>
      </div>
    </form>

    <div id="assistantContext" hidden></div>

    <div id="assistantNotice" role="status" hidden>
      <div id="assistantNoticeText"></div>
      <div id="assistantNoticeActions" class="assistantActions">
        <button type="button" id="assistantRetry" class="assistantButton" data-action="retry">${a(`Retry`)}</button>
        <button type="button" id="assistantNoticeSignIn" class="assistantButton" data-action="sign-in">${a(`Sign in`)}</button>
        <button type="button" id="assistantNoticeKey" class="assistantButton assistantPrimary" data-action="key"></button>
      </div>
      <div id="assistantLong">
        <p>${a(`This chat is getting long — each question re-sends all of it.`)}</p>
        <button type="button" class="assistantButton" data-action="new-chat">${a(`Start a new chat`)}</button>
      </div>
    </div>

    <div id="assistantComposer">
      <div id="assistantAttachments" hidden></div>
      <textarea id="assistantQuestion" rows="1" maxlength="${Ca}" aria-label="${a(`Your question`)}" placeholder="${a(`Ask a question…`)}"></textarea>
      <button id="assistantAsk" type="button"></button>
    </div>

    <div class="assistantFooter">
      <span>
        <a href="${Ea}" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="${Da}" target="_blank" rel="noopener noreferrer">Patreon</a>
        <a href="${Ta}" target="_blank" rel="noopener noreferrer">${a(`Policy`)}</a>
      </span>
      <span id="assistantAccount">
        <span id="assistantTier"></span>
        <span id="assistantStatus"></span>
        <button type="button" id="assistantSignIn" class="assistantLink" data-action="sign-in">${a(`Sign in`)}</button>
        <button type="button" id="assistantSignOut" class="assistantLink" data-action="sign-out">${a(`Sign out`)}</button>
        <button type="button" id="assistantUseKey" class="assistantLink" data-action="key"></button>
      </span>
    </div>
  </div>`;y(`dialogs`).insertAdjacentHTML(`beforeend`,t),J(L).addEventListener(`click`,Ua),J(`assistantAsk`).addEventListener(`click`,()=>B?So():void $());let n=J(`assistantQuestion`);n.addEventListener(`keydown`,e=>{e.key!==`Enter`||e.shiftKey||e.isComposing||(e.preventDefault(),B||$())}),n.addEventListener(`input`,()=>no(n)),n.addEventListener(`paste`,e=>{let t=Array.from(e.clipboardData?.files??[]).filter(e=>e.type.startsWith(`image/`));t.length&&(e.preventDefault(),yo(t))}),J(`assistantKey`).addEventListener(`submit`,e=>{e.preventDefault(),mo()}),vr.wire()}function Ua(e){let t=e.target.closest(`[data-action]`);if(!t||t.disabled)return;let{action:n,id:r,index:i,rating:a}=t.dataset;n===`new-chat`?Ka():n===`key`?po():n===`close-key`?Y(`chat`):n===`disconnect`?ho():n===`sign-in`?xt():n===`sign-out`?oo():n===`retry`?V?.retry?.():n===`open-chat`&&r?qa(r):n===`delete-chat`&&r?Ja(r):n===`apply`||n===`undo`||n===`redo`||n===`discard`?so(n,Number(i)):n===`rate`?fo(Number(i),a):n===`entity`&&r?I.openEntity(r):n===`command`&&r?I.runCommand(r):n===`mark`?co(Number(i)):n===`choose`?uo(Number(i),Number(t.dataset.choice)):n===`inset`?lo(Number(i)):n===`detach`&&bo(Number(i))}async function Wa(){try{await Mt()}catch{V={text:a(`Chats could not be loaded.`),retry:()=>void Wa()},X();return}let e=G();ja=P.id(),R=Pt(),(!K(R)||R?.tier!==e)&&(R=e?It(e,P.id(),P.name()):void 0),Ma=e,H=!0,V=null,X(),ro(),gt()&&e!==`key`&&ao()}function Ga(){let e=G();R=e?It(e,P.id(),P.name()):void 0,Ma=e,to(),I.clearMarks();let t=J(`assistantQuestion`);t.value=``,no(t),Y(`chat`)}function Ka(){!B&&H&&Ga()}function qa(e){R=Ft(e),to(),I.clearMarks(),Y(`chat`)}function Ja(e){Lt(e),R?.id===e&&(R=void 0,I.clearMarks()),Za()}function Y(e){z===`key`&&e!==`key`&&vr.cancelDiscovery(),z=e,X()}function X(e=!1){let t=!K(R);J(`assistantTranscript`).hidden=z!==`chat`,J(`assistantChats`).hidden=z!==`chats`,J(`assistantKey`).hidden=z!==`key`,J(`assistantComposer`).hidden=z!==`chat`||t,io();let n=v(`assistantOpenChats`);n&&(n.disabled=B||!H);let r=J(`assistantAsk`);r.className=B?`busy icon-cancel`:`icon-right-big`,r.setAttribute(`aria-label`,B?`Stop`:`Send`),r.title=B?`Stop`:`Send (Enter)`,z===`chat`&&Z(e),z===`chats`&&Za(),eo(),$a()}function Z(e=!1){if(!q){Ia=!0;return}let t=J(`assistantTranscript`),n=t.scrollTop,r=R?.items??[],i=G(),s=R?.mapId===P.id(),c=K(R),l=!B&&c,u=r.length?``:Ya(i);r.forEach((e,t)=>{e!==V?.item&&(u+=Xa(e,{index:t,live:s,canAsk:l}))}),H&&!c&&(R||i)&&(u+=`<div class="assistantItem assistantNoticeItem">${a(`Start a new chat to continue`)}
      <div class="assistantActions"><button type="button" class="assistantButton" data-action="new-chat">${a(`New chat`)}</button></div>
    </div>`),B&&(u+=`<div class="assistantTyping"><i></i><i></i><i></i>${o(Na)}…</div>`),t.innerHTML=u,t.scrollTop=e?n:t.scrollHeight}function Ya(e){let t=U?o(U):``,n=e?e===`key`?[a(`Hi! Ask about the Fantasy Map Generator or this map. I can read and propose changes to your map.`),t?a(`I can work on the note “{{note}}”.`,{note:t}):``]:[a(`Hi! Ask anything about the Fantasy Map Generator.`),t?a(`Connect your own AI key and I can write the note “{{note}}”, and read, answer questions about and edit this map, with no daily limit.`,{note:t}):a(`Connect your own AI key and I can read this map, answer questions about it and edit it, with no daily limit.`)]:[a(`The free Assistant runs only on the official site. Connect your own AI key or a local model to ask questions here.`)],r=e===`key`?``:`<div class="assistantActions"><button type="button" class="assistantButton assistantPrimary" data-action="key">🔑 ${a(`Connect your AI key`)}</button></div>`;return`<div class="assistantItem assistantWelcome">${n.filter(Boolean).map(e=>`<p>${e}</p>`).join(``)}${r}</div>`}function Xa(e,t){let{index:n,live:r}=t;if(e.kind===`question`)return`<div class="assistantItem assistantQuestion">${e.images?.length?`<div class="assistantQuestionImages">${e.images.map(e=>`<img src="${o(e)}" alt="${a(`Attached image`)}" />`).join(``)}</div>`:``}${o(e.text)}</div>`;if(e.kind===`answer`){let t=e.ratingId==null?``:`<div class="assistantFeedback">${[`up`,`down`].map(t=>`<button type="button" data-action="rate" data-index="${n}" data-rating="${t}" aria-pressed="${e.rating===t}" aria-label="${t===`up`?`Good answer`:`Bad answer`}">${t===`up`?`👍`:`👎`}</button>`).join(``)}</div>`;return`<div class="assistantItem assistantAnswer">${I.answer(e.text,r)}${t}</div>`}if(e.kind===`step`){let{result:t}=e,n=t?t.ok?a(`Read the map`):a(`Map read failed`):a(`Reading the map`),r=t?t.ok?[t.value,...t.logs].join(`
`):t.error?.message:``;return`<details class="assistantItem assistantStep${t&&!t.ok?` failed`:``}">
      <summary>${n}${t?` · ${t.ms} ms`:``}</summary>
      <pre>${o(e.code)}</pre>${r?`<pre>${o(r)}</pre>`:``}
    </details>`}return e.kind===`proposal`?ni.html(e.proposal,n,P.id()):e.kind===`divider`?`<div class="assistantDivider">${a(`New memory`)}</div>`:e.kind===`widget`?I.html(e.widget,t):`<div class="assistantItem assistantNoticeItem">${er(e.text)}</div>`}function Za(){let e=Nt();J(`assistantChatList`).innerHTML=e.length?e.map(Qa).join(``):`<div class="assistantEmpty">${a(`No chats yet.`)}</div>`}function Qa(t){let n=Pa(t),r=[o(t.mapName)+(t.mapId===P.id()?``:` (other map)`),t.tier===`key`?`🔑`:``,n?`${e(n)} tokens`:``].filter(Boolean).join(` · `),i=o(t.title),s=new Date(t.updated);return`<div class="assistantChatRow${t===R?` current`:``}">
    <button type="button" class="assistantChatTitle" data-action="open-chat" data-id="${t.id}" title="${i}">${i}</button>
    <time datetime="${s.toISOString()}" title="${s.toLocaleString()}">${Co(t.updated)}</time>
    <button type="button" class="assistantDelete icon-trash" data-action="delete-chat" data-id="${t.id}" aria-label="${a(`Delete chat {{- title}}`,{title:i})}"></button>
    <small>${r}</small>
  </div>`}function $a(){let t=G(),n=S();J(`assistantTier`).hidden=t!==`guest`&&t!==`member`,J(`assistantTier`).textContent=t===`member`?`Member`:`Guest`,J(`assistantStatus`).textContent=t===`key`?`${n.provider===`local`?`Local`:`🔑`} ${n.model} · ${e(Pa(R))} tokens`:t&&ka?wo(ka):``,J(`assistantSignIn`).hidden=t!==`guest`,J(`assistantSignOut`).hidden=t!==`member`,J(`assistantUseKey`).textContent=t===`key`?`Key`:`Use key`;for(let e of J(`assistantAccount`).querySelectorAll(`button`))e.disabled=B||!H}function eo(){let e=!!(R&&Vt(R)),t=!!V?.item,n=G();J(`assistantNotice`).hidden=z!==`chat`||!V&&!e,J(`assistantNoticeText`).hidden=!V,J(`assistantNoticeText`).innerHTML=V?er(V.text):``,J(`assistantRetry`).hidden=!V?.retry,J(`assistantNoticeSignIn`).hidden=!t||n!==`guest`,J(`assistantNoticeKey`).hidden=!t,J(`assistantNoticeKey`).textContent=n===`key`?`Key`:`🔑 ${a(`Connect your AI key`)}`,J(`assistantNoticeActions`).hidden=!V?.retry&&!t,J(`assistantLong`).hidden=!e;for(let e of J(`assistantNotice`).querySelectorAll(`button`))e.disabled=B}function Q(e){V=e,eo()}function to(){V=null}function no(e){e.style.height=``,e.value&&(e.style.height=`${e.scrollHeight}px`)}async function ro(){let e=await b.NotesEditor.current();U=e?e.name||e.id:null,io(),z===`chat`&&!R?.items.length&&Z()}function io(){J(`assistantContext`).textContent=U?`Note: ${U}`:``,J(`assistantContext`).hidden=z!==`chat`||!U}async function ao(){if(gt()&&G()!==`key`){try{ka=await bt()}catch(e){ka=e instanceof w&&e.code===`unauthorized`?await bt().catch(()=>null):null}H&&Ma!==G()&&Ka(),$a()}}async function oo(){await St(),Ka(),ao()}function so(e,t){let n=R,r=n?.items[t];if(n&&r?.kind===`proposal`){try{e===`discard`?A.discard(r.proposal):A.run(e,r.proposal,P.id())||Q({text:a(e===`undo`?`The map changed since; Undo is unavailable.`:`The map changed since; Apply is unavailable.`)}),zt(n)}catch(e){Q({text:i(e)})}R===n&&z===`chat`&&(Z(),ro())}}function co(e){let t=R?.items[e];t?.kind===`widget`&&t.widget.type===`entities`&&(I.toggleMarks(t.widget),Z(!0))}function lo(e){let t=R?.items[e];t?.kind===`widget`&&t.widget.type===`inset`&&I.revealInset(t.widget)}async function uo(e,t){let n=R,r=n?.items[e];if(!n||r?.kind!==`widget`||r.widget.type!==`choices`||r.widget.picked!==void 0)return;let{widget:i}=r,a=i.choices[t];if(!a)return;if(!a.operations){if(B||!K(n))return;i.picked=t,J(`assistantQuestion`).value=a.label,$();return}if(await A.prepare(a.operations),i.picked!==void 0)return;let o=n.items.filter(e=>e.kind===`proposal`).length,s=A.propose(a.label,a.operations,o+1,P.id());typeof s==`string`?Q({text:s}):(i.picked=t,Rt(n,{kind:`proposal`,proposal:s}),Z())}async function fo(e,t){let n=R,r=n?.items[e];if(!n||r?.kind!==`answer`||r.ratingId==null||r.rating===t)return;let i=e=>{r.rating=e,zt(n),R===n&&z===`chat`&&Z()},a=r.rating;i(t);try{await yt(r.ratingId,t)}catch(e){i(a),e instanceof w&&e.code===`unauthorized`&&ao()}}function po(){B||(Y(`key`),vr.fill())}function mo(){let e=rt();vr.save()&&(e?Y(`chat`):Ka())}function ho(){at(),Ka(),ao()}async function $(){if(B||!K(R))return;let e=J(`assistantQuestion`),t=W,n=To(e.value)??(t.length&&!e.value.trim()?``:null);if(n===null)return;if(t.length&&R.tier!==`key`)return Q({text:vo});e.value=``,no(e),W=[],xo(),to(),B=!0,Na=`Thinking`;let r=new AbortController;Oa=r;let a=R,o=a.items.length,s=()=>R===a,c=e=>{Rt(a,e),s()&&(e.kind===`notice`&&Q({text:e.text,item:e}),e.kind===`answer`&&V&&(to(),eo()),z===`chat`&&Z())},l=e=>{Na=e,s()&&z===`chat`&&Z()};X();try{a.tier===`key`?await Vn(a,n,c,r.signal,{tools:P.tools(a),context:()=>P.context(a),onStatus:l,images:t}):await Ct(a,n,c,r.signal)}catch(e){if(!r.signal.aborted){let r={kind:`notice`,text:i(e)};Rt(a,r),R===a&&Q({text:r.text,item:r,retry:()=>_o(a,n,t,o)})}}finally{B=!1,Oa=null,zt(a),X(),q&&J(`assistantQuestion`).focus(),ao()}}async function go(e){Ra(),await Aa,K(R)?z!==`chat`&&Y(`chat`):Ga();let t=J(`assistantQuestion`),n=t.value;if(B)n.trim()||(t.value=e),no(t);else{t.value=e;let r=$();t.value=n,no(t),await r}}function _o(e,t,n,r){if(B||R!==e)return;let i=e.items.slice(r);i.every(e=>e.kind===`question`||e.kind===`notice`)?e.items.splice(r):i.at(-1)?.kind===`notice`&&e.items.pop(),J(`assistantQuestion`).value=t,W=n,$()}var vo=a(`Images need your own AI key with a vision model: the free Assistant reads text only.`);async function yo(e){if(G()!==`key`)return Q({text:vo});let t=()=>Q({text:a(`Image limit per question: {{max}}`,{max:wa})});e.length>wa-W.length&&t();for(let n of e.slice(0,Math.max(wa-W.length,0)))try{let e=await ur.read(n);W.length<wa?W.push(e):t()}catch(e){Q({text:i(e)})}xo()}function bo(e){W.splice(e,1),xo(),J(`assistantQuestion`).focus()}function xo(){let e=J(`assistantAttachments`);e.hidden=!W.length,e.innerHTML=W.map((e,t)=>`<span class="assistantAttachment"><img src="${o(e)}" alt="${a(`Attached image {{number}}`,{number:t+1})}" /><button type="button" data-action="detach" data-index="${t}" aria-label="${a(`Remove image {{number}}`,{number:t+1})}">✕</button></span>`).join(``)}function So(){Oa?.abort()}function Co(e){let t=Math.round((Date.now()-e)/6e4);if(t<1)return`just now`;if(t<60)return`${t} min ago`;let n=Math.round(t/60);if(n<24)return`${n} h ago`;let r=Math.round(n/24);return r===1?`yesterday`:r<30?`${r} days ago`:new Date(e).toLocaleDateString()}window.addEventListener(`map:generated`,()=>{H&&ja!==P.id()&&(ja=P.id(),So(),Ga(),ro())}),window.addEventListener(`notes:context-changed`,()=>{Fa()&&ro()});var wo=e=>e.remaining?`${e.remaining} question${e.remaining===1?``:`s`} left today`:a(`No questions left today`);function To(e){let t=e.trim();return t&&t.length<=Ca?t:null}var Eo={open:Ra,toggle:La,ask:go};export{Eo as Assistant};
import{i as e}from"./index-J388_yXx.js";import{c as t,n}from"./options-model-Cj3O8K4p.js";import{l as r}from"./file-utils-CmE_irX5.js";import{i,r as a}from"./node-utils-BA3zRxIe.js";import{t as o}from"./dialog-BYT3Byo1.js";import{n as s,p as c}from"./app-8AGFuk3c.js";var l=`loreEditor`,u=`
  <style>
    #${l} .le { display: grid; grid-template-columns: 1em 5.6em minmax(0, 1fr) 1.2em; gap: .3em; align-items: center; width: 23em; }
    #${l} .le > label[for="loreDescription"] { align-self: start; padding-top: .35em; }
    #${l} .le-era { display: flex; align-items: center; gap: .4em; min-width: 0; }
    #${l} .le-era > input:first-child { flex: 1; min-width: 0; }
    #${l} .le-era > input:last-child { flex: 0 0 3.4em; }
    #${l} input, #${l} textarea { width: 100%; box-sizing: border-box; font: inherit; }
    #${l} textarea { resize: vertical; }
    #${l} .le > i { cursor: pointer; justify-self: center; }
    #${l} .le > i[data-locked] { font-size: .8em; color: #626573; }
  </style>

  <div class="le">
    <i data-locked="0" id="lock_mapName" class="icon-lock-open"></i>
    <label for="loreMapName">${e(`Map name`)}:</label>
    <input
      id="loreMapName"
      data-tip="${e(`Name of the map. Used to name the files it is downloaded as`)}"
      autocorrect="off"
      spellcheck="false"
      type="text"
    />
    <i data-tip="${e(`Generate a new map name`)}" id="loreMapNameRegenerate" class="icon-arrows-cw"></i>

    <i data-locked="0" id="lock_year" class="icon-lock-open"></i>
    <label for="loreYear">${e(`Year`)}:</label>
    <input
      id="loreYear"
      data-tip="${e(`Current year. Dates state history and battle reports`)}"
      type="number"
      step="1"
    />
    <span></span>

    <i data-locked="0" id="lock_era" data-ids="era,eraShort" class="icon-lock-open"></i>
    <label for="loreEra">${e(`Era`)}:</label>
    <span class="le-era" data-tip="${e(`Name of the era the current year belongs to, and its abbreviation`)}">
      <input id="loreEra" autocorrect="off" spellcheck="false" type="text" placeholder="${e(`Winter Era`)}" />
      <input id="loreEraShort" autocorrect="off" spellcheck="false" type="text" placeholder="${e(`WE`)}" />
    </span>
    <i data-tip="${e(`Generate a new era`)}" id="loreEraRegenerate" class="icon-arrows-cw"></i>

    <span></span>
    <label for="loreDescription">${e(`Description`)}:</label>
    <textarea
      id="loreDescription"
      rows="5"
      data-tip="${e(`Your own description of this world. Free text, carried in the map file`)}"
      placeholder="${e(`Describe the map, its age, its peoples – whatever the map should carry with it.`)}"
    ></textarea>
    <span></span>
  </div>
`;function d(){o.closeAll(`#loreEditor, .stable`),f(),o.open(l,{title:e(`Setup Lore`),width:`auto`,minWidth:340,position:{my:`right top`,at:`right-10 top+10`,of:`svg`}})}function f(){o.destroy(l),a(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${l}" class="dialog stable">${u}</div>`),m(),h(),c(a(l),p)}function p(e){let{name:t,calendar:n}=options.map.lore;if(e===`mapName`)return t;if(e===`year`)return n.year;if(e===`era`)return n.era;if(e===`eraShort`)return n.eraShort}function m(){let{name:e,description:t,calendar:n}=options.map.lore;a(`loreMapName`).value=e,a(`loreYear`).value=String(n.year),a(`loreEra`).value=n.era,a(`loreEraShort`).value=n.eraShort,a(`loreDescription`).value=t}function h(){a(l).addEventListener(`change`,g),a(`loreMapNameRegenerate`).addEventListener(`click`,_),a(`loreEraRegenerate`).addEventListener(`click`,v)}function g(e){let r=e.target,i=r.value,{lore:o}=options.map;switch(r.id){case`loreMapName`:if(!i.trim())return;s.rename(i),t.set(`mapName`,o.name);break;case`loreYear`:if(!i||Number.isNaN(+i))return;s.setYear(+i),t.set(`year`,o.calendar.year);break;case`loreEra`:if(!i.trim())return;s.setEra(i),t.set(`era`,o.calendar.era),t.set(`eraShort`,o.calendar.eraShort),a(`loreEraShort`).value=o.calendar.eraShort;break;case`loreEraShort`:if(!i.trim())return;s.setEra(o.calendar.era,i),t.set(`eraShort`,o.calendar.eraShort);break;case`loreDescription`:s.setDescription(i);break;default:return}n.save()}function _(){t.clear(`mapName`),s.rename(r.getMapName()),n.save(),m()}function v(){t.clear(`era`),t.clear(`eraShort`),s.setEra(r.getEra()),n.save(),m()}function y(){i(l)&&m()}var b={open:d,refresh:y};export{b as LoreEditor};
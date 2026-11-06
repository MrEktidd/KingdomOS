import{t as e}from"./index-DOQT8b0l.js";var t=[],n=100;function r(r=Date.now()){t.push({seed:options.map.seed,width:options.map.graph.width,height:options.map.graph.height,template:options.generation.template,created:r,registeredAt:Date.now()}),t.length>n&&t.splice(0,t.length-n),e.info(` Seed: ${options.map.seed}
    Map size: ${options.map.graph.width}x${options.map.graph.height} px
    Points: ${grid.points.length}
    Cells: ${pack.cells.i.length}
    Map size: ${options.map.geography.mapSize}%
    States: ${pack.states.length-1}
    Provinces: ${pack.provinces.length-1}
    Burgs: ${pack.burgs.length-1}
    Religions: ${pack.religions.length-1}
    Culture set: ${options.map.cultures.set}
    Cultures: ${pack.cultures.length-1}`),window.dispatchEvent(new CustomEvent(`map:generated`,{detail:{seed:options.map.seed,mapId:r}}))}export{r as n,t};
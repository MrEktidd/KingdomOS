import{i as e}from"./index-J388_yXx.js";import{c as t,n}from"./options-model-Cj3O8K4p.js";import{n as r,t as i}from"./layers-D3_jdNGw.js";import{r as a,t as o}from"./node-utils-BA3zRxIe.js";import{t as s}from"./dialog-BYT3Byo1.js";import{t as c}from"./temperature-generator-Cji0DqcU.js";import{p as l}from"./app-8AGFuk3c.js";import{r as u}from"./controls-BoAobDe5.js";var d=`unitsEditor`,f=`
    <div id="unitsBody" style="margin-left: 1.1em">
      <div class="unitsHeader" style="margin-top: 0.4em">
        <span class="icon-map-signs"></span>
        <label>${e(`Distance`)}:</label>
      </div>
      <div data-tip="${e(`Select a distance unit or provide a custom name`)}">
        <label>${e(`Distance unit`)}:</label>
        <select id="distanceUnitInput">
          <option value="mi" selected>${e(`Mile (mi)`)}</option>
          <option value="km">${e(`Kilometer (km)`)}</option>
          <option value="lg">${e(`League (lg)`)}</option>
          <option value="vr">${e(`Versta (vr)`)}</option>
          <option value="nmi">${e(`Nautical mile (nmi)`)}</option>
          <option value="nlg">${e(`Nautical league (nlg)`)}</option>
          <option value="custom_name">${e(`Custom name`)}</option>
        </select>
      </div>
      <div data-tip="${e(`Select how many distance units are in one pixel`)}">
        <i data-locked="0" id="lock_distanceScale" class="icon-lock-open"></i>
        <slider-input id="distanceScaleInput" min=".01" max="20" step=".1" value="3">
          <label>${e(`1 map pixel`)}:</label>
        </slider-input>
      </div>
      <div data-tip="${e(`Area unit name, type “square” to add ² to the distance unit`)}">
        <label>${e(`Area unit`)}:</label>
        <input id="areaUnit" type="text" value="square" />
      </div>
      <div class="unitsHeader">
        <span class="icon-signal"></span>
        <label>${e(`Altitude`)}:</label>
      </div>
      <div data-tip="${e(`Select an altitude unit or provide a custom name`)}">
        <label>${e(`Height unit`)}:</label>
        <select id="heightUnit">
          <option value="ft" selected>${e(`Feet (ft)`)}</option>
          <option value="m">${e(`Meters (m)`)}</option>
          <option value="f">${e(`Fathoms (f)`)}</option>
          <option value="custom_name">${e(`Custom name`)}</option>
        </select>
      </div>
      <div
        data-tip="${e(`Set height exponent, i.e. a value for altitude change sharpness. Altitude affects temperature and hence biomes`)}"
      >
        <slider-input
          id="heightExponentInput"
         
          min="1.5"
          max="2.2"
          step=".01"
          value="2"
        >
          <label>${e(`Exponent`)}:</label>
        </slider-input>
      </div>
      <div class="unitsHeader" data-tip="${e(`Select Temperature scale`)}">
        <span class="icon-temperature-high"></span>
        <label>${e(`Temperature`)}:</label>
      </div>
      <div>
        <label>${e(`Temperature scale`)}:</label>
        <select id="temperatureScale">
          <option value="°C" selected>${e(`degree Celsius (°C)`)}</option>
          <option value="°F">${e(`degree Fahrenheit (°F)`)}</option>
          <option value="K">${e(`Kelvin (K)`)}</option>
          <option value="°R">${e(`degree Rankine (°R)`)}</option>
          <option value="°De">${e(`degree Delisle (°De)`)}</option>
          <option value="°N">${e(`degree Newton (°N)`)}</option>
          <option value="°Ré">${e(`degree Réaumur (°Ré)`)}</option>
          <option value="°Rø">${e(`degree Rømer (°Rø)`)}</option>
        </select>
      </div>
      <div class="unitsHeader">
        <span class="icon-male"></span>
        <label>${e(`Population`)}:</label>
      </div>
      <div data-tip="${e(`Set how many people are in one population point`)}">
        <slider-input
          id="populationRateInput"
         
          min="10"
          max="10000"
          step="10"
          value="1000"
        >
          <label>${e(`1 population point`)}:</label>
        </slider-input>
      </div>
      <div data-tip="${e(`Set urban population modifier. Change to increase or decrease burgs population`)}">
        <slider-input id="urbanizationInput" min=".01" max="5" step=".01" value="1">
          <label>${e(`Urbanization rate`)}:</label>
        </slider-input>
      </div>
      <div data-tip="${e(`Set urban density: average population per building in Medieval Fantasy City Generator`)}">
        <slider-input id="urbanDensityInput" min="1" max="200" step="1" value="10">
          <label>${e(`Urban density`)}:</label>
        </slider-input>
      </div>
    </div>
    <div id="unitsBottom">
      <button id="unitsAltitudeLegend" data-tip="${e(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="unitsRestore" data-tip="${e(`Reset to default`)}" class="icon-ccw"></button>
    </div>
`;function p(){s.closeAll(`#unitsEditor, .stable`),m(),s.open(`unitsEditor`,{title:e(`Units Editor`),position:{my:`right top`,at:`right-10 top+10`,of:`svg`}})}function m(){s.destroy(d),a(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${d}" class="dialog stable">${f}</div>`),y(),b(),l(a(d),g)}var h=[`distanceUnit`,`distanceScale`,`areaUnit`,`heightUnit`,`heightExponent`,`temperatureScale`,`populationRate`,`urbanization`,`urbanDensity`];function g(e){let{distance:t,area:n,height:r,temperature:i,population:a}=options.map.units;if(e===`distanceUnit`)return t.unit;if(e===`distanceScale`)return t.scale;if(e===`areaUnit`)return n.unit;if(e===`heightUnit`)return r.unit;if(e===`heightExponent`)return r.exponent;if(e===`temperatureScale`)return i.unit;if(e===`populationRate`)return a.scale;if(e===`urbanization`)return a.urbanization.rate;if(e===`urbanDensity`)return a.urbanization.density}var _=[`areaUnit`,`heightUnit`,`temperatureScale`],v=e=>a(_.includes(e)?e:`${e}Input`);function y(){o(a(`distanceUnitInput`),options.map.units.distance.unit),o(a(`heightUnit`),options.map.units.height.unit);for(let e of h)v(e).value=String(g(e))}function b(){a(d).addEventListener(`change`,x),a(`unitsAltitudeLegend`).addEventListener(`click`,r.toggleAltitude),a(`unitsRestore`).addEventListener(`click`,w)}function x(e){let a=e.target,o=a.value,{units:s}=options.map;switch(a.id){case`distanceUnitInput`:if(o===`custom_name`){S(a,`distance`);return}s.distance.unit=o,t.set(`distanceUnit`,o),C();break;case`distanceScaleInput`:s.distance.scale=+o,t.set(`distanceScale`,+o),C();break;case`areaUnit`:s.area.unit=o,t.set(`areaUnit`,o);break;case`heightUnit`:if(o===`custom_name`){S(a,`height`);return}s.height.unit=o,t.set(`heightUnit`,o);break;case`heightExponentInput`:s.height.exponent=+o,t.set(`heightExponent`,+o),c.generate(),i.draw(`temperature`);break;case`temperatureScale`:s.temperature.unit=o,t.set(`temperatureScale`,o),i.draw(`temperature`);break;case`populationRateInput`:s.population.scale=+o,t.set(`populationRate`,+o);break;case`urbanizationInput`:s.population.urbanization.rate=+o,t.set(`urbanization`,+o);break;case`urbanDensityInput`:s.population.urbanization.density=+o,t.set(`urbanDensity`,+o);break;default:return}r.refreshAltitude(),n.save()}function S(i,a){y(),s.prompt(e(a===`distance`?`Provide a custom name for a distance unit`:`Provide a custom name for a height unit`),{default:``},e=>{let o=String(e);o&&(i.options.add(new Option(o,o,!1,!0)),a===`distance`?(options.map.units.distance.unit=o,t.set(`distanceUnit`,o),C()):(options.map.units.height.unit=o,t.set(`heightUnit`,o),r.refreshAltitude()),n.save())})}function C(){i.draw(`scaleBar`),u()}function w(){options.map.units=n.getDefaultOptions().map.units;for(let e of h)t.clear(e);n.save(),y(),c.generate(),C(),r.refreshAltitude()}var T={open:p};export{T as UnitsEditor};
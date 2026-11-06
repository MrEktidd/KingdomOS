import{i as e,r as t,t as n}from"./index-DfkEhdNk.js";import{f as r}from"./notices-CsL9NM9q.js";import{r as i}from"./node-utils-BD0SusgU.js";import{t as a}from"./dialog-BW-Ar0Nf.js";import{o}from"./tooltips-BSJdaB-v.js";var s={openai:{keyLink:`https://platform.openai.com/account/api-keys`,generate:f},anthropic:{keyLink:`https://console.anthropic.com/account/keys`,generate:p},ollama:{keyLink:`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Ollama-text-generation`,generate:m}},c=`gpt-5.6-luna`,l={"gpt-5.6-luna":`openai`,"gpt-5.6-terra":`openai`,"gpt-5.6-sol":`openai`,"gpt-5-mini":`openai`,"gpt-5-nano":`openai`,"claude-opus-4-8":`anthropic`,"claude-sonnet-5":`anthropic`,"claude-haiku-4-5":`anthropic`,"ollama (local models)":`ollama`},u=new Set([`gpt-5.6-luna`,`gpt-5.6-terra`,`gpt-5.6-sol`,`gpt-5-mini`,`gpt-5-nano`,`claude-opus-4-8`,`claude-sonnet-5`]),d=`I'm working on my fantasy map.`;async function f({key:e,model:t,prompt:n,temperature:r,onContent:i}){let a={"Content-Type":`application/json`,Authorization:`Bearer ${e}`},o={model:t,messages:[{role:`system`,content:d},{role:`user`,content:n}],stream:!0};u.has(t)||(o.temperature=r),await h(await fetch(`https://api.openai.com/v1/chat/completions`,{method:`POST`,headers:a,body:JSON.stringify(o)}),e=>{let t=e.choices?.[0]?.delta?.content;t&&i(t)})}async function p({key:e,model:t,prompt:n,temperature:r,onContent:i}){await h(await fetch(`https://api.anthropic.com/v1/messages`,{method:`POST`,headers:{"Content-Type":`application/json`,"x-api-key":e,"anthropic-version":`2023-06-01`,"anthropic-dangerous-direct-browser-access":`true`},body:JSON.stringify({model:t,system:d,messages:[{role:`user`,content:n}],max_tokens:4096,stream:!0,...u.has(t)?{}:{temperature:r}})}),e=>{let t=e.delta?.text;t&&i(t)})}async function m({key:e,model:t,prompt:n,temperature:r,onContent:i}){await h(await fetch(`http://localhost:11434/api/generate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({model:e,prompt:n,system:d,options:{temperature:r},stream:!0})}),e=>{e.response&&i(e.response)})}async function h(t,r){if(!t.ok){let r=e(`Failed to generate ({{status}} {{statusText}})`,{status:t.status,statusText:t.statusText});try{let e=await t.json();r=e.error?.message||e.error||r}catch(e){n.error(`Failed to parse AI provider error response`,e)}throw Error(r)}if(!t.body)throw Error(`Response has no body to stream`);let i=t.body.getReader(),a=new TextDecoder(`utf-8`),o=``;for(;;){let{done:e,value:t}=await i.read();if(e)break;o+=a.decode(t,{stream:!0});let s=o.split(`
`);for(let e=0;e<s.length-1;e++){let t=s[e].trim();if(t){if(t===`data: [DONE]`)break;try{r(t.startsWith(`data: `)?JSON.parse(t.slice(6)):JSON.parse(t))}catch(e){n.error(`Failed to parse line:`,t,e)}}}o=s.at(-1)??``}}function g(t,n){_(),v(t),a.open(`aiGenerator`,{title:e(`AI Text Generator`),position:{my:`center`,at:`center`,of:`svg`},buttons:[{label:e(`Generate`),onClick:e=>{y(e.target)}},{label:e(`Apply`),onClick:()=>{let t=i(`aiGeneratorResult`).value;if(!t)return o(e(`No result to apply`),!0,`error`,4e3);n(t),a.close(`aiGenerator`)}},{label:e(`Close`),onClick:()=>{a.close(`aiGenerator`)}}]})}function _(){a.destroy(`aiGenerator`);let n=`<div id="aiGenerator" class="dialog stable">
    <div style="display: flex; flex-direction: column; gap: 0.3em; width: 100%">
      <textarea id="aiGeneratorResult" placeholder="${e(`Generated text will appear here`)}" cols="30" rows="10"></textarea>
      <textarea id="aiGeneratorPrompt" placeholder="${e(`Type a prompt here`)}" cols="30" rows="5"></textarea>
      <div style="display: flex; align-items: center; gap: 1em">
        <label for="aiGeneratorModel"
          >${e(`Model`)}:
          <select id="aiGeneratorModel"></select>
        </label>
        <label
          for="aiGeneratorTemperature"
          data-tip="${e(`Temperature controls response randomness; higher values mean more creativity, lower values mean more predictability`)}"
        >
          ${e(`Temperature`)}:
          <input id="aiGeneratorTemperature" type="number" min="-1" max="2" step=".1" class="icon-key" />
        </label>
        <label for="aiGeneratorKey"
          >${e(`Key`)}:
          <input
            id="aiGeneratorKey"
            placeholder="${e(`Enter API key`)}"
            class="icon-key"
            data-tip="${t(e(`Enter API key`),e(`Note: the Generator doesn't store the key or any generated data`))}"
          />
          <button
            id="aiGeneratorKeyHelp"
            class="icon-help-circled"
            data-tip="${e(`Click to see the usage instructions`)}"
          ></button>
        </label>
      </div>
    </div>
  </div>`;i(`dialogs`).insertAdjacentHTML(`beforeend`,n),i(`aiGeneratorKeyHelp`).addEventListener(`click`,()=>{let e=l[i(`aiGeneratorModel`).value];r(s[e].keyLink)})}function v(e){i(`aiGeneratorResult`).value=``,i(`aiGeneratorPrompt`).value=e,i(`aiGeneratorTemperature`).value=localStorage.getItem(`fmg-ai-temperature`)||`1`;let t=i(`aiGeneratorModel`);t.options.length=0,Object.keys(l).forEach(e=>{t.options.add(new Option(e,e))}),t.value=localStorage.getItem(`fmg-ai-model`)??``,(!t.value||!l[t.value])&&(t.value=c);let n=l[t.value];i(`aiGeneratorKey`).value=localStorage.getItem(`fmg-ai-kl-${n}`)||``}async function y(t){let n=i(`aiGeneratorKey`).value;if(!n)return o(e(`Enter API key`),!0,`error`,4e3);let r=i(`aiGeneratorModel`).value;if(!r)return o(e(`Please select a model`),!0,`error`,4e3);localStorage.setItem(`fmg-ai-model`,r);let a=l[r];localStorage.setItem(`fmg-ai-kl-${a}`,n);let c=i(`aiGeneratorPrompt`).value;if(!c)return o(e(`Please enter a prompt`),!0,`error`,4e3);let u=i(`aiGeneratorTemperature`).valueAsNumber;if(Number.isNaN(u))return o(e(`Temperature must be a number`),!0,`error`,4e3);localStorage.setItem(`fmg-ai-temperature`,String(u));try{t.disabled=!0;let e=i(`aiGeneratorResult`);e.disabled=!0,e.value=``,await s[a].generate({key:n,model:r,prompt:c,temperature:u,onContent:t=>{e.value+=t}})}catch(t){let n=t instanceof Error&&t.message||String(t)||e(`Failed to generate text`);return o(n,!0,`error`,4e3)}finally{t.disabled=!1,i(`aiGeneratorResult`).disabled=!1}}var b={open:g};export{b as AiGenerator};
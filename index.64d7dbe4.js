function e(){return{breedsSelect:document.querySelector(".breed-select"),loaderInfo:document.querySelector(".loader"),errorData:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")}}const n=e();function t(){const e=`https://api.thecatapi.com/v1/images/search?breed_ids=${n.breedsSelect.value}`;return fetch(e,{headers:{"x-api-key":"live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e"}}).then((e=>e.json()))}const s=e();function d(e){const n=e.map((({url:e,breeds:n})=>`<div class="cat-info">\n            <img src="${e}">\n            <h2>"${n[0].name}"</h2>\n            <p>"${n[0].description}"</p>\n            <p>"${n[0].temperament}"</p>\n          </div>`)).join(" ");console.log(n),s.catInfo.innerHTML=n,s.loaderInfo.classList.add("is-hidden")}const o=e();o.errorData.classList.add("is-hidden"),o.loaderInfo.classList.add("is-hidden"),window.addEventListener("load",(function(){o.loaderInfo.classList.remove("is-hidden"),o.breedsSelect.classList.add("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_JJWPSVYeymspnNURrwJNrEoFQ9xEFTfnXeyuAKVCVICBuPkGG95Ew7XOSCY83E6e"}}).then((e=>e.json())).then((e=>{storedBreeds=e.filter((e=>{var n;return null!=(null===(n=e.image)||void 0===n?void 0:n.url)}));for(let e=0;e<storedBreeds.length;e++){const n=storedBreeds[e];let t=document.createElement("option");n.image&&(t.value=`${n.id}`,t.innerHTML=`${n.name}`,o.breedsSelect.appendChild(t))}})).catch((function(e){console.log(e)})),o.loaderInfo.classList.add("is-hidden"),o.breedsSelect.classList.remove("is-hidden")})),o.breedsSelect.addEventListener("change",(function(){o.loaderInfo.classList.remove("is-hidden"),o.catInfo.classList.add("is-hidden"),o.catInfo.innerHTML=" ",t().then((e=>{d(e)})).catch((function(e){console.log(e)}))}));
//# sourceMappingURL=index.64d7dbe4.js.map
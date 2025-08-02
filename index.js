import{a as d,S as m,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51591444-0f19b29ad542d1c79032d94a2",y="https://pixabay.com/api/";async function h(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(y,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${p}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function w(){l.classList.add("visible")}function S(){l.classList.remove("visible")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",async i=>{i.preventDefault();const r=P.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}v(),w();try{const o=await h(r);if(!o.hits.length){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}catch(o){a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{S()}});
//# sourceMappingURL=index.js.map

import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */function d(){return`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,0)}`}const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");t.disabled=!0;e.addEventListener("click",l);function l(o){if(o){let a=function(r){r&&clearInterval(n),e.disabled=!1,t.disabled=!0};const n=setInterval(()=>{document.body.style.backgroundColor=d()},1e3);e.disabled=!0,t.disabled=!1,t.addEventListener("click",a)}}
//# sourceMappingURL=commonHelpers.js.map
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const d of t)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const d={};return t.integrity&&(d.integrity=t.integrity),t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?d.credentials="include":t.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(t){if(t.ep)return;t.ep=!0;const d=r(t);fetch(t.href,d)}})();const f=e=>{e.classList.contains("filter-toDo")?(e.classList.remove("filter-toDo"),e.classList.add("filter-inProgress")):e.classList.contains("filter-inProgress")?(e.classList.remove("filter-inProgress"),e.classList.add("filter-done")):(e.classList.remove("filter-done"),e.classList.add("filter-toDo"))};function y(e){e.parentNode.parentNode.style.transform="translateY(-35px)",e.parentNode.parentNode.style.animationTimingFunction="linear",setTimeout(()=>{e.parentNode.parentNode.remove()},180)}document.addEventListener("click",e=>{e.target.classList.contains("delete-btn")&&(y(e.target),savedCards())});const L=document.getElementById("tasks-display");function g(e,n,r){return{name:e,description:n,dueDate:r}}function p(e){let n=document.createElement("article");n.classList.add("card");let r=document.createElement("div");r.classList.add("card-header");let a=document.createElement("h2");a.textContent=e.name,a.classList.add("card-name");let t=document.createElement("span");t.classList.add("filter"),t.classList.add("filter-toDo"),t.addEventListener("click",()=>{f(t)}),n.appendChild(r),r.appendChild(a),r.appendChild(t);let d=document.createElement("div");d.classList.add("card-main");let o=document.createElement("p");o.textContent=e.description,o.classList.add("card-description"),n.appendChild(d),d.appendChild(o);let s=document.createElement("div");s.classList.add("card-footer"),document.createElement("svg");let c=document.createElement("span");c.textContent=e.dueDate,c.classList.add("remaining-time");let i=document.createElement("button");i.textContent="x",i.classList.add("delete-btn"),s.appendChild(c),s.appendChild(i),n.appendChild(s),L.appendChild(n)}const E=document.getElementById("create-card-button");E.addEventListener("click",()=>{const e=document.getElementById("name"),n=document.getElementById("description"),r=document.getElementById("due-date"),a=e.value,t=n.value,d=r.value;if(d){let o=new Date(d),s=new Date,c=o.getTime()-s.getTime(),i=Math.floor(c/(1e3*3600*24));const m=g(a,t,i+" days remaining");p(m),saveCards(m)}else alert("Please enter a deadline !");e.value="",n.value="",r.value=""});document.addEventListener("DOMContentLoaded",()=>{getCards().forEach(n=>{p(n)})});const v=document.querySelector(".button-modale"),C=document.querySelector("body"),l=C.querySelector("header"),h=document.getElementById("create-card-button"),B=document.getElementById("close-modale"),D=document.getElementById("footer-addbtn");v.addEventListener("click",()=>{l.classList.remove("hidden")});h.addEventListener("click",()=>{l.classList.add("hidden")});B.addEventListener("click",()=>{l.classList.add("hidden")});D.addEventListener("click",()=>{l.classList.remove("hidden")});function b(){const e=Array.from(document.querySelectorAll(".card"));e.sort((r,a)=>{const t=r.querySelector(".card-name").textContent,d=a.querySelector(".card-name").textContent;return t.localeCompare(d)});const n=document.getElementById("tasks-display");n.innerHTML="",e.forEach(r=>n.appendChild(r))}function u(e){const n=e.match(/(\d+) days remaining/);return n?parseInt(n[1]):0}function I(){const e=Array.from(document.querySelectorAll(".card"));e.sort((r,a)=>{const t=u(r.querySelector(".remaining-time").textContent),d=u(a.querySelector(".remaining-time").textContent);return t-d});const n=document.getElementById("tasks-display");n.innerHTML="",e.forEach(r=>n.appendChild(r))}const T=document.getElementById("sortName-btn");T.addEventListener("click",b);const N=document.getElementById("sortTime-btn");N.addEventListener("click",I);
/* Medición y consentimiento de zetio.app.
   1. GTM_ID es el contenedor de Google Tag Manager de zetio.app. Si se deja en GTM-XXXXXXX no se carga nada ni aparece el aviso de cookies.
   2. Los píxeles de Google Ads, Meta y TikTok se configuran dentro de Tag Manager, no en este archivo. */
(function(){
  var GTM_ID="GTM-PLPQQHC2";

  var ready=/^GTM-[A-Z0-9]+$/.test(GTM_ID)&&GTM_ID!=="GTM-XXXXXXX";
  var KEY="zetio_consent";
  var dl=window.dataLayer=window.dataLayer||[];
  function gtag(){dl.push(arguments)}
  function read(k){try{return localStorage.getItem(k)}catch(e){return null}}
  function write(k,v){try{localStorage.setItem(k,v)}catch(e){}}
  function consent(v){
    gtag("consent","update",{ad_storage:v,ad_user_data:v,ad_personalization:v,analytics_storage:v});
  }

  /* Consent Mode v2: todo negado hasta que la persona acepte */
  gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied",wait_for_update:500});
  var saved=read(KEY);
  if(saved==="granted")consent("granted");

  if(ready){
    dl.push({"gtm.start":Date.now(),event:"gtm.js"});
    var s=document.createElement("script");s.async=true;
    s.src="https://www.googletagmanager.com/gtm.js?id="+GTM_ID;
    document.head.appendChild(s);
    if(!saved)banner();
  }

  function banner(){
    var b=document.createElement("div");
    b.setAttribute("role","dialog");b.setAttribute("aria-label","Aviso de cookies");
    b.style.cssText="position:fixed;left:16px;right:16px;bottom:16px;z-index:80;max-width:560px;margin-inline:auto;padding:18px 20px;border-radius:18px;background:#0b0e0b;border:1px solid rgba(229,233,221,.16);color:#e5e9dd;font:500 15px/1.45 'DM Sans',system-ui,sans-serif;box-shadow:0 20px 50px rgba(0,0,0,.6);display:flex;flex-wrap:wrap;gap:14px;align-items:center";
    if(window.matchMedia&&matchMedia("(max-width:640px)").matches&&document.querySelector(".dock"))b.style.bottom="84px";
    var t=document.createElement("p");t.style.cssText="margin:0;flex:1 1 260px";
    t.innerHTML='Usamos cookies para medir las visitas y mejorar nuestros anuncios. <a href="/privacy" style="color:#16c24f;text-decoration:underline">Aviso de privacidad</a>';
    var row=document.createElement("div");row.style.cssText="display:flex;gap:8px";
    function btn(label,primary,value){
      var x=document.createElement("button");x.type="button";x.textContent=label;
      x.style.cssText="font:700 14px 'DM Sans',system-ui,sans-serif;min-height:42px;padding:0 18px;border-radius:999px;cursor:pointer;"+(primary?"background:#16c24f;color:#020202;border:0":"background:transparent;color:#fff;border:1.5px solid rgba(229,233,221,.3)");
      x.addEventListener("click",function(){write(KEY,value);consent(value);b.remove();track("cookies_"+(value==="granted"?"aceptadas":"rechazadas"))});
      return x;
    }
    row.appendChild(btn("Rechazar",false,"denied"));row.appendChild(btn("Aceptar",true,"granted"));
    b.appendChild(t);b.appendChild(row);
    (document.body||document.documentElement).appendChild(b);
  }

  /* Eventos: llegan al dataLayer y se usan como conversiones en Tag Manager */
  function track(name,params){var o={event:name};for(var k in params||{})o[k]=params[k];dl.push(o)}
  function place(el){
    var c=el.closest("section,header,footer,.dock");
    if(!c)return "pagina";
    return c.id||(c.className||c.tagName).toString().split(" ")[0].toLowerCase();
  }
  document.addEventListener("click",function(e){
    var el=e.target.closest&&e.target.closest("a,button");if(!el)return;
    var href=el.getAttribute("href")||"";
    if(/apps\.apple\.com/.test(href))track("descarga_click",{tienda:"app_store",ubicacion:place(el)});
    else if(/play\.google\.com/.test(href))track("descarga_click",{tienda:"google_play",ubicacion:place(el)});
    else if(/club\.zetio\.app/.test(href))track("club_click",{texto:el.textContent.trim(),ubicacion:place(el)});
    else if(/^\/como-funciona\//.test(href))track("guia_click",{guia:href,ubicacion:place(el)});
    else if(el.dataset&&el.dataset.role)track("perfil_elegido",{perfil:el.dataset.role});
    else if(el.id==="cy-m"||el.id==="cy-a")track("precios_ciclo",{ciclo:el.id==="cy-a"?"anual":"mensual"});
    else if(el.dataset&&el.dataset.v)track("calculadora_uso",{parejas:+el.dataset.v});
  });
  document.addEventListener("change",function(e){
    if(e.target&&e.target.id==="parejas")track("calculadora_uso",{parejas:+e.target.value});
  });

  /* Campañas: las etiquetas utm_ de la visita viajan a las tiendas y al panel de clubes */
  var q={},keep={};
  location.search.replace(/[?&]([^=&]+)=([^&]*)/g,function(_,k,v){try{q[k]=decodeURIComponent(v.replace(/\+/g," "))}catch(e){}});
  try{keep=JSON.parse(sessionStorage.getItem("zetio_utm")||"{}")}catch(e){}
  ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(function(k){if(q[k])keep[k]=q[k]});
  try{sessionStorage.setItem("zetio_utm",JSON.stringify(keep))}catch(e){}
  var pairs=Object.keys(keep).map(function(k){return k+"="+encodeURIComponent(keep[k])});
  if(pairs.length){
    [].slice.call(document.querySelectorAll("a[href]")).forEach(function(a){
      var h=a.getAttribute("href");
      if(/play\.google\.com\/store\/apps/.test(h)&&h.indexOf("referrer=")<0)a.href=h+"&referrer="+encodeURIComponent(pairs.join("&"));
      else if(/apps\.apple\.com/.test(h)&&h.indexOf("ct=")<0)a.href=h+(h.indexOf("?")<0?"?":"&")+"ct="+encodeURIComponent((keep.utm_campaign||keep.utm_source||"web").slice(0,40));
      else if(/club\.zetio\.app/.test(h)&&h.indexOf("utm_")<0)a.href=h+(h.indexOf("?")<0?"?":"&")+pairs.join("&");
    });
  }
})();

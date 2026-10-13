(function(){
  /* al bajar, una franja oscura tapa lo que asoma por encima de la barra de navegación */
  (function(){
    var root=document.documentElement,tick=function(){root.classList.toggle("scrolled",(window.scrollY||root.scrollTop)>24)};
    addEventListener("scroll",tick,{passive:true});tick();
  })();

  /* al abrir una página por un enlace, empezar arriba (o en su ancla); algunos visores conservan el scroll de la página anterior */
  (function(){
    var nav=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];
    if(nav&&nav.type!=="navigate")return;
    var done=false;
    ["touchstart","pointerdown","wheel","keydown","mousedown"].forEach(function(ev){addEventListener(ev,function(){done=true},{passive:true,once:true})});
    function place(){
      if(done)return;
      var id="";try{id=decodeURIComponent((location.hash||"").slice(1))}catch(e){}
      var el=id&&document.getElementById(id),root=document.documentElement,prev=root.style.scrollBehavior;
      root.style.scrollBehavior="auto";
      if(el)el.scrollIntoView();else scrollTo(0,0);
      root.style.scrollBehavior=prev;
    }
    var t0=Date.now();
    place();addEventListener("load",place);addEventListener("pageshow",place);
    [60,200,500,1000,2000].forEach(function(t){setTimeout(place,t)});
    /* si algo mueve el scroll antes de que la persona toque la página, se corrige de nuevo */
    addEventListener("scroll",function(){if(!done&&Date.now()-t0<30000)place()},{passive:true});
  })();

  /* video del flujo: transparente, en bucle, solo se reproduce cuando está a la vista (igual que en index.html) */
  var ua=navigator.userAgent;
  var webkit=/iP(hone|ad|od)/.test(ua)||(/Safari/.test(ua)&&!/Chrome|Chromium|Android/.test(ua));
  var still=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  var vids=[].slice.call(document.querySelectorAll("video[data-flow]"));
  if(still||!vids.length)return;
  var start=function(v){
    if(!v.src){v.src="/site/video/"+v.dataset.flow+"-flujo"+(webkit?".mov":".webm")}
    var p=v.play();if(p&&p.catch)p.catch(function(){});
  };
  if("IntersectionObserver" in window){
    var vo=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting)start(e.target);else if(e.target.src)e.target.pause()});
    },{threshold:.15});
    vids.forEach(function(v){vo.observe(v)});
  }else vids.forEach(start);
})();

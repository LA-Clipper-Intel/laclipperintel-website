(function(){
  var mb=document.getElementById('menuBtn');
  if(mb){mb.addEventListener('click',function(){var m=document.getElementById('mobileMenu'); m.classList.toggle('open'); mb.setAttribute('aria-expanded',m.classList.contains('open'));});}
  document.addEventListener('click',function(e){
    var b=e.target.closest('button[data-yt]');
    if(b && !b.querySelector('iframe')){
      var f=document.createElement('iframe');
      f.src='https://www.youtube-nocookie.com/embed/'+b.getAttribute('data-yt')+'?autoplay=1&rel=0&playsinline=1';
      f.title=b.getAttribute('data-title')||'LA Clipper Intel video';
      f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen=true; f.loading='lazy';
      b.innerHTML=''; b.appendChild(f);
    }
  });
  // Schedule: grey out played games and highlight the next one (tip times are Pacific)
  var rows=document.querySelectorAll('tr[data-tip]');
  if(rows.length){
    var now=Date.now(), nextSet=false;
    rows.forEach(function(r){
      var t=Date.parse(r.getAttribute('data-tip'));
      if(t+3*36e5<now){r.classList.add('past');}
      else if(!nextSet){r.classList.add('next'); nextSet=true;}
    });
  }
})();

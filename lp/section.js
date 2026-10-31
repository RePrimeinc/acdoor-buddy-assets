/* Buddy セクション：卵のスライダー＋光の粒 */
(function(){
  /* --- 卵（スプライト1枚から100コマを生成・2周ぶん並べて無限ループ） --- */
  var track = document.getElementById('bsTrack');
  if (track) {
    var N = 100, COLS = 10;
    var html = '';
    for (var loop=0; loop<2; loop++){
      for (var i=0; i<N; i++){
        var x = (i % COLS) * (100/(COLS-1));
        var y = Math.floor(i / COLS) * (100/(COLS-1));
        html += '<span class="bs-cell" style="background-position:' + x + '% ' + y + '%"></span>';
      }
    }
    track.innerHTML = html;
  }

  /* --- 光の粒 --- */
  var d = document.getElementById('bsDust');
  if (!d) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  function mk(cls, n, dur, min, max){
    for (var i=0;i<n;i++){
      var s = document.createElement('span');
      s.className = cls;
      s.style.left = (4 + Math.random()*92) + '%';
      s.style.top  = (14 + Math.random()*80) + '%';
      s.style.animationDelay    = (Math.random()*dur) + 's';
      s.style.animationDuration = (dur*0.7 + Math.random()*dur*0.6) + 's';
      var sz = min + Math.random()*(max-min);
      s.style.width = s.style.height = sz + 'px';
      d.appendChild(s);
    }
  }
  mk('r', 18, 7.5, 1.6, 3.8);
  mk('t', 14, 3.2, 1.2, 2.6);
})();

(function () {
  function init() {
    var toc = document.querySelector('.ck-toc');
    var body = document.querySelector('.ck-body');
    if (!toc || !body) return;

    var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    var targets = links
      .map(function (link) {
        var el = document.getElementById(decodeURIComponent(link.hash.slice(1)));
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);
    if (!targets.length) return;

    var current = null;

    function setActive(entry) {
      if (entry === current) return;
      current = entry;
      targets.forEach(function (t) {
        if (t === entry) t.link.setAttribute('data-active', '');
        else t.link.removeAttribute('data-active');
      });
    }

    function update() {
      var line = window.scrollY + 140;
      var found = targets[0];
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].el.getBoundingClientRect().top + window.scrollY <= line) found = targets[i];
      }
      setActive(found);
    }

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        update();
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  var lastPath = location.pathname;
  setInterval(function () {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      setTimeout(init, 150);
    }
  }, 400);
})();

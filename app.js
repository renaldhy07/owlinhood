// Highlight nav link matching the section currently in view
(function () {
  const links = Array.from(document.querySelectorAll('.main-nav a'));
  const map = links
    .map(a => ({ a, sec: document.querySelector(a.getAttribute('href')) }))
    .filter(x => x.sec);

  function onScroll() {
    const y = window.scrollY + 120;
    let current = map[0];
    for (const item of map) {
      if (item.sec.offsetTop <= y) current = item;
    }
    links.forEach(l => l.classList.remove('active'));
    if (current) current.a.classList.add('active');
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Intersection Observer — fade in chapters on scroll
(function () {
  const chapters = document.querySelectorAll('.chapter');
  if (!chapters.length) return;
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  chapters.forEach(function (ch) { obs.observe(ch); });
})();

// Parallax on hero media
(function () {
  var hero = document.querySelector('.hero-media');
  if (!hero) return;
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var y = window.scrollY;
        hero.style.transform = 'translateY(' + (y * 0.3) + 'px)';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

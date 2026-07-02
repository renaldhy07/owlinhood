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

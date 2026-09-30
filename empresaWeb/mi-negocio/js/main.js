// Año actual en el pie de página
(function () {
  var y = new Date().getFullYear();
  var el = document.getElementById('anio');
  if (el) el.textContent = y;
})();

// Menú desplegable en móvil
(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (!btn || !menu) return;

  function setOpen(open) {
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  btn.addEventListener('click', function () {
    setOpen(!menu.classList.contains('open'));
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();

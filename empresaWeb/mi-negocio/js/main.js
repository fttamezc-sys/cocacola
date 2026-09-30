(function () {
  // Año actual en el pie de página
  var anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

  // Menú de navegación en móvil
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Cierra el menú al elegir una sección
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Cierra con la tecla Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Restablece el estado al pasar a escritorio
  window.matchMedia('(min-width: 768px)').addEventListener('change', function (mq) {
    if (mq.matches) setOpen(false);
  });
})();

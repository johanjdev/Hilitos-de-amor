document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.menu-close');
  const menu = document.querySelector('.menu');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    menu.classList.add('active');
    body.classList.add('no-scroll'); // ← bloquea el scroll
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('no-scroll'); // ← lo vuelve a activar
  });
});

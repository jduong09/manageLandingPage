document.addEventListener('DOMContentLoaded', () => {
  const iconOpenMenu = document.getElementById('nav-open-img');
  const iconCloseMenu = document.getElementById('nav-close-img');
  const listMenu = document.getElementById('list-header-menu');
  const bgMenu = document.getElementById('bg-menu');

  iconOpenMenu.addEventListener('click', () => {
    iconOpenMenu.classList.add('hide');
    iconCloseMenu.classList.remove('hide');
    listMenu.classList.remove('hide');
    bgMenu.classList.remove('hide');
  });

  iconCloseMenu.addEventListener('click', () => {
    iconOpenMenu.classList.remove('hide');
    iconCloseMenu.classList.add('hide');
    listMenu.classList.add('hide');
    bgMenu.classList.add('hide');
  });
});
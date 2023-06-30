'use script';

document.addEventListener('click', (e) => menuClick(e));

function menuClick(e) {
  const targetItem = e.target;
  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open');
  }
}

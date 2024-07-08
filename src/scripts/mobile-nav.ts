const menuNode = document.querySelector('.Hamburger');
const navNode = document.querySelector('.Navigation');

menuNode?.addEventListener('click', () => {
  navNode?.classList.toggle('expanded');
});

document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('creator-profile-btn');
  const drawer = document.getElementById('creator-drawer');
  const closeBtn = document.getElementById('close-drawer-btn');

  avatar?.addEventListener('click', () => drawer.classList.add('open'));
  closeBtn?.addEventListener('click', () => drawer.classList.remove('open'));
});
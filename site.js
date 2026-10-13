const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.removeAttribute('data-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.toggleAttribute('data-open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
// Keep only the clip the visitor is watching playing.
document.addEventListener('play', event => {
  if (!(event.target instanceof HTMLVideoElement)) return;
  document.querySelectorAll('video').forEach(video => {
    if (video !== event.target) video.pause();
  });
}, true);
const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  document.querySelectorAll('.artwork').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      caption.textContent = image.alt;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('button').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
      const box = lightbox.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) lightbox.close();
    }
  });
}

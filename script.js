const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
const gallery = document.querySelector('.gallery');
const status = document.querySelector('.filter-status');
filters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  let visible = 0;
  projects.forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) visible++;
  });
  gallery.classList.toggle('is-filtered', category !== 'all');
  status.textContent = `${visible} demonstration images shown.`;
}));
const viewer = document.querySelector('.viewer');
const viewerPhoto = viewer.querySelector('.photo');
document.querySelectorAll('[data-photo]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#viewer-title').textContent = button.dataset.title;
    viewerPhoto.className = `photo photo-${button.dataset.photo}`;
    viewerPhoto.setAttribute('aria-label', button.querySelector('[role="img"]').getAttribute('aria-label'));
    viewer.showModal();
    document.body.classList.add('viewer-open');
  });
});
viewer.querySelector('.close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) {
  const bounds = viewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
}});
viewer.addEventListener('close', () => document.body.classList.remove('viewer-open'));
document.querySelector('#year').textContent = new Date().getFullYear();

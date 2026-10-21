const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
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
  status.textContent = `${visible} ${visible === 1 ? 'discipline' : 'disciplines'} shown.`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();

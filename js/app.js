import { roadmapData } from './data.js';
import { renderRoadmap } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('roadmap-container');
  renderRoadmap(roadmapData, container);

  // 1. Accordion Click (Open / Close Card)
  container.addEventListener('click', (e) => {
    const header = e.target.closest('.stage-header');
    if (!header) return;

    const card = header.closest('.stage-card');
    const content = card.querySelector('.stage-content');
    const icon = card.querySelector('.toggle-icon');

    const isOpen = !content.classList.contains('hidden');
    content.classList.toggle('hidden');
    icon.textContent = isOpen ? '+' : '−';
  });

  // 2. Tab Filter
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.stage-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
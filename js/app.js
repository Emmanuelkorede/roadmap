
/**
 * Main Application Logic: Tab Filtering, Accordion Toggling, LocalStorage Progress.
 */

import { roadmapData } from './data.js';
import { renderRoadmap } from './render.js';
import { updateProfileProgress } from './profile.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('roadmap-container');
  const filterTabs = document.querySelectorAll('.tab-btn');
  const globalProgressBar = document.getElementById('progressFill');
  const globalProgressText = document.getElementById('progressPercent');

  // Initial render of all stages
  renderRoadmap(roadmapData, container);
  updateGlobalProgress();

  /* ==========================================================================
     1. Accordion Toggle Logic (Event Delegation)
     ========================================================================== */
  container.addEventListener('click', (e) => {
    const header = e.target.closest('.stage-header');
    
    // Ignore clicks directly on checkboxes inside header if any
    if (!header || e.target.classList.contains('task-checkbox')) return;

    const card = header.closest('.stage-card');
    const content = card.querySelector('.stage-content');
    const toggleIcon = card.querySelector('.toggle-icon');
    const isExpanded = !content.classList.contains('hidden');

    // Toggle target card
    content.classList.toggle('hidden');
    header.setAttribute('aria-expanded', !isExpanded);
    toggleIcon.textContent = isExpanded ? '+' : '−';
    card.classList.toggle('is-open', !isExpanded);
  });

  /* ==========================================================================
     2. Category Filtering Tabs
     ========================================================================== */
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');
      const cards = container.querySelectorAll('.stage-card');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     3. Checkbox Progress & LocalStorage Persistence
     ========================================================================== */
  container.addEventListener('change', (e) => {
    if (!e.target.classList.contains('task-checkbox')) return;

    const checkbox = e.target;
    const taskId = checkbox.getAttribute('data-task-id');
    const stageId = checkbox.getAttribute('data-stage-id');

    // Update LocalStorage state
    const completedTasks = JSON.parse(localStorage.getItem('roadmap_progress') || '{}');
    if (checkbox.checked) {
      completedTasks[taskId] = true;
    } else {
      delete completedTasks[taskId];
    }
    localStorage.setItem('roadmap_progress', JSON.stringify(completedTasks));

    // Update individual stage badge
    updateStageBadge(stageId);

    // Update global top progress bar and profile sidebar
    updateGlobalProgress();
  });

  /**
   * Recalculates and updates specific stage pill badge.
   */
  function updateStageBadge(stageId) {
    const stage = roadmapData.find(s => s.id === stageId);
    if (!stage) return;

    const completedTasks = JSON.parse(localStorage.getItem('roadmap_progress') || '{}');
    const totalTasks = stage.learn.length;
    let completedCount = 0;

    stage.learn.forEach((_, idx) => {
      if (completedTasks[`task-${stageId}-${idx}`]) {
        completedCount++;
      }
    });

    const badge = document.getElementById(`badge-${stageId}`);
    if (badge) {
      badge.textContent = `${completedCount}/${totalTasks} Tasks`;
    }

    const card = document.querySelector(`.stage-card[data-stage-id="${stageId}"]`);
    if (card) {
      if (totalTasks > 0 && completedCount === totalTasks) {
        card.classList.add('completed-stage');
      } else {
        card.classList.remove('completed-stage');
      }
    }
  }

  /**
   * Recalculates total progress across all 13 stages.
   */
  function updateGlobalProgress() {
    const completedTasks = JSON.parse(localStorage.getItem('roadmap_progress') || '{}');
    
    let totalTasks = 0;
    roadmapData.forEach(stage => {
      totalTasks += stage.learn.length;
    });

    const completedCount = Object.keys(completedTasks).length;
    const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

    if (globalProgressBar) globalProgressBar.style.width = `${percentage}%`;
    if (globalProgressText) globalProgressText.textContent = `${percentage}%`;

    // Sync progress metrics with Profile drawer
    updateProfileProgress(completedCount, totalTasks, percentage);
  }
});
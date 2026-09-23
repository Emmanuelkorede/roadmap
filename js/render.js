/**
 * Renders the full-stack roadmap cards and progress metrics into the DOM.
 */

// Generate unique ID for checkboxes to persist progress
function getCheckboxId(stageId, index) {
  return `task-${stageId}-${index}`;
}

// Check if a task is marked completed in localStorage
function isTaskCompleted(taskId) {
  const completedTasks = JSON.parse(localStorage.getItem('roadmap_progress') || '{}');
  return Boolean(completedTasks[taskId]);
}

/**
 * Creates the HTML string for a single stage card.
 */
export function createStageCardHTML(stage) {
  const completedTasks = JSON.parse(localStorage.getItem('roadmap_progress') || '{}');
  
  // Calculate completed tasks for this stage
  const totalTasks = stage.learn.length;
  const completedCount = stage.learn.reduce((acc, _, idx) => {
    const taskId = getCheckboxId(stage.id, idx);
    return acc + (completedTasks[taskId] ? 1 : 0);
  }, 0);

  const isStageDone = totalTasks > 0 && completedCount === totalTasks;

  // Build Learn Checklist
  const learnListHTML = stage.learn.map((item, index) => {
    const taskId = getCheckboxId(stage.id, index);
    const checked = isTaskCompleted(taskId) ? 'checked' : '';
    return `
      <li class="task-item">
        <label class="checkbox-label">
          <input type="checkbox" class="task-checkbox" data-task-id="${taskId}" data-stage-id="${stage.id}" ${checked}>
          <span class="custom-checkbox"></span>
          <span class="task-text">${item}</span>
        </label>
      </li>
    `;
  }).join('');

  // Build Build Projects List
  const buildListHTML = stage.build.map(project => `
    <li class="build-item">
      <span class="build-icon">⚡</span>
      <span>${project}</span>
    </li>
  `).join('');

  return `
    <article class="stage-card ${isStageDone ? 'completed-stage' : ''}" data-category="${stage.category}" data-stage-id="${stage.id}">
      <header class="stage-header" tabindex="0" role="button" aria-expanded="false">
        <div class="stage-header-main">
          <span class="stage-badge">${stage.id}</span>
          <div class="stage-title-group">
            <h2 class="stage-title">${stage.title}</h2>
            <p class="stage-subtitle">${stage.subtitle}</p>
          </div>
        </div>
        <div class="stage-header-meta">
          <span class="stage-progress-pill" id="badge-${stage.id}">
            ${completedCount}/${totalTasks} Tasks
          </span>
          <span class="toggle-icon" aria-hidden="true">+</span>
        </div>
      </header>

      <div class="stage-content hidden">
        <div class="stage-grid">
          
          <div class="section-block learn-block">
            <h3 class="section-heading"><span class="icon">📖</span> Learn</h3>
            <ul class="task-list">
              ${learnListHTML}
            </ul>
          </div>

          <div class="section-block build-block">
            <h3 class="section-heading"><span class="icon">🛠️</span> Build</h3>
            <ul class="build-list">
              ${buildListHTML}
            </ul>
            
            <div class="move-on-box">
              <h4 class="move-on-title">🎯 Move on when:</h4>
              <p class="move-on-text">${stage.moveOn}</p>
            </div>
          </div>

        </div>
      </div>
    </article>
  `;
}

/**
 * Renders all stages into the target container element.
 */
export function renderRoadmap(stages, containerElement) {
  if (!containerElement) return;
  containerElement.innerHTML = stages.map(stage => createStageCardHTML(stage)).join('');
}
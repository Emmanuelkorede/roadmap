
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderRoadmap(stages, container) {
  container.innerHTML = stages.map(stage => `
    <article class="stage-card" data-category="${stage.category}">
      <header class="stage-header">
        <span class="stage-badge">${stage.id}</span>
        <h2 class="stage-title">${escapeHTML(stage.title)}</h2>
        <span class="toggle-icon">+</span>
      </header>

      <div class="stage-content hidden">
        <p class="subtitle">${escapeHTML(stage.subtitle)}</p>
        
        <h3>📖 Learn</h3>
        <ul>
          ${stage.learn.map(item => `<li>${escapeHTML(item)}</li>`).join('')}
        </ul>

        <h3>🛠️ Build</h3>
        <ul>
          ${stage.build.map(item => `<li>${escapeHTML(item)}</li>`).join('')}
        </ul>

        <div class="move-on">
          <strong>🎯 Move on when:</strong> ${escapeHTML(stage.moveOn)}
        </div>
      </div>
    </article>
  `).join('');
}
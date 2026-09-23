export function renderRoadmap(stages, container) {
  container.innerHTML = stages.map(stage => `
    <article class="stage-card" data-category="${stage.category}">
      <header class="stage-header">
        <span class="stage-badge">${stage.id}</span>
        <h2 class="stage-title">${stage.title}</h2>
        <span class="toggle-icon">+</span>
      </header>

      <div class="stage-content hidden">
        <p class="subtitle">${stage.subtitle}</p>
        
        <h3>📖 Learn</h3>
        <ul>${stage.learn.map(item => `<li>${item}</li>`).join('')}</ul>

        <h3>🛠️ Build</h3>
        <ul>${stage.build.map(item => `<li>${item}</li>`).join('')}</ul>

        <div class="move-on">
          <strong>🎯 Move on when:</strong> ${stage.moveOn}
        </div>
      </div>
    </article>
  `).join('');
}
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('engine-filter-doc');

  if (container) {
    container.innerHTML = `
      <article class="document-card">
        <p class="document-topic">Engine & Transmission</p>
        <h3>Engine Oil Filter Guide</h3>
        <p class="document-summary">Maintenance steps for replacing the engine oil filter on JCB machines.</p>
        <p>The engine oil filter should be changed at the recommended service interval. Always drain the oil first, clean the mounting surface, and install the new filter with the correct gasket lubrication to prevent leakage.</p>
      </article>
    `;
  }
});

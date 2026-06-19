document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('coolant-system-doc');

  if (container) {
    container.innerHTML = `
      <article class="document-card">
        <p class="document-topic">Engine & Transmission</p>
        <h3>Coolant System Basics</h3>
        <p class="document-summary">Overview of coolant checks, pressure testing, and common signs of overheating.</p>
        <p>Inspect cooling hoses, radiator fins, and thermostat operation regularly. A healthy coolant system keeps the engine operating within safe temperature limits and protects the head gasket from heat damage.</p>
      </article>
    `;
  }
});

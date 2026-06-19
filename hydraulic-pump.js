document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('hydraulic-pump-doc');

  if (container) {
    container.innerHTML = `
      <article class="document-card">
        <p class="document-topic">Hydraulic & Electrical</p>
        <h3>Hydraulic Pump Service Notes</h3>
        <p class="document-summary">Useful notes for hydraulic pressure checks and pump inspection.</p>
        <p>Hydraulic pump performance should be checked when pressure drops or the machine shows slow attachment movement. Inspect for leaks, unusual noise, and contamination before replacing the pump assembly.</p>
      </article>
    `;
  }
});

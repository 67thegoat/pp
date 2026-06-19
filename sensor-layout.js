document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('sensor-layout-doc');

  if (container) {
    container.innerHTML = `
      <article class="document-card">
        <p class="document-topic">Hydraulic & Electrical</p>
        <h3>Electrical Sensor Layout</h3>
        <p class="document-summary">Reference points for major sensors used on JCB equipment.</p>
        <p>Common sensors include the engine speed sensor, hydraulic pressure sensors, and temperature probes. Confirm the connector condition and wiring harness routing whenever troubleshooting electrical faults.</p>
      </article>
    `;
  }
});

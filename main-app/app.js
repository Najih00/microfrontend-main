fetch('microfrontends.json')
  .then(response => response.json())
  .then(config => {
    const app2Url = config.app2;
    const app3Url = config.app3;

    // Dynamically load the micro-frontend applications
    loadMicroFrontend(app2Url, 'app2-container');
    loadMicroFrontend(app3Url, 'app3-container');
  });

function loadMicroFrontend(url, containerId) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    });
}

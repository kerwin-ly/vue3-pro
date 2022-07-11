import { createApp } from 'vue';

import App from './App.vue';
import './registerServiceWorker';
import { setupRouter } from './router';
import { setupStore } from './store';
import { setupAntd, setupAssets } from './plugins';
import { setupI18n } from './locales';

const app = createApp(App);

function setupPlugins() {
  // configure store with pinia
  setupStore(app);

  // import global antd components
  setupAntd(app);

  // import static assets
  setupAssets();

  // configure router
  setupRouter(app);
}

async function setupApp() {
  await setupI18n(app);
  app.mount('#app');
}

setupPlugins();
setupApp();

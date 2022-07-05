import { createApp } from 'vue';

import App from './App.vue';
import './registerServiceWorker';
import { setupRouter } from './router';
import { setupStore } from './store';
import { setupAntd, setupAssets } from './plugins';

const app = createApp(App);

// configure store with vuex
setupStore(app);

// import global antd components
setupAntd(app);

// import static assets
setupAssets();

// configure router
setupRouter(app);

app.mount('#app');

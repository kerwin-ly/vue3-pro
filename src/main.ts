import { createApp } from 'vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue';
import './registerServiceWorker';
import { setupRouter } from './router';
import { setupStore } from './store';
import { registerGlobComp } from './components/antd/registerGlobComp';

const app = createApp(App);

// configure store with vuex
setupStore(app);

// register components, includes Antd and dynamic global components.
registerGlobComp(app);

// configure router
setupRouter(app);

app.mount('#app');

import { App } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
});

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };

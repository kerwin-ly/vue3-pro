import type { App } from 'vue';
import { message } from 'ant-design-vue';

export function setupGlobalMethods(app: App) {
  app.config.globalProperties.$message = message;
}

import type { App } from 'vue';
import { Button, Input, Layout, Menu } from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app.use(Input).use(Button).use(Layout).use(Menu);
}

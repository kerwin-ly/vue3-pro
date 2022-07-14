import type { App } from 'vue';
import { Button, Input, Layout, Menu, Space } from 'ant-design-vue';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.variable.min.css';

/**
 * @description Install antd component globally
 * @export
 * @param {App} app
 */
export function setupAntd(app: App): void {
  app.component('PieChartOutlined', PieChartOutlined);
  app.component('UserOutlined', UserOutlined);
  app.use(Input).use(Button).use(Layout).use(Menu).use(Space);
}

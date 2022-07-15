import type { App } from 'vue';
import { Button, Form, Input, Layout, Menu, Space } from 'ant-design-vue';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons-vue';
import 'ant-design-vue/dist/antd.variable.min.css';

/**
 * @description Install antd component globally
 * @export
 * @param {App} app
 */
export function setupAntd(app: App): void {
  // Import icon components to ensure they can be used in Sidebar Menu.
  app.component('PieChartOutlined', PieChartOutlined).component('UserOutlined', UserOutlined);
  // Import global antd components.
  app.use(Input).use(Button).use(Layout).use(Menu).use(Space).use(Form);
}

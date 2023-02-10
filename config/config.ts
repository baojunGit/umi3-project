import { defineConfig } from 'umi';
import routes from './routes';
import layout from './layout';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    // 开启暗色主题
    dark: false,
    // 开启紧凑主题
    compact: false,
  },
  routes,
  layout,
  fastRefresh: {},
});

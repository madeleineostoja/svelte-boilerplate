import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme,
  showRoots: true,
  viewMode: 'docs'
});

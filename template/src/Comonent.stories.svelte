import <%= name %> from './<%= name %>.svelte';

export default {
  title: 'API & Demo',
  component: <%= name %>
};

export const Default = () => ({
  Component: <%= name %>,
  props: {}
});
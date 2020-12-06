# <%= title %>

[![NPM](https://img.shields.io/npm/v/<%= packageName %>)](https://www.npmjs.com/package/<%= packageName %>) [![License](https://img.shields.io/npm/l/<%= packageName %>)](https://github.com/<%= githubOrg %>/<%= packageName %>/blob/master/LICENSE.md)

<%= description %>

### Usage

```sh
npm i <%= packageName %>
```

```svelte
<script>
  import <%= name %> from '<%= packageName %>';
</script>

<<%= name %> />
```

See the [API Docs](https://<%= githubOrg %>.github.io/<%= packageName %>/) for a full overview of props and options.

### Properties

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |

<% props && props.forEach(prop => { -%>
| `<%= prop.name %>` | `<%= prop.type %>` | `-` | `<%= prop.description %>` |
<% }) -%>

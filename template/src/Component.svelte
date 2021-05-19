<!--
  @component
  <%= description %>
-->
<script>
<% props && props.forEach(prop => { -%>
  /** @type {<%= prop.type %>} */
  export let <%= prop.name %>;
<% }) -%>
</script>

<div class={$$props.class} {...$$restProps} />

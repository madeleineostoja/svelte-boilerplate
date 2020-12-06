<!--
  @component <%= name %> Component
  <%= description %>
-->
<script>
  <% props && props.forEach(prop => { -%>
  /** @type {<%= prop.type %>} */
  export let <%= prop.name %>;
<% }) -%>
</script>

<style>
</style>



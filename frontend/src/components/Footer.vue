<template>
  <footer>
    <p>&#169; 2020 - {{ currentYear }} Janet Wang</p>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
    currentYear: new Date().getFullYear()
  })
};
</script>

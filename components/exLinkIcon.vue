<template>
  <a class="noPrint"  target="_blank" v-bind:href="link"><fa icon="external-link-alt"/></a>
</template>

<script>
export default {
  name: "exLinkIcon",
  props: {
    link:String
  }
}
</script>

<style scoped>

</style>

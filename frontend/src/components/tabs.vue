<template>
  <div>
      <md-tabs class="md-transparent" md-alignment="fixed">
        <md-tab id="tab-home" md-label="Home"></md-tab>
        <md-tab id="tab-popular" md-label="Popular"></md-tab>
      </md-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: localStorage.getItem('username')
  })
}
</script>

<style>

</style>
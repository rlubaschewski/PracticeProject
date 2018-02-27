<template>
  <div id="app">
    <md-toolbar v-if="show" class="md-primary" md-elevation="0" id="toolbar">
      <h3 class="md-title" style="flex: 1" id="headline"><span @click="articleRoute">PracticeProject</span></h3>
      <md-button @click="logout">Logout</md-button>
    </md-toolbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    show: localStorage.getItem('show')
  }),
  methods: {
    logout() {
      localStorage.removeItem('username')
      localStorage.removeItem('show')
      this.$router.push('/login')
    },
    articleRoute() {
      this.$store.dispatch('getArticles', 'all')
      this.$router.push('/articles/all')
    }
  },
  updated() {
    this.show = localStorage.getItem('show')
  }
};
</script>

<style>
#toolbar {
  margin-bottom: 1%;
}
#headline span:hover {
  cursor: pointer;
  font-weight: bold;
}
</style>

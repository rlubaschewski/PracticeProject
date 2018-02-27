<template>
  <div>
    <md-toolbar class="md-primary" md-elevation="0">
      <h3 class="md-title" style="flex: 1">PracticeProject</h3>
      <md-button>Logout</md-button>
    </md-toolbar>

    <md-card v-for="article in articles" v-bind:key="article._id">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{article.title}}</div>
          <div class="md-subhead">Submitted by <i class="subhead">{{article.user}}</i> to <i class="subhead">{{article.sub}}</i></div>
        </md-card-header-text>
      </md-card-header>

        <md-card-content>
          {{article.text}}
        </md-card-content>
    </md-card>

      <md-speed-dial class="md-bottom-right">
        <md-speed-dial-target class="md-primary" to="/create">
          <md-icon>add</md-icon>
        </md-speed-dial-target>
      </md-speed-dial>
  </div>
</template>

<script>
export default {
  methods: {
    getAllArticles() {
      this.$store.dispatch('getArticles', 'all')
    }
  },
  computed: {
    articles: {
      get() {
        return this.$store.state.articles
      }
    }
  },
  beforeMount() {
    this.getAllArticles()
  }
}
</script>

<style scoped>
#dial {
  position: fixed;
  margin-top: 85vh;
  margin-left: 93vw;
}
.subhead {
  cursor: pointer;
}
.subhead:hover {
  font-weight: bold;
}
</style>
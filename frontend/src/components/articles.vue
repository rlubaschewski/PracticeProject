<template>
  <div>
    <md-card v-for="article in articles" v-bind:key="article._id" id="article">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{article.title}}</div>
          <div class="md-subhead">Submitted by <i class="subhead">{{article.user}}</i> to <i @click="getSubArticles(article.sub)" class="subhead">{{article.sub}}</i></div>
        </md-card-header-text>
      </md-card-header>

        <md-card-content>
          {{article.text}}
        </md-card-content>
    </md-card>

      <md-speed-dial class="md-bottom-right">
        <md-speed-dial-target class="md-primary" @click="createRoute">
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
    },
    getSubArticles(sub) {
      this.$store.dispatch('getArticles', sub)
    },
    createRoute() {
      this.$router.push('/create/' + localStorage.getItem('username'))
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
    let url = '' + window.location
    let sub = url.slice(33)
    this.getSubArticles(sub)
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
#article {
  margin-bottom: 1%;
}
</style>
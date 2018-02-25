<template>
  <div>
      <md-tabs class="md-transparent" md-alignment="fixed">
        <md-tab id="tab-home" md-label="Home"></md-tab>
        <md-tab id="tab-popular" md-label="Popular">
          <md-card v-for="article in articles" v-bind:key="article._id">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{article.title}}</div>
              </md-card-header-text>
            </md-card-header>

            <md-card-expand>
              <md-card-actions md-alignment="space-between">

                <md-card-expand-trigger>
                  <md-button>
                    <md-icon>keyboard_arrow_down</md-icon>
                  </md-button>
                </md-card-expand-trigger>
              </md-card-actions>

              <md-card-expand-content>
                <md-card-content>
                  {{article.body}}
                </md-card-content>
              </md-card-expand-content>
            </md-card-expand>
          </md-card>
        </md-tab>
      </md-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: localStorage.getItem('username'),
  }),
  methods: {
    getArticles() {
      this.$store.dispatch('getArticles')
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
    this.getArticles()
  }
}
</script>

<style>

</style>
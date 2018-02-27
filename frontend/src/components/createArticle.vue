<template>
  <div>
    <md-card id="card">

      <md-card-header>
        <div class="md-title">submit to PracticeProject</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Title</label>
          <md-textarea v-model="title"></md-textarea>
        </md-field>

        <md-field>
          <label>Text</label>
          <md-textarea v-model="text"></md-textarea>
        </md-field>

        <md-autocomplete v-model="sub" :md-options="subs">
          <label>Sub</label>
        </md-autocomplete>
      </md-card-content>

      <md-card-actions>
          <md-button class="md-primary" @click="createArticle">submit</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
    name: 'createArticle',
    data: () => ({
        title: null,
        text: null,
        sub: null,
        subs: ['KenM']
    }),
    methods: {
        createArticle() {
            this.$store.dispatch('createArticle', {sub: this.sub, title: this.title, text: this.text})
        }
    }

}
</script>

<style scoped>
#card {
  margin-left: 30vw;
  margin-right: 30vw;
}
</style>

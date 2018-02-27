<template>
  <div>
    <md-card id="card">
      <md-card-header>
        <div class="md-title">submit to PracticeProject</div>
      </md-card-header>

      <md-card-content>
        <md-field :class="getValidationClass('title')">
          <label>Title</label>
          <md-textarea v-model="title"></md-textarea>
          <span class="md-error" v-if="!$v.title.required">Title is required!</span>
        </md-field>

        <md-field>
          <label>Text</label>
          <md-textarea v-model="text"></md-textarea>
        </md-field>

        <md-autocomplete v-model="sub" :md-options="subs" :class="getValidationClass('sub')">
          <label>Sub</label>
          <span class="md-error" v-if="!$v.sub.required">Sub is required!</span>
        </md-autocomplete>
      </md-card-content>

      <md-card-actions>
          <md-button class="md-primary" @click="validateUser">submit</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'createArticle',
    data: () => ({
        title: null,
        text: null,
        sub: null,
        subs: ['KenM', 'computerscience', 'funny', 'holdmybeer']
    }),
    validations: {
      title: {
        required
      },
      sub: {
        required
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.createArticle()
        }
      },
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
#toolbar {
  margin-bottom: 2%;
}
</style>

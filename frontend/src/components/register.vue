<template>
  <div>
    <div id="nameField">
      <md-card>
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label>Name</label>
            <md-input v-model="name"></md-input>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button @click="register">Register</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import authentication from '@/services/authentication'

export default {
  name: 'register',
  data: () => ({
    name: null,
    password: null
  }),
  methods: {
    async register() {
      await authentication.register({
          name: this.name,
          password: this.password
      })
    }
  }
}
</script>

<style scoped>
#nameField {
  margin-left: 30vw;
  margin-right: 30vw;
  margin-top: 20vh;
}
</style>

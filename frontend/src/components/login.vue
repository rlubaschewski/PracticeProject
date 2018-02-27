<template>
  <div>
    <div id="nameField">
      <md-card>
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('username')">
            <label>Username</label>
            <md-input v-model="username"></md-input>
            <span class="md-error" v-if="!$v.username.required">Username is required</span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
            <span class="md-error" v-if="!$v.password.required">Password is required</span>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <small id="login" @click="register">Don't have an Account? Sign up!</small>
          <md-button @click="validateUser">Login</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    username: null,
    password: null
  }),
  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {username: this.username, password: this.password})
    },
    register() {
        this.$router.push('/register')
    },
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
        this.login()
      }
    }
  }
}
</script>

<style>
#nameField {
  margin-left: 30vw;
  margin-right: 30vw;
  margin-top: 20vh;
}
#login:hover {
  cursor: pointer;
  color: blue;
}
</style>

<template>
  <div>
    <div id="nameField">
      <md-card>
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('name')">
            <label>Name</label>
            <md-input v-model="name"></md-input>
            <span class="md-error" v-if="!$v.name.required">Name is required!</span>
            <span class="md-error" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters</span>            
          </md-field>

          <md-field :class="getValidationClass('username')">
            <label>Username</label>
            <md-input v-model="username"></md-input>
            <span class="md-error" v-if="!$v.name.required">Username is required!</span>
            <span class="md-error" v-if="!$v.name.minLength">Username must have at least {{ $v.username.$params.minLength.min }} letters</span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
            <span class="md-error" v-if="!$v.name.required">Password is required!</span>
            <span class="md-error" v-if="!$v.name.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters</span>
          </md-field>

          <md-field :class="getValidationClass('repeatPassword')">
            <label>Repeat Password</label>
            <md-input v-model="repeatPassword" type="password"></md-input>
            <span class="md-error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical</span>
          </md-field>
        </md-card-content>
        
        <md-card-actions>
          <small id="login" @click="login">Already registered? Sign in!</small>
          <md-button @click="validateUser">Register</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    name: null,
    username: null,
    password: null,
    repeatPassword: null
  }),
  validations: {
      name: {
        required,
        minLength: minLength(3)
      },
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(3)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
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
    login() {
      this.$router.push('/login') 
    },
    register: function() {
      this.$store.dispatch('register', {name: this.name, username: this.username, password: this.password})
    },
    validateUser () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.register()
      }
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

#login:hover {
  color: blue;
  cursor: pointer;
}
</style>

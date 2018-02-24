<template>
  <div>
    <div id="nameField">
      <md-card>
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label>Username</label>
            <md-input v-model="username"></md-input>
          </md-field>

          <md-field>
            <label>Password</label>
            <md-input v-model="password" type="password"></md-input>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <small id="login" @click="register">Don't have an Account? Sign up!</small>
          <md-button @click="login">Login</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  methods: {
    login() {
      this.$store.dispatch('login')
    },
    register() {
        this.$router.push('/register')
    }
  },
  computed: {
    username: {
      get() {
        return this.$store.state.username
      },
      set(val) {
        this.$store.commit('setUsername', val)
      }
    },
    password: {
      get() {
        return this.$store.state.password
      },
      set(val) {
        this.$store.commit('setPassword', val)
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

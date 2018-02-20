<template>
  <div>
    <h1>Register</h1>

    <div id="nameField">
      <md-field>
        <md-input placeholder="Type in your name here" v-model="name"></md-input>
      </md-field>

      <md-field>
        <md-input placeholder="Type in your password here" v-model="password" type="password"></md-input>
      </md-field>

      <md-button @click="register" id="submitButton" class="md-primary">Submit</md-button>
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
      const response = await authentication.register({
          name: this.name,
          password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
#nameField {
  margin-left: 30vw;
  margin-right: 30vw;
}
h1 {
  text-align: center;
}
#submitButton {
  position: absolute;
  left: 47%;
}
</style>

const axios = require('axios')
const url = 'http://localhost:8081'

export default {
    register: (context, data) => {
        axios.post(url + '/register', {
            name: data.name, 
            username: data.username, 
            password: data.password})
    },
    login: (context) => {
        axios.post(url + '/login', {
            username: context.state.username, 
            password: context.state.password}).then(function(response) {
                context.commit('login', response)
            })
    }
}
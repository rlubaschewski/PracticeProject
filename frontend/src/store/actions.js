const axios = require('axios')
const url = 'http://localhost:8081'
import router from '../router'

export default {
    register: (context, data) => {
        axios.post(url + '/register', {
            name: data.name, 
            username: data.username, 
            password: data.password}).then(function(response) {
                if(response.status === 200) {
                    localStorage.setItem('username', data.username)
                    router.push('/')
                }
            })
    },
    login: (context, data) => {
        axios.post(url + '/login', {
            username: data.username, 
            password: data.password}).then(function(response) {
                if(response.status === 200) {
                    localStorage.setItem('username', data.username)
                    router.push('/articles')
                }
            })
    },
    getArticles: (context) => {
        axios.get(url + '/articles').then(function(response) {
            context.commit('getArticles', response)
        })
    }
}
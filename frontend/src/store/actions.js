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
                    router.push('/articles/all')
                }
            })
    },
    getArticles: (context, sub) => {
        axios.get(url + '/articles/' + sub).then(function(response) {
            context.commit('clearArticles')
            context.commit('getArticles', response)
        })
    },
    createArticle: (context, data) => {
        axios.post(url + '/create', {
            user: localStorage.getItem('username'),
            sub: data.sub,
            title: data.title,
            text: data.text
        }).then(function(response) {
            if(response.status === 200) {
                router.push('/articles/' + data.sub)
            }
        })
    }
}
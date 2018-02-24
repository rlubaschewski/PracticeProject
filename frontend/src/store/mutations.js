import router from '../router'
export default {
    login: (state, response) => {
        localStorage.setItem('username', state.username)
        if(response.status === 200) {
            router.push('/tabs')
        }
    },
    setName: (state, val) => {
        state.name = val
    },
    setUsername: (state, val) => {
        state.username = val
    },
    setPassword: (state, val) => {
        state.password = val
    }
}
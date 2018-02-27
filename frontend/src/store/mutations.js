export default {
    getArticles: (state, response) => {
        for(let i = 0; i < response.data.length; i++) {
            state.articles.push({
                _id: response.data[i]._id,
                sub: response.data[i].sub,
                title: response.data[i].title,
                text: response.data[i].text,
                user: response.data[i].user
            })
        }
    },
    clearArticles: (state) => {
        state.articles = []
    }
}
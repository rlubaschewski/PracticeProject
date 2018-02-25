export default {
    getArticles: (state, response) => {
        for(let i = 0; i < response.data.length; i++) {
            state.articles.push({
                _id: response.data[i]._id,
                title: response.data[i].title
            })
        }
    }
}

class App {
    constructor(user) {
        this.user = user
        this.posts = [new Post(";kjhas;kdjhkjh;khj", 'opijk123', this.user), new Post(";kjhas;kdjhkjh;khj", 'opijk123', this.user)]
    }
    addPost(content) {
        const id = "post" + this.posts.length + '-' + Date.now()
        const post = new Post(content, id, this.user)
        this.posts.unshift(post)
    }
    getPostsFromDb() {
        // //
        // const postsDb = []
        // this.posts = postsDb
    }
}

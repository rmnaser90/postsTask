class Post {
    constructor(content, id, owner) {
        this.owner = owner
        this.id = id
        this.content = content
        this.isLiked = false
        this.comments = []
        this.date = Date.now()
        this.showComments=false
    }
    toggleLike() {
        this.isLiked = !this.isLiked
    }
    toggleComments(){
        this.showComments = !this.showComments
    }
    addComment(comment) {
        this.comments.unshift(comment)
    }
}
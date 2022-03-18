class Renderer {
    constructor() {

        this.postsContainer = document.querySelector('.postsContainer')
    }
    createPostContainer() {
        const postContainer = document.createElement('div')
        postContainer.classList.add('postContainer')
        return postContainer
    }
    createContent(text) {
        const contentContainer = document.createElement('div')
        contentContainer.classList.add('contentContainer')
        const content = document.createElement('h1')
        content.classList.add('content')
        content.innerText = text
        contentContainer.append(content)
        return contentContainer
    }
    creatComment(comment) {
        const commentContainer = document.createElement('div')
        commentContainer.classList.add('commentContainer')
        commentContainer.innerText = comment
        return commentContainer
    }
    createCommentContainer(post, posts) {
        const commentsMainContainer = document.createElement('div')
        commentsMainContainer.classList.add('commentsMainContainer')
        const commentActions = document.createElement('div')
        commentActions.classList.add('commentActions')
        const input = document.createElement('input')
        input.classList.add('commentInput')
        const addCommentBtn = document.createElement('button')
        addCommentBtn.classList.add('addCommentBtn')
        addCommentBtn.innerText = 'add'
        addCommentBtn.addEventListener('click', () => {
            const comment = input.value
            post.addComment(comment)
            input.value = ''
            this.renderPosts(posts)

        })
        commentActions.append(input, addCommentBtn)
        const commentsContainer = document.createElement('div')
        commentsContainer.classList.add('commentsContainer')
        post.comments.forEach(comment => {
            const commentContainer = this.creatComment(comment)
            commentsContainer.append(commentContainer)
        });

        commentsMainContainer.append(commentActions, commentsContainer)

        return commentsMainContainer
    }
    createActions(post, posts) {
        const actionsContainer = document.createElement('div')
        actionsContainer.classList.add('actionsContainer')
        const likeBtn = document.createElement('div')
        likeBtn.classList.add('likeBtn')
        likeBtn.innerText = post.isLiked ? 'liked' : 'Like'
        likeBtn.addEventListener('click', () => {
            post.toggleLike()
            this.renderPosts(posts)
        })
        const commentBtn = document.createElement('div')
        commentBtn.innerText = 'Comment'
        commentBtn.addEventListener('click',  ()=> {
            post.toggleComments()
            this.renderPosts(posts)
        })
        commentBtn.classList.add('commentBtn')
        actionsContainer.append(likeBtn, commentBtn)

        if (post.showComments) {
            const commentsContainer = this.createCommentContainer(post,posts)
            actionsContainer.append(commentsContainer)
        }
        return actionsContainer
    }
    createPost(post, posts) {
        const postContainer = this.createPostContainer()
        const contentContainer = this.createContent(post.content)
        const actionsContainer = this.createActions(post, posts)
        postContainer.append(contentContainer, actionsContainer)
        this.postsContainer.append(postContainer)
    }

    renderPosts(posts) {
        this.postsContainer.innerHTML = ''
        for (let i = 0; posts[i]; i++) {
            this.createPost(posts[i], posts)
        }
    }

}
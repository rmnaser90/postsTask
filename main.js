const input = document.querySelector('#myInput')
const btn = document.getElementById('myBtn')
const renderer = new Renderer()
const app = new App('Rami')



renderer.renderPosts(app.posts)

btn.addEventListener('click',function () {
    const content = input.value
    app.addPost(content)
    renderer.renderPosts(app.posts)
})






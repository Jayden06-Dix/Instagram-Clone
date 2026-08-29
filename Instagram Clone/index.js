const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const page = document.getElementById("page");
const template = document.querySelector("#post-template .individual-post");

for (let i = 0; i < posts.length; i++) {

    const individualPost = template.cloneNode(true);

    const avatar = individualPost.querySelector("#profile-img");
    const postName = individualPost.querySelector(".name");
    const place = individualPost.querySelector(".place");
    const post = individualPost.querySelector("#post-img");
    const userName = individualPost.querySelector("#username");
    const comment = individualPost.querySelector(".comment");
    const likesAmount = individualPost.querySelector("#likes-amount");

    avatar.src = posts[i].avatar;
    postName.textContent = posts[i].name;
    place.textContent = posts[i].location;
    post.src = posts[i].post;
    userName.textContent = posts[i].username;
    comment.textContent = posts[i].comment;
    likesAmount.textContent = posts[i].likes + " likes";

    page.appendChild(individualPost);
}

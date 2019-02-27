const axios = require("axios");

function getUser(id) {
    return axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.data);
}

function getUserPosts(id) {
    return axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(response => response.data);
}

function getPostComments(postId) {
    return axios.default.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(response => response.data);
}

function loadPostComments(post) {
    return getPostComments(post.id).then(comments => {
        post.comments = comments;
        return post;
    });
}

function getUserWithPostsAndComments(id) {
    var currentUser;
    return getUser(id).then(user => {
        currentUser = user;
        return getUserPosts(id);
    }).then(posts => {
        // Load all comments to all posts
        return Promise.all(posts.map(post => loadPostComments(post)));
    }).then(postsWithComments => {
        currentUser.posts = postsWithComments;
        return currentUser;
    });
}

getUserWithPostsAndComments(1).then(user => {
    console.log("User: ", user);
}).catch( err => {
    console.error("Something went wrong");
});
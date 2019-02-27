const axios = require("axios");

function getUser(id) {
    return axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.data);
}

function getUserPosts(id) {
    return axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(response => response.data);
}

function getUserWithPosts(id) {
    var currentUser;
    return getUser(id).then(user => {
        currentUser = user;
        return getUserPosts(id);
    }).then(posts => {
        currentUser.posts = posts;
        return currentUser;
    });
}

getUserWithPosts(1).then(user => {
    console.log("User: ", user);
}).catch( err => {
    console.error("Something went wrong");
});
const axios = require("axios");

async function getUser(id) {
    let response = await axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

async function getUserPosts(id) {
    let response = await axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    return response.data;
}

async function getUserWithPosts(id) {
    var currentUser = await getUser(id);
    var posts = await getUserPosts(id);
    currentUser.posts = posts;
    return currentUser;
}

(async () => {
    try {
        let user = await getUserPosts(1);
        console.log(user);
    }
    catch(err) {
        console.log("Oops! Something went wrong");
    }
})();

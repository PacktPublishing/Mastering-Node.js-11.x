const { Observable, interval, from } = require("rxjs");
const { map, buffer, filter, flatMap, concatMap } = require("rxjs/operators");
const axios = require("axios");

// let observable$ = new Observable(observable => {
//     let i = 0;
//     let cancellationToken = setInterval(() => {
//         observable.next(i);
//         i++;
//     }, 1000);
//     setTimeout(() => {
//         clearInterval(cancellationToken);
//         observable.complete();
//     }, 10000);
// });

// observable$ = interval(1000).pipe(
//     map(v => v + 10),
//     filter(v => v % 2 == 0),
//     buffer(interval(5000))
// )

// observable$.subscribe(value => {
//     console.log(`Observable emitted value: ${value}`);
// }, err => {
//     console.log("There has been an error: ", err);
// }, completed => {
//     console.log("Observable completed");
// })

function fetchUserName(id) {
    return from(axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}`)).pipe(
        map(response => response.data),
        map(user => user.name)
    );
}

from(axios.default.get("https://jsonplaceholder.typicode.com/posts").then(response => response.data))
.pipe(
    flatMap(p => p),
    concatMap(post => fetchUserName(post.userId), (post, username) => {
        post.userName = username;
        return post; 
    })
).subscribe(posts => {
    console.log("Posts: ", posts);
});
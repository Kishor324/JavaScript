// A synchronous function executes one line at a time. The next line waits until the current line finishes.

// function first() {
//     console.log("First");
// }

// function second() {
//     console.log("Second");
// }

// first();
// second();

// console.log("End");

// An asynchronous function allows other code to run while waiting for a task to complete (such as fetching data from a server, reading a file, or using a timer).

// console.log("Start");

// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 2000);

// console.log("End");



// example of callback pattern


function Profilesearch(username, cd) {
    console.log("Fetching the Kishor profile...");

    setTimeout(() => {
        cd({
            _id: 12122,
            username,
            age: 24,
            email: "kishor444@gmail.com"
        });
    }, 2000);
}

function Likepost(id, cd) {
    console.log("Fetching all posts...");

    setTimeout(() => {
        cd({
            _id: id,
            posts: ["hey", "hello", "Good morning"]
        });
    }, 3000);
}

function Savethepost(id, cd) {
    console.log("Fetching saved posts...");

    setTimeout(() => {
        cd({
            _id: id,
            saved: [1, 2, 3, 4, 55, 56]
        });
    }, 3000);
}

Profilesearch("kishor", function (data) {
    console.log(data);

    Likepost(data._id, function (posts) {
        console.log(posts);

        Savethepost(data._id, function (saved) {
            console.log(saved);
        });
    });
});
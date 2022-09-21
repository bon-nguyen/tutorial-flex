-Sync
- Async


// 

A promise is a way to handle asynchronous operations in Javascript in Javascript

=> Action eventual success value or failure reason.

A promise is in one of these states:
- Pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- Rejected: meaning that the operation failed.


>> Callback


>> Promise 
- Sync 

// an asynchronous action should always return a promise

>> Promise chaining
We can also .then to ao single promise. This is not chaining
Here' the picture (compare it with the chaining above);

            | new Promise |
               resolve(1)
       |          |         |
      .then     .then        .then


>> Error handling with promise
`Promise chains are great at error handling`
// Error handing with promises
fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));

`The "invisible try...catch` around the executor automatically catches the errors and turn it into rejected promise.

`.catch` handles errors in promises of all kinds be it a reject() call
`.then` 
In any case we should have the unhandledrejection event handler (for browsers, and analogs for other environments) to track unhandled errors and inform the user (and probably our server) about them, so that our app never “just dies”.


>> Promise API
> There are 6 static methods in the Promise class. We'll quickly cover thir use cases here
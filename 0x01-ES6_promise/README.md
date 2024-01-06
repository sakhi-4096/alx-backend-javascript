# ES6 Promises
A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value.

![Promises](https://miro.medium.com/v2/resize:fit:475/1*WScLtOWQpMpU0QTLvsD4yA.jpeg)

## Description
ES6 (ECMAScript 2015) introduced the concept of Promises in JavaScript, providing a cleaner and more flexible way to work with asynchronous operations. A Promise is an object representing the eventual completion or failure of an asynchronous operation, and its resulting value.

## Features 
* **States:**
  > **Pending:** The initial state; the promise is neither fulfilled nor rejected.
  > **Fulfilled:** The operation completed successfully, and the promise has a resulting value.
  > **Rejected:** The operation failed, and the promise has a reason for the failure.

* **Creating a Promise:**
A Promise is created using the Promise constructor, which takes a function with two parameters: resolve and reject. Inside this function, you perform the asynchronous operation, and when it is complete, you call resolve with the result, or reject with an error.
```js
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* operation is successful */) {
    resolve('Operation completed successfully');
  } else {
    reject('Operation failed');
  }
});
```

* **Handling Promises:**
  > The then method is used to handle the successful completion of a promise.
  > The catch method is used to handle promise rejections.
  > The finally method is used to perform actions irrespective of whether the promise was fulfilled or rejected.
  ```js
  myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Promise completed'));
  ```

* **Chaining Promises:**
Promises can be chained using the then method, allowing for a more sequential and readable style of asynchronous code.
```js
fetch('https://api.sakhile.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

* **Async/Await:**
ES2017 introduced async and await, which provide a more concise syntax for working with Promises, making asynchronous code appear more like synchronous code.
```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

## Credits

## Contact
 * [Twitter](https://www.twitter.com/sakhilelindah) / [Github](https://github.com/sakhi-4096) / [Mail](mailto:sakhilelindah@protonmail.com)
# ES6 Data Manipulation
The use of features introduced in ECMAScript 2015 (ES6) to perform various operations on data structures in JavaScript. 

![Data manipulation](https://s3.memeshappen.com/memes/javascript--meme-6392.jpg)

## Description
ES6 brought several enhancements to the language, making data manipulation tasks more concise, readable, and expressive. Key features include arrow functions, destructuring assignment, spread and rest operators, and new data structures like Map and Set. These features enable developers to filter, transform, and manage data with more efficient and modern syntax, enhancing the overall capabilities of JavaScript for handling and processing data.

## Features
 * **Arrow Functions:** provide a concise syntax for writing function expressions. They are often used in array methods for concise and expressive code.
 ```js
 const numbers = [1, 2, 3, 4];

 // Using arrow function with map
 const squaredNumbers = numbers.map(num => num ** 2);

 // Using arrow function with filter
 const evenNumbers = numbers.filter(num => num % 2 === 0);
 ```

 * **Destructuring Assignment:** Destructuring allows you to extract values from arrays or objects into variables in a concise way.
 ```js
 const person = { name: 'Sakhile', age: 40 };

 // Destructuring an object
 const { name, age } = person;
 ```

 * **Spread Operator:** The spread operator (...) is used to spread elements of an iterable (like an array) into a new array or object.
 ```js
 const arr1 = [1, 2, 3];
 const arr2 = [...arr1, 4, 5]; // Creates a new array [1, 2, 3, 4, 5]
 ```

 * **Rest Parameter:** The rest parameter (...) allows a function to accept an indefinite number of arguments as an array.
 ```js
 function sum(...numbers) {
   return numbers.reduce((acc, num) => acc + num, 0);
 }

 console.log(sum(1, 2, 3)); // Outputs 6
 ```

 * **Map, Set, and WeakMap/WeakSet:** ES6 introduced Map and Set data structures for efficient key-value mappings and unique values, respectively.
 ```js
 // Map
 const myMap = new Map();
 myMap.set('key', 'value');
 console.log(myMap.get('key')); // Outputs 'value'

 // Set
 const mySet = new Set([1, 2, 3, 3]);
 console.log(mySet); // Outputs Set { 1, 2, 3 }
 ```

 * **Template Literals:** allow you to embed expressions inside string literals, making string manipulation more readable.
 ```js
 const name = 'Sakhile';
 const greeting = `Hello, ${name}!`;
 ```

## Credits

## Contact
 * [Twitter](https://www.twitter.com/sakhilelindah) / [Github](https://github.com/sakhi-4096) / [Mail](mailto:sakhilelindah@protonmail.com)
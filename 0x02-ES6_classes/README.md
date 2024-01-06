# ES6 Classes
ES6 classes make it easier to work with object-oriented programming concepts in JavaScript.

![Classes](https://miro.medium.com/v2/resize:fit:1400/1*Nchuy0wCFHYnq3Vle-Ex0Q.png)

## Description
ES6 (ECMAScript 2015) introduced a new syntax for creating classes in JavaScript, known as ES6 classes. Classes in JavaScript provide a way to create constructor functions and prototypes in a more concise and readable manner. ES6 classes provide a more familiar syntax for those coming from other programming languages with class-based inheritance systems. They are syntactic sugar over JavaScript's existing prototype-based inheritance and offer a more structured way to define and work with objects and their behavior.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the class
const person1 = new Person('Sakhie', 71);

// Calling a method on the instance
person1.sayHello();
```

## Credits

## Contact
 * [Twitter](https://www.twitter.com/sakhilelindah) / [Github](https://github.com/sakhi-4096) / [Mail](mailto:sakhilelindah@protonmail.com)
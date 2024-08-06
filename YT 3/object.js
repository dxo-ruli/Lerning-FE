//````````````````````````````````OBJECT LITERAL (UMUM)````````````````````````````````//
//An object literal is a list of property names:values inside curly braces {}.
// const objectLiteral = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(objectLiteral)


//````````````````````````````````CREAT a JS OBJECT ````````````````````````````````//

//Buat object
// const person = {};

//Beri properti
// person.firstName = "John";
// person.lastName = "Asep";
// person.age = 23;
// person.eyeColor = "Brown";

// console.log("My name is " + person.firstName + " " + person.lastName);


//````````````````````````````````OBJECT CONSTRUCTOR FUNCTION````````````````````````````````//
//Sometimes we need to create many objects of the same type. To create an object type we use an object constructor function.
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// Create a Person object
// const me = new Person('Ruli', 'Alqodri', 20, 'Brown')
// console.log("My name is " + me.firstName + " " + me.lastName);


//````````````````````````````````PROPERTY DEFAULT VALUES````````````````````````````````//
//A value given to a property will be a default value for all objects created by the constructor
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = 'Cameroon'       //property default => udh ada di awal
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// console.log("My father is " + myFather.nationality );

//--------you can not add a new property to an existing object constructor 
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// Person.nationality = 'Cameroon';       //add property => undefined

// const myFriend = new Person("John", "Doe", 50, "blue");
// console.log("My Friend is " + myFriend.nationality );


//---------Solution (line 48) : The JavaScript "prototype" property allows you to add new properties to object constructors
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// Person.prototype.nationality = 'Cameroon';       //add property => undefined

// const myFriend = new Person("John", "Doe", 50, "blue");
// console.log("My Friend is " + myFriend.nationality );


//--------The JavaScript prototype property also allows you to add new methods to objects constructors
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }

// Person.prototype.name = function() {           //add methode
//     return this.firstName + " " + this.lastName
// }

// const myMother = new Person("Dina", "Maisa", 50, "blue");
// console.log('My Mothers Name is ' + myMother.name())


//````````````````````````````````JS OBJECT METHODS````````````````````````````````//
//-------.assign()
//The Object.assign() method copies properties from one or more source objects to a target object.
// const person1 = {                     //object target
//     firstName: 'Caca',
//     lastName: 'Carmila',
//     age: 30,
//     eyeColor: 'Blue'
// };

// const person2 = {firstName: 'Anne', lastName: "Smith"};            //source
// Object.assign(person1, person2)     //mksdnya : pilih person1 dan assign person2 kedalamnya

// console.log(person1)


//-------.entries()
//Object.entries() returns an array of the key/value pairs in an object:
// const person = {                     //object target
//     firstName: 'Caca',
//     lastName: 'Carmila',
//     age: 30,
//     eyeColor: 'Blue'
// };

// let one = Object.entries(person)
// console.log(one)

//Object.entries() makes it simple to use objects in loops:
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// let text = "";
// for (let [fruit, value] of Object.entries(fruits)) {      //syntax for of
//     text += fruit + ": " + value + "<br>";               //<br> berfungsi klo di konversi pake DOM
// }
// console.log(text);


//Object.entries() also makes it simple to convert objects to maps:
// const fruits = {Bananas:300, Oranges:200, Apples:500};

// const myMap  =new Map(Object.entries(fruits))
// console.log(myMap)                           //Map(3) {'Bananas' => 300, 'Oranges' => 200, 'Apples' => 500}


//Object.fromEntries()
//The fromEntries() method creates an object from a list of key/value pairs.
// const fruits = [
//     ["apples", 300],
//     ["pears", 900],
//     ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits);
// console.log(myObj)                 //{apples: 300, pears: 900, bananas: 500}


//Object.values
//Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "Blue"
};

let text = Object.values(person)
console.log(text)


//Object.groupBy()
//The Object.groupBy() method groups elements of an object according to string values returned from a callback function.

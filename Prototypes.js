/*
- What is Prototype?
- What is Prototypal Inheritance?
- What is Prototype Chain?
- Why we call it _proto_ ? So that you don't end up messing the prototype.
- What is inheritance in Javascript?
*/
//whenever you create anything[object, function, arr...] in JS, even a variable they get access to some of the hidden properties and methods. So, these come via Prototype. It attaches an object to your original object and that is how you  get access to some of the hidden properties and methods. Which we can access directly by using a dot(.) operator.

//Quick tip: _proto_ is on the object instance, prototype is on the constructor function.

const users = {
  firstName: "Shyam",
  lastName: "Yadla",
  age: 23,
};
console.log(users.__proto__);
/**
 * arr=["Apple","Ball"]
    (2) ['Apple', 'Ball']

    arr.__proto__ (1):-->
    [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object

    Array.prototype (1):-->means 1's are same
    [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

    arr.__proto__.__proto__ (2):-->
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

    Object.prototype (2):-->
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

    arr.__proto__.__proto__.__proto__ (3):-->
    null
*/
//This is all prototype chain.

//Everything in Js is a Object, bcz it is actually down the prototype chain, ends becoming the object.

const users2 = {
    firstName: "Kavya",
};

//Never do this, causes performance issue:

//this is how users2 inherit from users, that is what prototypal inheritance is.
users2.__proto__ = users;
//users2 is inheriting properties of users. When we did users2.lastName, it is checking inside users2, if it is not present, it is inheriting from the users, which is it's parent which is lastName.This is called Prototypal Inheritance.
console.log(users2.lastName)//this is happening because, it is sitting under its proto
console.log(users2.__proto__);  
console.log(users2.firstName,users2.lastName)//this gets firstName from users2


//Setting this myBind onto the prototype of function will give access to this myBind method. So whatever it is fun or we have new function, to each and every method now can access this myBind method.
Function.prototype.myBind = function(){
    console.log("Prototypes");
};

function fun(){

};
fun.myBind();

//The difference between `__proto__` and `prototype` is simple: `__proto__` is a property of an object instance, while `prototype` is a property of a constructor function. When you use `__proto__` , you're looking up properties and methods on an object's prototype chain.

//__proto__ (also called the Dunder Proto or Double Underscore Prototype) is a property of Object. prototype (more on that in a minute) that exposes the hidden [[Prototype]] property of an object and allows you to access or modify it.
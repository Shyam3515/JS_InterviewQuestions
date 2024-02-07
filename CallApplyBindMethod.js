const users = {
    firstName: "Shyam",
    lastName: "Yadla",
    //each and every function in Js, has access to this KW over here in this function, this KW will point to the name object.
    printFullName : function(){
        console.log(this.firstName,"",this.lastName)
    }
};

const users2 = {
    firstName: "Kavya",
    lastName: "Yadla",
};

/**Call 
Call is used to invoke the function directly by passing the reference.
Using call method we can do function borrowing we can borrow functions from other objects and use it with the data of some other objects. Every method has access to this Call();

The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
*/

//take the func which needs to be called
// [1] In this call the first argument will be the reference (or) what we want this this[this Kw in users object] to be pointing to. In our case this, this to pointing to users2 object.
users.printFullName.call(users2);


const name = {
    firstName: "Shyam",
    lastName: "Yadla",
};

let printFullName = function(hometown, state){
    console.log(this.firstName,this.lastName +" from "+ hometown,",", state)
}

const name2 = {
    firstName: "Kavya",
    lastName: "Yadla",
};
//we can do like this
// [2] And the later arguments can be the arguments to the function.
printFullName.call(name,"Mulalanka", "AP");
printFullName.call(name2,"Mulalanka", "AP");



// ****** APPLY ********
//Apply - difference in passing arguments from call method-passing arguments as array of list
printFullName.apply(name2,["Mulalanka", "AP"]);



//Bind- does not invoke the method directly but gives you copy of exactly same method which can be invoked later.
/**
 * The bind method looks exactly same as the call method, but the only difference is instead of directly calling this method over here, this bind method binds this printFulName with the object and returns as the copy of that method.
*/

let printName = printFullName.bind(name,"Mulalanka", "AP");
console.log(printName)//gives you the exact copy of the printFullName method.
printName();
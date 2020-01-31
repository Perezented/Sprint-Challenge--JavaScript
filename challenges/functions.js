// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
    return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function greeting(fName, lName) {
    return `\"Hello ${fName} ${lName}, nice to meet you!\"`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: Only the function within its scope can access that information. if a funciton is within that scope, they can access it too. An external function cannot access the internal functions code though.

const external = "I'm outside the function"; //in the global scope, everything can call on it.

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!"; //myFunciton scope
    //myFunciton scope, cannot reach inside other functions.
    function nestedFunction() {
        console.log(internal); //nestedFunction scope, and myFunction scope accessable
    }

    //myFunction scope
    nestedFunction();
} //myFunction scope

myFunction();

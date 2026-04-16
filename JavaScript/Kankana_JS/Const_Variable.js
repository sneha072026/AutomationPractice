
// Demonstrates `const` in JavaScript. A `const` variable cannot be reassigned after it's created.

const mobile = 9011336600;
console.log("Constant variable", mobile);

// The reassignment below is commented out because it would throw. a TypeError at runtime: "Assignment to constant variable."
/*
mobile = 980897777777; // Uncaught TypeError: Assignment to constant variable.
console.log("Updated Constant variable", mobile);
*/
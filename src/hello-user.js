const readlineSync = require("readline-sync");

const name = readlineSync.question("\nHi! What is your name?\n");
console.log("Hello, " + name + "!");

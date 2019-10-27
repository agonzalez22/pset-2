const readlineSync = require("readline-sync");
const student = Number(readlineSync.question("\nStudents: "));
const teacher = Number(readlineSync.question("Teachers: "));
const cap = Number(readlineSync.question("Bus capactiy: "));

let totalp = student + teacher;
let fulbus = totalp / cap;
let remp = Math.ceil(fulbus);
let busremain = totalp % cap;

console.log("\n" + remp + " bus(es) is (are) needed, with " + busremain + " passengers(s) on the last bus.");

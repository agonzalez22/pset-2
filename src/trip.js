const readlineSync = require("readline-sync");
const student = Number(readlineSync.question("\nStudents: "));
const teacher = Number(readlineSync.question("Teachers: "));
const cap = Number(readlineSync.question("Bus capactiy: "));

let totalp = student + teacher;
let buscap = totalp / cap
let buses = Math.ceil(buscap*1)
let busremain = totalp % buscap

console.log("\n" + totalb + " bus(es) is (are) needed, with " + busremain)

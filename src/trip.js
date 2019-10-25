const readlineSync = require("readline-sync");
const student = readlineSync.question("\nStudents: ");
const teacher = readlineSync.question("Teachers: ");
const buscap = readlineSync.question("Bus capactiy: ");

let totalp = student + teacher
let totalb = totalp / buscap
let busremain = totalp % buscap

console.log("\n" + totalb + " bus(es) is (are) needed, with " + busremain)

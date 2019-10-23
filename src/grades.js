const readlineSync = require("readline-sync");

const Hweight = 0.15
const Qweight = 0.35
const Tweight = 0.5

let H1 = readlineSync.question("\nEnter three homework grades.\n");
let H2 = readlineSync.question("");
let H3 = readlineSync.question("");

let Q1 = readlineSync.question("\nEnter three quiz grades\n");
let Q2 = readlineSync.question("");
let Q3 = readlineSync.question("");

let T1 = readlineSync.question("\nEnter three test grades.\n");
let T2 = readlineSync.question("");
let T3 = readlineSync.question("");

let Hweight0 = ((H1 + H2 + H3) / 3) * Hweight
let Qweight0 = ((Q1 + Q2 + Q3) / 3) * Hweight
let Tweight0 = ((T1 + T2 + T3) / 3) * Hweight

let FinalGrade = (Hweight0 + Qweight0 + Tweight0)
let FinalGrade0 = Math.round(100*FinalGrade)/(100)

console.log("\nYour marking period grade is " + (FinalGrade0) + "%")

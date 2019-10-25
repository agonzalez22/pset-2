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

let Hweight0 = (H1*Hweight) + (H2*Hweight) + (H3*Hweight)
let Qweight0 = (Q1*Qweight) + (Q2*Qweight) + (Q3*Qweight)
let Tweight0 = (T1*Tweight) + (T2*Tweight) + (T3*Tweight)

let FinalGrade = (Hweight0 + Qweight0 + Tweight0) / 3

console.log("\nYour marking period grade is " + FinalGrade.toFixed(2) + "%")

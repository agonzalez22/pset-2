const readlineSync = require("readline-sync");
const salary = readlineSync.question("\nAnnual salary: ");

const con = 0.07
const fed = 0.157
const soc = 0.062
const med = 0.0145
const stat = 0.0447

let totaltax = fed + soc + med + stat;
let sal = (1 - con) * salary
let salary1 = (1 - totaltax) * sal
let salary2 = (salary1/24)
let g = salary2.toLocaleString('en-US', { style : 'currency' , currency: 'USD'})

console.log("\nYour Take-Home pay each check will be " + g)

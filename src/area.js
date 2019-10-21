const readlineSync = require("readline-sync");
const Width = readlineSync.question("Width: ");
const Length = readlineSync.question("Length: ");

const Chicken = 2.54;
let John = Length;
let John2 = Width;
let John3 = Width * Chicken;
let John4 = Length * Chicken;
let John5 = John4 * John3
let John6 = Math.round(100*John5)/(100)
let Finaljohn = John6.toLocaleString();

console.log("\nA(n) " + (Width) + ("-by-") + (Length) + (" inch sheet of paper has an area of ") +  (Finaljohn) + " square millimeter(s).")

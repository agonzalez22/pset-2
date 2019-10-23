const readlineSync = require("readline-sync");
const Width = readlineSync.question("Width: ");
const Length = readlineSync.question("Length: ");

const Conversion = 25.4;
let A = Length;
let B = Width;
let C = Width * Conversion;
let D = Length * Conversion;
let E = C * D
let F = Math.round(100*E)/(100)
let G = F.toLocaleString();

console.log("\nA(n) " + (Width) + ("-by-") + (Length) + (" inch sheet of paper has an area of ") +  (G) + " square millimeter(s).")

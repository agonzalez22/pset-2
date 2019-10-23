const readlineSync = require("readline-sync");
const Width = readlineSync.question("\nWidth:\n ");
const Length = readlineSync.question("Length: ");

const Conversion = 2.54;
let A = Length;
let B = Width;
let C = Width * Conversion;
let D = Length * Conversion;
let E = C + C + D + D
let F = Math.round(100*E)/(100)
let G = F.toLocaleString();

console.log("\nA(n) " + (Width) + ("-by-") + (Length) + (" inch sheet of paper has a permiter of ") +  (G) + " centimeter(s).")

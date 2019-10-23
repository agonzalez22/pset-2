const readlineSync = require("readline-sync");
const Width = readlineSync.question("\nWidth:\n ");
const Length = readlineSync.question("Length: ");

let A = Length;
let B = Width;
let C = (A*A) + (B*B)
let D = Math.sqrt(C)
let E = Math.round(100*D)/(100)
let F = E.toLocaleString();

function end(F) {
  return Number.parseFloat(F).toFixed(2);
}

console.log("\nA(n) " + (Width) + ("-by-") + (Length) + (" inch sheet of paper has a diagonal of ") +  end(F) + " inch(es).")

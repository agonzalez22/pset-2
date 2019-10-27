const width = 24
const length = 48
const d = 6
let r = d/2
let acircle = Math.PI * (r * r)
let arec = width * length
let sa = arec - acircle
let sa1 = Math.round(100*sa)/(100)
let sa2 = sa1.toLocaleString();

console.log("\nThe surface area of a standard Cornhole board is " + sa2 + " square inch(es).")

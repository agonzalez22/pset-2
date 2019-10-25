const readlineSync = require("readline-sync");


const HourlyWage = Number(readlineSync.question("\nHourly Wage: "));
let Monday = Number(readlineSync.question("\nMonday: "));
let Tuesday = Number(readlineSync.question("Tuesday: "));
let Wednesday = Number(readlineSync.question("Wednesday: "));
let Thursday = Number(readlineSync.question("Thursday: "));
let Friday = Number(readlineSync.question("Friday: "));
let Saturday = Number(readlineSync.question("Saturday: "));
let Sunday = Number(readlineSync.question("Sunday: "));

let Hours = Monday + Tuesday + Wednesday + Thursday + Friday +Saturday + Sunday
let Week = HourlyWage * Hours

let pay = Week.toLocaleString('en-US', { style : 'currency' , currency: 'USD'})


console.log("\nYou'll make $" + pay + " this week.")

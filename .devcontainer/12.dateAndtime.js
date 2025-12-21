let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString())
// ;console.log(typeof myDate);
//indian style date
// console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.getFullYear());
let myDates = new Date("02-28-2023");
//indian style date
console.log(myDates.toLocaleString('en-IN'));
console.log(myDates.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `
console.log("i am here");
let a = newDate.toLocaleString('default', {
    weekday: "long",
     year: "numeric",   // 2025
    
})
console.log(a);
let mydate=new Date();
//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());
//console.log(typeof mydate); //object
let mycreateddate=new Date("02-12-2025");
let mytimestamp=Date.now();
//console.log(mytimestamp);
//console.log(mycreateddate.getTime());
//console.log(Math.floor(Date.now()/1000));     //to convert it in seconds
// in js month starts from 0---------  0=jan
console.log(mydate.getFullYear());
mydate.toLocaleString("default",{
    weekday:"long"
})
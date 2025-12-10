/*let myname=33;
console.log(typeof myname); //number
let stringmyname=String(myname);
console.log(typeof stringmyname); //string
let st="33abc"let num=Boolean(bol);;
let somenum=Number(st);
console.log(typeof somenum); //number
console.log(somenum); // NaN*/
let bol=1;
//console.log(num);//true     bol->0 ----false
bol="";
//let num=Boolean(bol);
//console.log(num); //false            bol=" " true    bol="diya" true
bol=undefined;  // null->false   undefined ->false
let num=Boolean(bol);
//console.log(num);
let a=undefined;
let s=Number(a);             // a=null s->0   a=undefined s->NaN
console.log(s);

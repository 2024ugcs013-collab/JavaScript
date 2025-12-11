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
//console.log(s);
console.log(typeof 2+"1"); //21  number1
console.log(typeof "2"+1); //21   string1
console.log(typeof 3+2+"1");//51  number21
console.log(typeof "3"+2+1);//321  string21
console.log(typeof 3+"3"+1);//321 number31
console.log(3+"2"+1);
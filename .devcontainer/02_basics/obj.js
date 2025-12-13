//const tinderuser=new Object();
const tinderuser={};
tinderuser.id="12133abh";
tinderuser.email="hiteh@gmail.com";
tinderuser.isLogged=false;
//console.log(tinderuser);

const user={
    id:"yr984992u",
    email:"oijroewjjf@gmail.com",
    name:{
        fullname:{
            firstname:"dia",
            lastname:"sahu"
        }
    }
}
//console.log(user.name.fullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={4:"a",3:"b"};
//const obj={obj1,obj2};
//const obj={...obj1,...obj2};
//const obj=Object.assign({},obj1,obj2);
//console.log(obj);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLogged'));
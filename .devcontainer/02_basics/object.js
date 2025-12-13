//object literals
const sym=  Symbol("key1");
const obj={
    name:"DIYA",
    email:"diya@gmail.com",
    age:19,
    islogged:false,
   [sym]:"mykey"  // syntaax to write symbol
}
//console.log(obj.email);
//console.log(obj["email"]);
//console.log(typeof (obj[sym]));
//console.log(obj);
obj["islogged"]=true;
//console.log(obj["islogged"]);
//Object.freeze(obj); ///freeze object
obj["age"]=20;
//console.log(obj);
obj.greetings=function(){
    return "hello";
}
console.log(obj.greetings());   //call function like this
obj.greetings1=function(){
    return `hello js user,${this.name}`; //call element of same object
}
console.log(obj.greetings1());
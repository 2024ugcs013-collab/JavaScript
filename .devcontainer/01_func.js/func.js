let result=addtwonumbers(2,4); //here we can acess the func before declaring it
//console.log(result);
function addtwonumbers(number1,number2){
    return number1+number2;
}
//let result=addtwonumbers(2,4);
//console.log(result);

function userlogin(username){
    if(username!=undefined){
        return `${username} just logged in `;}
    else{return `enter valid username`;}
    
}
//--------------------------------------------------------------------------------------
const user=userlogin(null);
//console.log(user);
//console.log(addtwono(2,3)); // when we declare a function using a variable then we cant acess it before that func
const addtwono=function(num1,num2){
    return num1+num2;
}
//console.log(addtwono(2,3));


//--------------------------------------------------------------------------------- */


function calc(...num1){                 // to take more than one argument then it will return an *array*
    return num1;
}
//console.log(calc(20));
//---------------------------------------------------------------------------------------

function calc(val1,val2,...num1){    
    return num1+val1+val2;   // to take more than one argument then it will return an *array
}
//console.log(calc(20,30,40,50));          //val1=20,val2=30,[40,50]
//------------------------------------------------------------------------------------

const iuser={
    name:"Diya",
    dob:"20/04/2005"
}
function handle(anyobj){
     return `${anyobj.name},logged in......dob is${anyobj.dob}`;
}
//const a=handle(iuser);
//console.log(handle(iuser));

//-------------------------------------------------------------------------------------------------

const  a=[1,2,3,4];
function arr(anyarray){
    return anyarray[1];
}
//console.log(arr([7,8,9,0]));

//-------------------------------------------------------------------------------------------------------
// this KEYWORD IN OBJECT
const auser={
    name:"Diya",
    courseprice:999,
    welcomemessage:function(){
        console.log(this);
        console.log(`${this.name},welcome to website`);   //use to acess current object
    }
}
//auser.welcomemessage();
//auser.name="sam";
//auser.welcomemessage();
//console.log(this);           o/p:{}

//-------------------------------------------------------------------------------------------------
//this KEYWORD IN FUNCTION

function hello(){
    const uname="Diya";
    console.log(this.uname);         //undefined++++++++++++++++++ this doesn't work inside function-----o/p undefined
}
//hello();

//-----------------------------------------------------------------------------------------------

const chai= () =>{
    let username="DIYA";
    console.log(this.username);        //undefined
}
//chai();
//-----------------------------------------------------------------------------------------------------
const addtwo= (num1,num2)=>{return num1+num2}  //whenever use {} use return keyword
//console.log(addtwo(3,4));

const add= (num1,num2)=>(num1+num2);      // when we use () we dont heed use return
//console.log(add(2,3));

const ob=()=>({user:"diya"});         // need to return object just enclose it in ()
console.log(ob());
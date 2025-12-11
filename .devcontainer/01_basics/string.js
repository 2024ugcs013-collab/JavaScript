const gamename= new String("DIYA SAHU");
console.log(gamename);
console.log(gamename[1]);
console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("Y"));
console.log(gamename.substring(0,4));
console.log(gamename.slice(-1,4));     //take negative value
// trim -----remove sapces and new line
let newstring ="  diya";
console.log(newstring);
console.log(newstring.trim());
// replace
let url="jdncaiuahfhfijcwo";
console.log(url.replace("d","-"));
// includes
console.log(url.includes("dnca")); //return boolean value 
// spilt
console.log(url.split("i",3));
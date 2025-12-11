const arr=[1,2,3,4,5];
/*console.log(arr);
console.log(arr[0]);
const newarr= new Array(5,6,7,8);
console.log(newarr); //array.length
////different methods in array
arr.push(6);//insert
console.log(arr);
newarr.pop();//delete
console.log(newarr);
(arr.unshift(7));//front-enqueue
console.log(arr);
arr.shift();//front-dequeue
console.log(arr);
console.log(arr.includes(8));//give boolean data type
console.log(arr.indexOf(88));//-1 if not found
const ar= arr.join();//converts to string datatype
console.table([ar,typeof ar]);
// slice and splice
const n=arr.slice(1,3)//doesn't include last index element ---------->no change in original array---->o/p [1,3)
console.log(arr);
const m=arr.splice(1,3)//include last element------>remove all those element from original array--->o/p [1,3]
console.log(arr);*/


const ar=[6,7,8,9];
//arr.push(ar)//push whole arry instead of individual element
//console.log(arr);
const n=arr.concat(ar);
//console.log(n);
const m=[...arr,...ar];
//console.table([n,m]);
const a=[1,2,[3,4],[5,6,[7,8]]];
//console.log(a.flat(1));
//console.log(Array.from("diya"));
//console.log(Array.isArray("diya"));
console.log(Array.from({name:"diya"})); //[] empty array
console.log(Array.of(1,2,3));
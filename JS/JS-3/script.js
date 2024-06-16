/*
console.log("JS working");
let lastName = "Kumar";
let firstname = new String("Rohit");

console.log(typeof(lastName));
console.log(typeof(firstname));

let message = "This is my first message";

let words = message.split(" ");
console.log(words);

// Template litral 

let message2 = `Rohit
${lastName}
${firstname}
thanks for commming `;
console.log(message2);

let date = new Date();
console.log(date);

*/

// const arr = [1,2,3];
// console.log(arr);

// const a=arr[2];
// console.log(a);

// arr.push(4); // add into end

// arr.unshift(4) // begin

// arr.slice(5); // mid

// console.log(arr);

// //Seaching

// console.log(arr.indexOf(2));

// we want to chek if a number exist in an array
//primitive seaching
// if(arr.indexOf(3) != -1){
//     console.log("Present");
// }


// console.log(arr.includes(3))
// console.log(arr.indexOf(3, 0)) 

// let coureses = [
//     {no:1, naam:'Rohit'},
//     {no:2, naam:'Sonu'},
// ]

// console.log(coureses);
//console.log(coureses.includes({no:1, naam:'Rohit'}));  // both are not the same refence/address

// callback seaching 

// let result = coureses.find(function(course){
//     return course.naam === 'Rohit';
// })
// let result = coureses.find(course => course.naam === 'Rohit');

// console.log(result);

//Removing element 
// let arr4 = [1,2,3,4,5,6,7];
// arr4.pop(); // delete from end
// arr4.shift(); // delete from starting
// arr4.splice(2, 1);
// console.log(arr4); 
/*
let number5 = [1,2,3,4,5,6];
let number6 = number5;
//number5.length = 0;
// number5 = [];

//number5.splice(0, number5.length);
console.log(number5);
console.log(number6);
*/
//combining and slicing arrays
/*
let first = [1,2,3,4];
let second = [5,6,7];

let final = first.concat(second);


console.log(final);

//let final2 = final.slice(1, 5);
//let final2 = final.slice(1);
let final2 = final.slice(); // Full slicing
console.log(final2);
*/
// Spread Operator

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9];
/*
let combind = [...arr1,'a', ...arr2 , 'b', true];
console.log(combind);

//copy

let another = [...combind];

// Iterating an Array

// by using for off loop

for(let a of another){
    console.log(a);
}

// by using for each loop 

another.forEach(element =>console.log(element)); */
// Joining Array
// const arrFinal = arr1.join('a,');
// console.log(arrFinal);

// let message = "This is my message";
// let parts = message.split(' ');
// console.log(parts);  // convert into array

// let joined = parts.join('_');
// console.log(joined);
// // Sorting array

//let number = [1,4,2,-76,3,-50];

// number.sort();   // string me convert hota hai 
// console.log(number);

// number.reverse();

// console.log(number);


// Filtering array 

// let result = number.filter(value => value >= 0);
// console.log(result);

// Mapping array

// let number = [1,4,2,6,3,50];

// // let item = number.map(value => 'Student_No' + ' ' + value);
// // console.log(item);

// // Mapping with Object 

// let objConvert = number.map(num => {
//     return {value : num}
// });

// console.log(objConvert);

// caining

let arr3 = [3,-3,2,40,50, -2];

let result = arr3.filter(value => value >= 0).map(value => {return {value:value}});

console.log(result);
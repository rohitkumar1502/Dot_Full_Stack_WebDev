// {} this is clle object literal 

// let a = {} // empty object
console.log("Let's Start");
// Object creation

// const reactangle = {
//     legnth : 1,
//     width : 2,

//     draw : function (){
//         console.log("Drawing");
//     }
// }

// factory function

// function createReactabgle(leg,wid ){
//     return reactangle = {
//         legnth : leg,
//         width : wid,
    
//         // draw : function (){
//         //     console.log("Drawing");
//         // }
//         draw(){
//             console.log("Drawing");
//         }
//     }
   
// }

// let result = createReactabgle(4, 6);
// let result1 = createReactabgle(14, 26);
// let result3 = createReactabgle(142, 126);

//constructor  function -> Pascal Notation -> First later of every words is capital
//constructor  function -> props/methods -> intilise/define
// camelcase -> numberOfStudents
function Reactange4(len, bre){
    this.legnth = len,
    this.breadh = bre,
    this.draw = function(){
        console.log("Drawing");
    }
}

//Objct creation by using constructor

// let reactangleObject = new Reactange4(4,5);

// Dynamic Nature of Object
// reactangleObject.color = "yellow";
// console.log(reactangleObject);
// delete reactangleObject.color;
// console.log(reactangleObject);

// // constructor property 

// reactangleObject.constructor; 
// Reactange4.constructor;

// function is also Object and every object have a constructor

let Reactange5 = new Function(
    'leng', 'bre',
    `this.length = leng;
    this.breadth = bre;
    this.draw = function(){
    console.log("drawing");}`
);

//object creation by using Reactange5
let result = new Reactange5(3, 5)

// Function are object 


// primitive type ke case me copy banti hai
// Null	
// Undefined
// Boolean
// Number
// BigInt
// String
// Symbol	
/*
let a = 30
let b = a;

b++;
console.log(a);
console.log(b);
*/

// non-primitive ke case me address pass hota hai

//function
//object
//array
/*
let abc = {
    value: 20,
}

let c = abc;
c.value++;
console.log(abc.value);
console.log(abc.value);

*/

// let a = 10;

// function inc (a){
//  a++;
//  console.log(a)
// }

// inc(a);
// console.log(a);


let reactangle = {
    length : 2,
    breadth : 4,

}

// for(let key in reactangle){

//     //keys are reflected through key variable
//     // values are reflected through reactangle[key]
//     console.log(key,reactangle[key])
// }


// for off loop we use mostly in iterebles(index ho) (array, map )

// for(let key of reactangle){
//     console.log(key); //TypeError: reactangle is not iterable
// }

// for(let key of Object.entries(reactangle)){  // here i converted into array
//     console.log(key)
// }  

// for(let key of Object.key(reactangle)){  // here i converted into array
//     console.log(key)
// }  


// const car = ["saab", "volvo", "BMW"]

// for(const key of car){
//     console.log(key)
// }

// check the property persent in object 

if("some" in reactangle){
    console.log("Present");
} 
else{
    console.log("Absent");
}

// Object Cloning

// by using 1. Iteration, 2. Assign, 3. Spread
// 1. Iteration,
/*let src = {value: 10};
let dest = {};

for(let key in src){
    dest[key]= src[key]
}

dest.value++;

console.log(src.value)
console.log(dest.value)
*/
// 2. Assign,



// let src ={
//     a: 10,
//     b: 20,
//     c: 30
// }
// let src2 = {
//     value: 10,
// }
// let dest = Object.assign({}, src, src2);
// console.log(dest);

// src.a++;

// console.log(dest);

// 3. Spread

let src4 = {
    a: 30,
    b: 40
}

let dest = {...src4}

console.log(dest);

dest.a++;
console.log(dest.a);
console.log(src4.a);
// Garbage Collection: if not use var/const ... deallocate unused 
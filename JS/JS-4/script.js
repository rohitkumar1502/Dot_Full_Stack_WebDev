// Function: A block of code that fullfield specific task

console.log("Testing");
/*
run();  // hoisting 
function run(){ // function declaration
    console.log("Running");
}
//run();

// Named function assignment
//stand();  // not shifiting or hoistin function assignment
let stand = function walk(){
    console.log("Walking")
}

//stand();

let jump = stand;

jump();

// Anonymous function assignment 
let sum = function(a, b){
console.log(a+b);
}
sum(4, 5);

// Hoisting : Process of moving function declaration to the top of file , done automatically by JS engine

let x = 1;
x = "a";
*/

// function sum(){
//     //console.log(arguments);
//     let Total = 0;
//     for( let value of arguments){
//         Total = Total + value;
//     }

//     return Total;
// }

// console.log(sum(1,2));

// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,4,5));  //rest 4, 5 and 1 and 2 also, mean all data store in argument

// let ans = sum(1,2,3,4,5);
// console.log(ans);

// Rest Operator
 // ..arg store in array
//  function sum(age, num2, ...arg){
//    console.log(arg);
//    console.log(age);
//  }

//  sum(1,2,3,4,5)

// Default parameters

// function intererst(p, q = 4 , r = 5){
//     console.log((p*q*r)/100);
// }
// intererst(2,3,5);

// Geter seter 
/*
let person ={
    fname : "Rohit",
    lname : "Kumar",
    get fullName(){
        return `${person.fname} ${person.lname}`
    },
    set fullName(value){
        if(typeof value !== String){
            throw new Error("You are sent a string");
        }

        let seprate = value.split(" ");
        this.fname = seprate[0];
        this.lname = seprate[1];

    }

}
*/
// function fullName(){
//     return `${person.fname} ${person.lname}`  // read only function
// }

//console.log(fullName());


// getter -> access properties
// setter -> change or mutate the properties

/*
console.log(person.fullName);
try{
    person.fullName = 1;
}
catch(e){
    alert(e);
}


console.log(person.fullName);

*/
let arr = [1,2,3,4,5];
// let total = 0;
// for(let value of arr){
//     total = total + value;
// }
// console.log(total);

let result = arr.reduce((totalValue, currentValue) => totalValue + currentValue , 0);
console.log(result);

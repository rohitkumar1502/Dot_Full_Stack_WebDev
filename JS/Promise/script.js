console.log("Starting");
/*
const promiseOne = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed");
        reslove();

    },1000);
});

promiseOne.then(()=>{
    console.log("resoved")
})


new Promise((reslove, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
    },1000)
}).then(()=>{
    console.log("async 2 is called");
})
    */
/*
const promiseThree = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        reslove({user: "sonu", email:"krohitexample@gmail.com"})
    })

})

promiseThree.then((data)=>{
    console.log(data);
})
    */
/*
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "rohit", password: "1232" });
    } else {
      reject("Error on rejection");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("ya to resove hua aur reject"));
*/
/*
const promiseFive = new Promise((reslove, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            reslove({username: "rohitkumar", passwords: "232"})
        }else{
            reject("Error in settimeout")
        }
    },1000)

})

const consimePromiseFive = async ()=>{
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
}

consimePromiseFive();
*/

// const getAllData = async ()=>{
//     try{
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();
//         console.log(data)

//     }
//     catch(err){

//         console.log(err), "error:";
//     }
// }

// fetch("https://dummyjson.com/products").then((res)=>{
//   return res.json();
// }).then((data)=>console.log(data))
// .catch((err)=>{
//     console.log(err)
// })

fetch("https://dummyjson.com/products")
  .then((res) => {
    res.json().then((data)=>console.log(data))
  })

  .catch((err) => console.log(err));

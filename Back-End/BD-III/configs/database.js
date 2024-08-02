const mongoose = require("mongoose");


const DBConnect = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("---------DB is connected---------"))
    .catch((error)=>{
        console.log(error)
        console.log(error.messsage);
        console.log("Error in Db connection")
        process.exit(1);


    })
}

module.exports = DBConnect;

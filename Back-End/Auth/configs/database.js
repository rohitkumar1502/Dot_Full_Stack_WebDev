const mongoose = require('mongoose');
exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=> {console.log("DB is connected")})
    .catch((err) => {
        console.log("Error in DB connection");
        console.error(err);
        process.exit(1);
    })
}
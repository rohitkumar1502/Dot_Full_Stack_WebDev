//import the model

const Todo = require("../models/Todo.js");

//define rourte handler
exports.createTodo = async(req,res) => {
    try{
        // extract the title and discription from requist body
        const {title, description} = req.body;
        //create new Todo obj and insert into DB
        const responsess_s = await Todo.create({title,description});
        
        // send a json response with succesfull flag
        res.status(200).json(
            {
                success:true,
                data:responsess_s,
                message:'Entry created successfully'
            }
        );

    }
    catch(err){

        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:'internal erver error',
            message:err.message,
        })

    }
}
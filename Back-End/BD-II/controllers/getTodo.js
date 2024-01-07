//Import the model
const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async(req,res) => {
    try{
        // fech all the todo data from data base
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire data fetched"
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}
//getTodoById - by using id we find out the data on database
exports.getTodoById = async(req,res) => {
    try{
        // extract the data on the basis of given id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});
        if (!todo) {
            return res.status(404)
            .json({
                success:false,
                message:"Id not found"
            })
        }
        // given id found
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fatched`,
        })
       

    }
    catch(err){
        res.status(500).json({
            success:false,

            error:err.message,
            message:"Server error"
        })
        

        
    }
}
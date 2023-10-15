const Todo  = require("../models/Todo");

// define route handler

exports.getTodo = async(req,res) => {
    try {
        //fetch all todo items from database
        const todos = await Todo.find({});
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetches"
        });

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        })

    }
}

exports.getTodoId = async(req,res) =>{
    try{
       // extract todo items basis on id
       const id = req.params.id;
       const todo = await Todo.findById({_id: id})

       // id not find
       if(!todo){
        return res.status(404).json({
            success:false,
            message:"No Data Found which your givn id",
        })
       }
       res.status(200).json({
        success:true,
        data:todo,
        message: `Todo ${id} data successfully fatches`
       })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server error'
        })
    }
}
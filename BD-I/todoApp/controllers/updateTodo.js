const Todo = require("../models/Todo");

exports.updateTodo = async(req,res) =>{
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            Date:todo,
            message:`Updated Succesfully`
        })
    
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'

        });
    }
}
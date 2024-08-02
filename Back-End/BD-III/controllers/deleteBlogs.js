const blogsCollection = require("../models/blogs");

exports.deleteBlogs = async (req, res)=>{
    try{
        const {id} = req.params;
        await blogsCollection.findOneAndDelete({_id:id})
    
        res.json({
            success:"Succesfully deleted",
        
        })


    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success: "Fail",
            message: "Internal server error"
        })
    }
}
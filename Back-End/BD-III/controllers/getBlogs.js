const blogsCollection = require("../models/blogs")

exports.getBlogs = async (req, res)=>{
    try{
        const getblog = await blogsCollection.find({});
        res.status(200).json({
            success: true,
            data: getblog,
            message: "Data get successgully"
        })

    }
    catch(err){
        
        console.log(err);
        console.error(err);
        console.log("Error in getBlogs")
        res.status(500).json({
            success: false,
            data: "Internal Server Error",
            message: err.message
        })
        
    }

}
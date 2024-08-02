const Post = require("../models/postModels");

exports.insertData = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const insertedData = await post.save();
    res.status(200).json({
        data: insertedData,
        message: "Siccuess"
    })
  } catch (err) {
    console.log("Error when we inserting data");
    res.status(500).json({
      message: "Internal Server error",
      info: err,
    });
  }
};


exports.getData = async (req,res) =>{
    try{
        const data = await (await Post.find().populate('comments')).populate('likes').exec()
        res.status(200).json({
            data,
            success: true
        })

    }
    catch(err){
        console.log("Error When we geting the data")
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
            info: err
        })
    }
}
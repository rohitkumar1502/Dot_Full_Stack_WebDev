const Comment = require("../models/commentModels");
const Post = require("../models/postModels")

exports.createComment = async (req, res) => {
  try {
    // Fech data from req body
    const { post, user, body } = req.body;
    // Creating a comment object to perform in creating a commnet by using save function
    const comment = new Comment({
      post,
      user,
      body,
    });
    //save the new comment into the data base
    const saveComment = await comment.save();
    // find the post by id add the new comments into the commnets array
    const addComment = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: saveComment._id } },
      { new: true }
    )
      .populate("comments")  // to see actual comments
      .exec();
      res.status(200).json({
        success:true,
        message:"Comment Created Succesfullu",
        data:addComment
      })
  } catch (error) {
    console.log(error);
    console.log("error When Creating a commnet");
    res.status(500).json({
      success: "Fail",
      message: "Internal Server Error",
      info: error,
    });
  }
};

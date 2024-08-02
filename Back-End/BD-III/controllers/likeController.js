const Post = require("../models/postModels");
const Like = require("../models/likeModels");
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLiked = await like.save();
    //update the post collection;
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLiked._id } },
      { new: true }
    )
      .populate("likes")
      .exec();
    res.status(200).json({
      data: updatedPost,
      message: "Post is liked",
    });
  } catch (err) {
    console.log(err);
    console.log("Error When liking the post");
    res.status(500).json({
      success: "Failed",
      Error: err.message,
      message: " Internal server error",
    });
  }
};

// Unlike the post

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    const deletedLike = await Like.findByIdAndDelete({ post: post, _id: like });
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );
    res.status(200).json({
      data: updatedPost,
      message: "Post is liked",
    });
  } catch (err) {
    console.log("Error when unliking the post");
    console.log(err);
    res.status(500).json({
      success: "Failed",
      Error: err.message,
      message: " Internal server error",
    });
  }
};

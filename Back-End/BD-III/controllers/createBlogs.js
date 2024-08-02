const blogsCollection = require("../models/blogs");

exports.createBlog = async (req, res) => {
  try {
    const body = req.body;
    const createdPost = await blogsCollection.create(body);
    res.status(200).json({
        success: true,
        data: createdPost,
        message: "Blogs Post created successfully"
    })

  } catch (err) {
    console.log(err);
    console.error(err);
    console.log("Error in Create Blogs");
    res.status(500).json({
        success: false,
        data: "Internal Server error",
        message: err.message

    });
  }
};

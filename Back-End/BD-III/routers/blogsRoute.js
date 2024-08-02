const express = require("express");
const { createBlog } = require("../controllers/createBlogs");
const { getBlogs } = require("../controllers/getBlogs");
const { deleteBlogs } = require("../controllers/deleteBlogs");
const { createComment } = require("../controllers/commentController");
const { insertData ,getData} = require("../controllers/postControlers");
const { likePost, unlikePost } = require("../controllers/likeController");
const router = express.Router();

router.post("/createblog", createBlog)
router.get("/getblogs", getBlogs);
router.delete("/deleteblog/:id", deleteBlogs)
router.post("/comments/create", createComment);
router.post("/post/create", insertData)
router.get("/posts" ,getData)
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);


module.exports = router;
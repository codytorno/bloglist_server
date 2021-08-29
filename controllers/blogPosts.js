const blogPostRounter = require("express").Router();
const BlogPost = require("../models/blogPost");

// gets all blogposts current in the database
blogPostRounter.get("/", (request, response) => {
  BlogPost.find({}).then(blogpost => response.json(blogpost));
});

// add new blog post to the database
blogPostRounter.post("/", (request, response, next) => {
  const body = request.body;
  //create a new blog post
  const blogPost = new BlogPost({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  });

  blogPost
    .save()
    .then(savedPost => response.json(savedPost))
    .catch(error => next(error));
});

// handle all routes
module.exports = blogPostRounter;

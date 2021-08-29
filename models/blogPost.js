const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

//transform toJSON method to clean up document returned from mongodb
blogPostSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

module.exports = mongoose.model("BlogPost", blogPostSchema);

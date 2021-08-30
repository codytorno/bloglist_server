// counts the total number of likes in the array
const totalLikes = blogPosts => {
  const reducer = (acc, current) => {
    return acc + current;
  };

  return blogPosts.length === 0
    ? 0
    : blogPosts.map(post => post.likes).reduce(reducer);
};

// gets the blog with the most likes in the argument array
const favoriteBlog = blogPosts => {
  const comparer = (prev, current) => {
    return current.likes > prev.likes ? current : prev;
  };

  return blogPosts.length ? blogPosts.reduce(comparer) : {};
};

// finds the author with the largest number of blogs
const mostBlogs = blogPosts => {
  // return empty object if null array passed into function
  if (!Array.isArray(blogPosts)) throw new TypeError();

  // possibly throw in this situation
  if (blogPosts.length === 0) return {};

  const map = new Map();
  let most = {
    author: blogPosts[0].author,
    blogs: 1,
  };
  map.set(most.author, most.blogs);
  for (let i = 1; i < blogPosts.length; i++) {
    let author = blogPosts[i].author;

    // check if value is in map, and increment value
    if (map.has(author)) {
      map.set(author, map.get(author) + 1);
    } else {
      map.set(author, 1);
    }

    // check for most and update most if greater
    let blogCount = map.get(author);
    if (blogCount > most.blogs) {
      most = { author: author, blogs: blogCount };
    }
  }

  // return max
  return most;
};

// finds the author with the largest number of blogs
const mostLikes = blogPosts => {
  // return empty object if null array passed into function
  if (!Array.isArray(blogPosts)) throw new TypeError();

  // possibly throw in this situation
  if (blogPosts.length === 0) return {};

  const map = new Map();
  let most = {
    author: blogPosts[0].author,
    likes: blogPosts[0].likes,
  };
  map.set(most.author, most.likes);
  for (let i = 1; i < blogPosts.length; i++) {
    let item = blogPosts[i];

    // check if value is in map, and increment value
    if (map.has(item.author)) {
      map.set(item.author, map.get(item.author) + item.likes);
    } else {
      map.set(item.author, item.likes);
    }

    // check for most and update most if greater
    let likeCount = map.get(item.author);
    if (likeCount > most.likes) {
      most = { author: item.author, likes: likeCount };
    }
  }

  // return max
  return most;
};

module.exports = { totalLikes, favoriteBlog, mostBlogs, mostLikes };

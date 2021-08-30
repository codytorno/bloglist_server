const listHelper = require("../util/list_helper");

describe("dummy", () => {
  test("returns one", () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });
});

describe("totalLikes", () => {
  const listWithOneBlog = [
    {
      likes: 5,
    },
  ];

  const fullList = listWithOneBlog.concat([{ likes: 3 }]);
  test("returns correct total likes with single item", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });

  test("returns correct total likes with multiple items", () => {
    const result = listHelper.totalLikes(fullList);
    expect(result).toBe(8);
  });

  test("returns correct total likes with empty list", () => {
    const result = listHelper.totalLikes([]);
    expect(result).toBe(0);
  });
});

describe("favoritePost", () => {
  const fullList = [{ likes: 2 }, { likes: 5 }];

  test("returns correct favorite from multiple object array", () => {
    const expected = { likes: 5 };
    const result = listHelper.favoriteBlog(fullList);
    expect(result).toEqual(expected);
  });

  test("returns null from empty list", () => {
    const expected = {};
    const result = listHelper.favoriteBlog({});
    expect(result).toEqual(expected);
  });
});

describe("mostBlogs", () => {
  const fullList = [
    { author: "Cody Torno" },
    { author: "Dani Aguilar" },
    { author: "Dani Aguilar" },
    { author: "Cody Torno" },
  ];

  test("returns first author with most blogs when tie", () => {
    const expected = { author: "Dani Aguilar", blogs: 2 };
    const result = listHelper.mostBlogs(fullList);
    console.log("result:", result);
    expect(result).toEqual(expected);
  });

  test("returns author with most blogs", () => {
    const blogs = fullList.concat([{ author: "Cody Torno" }]);
    const expected = { author: "Cody Torno", blogs: 3 };
    const result = listHelper.mostBlogs(blogs);
    expect(result).toEqual(expected);
  });

  test("return empty object when passed null array", () => {
    expect(listHelper.mostBlogs([])).toEqual({});
  });

  test("throws when given invalid argument type", () => {
    expect(() => listHelper.mostBlogs({ author: "Cody Torno" })).toThrow(
      TypeError
    );
  });
});

describe("mostLikes", () => {
  const fullList = [
    { author: "Cody Torno", likes: 5 },
    { author: "Dani Aguilar", likes: 1 },
    { author: "Dani Aguilar", likes: 6 },
    { author: "Cody Torno", likes: 1 },
  ];

  test("returns first author with most blogs when tie", () => {
    const expected = { author: "Dani Aguilar", likes: 7 };
    const result = listHelper.mostLikes(fullList);
    console.log("result:", result);
    expect(result).toEqual(expected);
  });

  test("returns author with most blogs", () => {
    const blogs = fullList.concat([{ author: "Cody Torno", likes: 5 }]);
    const expected = { author: "Cody Torno", likes: 11 };
    const result = listHelper.mostLikes(blogs);
    expect(result).toEqual(expected);
  });

  test("return empty object when passed null array", () => {
    expect(listHelper.mostBlogs([])).toEqual({});
  });

  test("throws when given invalid argument type", () => {
    expect(() =>
      listHelper.mostBlogs({ author: "Cody Torno", likes: 5 })
    ).toThrow(TypeError);
  });
});

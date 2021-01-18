module.exports = {
  mode: "development",
  entry: {
    login: "./src/javascript/login.js",
    signup: "./src/javascript/signup.js",
    edit: [
      "./src/javascript/edit_review.js",
      "./src/javascript/user.js",
      "./src/javascript/image_uploader.js",
    ],
    add: [
      "./src/javascript/add_review.js",
      "./src/javascript/user.js",
      "./src/javascript/image_uploader.js",
    ],
    category: ["./src/javascript/user.js", "./src/javascript/category.js"],
    index: ["./src/javascript/user.js", "./src/javascript/index.js"],
    profile: ["./src/javascript/user.js", "./src/javascript/profile.js"],
    update: [
      "./src/javascript/user.js",
      "./src/javascript/update.js",
      "./src/javascript/comment.js",
    ],
    search: ["./src/javascript/user.js", "./src/javascript/search.js"],
  },
  output: {
    path: __dirname + "/src/dist",
    filename: "[name].js",
  },
};

const express = require("express");
const bookmarks = express.Router();
const bookmarksArray = require("../models/bookmark.js");

//we are using res.json instead of res.send because we are sending json instead of a simple string
bookmarks.get("/", (request, response) => {
    response.json(bookmarksArray);
})

module.exports = bookmarks;

const db = require('../database/connection');

const Bookmarks = {};

Bookmark.all = bookmark => {
    return db.any(
      "SELECT * FROM articles"
    )
  }

module.exports = Bookmarks;
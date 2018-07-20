const db = require('../database/connection');

const Comment = {};


//adapted from example blog -tm
Comment.vote = (comment) => {
    return db.one(
      "UPDATE comments WHERE id = $<id> RETURNING *",
      comment
    )
}

Comment.all = comment => {
  return db.any(
    "SELECT * FROM comments"
  )
}

Comment.create = comment => {
  return db.one(
    "INSERT INTO comments (user_id, content, article_url, created_at) VALUES ($<user_id>, $<content>, $<article_url>, $<created_at>) RETURNING *",
    comment
  )
}

Comment.findById = id => {
  return db.one(
    "SELECT * FROM comments WHERE id = $<id>", {id: id }
  )
}

Comment.update = comment => {
  return db.one(
    "UPDATE comments SET user_id = $<user_id>, content = $<content>, article_url = $<article_url>, created_at = $<created_at> WHERE id = $<id> RETURNING *",
    comment
  )
}

Comment.delete = id => {
  return db.result(
    "DELETE FROM comments WHERE id = $<id>", {id: id}
  )
}

module.exports = Comment
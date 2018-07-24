const db = require('../database/connection')

const Post = {}

Post.all = () => {
  return db.any(
    "SELECT * FROM posts"
  )
}

Post.create = newPost => {
  return db.one(
    "INSERT INTO posts (stars, author, title, body) VALUES ($<stars>, $<author>, $<title>, $<body>) RETURNING *",
    newPost
  )
}

Post.update = post => {
  return db.one(
    "UPDATE posts SET author = $<author>, stars = $<stars>, title = $<title>,body = $<body> WHERE id = $<id> RETURNING *",
    post
  )
}

Post.findById = id => {
  return db.one(
    "SELECT * FROM posts WHERE id = $<id>",
    { id: id }
  )
}

Post.delete = id => {
  return db.result(
    "DELETE FROM posts WHERE id = $<id>",
    { id: id }
  )
}

// Post.allByTopicId = topic_id => {
//   return db.any("SELECT * FROM posts WHERE topic_id = ${topic_id} ORDER BY created_at DESC",
//     { topic_id: topic_id }
//   )
// }

// Post.stars = post => {
//   return db.one(
//     "UPDATE posts SET stars = $<stars> WHERE id = $<id> RETURNING *",
//     post
//   )
// }

module.exports = Post;

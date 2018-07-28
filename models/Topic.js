const db = require('../database/connection')

const Topic = {}

Topic.all = () => {
  return db.any(
    "SELECT * FROM topics"
  )
}

Topic.findById = id => {
  return db.one("SELECT * FROM topics WHERE id = ${id}",
    { id: id }
  )
}

module.exports = Topic

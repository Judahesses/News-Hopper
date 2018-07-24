const db = require('../database/connection');

const Topic = {};

Topic.all = topic => {
    return db.any(
        'SELECT * FROM topics'
    )
}

Topic.findById = id => {
    return db.one(
        "SELECT * FROM topics WHERE id = $<id>", {id: id}
    )
}

Topic.findByName = name => {
    return db.one(
        "SELECT * FROM topics WHERE name = $<name>", {name: name}
    )
}
module.exports = Topic;
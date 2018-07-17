DROP DATABASE newshopperdb;
CREATE DATABASE newshopperdb;

\c newshopperdb

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS comments;

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name TEXT
)

CREATE TABLE comments (
   id SERIAL PRIMARY KEY NOT NULL,
   user_id INTEGER REFERENCES users(id),
   content TEXT,
   article_url TEXT,
   created_at TIMESTAMP
)

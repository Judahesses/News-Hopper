DROP DATABASE newshopper;
CREATE DATABASE newshopper;

\c newshopper

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS comments;

CREATE TABLE articles (
    id SERIAL PRIMARY KEY NOT NULL,
    title TEXT,
    image_url TEXT,
    date TEXT,
    blurb TEXT,
    url TEXT,
)

CREATE TABLE comments (
   id SERIAL PRIMARY KEY NOT NULL,
   user_id INTEGER REFERENCES users(id),
   content TEXT,
   article_url TEXT,
   created_at TIMESTAMP
)

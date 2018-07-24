DROP DATABASE newshopper;
CREATE DATABASE newshopper;

\c newshopper

DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS reviews;

CREATE TABLE topics (
   id SERIAL PRIMARY KEY,
   name TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL,
    topic_id INTEGER REFERENCES topics(id),
    stars INTEGER,
    author TEXT,
    created_at TEXT,
    title TEXT,
    body TEXT
);
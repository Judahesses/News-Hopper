DROP DATABASE newshopper;
CREATE DATABASE newshopper;

\c newshopper

DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS comments;

CREATE TABLE articles (
    id SERIAL PRIMARY KEY NOT NULL,
    title TEXT,
    urlToImage TEXT,
    author TEXT,
    publishedAt TEXT,
    description TEXT,
    url TEXT
);

CREATE TABLE comments (
   id SERIAL PRIMARY KEY NOT NULL,
   article_id INTEGER REFERENCES articles(id),
   author TEXT,
   body TEXT,
   created_at TIMESTAMP
);

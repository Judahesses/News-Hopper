DROP DATABASE newshopper;
-- CREATE DATABASE newshopper;

-- DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY NOT NULL,
    -- topic_id INTEGER REFERENCES topics(id),
    stars INTEGER,
    author TEXT,
    created_at TIMESTAMP,
    title TEXT,
    body TEXT
);

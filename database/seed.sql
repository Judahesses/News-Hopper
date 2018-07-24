\c newshopper;

DELETE FROM topics;
DELETE FROM reviews;

INSERT INTO topics (name) VALUES ('Feedback');
INSERT INTO topics (name) VALUES ('Suggestion');
INSERT INTO topics (name) VALUES ('Other');

INSERT INTO posts (topic_id, stars, author, title, body)
VALUES (
   1,
   4,
   'Alex Vargas',
  --  'Today at 11:52 AM',
   'Great Product',
   'This was a free guide created by rithmschool in SF. It covers everything from the basic Essential Developer Tools to the more advanced topics of JavaScript, Node, React, and Python.'
);


-- CREATE TABLE posts (
--     id SERIAL PRIMARY KEY NOT NULL,
--     topic_id INTEGER REFERENCES topics(id),
--     stars INTEGER,
--     author TEXT,
--     created_at TEXT,
--     title TEXT,
--     body TEXT
-- );

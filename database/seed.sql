\c newshopper;

DELETE FROM topics;
DELETE FROM posts; 

INSERT INTO topics (name) VALUES ('Feedback');
INSERT INTO topics (name) VALUES ('Suggestion');
INSERT INTO topics (name) VALUES ('Other');

INSERT INTO posts
(stars, author, created_at, title, body)
VALUES 
(
    2, 'Bob', '5/6/13', 'great site', 'test'
);
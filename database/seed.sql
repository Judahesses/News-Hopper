\c newshopper;

DELETE FROM topics;
DELETE FROM posts; 

INSERT INTO topics (name) VALUES ('Review');
INSERT INTO topics (name) VALUES ('Suggestion');

INSERT INTO posts
(stars, author, created_at, title, body)
VALUES 
(
    2, 'Bob', '5/6/13', 'great site', 'test'
);
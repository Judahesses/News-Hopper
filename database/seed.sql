\c newshopper;

DELETE FROM topics;
DELETE FROM posts;

INSERT INTO topics (name) VALUES ('Review');
INSERT INTO topics (name) VALUES ('Suggestion');
\c newshopper;

DELETE FROM topics;
DELETE FROM posts; 

INSERT INTO topics (name) VALUES ('Review');
INSERT INTO topics (name) VALUES ('Suggestion');


INSERT INTO posts VALUES (
  DEFAULT, 1, 2, 'Bob James', '2018-08-31', 'great site has a title', 'this is a test body content'
);
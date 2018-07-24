\c newshopper;

DELETE FROM topics;
DELETE FROM reviews; 

INSERT INTO topics (name) VALUES ('Feedback');
INSERT INTO topics (name) VALUES ('Suggestion');
INSERT INTO topics (name) VALUES ('Other');
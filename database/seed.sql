\c newshopper;

DELETE FROM topics;
DELETE FROM posts;

INSERT INTO topics (name) VALUES ('Review');
INSERT INTO topics (name) VALUES ('Suggestion');

INSERT INTO posts (stars, author, title, body)
VALUES (
   4,
   'Alex Vargas',
  --  'Today at 11:52 AM',
   'Great Product',
   'This was a free guide created by rithmschool in SF. It covers everything from the basic Essential Developer Tools to the more advanced topics of JavaScript, Node, React, and Python.'
);


INSERT INTO posts (stars, author, title, body)
VALUES (
   5,
   'New York Made',
  --  'Today at 11:52 AM',
   'This right here!!!',
   'This is a beautiful app!'
);

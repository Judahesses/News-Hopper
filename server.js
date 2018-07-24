require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4567;
const Post = require('./models/post')
const Topic = require('./models/topic')
const moment = require("moment")

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/reviews.json', (request, response) => {
  Promise.all([
    Post.all()
      .then(posts => {
        posts.map(post => {
          post.created_at = moment(post.created_at).calendar()
        })
        return posts
      }),
    Topic.all()
      .then(topics => {
        return topics
      })
  ])
    .then(([posts, topics]) => {
      response.json({ posts: posts, topics: topics })
    })
})

// app.get('/posts/new', (request, response) => {
//   Topic.all()
//     .then(topics => {
//       response.render('posts/new', { topics: topics })
//     })
// })

app.post('/posts', (request, response) => {
  const newPost = {
    author: request.body.author,
    stars: request.body.stars,
    title: request.body.title,
    body: request.body.body
  };
  Post.create(newPost).then(post => {
    response.json(post);
  });
});

app.put('/posts/:id.json', (request, response) => {
  const newPost = {
    author: request.body.author,
    stars: request.body.stars,
    title: request.body.title,
    body: request.body.body
  };
  Post.edit(newPost).then(post => {
    response.json(post);
  });
})

app.get('/posts/:id.json', (request, response) => {
  let id = request.params.id;
  Post.findById(id)
  .then(post => {
    response.json(post);
  });
})

// app.get('/posts/:id', (request, response) => {
//   const id = Number(request.params.id)
//   Promise.all([
//     Post.findById(id)
//       .then(posts => {
//         posts.created_at = moment(posts.created_at).calendar()
//         return posts
//       }),
//     Topic.all()
//       .then(topics => {
//         return topics
//       })
//   ])
//     .then(([posts, topics]) => {
//       response.render('posts/edit', { posts: posts, topics: topics })
//     })
// })

app.put('/posts/:id.json', (request, response) => {
  let id = request.params.id;
  const updatedPost = {
    id: id,
    author: request.body.author,
    stars: request.body.stars,
    title: request.body.title,
    body: request.body.body
  }
  Post.update(updatedPost)
    .then(post => {
      response.json(post)
    });
  });

app.delete('/posts/:id.json', (request, response) => {
  const id = request.params.id
  Post.delete(id)
    .then(post => {
      response.json(post);
    })
})

// app.get("/topics/:id", (request, response) => {
//   const id = Number(request.params.id);
//   Promise.all([
//     Post.allByTopicId(id)
//       .then(posts => {
//         posts.map(post => {
//           post.created_at = moment(post.created_at).calendar()
//         })
//         return posts
//       }),
//     Topic.all()
//       .then(topics => {
//         return topics
//       })
//   ])
//     .then(([posts, topics]) => {
//       if (posts.length > 0) {
//         const topicId = posts[0].topic_id;
//         const topicTarget = topics.filter(topic => topic.id == topicId)
//         response.render('topics/show', {
//           posts: posts, topics: topics, title: topicTarget[0].name, noData: false
//         });
//       } else {
//         Topic.findById(id)
//           .then(topic => {
//             response.render('topics/show', { noData: true, title: topic.name, topics: topics })
//           })
//       }
//     })
// })

app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});

require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4567;
const Post = require('./models/post')
const Topic = require('./models/topic')

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/', (request, response) => {
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
      response.render('home', { posts: posts, topics: topics })
    })
})

app.get('/posts/new', (request, response) => {
  Topic.all()
    .then(topics => {
      response.render('posts/new', { topics: topics })
    })
})

app.post('/posts', (request, response) => {
  const newPost = request.body
  newPost.created_at = new Date()
  Post.create(newPost)
    .then(post => {
      response.redirect(302, '/')
    })
})

app.get('/posts/:id', (request, response) => {
  const id = Number(request.params.id)
  Promise.all([
    Post.findById(id)
      .then(posts => {
        posts.created_at = moment(posts.created_at).calendar()
        return posts
      }),
    Topic.all()
      .then(topics => {
        return topics
      })
  ])
    .then(([posts, topics]) => {
      response.render('posts/edit', { posts: posts, topics: topics })
    })
})

app.put('/posts/:id', (request, response) => {
  const updatePost = request.body
  updatePost.id = request.params.id
  Post.update(updatePost)
    .then(post => {
      response.redirect(302, '/')
    })
})

app.delete('/posts/:id', (request, response) => {
  const id = Number(request.params.id)
  Post.delete(id)
    .then(post => {
      response.redirect(302, '/');
    })
})

app.get("/topics/:id", (request, response) => {
  const id = Number(request.params.id);
  Promise.all([
    Post.allByTopicId(id)
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
      if (posts.length > 0) {
        const topicId = posts[0].topic_id;
        const topicTarget = topics.filter(topic => topic.id == topicId)
        response.render('topics/show', {
          posts: posts, topics: topics, title: topicTarget[0].name, noData: false
        });
      } else {
        Topic.findById(id)
          .then(topic => {
            response.render('topics/show', { noData: true, title: topic.name, topics: topics })
          })
      }
    })
})

app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});
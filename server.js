require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4567;
const Post = require('./models/post')
const Topic = require('./models/topic')

const jsonParser = bodyParser.json();
app.use(jsonParser);



app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});




require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4567;

const jsonParser = bodyParser.json();
app.use(jsonParser);

// Create, Read All, Update, Delete >> Comments
// Tommy is working on this

app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});




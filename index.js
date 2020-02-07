const express = require('express');
const cors = require('cors');

const decoder = require('./app');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/', decoder);

app.listen(port, ()=> {
  console.log(`Server started on port ${port}`)
});


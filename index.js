
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', function (req, res) {
  res.send('Hello World');
});

const PORT = 8080;


async function init() {
  require('./routes')(app);

  console.log(`Starting Sequelize + Express example on port ${PORT}...`);

  app.listen(PORT, () => {
    console.log(
      `Express server started on port ${PORT}.`
    );
  });
}

init();

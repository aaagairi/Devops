const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Jenkins CI/CD Demo');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

module.exports = server;

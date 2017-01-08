const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080;

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.post('/event', (request, response) => {
  console.log(request.body.hello);
});


app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});


// const express = require('express');
//
// // Constants
// const PORT = 8080;
//
// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello world\n');
// });
//
// app.listen(PORT);
// console.log(`Running on http://localhost:${PORT}`);

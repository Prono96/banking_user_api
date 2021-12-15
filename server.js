const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`App is running on ${port}`);
});


// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Listening at port ${port}`);
// })
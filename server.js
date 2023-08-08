const express = require('express');
const http = require('http');
// const { UsersRouter } = require('./routes/users');
const UsersRouter = require('./routes/users');

const port = process.env.PORT || 3009;
const app = express();

app.set('view engine', 'ejs');
app.use('/users', UsersRouter);

app.get('/', (req, res) => {
  // res.send('HI')
  // res.sendStatus(200)
  // res.status(200).json({ message: `/ works!` });
  // res.download('server.js');
  res.render('index.ejs', { text: 'World' });
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;

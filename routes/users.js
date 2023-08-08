const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('user list');
});

router.get('/new', (req, res) => {
  res.send('user new form');
});

router.post('/', (req, res) => {
  res.send('user create');
});

router.get('/:id', (req, res) => {
  res.send('user show');
});

// module.exports = {
//   UsersRouter: router,
// };

module.exports = router;

const router = require('express').Router();
const user = require('../middlewares/user');

// Payments Paths...
router.get('/api/get-user', (req, res) => user.fetchuser(req,res));
router.get('/', (req, res) => res.send("welcome to sumit's api"));

module.exports = router;
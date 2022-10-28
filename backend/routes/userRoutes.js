const express = require('express');
const { loginUser, signupUser, allUsers } = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.post('/login',loginUser);
router.post('/signup',signupUser);
router.route('/').get(requireAuth,allUsers);


module.exports = router;
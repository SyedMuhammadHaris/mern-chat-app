const express = require('express');
const { accessChat, fetchChats } = require('../controllers/chatControllers');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');


router.route("/").post(requireAuth, accessChat);
router.route("/").get(requireAuth, fetchChats);






module.exports = router;
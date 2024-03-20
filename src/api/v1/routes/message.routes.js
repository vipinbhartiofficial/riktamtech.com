const router = require('express').Router();
const MessageController = require('../controllers/message.controller');
const AuthMiddleware = require("../middlewares/auth.middleware")

router.post('/create-group', AuthMiddleware.checkAuth, MessageController.createGroup);
router.post('/update-group/:id', AuthMiddleware.checkAuth, MessageController.updateGroup);
router.post('/chatting', AuthMiddleware.checkAuth, MessageController.groupChatting);

module.exports = router;

const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const AuthMiddleware = require("../middlewares/auth.middleware")

router.post('/login', UserController.loginUser);
router.post('/create', AuthMiddleware.checkAuth, UserController.createUser);
router.post('/listing', AuthMiddleware.checkAuth, UserController.getListing);
router.patch('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);
module.exports = router;

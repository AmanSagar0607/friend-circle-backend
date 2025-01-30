const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/search', authMiddleware, userController.searchUsers);
router.post('/friend-request', authMiddleware, userController.sendFriendRequest);
router.post('/accept-friend', authMiddleware, userController.acceptFriendRequest);
router.get('/friends', authMiddleware, userController.getFriends);
router.get('/recommendations', authMiddleware, userController.getRecommendations);
router.get('/friend-requests', authMiddleware, userController.getFriendRequests);
router.post('/accept-friend', authMiddleware, userController.acceptFriendRequest);
router.post('/reject-friend', authMiddleware, userController.rejectFriendRequest);
router.post('/unfriend', authMiddleware, userController.unfriend);

module.exports = router;
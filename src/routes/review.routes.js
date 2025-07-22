const express = require('express');
const reviewController = require('../controllers/review.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/submit', authMiddleware, reviewController.submitReview);
router.get('/my', authMiddleware, reviewController.getUserReviews);

module.exports = router; 
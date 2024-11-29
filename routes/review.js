const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview,islogIn, isAuthor } = require('../middleware.js');
const reviewControllers = require('../controllers/reviews.js');
// to create a new review
router.post('/reviews',validateReview,islogIn,wrapAsync(reviewControllers.newReview));

// to delete a review 
router.delete('/reviews/:reviewId',islogIn,isAuthor,wrapAsync(reviewControllers.deleteReview));

module.exports = router;
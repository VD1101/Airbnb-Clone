const Review = require('../models/review.js');
const Listing = require('../models/listing.js');

// to create a new review and save it to database.
module.exports.newReview = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let review = await Review(req.body.review);
    listing.reviews.push(review);
    review.author = req.user._id;
    await review.save();
    await listing.save()
    res.redirect(`/listings/${id}`);
}


// to delete the review.
module.exports.deleteReview = async(req,res)=>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);

}
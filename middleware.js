const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const expressError = require("./utils/expressError.js");
const { listingSchema, reviewSchema } = require("./Schema");

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body.listing);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body.listing);
  if (error) {
    let errMag = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errMag);
  } else {
    next();
  }
};

module.exports.islogIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("danger", "You must login to Create Listing");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;

  let listing = await Listing.findById(id);
  if (!listing.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("danger", "You dont have Permission to make Changes!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.isAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!res.locals.currentUser._id.equals(review.author._id)) {
    req.flash("danger", "You dont have Permission Delete!");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

// module.exports.filter = async (req, res, next) => {
//   let filter = document.querySelectorAll(".filter");
//   for (let value of filter) {
//     let p = value.querySelector("p");
//     value.addEventListener("click", () => {
//       console.log(p.innerText.split(" ").join(""));
//       res.locals.filterValue = p.innerText.split(" ").join("");
//     });
//   }
  
//   next();
// };


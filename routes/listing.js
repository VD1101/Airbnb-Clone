const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { validateListing, islogIn, isOwner } = require("../middleware.js");
const listingControllers = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });




// this will send a new form for create a new listing
router.get("/new", islogIn, listingControllers.renderNewForm);


router
  .route("/")
  // this is get request for render index.ejs
  .get(
    // filterListingMiddware,
    wrapAsync(listingControllers.index))
  // this will make a actule change in database and add a new listing
  .post(
    islogIn,
    validateListing,
    upload.array("listing[image][][url]",5),
    wrapAsync(listingControllers.saveListing)

  );


router
  .route("/:id")
  // this will show one listing in detail
  .get(wrapAsync(listingControllers.showListing))
  // this will make a actule change in database and modify the listing
  .put(
    islogIn,
    isOwner,
    validateListing,
    upload.array("listing[image][][url]",5),
    wrapAsync(listingControllers.editListing)
  )
  .delete(islogIn, isOwner, wrapAsync(listingControllers.deleteListing));

// this will send a form to update existing listing
router.get("/:id/edit", islogIn, wrapAsync(listingControllers.renderEditForm));

module.exports = router;

// this is some requirments.
const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



// this is the main index.ejs page which show the main page of wanderlust.
module.exports.index = async (req, res) => {
  const allListing = await Listing.find({});
  const filterValue = req.query.category; 

  let listingInfo = [];
  for (let listing of allListing) {
    listingInfo.push(listing.title);
    listingInfo.push(listing.location);
  }


  // to search in listing by it's title name or location
  if (req.query.search) {
    let searchUser = req.query.search || "";
    let searchTerms = searchUser.split(" ");

    const allListing = await Listing.find({
      $or: [
        { title: { $regex: searchTerms.join("|"), $options: "i" } },
        { location: { $regex: searchTerms.join("|"), $options: "i" } },
      ],
    });
    res.render("listings/index.ejs", { allListing });
  }

  // some additional function for category.
  if (filterValue === "All") {
    res.render("listings/index.ejs", { allListing });
  }
  let filteredListings = [];
  if (filterValue) {
    filteredListings = await Listing.find({ categories: filterValue });
  } else {
    filteredListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListing: filteredListings });
};



// this will render the new form for creating the new listing
module.exports.renderNewForm = async (req, res) => {
  res.render("listings/new.ejs");
};


// this will take the data from the form and add the listing details to the backend
module.exports.saveListing = async (req, res, next) => {
  // this is for saving the image to the clould
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  
  let newListing = await new Listing(req.body.listing);
  newListing.owner = res.locals.currentUser._id;
  newListing.contact.email = res.locals.currentUser.email;
  newListing.geometry = response.body.features[0].geometry;

  for (let file of req.files) {
    let url = file.path;
    let filename = file.filename;

    newListing.image.push({ url, filename });

    await newListing.save();

  }
  newListing.save();
  console.log(newListing);
  req.flash("success", "New Listing is Created!");
  res.redirect("/listings");
};


// this will show listing in details.
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("danger", "The Listing you requested does not Exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

// this will send the form to update the existing listing.
module.exports.renderEditForm = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  const existingAmenities = listing.amenities || []; 
  if (!listing) {
    req.flash("danger", "The Listing you requested does not Exist!");
    res.redirect("/listings");
  }
  res.render("listings/update.ejs", { listing, existingAmenities });
};


// this will take the data from the form and make the actual changes in the database.
module.exports.editListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  let { id } = req.params;
  let updateListing = await Listing.findById(id);

  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  updateListing.contact.email = res.locals.currentUser.email;
  // updateListing.categories = r 
  if (response.body.features.length) {
    await Listing.findByIdAndUpdate(id, { geometry: {} });
    updateListing.geometry = response.body.features[0].geometry;
    updateListing.save();
  }

  updateListing.geometry = response.body.features[0].geometry;
  console.log(response.body.features[0].geometry);

  if (req.files.length) {
    await Listing.findByIdAndUpdate(id, { image: [] });
    for (let file of req.files) {

      let url = file.path;
      let filename = file.filename;
      updateListing.image.push({ url, filename });
      await updateListing.save();

    }
  }


  req.flash("success", "Listing hase been Edited!");
  res.redirect(`/listings/${id}`);
};


// this will delete the listing from the database.
module.exports.deleteListing = async (req, res, next) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("danger", "Listing has been Deleted!");
  res.redirect("/listings");
};

// require mongoose
const mongoose = require("mongoose");
// Schema for short-hand
const Schema = mongoose.Schema;
const Review = require("./review.js");

// listing model
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: [
    {
      _id: false,
      filename: {
        type: String,
      },
      url: {
        type: String,
        default:
          "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg",
        set: (v) =>
          v === ""
            ? "https://cdn.pixabay.com/photo/2024/09/25/15/53/japan-9074037_1280.jpg"
            : v,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  amenities: [
    {
      type: String,
    },
  ], // New field for amenities
  contact: {
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  }, // New field for contact information
  geometry : {
    type: {
      type: String, 
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  categories : {
    type : String,
    require : true,
    enum : ['Trending','Tinyhomes','Amazingpools','Ski-in/out','Beach','Camping','Boat','Tower','EarthHomes','Arctic'],
  }
});

module.exports = mongoose.model("Listing",listingSchema);
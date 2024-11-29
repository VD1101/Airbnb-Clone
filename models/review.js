const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  comment: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    default : 1,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: new Date().toLocaleDateString(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", reviewSchema);

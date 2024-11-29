// this file is used to reload the data in the database.
const mongoose = require("mongoose");
const initData = require("./data.js");


const Listing = require("../models/listing.js");


main()
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// this function take the data from data.js and inser into the listing schema
const initDB = async  ()=> {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "671685fc24a446fc8cd14278",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();

const Joi = require("joi");

// module.exports.listingSchema = Joi.object({
//     listing: Joi.object({
//       title: Joi.string().required(),
//       description: Joi.string().required(),
//       image: Joi.array().items(
//         Joi.object({
//           url: Joi.string().required(),
//           filename: Joi.string(),
//         })
//       ).min(1).max(3).required(),
//       price: Joi.number().required().min(0),
//       country: Joi.string().required(),
//       location: Joi.string().required(),
//       amenities: Joi.array().items(Joi.string()).optional(),
//       contact: Joi.object({
//         email: Joi.string().email().required(),
//         phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(), // Allows for international phone formats
//       }).required(),
//       geometry : Joi.object({

//       }).required(),
//     }).required(),
// });

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.array()
      .items(
        Joi.object({
          filename: Joi.string().allow(""),
          url: Joi.string()
            .uri()
            .default(
              "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg"
            )
            .custom((value, helpers) => {
              if (value === "") {
                return "https://cdn.pixabay.com/photo/2024/09/25/15/53/japan-9074037_1280.jpg";
              }
              return value;
            }),
        })
      )
      .default([]),
    price: Joi.number().required(),
    location: Joi.string().required(),
    country: Joi.string().optional(),
    reviews: Joi.array().items(Joi.string().hex().length(24)), // ObjectId validation
    owner: Joi.string().hex().length(24), // ObjectId validation
    amenities: Joi.array().items(Joi.string().optional()),
    contact: Joi.object({
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
    }).required(),
    geometry: Joi.object({
      type: Joi.string().valid("Point").required(),
      coordinates: Joi.array().items(Joi.number()).length(2).required(), // Expecting [longitude, latitude]
    }).required(),
    categories : Joi.string().optional(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().required().min(1).max(5),
  }).required(),
});

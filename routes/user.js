const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");
const userControllers = require('../controllers/users.js');
// this will send the form for signup
router.get("/signup",userControllers.rendersigninForm);

// store the data of user into database
router.post(
  "/signup",
  wrapAsync(userControllers.signin)
);

// login form
router.get("/login", userControllers.renderloginForm);

// actule log in into database
// router.post(
//   "/login",
//   passport.authenticate('local', {
//     failureRedirect: "/login",
//     failureFlash: true,
//   }),
//   async (req, res) => {
//     req.flash("success", "Welcome Back to WanderLand!");
//     res.redirect("/listings");
//   }
// );
router.post("/login", saveRedirectUrl, userControllers.login);

router.get("/logout", userControllers.logout);
module.exports = router;

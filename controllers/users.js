const User = require("../models/user.js");

// this will send the signin form to the user
module.exports.rendersigninForm = (req, res) => {
  res.render("users/signUp");
};

// the process of storing data of user in database.
module.exports.signin = async (req, res) => {
  try {
    let { username, email, password } = req.body.user;

    // Check if email is already in use
    const existingUser = await User.findOne({ email });
    // every user should have different email address.
    if (existingUser) {
      req.flash(
        "danger",
        "Email is already in use. Please use a different email."
      );
      return res.redirect("/signup");
    }

    // Proceed with creating a new user if email is not in use
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to WanderLust");
      return res.redirect("/listings");
    });
  } catch (e) {
    req.flash("danger", e.message);
    res.redirect("/signup");
  }
};

// to render the login form.
module.exports.renderloginForm = (req, res) => {
  res.render("users/logIn");
};

// the process of login and save data of user into the cookies.
// use some passport built in function to login and logout.
module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    req.flash("danger", "User not found.");
    return res.redirect("/login");
  }

  user.authenticate(password, (err, model, passwordError) => {
    if (err || passwordError) {
      req.flash("danger", "Invalid password.");
      return res.redirect("/login");
    }

    req.login(user, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome Back to WanderLand!");
      if (res.locals.redirectUrl) {
        return res.redirect(res.locals.redirectUrl);
      } else {
        return res.redirect("/listings");
      }
    });
  });
};

// log out the user
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are Successfully Logged Out");
    res.redirect("/listings");
  });
};

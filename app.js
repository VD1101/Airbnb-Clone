if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}


// require express and use app to access 
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

app.use(express.json());

// this will allows other method like patch,put and delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

// this will help to usedf boilerplate 
const ejsMate = require('ejs-mate');
app.engine('ejs',ejsMate);

// require the path and use to access .ejs files in views directory
const path = require("path");
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));

// give the path to static file (js,css)
app.use(express.static(path.join(__dirname,'public')));

// to parse the data from url as quary and params
app.use(express.urlencoded({extended:true}))


// -----------  some utilities to import  -----------
const MongoURL = process.env.MONGO_URL;
const expressError = require('./utils/expressError.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash  = require('connect-flash');
const secretCode = process.env.SECRET;
const store = MongoStore.create({
    mongoUrl:MongoURL,
    crypto : {
        secret : secretCode,
    },
    touchAfter :   24 * 3600,
})

store.on('error',(err)=>{
    console.log("Error in Mongo session store",err);
})
const sessionOption = {
    store : store,
    secret : secretCode,
    resave : false,
    saveUninitialized : false,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }

}

app.use(session(sessionOption));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.failer = req.flash("danger");
    res.locals.currentUser = req.user;
    const isListingsPath = req.path === '/listings';
    const hasQueryParams = Object.keys(req.query).length > 0;
  
    // Set showSearchBar to true if the path is `/listings` and there are query parameters
    res.locals.showSearchBar = isListingsPath || hasQueryParams;


    next();
})

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email : "vansh@123@gmail.com",
//         username : "Vansh",
//     })
//     let registeredUser = await User.register(fakeUser,"vd123");
//     res.send(registeredUser);

// })

// this is different routes

const listingRoute = require('./routes/listing.js');
const reviewRoute = require('./routes/review.js');
const userRoute = require('./routes/user.js');



// this is a main fucntion to connect mongodb database
async function main(){
    await mongoose.connect(MongoURL);
    // await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}


// invoke the main and .then and .catch to make it asynchronous
main().then(()=>{
    console.log("Connect to DataBase");
}).catch((err)=>{
    console.log(err);
})



// ------------------ROUTES FOR LISTING------------------ //

app.use('/listings',listingRoute);
// app.get('/listings/news',(req,res)=>{   
//     res.send(" this is new")

// })

// ------------ ROUTES FOR REVIEW------------

app.use('/listings/:id',reviewRoute);

// ------------ ROUTES FOR USER ------------

app.use('/',userRoute);




app.all("*",(req,res,next)=>{
    next(new expressError(404,"page does not exist"));
})

app.use((err,req,res,next)=>{
    // let { statusCode=500, message="Something went wrong!"} = err;
    res.render('listings/error.ejs',{err});
})




// this will run the app and start the server
app.listen(3030,()=>{
    console.log("app is listing on port : 3030");
})

// error 


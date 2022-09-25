const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
const cors = require("cors");

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
const forms = multer();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(forms.array());
app.use(cors());
app.use(bodyParser.json());



// DB Config
const db = require("./config/keys").mongoURI;

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.get('/add-product', passport.authenticate('jwt', { session: false }), (req, res, next)=> {
  console.log('got here')
  console.log(req.user);  
  if (req.user) {res.json(req.user)} else {res.json('fail')}
})
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB successfully connected");
    // start the server
    app.listen(port, () =>
      console.log(`Server up and running on port ${port} !`)
    );
  })
  .catch((err) => console.log(err));

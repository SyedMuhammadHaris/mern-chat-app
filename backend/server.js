const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require('./routes/userRoutes');

const app = express();

dotenv.config();

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/user',userRoute);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });










  // app.get("/", (req, res) => {
//   res.send("Hello World !!!!!!!!");
// });

// const PORT = process.env.PORT || 5000;
// const mongoos = require("mongoose");

// const DB = "mongodb://localhost:27017/data";

// // mongoos.set('strictQuery',true);
// mongoos
//   .connect(DB, {})
//   .then(() => console.log("Database Connected "))
//   .catch((err) => {
//     console.log(err);
//   });

const mongoose = require("mongoose");

const DB = "mongodb://127.0.0.1:27017/SMS"; // Use 127.0.0.1 instead of localhost for better compatibility

// Connect to MongoDB
mongoose
  .connect(DB, {
    useNewUrlParser: true, // Parse connection string properly
    useUnifiedTopology: true, // Use new server discovery and monitoring engine
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

module.exports = mongoose;

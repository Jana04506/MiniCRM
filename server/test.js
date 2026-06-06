const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Jana:Jana12345@cluster1.jbyoy6u.mongodb.net/miniCRM?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("✅ Connected Successfully");
    process.exit();
  })
  .catch((err) => {
    console.log("❌ Connection Failed");
    console.log(err);
    process.exit();
  });
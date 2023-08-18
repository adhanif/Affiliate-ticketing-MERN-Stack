const mongoose = require("mongoose");
// console.log(process.env.CONNECTION_STRING);
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(`Error connecting to DB: ${err}`);
  });

mongoose.connection.on("error", (err) => {
  throw new Error("Lost connection to the database", err);
});

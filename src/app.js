const express = require("express");
const app = express();
const env = require("dotenv");
const PORT = process.env.PORT || 2000;
// routes authentication
const userRoutes = require("./routes/auth");
env.config();
//database connection
const mongoose = require("mongoose");
// cors
const cors = require("cors");
mongoose
  .connect(
   process.env.URL , 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

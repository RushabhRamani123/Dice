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
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.33mtcp3.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

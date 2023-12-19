const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
require("./db/connection");
const User = require("./models/User");

app.post("/", async (req, res) => {
  try {
    const { email, batch } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Check if the existing user was registered in the same month
      const existingUserMonth = existingUser.createdAt.getMonth();
      const currentMonth = new Date().getMonth();

      if (existingUserMonth === currentMonth) {
        return res.status(400).json({
          message: "Cannot submit. Email already registered in the same month.",
        });
      }
    }

    // Create a new user and save it
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(4000);

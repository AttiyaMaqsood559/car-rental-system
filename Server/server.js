const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

const connectToDatabase = require("./db/db");
const {
  validateSignup,
  validateSignin,
  validateAddCar,
  validateBookCar,
  validateManageBooking,
  validateReturnCar,
  validateReview,
} = require("./middlewares/MyValidator");

const {
  User,
  Car,
  Booking,
  ReturnCar,
  Review,
  ManageBooking,
} = require("./models/User");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectToDatabase();

// Signup route
app.post("/register", validateSignup, async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ status: "error", message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res
      .status(201)
      .json({ status: "success", message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res
      .status(500)
      .json({ status: "error", message: "Server error during registration" });
  }
});

// Signin route
app.post("/signin", validateSignin, async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid email or password" });
    }

    res.json({ status: "success", message: "Signin successful" });
  } catch (err) {
    console.error("Signin error:", err);
    res
      .status(500)
      .json({ status: "error", message: "Server error during signin" });
  }
});

// Add Car route
app.post("/addcar", validateAddCar, async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.json({ success: true, message: "Car added successfully" });
  } catch (err) {
    console.error("AddCar error:", err);
    res.status(500).json({ success: false, message: "Failed to add car" });
  }
});

// Book Car route
app.post("/bookcar", validateBookCar, async (req, res) => {
  console.log("🚗 Booking Request Body:", req.body);

  try {
    const book = new Booking(req.body);
    await book.save();
    res.json({ success: true, message: "Car book successfully" });
  } catch (err) {
    console.error("BookCar error:", err);
    res.status(500).json({ success: false, message: "Failed to book car" });
  }
});

//manage booking

app.post("/managebooking", validateManageBooking, async (req, res) => {
  try {
    const booking = new ManageBooking(req.body);
    await booking.save();
    res.json({ success: true, message: "Booking added successfully" });
  } catch (err) {
    console.error("ManageBooking error:", err);
    res.status(500).json({ success: false, message: "Failed to add booking" });
  }
});

//return car
app.post("/return", validateReturnCar, async (req, res) => {
  console.log("🚗 Booking Request Body:", req.body);

  try {
    const returncar = new ReturnCar(req.body);
    await returncar.save();
    res.json({ success: true, message: "Car return successfully" });
  } catch (err) {
    console.error("ReturnCar error:", err);
    res.status(500).json({ success: false, message: "Failed to return car" });
  }
});

//review form
app.post("/review", validateReview, async (req, res) => {
  console.log("🚗 Booking Request Body:", req.body);

  try {
    const reviewcar = new Review(req.body);
    await reviewcar.save();
    res.json({ success: true, message: "review submit successfully" });
  } catch (err) {
    console.error("ReviewCar error:", err);
    res.status(500).json({ success: false, message: "Failed to add review" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on http://localhost:${process.env.PORT}`);
});

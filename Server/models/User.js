const mongoose = require("mongoose");

// User Schema (signup/signin)
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Car Schema (addcar)
const carSchema = new mongoose.Schema({
  carName: { type: String, required: true },
  model: { type: String, required: true },
  rentPrice: { type: Number, required: true },
});

// Booking Schema (bookcar)
const bookingSchema = new mongoose.Schema({
  carId: { type: Number, required: true },
  pickupDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  paymentMode: { type: String, required: true },
});
// ManageBooking Schema (managebookings)

const manageBookingSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  carId: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
    required: true,
  },
});

// ReturnCar Schema (returncar)
const returnCarSchema = new mongoose.Schema({
  carId: { type: Number, required: true },
  condition: { type: String, required: true },
  extraCharges: { type: Number, default: 0 },
});

// Review Schema (reviewform)
const reviewSchema = new mongoose.Schema({
  carId: { type: Number, required: true },
  userName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  feedback: { type: String },
});

const User = mongoose.model("User", userSchema);
const Car = mongoose.model("Car", carSchema);
const Booking = mongoose.model("Booking", bookingSchema);
const ManageBooking = mongoose.model("ManageBooking", manageBookingSchema);
const ReturnCar = mongoose.model("ReturnCar", returnCarSchema);
const Review = mongoose.model("Review", reviewSchema);

module.exports = {
  User,
  Car,
  Booking,
  ManageBooking,
  ReturnCar,
  Review,
};

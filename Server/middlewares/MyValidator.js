const Joi = require("joi");

// Signup validation
const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Signin validation
const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// AddCar validation
const addCarSchema = Joi.object({
  carName: Joi.string().required(),
  model: Joi.string().required(),
  rentPrice: Joi.number().required(),
});

// BookCar validation

const bookCarSchema = Joi.object({
  carId: Joi.number().required(),
  pickupDate: Joi.date().required(),
  returnDate: Joi.date().required(),
  paymentMode: Joi.string().valid("Credit Card", "Cash", "Online").required(),
});

// ManageBooking validation

const manageBookingSchema = Joi.object({
  userName: Joi.string().required(),
  carId: Joi.number().required(),
  status: Joi.string().valid("Pending", "Approved", "Rejected").required(),
});

// ReturnCar validation
const returnCarSchema = Joi.object({
  carId: Joi.number().required(),
  condition: Joi.string().required(),
  extraCharges: Joi.number().min(0).optional(),
});

// Review validation
const reviewSchema = Joi.object({
  carId: Joi.number().required(),
  userName: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
  feedback: Joi.string().allow(""),
});

function validateSignup(req, res, next) {
  const { error } = signupSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}

function validateSignin(req, res, next) {
  const { error } = signinSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}

function validateAddCar(req, res, next) {
  const { error } = addCarSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}

function validateBookCar(req, res, next) {
  const { error } = bookCarSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}

function validateManageBooking(req, res, next) {
  const { error } = manageBookingSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}

function validateReturnCar(req, res, next) {
  const { error } = returnCarSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}

function validateReview(req, res, next) {
  const { error } = reviewSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
}

module.exports = {
  validateSignup,
  validateSignin,
  validateAddCar,
  validateBookCar,
  validateManageBooking,
  validateReturnCar,
  validateReview,
};

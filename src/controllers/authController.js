const User = require("../models/User");
const createToken = require("../utils/createToken");
const asyncHandler = require("../utils/asyncHandler");

const buildAuthResponse = (user) => ({
  token: createToken(user._id),
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    phone: user.phone
  }
});

const signup = asyncHandler(async (req, res) => {
  const { name, email, password, role, phone } = req.body;

  const existingUser = await User.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "An account with this email already exists."
    });
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
    phone
  });

  res.status(201).json({
    success: true,
    message: "Account created successfully.",
    ...buildAuthResponse(user)
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password."
    });
  }

  res.json({
    success: true,
    message: "Login successful.",
    ...buildAuthResponse(user)
  });
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

module.exports = {
  signup,
  login,
  getCurrentUser
};

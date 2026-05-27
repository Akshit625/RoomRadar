const express = require("express");
const { body } = require("express-validator");

const { signup, login, getCurrentUser } = require("../controllers/authController");
const { protect } = require("../middleware/auth");
const validateRequest = require("../middleware/validateRequest");

const router = express.Router();

router.post(
  "/signup",
  [
    body("name").trim().isLength({ min: 2 }).withMessage("Name must be at least 2 characters long."),
    body("email").trim().isEmail().withMessage("A valid email is required."),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long."),
    body("role")
      .optional()
      .isIn(["student", "owner"])
      .withMessage("Role must be either student or owner."),
    body("phone").optional().trim().isLength({ max: 20 })
  ],
  validateRequest,
  signup
);

router.post(
  "/login",
  [
    body("email").trim().isEmail().withMessage("A valid email is required."),
    body("password").notEmpty().withMessage("Password is required.")
  ],
  validateRequest,
  login
);

router.get("/me", protect, getCurrentUser);

module.exports = router;

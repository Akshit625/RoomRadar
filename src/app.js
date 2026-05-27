const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const messageRoutes = require("./routes/messageRoutes");
const configRoutes = require("./routes/configRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const publicDir = path.join(__dirname, "..", "public");

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "RoomRadar API is healthy."
  });
});

app.use("/api/config", configRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/messages", messageRoutes);

app.use(express.static(publicDir));

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/login", (_req, res) => {
  res.sendFile(path.join(publicDir, "login.html"));
});

app.get("/signup", (_req, res) => {
  res.sendFile(path.join(publicDir, "signup.html"));
});

app.get("/about", (_req, res) => {
  res.sendFile(path.join(publicDir, "about.html"));
});

app.get("/owner", (_req, res) => {
  res.sendFile(path.join(publicDir, "owner.html"));
});

app.get("/admin", (_req, res) => {
  res.sendFile(path.join(publicDir, "admin.html"));
});

app.use((req, res, next) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({
      success: false,
      message: "API route not found."
    });
  }

  if (req.method === "GET") {
    return res.sendFile(path.join(publicDir, "index.html"));
  }

  next();
});

app.use(errorHandler);

module.exports = app;

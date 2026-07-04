const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoute = require("./routes/contact");

const app = express();

// Middleware   
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("JzarrTech Backend is Running 🚀");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
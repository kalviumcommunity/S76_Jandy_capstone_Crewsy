require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// GET request
app.get('/', (req, res) => {
  res.send('Welcome to the Capstone Backend!');
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port http://localhost:${port}...`));

// app.use(cors({
//     origin: 'http://localhost:5173',  // Or wherever your frontend runs
//     credentials: true
//   }));
  
// setup env file
const dotenv = require("dotenv");
dotenv.config()

const express = require("express");
const db = require("./config/db")
const userRoutes = require("./routes/web/user.route");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
db();

// to express env values in file:
// backend (node + express) --> process
PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("server's Homepage")
});

// Routes
app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
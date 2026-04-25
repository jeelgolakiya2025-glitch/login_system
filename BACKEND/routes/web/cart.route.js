const express = require("express");
const router = express.Router();
const userMiddleware = require("../../middlewares/user.middleware")

// add items to cart
router.post("/add", userMiddleware.authUser)

// get all items from cart


// remove single item from cart


module.exports = router;
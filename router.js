const express = require("express")
const router = express.Router();
const greetingController = require("./controllers/greeting")

router.get("/", (req, res) => {
  res.status(200).send("Hello World")
})
router.get("/greet/:name", greetingController.greet)

module.exports = router;
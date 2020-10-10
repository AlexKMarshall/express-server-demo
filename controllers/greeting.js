const fs = require("fs");
const path = require("path")
const Handlebars = require("handlebars");
const emailModel = require("../models/email");

const viewPath = path.join(__dirname, "../views/greeting.html");
const view = fs.readFileSync(viewPath, "utf-8")

const viewTemplate = Handlebars.compile(view);

const greet = (req, res) => {
  const { name } = req.params;
  const date = new Date();
  try {
    const email = emailModel.findEmail(name);
    res.status(200).send(viewTemplate({name, date, email}))
  } catch (error) {
    res.status(500).send("something went wrong")
    console.error(error)
  }

  
}

module.exports = {greet};
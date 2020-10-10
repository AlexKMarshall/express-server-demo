const express = require("express");
const router = require("./router");
const morgan = require("morgan")

const app = express();

const PORT = 3001;

app.use(morgan("dev"))
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} 🚀 🐨`);
})
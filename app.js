const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");
const connectDB = require("./config/db");
const { connect } = require("mongoose");
const hbs = require("express-handlebars");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//load config
dotenv.config({ path: "./config/config.env" });
connectDB();

//hbs middleware
app.engine(".hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//static files
app.use(express.static(path.join(__dirname, "public")));
//routes
app.use("/", require("./routes/index"));

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

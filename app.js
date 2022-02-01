const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/WebdevContact");
}

const webdevSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  concern: String,
});

const webdevData = mongoose.model("webdevData", webdevSchema);

app.use("/static", express.static("static"));
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.status(200).render("index.pug");
});

app.get("/about", (req, res) => {
  res.status(200).render("about.pug");
});

app.get("/join", (req, res) => {
  res.status(200).render("join.pug");
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact.pug");
});

app.post("/contact", (req, res) => {
  console.log(req.body);
  let webdata = new webdevData(req.body);
  webdata.save().then(() => {
      res.status(200).send("Info. has been saved to Database");
    }).catch(() => {
      res.status(400).send("Info not saved");
    });
});

app.listen(port, () => {
  console.log(`Successfully running at port: ${port}`);
});

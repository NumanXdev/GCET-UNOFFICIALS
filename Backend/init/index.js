require("dotenv").config();
console.log("Loaded Environment Variables:", process.env);
const express = require("express");
const mongoose = require("mongoose");
const Paper = require("../Models/Paper");
const initData = require("../init/data");
const app = express();

const PORT = 3000;
const Url = "mongodb+srv://PapersHub:PapersHub123@cluster0.pmn76.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// console.log("MongoDB URL:", Url);
async function main() {
  await mongoose.connect(Url);
}
main()
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDb = async () => {
  await Paper.deleteMany({});
  await Paper.insertMany(initData.data);
  console.log("Data uploaded");
};
initDb();

app.listen(PORT, (req, res) => {
  console.log(`App listing on port ${PORT}`);
});

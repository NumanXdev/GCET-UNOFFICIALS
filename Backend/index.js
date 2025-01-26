require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Paper = require("./Models/Paper");
const cors = require("cors");
const multer = require("multer");
const { storage } = require("./cloudConfig");
const upload = multer({ storage });
const { Signup, Login } = require("./controllers/AuthController");
const cookieParser = require("cookie-parser");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const { isAdmin } = require("./Middlewares/isAdmin");

const app = express();

const PORT = process.env.PORT || 3000;

const Url = process.env.MONGO_URL;
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

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

app.get("/subjects", async (req, res) => {
  try {
    const data = await Paper.find({});
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
// console.log(typeof userVerification); // Should output 'function'
// console.log(userVerification);
// Upload

app.post("/verify", userVerification, isAdmin, (req, res) => {
  res.json({ status: true, message: "You are an admin" });
});

app.post("/upload", upload.single("Pdf"), async (req, res) => {
  try {
    // console.log(req);
    const { Title, Subject, Semester } = req.body.paper;
    let Url = req.file.path;
    let filename = req.file.filename;
    const newdata = new Paper({
      Title,
      Subject,
      Semester,
    });
    newdata.Pdf = { Url, filename };
    await newdata
      .save()
      .then(() =>
        res
          .status(200)
          .json({ success: true, message: "Data Uploaded Successfully" })
      );
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to save the Data" });
  }
});

// ------------> Auth <---------------
app.post("/signup", Signup);
app.post("/login", Login);

// ------------> Endpoint for fetching sun details <---------------

app.get("/subjects/:id", userVerification, async (req, res) => {
  try {
    const { id } = req.params;
    // console.log("backend " + id);
    const subject = await Paper.findById(id);
    // console.log(subject);
    if (subject) {
      res.json(subject);
    } else {
      res.json({ message: "Subject Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, (req, res) => {
  console.log(`App listing on port ${PORT}`);
});

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const paperSchema = new Schema({
  Title: {
    type: String,
    required: true,
  },
  Subject: {
    type: String,
    required: true,
  },

  Semester: {
    type: String,
    required: true,
  },
  Pdf: {
    Url: String,
    filename: String,
  },
  UploadedAt: {
    type: Date,
    default: Date.now,
  },
});

const paperModel = mongoose.model("paper", paperSchema);
module.exports = paperModel;

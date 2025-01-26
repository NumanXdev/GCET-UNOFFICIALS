require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id,user) => {
  return jwt.sign({ id,user }, process.env.TOKEN_KEY, {
    expiresIn: "3h",
  });
};

const User = require("../Models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  // console.log(req.cookies.token);
  try {
    if (!token) {
      return res.json({
        status: false,
        message: "Oops! It seems you're not logged in",
      });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res
          .status(403)
          .json({ status: false, message: "Invalid token" });
      }
      const user = await User.findById(data.id);
      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }
      req.user = user;

      next();
    });
  } catch (err) {
    return res.status(403).json({ status: false, message: "Invalid token" });
  }
};

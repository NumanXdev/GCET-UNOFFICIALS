require("dotenv").config();
module.exports.isAdmin = (req, res, next) => {
  const adminEmail = process.env.EMAIL_ID;
  const currUser = req.user;
  if (req.user && req.user.email === adminEmail) {
    res.json({ status: true, user: currUser.username, email: currUser.email });
  } else {
    return res.status(403).json({
      status: false,
      message: "Access denied. Admins only.",
      email: currUser.email,
    });
  }
};

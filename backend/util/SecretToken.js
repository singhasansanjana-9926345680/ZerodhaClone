

require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  const secretKey = process.env.TOKEN_KEY;

  if (!secretKey) {
    throw new Error("TOKEN_KEY is missing. Please set it in the .env file.");
  }

  return jwt.sign({ id }, secretKey, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days
  });
};
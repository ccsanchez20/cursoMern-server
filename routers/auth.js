const express = require("express");
const User = require("../controllers/auth");

const api = express.Router();

api.post("/rat", User.refreshAccessToken);

module.exports = api;

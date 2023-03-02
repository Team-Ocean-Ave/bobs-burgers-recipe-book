const express = require("express")
const router = express.Router()

const { User } = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send({users});
});

router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});
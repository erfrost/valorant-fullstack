const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

router.get("/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findOne(userId);
    res.status(200).send(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

router.patch("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (userId) {
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
        new: true,
      });
      res.send(updatedUser);
    } else
      res.status(401).json({
        message: "Unauthorized",
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "На сервере произошла ошибка. Попробуйте позже" });
  }
});

module.exports = router;

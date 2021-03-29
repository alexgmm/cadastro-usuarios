const router = require("express").Router();
const UserController = require("./UserController");

router.post("/", UserController.insert);

router.get("/", UserController.find);

module.exports = router;

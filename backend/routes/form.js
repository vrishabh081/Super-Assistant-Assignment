const express = require("express");
const { Form, FormGet} = require("../controllers/form");
const formRouter = express.Router();

// routes-
formRouter.route("/").post(Form).get(FormGet);


module.exports = formRouter;
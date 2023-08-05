const mongoose = require("mongoose");

// Schema-
const questionSchema = mongoose.Schema({
    q1 : {type: String},
    q2 : {type: String},
})

// Model-
const QuestionModel = mongoose.model("form", questionSchema);

module.exports = QuestionModel;
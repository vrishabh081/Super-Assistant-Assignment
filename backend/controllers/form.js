const QuestionModel = require("../model/form");

// Get
const FormGet = async (req, res) => {
    try{
        const data = await QuestionModel.find();
        return res.status(200).json({message: "Data added", data})
    }
    catch(error){
        console.log(error);
        console.log("OOP's product data not added");
    }
}



// Add product-
const Form = async (req, res) => {
    try{
        const payload = req.body;
        const data = await QuestionModel.create(payload);
        return res.status(200).json({message: "Data added", data})
    }
    catch(error){
        console.log(error);
        console.log("Data not added");
    }
}

module.exports = {Form, FormGet};


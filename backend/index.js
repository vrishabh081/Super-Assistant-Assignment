const express = require("express");
const app = express();

const cors = require("cors");
const dbConnection = require("./config/database");
const formRouter = require("./routes/form");

const PORT = 8000

// middleware-
app.use(express.json());
app.use(cors());

// routes-
app.use("/api/v1/question", formRouter);

// server-
app.listen(PORT, () => {
    try{
        dbConnection;
        console.log("Database connected succesfully");
        console.log(`Server connected successfully and running on ${PORT}`);
    }
    catch(error){
        console.log(error);
        console.log("OOP's something is wrong");
        console.log("OOP's Database not connected");
    }
})
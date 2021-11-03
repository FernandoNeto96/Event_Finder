const PORT = 8000;

const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const fs = require("fs");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// -------------------- LOGIN --------------------

app.post("/try-login", (req, res) => {
    
})

// -------------------- FUNCTIONS --------------------

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

const writeFile = (filePath, data) => {
    const dataToWrite = JSON.stringify(data);

    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, dataToWrite, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve("File Writed")
            }
        });
    })
}

// -------------------- LISTENNING --------------------

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.post("/api/register", (req, res) => {
    const { fullname, email, password } = req.body;
    console.log(fullname, email, password)
    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: { fullname, email } // You might return additional user data
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log(`Server up  and running on ${process.env.APP_PORT}!`)
});

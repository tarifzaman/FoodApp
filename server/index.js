const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const UserRegister = require('./models/UserRegister')

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://admin:1234@clusterishtiak.95lwg3u.mongodb.net/FoodApp")

console.log("DB connected")

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch( err => res.json(err))
    })

    app.post("/login", (req, res) => {
        const {email, password} = req.body;
        EmployeeModel.findOne({email: email})
        .then(user => {
        if(user) {
        if(user.password === password) {
        res.json("Success")
        }else
        res.json("the password is incorrect")
        } else {
        res.json("No record existed")
        }
        })
        })
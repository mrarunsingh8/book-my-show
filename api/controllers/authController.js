const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const userValidations = require("../validations/userValidations");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
    let userData = req.body;
    let { error } = userValidations.register.validate(userData);
    if (!error) {
        let user = await userModel.create(userData);
        return res.status(201).json({
            date: new Date(),
            insertedId: user.id,
            message: "User registration successful.",
        });
    } else {
        return res.status(400).json({
            dateTime: new Date(),
            message: "Validation failed.",
            error: error ?? errorItems
        });
    }
});

authController.post("/login", async (req, res) => {
    let userData = req.body;
    let { error } = userValidations.login.validate(userData);
    if (!error) {
        let user = await userModel.findOne({ where: { email: userData.email } });
        if (user && await bcrypt.compareSync(userData.password, user.password)) {
            let token = jwt.sign({
                id: user.id,
                name: user.name,
                email: user.email
            }, process.env.SECRET_KEY, { expiresIn: '1h' });

            return res.status(200).json({
                dateTime: new Date(),
                message: "Sign in successful.",
                token: token
            });
        } else {
            return res.status(400).json({
                dateTime: new Date(),
                message: "Invalid email or password.",
                error: []
            });
        }
    } else {
        return res.status(400).json({
            dateTime: new Date(),
            message: "Validation failed.",
            error: error
        });
    }
});


module.exports = authController;
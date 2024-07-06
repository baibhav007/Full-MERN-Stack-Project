const registeredUser = require("../models/registrationSchema");

exports.loginpost = async (req, res) => {
    const { email, password } = req.body;
    registeredUser.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    });
};

exports.registerpost = async (req, res) => {
    const { name, email, password } = req.body;
    registeredUser.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new registeredUser({
                name,
                email,
                password
            });
            newUser.save(err => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({ message: "Successfully Registered, Please login now." });
                }
            });
        }
    });
};

const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model("registeredUser", registrationSchema);

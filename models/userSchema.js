const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    formBasicName: {
        type: String,
        required: true,
    },
    formBasicGender: {
        type: String,
        required: true,
    },
    formBasicPhone: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model("USER", userSchema);

module.exports = User;
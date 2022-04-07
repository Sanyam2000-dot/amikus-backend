const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
    formBasicAmount: {
        type: Number,
        required: true,
    },
    formBasicReason: {
        type: String,
        required: true,
    },
    formBasicDuration: {
        type: String,
        required: true,
    },
    formBasicUPI: {
        type: String,
        required: true,
    },
});

const Borrow = mongoose.model("BORROW", borrowSchema);

module.exports = Borrow;
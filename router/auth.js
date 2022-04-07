const express = require("express");

const router = express.Router();
const User = require("../models/userSchema");
const Borrow = require("../models/borrowSchema");

router.post("/", (req, res) => {
    const { formBasicName, formBasicGender, formBasicPhone } = req.body;
    if (!formBasicName || !formBasicGender || !formBasicPhone) {
        return res.status(422).json({ error: "Fill properly" });
    }

    User.findOne({ formBasicPhone: formBasicPhone })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "Phone no already exist" });
            }

            const user = new User({ formBasicName, formBasicGender, formBasicPhone });
            user
                .save()
                .then(() => {
                    res.status(201).json({ message: "user registered" });
                })
                .catch((err) => {
                    res.status(500).json({ error: "internal error" });
                });
        })
        .catch((err) => console.log(err));
});

router.post("/borrowREQ", (req, res) => {
    const { formBasicAmount, formBasicReason, formBasicDuration, formBasicUPI } =
    req.body;
    if (!formBasicAmount || !formBasicReason || !formBasicDuration || !formBasicUPI) {
        return res.status(422).json({ error: "Fill properly" });
    }

    Borrow.findOne({ formBasicUPI: formBasicUPI })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "UPI already exist" });
            }

            const borrow = new Borrow({ formBasicAmount, formBasicReason, formBasicDuration, formBasicUPI });
            borrow
                .save()
                .then(() => {
                    res.status(201).json({ message: "borrow request sent" });
                })
                .catch((err) => {
                    res.status(500).json({ error: "internal error" });
                });
        })
        .catch((err) => console.log(err));
});
module.exports = router;
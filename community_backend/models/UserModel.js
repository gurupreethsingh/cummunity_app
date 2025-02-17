const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["superadmin", "admin", "vendor", "outlet", "caters", "employee", "artists", "user"],
        default: "user"
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;
import mongoose from "mongoose";
import validator from "validator";

const reservation_schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minLength: [2, "First name must be of at least of two characters."],
        maxLength: [20, "First name cannot exceed 30 characters."],
    },
    last_name: {
        type: String,
        required: true,
        minLength: [2, "Last name must be of at least of two Characters."],
        maxLength: [20, "Last name cannot exceed 20 Characters."],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 Digits."],
        maxLength: [10, "Phone number must contain 10 Digits."],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

export const reservation = mongoose.model("reservation", reservation_schema);
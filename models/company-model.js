const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide name"],
        trim: true,
        maxlength: [25, "Name cannot be more than 25 characters"]
    }, email: {
        type: String,
        required: [true, "Must Provide email"],
        trim: true,
        maxlength: [25, "email cannot be more than 25 characters"]
    },
    phone_no: {
        type: String,
        required: [true, "Must Provide phone-no"],
        trim: true,
        maxlength: [13, "phone no cannot be more than 25 characters"]
    },
    password: {
        type: String,
        required: [true, "Must Provide password"],
        trim: true,
        maxlength: [225, "password cannot be more than 125 characters"]
    },
    category: {
        type: String,
        required: [true, "Must Provide company category"],
        trim: true,
        maxlength: [15, "job_status cannot be more than 15 characters"]
    },
})

module.exports = mongoose.model('Company', CompanySchema);
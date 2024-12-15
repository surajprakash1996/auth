const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const authUser = Schema({
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
        enum: [
            'male',
            'female',
            'other'
        ]
    },
    phoneNumber: {
        type: Number,
        trim: true,
        required: true
    },
    emailAddres: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});


module.exports = model('auth', authUser);
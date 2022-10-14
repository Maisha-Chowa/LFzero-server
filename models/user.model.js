const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        default: 6
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("User", userSchema)
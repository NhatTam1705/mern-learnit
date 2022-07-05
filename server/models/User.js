const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const UserCheme = new Scheme({
    username: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserCheme)
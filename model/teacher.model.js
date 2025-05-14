const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    phone: String,
    isDeleted: { type: Boolean, default: false }
});

const teacherModel = mongoose.model('Teacher', teacherSchema);

module.exports = teacherModel;
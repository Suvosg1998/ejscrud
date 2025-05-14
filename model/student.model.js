const  mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
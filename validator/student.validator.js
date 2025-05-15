// validators/user.validator.js
const Joi = require('joi');

//const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

const studentSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'Email must be a valid email address.',
            'any.required': 'Email is required.'
        }),
    name: Joi.string().min(3).max(15).required()
        .messages({
            'string.min': 'Name must be at least 3 characters.',
            'string.max': 'Name cannot exceed 15 characters.',
            'any.required': 'Name is required.'
        }),
    age: Joi.number().min(0).required()
        .messages({
            'number.min': 'Age must be a positive number.',
            'any.required': 'Age is required.'
        }),
    // password: Joi.string()
    //     .pattern(passwordRegex)
    //     .message('Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.')
    //     .required()
    //     .messages({
    //         'any.required': 'Password is required.'
    //     }),
    phone: Joi.string().pattern(/^[0-9]{10}$/).required()
        .messages({
            'string.pattern.base': 'Phone number must be 10 digits long.',
            'any.required': 'Phone number is required.'
        }),
    // teacher: Joi.string().required()
    //     .messages({
    //         'any.required': 'Select a teacher.'
    //     }),
});

module.exports = studentSchema;

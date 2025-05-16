const Joi = require('joi');

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
    phone: Joi.string().pattern(/^[0-9]{10}$/).required()
        .messages({
            'string.pattern.base': 'Phone number must be 10 digits long.',
            'any.required': 'Phone number is required.'
        }),
    teacher: Joi.string().required()
        .messages({
            'any.required': 'Select a teacher.'
        }),
    file: Joi.string().required().allow('csv', 'xls', 'xlsx')
        .messages({
            'string.base': 'File must be a string.',
            'string.empty': 'File cannot be empty.',
            'any.required': 'File is required.'
        })
});

module.exports = studentSchema;
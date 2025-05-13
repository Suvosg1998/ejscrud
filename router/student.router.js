const express = require('express');
const router = express.Router();
const studentController = require('../controller/student.controller');

router.get('/student', studentController.getStudent);
router.get('/student/form', studentController.studentForm);
router.post('/student', studentController.createStudent);
router.get('/student/update/:id', studentController.updateForm);
router.post('/student/update/:id', studentController.updateStudent);
router.get('/student/delete/:id', studentController.deleteStudent);

module.exports = router;
const express = require('express');
const router = express.Router();
const teacherController = require('../controller/teacher.controller');

router.get('/teacher', teacherController.getTeacher);
router.get('/teacher/form', teacherController.teacherForm);
router.post('/teacher', teacherController.createTeacher);

module.exports = router;
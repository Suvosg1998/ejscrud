const express = require('express');
const router = express.Router();
const studentController = require('../controller/student.controller');
const FileUploader = require('../helper/fileUpload');
const fileUploader = new FileUploader({
    folderName: 'uploads',
    supportedFiles: ['text/csv', 'application/vnd.ms-excel'],
    fieldSize: 1024 * 1024 * 2
});

router.get('/student', studentController.getStudent);
router.get('/student/form', studentController.studentForm);
router.post('/student', fileUploader.upload().single('file'), studentController.createStudent);
router.get('/student/update/:id', studentController.updateForm);
router.post('/student/update/:id', studentController.updateStudent);
router.get('/student/delete/:id', studentController.deleteStudent);

module.exports = router;
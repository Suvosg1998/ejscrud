const TeacherRepository = require('../Repositories/teacher.repo');

class TeacherController {
    async teacherForm(req, res) {
        res.render('teacher/teacherForm');
    }

    async createTeacher(req, res) {
        const { name, age, email, phone } = req.body;
        const teacher = await TeacherRepository.create({
            name,
            age,
            email,
            phone
        });
        if (teacher) {
            req.flash("success", "Teacher created successfully");
            res.redirect('/teacher');
        } else {
            req.flash("error", "Failed to create teacher");
            res.redirect('/teacher/form');
        }
    }

    async getTeacher(req, res) {
        const teacher = await TeacherRepository.findAll({ isDeleted: false });
        res.render('teacher/teacherlist', { teacher });
    }
}

module.exports = new TeacherController();
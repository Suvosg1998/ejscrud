const studentRepository = require('../Repositories/user.repo');

class studentController{
async studentForm(req, res){
        res.render('student/studentForm');
    }
    async createStudent(req, res){

        const { name, age, email, phone, teacher } = req.body;
        const student = await studentRepository.create({
            name,
            age,
            email,
            phone,
            teacher
        });
        if(student){
            req.flash("success", "Student created successfully");
            res.redirect('/student');
        } else {
            req.flash("error", "Failed to create student");
            res.redirect('/student/form');
        }

    }
    async getStudent(req, res){
        const student = await studentRepository.findAll();
        res.render('student/studentlist', { student });
    }
    async updateForm(req, res){
        const { id } = req.params;
        const student = await studentRepository.findById(id);
        res.render('student/updateForm', { student });
    }
    async updateStudent(req, res){
        const { id } = req.params;
        const { name, age, email, phone } = req.body;
        await studentRepository.update(id, { name, age, email, phone });
        req.flash("success", "Student updated successfully");
        res.redirect('/student');
    }
    async deleteStudent(req, res){
        const { id } = req.params;
        await studentRepository.delete(id);
        req.flash("success", "Student deleted successfully");
        res.redirect('/student');
    }
}
module.exports = new studentController();
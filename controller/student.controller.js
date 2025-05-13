const studentModel = require('../model/student.model');

class studentController{
async studentForm(req, res){
        res.render('studentForm');
    }
    async createStudent(req, res){

        const { name, age, email, phone } = req.body;
        const student = await studentModel.create({
            name,
            age,
            email,
            phone
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
        const student = await studentModel.find({ isDeleted: false });
        res.render('studentlist', { student });
    }
    async updateForm(req, res){
        const { id } = req.params;
        const student = await studentModel.findById(id);
        res.render('updateForm', { student });
    }
    async updateStudent(req, res){
        const { id } = req.params;
        const { name, age, email, phone } = req.body;
        await studentModel.findByIdAndUpdate(id, { name, age, email, phone });
        req.flash("success", "Student updated successfully");
        res.redirect('/student');
    }
    async deleteStudent(req, res){
        const { id } = req.params;
        await studentModel.findByIdAndUpdate(id, { isDeleted: true });
        req.flash("success", "Student deleted successfully");
        res.redirect('/student');
    }
}
module.exports = new studentController();
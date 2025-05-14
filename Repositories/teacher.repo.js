const teacherModel = require('../model/teacher.model')
class TeacherRepository {
    async create(data) {
        try {
            return await teacherModel.create(data);
        } catch (error) {
            console.log(error);
            throw new Error("Failed to create teacher");
        }
    }

    async findAll() {
        try {
            return await teacherModel.find({ isDeleted: false });
        } catch (error) {
            console.log(error);
            throw new Error("Failed to fetch teachers");
        }
    }
}
module.exports = new TeacherRepository();
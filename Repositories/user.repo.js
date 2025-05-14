const userModel = require('../model/student.model');

class UserRepository {
    async create(Data){
        try{
            return await userModel.create(Data);
        } catch (error) {
            console.log(error);
            throw new Error("Failed to create user");
        }
    }
    async findAll(){
        try{
            return await userModel.aggregate([
                {
                    $match:{isDeleted:false}
                },
                {
                    $lookup:{
                        from:'teachers',
                        localField:'teacher',
                        foreignField:'_id',
                        as:'teacher'
                    }
                },
                {
                    $unwind:'$teacher'
                },
                {
                    $project:{
                        name:1,
                        age:1,
                        email:1,
                        phone:1,
                        teacher:{
                            name:'$teacher.name',
                            email:'$teacher.email'
                        }
                    }
                }
            ])
        } catch (error) {
            console.log(error);
            throw new Error("Failed to fetch users");
        }
        
    }
    async findById(id){
        try{
            return await userModel.findById(id);
        }
        catch (error) {
            console.log(error);
            throw new Error("Failed to fetch user");
        }
    }
    async update(id, Data){
        try {
            return await userModel.findByIdAndUpdate(id, Data);
        } catch (error) {
            console.log(error);
            throw new Error("Failed to update user");
        }
    }
    async delete(id){
        try {
            return await userModel.findByIdAndUpdate(id, { isDeleted: true });
        } catch (error) {
            console.log(error);
            throw new Error("Failed to delete user");
        }
    }
}
module.exports = new UserRepository();
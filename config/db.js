const mongoose = require('mongoose');

class DBconnection{
    connectDB(){
        mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });
    }
}
module.exports = new DBconnection();
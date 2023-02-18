const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const empSchema = new Schema(
    {
        name: {
            type: String,
        },
        
        email: {
            type: String,
            unique: true,
        },
        
        password: {
            type: String,
        },
        
    },
    { timestamps: true }
);

const Employee = mongoose.model("Employee", empSchema);
module.exports = Employee;

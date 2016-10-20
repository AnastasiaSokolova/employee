var mongoose = require('mongoose'),
Schema = mongoose.Schema;



var EmployeeSchema = new Schema({
    id: String,
    firstname: String, 
    lastname: String, 
    age: Number,
    position: String, 
    skill: String, 
    language_level: String,
    experience: Number
});


mongoose.model('Employee', EmployeeSchema);

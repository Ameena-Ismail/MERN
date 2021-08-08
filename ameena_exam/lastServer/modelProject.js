const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        unique: [true, "Projects name must be unique"],
        required: [true, "Name is required"],
        minlength: [4, "Project Name must be at least 4 characters long"]
    },
    status: {type: String},
    dueDate: {type: Date}
}, { timestamps: true });
module.exports.Project = mongoose.model('Project', ProjectSchema);
ProjectSchema.plugin(uniqueValidator);
const { Project } = require('./modelProject');

module.exports.createProject = (request, response) => {
    const { projectName, status, dueDate } = request.body;
    Project.create({projectName, status, dueDate})
        .then(project => {
        response.json(project)})
        .catch(err => {response.status(400).json(err);});
}

module.exports.getAllProjects = (request, response) => {
    Project.find({})
        .then(projects => response.json(projects))
        .catch(err => response.status(400).json(err))
}
module.exports.getBacklog = (request, response) => {
    Project.find({status:"toDo"}).sort( { "dueDate": 1 } )
        .then(projects => response.json(projects))
        .catch(err => response.status(400).json(err))
}
module.exports.getProgress = (request, response) => {
    Project.find({status:"doning"}).sort( { "dueDate": 1 } )
        .then(projects => response.json(projects))
        .catch(err => response.status(400).json(err))
}
module.exports.getComplete = (request, response) => {
    Project.find({status:"done"}).sort( { "dueDate": 1 } )
        .then(projects => response.json(projects))
        .catch(err => response.status(400).json(err))
}

module.exports.getProject = (request, response) => {
    Project.findOne({_id:request.params.id})
        .then(project => response.json(project))
        .catch(err => response.status(400).json(err))
}

module.exports.updateProject = (request, response) => {
    // Project.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    Project.findOneAndUpdate({_id: request.params.id}, request.body)
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteProject = (request, response) => {
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.status(400).json(err))
}

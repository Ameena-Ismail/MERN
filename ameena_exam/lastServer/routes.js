const ProjectController = require('./controlProject');

module.exports = function(app){   
    app.post('/api/project', ProjectController.createProject);
    app.get('/api/project', ProjectController.getAllProjects);
    app.get('/api/project/backlog', ProjectController.getBacklog);
    app.get('/api/project/progress', ProjectController.getProgress);
    app.get('/api/project/complete', ProjectController.getComplete);
    app.get('/api/project/:id', ProjectController.getProject);
    app.put('/api/project/:id', ProjectController.updateProject);
    app.delete('/api/project/:id', ProjectController.deleteProject);
}

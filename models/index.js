const User = require('./User');
const Project = require('./Project');
// const Member = require('./Member');
const Discussion = require('./Discussion');

User.hasMany(Project, { 
    foreignKey: 'project_id' 
});

Project.belongsTo(User, {
    foreignKey: 'project_id'
});

User.hasMany(Discussion, {
    foreignKey: 'discussion_id'
});

Discussion.belongsTo(User, {
    foreignKey: 'discussion_id'
});



module.exports = { User, Project, Discussion };
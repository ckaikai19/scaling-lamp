const User = require('./User');
const Project = require('./Project');
const Member = require('./Member');

User.hasMany(Project, { 
    foreignKey: 'user_id' 
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

Project.hasMany(Member, {
    foreignKey: 'project_id'
});

Member.belongsTo(Project, {
    foreignKey: 'project_id'
});

module.exports = { User, Project, Member };
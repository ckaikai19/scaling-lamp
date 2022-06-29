const sequelize = require('../config/connection');
const { User, Project, Discussion } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const discussionData = require('./discussionData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    });

    await Project.bulkCreate(projectData);

    await Discussion.bulkCreate(discussionData);

  process.exit(0);
};

seedDatabase();
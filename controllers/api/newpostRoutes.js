const router = require('express').Router();
const { Project, Discussion } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/project', async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            project_id: req.session.user_id,
          });
        res.status(200).json(newProject);
    } catch (err) {
    res.status(400).json(err);
    }
});

router.post('/discussion', async (req, res) => {
    try {
        const newDiscussion = await Discussion.create({
            ...req.body,
            project_id: req.session.user_id,
          });
        res.status(200).json(newDiscussion);
    } catch (err) {
    res.status(400).json(err);
    }
});

module.exports = router;
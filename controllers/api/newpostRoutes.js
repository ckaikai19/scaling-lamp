const router = require('express').Router();
const { Project, Discussion } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', async (req, res) => {
//     try {
//         const { title, content, projectId } = req.body;

module.exports = router;
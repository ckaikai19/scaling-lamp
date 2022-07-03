const router = require('express').Router();
const { Project, Discussion, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/landing', (req, res) => {
    res.render('landing');
});


router.get('/', (req, res) => {
    res.render('dashboard');
});


router.get('/chatroom', (req, res) => {
    res.render('chatroom');
});


module.exports = router;


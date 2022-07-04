const router = require('express').Router();
const { Project, Discussion, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('landing', { title : 'Landing', cssname: 'home.css' });
});


router.get('/dashboard', (req, res) => {
    res.render('dashboard', { title : 'Dashboard', cssname: 'dashboard.css' });
});


router.get('/chatroom', (req, res) => {
    res.render('chatroom' , { title : 'Chatroom', cssname: 'chatroom.css' });
});


module.exports = router;


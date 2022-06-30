const router = require('express').Router();
const { Project, Discussion, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('home');
});


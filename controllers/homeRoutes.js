const router = require('express').Router();
const { Project, Discussion, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/register',(req, res) => {
    res.render('', { title: 'register'});
    });


router.get('/', (req, res) => {
    res.render('startup');
    });

router.post('/', (req, res) => {    
    return res.json(req.body);
    });
module.exports = router;
const router = require('express').Router();
const { Project, Discussion, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {

    res.render('landing', { loggedIn: req.session.loggedIn, title : 'Landing', cssname: 'landing.css' });
});


router.get('/dashboard', async (req, res) => {
    try {
        const dbDiscussionData = await Discussion.findAll({
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
    
        const discussions = dbDiscussionData.map((discussion) =>
        discussion.get({ plain: true })
        );
    
        res.render('dashboard', {
            discussions,
            loggedIn: req.session.loggedIn,
            title: 'Dashboard',
            cssname: 'dashboard.css'         
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    // res.render('dashboard', { title : 'Dashboard', cssname: 'dashboard.css' });
});

router.get('/login', async (req, res) => {
    res.render('login', { title : 'Login', cssname: 'signup.css' });
});

router.get('/signup', async (req, res) => {
    res.render('signup', { title : 'Signup', cssname: 'signup.css' });
});

router.get('/chatroom', (req, res) => {
    res.render('chatroom' , { title : 'Chatroom', cssname: 'chatroom.css' });
});


module.exports = router;


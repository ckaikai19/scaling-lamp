const router = require('express').Router();
const { Project, Discussion, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {

    res.render('landing', { loggedIn: req.session.loggedIn, title : 'Landing', cssname: 'landing.css' });
});


router.get('/discussion', withAuth, async (req, res) => {
    try {
        const dbDiscussionData = await Discussion.findAll({
          include: [
            {
              model: User,
              attributes: ['username', 'createdAt'],
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

router.get('/project', withAuth, async (req, res) => {
    try {
        const dbProjectData = await Project.findAll({
            include: [
              {
                model: User,
                attributes: ['username', 'createdAt'],
              },
            ],
          });
      
          const projects = dbProjectData.map((project) =>
          project.get({ plain: true })
          );
    
        res.render('dashboard', {
            projects,
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

module.exports = router;


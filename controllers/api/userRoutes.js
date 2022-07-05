const router = require('express').Router();
const { User, Discussion, Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/signup', async (req, res) => {
    try {
        const user = await User.create(req.body);

        req.session.save(() => {
          req.session.user_id = user.id;
          req.session.loggedIn = true;
        });
        res.redirect('/dashboard');
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/login', async (req, res) => {
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
      const { username, password } = req.body;
      const user = await User.findOne({
        where: {
          username,
        },
      });
      if(user) {
        const isPasswordValid = user.checkPassword(password);
        if(isPasswordValid) {
          req.session.user_id = user.id;
          req.session.loggedIn = true;
          res.render('dashboard', {
            loggedIn: req.session.loggedIn,
            title: 'Dashboard',
            cssname: 'dashboard.css',
            projects,
            user
          });
        }
      }  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy(() => {
        res.redirect('/');
      });
      
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;


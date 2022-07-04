const router = require('express').Router();
const { User, Discussion } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/signup', async (req, res) => {
    try {
        const user = await User.create(req.body);
        // const dbDiscussionData = await Discussion.findAll({
        //   include: [
        //     {
        //       model: User,
        //       attributes: ['username'],
        //     },
        //   ],
        // });

        req.session.save(() => {
          req.session.user_id = user.id;
          req.session.loggedIn = true;
        });

        // const discussions = dbDiscussionData.map((discussion) =>
        // discussion.get({ plain: true })
        // );
    
        //redirect to dashboard
        res.redirect('/dashboard');
    } catch (err) {
        res.status(400).json(err);
    }
});


router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
      });

      res.redirect('/dashboard');
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;


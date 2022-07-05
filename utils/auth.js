const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      console.log(req.session.user_id);
      next();
    }
  };
  
  module.exports = withAuth;
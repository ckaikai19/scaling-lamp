const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newpostRoutes = require('./newpostRoutes');

router.use('/users', userRoutes);
router.use('/newpost', newpostRoutes);

module.exports = router;
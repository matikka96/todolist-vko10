const router = require('express').Router();
const passport = require('passport');

// // Auth login
// router.get('/login', (req, res) => {
// 	res.sendFile('http://localhost:3000/profile.html');	// profile test
// });

// Auth logout
router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/login');
});

// Auth with google
router.get('/google', passport.authenticate('google', {
	scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
	res.redirect('/');
});

module.exports = router;
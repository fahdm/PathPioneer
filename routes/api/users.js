const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

// All paths start with '/api/users'
 
// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

module.exports = router;
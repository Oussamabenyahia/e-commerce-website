const express = require('express');
const router = express.Router();
const { user } = require('../../controllers');  //import our user controller to creat a user in login

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', user.create);

module.exports = router;
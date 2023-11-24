const db = require('../models')

// creat main model
const User = db.users






module.exports = {
//add user to data base
    create: async (req, res) => {
        if (req.body.username && req.body.password) {
            const { username, password } = req.body;

            await User.create({
                username,
                password
            });
// from input(views)
            res.render('profile', { username });
        } else {
            res.send('Not added to the database!');
        }
    }

}
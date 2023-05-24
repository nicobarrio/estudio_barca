let db = require('../database/models');
const path = require('path');

const usersController = {
    login: (req, res) => {
        res.render(path.join(__dirname, '../views/users/login'));
    }
}

module.exports = usersController;
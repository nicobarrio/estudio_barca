const path = require('path');

const homeController = {
    index: (req, res) => {
        res.render(path.join(__dirname, '../views/home'));
    }
}

module.exports = homeController; 
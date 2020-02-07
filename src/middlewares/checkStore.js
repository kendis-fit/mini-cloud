const fs = require("fs");

module.exports = (req, res, next) => {
    if (!fs.existsSync(`${__dirname}/../stores`)) {
        fs.mkdirSync(`${__dirname}/../stores`);
    }
    next();
}
const fs = require("fs");
const path = require("path");

module.exports = (req, res, next) => {
    const p = path.resolve(`${__dirname}/../stores`);
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }
    next();
}
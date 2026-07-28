const fs = require("fs");

module.exports = {
    readJSON: (path) => JSON.parse(fs.readFileSync(path)),
    sleep: async (ms) => new Promise(resolve => setTimeout(resolve, ms))
};

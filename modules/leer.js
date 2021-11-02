const fs = require('fs');
const leer = file => JSON.parse(fs.readFileSync(file, "utf-8"));
module.exports = leer;
const path = require('path');

module.exports = {
    mode: "production",
    entry: "./build/index.js",
    output: {
        path: path.join(process.cwd(), 'public'),
        filename: "bundled.js"
    }
};
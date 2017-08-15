let path = require('path');

let config = {
    entry:path.resolve(__dirname,'src/index.jsx'),
    output:{
        path: path.resolve(__dirname,'src/dist'),
        filename:'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: path.resolve(__dirname,'src'),
            loader: 'babel-loader'

        }]
    }
};

module.exports = config;
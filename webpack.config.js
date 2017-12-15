const path = require('path');
//const webpack = require('webpack');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const dist = path.join(__dirname, 'dist');

module.exports = {

    entry: path.join(__dirname, 'src', 'containers', 'index.js'),

    output: {
        path: dist,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query: {compact: false},
                exclude: /node_modules/
            },

            // Used for Bootstrap Less Source Files
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // Used for Bootstrap CSS Source Files
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            // Used for Bootstrap Glyphicon Fonts
            {
                test: /\.(woff2|woff|ttf|svg|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        //new UglifyJSPlugin()
    ]
};
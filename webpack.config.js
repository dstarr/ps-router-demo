const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.join(__dirname, 'src', 'index.js'),

    context: path.resolve(__dirname),

    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
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
        new HtmlWebpackPlugin()
        //new UglifyJSPlugin()

    ],

    devServer: {
        historyApiFallback: true
    }
};
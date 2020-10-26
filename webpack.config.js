const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: './resources/src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            actions: path.join(__dirname, 'resources/src', 'actions'),
            reducers: path.join(__dirname, 'resources/src', 'reducers'),
            containers: path.join(__dirname, 'resources/src', 'containers'),
            middlewares: path.join(__dirname, 'resources/src', 'middlewares'),
            components: path.join(__dirname, 'resources/src', 'components'),
            helpers: path.join(__dirname, 'resources/src', 'helpers')
        }
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env", 
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, "public", "index.html")
        })
    ]
}
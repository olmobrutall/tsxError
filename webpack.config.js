/// <binding />
"use strict";
var path = require('path');
var webpack = require('webpack');

var node_modules = path.join(__dirname, "node_modules");

module.exports = {
    entry: {
        main: [ "./Typeahead2.tsx" ],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.[name].[hash].js",
        chunkFilename: "bundle.[name].[hash].js"
    },
    resolve: {
        modules: [node_modules],
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.tsx']     
    },
    resolveLoader: { modules: [node_modules] },
    module: {
        rules: [
           {
               test: /\.tsx?$/,
               use: [
                   {
                       loader: 'ts-loader',
                       options: {
                           transpileOnly: true,
                           compilerOptions: {
                               "noEmit": false
                           }
                       }
                   }
               ]
           },
        ]
    },
}
module.exports = {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [
            {test: /\.js|\.jsx/, use: 'babel-loader'},
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            //file-loader
            // {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }

}

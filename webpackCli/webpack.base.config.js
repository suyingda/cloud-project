const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            // {test: /\.js|\.jsx/, use: 'babel-loader'},
            {test: /\.tsx$/, loader: "awesome-typescript-loader"},
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            minimize: true,
                            localIdentName: "[local]_[hash:base64:5]"
                        }
                    },
                ]
            },
            /*  {
                  test: /\.css?$/,
                  use: [
                      'style-loader',
                      'css-loader',
                  ]
              },*/
            /*  {
                  test: /\.less$/,
                  use: [
                      {
                          loader: 'style-loader',
                      },
                      {
                          loader: 'css-loader',
                      },
                      {
                          loader: 'less-loader',
                          options: {
                              lessOptions: {
                                  strictMath: true,
                                  noIeCompat: true,
                              },
                              module:true
                          },
                      },
                  ],
              },*/
            //file-loader
            // {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }

}

#notes

#entry
single
entry:'./path/file.js'
entry:{
   app:'index.js',
   second:'second.js'
}
#output     输出到磁盘
output:{
    filename:'[name].js',
    path:path.join(__dirname,'dist')
}

#loaders
ts-loader
#plugins 作用于整个构建过程中

[]
#mode
development  production  none webpack4

process.env.NODE_ENV 的值为development.  开启NamedChunks Plugin 和NameModulesPlugin
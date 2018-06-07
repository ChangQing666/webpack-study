# webpack-study
webpack配置学习实践
```
npm install
```
```
npm run build
```
```
##output分支：
   主要进行了html-webpack-plugin和clean-webpack-plugin插件的配置和使用，
   * 前者html-webpack-plugin用来自动生成index.html及打包后js的使用，
   * 后者clean-webpack-plugin用于每次打包前清空dist文件夹。
   * 配置devtool: 'inline-source-map',目的在于开发环境中当代码报错时，能准确地映射到报错在源代码中的位置；
   * webpack's Watch Mode:依赖图中的所有文件以进行更改。
     如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建。但是需要刷新浏览器。
   * webpack-dev-server: 在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。npm start 自动编译。
   * webpack-dev-middleware: 和express进行搭配搭建简单服务器
   * webpack-merge: 通用配置，然后分别引入到开发和生产环境
```


const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  mode:"development",
  entry:{
    "index":"./src/index.js"
  },
  output:{
    path:__dirname+"/dist",
    filename:"[name].bundle.js"
  },
   devServer:{
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module:{
    rules:[
      {
       // 定义规则
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          /*use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }]*/
          use: ["css-loader","less-loader"]
        })
        // 加载机
        //loader: 'style-loader!css-loader!less-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}

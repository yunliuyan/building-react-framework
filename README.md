# building-react-framework
借鉴网上资料，自己搭建了一个react+redux框架

设计知识点: webpack+es6+react+redux+react-router+axios;

开发环境如何使用(请安装淘宝镜像): 

cnpm install

cnpm run mock

cnpm start

都运行成功用浏览器访问路径：http://localhost:8000

生产环境如何使用：

cnpm run build

然后将dist拷贝至服务器即可


# 第二次上传:

1:将api接口封装至config文件夹中的api.js中


2: 将http请求函数封装至config文件夹中的http.js中(待完善)

# 第三次上传：

1：引进了antd组件

Q：如何在自己的react项目中引用antd

A: .cnpm install antd --save


   . 需要引用插件babel-plugin-import，来引用antd的样式=》cnpm install babel-plugin-import --save
   
   
   .引用babel-plugin-import之后，需要修改webpack.common.config.js中的module：
   
   
    rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader:'babel-loader?cacheDirectory=true',
            query: {
                plugins: [
                    ["import", { libraryName: "antd",  style: "css" }]
                ]
            },
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
        
        
      .注:这里引用antd的样式之后，会和我们之前使用的module css产生冲突，所以我们需要兼容两者。在webpack.dev.config.js中将module中的css的打包规则
      注释掉一些:
      
      
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                // options: {
                //     modules: true,
                //     importLoaders: 1,
                //     localIdentName: '[name]_[local]_[hash:base64:5]',
                //     camelCase: true
                // }
            }, {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                }
            }]
        }],
        
        
        .之后就可以使用antd了。
2：添加了登录页。

Q：其设计逻辑如何实现？

A：首先路由默认跳转首页，path='/'，在App.js组件渲染的时候判断缓存池里面的token有无或者token是否是正确的。若有且正确则代表已经登录，可正常访问，若无或者
  是错误的则跳到登录页面。
  
Q：其登录页面并不需要导航栏，按照之前的逻辑所有的页面都在组件的上面加入了nav组件。

A：碰到这个问题吐了一口老血。想了很多办法，比如在缓存池登录成功后加入一个字段isLogin，回到app.js里面来判断nav的显示隐藏，或者在页面加入一个字段来判断。
  但回到app.js组件中并不会重新刷新生命周期。componentDidUpdate又不能重新赋值等一系列问题。目前想到的解决方法是:将login的router单独写一个，然后显示：
  
   
         <div>{getLoginRouter()}</div>
         <div><Nav/>{getRouter()}</div> 
  
   
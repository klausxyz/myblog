/**
 * 入口模块
 */

var express = require('express')

var app = express()

//模板引擎设置
app.set('view engine','html')
app.set('views','${__dirname}/view')
app.engine('html',require('ejs').renderFile)

//静态资源配置
app.use(express.static('static'))

/*
调用首页路由
app.use('/',require('./router/index'))
app.use('/index',require('./router/index'))
*/

//正则表达式写法,匹配0次或一次
app.use(/\/(index)?/,require('./router/index'))

//监听服务器
app.listen('8000',() => console.log('服务启动，http://localhost:8000'));
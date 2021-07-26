/**
 * 首页路由
 */

var express = require('express');

var indexApp = express();

indexApp.get('/', (req.res) => {
    res.render('index')
})

module.exports = indexApp
var express = require('express');

//建立一個EXPRESS伺服器
var app = express();

//設定靜態檔案所在目錄
app.use(express.static(__dirname + '/public'));

//處理首頁連結要求
app.get('/myroute', function(req, res){
    //傳送字串回流覽器
    res.send('This is GET method');
    res.end();
});

//POST方法的路由，用來處理「/」路徑
app.post('myroute', function(req, res){
    //傳送字串回流覽器
    res.send('This is POST method');
    res.end();
});

// test
app.listen(12345);

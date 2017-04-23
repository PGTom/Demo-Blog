var express=require("express");
var app=express(); // 產生Express Application物件
app.get("/", function(req, res){ //當使用者連接到伺服器的根目錄 (/) 時，做出反應
	res.send("Hello <b>World</b>");
});
app.listen(3000, function(){
	console.log("伺服器已經啟動在 http://localhost:3000/");
});
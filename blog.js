//数据模型
//Blog

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

//定义模型结构
var BlogSchema = new Schema({
	title    : String,
	author   : String,
	body     : String,
	// comments : [{ body: String, date : Date }],
	date     : { type : Date, default : Date.now }
	// hidden   : Boolean,
	// meta     : { votes : Number, favs : Number }
});

//注册模型
mongoose.model('Blog', BlogSchema);

mongoose.connect('mongodb://localhost/test?poolSize=10');
var db = mongoose.connection;
//打开一个数据库链接
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  //console.log('打开一个数据库链接...');
  //console.log(this);
});
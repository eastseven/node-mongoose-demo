//对Blog的增、删、改、查

//import blog.js
require('./blog');

var mongoose  = require('mongoose');
var Blog      = mongoose.model('Blog');

console.log('crud.js :\n');

//增加
//通过entity的save方法保存数据
var blog = new Blog({
  title : '测试博客',
  author : 'd7',
  body : '通过entity的save方法保存数据'
});
blog.save(function(err, blog) {
	console.log('通过entity的save方法保存数据');
	console.log(blog);
});

//通过model的create方法保存数据
Blog.create({
  title : 'Test Blog',
  author : 'eastseven',
  body : '通过model的create方法保存数据'
}, function(err, blog) {
	console.log('通过model的create方法保存数据');
	console.log(blog);
});
console.log('增加');

//查询
Blog.find({}).sort('-date').exec(function(err, blogs) {
  var index = blogs.length;
  blogs.forEach(function(blog) {
  	console.log( (index--) + '.' + blog.date + ': ' + blog.title + ',' + blog.author + ',' + blog.body);
  });
});
console.log('查询');

//修改
Blog.update({author : 'eastseven'}, {body : '修改'}, {multi : true}, function(err, numberAffected, raw) {
  console.log('The number of updated documents was %d', numberAffected);
  console.log('The raw response from Mongo was ', raw);
});

//删除
Blog.remove({author : 'd7'}, function(err) {
  console.log('删除author是d7的记录');
});

Blog.remove({}, function(err) {
  console.log('删除全部记录');
});

Blog.find(function(err, blogs) {
	console.log('剩余记录数：' + blogs.length);
});

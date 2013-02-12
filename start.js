var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var blog = new Schema({
	title : String,
	author: String,
	body  : String,
	comments : [{ body: String, date : Date }],
	date : {type : Date, default : Date.now},
	hidden : Boolean,
	meta : {votes : Number, favs : Number}
});
console.log(blog);

var person = new Schema({
	name : {
		first : String,
		last  : String
	}
});
console.log(person);

var Person = mongoose.model('Person', person);
var d7 = new Person({name : {first : 'east', last : 'seven'}});
console.log(d7);
console.log(d7.name.first + '.' + d7.name.last);
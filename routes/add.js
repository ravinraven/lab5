var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log(res.query.name);
	console.log(res.query.description);
	res.render('add', data);
	// Your code goes here
 }
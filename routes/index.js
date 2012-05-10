
/*
 * GET home page.
 */
var com = {"comment" : []};
var numComments = 0;
exports.index = function(req, res){
	var email = req.body.email;
	var comment = req.body.comment;
	if(email && comment){
		numComments += 1;
		com.comment.push({"email" : email , "comment" : comment , "numC" : numComments});
	}
	res.render('index' , {title: "Pro comments!", c : com });

};

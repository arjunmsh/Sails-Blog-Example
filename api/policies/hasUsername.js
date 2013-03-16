/**
* Allow any user that has a username.
*/
module.exports = function (req,res,ok) {
	
	// User is allowed, proceed to controller
	if (req.session.nick) {
		return ok();
	}

	// User is not allowed
	else {
		return res.send("You are not permitted to perform this action.",403);
	}
	
};
/*---------------------
	:: User 
	-> controller
---------------------*/
var UserController = {

	authenticate: function(req, res) {
		if (req.session.authenticated) {
			return;
		} else {
			res.view();
		}
	}

};
module.exports = UserController;
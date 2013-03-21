/*---------------------
	:: Chat 
	-> controller
---------------------*/

module.exports = {
	index: function (req,res) {
		var message = req.param('message');
		var line = req.param('line');
		var nick = req.param('nick');

		console.log(message);
		console.log(line);
		console.log(nick);

		res.json({
			success: true,
			message: message,
			line: line,
			nick: nick
		});
	}
};
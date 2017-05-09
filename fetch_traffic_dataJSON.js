var request = require("request");

var url = "https://www.tsaboin.com/api/statuses/public_timeline.json"
request({
	url: url,
	json: true
}, function (err, res, body) {
	if (!err && res.statusCode === 200) {
		console.log(body);
	}
})
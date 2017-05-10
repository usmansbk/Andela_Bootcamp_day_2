var request = require("request");
var program = require('commander');
var url = "https://www.tsaboin.com/api/statuses/public_timeline.json"

function printData(body, range) {
	for (var i = 0; i < range; i++) {
		console.log("time: " + body[i]['created_at']);
		console.log("info: " + body[i]['text']);
		console.log("");
	}
}

function myreq(op) {
	request({
		url: url,
		json: true
	}, function (err, res, body) {
		if (!err && res.statusCode === 200) {

			switch (op) {
				case 'l': {
					printData(body, body.length);
					break;
				}
				case 'h': {
					printData(body, 10);
					break;
				}
			}

		}
	});
}

function listRoads(val) {
	console.log("fetching list of roads");
	myreq('l');
}

function getHeadData(val) {
	console.log("Fetching " + val + " data");
	myreq('h');
}

program.version('0.0.1')
.option('-l, --list', 'List the names and news of all tracked roads in lagos', listRoads)
.option('-h, --head', 'List the top news', getHeadData)
.parse(process.argv);
var request = require("request");
var program = require('commander');
var url = "https://www.tsaboin.com/api/statuses/public_timeline.json"
var from;

function myreq(op) {
	request({
		url: url,
		json: true
	}, function (err, res, body) {
		if (!err && res.statusCode === 200) {

			switch (op) {
				case 'l': {
					for (var i = 0; i < body.length; i++) {
						//	console.log(body[i]);
						console.log("time: " + body[i]['created_at']);
						console.log("info: " + body[i]['text']);
						console.log("");
					}
					break;
				}
				case 'h': {
					for (var i = 0; i < 5; i++) {
							console.log('time: ' + body[i]['created_at']);
							console.log('info: ' + body[i]['text']);
							console.log("");
					}
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

function getRoadData(val) {
	console.log("Fetching " + val + " data");
	from = val;
	myreq('h');
}
program
  .version('0.0.1')
  .option('-l, --list', 'List the names and news of all tracked roads in lagos', listRoads)
  .option('-r, --road [value]', 'The road name', getRoadData)
  .parse(process.argv);
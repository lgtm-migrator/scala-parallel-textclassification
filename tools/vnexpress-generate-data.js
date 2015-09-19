var lineReader = require('line-reader');
var fs = require('fs');

var start = 99999;
lineReader.eachLine('../data/vnexpress-1000.json', function(line, last) {
	try {
		var lineData = JSON.parse(line);

		if (lineData) {
			lineData.entityId = start++;
			lineData.eventTime = new Date();

			fs.appendFile('../data/vnexpress-1000-import-able.json', JSON.stringify(lineData) + "\n");
		}
	} catch (e) {}
});
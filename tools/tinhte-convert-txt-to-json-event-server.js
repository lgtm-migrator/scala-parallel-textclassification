var lineReader = require('line-reader');
var fs = require('fs');
var path = require('path');

var start = 2222;
lineReader.eachLine(path.resolve(__dirname, '../data/tinhte_training.txt'), function(line, last) {
	try {
		line = line.split('\t');

		if (line && line[0] && line[1]) {
			var lineData = {
				properties: {
					label: parseInt(line[0]),
					text: line[1].trim()
				},
				event: "islab_textclassify",
				entityType: "content"
			};

			if (lineData) {
				lineData.entityId = start++;
				lineData.eventTime = new Date();

				fs.appendFile('../data/tinhte-train-data-import.json', JSON.stringify(lineData) + "\n");
			}
		}
	} catch (e) {}
});

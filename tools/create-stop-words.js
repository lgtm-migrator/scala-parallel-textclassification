'use strict';

var fs = require('fs');
var path = '../data/stopwords-vietnamese.json';

var words = [
	"bị",
	"bởi",
	"cả",
	"các",
	"cái",
	"cần",
	"càng",
	"chỉ",
	"chiếc",
	"cho",
	"chứ",
	"chưa",
	"chuyện",
	"có",
	"có thể",
	"cứ",
	"của",
	"cùng",
	"cũng",
	"đã",
	"đang",
	"đây",
	"để",
	"đến nỗi",
	"đều",
	"điều",
	"do",
	"đó",
	"được",
	"dưới",
	"gì",
	"khi",
	"không",
	"là",
	"lại",
	"lên",
	"lúc",
	"mà",
	"mỗi",
	"một cách",
	"này",
	"nên",
	"nếu",
	"ngay",
	"nhiều",
	"như",
	"nhưng",
	"những",
	"nơi",
	"nữa",
	"phải",
	"qua",
	"ra",
	"rằng",
	"rằng",
	"rất",
	"rất",
	"rồi",
	"sau",
	"sẽ",
	"so",
	"sự",
	"tại",
	"theo",
	"thì",
	"trên",
	"trước",
	"từ",
	"từng",
	"và",
	"vẫn",
	"vào",
	"vậy",
	"vì",
	"việc",
	"với",
	"vừa"
];

fs.unlink(path, function() {
	for (var i in words) {
		var stopWordRecord = {
			event: "stopwords",
			eventTime: new Date(),
			entityId: i,
			entityType: "resource",
			properties: {
				word: words[i]
			}
		}

		fs.appendFile(path, JSON.stringify(stopWordRecord) + "\n");
	}

	console.log("Finish!\nUsing: pio import --appid 1 --input " + path)
});

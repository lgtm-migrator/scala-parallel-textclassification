/**
 * Tools generate vietnamese stopwords to events imports file.
 * Using for EventServer PredictionIO.
 *
 * Author: Van-Duyet Le
 */
'use strict';

// ===============================
// CONFIG
// ===============================
var OUTPUT = "../data/stopwords-vietnamese.json"; // Output for EventServer-import-file.

// ===============================
// MAIN
// ===============================
var fs = require('fs');
var wget = require('wget');

var path = OUTPUT;

var wget = require('wget');
var options = {
    protocol: 'https',
    host: 'raw.githubusercontent.com',
    path: '/duyetdev/vietnamese-stopwords/master/vietname-stopwords.txt',
    method: 'GET'
};
var req = wget.request(options, function(res) {
    var content = '';
    if (res.statusCode === 200) {
        res.on('error', function(err) {
            console.log(err);
        });
        res.on('data', function(chunk) {
            content += chunk;
        });
        res.on('end', function() {
            fs.unlink(path, function() {
                var words = content.split('\n');
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
            });
        });
    } else {
        console.log('Server respond ' + res.statusCode);
    }
});

req.end();
req.on('error', function(err) {
    console.log(err);
});
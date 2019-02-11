var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {

    var params = querystring.parse(url.parse(req.url).query);

    res.writeHead(200, {"Content-Type": "text/plain"});

    if ('name' in params && 'last' in params) {
        res.write('Your name is ' + params['name'] + ' ' + params['last']);
    }
    else {
        res.write('You do have a first name and a last name, don\'t you?');
    }
    res.end();

});
server.listen(8080);

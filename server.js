/**
Created by Ilia Ivanov on 2016-03-16.
(c) Modular Coding Inc, 2016
https://modcoding.com


http://localhost:8080

*/
var mimeTypes = {
	'.js': 'text/javascript',
	'.htm': 'text/html',
	'.html': 'text/html',
	'.css': 'text/css',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.png': 'image/png',
	'.ico': 'image/ico'
};
var fs = require('fs');
var path = require('path');
var url = require("url");
//var express  = require('express');
//var app      = express();
//app.use('/favicon.ico', express.static('assets/img/favicon.ico'));
var http = require ( 'http');
var server = http.createServer().listen(8080);
server.on('request', function(request, response) {
	var pathname = url.parse(request.url) .pathname;
	console.log("> "+pathname);
	if (pathname == "/favicon.ico") {
			var img = fs.readFileSync('./makcms/images'+pathname);
			var extname = path.extname(pathname);
			response.writeHead(200, {'Content-Type': mimeTypes[extname]} );
			response.end(img, 'binary');
	}
	else {
		response .writeHead (200, { 'Content-Type' : 'text/html'});
		response.end('<h1>Welcome to MakCMS!</h1>');

	}
});



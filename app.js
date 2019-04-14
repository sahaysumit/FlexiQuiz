const express = require('express');
const domain = require('domain').create();
const http = require('http');
const path = require('path');
const fs = require('fs');
const jade = require('jade');

const app = express();

app.set('port', process.env.PORT || 3005);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get("/", (req, res)=>{
	res.render("index");
});

app.get("/download", (req, res)=>{
	let file = './download-file/downloadFile.txt';
	res.download(file);   	
});

domain.run(function() {
	// the asynchronous or synchronous code that we want to catch thrown errors on
	http.createServer(app).listen(app.get('port'), ()=>{
		console.log('Express server listening on port ' + app.get('port'));
	});
});

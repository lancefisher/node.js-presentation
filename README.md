# reveal.js

Outline

What is node.js
Why node.js
  evented i/o
  JavaScript is fun

Installing
  On Windows or Mac, use an installer
  On Linux, use your favorite package manager

npm

A web server
	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');

A chat server

express.js

As an executible
   chmod +x hello.js
   #!/usr/bin/env node




#Links
* [Installers for Mac and Windows (http://nodejs.org/#download)]
* [Installing node.js with a package manager (https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)]

#Credits
Presentation built with [reveal.js (https://github.com/hakimel/reveal.js)]
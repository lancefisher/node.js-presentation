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

socket.io

A chat server

express.js

Tips
  Don't block

Make your own scripts:
   chmod +x hello.js
   #!/usr/bin/env node

Async

debugging
  Use Chrome
  node-inspector



#Links
* [Installers for Mac and Windows (http://nodejs.org/#download)]
* [Installing node.js with a package manager (https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)]
* [Understanding the node.js event loop (http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)]
* [Node.js, Doctor’s Offices and Fast Food Restaurants – Understanding Event-driven Programming (http://code.danyork.com/2011/01/25/node-js-doctors-offices-and-fast-food-restaurants-understanding-event-driven-programming/)]
* [socket.io (http://socket.io/)]

#Credits
Presentation built with [reveal.js (https://github.com/hakimel/reveal.js)]
var square = require('./square2');

var side = 2;
square.area(side, function(err, result) {
	if (err) return console.log(err);

	return console.log('square of', side, 'is', result);
});


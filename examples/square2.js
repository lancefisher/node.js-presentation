exports.area = function (s, callback) {
  return callback(null, s * s);
};

exports.cubeRoot = function (s, callback) {
	if (s < 0) return new Error("We don't understand imaginary numbers.");

	var root = Math.pow(s, 1/3);
	return callback(null, root);
}

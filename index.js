var util = require('util');

const NAMES = [
	'EntityNotFoundException',
	'ValidationException',
	'IllegalArgumentException'
];

// const EXCEPTIONS = NAMES.reduce( {});

function extend() {
	const fn = function (message) {
		Error.call(this);
		Error.captureStackTrace(this, arguments.callee);
		this.message = message;
	};

	util.inherits(fn, Error);
	return fn;
}

module.exports = NAMES.reduce(function (map, name) {
	map[name] = extend();
	return map;
},{});

// module.exports = {
// 	EntityNotFoundException: extend(),
// 	ValidationException: extend(),
// 	IllegalArgumentException: extend()
// };
'use strict';
const { random } = require('lodash')
module.exports = (length, allowNumbers = true) => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' +
		(allowNumbers ? '0123456789' : '');
	let text = '';
	for (let i = 0; i < length; i++) {
		text += alphabet.charAt(random(alphabet.length - 1));
	}
	return text;
}

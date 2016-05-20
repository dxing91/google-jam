var fs = require('fs');

var inputDataString = fs.readFileSync('large.in').toString();
var inputData = inputDataString.split("\n");

var testCases = inputData.shift();
var inputs = inputData;
var results = [];

for (var n = 0; n < inputs.length; n++) {
	results.push("Case #" + (n+1) + ": " + pancakes(inputs[n]));
}

fs.writeFileSync('output.in', results.join("\n"));

function pancakes(S) {
	var counter = 0;
	var firstPancake;
	var flippedDirection;
	var flipNumber;
	while (S.indexOf('-') > -1) {
		firstPancake = S.charAt(0);
		if (firstPancake === '-') flippedDirection = '+';
		else if (firstPancake === '+') flippedDirection = '-';
		if (S.indexOf(flippedDirection) === -1) flipNumber = S.length;
		else flipNumber =  S.indexOf(flippedDirection);
		S = flippedDirection.repeat(flipNumber).concat(S.slice(flipNumber));
		counter++;
	}
	return counter;
}

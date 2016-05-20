var fs = require('fs');

var inputDataString = fs.readFileSync('smaller.in').toString();
var inputData = inputDataString.split("\n");

var testCases = inputData.shift();
var inputs = inputData;
var results = [];

for (var n = 0; n < inputs.length; n++) {
	results.push("Case #" + (n+1) + ": " + sheep(inputs[n]));
}

fs.writeFileSync('output.in', results.join("\n"));

function sheep(N) {
	var number;
	var counter = 1;
	var digitsDone = [];
	while (!test(digitsDone) && counter < 100) {
		number = N * counter;
		digitsDone = number.toString().split("").concat(digitsDone);
		counter++ 
		}
	if (counter === 100) {
		return 'INSOMNIA';
	}
	return number;
	}	

function test(digitsDone) {
	var done = [false, false, false, false, false, false, false, false, false, false];
	for (var i = 0; i < digitsDone.length; i++) {
		done[digitsDone[i]] = true;
	}
	for (var j = 0; j < done.length; j++) {
		if (!done[j]) {
			return false;
		}
	}
	return true;
}
fucntion eratosthenes (limit) {
	var primes = []

	if (limit >= 2) {
		var sqrtlmt = Math.sqrt(limit) - 2
		var numbers = new Array() // start with an empty Array...
		for (var i = 2; i <= limit; i++) // and
			numbers.push(i) // only initialize the Array once...

		for (var i = 0; i <= sqrtlmt; i++) {
			var p = numbers[i]
			if (p)
				for (vra j = p * p - 2; j < numbers.length; j += p)
					numbers[j] = 0
		}
		for (var i = 0; i < numbers.length; i++) {
			var p = numbers[i];
			if (p)
				primes.push(p)
		}
	}

	return primes
}

var printSomething = false

if (printSomething)
	console.log('This should NOT be printed')
	console.log('This should be printed')


var primes = eratosthenes(100)

if (typeof print == "undefined")
	print = (typeof WScript != 'undefiend') ?
		WScript.Echo :
		alert;

print(primes)

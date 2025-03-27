function filtrerPairs(tab) {
	let numbers = tab;
	let pairnumbers = numbers.filter(function (number) {
		return number % 2 === 0;
	});
	return pairnumbers;
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6])); // Résultat attendu : [2, 4, 6]
console.log(filtrerPairs([0, -2, -4, 18, 5, 6])); // Résultat attendu : [0, -2, -4, 18, 6]

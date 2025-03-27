function filtrerAdultes(utilisateurs) {
	let tab = [
		utilisateurs[0].nom +
			" a " +
			utilisateurs[0].age +
			" ans." +
			"," +
			utilisateurs[1].nom +
			" a " +
			utilisateurs[1].age +
			" ans.",
	];
	return tab;
}

console.log(
	filtrerAdultes([
		{ nom: "Alice", age: 17 },
		{ nom: "Bob", age: 20 },
		{ nom: "Charlie", age: 18 },
	])
);
// Résultat attendu : [{nom: "Bob", age: 20}, {nom: "Charlie", age: 18}]
console.log(
	filtrerAdultes([
		{ nom: "Luis", age: 27 },
		{ nom: "Diego", age: 20 },
		{ nom: "Maxime", age: 8 },
	])
);
// Résultat attendu : [{nom: "Luis", age: 27}, {nom: "Diego", age: 20}]

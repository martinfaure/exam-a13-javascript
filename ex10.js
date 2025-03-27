function longueursMots(mots) {
	let a = mots[0].length;
	let b = mots[1].length;
	let c = mots[2].length;
	let tab = [a, b, c];
	return tab;
}
console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]

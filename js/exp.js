var initCtn = function() {
	var ctn = {};

	ctn.images = ['Möhre_purple', 'Möhre_red', 'Möhre_green',
	'Möhre_natural', 'Möhre_blue'];

	var generateCombinations = function() {
		var combinations = [];

		for (var i = 0; i < ctn.images.length; i++) {
			combinations.push({
				image: ctn.images[i] + '.png',
				object: ctn.images[i].split('_')[0],
				colour: ctn.images[i].split('_')[1]
			});
		}
		
		return shuffleComb(combinations);		
	};

	// function that shuffles the items in a list
	var shuffleComb = function(comb) {
		var counter = comb.length;

		while (counter > 0) {
			let index = Math.floor(Math.random() * counter);
			counter--;

			let temp = comb[counter];
			comb[counter] = comb[index];
			comb[index] = temp;
		}

		return comb;
	};

	// trial data needed to generate the trial slide
	ctn.data = generateCombinations();

	// function that collects participant's response
	ctn.addResponse = function(trialIndex, response) {
		ctn.data[trialIndex].typicality = response;
	};

	// functions that converts the data into JSON
	ctn.getJSON = function() {
		return JSON.stringify({
			"results": ctn.data
		});
	};

	return ctn;
};
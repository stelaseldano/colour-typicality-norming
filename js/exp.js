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

	var generatePracticeTrial = function() {
		var comb = [];
		var trials = generateCombinations()

		for (var i = 0; i < 4; i++) {
			comb.push(trials[i]);
		}

		return comb;
	};

	// trial data needed to generate the trial slide
	ctn.data = generateCombinations();

	// 4 random practice trials
	ctn.practice = generatePracticeTrial();

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
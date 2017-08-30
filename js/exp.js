var initCtn = function() {
	var ctn = {};

	ctn.images = ['Möhre_purple', 'Möhre_red', 'Möhre_green', 'Möhre_natural', 'Möhre_blue',
	'Zuccini_red', 'Zuccini_brown', 'Zuccini_blue', 'Zuccini_yellow', 'Zuccini_natural',
	'Zitrone_red', 'Zitrone_blue', 'Zitrone_green', 'Zitrone_orange', 'Zitrone_natural',
	'Wäscheklammer_red', 'Wäscheklammer_blue', 'Wäscheklammer_grey', 'Wäscheklammer_black', 'Wäscheklammer_brown', 'Wäscheklammer_green', 'Wäscheklammer_orange', 'Wäscheklammer_purple', 'Wäscheklammer_yellow',
	'Walnuß_red', 'Walnuß_blue', 'Walnuß_green', 'Walnuß_yellow', 'Walnuß_natural',
	'Trauben_blue', 'Trauben_grey', 'Trauben_yellow', 'Trauben_orange', 'Trauben_natural',
	'Tomate_blue', 'Tomate_green', 'Tomate_yellow', 'Tomate_purple', 'Tomate_natural',
	'Sonnenbrille_red', 'Sonnenbrille_blue', 'Sonnenbrille_grey', 'Sonnenbrille_black', 'Sonnenbrille_brown', 'Sonnenbrille_green', 'Sonnenbrille_orange', 'Sonnenbrille_purple', 'Sonnenbrille_yellow',
	'Socken_red', 'Socken_blue', 'Socken_green', 'Socken_black', 'Socken_brown', 'Socken_grey', 'Socken_orange', 'Socken_purple', 'Socken_yellow',
	'Paprika_blue', 'Paprika_black', 'Paprika_brown', 'Paprika_green', 'Paprika_natural',
	'Mandarine_red', 'Mandarine_blue', 'Mandarine_green', 'Mandarine_purple', 'Mandarine_natural',
	'Kirsche_blue', 'Kirsche_green', 'Kirsche_purple', 'Kirsche_yellow', 'Kirsche_natural',
	'Kartoffeln_red', 'Kartoffeln_blue', 'Kartoffeln_green', 'Kartoffeln_orange', 'Kartoffeln_natural',
	'Gurke_red', 'Gurke_blue', 'Gurke_brown', 'Gurke_yellow', 'Gurke_natural',
	'Erdbeere_blue', 'Erdbeere_grey', 'Erdbeere_purple', 'Erdbeere_yellow', 'Erdbeere_natural',
	'Erbsen_red', 'Erbsen_blue', 'Erbsen_orange', 'Erbsen_yellow', 'Erbsen_natural',
	'Büroklammer_red', 'Büroklammer_blue', 'Büroklammer_grey', 'Büroklammer_black', 'Büroklammer_brown', 'Büroklammer_green', 'Büroklammer_orange','Büroklammer_purple', 'Büroklammer_yellow',
	'Bohnen_red', 'Bohnen_blue', 'Bohnen_orange', 'Bohnen_yellow', 'Bohnen_natural',
	'Birne_red', 'Birne_blue', 'Birne_orange', 'Birne_purple', 'Birne_natural',
	'Banane_red', 'Banane_blue', 'Banane_brown', 'Banane_green', 'Banane_natural',
	'Avokado_red', 'Avokado_blue', 'Avokado_purple', 'Avokado_yellow', 'Avokado_natural',
	'Aubergine_red', 'Aubergine_blue', 'Aubergine_green', 'Aubergine_yellow','Aubergine_natural',
	'Aprikose_red', 'Aprikose_blue', 'Aprikose_green', 'Aprikose_purple', 'Aprikose_natural',
	'Ananas_red', 'Ananas_blue', 'Ananas_green', 'Ananas_purple', 'Ananas_natural'];


	var generateCombinations = function() {
		var combinations = [];

		for (var i = 0; i < ctn.images.length; i++) {
			var object = ctn.images[i].split('_')[0];
			var colour = ctn.images[i].split('_')[1];

			if (object === 'Bohnen' ||
				object === 'Erbsen' ||
				object === 'Kartoffeln' ||
				object === 'Trauben' ||
				object === 'Socken') {
				combinations.push({
					image: ctn.images[i] + '.png',
					object: object,
					colour: colour,
					sentence: 'Wie typisch ist diese Farbe für ' + object + '?'
				});
			} else {
				combinations.push({
					image: ctn.images[i] + '.png',
					object: object,
					colour: colour,
					sentence: 'Wie typisch ist diese Farbe für eine ' + object + '?'
				});
			}
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
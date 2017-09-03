var initIntroductionView = function(sendData) {
	var view = {};

	view.name = 'intro';
	view.template = $('#intro-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('#start-exp-btn').on('click', function() {
		var ID = $('#prolificID').val().trim();

		// check if an ID is entered, if not, ask again
		if (ID === '') {
			alert('Please enter your prolific ID');
		} else {
			sendData({
				ID: ID
			});
			// show next slide only when ID has been entered
			exp.getNextView();
		}
	});

	return view;
};

var initInstructionsView = function() {
	var view = {};

	view.name = 'instructions';
	view.template = $('#instructions-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('#continue-btn').on('click', function() {
		exp.getNextView();
	});

	return view;
};

var initPracticeView = function(trialInfo, trialIndex) {
	var view = {};

	view.name = 'practice';
	view.template = $('#practice-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('.image').attr('src', 'images/' + trialInfo['image']);
	$('.question').text(trialInfo['sentence']);

	if (trialIndex === 0) {
		$('.practice-templ').removeClass('hidden');
	} else {
		setTimeout(function() {
			$('.practice-templ').removeClass('hidden');
		}, 1500);
	}

	$('#continue-btn').on('click', function() {
		exp.getNextView();
	});

	return view;
};

var initBeginExpView = function() {
	var view = {};

	view.name = 'beginExp';
	view.template = $('#begin-exp-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('#continue-btn').on('click', function() {
		exp.getNextView();
	});

	return view;
};

var initTrialView = function(trialInfo, trialIndex) {
	var view = {};

	view.name = 'trial';
	view.template = $('#trial-templ').html();
	view.response = [];

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('.image').attr('src', 'images/' + trialInfo['image']);
	$('.question').text(trialInfo['sentence']);

	if (trialIndex === 0) {
		$('.trial-templ').removeClass('hidden');
	} else {
		setTimeout(function() {
			$('.trial-templ').removeClass('hidden');
		}, 1500);
	}

	$('#continue-btn').on('click', function() {
		view.response.push($('#response').val());
		exp.getNextView();
	});

	return view;
};

var initSubmitResultsView = function() {
	var view = {};

	view.name = 'submitResults';
	view.template = $('#submit-results-templ').html();

	var rendered = Mustache.render(view.template, {
		results: exp.ctn.getJSON()
	});
	$('#main').html(rendered);

	$('form').on('submit', function(e) {
		var url = '';

		$.ajax({
			type: "POST",
			url: url,
			data: $('form').serialize(),
			success: function(data) {
				console.log('Submission successful!');
				console.log(data);
			},
			error: function(data) {
				console.log('An error occured');
				console.log(data);
			}
		});

		e.preventDefault();
	});

	$('#submit-results-btn').on('click', function(e) {
		$('form').addClass('hidden');
		$('.thanks').removeClass('hidden');
	});

	return view;
};
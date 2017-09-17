var initIntroductionView = function(sendData) {
	var view = {};

	view.name = 'intro';
	view.template = $('#intro-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('form').on('submit', function(e) {
		var ID = $('#prolificID').val().trim();

		sendData(ID);
		exp.getNextView();
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
	var sliderMoved = false;

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

	$('#response').bind('change', function() {
		sliderMoved = true;
	});

	$('#continue-btn').on('click', function() {
		if (sliderMoved === true) {
			exp.getNextView();
		} else {
			$('.helper-text').removeClass('hidden');
		}
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
	var sliderMoved = false;

	view.name = 'trial';
	view.template = $('#trial-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	// sets image and sentence for the slide
	$('.image').attr('src', 'images/' + trialInfo['image']);
	$('.question').text(trialInfo['sentence']);
	// fills the progress bar
	$('.progress-bar-fill').width(
		$('.progress-bar-body').width() / exp.ctn.data.length
		+ ($('.progress-bar-body').width() / exp.ctn.data.length) * trialIndex
	);

	// shows 1500 ms of blank screen before each slide (except the first)
	if (trialIndex === 0) {
		$('.trial-templ').removeClass('hidden');
	} else {
		setTimeout(function() {
			$('.trial-templ').removeClass('hidden');
		}, 1500);
	}

	// checks if the slider has been changed
	$('#response').bind('change', function() {
		sliderMoved = true;
	});

	$('#continue-btn').on('click', function() {
		// if the slider has been changed, records the value and shows next slide
		if (sliderMoved === true) {
			exp.ctn.addResponse(trialIndex, $('#response').val());
			exp.getNextView();
		} else {
			$('.helper-text').removeClass('hidden');
		}
	});

	return view;
};

var initSubmitResultsView = function() {
	var view = {};

	view.name = 'submitResults';
	view.template = $('#submit-results-templ').html();

	var rendered = Mustache.render(view.template, {
		results: exp.ctn.getJSON(),
		ID: exp.ctn.ID
	});
	$('#main').html(rendered);

	$('#form').on('submit', function(e) {
		var url = 'https://yat.website/colours_api/save';

		$.ajax({
			type: "POST",
			url: url,
			data: $('#form').serialize(),
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
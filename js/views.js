var initIntroductionView = function() {
	var view = {};

	view.name = 'intro';
	view.template = $('#intro-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('#start-exp-btn').on('click', function() {
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

var initTrialView = function(trialInfo) {
	var view = {};

	view.name = 'trial';
	view.template = $('#trial-templ').html();
	view.response = [];

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('.image').attr('src', 'images/' + trialInfo['image']);
	$('.question').text("Ist diese Farbe typisch für ein/e " + trialInfo['object'] + "?");

	$('#continue-btn').on('click', function() {
		view.response.push($('#response').val());
		exp.getNextView();
	});

	return view;
};

var initThanksView = function(data) {
	var view = {};

	view.name = 'thanks';
	view.template = $('#thanks-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	$('.temp').text(data);

	return view;
};
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

var initTrialView = function() {
	var view = {};

	view.name = 'trial';
	view.template = $('#trial-templ').html();

	var rendered = Mustache.render(view.template);
	$('#main').html(rendered);

	return view;
};
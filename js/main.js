$(document).ready(function(){
	exp.init();
});

var exp = {};

exp.getNextView = function() {
	if (this.view.name === 'intro') {
		this.view = initInstructionsView();
	} else if (this.view.name === 'instructions') {
		this.view = initTrialView();
	} else {
		console.log("No view for now");
	}
};

exp.init = function() {
	console.log('Experiment initialised!');
	this.view = initTrialView();
};
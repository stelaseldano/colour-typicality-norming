$(document).ready(function(){
	exp.init();
});

var exp = {};

/* view handler */
exp.getNextView = function() {
	if (this.view.name === 'intro') {
		this.view = initInstructionsView();
	} else if (this.view.name === 'instructions') {
		this.view = initPracticeView(this.ctn.practice[this.currentPractice], this.currentPractice);
		this.currentPractice++;
	} else if ((this.view.name === 'practice') && (this.currentPractice > 3)){
		this.view = initBeginExpView();
	} else if ((this.view.name === 'practice') && (this.currentPractice <= 3)) {
		this.view = initPracticeView(this.ctn.practice[this.currentPractice], this.currentPractice);
		this.currentPractice++;
	} else if (this.view.name === 'beginExp') {
		this.view.name === 'trial';
		this.view = initTrialView(this.ctn.data[this.currentTrial], this.currentTrial);
		this.ctn.addResponse(this.currentTrial, this.view.response);
		this.currentTrial++;
	} else if (this.currentTrial < this.ctn.data.length) {
		this.view = initTrialView(this.ctn.data[this.currentTrial], this.currentTrial);
		this.ctn.addResponse(this.currentTrial, this.view.response);
		this.currentTrial++;
	} else {
		this.view = initSubmitResultsView();
	}
};

/* CTN - colour typicallity norming */
exp.init = function() {
	this.ctn = initCtn();
	this.currentTrial = 134;
	this.currentPractice = 3;
	this.view = initIntroductionView(this.ctn.addProlificID);
};
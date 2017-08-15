$(document).ready(function(){
	exp.init();
});

var exp = {};

/* view handler */
exp.getNextView = function() {
	if (this.view.name === 'intro') {
		this.view = initInstructionsView();
	} else if (this.view.name === 'instructions') {
		this.view.name === 'trial';
		this.view = initTrialView(this.ctn.data[this.currentTrial], this.currentTrial);
		this.ctn.addResponse(this.currentTrial, this.view.response);
		this.currentTrial++;
	} else if (this.currentTrial < this.ctn.data.length){
		this.view = initTrialView(this.ctn.data[this.currentTrial], this.currentTrial);
		this.ctn.addResponse(this.currentTrial, this.view.response);
		this.currentTrial++;
	} else {
		this.view.name = 'thanks';
		this.view = initThanksView(this.ctn.getJSON());
	}
};

/* CTN - colour typicallity norming */
exp.init = function() {
	this.ctn = initCtn();
	this.currentTrial = 0;
	this.view = initIntroductionView();
};
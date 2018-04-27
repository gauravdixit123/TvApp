head.js(

	/*Default Libraries*/
	{Jquery: "app/javascripts/jquery.js"},
	{State_machine: "app/javascripts/state_machine.js"},
	
    

	/*Common functions*/
	{Common: "app/common.js"},


	function(){

		/*Start Scene Manager after all scripts are loaded*/
		console.log("ALL LOADED");

		"use strict";

		widgetAPI.sendReadyEvent();

		SceneManager.start();

});

/*
head.ready("jQuery", function(){
	console.log("JAVASCRIPT LOADED: jQuery library");
});
*/

define('userflxSampleRowTemplateController',{
    //Type your controller code here 
});
define('flxSampleRowTemplateControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('flxSampleRowTemplateController',["userflxSampleRowTemplateController","flxSampleRowTemplateControllerActions"],
		function(){
			var controller = require("userflxSampleRowTemplateController");
			var controllerActions = ["flxSampleRowTemplateControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

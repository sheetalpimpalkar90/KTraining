define('userflxSectionHeaderTemplateController',{
    //Type your controller code here 
});
define('flxSectionHeaderTemplateControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('flxSectionHeaderTemplateController',["userflxSectionHeaderTemplateController","flxSectionHeaderTemplateControllerActions"],
		function(){
			var controller = require("userflxSectionHeaderTemplateController");
			var controllerActions = ["flxSectionHeaderTemplateControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

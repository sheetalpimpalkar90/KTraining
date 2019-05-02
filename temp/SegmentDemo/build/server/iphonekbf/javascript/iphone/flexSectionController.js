define('userflexSectionController',{
    //Type your controller code here 
});
define('flexSectionControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('flexSectionController',["userflexSectionController","flexSectionControllerActions"],
		function(){
			var controller = require("userflexSectionController");
			var controllerActions = ["flexSectionControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

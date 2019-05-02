define('userflexRowItemController',{
    //Type your controller code here 
});
define('flexRowItemControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('flexRowItemController',["userflexRowItemController","flexRowItemControllerActions"],
		function(){
			var controller = require("userflexRowItemController");
			var controllerActions = ["flexRowItemControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

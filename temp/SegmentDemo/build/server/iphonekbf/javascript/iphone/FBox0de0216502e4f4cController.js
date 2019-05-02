define('userFBox0de0216502e4f4cController',{
    //Type your controller code here 
});
define('FBox0de0216502e4f4cControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('FBox0de0216502e4f4cController',["userFBox0de0216502e4f4cController","FBox0de0216502e4f4cControllerActions"],
		function(){
			var controller = require("userFBox0de0216502e4f4cController");
			var controllerActions = ["FBox0de0216502e4f4cControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

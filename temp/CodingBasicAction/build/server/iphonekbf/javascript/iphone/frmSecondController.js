define('userfrmSecondController',{
    //Type your controller code here 
});
define('frmSecondControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('frmSecondController',["userfrmSecondController","frmSecondControllerActions"],
		function(){
			var controller = require("userfrmSecondController");
			var controllerActions = ["frmSecondControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

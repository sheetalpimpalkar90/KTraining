define('userFBox0db129082375d47Controller',{
    //Type your controller code here 
});
define('FBox0db129082375d47ControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnDelete **/
    AS_Button_hed78efc3c2b49319b9b5da5e1184453: function AS_Button_hed78efc3c2b49319b9b5da5e1184453(eventobject, context) {
        var self = this;
        deleteRecordwithAnimation()
    }
});



define('FBox0db129082375d47Controller',["userFBox0db129082375d47Controller","FBox0db129082375d47ControllerActions"],
		function(){
			var controller = require("userFBox0db129082375d47Controller");
			var controllerActions = ["FBox0db129082375d47ControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

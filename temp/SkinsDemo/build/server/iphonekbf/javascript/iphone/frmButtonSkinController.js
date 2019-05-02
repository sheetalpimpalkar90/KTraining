define('userfrmButtonSkinController',{
    //Type your controller code here 
    changeSkin: function() {
        if (this.view.btnColor.skin == "skinGrey") {
            this.view.btnColor.skin = "skinRed";
        } else {
            kony.application.exit();
        }
    }
});
define('frmButtonSkinControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnColor **/
    AS_Button_ieeedcc1ccf44f0eb5366df92a30b5c6: function AS_Button_ieeedcc1ccf44f0eb5366df92a30b5c6(eventobject) {
        var self = this;
        return self.changeSkin.call(this);
    }
});



define('frmButtonSkinController',["userfrmButtonSkinController","frmButtonSkinControllerActions"],
		function(){
			var controller = require("userfrmButtonSkinController");
			var controllerActions = ["frmButtonSkinControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

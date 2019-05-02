define('userfrmFirstController',{
    //Type your controller code here 
    showControllerAlert: function() {
        alert("Controller Alert");
    },
    showControllerParam: function(obj) {
        alert("Text is " + obj.text);
    }
});
define('frmFirstControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for brnShowAlert **/
    AS_Button_d48a57fc0f2949d981a85ce752bb91e3: function AS_Button_d48a57fc0f2949d981a85ce752bb91e3(eventobject) {
        var self = this;
        return self.showControllerAlert.call(this);
    },
    /** onClick defined for btnCommonAlert **/
    AS_Button_h0540aff88ac49f2962f92bc1baff413: function AS_Button_h0540aff88ac49f2962f92bc1baff413(eventobject) {
        var self = this;
        return showGlobalAlert.call(this);
    },
    /** onClick defined for btnParameter **/
    AS_Button_e85c9ad03ca046008a93f25487b25f9d: function AS_Button_e85c9ad03ca046008a93f25487b25f9d(eventobject) {
        var self = this;
        return self.showControllerParam.call(this, eventobject);
    }
});



define('frmFirstController',["userfrmFirstController","frmFirstControllerActions"],
		function(){
			var controller = require("userfrmFirstController");
			var controllerActions = ["frmFirstControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

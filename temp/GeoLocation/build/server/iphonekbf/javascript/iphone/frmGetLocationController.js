define('userfrmGetLocationController',{
    //Type your controller code here 
    getCurrentLocation: function() {
        kony.location.getCurrentPosition(this.gpsSuccess, this.gpsFailure);
    },
    gpsSuccess: function(location) {
        this.view.lblLocationStatus.text = JSON.stringify(location);
    },
    gpsFailure: function(error) {
        this.view.lblLocationStatus.text = JSON.stringify(error);
    }
});
define('frmGetLocationControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnGetLoc **/
    AS_Button_ee88bfc931454c218cb0d52fed00fb60: function AS_Button_ee88bfc931454c218cb0d52fed00fb60(eventobject) {
        var self = this;
        return self.getCurrentLocation.call(this);
    }
});



define('frmGetLocationController',["userfrmGetLocationController","frmGetLocationControllerActions"],
		function(){
			var controller = require("userfrmGetLocationController");
			var controllerActions = ["frmGetLocationControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

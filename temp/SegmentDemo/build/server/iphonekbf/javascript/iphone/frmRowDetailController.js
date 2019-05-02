define('userfrmRowDetailController',{
    //Type your controller code here 
    onNavigate: function(obj) {
        this.view.lblProdName.text = obj.lblProductName;
        this.view.lblProdPrice.text = obj.lblPrice;
    }
});
define('frmRowDetailControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('frmRowDetailController',["userfrmRowDetailController","frmRowDetailControllerActions"],
		function(){
			var controller = require("userfrmRowDetailController");
			var controllerActions = ["frmRowDetailControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

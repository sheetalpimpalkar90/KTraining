define('userfrmAController',{
    //Type your controller code here 
});
define('frmAControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnShowB **/
    AS_Button_a1de2a7c98cb4e6b9d67bcdff5307ccf: function AS_Button_a1de2a7c98cb4e6b9d67bcdff5307ccf(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmB");
        ntf.navigate();
    },
    /** init defined for frmA **/
    AS_Form_cb14c83677ae40aab11ef08af70ed49b: function AS_Form_cb14c83677ae40aab11ef08af70ed49b(eventobject) {
        var self = this;
        kony.print("###### In form A: init");
    },
    /** preShow defined for frmA **/
    AS_Form_b12cb149e7b54862a226aab59f346b37: function AS_Form_b12cb149e7b54862a226aab59f346b37(eventobject) {
        var self = this;
        kony.print("###### In form A: preShow");
    },
    /** postShow defined for frmA **/
    AS_Form_e8f2d6a85c5a42319770e07c6871e7d9: function AS_Form_e8f2d6a85c5a42319770e07c6871e7d9(eventobject) {
        var self = this;
        kony.print("###### In form A: postShow");
    },
    /** onHide defined for frmA **/
    AS_Form_ff634b9b54d04b318dac881a0107e358: function AS_Form_ff634b9b54d04b318dac881a0107e358(eventobject) {
        var self = this;
        kony.print("###### In form A: onHide");
    },
    /** onDestroy defined for frmA **/
    AS_Form_dd960617196c47b6bce7a5885a6afb5b: function AS_Form_dd960617196c47b6bce7a5885a6afb5b(eventobject) {
        var self = this;
        kony.print("###### In form A: onDestroy");
    }
});



define('frmAController',["userfrmAController","frmAControllerActions"],
		function(){
			var controller = require("userfrmAController");
			var controllerActions = ["frmAControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

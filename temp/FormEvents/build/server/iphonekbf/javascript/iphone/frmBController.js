define('userfrmBController',{
    //Type your controller code here 
});
define('frmBControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnShowA **/
    AS_Button_db0bb09966ea4f9f969206a129a9a24c: function AS_Button_db0bb09966ea4f9f969206a129a9a24c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmA");
        ntf.navigate();
    },
    /** onClick defined for btnDestroyA **/
    AS_Button_e9a885573852463e97511c1c6488ceed: function AS_Button_e9a885573852463e97511c1c6488ceed(eventobject) {
        var self = this;
        kony.application.destroyForm("frmA");
    },
    /** init defined for frmB **/
    AS_Form_e2881b5af5584294b6b53270a92df4a8: function AS_Form_e2881b5af5584294b6b53270a92df4a8(eventobject) {
        var self = this;
        kony.print("###### In form B: init");
    },
    /** preShow defined for frmB **/
    AS_Form_c152316fc0c4413293265ca14a8bc3d9: function AS_Form_c152316fc0c4413293265ca14a8bc3d9(eventobject) {
        var self = this;
        kony.print("###### In form B: preShow");
    },
    /** postShow defined for frmB **/
    AS_Form_a3e4e07eeed6428d8d12097f8dfb103a: function AS_Form_a3e4e07eeed6428d8d12097f8dfb103a(eventobject) {
        var self = this;
        kony.print("###### In form B: postShow");
    },
    /** onHide defined for frmB **/
    AS_Form_cac49b2a44a84547bea5d083d95788f5: function AS_Form_cac49b2a44a84547bea5d083d95788f5(eventobject) {
        var self = this;
        kony.print("###### In form B: onHide");
    },
    /** onDestroy defined for frmB **/
    AS_Form_gea864b189654d218a41474a5abc1826: function AS_Form_gea864b189654d218a41474a5abc1826(eventobject) {
        var self = this;
        kony.print("###### In form B: onDestroy");
    }
});



define('frmBController',["userfrmBController","frmBControllerActions"],
		function(){
			var controller = require("userfrmBController");
			var controllerActions = ["frmBControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

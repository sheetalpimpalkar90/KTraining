define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnTest **/
    AS_Button_h635e255e0aa4b49ba3b51d064a66011: function AS_Button_h635e255e0aa4b49ba3b51d064a66011(eventobject) {
        var self = this;
    },
    /** onClick defined for btnChangeText **/
    AS_Button_bc7bee8ca79d4a8ab2226feb3877f4df: function AS_Button_bc7bee8ca79d4a8ab2226feb3877f4df(eventobject) {
        var self = this;
        self.view.btnTest.text = "Modified";
    },
    /** onClick defined for btnMakeInvisible **/
    AS_Button_be79bb5e8b3145809ccad492145e858f: function AS_Button_be79bb5e8b3145809ccad492145e858f(eventobject) {
        var self = this;
        self.view.btnTest.isVisible = false;
    },
    /** onClick defined for btnChangeSkin **/
    AS_Button_ica67defcfbd4385acfeb85e08a30c95: function AS_Button_ica67defcfbd4385acfeb85e08a30c95(eventobject) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.btnTest.skin = "skinDemo";
            }, null);
        } else {
            (function() {
                self.view.btnTest.skin = "skinDemo";
            })();
        }
    },
    /** onClick defined for btnShowAlert **/
    AS_Button_f7b3bc72c1ce4fdba545dfcd08a84724: function AS_Button_f7b3bc72c1ce4fdba545dfcd08a84724(eventobject) {
        var self = this;

        function SHOW_ALERT__c86384f28ef94ed2964aa979ed81c621_True() {
            var ntf = new kony.mvc.Navigation("frmSecond");
            ntf.navigate();
        }
        function SHOW_ALERT__c86384f28ef94ed2964aa979ed81c621_False() {
            kony.application.exit();
        }
        function SHOW_ALERT__c86384f28ef94ed2964aa979ed81c621_Callback(response) {
            if (response === true) {
                SHOW_ALERT__c86384f28ef94ed2964aa979ed81c621_True();
            } else {
                SHOW_ALERT__c86384f28ef94ed2964aa979ed81c621_False();
            }
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "Demo title",
            "yesLabel": "Yes",
            "noLabel": "No",
            "message": "Welcome " + gbUserName + " Would you like to proceed?",
            "alertHandler": SHOW_ALERT__c86384f28ef94ed2964aa979ed81c621_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    },
    /** onClick defined for btnOpenUrl **/
    AS_Button_dc1a7849d69c43988648d7ded1d1b434: function AS_Button_dc1a7849d69c43988648d7ded1d1b434(eventobject) {
        var self = this;
        kony.application.openURL('http://www.google.com');
    },
    /** onClick defined for btnMakeVisible **/
    AS_Button_h78acc6123894c08a0ecfc0d9e0083ca: function AS_Button_h78acc6123894c08a0ecfc0d9e0083ca(eventobject) {
        var self = this;
        self.view.btnTest.isVisible = true;
    }
});
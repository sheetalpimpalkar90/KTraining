define("frmA", function() {
    return function(controller) {
        function addWidgetsfrmA() {
            this.setDefaultUnit(kony.flex.DP);
            var btnShowB = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnShowB",
                "isVisible": true,
                "left": "27dp",
                "onClick": controller.AS_Button_a1de2a7c98cb4e6b9d67bcdff5307ccf,
                "skin": "defBtnNormal",
                "text": "Show Form B",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            this.add(btnShowB);
        };
        return [{
            "addWidgets": addWidgetsfrmA,
            "enabledForIdleTimeout": false,
            "id": "frmA",
            "init": controller.AS_Form_cb14c83677ae40aab11ef08af70ed49b,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "onDestroy": controller.AS_Form_dd960617196c47b6bce7a5885a6afb5b,
            "onHide": controller.AS_Form_ff634b9b54d04b318dac881a0107e358,
            "postShow": controller.AS_Form_e8f2d6a85c5a42319770e07c6871e7d9,
            "preShow": function(eventobject) {
                controller.AS_Form_b12cb149e7b54862a226aab59f346b37(eventobject);
            },
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});
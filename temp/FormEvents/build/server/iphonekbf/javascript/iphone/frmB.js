define("frmB", function() {
    return function(controller) {
        function addWidgetsfrmB() {
            this.setDefaultUnit(kony.flex.DP);
            var btnShowA = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnShowA",
                "isVisible": true,
                "left": "31dp",
                "onClick": controller.AS_Button_db0bb09966ea4f9f969206a129a9a24c,
                "skin": "defBtnNormal",
                "text": "Show form A",
                "top": "15dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnDestroyA = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnDestroyA",
                "isVisible": true,
                "left": "26dp",
                "onClick": controller.AS_Button_e9a885573852463e97511c1c6488ceed,
                "skin": "defBtnNormal",
                "text": "Destroy form A",
                "top": "89dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            this.add(btnShowA, btnDestroyA);
        };
        return [{
            "addWidgets": addWidgetsfrmB,
            "enabledForIdleTimeout": false,
            "id": "frmB",
            "init": controller.AS_Form_e2881b5af5584294b6b53270a92df4a8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "onDestroy": controller.AS_Form_gea864b189654d218a41474a5abc1826,
            "onHide": controller.AS_Form_cac49b2a44a84547bea5d083d95788f5,
            "postShow": controller.AS_Form_a3e4e07eeed6428d8d12097f8dfb103a,
            "preShow": function(eventobject) {
                controller.AS_Form_c152316fc0c4413293265ca14a8bc3d9(eventobject);
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
define("frmFirst", function() {
    return function(controller) {
        function addWidgetsfrmFirst() {
            this.setDefaultUnit(kony.flex.DP);
            var brnShowAlert = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "brnShowAlert",
                "isVisible": true,
                "left": "40dp",
                "onClick": controller.AS_Button_d48a57fc0f2949d981a85ce752bb91e3,
                "skin": "defBtnNormal",
                "text": "Show Alert",
                "top": "92dp",
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
            var btnCommonAlert = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnCommonAlert",
                "isVisible": true,
                "left": "38dp",
                "onClick": controller.AS_Button_h0540aff88ac49f2962f92bc1baff413,
                "skin": "defBtnNormal",
                "text": "Common Alert",
                "top": "176dp",
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
            var btnParameter = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnParameter",
                "isVisible": true,
                "left": "35dp",
                "onClick": controller.AS_Button_e85c9ad03ca046008a93f25487b25f9d,
                "skin": "defBtnNormal",
                "text": "Show Parameter",
                "top": "261dp",
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
            this.add(brnShowAlert, btnCommonAlert, btnParameter);
        };
        return [{
            "addWidgets": addWidgetsfrmFirst,
            "enabledForIdleTimeout": false,
            "id": "frmFirst",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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
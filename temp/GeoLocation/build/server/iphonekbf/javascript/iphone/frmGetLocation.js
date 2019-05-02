define("frmGetLocation", function() {
    return function(controller) {
        function addWidgetsfrmGetLocation() {
            this.setDefaultUnit(kony.flex.DP);
            var btnGetLoc = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnGetLoc",
                "isVisible": true,
                "left": "39dp",
                "onClick": controller.AS_Button_ee88bfc931454c218cb0d52fed00fb60,
                "skin": "defBtnNormal",
                "text": "Get Location",
                "top": "30dp",
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
            var lblLocationStatus = new kony.ui.Label({
                "id": "lblLocationStatus",
                "isVisible": true,
                "left": "20dp",
                "skin": "CopydefLabel0cec2df5a0ff242",
                "text": "Location",
                "textStyle": {},
                "top": "113dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            this.add(btnGetLoc, lblLocationStatus);
        };
        return [{
            "addWidgets": addWidgetsfrmGetLocation,
            "enabledForIdleTimeout": false,
            "id": "frmGetLocation",
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
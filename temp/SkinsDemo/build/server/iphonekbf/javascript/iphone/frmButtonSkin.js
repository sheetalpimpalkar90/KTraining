define("frmButtonSkin", function() {
    return function(controller) {
        function addWidgetsfrmButtonSkin() {
            this.setDefaultUnit(kony.flex.DP);
            var btnColor = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnColor",
                "isVisible": true,
                "left": "40dp",
                "onClick": controller.AS_Button_ieeedcc1ccf44f0eb5366df92a30b5c6,
                "skin": "skinGrey",
                "text": "Change Skin",
                "top": "119dp",
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
            this.add(btnColor);
        };
        return [{
            "addWidgets": addWidgetsfrmButtonSkin,
            "enabledForIdleTimeout": false,
            "id": "frmButtonSkin",
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
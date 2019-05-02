define("frmRowDetail", function() {
    return function(controller) {
        function addWidgetsfrmRowDetail() {
            this.setDefaultUnit(kony.flex.DP);
            var lblProdName = new kony.ui.Label({
                "id": "lblProdName",
                "isVisible": true,
                "left": "35dp",
                "skin": "defLabel",
                "text": "Label",
                "textStyle": {},
                "top": "23dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblProdPrice = new kony.ui.Label({
                "id": "lblProdPrice",
                "isVisible": true,
                "left": "33dp",
                "skin": "defLabel",
                "text": "Label",
                "textStyle": {},
                "top": "69dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            this.add(lblProdName, lblProdPrice);
        };
        return [{
            "addWidgets": addWidgetsfrmRowDetail,
            "enabledForIdleTimeout": false,
            "id": "frmRowDetail",
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
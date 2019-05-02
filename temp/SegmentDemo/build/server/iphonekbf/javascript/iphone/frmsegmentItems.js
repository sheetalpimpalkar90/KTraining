define("frmsegmentItems", function() {
    return function(controller) {
        function addWidgetsfrmsegmentItems() {
            this.setDefaultUnit(kony.flex.DP);
            kony.mvc.registry.add('FBox0de0216502e4f4c', 'FBox0de0216502e4f4c', 'FBox0de0216502e4f4cController');
            var segItems = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.05%",
                "data": [{}, {}, {}, {}, {}, {}, {}, {}, {}],
                "groupCells": false,
                "height": "74.59%",
                "id": "segItems",
                "isVisible": true,
                "left": "10dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_e8b13ee6ce7443fca6db18f172d3e72d,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FBox0de0216502e4f4c",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "133dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {},
                "width": "90%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_ROW_SELECT,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var btnRowTemp = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnRowTemp",
                "isVisible": true,
                "left": "10dp",
                "onClick": controller.AS_Button_cb48790aa52e4b5cb18385453db5c52e,
                "skin": "CopydefBtnNormal0g1cd52fa8ee744",
                "text": "Row Template",
                "top": "21dp",
                "width": "173dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnSecTemp = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnSecTemp",
                "isVisible": true,
                "left": "195dp",
                "skin": "CopydefBtnNormal0aedf6a8c16224e",
                "text": "Section Template",
                "top": "19dp",
                "width": "161dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            this.add(segItems, btnRowTemp, btnSecTemp);
        };
        return [{
            "addWidgets": addWidgetsfrmsegmentItems,
            "enabledForIdleTimeout": false,
            "id": "frmsegmentItems",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a8bbad5534ac4fafa66b89e29423cbc4,
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
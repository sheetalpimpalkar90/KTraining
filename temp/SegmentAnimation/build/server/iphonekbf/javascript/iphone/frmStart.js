define("frmStart", function() {
    return function(controller) {
        function addWidgetsfrmStart() {
            this.setDefaultUnit(kony.flex.PERCENTAGE);
            var flxAnimationOptions = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "8%",
                "id": "flxAnimationOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAnimationOptions.setDefaultUnit(kony.flex.DP);
            var btnMove = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnMove",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_68a5ac27529646d6bea90ccf4410b3f6,
                "skin": "CopyslButtonGlossBlue0a9e071ccae3a43",
                "text": "Translate",
                "top": "0%",
                "width": "32%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnScale = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnScale",
                "isVisible": true,
                "left": "3%",
                "onClick": controller.AS_Button_116b300ebe2840a88c590fbbd8d76cd8,
                "skin": "CopyslButtonGlossBlue0a9e071ccae3a43",
                "text": "Scale",
                "top": "0%",
                "width": "32%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnRotate = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "slButtonGlossRed",
                "height": "100%",
                "id": "btnRotate",
                "isVisible": true,
                "left": "3%",
                "onClick": controller.AS_Button_4aba58ec64214c88870c5124cdf28cc0,
                "skin": "CopyslButtonGlossBlue0a9e071ccae3a43",
                "text": "Rotate",
                "top": "0%",
                "width": "32%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxAnimationOptions.add(btnMove, btnScale, btnRotate);
            kony.mvc.registry.add('FBox0db129082375d47', 'FBox0db129082375d47', 'FBox0db129082375d47Controller');
            var segCars = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "data": [{
                    "btnDelete": "Button",
                    "imgCar": "imagedrag.png",
                    "lblCarBrand": "Label"
                }],
                "groupCells": false,
                "height": "90%",
                "id": "segCars",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_5aefbb9fae4341e48cd483682b9d6fad,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FBox0db129082375d47",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "64646400",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "1%",
                "viewConfig": {},
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnDelete": "btnDelete",
                    "flxCarsRow": "flxCarsRow",
                    "imgCar": "imgCar",
                    "lblCarBrand": "lblCarBrand"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "searchCriteria": constants.SEGUI_SEARCH_CRITERIA_STARTSWITH,
                "showProgressIndicator": true
            });
            this.add(flxAnimationOptions, segCars);
        };
        return [{
            "addWidgets": addWidgetsfrmStart,
            "allowHorizontalBounce": true,
            "allowVerticalBounce": true,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": false,
            "horizontalScrollIndicator": true,
            "id": "frmStart",
            "init": controller.AS_Form_0ecf562dfb2541ea9029935b901f0bea,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "pagingEnabled": false,
            "skin": "CopyslForm",
            "verticalScrollIndicator": true
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": true,
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
            "inTransitionConfig": {
                "transitionDirection": "none",
                "transitionEffect": "none"
            },
            "maxZoomScale": 1,
            "minZoomScale": 1,
            "needsIndicatorDuringPostShow": false,
            "outTransitionConfig": {
                "transitionDirection": "none",
                "transitionEffect": "none"
            },
            "retainScrollPosition": true,
            "titleBar": false,
            "titleBarSkin": "CopyslTitleBar",
            "zoomScale": 1
        }]
    }
});
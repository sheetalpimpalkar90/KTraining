define("FBox0db129082375d47", function() {
    return function(controller) {
        FBox0db129082375d47 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25%",
            "id": "FBox0db129082375d47",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "width": "100%"
        }, {
            "containerWeight": 100
        }, {});
        FBox0db129082375d47.setDefaultUnit(kony.flex.DP);
        var flxCarsRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "CopyslFbox045394fcc6b4b4b",
            "height": "100%",
            "id": "flxCarsRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox045394fcc6b4b4b",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "containerWeight": 100
        }, {});
        flxCarsRow.setDefaultUnit(kony.flex.DP);
        var imgCar = new kony.ui.Image2({
            "centerY": "50%",
            "height": "75%",
            "id": "imgCar",
            "isVisible": true,
            "left": "12%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "40%",
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "margin": [0, 0, 0, 0],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
        });
        var lblCarBrand = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCarBrand",
            "isVisible": true,
            "left": "65%",
            "skin": "CopyslLabel094761f3b02e744",
            "text": "Label",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "pasteboardType": constants.PASTE_BOARD_TYPE_SYSTEM_LEVEL,
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var btnDelete = new kony.ui.Button({
            "centerY": "60%",
            "focusSkin": "slButtonGlossRed",
            "height": "30%",
            "id": "btnDelete",
            "isVisible": true,
            "left": "100%",
            "onClick": controller.AS_Button_hed78efc3c2b49319b9b5da5e1184453,
            "skin": "CopyslButtonGlossBlue0fb988fda16ea45",
            "text": "Button",
            "width": "30%",
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "hExpand": true,
            "margin": [6, 6, 6, 6],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "showProgressIndicator": true
        });
        flxCarsRow.add(imgCar, lblCarBrand, btnDelete);
        FBox0db129082375d47.add(flxCarsRow);
        return FBox0db129082375d47;
    }
})
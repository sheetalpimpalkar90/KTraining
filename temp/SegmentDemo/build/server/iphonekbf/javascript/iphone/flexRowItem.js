define("flexRowItem", function() {
    return function(controller) {
        var flexRowItem = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flexRowItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexRowItem.setDefaultUnit(kony.flex.DP);
        var imgProduct = new kony.ui.Image2({
            "height": "74dp",
            "id": "imgProduct",
            "isVisible": true,
            "left": "13dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "22dp",
            "width": "70dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblProductName = new kony.ui.Label({
            "id": "lblProductName",
            "isVisible": true,
            "left": "104dp",
            "skin": "CopydefLabel0g3764a91331b4e",
            "text": "Label",
            "textStyle": {},
            "top": "19dp",
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
        var lblPrice = new kony.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "left": "104dp",
            "skin": "CopydefLabel0b3eb6f20281949",
            "text": "Label",
            "textStyle": {},
            "top": "47dp",
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
        var imgRating = new kony.ui.Image2({
            "height": "33dp",
            "id": "imgRating",
            "isVisible": true,
            "left": "104dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "72dp",
            "width": "73dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexRowItem.add(imgProduct, lblProductName, lblPrice, imgRating);
        return flexRowItem;
    }
})
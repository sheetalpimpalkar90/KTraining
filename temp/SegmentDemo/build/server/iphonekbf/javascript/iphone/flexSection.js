define("flexSection", function() {
    return function(controller) {
        var flexSection = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexSection",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexSection.setDefaultUnit(kony.flex.DP);
        var lblSection = new kony.ui.Label({
            "id": "lblSection",
            "isVisible": true,
            "left": "20dp",
            "skin": "CopydefLabel0e6272ffe3ae54c",
            "text": "Label",
            "textStyle": {},
            "top": "10dp",
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
        flexSection.add(lblSection);
        return flexSection;
    }
})
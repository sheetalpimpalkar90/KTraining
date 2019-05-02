define({
    appInit: function(params) {
        skinsInit();
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("flexRowItem", "flexRowItem", "flexRowItemController");
        kony.mvc.registry.add("flexSection", "flexSection", "flexSectionController");
        kony.mvc.registry.add("frmRowDetail", "frmRowDetail", "frmRowDetailController");
        kony.mvc.registry.add("frmsegmentItems", "frmsegmentItems", "frmsegmentItemsController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmsegmentItems").navigate();
    }
});
define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});
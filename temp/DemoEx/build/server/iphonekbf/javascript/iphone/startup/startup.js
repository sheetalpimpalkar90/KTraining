//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "DemoEx",
    appName: "DemoEx",
    appVersion: "1.0.0",
    isDebug: true,
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: applicationController.postAppInitCallBack,
        showstartupform: function() {
            new kony.mvc.Navigation("Form1").navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;
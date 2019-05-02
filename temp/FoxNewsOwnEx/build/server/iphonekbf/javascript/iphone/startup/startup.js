//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "FoxNewsOwnEx",
    appName: "FoxNewsOwnEx",
    appVersion: "1.0.0",
    isturlbase: "http://10.10.37.60:9839/services",
    isDebug: true,
    isMFApp: true,
    appKey: "8da68b813896e1376bd28a2373ae5402",
    appSecret: "1a5b85c8aac43628dd29248a173fac00",
    serviceUrl: "http://10.10.37.60:9839/authService/100000002/appconfig",
    svcDoc: {
        "identity_meta": {},
        "app_version": "1.0",
        "baseId": "f8a2646e-df5e-4fcd-aaab-32ebe30e70d7",
        "app_default_version": "1.0",
        "login": [{
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "http://10.10.37.60:9839/authService/100000002"
        }],
        "services_meta": {
            "NewXmlService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://10.10.37.60:9839/services/NewXmlService"
            },
            "foxNewsServiceBySheetal": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://10.10.37.60:9839/services/foxNewsServiceBySheetal"
            }
        },
        "selflink": "http://10.10.37.60:9839/authService/100000002/appconfig",
        "integsvc": {
            "NewXmlService": "http://10.10.37.60:9839/services/NewXmlService",
            "foxNewsServiceBySheetal": "http://10.10.37.60:9839/services/foxNewsServiceBySheetal"
        },
        "service_doc_etag": "0000016A77885AD0",
        "appId": "b6683eb5-d195-4d68-ace7-916cbb78575c",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "FoxNewsBySheetal",
        "reportingsvc": {
            "session": "http://10.10.37.60:9839/services/IST",
            "custom": "http://10.10.37.60:9839/services/CMS"
        }
    },
    runtimeAppVersion: "1.0",
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
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;
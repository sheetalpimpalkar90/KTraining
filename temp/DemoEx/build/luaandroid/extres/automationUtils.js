getFormController = function (formFriendlyName) {
    var tmpController = null;
    var formID = formFriendlyName;
    var tmpFormName = kony.mvc.registry.get(formID);
    if (null != tmpFormName) {
        formID = tmpFormName
    }
    if (formID in _kony.mvc.viewName2viewId) {
        formID = _kony.mvc.viewName2viewId[formID]
    }
    if (null != formID) {
        if (formID in _kony.mvc.viewId2ControllerNameMap) {
            var ctrlName = _kony.mvc.viewId2ControllerNameMap[formID];
            if (ctrlName in _kony.mvc.ctrlname2ControllerMap) {
                tmpController = _kony.mvc.ctrlname2ControllerMap[ctrlName]
            }
        }
    }
    return tmpController;
}

getWidgetInstance = function (parentIdentifiers) {
    var parentWidget = null;
    for (i = 0; i < parentIdentifiers.length; i++) {
        var parentIdentifier = parentIdentifiers[i];
        if (i == 0) {
            if (typeof parentIdentifier === "string") {
                parentWidget = this[parentIdentifier];
                if (null == parentWidget) {
                    var tmpController = getFormController(parentIdentifier, true);
                    if (null != tmpController) {
                        parentWidget = tmpController.view;
                    }
                }
            }
            else {
                parentWidget = parentIdentifier;
            }
        }
        else {
            var temp = null;
            if (parentIdentifier.indexOf("[") !== -1) {
                var widget = parentIdentifier.substr(0, parentIdentifier.indexOf("["));
                var index = parentIdentifier.substr(parentIdentifier.indexOf("["), parentIdentifier.indexOf("]"));
                temp = parentWidget[widget];
                temp = temp.getrowbyIndex(index);
            }
            else {
                temp = parentWidget[parentIdentifier];
            }
            if (temp == null && Object.prototype.hasOwnProperty.call(parentWidget, "getView")) {
                temp = parentWidget.getView()[parentIdentifier];
            }
            parentWidget = temp;
        }
    }
    return parentWidget;
}

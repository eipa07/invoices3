sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], function (UIComponent, Models, ResourceModel, HelloDialog) {

    return UIComponent.extend("logaligroup.SAPUI5.component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(Models.createRecipient());

            var i18nModel = new ResourceModel({
                bundleName: "logaligroup.SAPUI5.i18n.i18n"
            });

            this.setModel(i18nModel, "i18n");

            this._helloDialog = new HelloDialog(this.getRootControl());

        },

        exit: function(){
            this._helloDialog.destroy();
        },

        openHelloDialog: function(){
            this._helloDialog.open();
        }
    })

});
// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller}           Controller
         * 
         */

    (Controller) => {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: () => {

            },
            onOpenDialog: function (){
                this.getOwnerComponent().openHelloDialog();
                
            },

        });

    });
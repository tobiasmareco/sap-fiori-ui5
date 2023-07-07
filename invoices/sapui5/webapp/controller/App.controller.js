sap.ui.define([
    'sap/ui/core/mvc/Controller'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (
        Controller) {
        'use strict'
        return Controller.extend("invoices.sapui5.controller.App", {
            onSayHelloButton: function (oEvent) {
                console.log(oEvent)
                alert('Hello from button in controller');
            }
        })
    })
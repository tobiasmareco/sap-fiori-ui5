sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast' // Modulos
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (
        Controller,
        MessageToast) {
        'use strict'
        return Controller.extend("invoices.sapui5.controller.App", {
            onSayHelloButton: function (oEvent) {
                MessageToast.show('Hello from Message toast');
            }
        })
    })
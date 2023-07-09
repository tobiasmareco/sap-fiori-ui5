sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'invoices/sapui5/model/Models' //importing from model.
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (
        Controller,
	MessageToast,
	Models) {
        'use strict'
        return Controller.extend("invoices.sapui5.controller.App", {
            onInit: function () {
                this.getView().setModel(Models.createRecipient())
            },
            onSayHelloButton: function (oEvent) {
                MessageToast.show('Hello from Message toast');
            }
        })
    })
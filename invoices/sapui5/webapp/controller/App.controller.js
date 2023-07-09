sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'invoices/sapui5/model/Models',
    'sap/ui/model/resource/ResourceModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (
        Controller,
	MessageToast,
	Models,
	ResourceModel) {
        'use strict'
        return Controller.extend("invoices.sapui5.controller.App", {
            onInit: function () {
                //set data moderl for view
                this.getView().setModel(Models.createRecipient())
                //set i18n for view
                let i18nModel = new ResourceModel({bundleName:"invoices.sapui5.i18n.i18n"})
                this.getView().setModel(i18nModel,'i18n')
            },
            onSayHelloButton: function (oEvent) {
                let objectBundle = this.getView().getModel("i18n").getResourceBundle();
                let sRecipient = this.getView().getModel().getProperty('/recipient/name');
                let textMessage = objectBundle.getText("helloMessage",[sRecipient]);
                MessageToast.show(textMessage);
            }
        })
    })
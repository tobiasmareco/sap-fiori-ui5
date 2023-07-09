sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (
        Controller,
	MessageToast,
	JSONModel) {
        'use strict'
        return Controller.extend("invoices.sapui5.controller.App", {
            onInit: function () {
                //Crear la instancia del modelo JSON.
                let objectData = {
                    recipient:{
                        name:"World"
                    }
                }
                let objectModel = new JSONModel(objectData);
                this.getView().setModel(objectModel)
            },
            onSayHelloButton: function (oEvent) {
                MessageToast.show('Hello from Message toast');
            }
        })
    })
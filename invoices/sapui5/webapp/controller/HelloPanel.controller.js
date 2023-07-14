sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.m.MessageToast} MessageToast
   */
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("invoices.sapui5.controller.HelloPanel", {
      onInit: function () {},
      onSayHelloButton: function () {
        let objectBundle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        let sMessage = objectBundle.getText("helloMessage", [sRecipient]);
        MessageToast.show(sMessage);
      },
    });
  }
);

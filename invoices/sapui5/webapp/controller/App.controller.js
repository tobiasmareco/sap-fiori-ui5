sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";
    return Controller.extend("invoices.sapui5.controller.App", {
      onInit: function () {},
      // onSayHelloButton: function (oEvent) {
      //   let objectBundle = this.getView().getModel("i18n").getResourceBundle();
      //   let sRecipient = this.getView()
      //     .getModel()
      //     .getProperty("/recipient/name");
      //   let textMessage = objectBundle.getText("helloMessage", [sRecipient]);
      //   MessageToast.show(textMessage);
      // },
    });
  }
);

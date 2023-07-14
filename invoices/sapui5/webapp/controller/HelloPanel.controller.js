sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.m.MessageToast} MessageToast
   * @param {typeof sap.ui.core.Fragment} Fragment
   */
  function (Controller, MessageToast, Fragment) {
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
      //"sap/ui/core/Fragment"
      onOpenDialog: function () {
        const objectView = this.getView();
        if (!this.byId("Dialog")) {
          Fragment.load({
            id: objectView.getId(),
            name: "invoices.sapui5.view.HelloDialog",
          }).then(function (objectDialog) {
            objectView.addDependent(objectDialog);
            objectDialog.open();
          });
        } else {
          this.byId("Dialog").open();
        }
      },
    });
  }
);

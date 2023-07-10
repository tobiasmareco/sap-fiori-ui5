sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "invoices/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
  ],
  /**
   * @param {typeof sap.ui.core.UIComponent} UIComponent
   * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
   */
  function (UIComponent, Models, ResourceModel) {
    return UIComponent.extend("invoices.sapui5.Component", {
      metadata: {
        manifest: "json",
        // rootView: {
        //   viewName: "invoices.sapui5.view.App",
        //   type: "XML",
        //   async: true,
        //   id: "app",
        // },
      },
      init: function () {
        // call to init parent function
        UIComponent.prototype.init.apply(this, arguments);
        //set data moderl for view
        this.setModel(Models.createRecipient());
        //set i18n for view
        let i18nModel = new ResourceModel({
          bundleName: "invoices.sapui5.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);

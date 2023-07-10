sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  /**
   * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
   */
  function (ComponentContainer) {
    new ComponentContainer({
      name: "invoices.sapui5",
      settings: {
        id: "sapui5",
      },
      async: true,
    }).placeAt("root");
  }
);

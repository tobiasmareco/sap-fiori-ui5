sap.ui.define(
    [
        "sap/m/Text",
        /**
         * @param {tyoeof sap.m.Text} Text
         */
    ],
    function (Text) {
        new Text({
            text: "Hello World from sap.m.text from control",
        }).placeAt("root");
    }
);

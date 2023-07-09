sap.ui.define([
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {sap.ui.model.json.JSONModel} JSONModel 
     */
function(
	JSONModel) {
	"use strict";
    return {
        createRecipient: function(){
            let objectData = {
                recipient:{
                    name:"World"
                }
            }
            return new JSONModel(objectData);  
        }
    }
});
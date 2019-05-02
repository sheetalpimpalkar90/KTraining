define('userfrmsegmentItemsController',{
    //Type your controller code here 
    segData: function() {
        arrData = [{
            "imgProduct": "bmw.png",
            "lblProdName": "BMW",
            "lblPrice": "$2000"
        }, {
            "imgProduct": "car4.png",
            "lblProdName": "Changed Alfa",
            "lblPrice": "$3000"
        }, {
            "imgProduct": "audi.png",
            "lblProdName": "Audi",
            "lblPrice": "$3000"
        }];
        this.view.segItems.widgetDataMap = {
            "imgProduct": "imgProduct",
            "lblProductName": "lblProdName",
            "lblPrice": "lblPrice"
        };
        this.view.segItems.setData(arrData);
    },
    getData: function() {
        var row = this.view.segItems.selectedRowItems[0];
        kony.print(JSON.stringify(row));
        var form = new kony.mvc.Navigation("frmRowDetail");
        form.navigate(row);
    },
    setSegmentsAndRows: function() {
        var sectionData = [
            ["Normal Cars", [{
                "img": "bmw.png",
                "lblProd": "BMW",
                "lblPrice": "Cost:$2000",
                "template": "flexRowItem"
            }]],
            ["premium Cars", [{
                "img": "car4.png",
                "lblProd": "Changed Alfa",
                "lblPrice": "Cost:$3000",
                "template": "flexRowItem"
            }, {
                "img": "audi.png",
                "lblProd": "Audi",
                "lblPrice": "Cost:$3000",
                "template": "flexRowItem"
            }]]
        ];
        this.view.segItems.widgetDataMap = {
            "imgProduct": "img",
            "lblProductName": "lblProd",
            "lblPrice": "lblPrice",
            "imgRating": "imgRating"
        };
        this.view.segItems.setData(sectionData);
    }
});
define('frmsegmentItemsControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segItems **/
    AS_Segment_e8b13ee6ce7443fca6db18f172d3e72d: function AS_Segment_e8b13ee6ce7443fca6db18f172d3e72d(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.getData.call(this);
    },
    /** onClick defined for btnRowTemp **/
    AS_Button_cb48790aa52e4b5cb18385453db5c52e: function AS_Button_cb48790aa52e4b5cb18385453db5c52e(eventobject) {
        var self = this;
        return self.setSegmentsAndRows.call(this);
    },
    /** postShow defined for frmsegmentItems **/
    AS_Form_a8bbad5534ac4fafa66b89e29423cbc4: function AS_Form_a8bbad5534ac4fafa66b89e29423cbc4(eventobject) {
        var self = this;
        return self.setSegmentsAndRows.call(this);
    }
});



define('frmsegmentItemsController',["userfrmsegmentItemsController","frmsegmentItemsControllerActions"],
		function(){
			var controller = require("userfrmsegmentItemsController");
			var controllerActions = ["frmsegmentItemsControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

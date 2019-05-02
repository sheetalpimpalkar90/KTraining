define('userfrmStartController',{
    populateDataToSegment: function() {
        var segData = [{
            carImage: "bmw.png",
            CarBrand: "BMW"
        }, {
            carImage: "fiat.png",
            CarBrand: "Fiat"
        }, {
            carImage: "jaguar.png",
            CarBrand: "Jaguar"
        }, {
            carImage: "lexus.png",
            CarBrand: "Lexus"
        }, {
            carImage: "skoda.png",
            CarBrand: "Skoda"
        }, {
            carImage: "toyota.png",
            CarBrand: "Toyota"
        }, {
            carImage: "alfa.png",
            CarBrand: "Alfa"
        }, {
            carImage: "audi.png",
            CarBrand: "Audi"
        }, {
            carImage: "bmw.png",
            CarBrand: "Honda"
        }, {
            carImage: "fiat.png",
            CarBrand: "Suzuki"
        }, {
            carImage: "jaguar.png",
            CarBrand: "Porsche"
        }, {
            carImage: "lexus.png",
            CarBrand: "Nissan"
        }, {
            carImage: "skoda.png",
            CarBrand: "Infinity"
        }, {
            carImage: "toyota.png",
            CarBrand: "Acura"
        }, {
            carImage: "alfa.png",
            CarBrand: "Bentley"
        }, {
            carImage: "audi.png",
            CarBrand: "Hyundai"
        }];
        kony.print("########## segData=" + JSON.stringify(segData));
        this.view.segCars.widgetDataMap = {
            imgCar: "carImage",
            lblCarBrand: "CarBrand"
        };
        this.view.segCars.setData(segData);
    },
    setAnimation: function(animationType) {
        var transformObject1 = kony.ui.makeAffineTransform();
        var transformObject2 = kony.ui.makeAffineTransform();
        if (animationType == "translate") {
            transformObject1.translate(200, 0);
            transformObject2.translate(0, 0);
        } else if (animationType == "scale") {
            transformObject1.scale(0, 0);
            transformObject2.scale(1, 1);
        } else if (animationType == "rotate") {
            transformObject1.rotate(90);
            transformObject2.rotate(0);
        }
        var animationObject = kony.ui.createAnimation({
            "0": {
                "transform": transformObject1,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            },
            "100": {
                "transform": transformObject2,
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        });
        var animationConfig = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        };
        var animationCallbacks = {
            "animationEnd": function() {
                kony.print("animation END");
            }
        };
        var animationDefObject = {
            definition: animationObject,
            config: animationConfig,
            callbacks: animationCallbacks
        };
        this.view.segCars.setAnimations({
            visible: animationDefObject
        });
    },
});
define('frmStartControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnMove **/
    AS_Button_68a5ac27529646d6bea90ccf4410b3f6: function AS_Button_68a5ac27529646d6bea90ccf4410b3f6(eventobject) {
        var self = this;
        this.setAnimation("translate")
    },
    /** onClick defined for btnScale **/
    AS_Button_116b300ebe2840a88c590fbbd8d76cd8: function AS_Button_116b300ebe2840a88c590fbbd8d76cd8(eventobject) {
        var self = this;
        this.setAnimation("scale")
    },
    /** onClick defined for btnRotate **/
    AS_Button_4aba58ec64214c88870c5124cdf28cc0: function AS_Button_4aba58ec64214c88870c5124cdf28cc0(eventobject) {
        var self = this;
        this.setAnimation("rotate");
    },
    /** onRowClick defined for segCars **/
    AS_Segment_5aefbb9fae4341e48cd483682b9d6fad: function AS_Segment_5aefbb9fae4341e48cd483682b9d6fad(eventobject, sectionNumber, rowNumber) {
        var self = this;
    },
    /** init defined for frmStart **/
    AS_Form_0ecf562dfb2541ea9029935b901f0bea: function AS_Form_0ecf562dfb2541ea9029935b901f0bea(eventobject) {
        var self = this;
        this.populateDataToSegment();
    }
});



define('frmStartController',["userfrmStartController","frmStartControllerActions"],
		function(){
			var controller = require("userfrmStartController");
			var controllerActions = ["frmStartControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});

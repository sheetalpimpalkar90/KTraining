define({ 

   populateDataToSegment : function(){
        var segData=[
                        {carImage:"bmw.png",CarBrand:"BMW"},
                        {carImage:"fiat.png",CarBrand:"Fiat"},
                        {carImage:"jaguar.png",CarBrand:"Jaguar"},
                        {carImage:"lexus.png",CarBrand:"Lexus"},
                        {carImage:"skoda.png",CarBrand:"Skoda"},
                         {carImage:"toyota.png",CarBrand:"Toyota"},
                        {carImage:"alfa.png",CarBrand:"Alfa"},
                        {carImage:"audi.png",CarBrand:"Audi"},
                        {carImage:"bmw.png",CarBrand:"Honda"},
                        {carImage:"fiat.png",CarBrand:"Suzuki"},
                        {carImage:"jaguar.png",CarBrand:"Porsche"},
                        {carImage:"lexus.png",CarBrand:"Nissan"},
                        {carImage:"skoda.png",CarBrand:"Infinity"},
                         {carImage:"toyota.png",CarBrand:"Acura"},
                        {carImage:"alfa.png",CarBrand:"Bentley"},
                        {carImage:"audi.png",CarBrand:"Hyundai"}
                    ];
        kony.print("########## segData="+JSON.stringify(segData));
        this.view.segCars.widgetDataMap={imgCar:"carImage",lblCarBrand:"CarBrand"};   
        this.view.segCars.setData(segData);
    },

    setAnimation : function(animationType){
      var transformObject1 = kony.ui.makeAffineTransform();
      var transformObject2 = kony.ui.makeAffineTransform();
      if(animationType=="translate"){
            transformObject1.translate(200, 0);
            transformObject2.translate(0, 0);
      }else if(animationType=="scale"){
            transformObject1.scale(0, 0);
            transformObject2.scale(1, 1);
      }else if(animationType=="rotate"){
            transformObject1.rotate(90);
            transformObject2.rotate(0);
      }
     
      var animationObject = kony.ui.createAnimation(
        {"0":{"transform":transformObject1,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
        "100":{"transform":transformObject2,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
        var animationConfig = {
            duration: 1,
            fillMode: kony.anim.FILL_MODE_FORWARDS
        };
        var animationCallbacks = {"animationEnd":function(){kony.print("animation END");}};
        var animationDefObject={definition:animationObject,config:animationConfig,callbacks:animationCallbacks};
        this.view.segCars.setAnimations({visible:animationDefObject});
    },

 });
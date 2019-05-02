define({ 

 //Type your controller code here 
  stepConfig:function(){
    var config = kony.ui.createAnimation(
      {"0":{"left":"0dp","top":"0dp","backgroundColor":"ff7f50","stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "25":{"left":"50dp","top":"50dp","opacity":0.75,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "50":{"opacity":0.5,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "100":{"opacity":0.0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
    return config;
  },
  
  stepTransformConfig:function(){
    
    var transformObj = kony.ui.makeAffineTransform();
    transformObj.translate(100, 100);
    transformObj.scale(2, 2);
    transformObj.rotate(45);
    
    var config = kony.ui.createAnimation(
      {"0":{"left":"0dp","top":"0dp","backgroundColor":"ff7f50","stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "25":{"transform":transformObj,"left":"50dp","top":"50dp","opacity":0.75,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "50":{"opacity":0.5,"stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "100":{"opacity":0.0,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
    return config;
  },
  
  stepTransform3DConfig:function(){
    
    var transform3DObj = kony.ui.makeAffineTransform();
    transform3DObj.setPerspective(1000);
    transform3DObj.rotate3D(140,1,0,0);
        
    var config = kony.ui.createAnimation(
      {"0":{"left":"0dp","top":"0dp","backgroundColor":"ff7f50","stepConfig":{"timingFunction":kony.anim.LINEAR}},
       "100":{"transform": transform3DObj,"stepConfig":{"timingFunction":kony.anim.LINEAR}}});
    return config;
  },

  timingConfig:function(){
    var config = {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_NONE,"duration":3.0};
    return config;
  },

  callbackConfig:function(){
    var config = {"animationEnd":function()
                  {
                    alert("animation END");
                  }
                 };
    return config;
  },

  animateButton:function(){
    this.view.btnTarget.animate(this.stepConfig(), this.timingConfig(), this.callbackConfig());
    kony.print("just ran the animation");
  },
  
  animateTransFormButton:function(){
    this.view.btnTarget.animate(this.stepTransformConfig(), this.timingConfig(), this.callbackConfig());
    kony.print("just ran the animation");
  },
  
  animateTransForm3DButton:function(){
    this.view.btnTarget.animate(this.stepTransform3DConfig(), this.timingConfig(), this.callbackConfig());
    kony.print("just ran the animation");
  }


 });
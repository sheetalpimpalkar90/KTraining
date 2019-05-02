define({ 

 //Type your controller code here 
  

  changeSkin : function(){
      //#ifdef iphone
    if(this.view.btnColor.skin == "skinGrey"){
      this.view.btnColor.skin = "skinRed";
    }else{
      kony.application.exit();
    }
    //#endif
 
      //#ifdef android
    if(this.view.btnColor.skin == "skinGrey"){
      this.view.btnColor.skin = "skinGreen";
    }else{
      kony.application.exit();
    }
    //#endif
 
    
  }
  
 });
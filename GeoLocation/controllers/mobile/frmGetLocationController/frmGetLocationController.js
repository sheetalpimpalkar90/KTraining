define({ 

 //Type your controller code here 
  
  getCurrentLocation : function(){
    kony.location.getCurrentPosition(this.gpsSuccess, this.gpsFailure);
  },
  
  gpsSuccess : function(location){
  this.view.lblLocationStatus.text = JSON.stringify(location);
},
  
  gpsFailure : function(error){
  this.view.lblLocationStatus.text = JSON.stringify(error);
}

 });
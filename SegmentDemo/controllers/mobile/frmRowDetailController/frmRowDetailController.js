define({ 

 //Type your controller code here 
  onNavigate : function(obj){
    this.view.lblProdName.text = obj.lblProd;
    this.view.lblProdPrice.text = obj.lblPrice;
  }

 });
define({ 

  //Type your controller code here 

  segData : function(){
    arrData = [
      {"imgProduct" : "bmw.png", "lblProd":"BMW","lblPrice" :"$2000"},
      {"imgProduct" : "car4.png", "lblProd":"Changed Alfa","lblPrice" :"$3000"},
      {"imgProduct" : "audi.png", "lblProd":"Audi","lblPrice" :"$3000"}
    ];

    this.view.segItems.widgetDataMap = {"imgProduct":"imgProduct", "lblProdName":"lblProd", "lblPrice":"lblPrice"};
    this.view.segItems.setData(arrData);
  },

  getData : function(){
    var row = this.view.segItems.selectedRowItems[0];
    kony.print(JSON.stringify(row));

    var form = new kony.mvc.Navigation("frmRowDetail");
    form.navigate(row);
  },

  setSegmentsAndRows : function(){
    var sectionData = [
      [ {lblSection :"Normal Cars", template: "flexSection"},
       [ {"img" : "bmw.png", "lblProd":"BMW","lblPrice" :"Cost:$2000", "template":"flexRowItem"}]],
      [{lblSection :"Premium Cars", template: "flexSection"}, [ {"img" : "car4.png", "lblProd":"Changed Alfa","lblPrice" :"Cost:$3000", "template":"flexRowItem"},
                        {"img" : "audi.png", "lblProd":"Audi","lblPrice" :"Cost:$3000", "template":"flexRowItem"}
                       ]]
    ];

    this.view.segItems.widgetDataMap = {"imgProduct":"img","lblProductName" :"lblProd" ,"lblPrice" :"lblPrice", "lblSection" :"lblSection"}; 
    this.view.segItems.setData(sectionData);
   
  }
});
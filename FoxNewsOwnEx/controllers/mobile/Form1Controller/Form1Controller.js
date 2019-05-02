define({ 

  //Type your controller code here 
  init:function()
  {

    var appkey = "8da68b813896e1376bd28a2373ae5402";
    var appsecret = "1a5b85c8aac43628dd29248a173fac00";
    var serviceURL = "http://10.10.37.60:9839/authService/100000002/appconfig";

    KNYMobileFabric = new kony.sdk();
    KNYMobileFabric.init(appkey, appsecret, serviceURL, this.SuccessCallback,this.errorCallback);
  },

  SuccessCallback: function(response) {
    alert("Init success");
    this.getAuthentication();
  }, 
  errorCallback: function(error) {
    alert("Init Failure");
  },

  /**
 * Kony Fabric is auto initialized, only if the Kony Fabric app is linked in the Kony Visualizer.
 * In all other cases the Kony Fabric initialization code should be written by User if not done
 * already, for below sample to work.
 */
  getAuthentication : function(){
    var authClient = null;
    var providerName = "userstore";
    try {
      authClient = KNYMobileFabric.getIdentityService(providerName);
    } catch (exception) {
      //handle exception
      alert("getAuthentication Exception" + JSON.stringify(exception));
    }
    authClient.login({"userid" : "sheetal@kony.com", "password" : "Kony@123"}, this.AuthenticateSuccess, this.AuthenticateFailure);
  },

  AuthenticateSuccess : function(response){
    alert("getAuthentication Success" + JSON.stringify(response));
    this.fetchArticles();
  },

  AuthenticateFailure : function(error){
    alert("getAuthentication Failure" + JSON.stringify(error));
  },

  fetchArticles : function(){
    serviceName = "foxNewsServiceBySheetal";
    integrationObj = KNYMobileFabric.getIntegrationService(serviceName);
    //Code to invoke parent integration service should be present to use below code.
    operationName =  "getArticles";
    data= {"newsType": this.view.txtName.text};
    headers= {};
    integrationObj.invokeOperation(operationName, headers, data, operationSuccess.bind(this), operationFailure.bind(this));
    function operationSuccess(res){
      //code for success call back
      alert("Articles success" + JSON.stringify(res));
    }
    function operationFailure(res){
      //code for failure call back
      alert("Articles fail" + JSON.stringify(res));
    }
  }

});
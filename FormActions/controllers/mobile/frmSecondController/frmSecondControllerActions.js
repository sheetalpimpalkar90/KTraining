define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSms **/
    AS_Button_defe82236e51413688f699efeb02df2e: function AS_Button_defe82236e51413688f699efeb02df2e(eventobject) {
        var self = this;
        kony.phone.sendSMS("+918788397980", "Hi Kalyani!!!!");
    },
    /** onClick defined for btnEmail **/
    AS_Button_f44633eef1e14993a10cc401b69e1f4f: function AS_Button_f44633eef1e14993a10cc401b69e1f4f(eventobject) {
        var self = this;
        kony.phone.openEmail(["kalyanideshmukh77.kd@gmail.com"], ["manishpathakbabu@gmail.com"], [], 'Kony test mail', "Kony Test Mail!!!!", false);
    },
    /** onClick defined for btnLogout **/
    AS_Button_b3f46a2c257d4e8684f09d8842cf849f: function AS_Button_b3f46a2c257d4e8684f09d8842cf849f(eventobject) {
        var self = this;
        kony.application.exit();
    },
    /** onClick defined for Button0ia279c8373e646 **/
    AS_Button_acb98ef5f7da4cbb9792c91597dcd71d: function AS_Button_acb98ef5f7da4cbb9792c91597dcd71d(eventobject) {
        var self = this;
        self.view.Map0c13f6c52913246.locationData = [{
            "lat": 17.3616,
            "lon": 78.4747,
            "name": "Charminar",
            "desc": "Historical Place"
        }];
    }
});
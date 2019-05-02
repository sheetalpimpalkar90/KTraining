define({
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
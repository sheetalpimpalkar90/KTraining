define({
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
define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnMove **/
    AS_Button_a2234c5075ef490f96ea32714598a7c0: function AS_Button_a2234c5075ef490f96ea32714598a7c0(eventobject) {
        var self = this;

        function MOVE_ACTION____f06b8f17e7bc47e99ecd6dad128346a0_Callback() {}
        self.view.btnTarget.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "34dp",
                "left": "66dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": MOVE_ACTION____f06b8f17e7bc47e99ecd6dad128346a0_Callback
        });
    },
    /** onClick defined for btnScale **/
    AS_Button_jd6fbf58161443c891184de63086d361: function AS_Button_jd6fbf58161443c891184de63086d361(eventobject) {
        var self = this;

        function SCALE_ACTION____bc135bcd1362485c9676864896572493_Callback() {}
        self.view.btnTarget.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "width": "140dp",
                "height": "100dp"
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": SCALE_ACTION____bc135bcd1362485c9676864896572493_Callback
        });
    },
    /** onClick defined for btnRotate **/
    AS_Button_c029984c772c4c068bc4b86d6444fa63: function AS_Button_c029984c772c4c068bc4b86d6444fa63(eventobject) {
        var self = this;

        function ROTATE_ACTION____caf9ec314fde4ebab8f66efa69c45b36_Callback() {}
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate(120);
        self.view.btnTarget.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": ROTATE_ACTION____caf9ec314fde4ebab8f66efa69c45b36_Callback
        });
    },
    /** onClick defined for btnTransform **/
    AS_Button_hcbff936ad2947c39527cd8bff00468e: function AS_Button_hcbff936ad2947c39527cd8bff00468e(eventobject) {
        var self = this;

        function TRANSFORM_ACTION_NEW____bc95bd0aad6249b78fc251e7123590c2_Callback() {}
        var trans100 = kony.ui.makeAffineTransform();
        trans100.translate(66, 44);
        self.view.btnTarget.animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": TRANSFORM_ACTION_NEW____bc95bd0aad6249b78fc251e7123590c2_Callback
        });
    },
    /** onClick defined for btnMoveFlex **/
    AS_Button_a8278b185063477aab0055785c1f2c43: function AS_Button_a8278b185063477aab0055785c1f2c43(eventobject) {
        var self = this;

        function MOVE_ACTION____g739b015758f4676be8b54a6237e1e45_Callback() {}
        self.view.flexAnim.animate(
        kony.ui.createAnimation({
            "100": {
                "top": "50dp",
                "left": "66dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": "2",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 1,
            "direction": kony.anim.DIRECTION_ALTERNATE
        }, {
            "animationEnd": MOVE_ACTION____g739b015758f4676be8b54a6237e1e45_Callback
        });
    }
});
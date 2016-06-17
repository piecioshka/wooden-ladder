'use strict';

function WoodenLadder(limit, fn1, fn2) {
    this.step = 0;
    this.limit = limit;
    this.fn1 = fn1;
    this.fn2 = fn2;
}

WoodenLadder.prototype = {
    climb: function () {
        if (this.step < this.limit) {
            this.step++;

            this.fn1();
        } else {
            this.fn2();
        }
    },

    reset: function () {
        this.step = 0;
    }
};

// Export UMD.

if (typeof module === 'object' && module.exports) {
    module.exports = WoodenLadder;
} else if (typeof define === 'function' && define.amd) {
    define([], function () {
        return WoodenLadder;
    });
} else {
    window.Ladder = WoodenLadder;
}

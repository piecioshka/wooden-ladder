/**
 * @author $AUTHOR$
 * @name $NAME$
 * @description $DESCRIPTION$
 * @version $VERSION$
 * @license $LICENSE$
 * @example
 * let WoodenLadder = require('wooden-ladder');
 *
 * let fn1 = () => console.log(1);
 * let fn2 = () => console.log(2);
 * let lad = new WoodenLadder(3, fn1, fn2);
 *
 * lad.climb(); // fired "fn1"
 * lad.climb(); // fired "fn1"
 * lad.climb(); // fired "fn1"
 *
 * lad.climb(); // fired "fn2"
 * lad.climb(); // fired "fn2"
 * lad.climb(); // fired "fn2"
 * ...
 * lad.climb(); // fired "fn2"
 */

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

module.exports = WoodenLadder;

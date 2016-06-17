'use strict';

var Ladder = require('../../../index');

describe('error handling', function () {
    it('should throw an error when put non function as second & third params', function () {
        var lad = new Ladder(1, null, null);

        expect(function () {
            lad.climb();
        }).toThrow();
    });
});

describe('good work', function () {
    var foo;

    beforeEach(function () {
        foo = {
            bar: function () {

            },
            baz: function () {

            }
        };

        spyOn(foo, 'bar');
        spyOn(foo, 'baz');
    });

    it('should good count', function () {
        var lad = new Ladder(3, foo.bar, foo.baz);

        expect(foo.bar).not.toHaveBeenCalled();
        expect(foo.baz).not.toHaveBeenCalled();

        lad.climb();

        expect(foo.bar).toHaveBeenCalledTimes(1);
        expect(foo.baz).not.toHaveBeenCalled();

        lad.climb();

        expect(foo.bar).toHaveBeenCalledTimes(2);
        expect(foo.baz).not.toHaveBeenCalled();

        lad.climb();

        expect(foo.bar).toHaveBeenCalledTimes(3);
        expect(foo.baz).not.toHaveBeenCalled();

        lad.climb();

        expect(foo.bar).toHaveBeenCalledTimes(3);
        expect(foo.baz).toHaveBeenCalledTimes(1);

        lad.climb();

        expect(foo.bar).toHaveBeenCalledTimes(3);
        expect(foo.baz).toHaveBeenCalledTimes(2);

        lad.climb();

        expect(foo.bar).toHaveBeenCalledTimes(3);
        expect(foo.baz).toHaveBeenCalledTimes(3);
    });
});

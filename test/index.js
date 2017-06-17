
var assert   = require('assert');
var fixtures = require('haraka-test-fixtures');

describe('rcpt-postgresql', function () {
    it('loads', function (done) {
        var plugin = new fixtures.plugin('rcpt-postgresql');
        // console.log(plugin);
        assert.ok(plugin);
        done();
    });

    it('registers', function (done) {
        var plugin = new fixtures.plugin('rcpt-postgresql');
        assert.equal(typeof plugin.register, 'function');
        plugin.register();
        assert.ok(plugin.sqlQuery);
        // console.log(plugin);
        done();
    });
});

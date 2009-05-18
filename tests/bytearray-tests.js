var assert = require("test/assert");

var Binary = require("binary").Binary,
    ByteString = require("binary").ByteString,
    ByteArray = require("binary").ByteArray;

exports.testByteArrayConstructor = function() {
}

exports.testByteArrayResizing = function() {
    var b1 = new ByteArray([0,1,2,3,4,5,6]);
    assert.equal(7, b1.length);
    assert.isTrue(isNaN(b1.byteAt(7)));
    
    b1.length = 10;
    assert.equal(10, b1.length);
    assert.equal(5, b1.byteAt(5));
    assert.equal(0, b1.byteAt(7));
    
    b1.length = 3;
    assert.equal(3, b1.length);
    assert.equal(0, b1.byteAt(0));
    assert.isTrue(isNaN(b1.byteAt(4)));
    
    b1.length = 10;
    assert.equal(10, b1.length);
    assert.equal(0, b1.byteAt(0));
    assert.equal(0, b1.byteAt(4));
}

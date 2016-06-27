"use strict";
var Disposable = (function () {
    function Disposable() {
        this._isDisposed = false;
    }
    /**
     * After {@link dispose} has been called, this method returns true.
     * Use this method to determine whether dispose() should be run again.
     */
    Disposable.prototype.isDisposed = function () {
        return this._isDisposed;
    };
    /**
     * Destruct this class.
     */
    Disposable.prototype.dispose = function () {
        this._isDisposed = true;
    };
    return Disposable;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Disposable;

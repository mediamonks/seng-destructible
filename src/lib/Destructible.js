"use strict";
var Destructible = (function () {
    function Destructible() {
        this._isDestructed = false;
    }
    /**
     * After {@link destruct} has been called, this method returns true.
     * Use this method to determine whether destruct() should be run again.
     */
    Destructible.prototype.isDestructed = function () {
        return this._isDestructed;
    };
    /**
     * Destruct this class.
     */
    Destructible.prototype.destruct = function () {
        this._isDestructed = true;
    };
    return Destructible;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Destructible;

System.register("lib/IDestructible", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("lib/Destructible", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Destructible;
    return {
        setters:[],
        execute: function() {
            Destructible = (function () {
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
            exports_2("default",Destructible);
        }
    }
});
System.register("index", ["lib/Destructible"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Destructible_1;
    return {
        setters:[
            function (Destructible_1_1) {
                Destructible_1 = Destructible_1_1;
            }],
        execute: function() {
            exports_3("default",Destructible_1.default);
        }
    }
});

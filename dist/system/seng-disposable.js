System.register("lib/IDisposable", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("lib/Disposable", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Disposable;
    return {
        setters:[],
        execute: function() {
            Disposable = (function () {
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
            exports_2("default",Disposable);
        }
    }
});
System.register("index", ["lib/Disposable"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Disposable_1;
    return {
        setters:[
            function (Disposable_1_1) {
                Disposable_1 = Disposable_1_1;
            }],
        execute: function() {
            exports_3("default",Disposable_1.default);
        }
    }
});

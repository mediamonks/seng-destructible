class Disposable {
    constructor() {
        this._isDisposed = false;
    }
    /**
     * After {@link dispose} has been called, this method returns true.
     * Use this method to determine whether dispose() should be run again.
     */
    isDisposed() {
        return this._isDisposed;
    }
    /**
     * Destruct this class.
     */
    dispose() {
        this._isDisposed = true;
    }
}
export default Disposable;

class Destructible {
    constructor() {
        this._isDestructed = false;
    }
    /**
     * After {@link destruct} has been called, this method returns true.
     * Use this method to determine whether destruct() should be run again.
     */
    isDestructed() {
        return this._isDestructed;
    }
    /**
     * Destruct this class.
     */
    destruct() {
        this._isDestructed = true;
    }
}
export default Destructible;

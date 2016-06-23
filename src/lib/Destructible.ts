import IDestructible from "./IDestructible";

class Destructible implements IDestructible
{
	private _isDestructed:boolean = false;

	/**
	 * After {@link destruct} has been called, this method returns true.
	 * Use this method to determine whether destruct() should be run again.
	 */
	public isDestructed():boolean
	{
		return this._isDestructed;
	}

	/**
	 * Destruct this class.
	 */
	public destruct():void
	{
		this._isDestructed = true;
	}
}

export default Destructible;

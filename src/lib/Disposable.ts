import IDisposable from "./IDisposable";

class Disposable implements IDisposable
{
	private _isDisposed:boolean = false;

	/**
	 * After {@link dispose} has been called, this method returns true.
	 * Use this method to determine whether dispose() should be run again.
	 */
	public isDisposed():boolean
	{
		return this._isDisposed;
	}

	/**
	 * Destruct this class.
	 */
	public dispose():void
	{
		this._isDisposed = true;
	}
}

export default Disposable;

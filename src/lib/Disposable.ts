import IDisposable from './IDisposable';

class Disposable implements IDisposable {
	private disposed:boolean = false;

	/**
	 * After {@link dispose} has been called, this method returns true.
	 * Use this method to determine whether dispose() should be run again.
	 */
	public isDisposed():boolean {
		return this.disposed;
	}

	/**
	 * Destruct this class.
	 */
	public dispose():void {
		this.disposed = true;
	}
}

export default Disposable;

import IDisposable from './IDisposable';

function logAlreadyDisposed():void {
  // tslint:disable-next-line no-console
	console.warn('The dispose() method should only be called once. Duplicate calls are ignored.');
}

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
    this.dispose = logAlreadyDisposed;
  }
}

export default Disposable;

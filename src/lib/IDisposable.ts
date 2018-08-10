interface IDisposable {
  /**
   * After {@link dispose} has been called, this method returns true.
   * Use this method to determine whether dispose() should be run again.
   */
  isDisposed(): boolean;

  /**
   * Destruct this class.
   */
  dispose(): void;
}

export default IDisposable;

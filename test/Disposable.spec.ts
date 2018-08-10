import Disposable from '../src/lib/Disposable';
import { expect, use as chaiUse } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';

chaiUse(sinonChai);

describe('DisposableSpec', () => {
  it('isDisposed should return false when instance has not been disposed', () => {
    const disposable = new Disposable();
    expect(disposable.isDisposed()).equals(false);
  });

  it('isDisposed should return true when instance has been disposed', () => {
    const disposable = new Disposable();
    disposable.dispose();
    expect(disposable.isDisposed()).equals(true);
  });

  it('dispose() should not be executed multiple times', () => {
    const disposeSpy = spy();

    class TestDispose extends Disposable {
      public dispose():void {
        disposeSpy();
        super.dispose();
      }
    }

    const disposable = new TestDispose();
    disposable.dispose();
    disposable.dispose();
    expect(disposeSpy).to.have.been.calledOnce;
  });
});

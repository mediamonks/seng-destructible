import Disposable from '../src/lib/Disposable';
import { expect } from 'chai';
import {} from 'mocha';

describe('DisposableSpec', () => {
	let disposable:Disposable;

	beforeEach(() => {
		console.log(new Disposable());
		disposable = new Disposable();
	});

	it('isDisposed should return false when instance has not been disposed', () => {
		expect(disposable.isDisposed()).equals(false);
	});

	it('isDisposed should return true when instance has been disposed', () => {
		disposable.dispose();
		expect(disposable.isDisposed()).equals(true);
	});
});

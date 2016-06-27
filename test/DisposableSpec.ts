import Disposable from '../src/lib/Disposable';

describe('DisposableSpec', () =>
{
	let disposable:Disposable;

	beforeEach(function()
	{
		disposable = new Disposable();
	});

	it('isDisposed should return false when instance has not been disposed', () =>
	{
		expect(disposable.isDisposed()).toBe(false);
	});

	it('isDisposed should return true when instance has been disposed', () =>
	{
		disposable.dispose();
		expect(disposable.isDisposed()).toBe(true);
	});
});

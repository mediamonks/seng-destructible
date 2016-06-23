import Destructible from '../src/lib/Destructible';

describe('DestructibleSpec', () =>
{
	let destructible:Destructible;

	beforeEach(function()
	{
		destructible = new Destructible();
	});

	it('isDestructed should return false when instance has not been destructed', () =>
	{
		expect(destructible.isDestructed()).toBe(false);
	});

	it('isDestructed should return true when instance has been destructed', () =>
	{
		destructible.destruct();
		expect(destructible.isDestructed()).toBe(true);
	});
});

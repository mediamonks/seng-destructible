interface IDestructible
{
	/**
	 * After {@link destruct} has been called, this method returns true.
	 * Use this method to determine whether destruct() should be run again.
	 */
	isDestructed():boolean;
	
	/**
	 * Destruct this class.
	 */
	destruct():void;
}

export default IDestructible;

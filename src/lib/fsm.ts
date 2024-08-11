type State = any; // You can specify a more detailed type based on your needs

interface StoreOptions<T> {
	[key: string]: T;
}

interface Store<T> {
	subscribe: (callback: (state: T) => void) => void;
	get: () => T;
	set: (newState: T) => void;
	undo: () => void;
	redo: () => void;
	getStateHistory: () => T[];
}

export function makestate<T>(state: T): Store<T> {
	let currentState: T = state;
	const history: T[] = [];
	const future: T[] = [];
	const subscribers: Array<(state: T) => void> = [];

	/** This function notifies the subscribers of the change of the value */
	function notify() {
		subscribers.forEach((callback) => callback(currentState));
	}

	return {
		/** 
		 * subsribes to the value 
		 * @param callback a callback function that runs every update
		 * @returns a function to unsubscribe
		*/
		subscribe(callback: (state: T) => void) {
			subscribers.push(callback);
			callback(currentState);
			
			return () => subscribers.length = 0;
		}, 

		/**
		 * gets the value
		 * @returns the current value
		 */
		get() {
			return currentState;
		},

		/**
		 * sets a new value
		 * @param newState the value to replace the current value with.
		 */
		set(newState: T) {
			if (JSON.stringify(currentState) !== JSON.stringify(newState)) {
				history.push(currentState);
				currentState = newState;
				future.length = 0;
				notify();
			}
		},

		/**
		 * goes back of one state
		 */
		undo() {
			if (history.length > 1) {
				future.push(history.pop()!);
				currentState = history[history.length - 1];
				notify();
			}
		},
		/**
		 * goes forward of one state if possible of one state
		 */
		redo() {
			if (future.length > 0) {
				const nextState = future.pop()!;
				history.push(nextState);
				currentState = nextState;
				notify();
			}
		},

		/**
		 * function to change history
		 * @returns all the previous states of the value
		 */
		getStateHistory() {
			this.subscribe((state) => {
				if(!history.includes(state)) {
					history.length = 0
					history.push(state)
				}
			})
			return [...history];
		}
	};
}

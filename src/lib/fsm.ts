export type StateConfig = {
	onEnter?: () => void;
	onExit?: () => void;
	onUpdate?: () => void;
};

export class State {
	name: string;
	onEnter: () => void;
	onExit: () => void;
	onUpdate: () => void;

	constructor(name: string, { onEnter, onExit, onUpdate }: StateConfig = {}) {
		this.name = name;
		this.onEnter = onEnter || (() => {});
		this.onExit = onExit || (() => {});
		this.onUpdate = onUpdate || (() => {});
	}
}

export class FSM {
	states: { [key: string]: State };
	currentState: string | null;

	/**
	 * instanceate a fsm (FINITE-STATE-MACHINE)
	 * @param initialState the string indicating the initial state of the machine
	 */
	constructor(initialState?: string) {
		this.states = {};
		this.currentState = null;
		if (initialState) this.changeState(initialState);
	}

	/**
	 * Adds a new state to the FSM.
	 * @param name - The name of the state.
	 * @param config - The configuration object for the state.
	 */
	addState(name: string, config: StateConfig) {
		this.states[name] = new State(name, config);
	}

	/**
	 * Changes the current state of the FSM.
	 * @param name - The name of the new state.
	 */
	changeState(name: string) {
		if (this.currentState && this.states[this.currentState]) {
			this.states[this.currentState].onExit();
		}
		this.currentState = name;
		if (this.states[name]) {
			this.states[name].onEnter();
		} else {
			throw new Error(`State "${name}" does not exist.`);
		}
	}

	/**
	 * Updates the current state of the FSM.
	 */
	update() {
		if (this.currentState && this.states[this.currentState]) {
			this.states[this.currentState].onUpdate();
		}
	}
}

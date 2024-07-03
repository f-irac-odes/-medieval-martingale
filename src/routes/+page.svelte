<script>
	import { FSM } from '$lib';

	const machine = new FSM();
	machine.addState('idle', { onEnter: () => console.log('hi'), onExit: () => {}, onUpdate: () => {} });
	machine.changeState('idle');

	$: console.log(machine);
</script>

/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

store( 'sp-calculator', {
	actions: {
		sprint_1: ( event ) => {
			const context = getContext();
			context.sprints.sprint_1 = event.target.value;
			console.log( context );
		},
	}
} );

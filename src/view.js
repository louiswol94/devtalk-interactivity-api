/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

function calculateStoryPoints( context ) {
	let { sprints } = context;
	context.storyPoints = Math.round( +sprints.sprint_1 + +sprints.sprint_2 );
}

store( 'sp-calculator', {
	actions: {
		sprint_1: ( event ) => {
			const context = getContext();
			context.sprints.sprint_1 = event.target.value;
			calculateStoryPoints( context );
		},
		sprint_2: ( event ) => {
			const context = getContext();
			context.sprints.sprint_2 = event.target.value;
			calculateStoryPoints( context );
		},
	}
} );

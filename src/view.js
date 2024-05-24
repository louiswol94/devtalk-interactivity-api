/**
 * WordPress dependencies
 */
import { store, getContext } from '@wordpress/interactivity';

function calculateStoryPoints( context ) {
	let { sprints, ratio } = context;
	context.storyPoints = Math.round( ( ( +sprints.sprint_1 + +sprints.sprint_2 + +sprints.sprint_3 ) / 3 ) * +ratio );
}

store( 'sp-calculator', {
	actions: {
		sprint_1: ( event ) => {
			const context = getContext();
			context.sprints.sprint_1 = event.target.value;
			console.log( context.sprints.sprint_1 );
		},
		sprint_2: ( event ) => {
			const context = getContext();
			context.sprints.sprint_2 = event.target.value;
			console.log( context.sprints.sprint_2 );
		},
	}
} );

<?php
$unique_id = wp_unique_id( 'p-' );
?>

<div
	<?php echo get_block_wrapper_attributes(); ?>
	data-wp-interactive="sp-calculator"
	<?php echo wp_interactivity_data_wp_context( [
		'sprints' => [
			'sprint_1' => 0,
		],
	] ); ?>
>
	<div class="panel">
		<p style="text-align: center;">Story points completed in the last 3 sprints:</p>
		<div class="form-group">
			<input type="number" placeholder="Sprint 1" data-wp-on--keyup="actions.sprint_1">
		</div>

		<div class="form-group">
			<input type="number" placeholder="Sprint 2" data-wp-on--keyup="actions.sprint_2">
		</div>
	</div>

	<div class="panel">
		<p class="mb-50">Here's how many Story Points you can take:</p>
		<div class="normal-group width-full">
			<div class="sps">
				<span data-wp-text="context.storyPoints"></span>
			</div>
		</div>

		<img src="<?php echo plugin_dir_url( dirname( __FILE__ ) ) . '/Elementor-Logo-Symbol-Pink.webp'; ?>" />
		
	</div>
</div>
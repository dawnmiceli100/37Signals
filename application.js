$(document).ready(function() {
	$('#basecamp').hover(function() {
		$('#default-heading').toggleClass('hidden');
		$('#basecamp-heading').toggleClass('hidden');
	});	
	$('#highrise').hover(function() {
		$('#default-heading').toggleClass('hidden');
		$('#highrise-heading').toggleClass('hidden');
	});	
	$('#campfire').hover(function() {
		$('#default-heading').toggleClass('hidden');
		$('#campfire-heading').toggleClass('hidden');
	});	
});
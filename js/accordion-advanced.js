$(document).ready(function() {
	$('.hideable').click(function() {
		if($(this).hasClass('toggleddd')) {
			// remove active, fade out siblings
			$(this).removeClass('toggleddd');
			$(this).siblings('div').hide();
		} else {
			// add active, fade in siblings
			$(this).addClass('toggleddd');
			$(this).siblings('div').fadeTo('fast', 1);
		}
	})
});
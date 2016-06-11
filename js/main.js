jQuery(document).ready(function($) {
	$.each($('.smoothIntro'), function(index, el) {
		setTimeout(function(){
	       $(el).removeClass('smoothIntro');
	    }, ( index * 400 ));
	});

});
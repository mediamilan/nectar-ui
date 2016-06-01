jQuery(document).ready(function( $ ) {	
	$ = jQuery;
	 
	/***************************/
			//tab-nav
	/**************************/
	$('.tab-nav a').click(function(){		
		$('.tab-nav a').removeClass('selected');
		$('.tab-content').hide();		
		$(this).addClass('selected');		
		var tabId = $(this).attr('href');		
		$(tabId).show();		
		return false;
	});

});
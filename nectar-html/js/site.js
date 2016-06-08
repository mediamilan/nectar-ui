jQuery(document).ready(function( $ ) {	
	$ = jQuery;
	 
	/***************************/
		//MOBILE TOGGLE MENU
	/**************************/
	$('.mobile-toggle-menu a').click(function(){
			$(this).toggleClass('toggled');			
			$('.nav-bar-right').slideToggle();
			$('.nav-bar-right').toggleClass('openMenu');
			return false;
			
		});
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
$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
	
	if ($(window).scrollTop() > 10) {
 		$('header').addClass("fixed");
 	} else{
 		$('header').removeClass("fixed")	
 	}
});
$(window).scroll(function() {		
 	if ($(window).scrollTop() > 10) {
 		$('header').addClass("fixed");
 	} else{
 		$('header').removeClass("fixed")	
 	}
});
 	 
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	
 	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', ''); return false;});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder); 
 			return false;
 		});
 	});
	

	var speed1=$('#bigSldId').attr('data-speed1')*1,speed2=$('#bigSldId').attr('data-speed2')*1;

//1282	console.log(speed1);

	
	var slider = $('.slider-in');
	slider.bxSlider({
		pager :true,
		pause: speed1,
		

	});
    $('.slide-ext .slide-psn').on('click', function(){
		$('.slider .bx-controls-direction .bx-next').trigger('click');
	});
	
	
    //tabs;
    $('.js-tabs-link').click(function(){
		 $(this).parents('.js-tabs').find('.js-tab-cont').addClass('hide-tab');
		 $(this).parents('.js-tabs').find('.js-tabs-item').removeClass('active'); 
		 var id = $(this).attr('href');
		 $(id).removeClass('hide-tab');
		 $(this).parent().addClass('active'); 
		 return false;
	 });
    
   //drop seardc; 
    $('.js-open-search').focus(function(){
		$(this).parents('.box-search').find('.drop-search').slideDown(); 
		return false;
	});
     $('.js-open-search').focusout(function(){
		$(this).parents('.box-search').find('.drop-search').slideUp(); 
		return false;
	});

});



var handler2 = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer, 'padding-top':height_header});
	
	var ww = viewport().width;
	
	if (ww <= 991) {
		
	}
    
    var height_window = $(window).height();
    $('.dropdown-navbar__main-cont').css({'max-height':height_window});
	
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);




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
    
   //drop search; 
    $('.js-open-search').focus(function(){
		$(this).parents('.box-search').find('.drop-search').slideDown(); 
		return false;
	});
     $('.js-open-search').focusout(function(){
		$(this).parents('.box-search').find('.drop-search').slideUp(); 
		return false;
	});
    
    
    //open search mobile; 
    $('.js-open-mobile-search').click(function(){
		$(this).parents('header').find('.box-search').fadeToggle();
        $('body').toggleClass('for-open-search');
        $('.navbar-collapse').removeClass('in');
		return false;
	});
     
    
    //open faq; 
    $('.list-faq__link').click(function(){
		$(this).parent().find('.list-faq__answer').slideToggle();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().find('.list-faq__answer').slideUp();
        $(this).parent().siblings().removeClass('active')
		return false;
	});
    
    //styler form; 
    $('.js-styled').styler();	
    
    
    //open section filter; 
    $('.list-filter__link').click(function(){
		$(this).parent().find('.list-filter__drop').slideToggle();
        $(this).parent().toggleClass('open');
        $(this).parent().siblings().find('.list-filter__drop').slideUp();
        $(this).parent().removeClass('first-open');
        $(this).parent().siblings().removeClass('open')
		return false;
	});
    
    //open filter; 
    $('.button-open-filter').click(function(){
		$('body').toggleClass('for-open-filter');
        $('body').toggleClass('without-filter');
		return false;
	});
    $(document).click(function(e){
		if ($(e.target).parents().filter('.filter-catalog:visible').length != 1) {
			$('body').removeClass('for-open-filter');
            $('body').addClass('without-filter');
			
		}
	});
    
    //scroll Up; 
    $('.button-up').click(function() {
      $('html, body').animate({scrollTop: 0}, 1000);
      return false;
     });
    
    //card product img; 
    $('.list-mini-img li a').click(function(){
        srcBig=$(this).attr('data-big');
        $(this).parents('.box-img-product').find('.big-img-product img').attr('src',srcBig);			
		$(this).parents('.box-img-product').find('.miniImgCard li.active').removeClass('active');
		$(this).parent().addClass('active');			
        return false;
    });
    
    
    if($('.fancybox').length){
      $('.fancybox').fancybox({
       padding  : 0,
       margin  : 10,
       fitToView:false,
       maxWidth:'100%'
      });
     };
    
    if($('.fancybox2').length){
      $('.fancybox2').fancybox({
       padding  : 0,
       margin  : 10,
       fitToView:false,
       maxWidth:'100%',
  wrapCSS   : 'wrap-img-fancy'
      });
     };
    
});



var handler2 = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer, 'padding-top':height_header});
	
	var ww = viewport().width;
	
	if (ww <= 991) {
        var height_window = $(window).height();
		$('.dropdown-navbar').css({'max-height':height_window-130});
        $('.navbar-collapse').css({'max-height':height_window-130});
        $('.drop-search').css({'max-height':height_window-185});
	}
    
    if (ww >= 768) {
        var height_logo_provider = $('.logo-provider__td').width();
		$('.logo-provider__td').css({'height':height_logo_provider});
	}
    
    //carusel product; 
    $('#js-carusel').carouFredSel({
		auto: false,
		prev: '#prev1',
		next: '#next1',
        width: '100%',
		align: "center",
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		},
        scroll: 1,
		items: {
            width: 154,
            visible: {
                min: 1,
                max: 6
            }
        }
	});
    
    
    //field number product; 
    $('.button-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.button-plus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) + 1;
        count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
        $input.val(count);
        $input.change();
        return false;
    });
    
    
    var height_window2 = $(window).height();
	$('.filter-catalog__cont').css({'max-height':height_window2});
    
    
}
$(window).bind('load', handler2);
$(window).bind('resize', handler2);




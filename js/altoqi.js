// JavaScript Document
 
 
 
 
// Disable link click not scroll top
    $("a[href='#']").click(function() {
        return false
    });
	
	
	
//' Click radio ===================================================================	
		$(function(){
		$("label.radio").click(function(e) {
		  $("label.radio").removeClass("checked");
		  $(this).addClass("checked");
		});
	});
	
	
 

	
// Abas  ===================================================================
 $(document).ready(function () {
				$('#tabformasdepagamento').tabify();
				$('#listacartao').tabify();
 			});
			
 
			
			
			
// circulo  ===================================================================		
	$("figure .circulo").click(function(e) {
		 $(this).toggleClass('circulo-exibir')
	  });
	
	
// Abas  ===================================================================	
			$(document).ready(function() {
			/*
			var defaults = {
	  			containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
	 		};
			*/
			
			$().UItoTop({ easingType: 'easeOutQuart' });
			
		});
		
		
		
	$('#toTop').each(function(){
  $(this).click(function(){ 
    $('html').animate({ scrollTop: 0 }, 'slow'); return true; 
  });
});
	
	
	
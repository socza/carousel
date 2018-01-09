$(function(){ 
	
	$('a').hover(function(){
		
			$(this).css("transform", "scale(1.50)");
	   	
	   	}, function(){
	   	
	   		$(this).css("transform", "scale(1)");
	
	});
	
  	$('.left-cursor').on("click", function(event) {
			
		changeSlideLeft();
		
	});

  	$('.right-cursor').on("click", function(event) {
		
		changeSlideRight();
	
	});

	var carouselList = $("#carousel ul");
	  	

	function changeSlideLeft() {
	
	   	carouselList.animate({'marginLeft': -400}, 500, moveLeft);
	
	}

	function changeSlideRight() {
	
	   	carouselList.css({'marginLeft': -400});
	   	moveRight();
		
	}

	function moveLeft() {
	
		var firstItem = carouselList.find("li:first"); 
	   	var lastItem = carouselList.find("li:last");
	    
	   	lastItem.after(firstItem);
	   	carouselList.css({'marginLeft': 0});
	}

  	function moveRight() {
	    	
		var firstItem = carouselList.find("li:first"); 
	   	var lastItem = carouselList.find("li:last");
	    	
	   	firstItem.before(lastItem);
		carouselList.animate({'marginLeft': 0}, 500);
		
	}
	
	setInterval(changeSlideLeft, 3000);  	

});
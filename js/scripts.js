$(function(){ 
	
	$('p').css({
	
		"text-align": "center",
		"color": "red"

	});
		
	$('a').hover(function(){
		
			$(this).css("transform", "scale(1.50)");
	   	
	   	}, function(){
	   	
	   		$(this).css("transform", "scale(1)");
	
	});
	
  	$('.left-cursor').on("click", function(event) {
			
		// console.log("You clicked the left-coursor!");
		moveLeft();
		
	});

  	$('.right-cursor').on("click", function(event) {
		
		// console.log("You clicked the right-coursor!");
		moveRight();
	
	});

	var carouselList = $("#carousel ul");
	  	
	function moveLeft() {
	
		var firstItem = carouselList.find("li:first"); 
	   	var lastItem = carouselList.find("li:last");
	    
	   	lastItem.after(firstItem);
	   	carouselList.css({marginLeft: 0});
	}

	function changeSlide() {
	
	   	carouselList.animate({'marginLeft': -400}, 500, moveLeft);
	
	}

  	function moveRight() {
	    	
		var firstItem = carouselList.find("li:first"); 
	   	var lastItem = carouselList.find("li:last");
	    	
	   	firstItem.before(lastItem);
		carouselList.animate({'marginLeft': 0});

	}
	
	setInterval(changeSlide, 3000);  	

});
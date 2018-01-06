$(function(){ 
	
	$('p').css({
			"text-align": "center",
			"color": "red"}
		);
		
	$('a').hover(function(){
			$(this).css("transform", "scale(1.50)");
	   	}, function(){
	   		$(this).css("transform", "scale(1)");
		}
	);
	
	// iterowanie
	$('li').each(function(index, element){
		console.log(index);
	});

	// ======== START FOR LEFT CAROUSEL ======== //

		// var carouselList = $("#carousel ul");
	  	
	 //    function moveFirstSlide() {
	 //  		var firstItem = carouselList.find("li:first"); 
	 //    	var lastItem = carouselList.find("li:last");
	    
	 //    	lastItem.after(firstItem);
	 //    	carouselList.css({marginLeft: 0});
	 //  	}

	 //  	function changeSlide() {
	 //    	carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
	 //  	}

	 //  	setInterval(changeSlide, 3000);

	 //  	$('.previous').on("click", function(event) {
		// 	console.log("You clicked theb previous!");
		// 	changeSlide();
		// });

  	// ========= END LEFT CAROUSEL ======== //

  	// ========= START FOR RIGHT CAROUSEL ======== //

		var carouselList = $("#carousel ul");

  		function moveFirstSlide() {
	  		var firstItem = carouselList.find("li:first"); 
	    	var lastItem = carouselList.find("li:last");
	    
	    	firstItem.after(lastItem);
	    	carouselList.css({marginLeft: 0});
	  	}

	  	function changeSlideRight() {
	    	carouselList.animate({'marginLeft': 400}, 500, moveFirstSlide);
	  	}
		
	  	setInterval(changeSlideRight, 3000);

		$('.next').on("click", function(event) {
			console.log("You clicked the next!");
			changeSlideRight();
		});

	// ========= END FOR RIGHT CAROUSEL ======== //	

});
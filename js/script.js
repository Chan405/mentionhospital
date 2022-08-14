$(document).ready(function() {
	//start header section
	//start banner
	$(".carousel").carousel({
		interval: 1000
	});
	//end banner
	//end header section

	//start info section
	$(window).scroll(function() {
	var getscrollpoint =$(this).scrollTop();
	// console.log(getscrollpoint);
	if(getscrollpoint >= 600) {
		$(".infotexts").addClass("fromlefts");
		$(".infopics").addClass("fromrights");
	} else {
		$(".infotexts").removeClass("fromlefts");
		$(".infopics").removeClass("fromrights");
	} 
	});

	//start adv section
	$("#videos").click(function() {
		var getmodal = $(this).data("bs-target")
		var getvideosrc = $(this).data("video")
		var autoplay = getvideosrc+"?autoplay=1"

		$(getmodal + " iframe").attr("src", autoplay)

		$(getmodal + " button,btn-close").click(function() {
			$(getmodal + " iframe").attr("src", getvideosrc)
		})

		$(getmodal).click("hidden.bs.modal",function() {
			$(getmodal + " iframe").attr("src", getvideosrc)
		})
	})


	//start premises section
	$("#lightslider").lightSlider({
		item:4,
        auto:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
	});

	//start pricing
	$(window).scroll(function() {
		let getscroll = $(this).scrollTop();
		console.log(getscroll);
		if(getscroll >= 2700) {
			$(".cardones").addClass("movelefts ");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights ");
		} else {
			$(".cardones").removeClass("movelefts ");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights ");
		}
	});

	//Start join us 
	$("#accordion").accordion();

	//footer
	$(".year").text(new Date().getUTCFullYear());

	//start progressbar
	$(window).scroll(function() {
		var getprogress = $("#progresses");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();
		

		var projectheight = $(document).height();

		var currentheight = $(window).height();

		//javascript
		// var projectheight = document.documentElement.scrollHeight;
		// var currentheight = document.documentElement.clientHeight;

		

		var getdifference = projectheight - currentheight;
		var getfinalheight = Math.round( getscrolltop*100 / getdifference);
		console.log(getfinalheight);
		getprogressval.text(`${getfinalheight}%`);

		getprogress.css({
			"background": `conic-gradient(steelblue ${getfinalheight}%, #eee ${getfinalheight}%)`
		});

		// (scrolltop * 100) /( projectheight - currentheight)
	})

});

//5DONE
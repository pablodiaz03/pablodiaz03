$(window).scroll(function() {
	if ($("#menu").offset().top > 50) {
		$("#menu").addClass("navbar-scroll");
	} else {
		$("#menu").removeClass("navbar-scroll");
	};
});
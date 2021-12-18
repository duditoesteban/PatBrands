
require(
	[
		"jquery",
	],
	function($){
 $(document).ready(function() {
        $(".down").click(function() {
            $('html, body').animate({
                scrollTop: $(".up").offset().top
            }, 1500);
        });

        $(".up").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });
    });
 
})

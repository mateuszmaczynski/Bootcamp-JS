$(document).ready(function(){
	var img = $('img');
	var menu = $('.menu-animation');
	
	img.on("click",function(){
    menu.animate({
	"width": "toggle",
	"opacity": 1
	},500);
	});
	
})(jQuery);


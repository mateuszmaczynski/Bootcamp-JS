$(document).ready(function(){
	(function($){
		var addUl = $("<ul> </ul>");
		addUl.appendTo("div")
		var button = $("input:button");
		button.on("click",function(){
			var text =  $("input:text").val();	
			if(text.length<1){
				alert("Upsss nic nie wpisałeś, wpisz coś i naciśnij przycisk")
			}else{
				addUl.css("opacity","1");
				var addLi = $("<li> </li>");
				addLi.html(text);
				addLi.appendTo("ul");	
			}});
	})(jQuery);
}); 
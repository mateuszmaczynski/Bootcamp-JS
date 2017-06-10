$(document).ready(function(){
	
	/*
	Wszystkie elementy <div>, posiadające zarówno klasę grid oraz klasę grid-12.
	*/
	
	(function($){
		var div = $('div.grid, div.grid-12');
		div.hl();	
	})(jQuery);

	/* 
	Wszystkie elementy <a>, których atrybut href zaczyna się na “http”, znajdujące się w
	elemencie o klasie nav.
	*/
	
	(function($){
		var a = $(".nav a[href^='http']")	
		    a.hl();
	})(jQuery);
	
	/* 
	Wszystkie elementy <input>, których typ to radio lub checkbox oraz dodatkowo nie są
	aktualnie zaznaczone (checked).	
	*/
	
	(function($){
		var inputs = $('input:radio, input:checkbox').not(':checked');
		console.log(inputs);
	})(jQuery);
	
	/* 
	wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w
	elemencie <div> z identyfikatorem text
	*/
	
	(function($){
		var paragraph = $('div#text p:empty:first')
		paragraph.hl();
	})(jQuery);
	
	/* 
	wszystkie elementy z klasą pagination-item, które nie są elementem <span>
	*/
	
	(function($){
		var span = $('.pagination-item').not('span');
		span.hl();	
	})(jQuery);
})
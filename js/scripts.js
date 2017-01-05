
$(document).ready(function(){

	var characterTemplate = $("#character-template").html();

	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

	// console.log('ello');

	// $.ajax("./data/cast.json").done(function(cast){
	// 	console.log("done");
	// })

	$.ajax({
					url: "cast.json",
					        context: document.body,
					        success: function(){
					           alert("done");
	            }});

	// $(".character-list-container").html(compiledCharacterTemplate(cast))

});
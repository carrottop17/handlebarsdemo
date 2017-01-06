Handlebars.registerHelper("formatName", function(property1, property2){
	return new Handlebars.SafeString(
		"Hello <strong> " + property1 + " </strong> and I live at <strong>" + property2 +"</strong>"
	);
});

Handlebars.registerHelper("formatPhoneNumber", function(property){
	// console.log(property);
	var phone = property.toString();
	// var phone = property.toString();
	return "(" + phone.substr(0, 3) + ")" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
});

$(document).ready(function(){

	var characterTemplate = $("#character-template").html();

	var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

	$.getJSON("data/cast.json", function(cast) {
	   $(".character-list-container").html(compiledCharacterTemplate(cast))
	});


});
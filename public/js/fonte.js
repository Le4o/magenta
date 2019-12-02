function fonte(e) {

	var elemento = $(".acessibilidade");
	
	console.log(elemento)
	var fonte = parseInt(elemento.css('font-size'));

	var body = $("body");
	const fonteNormal = parseInt(body.css('font-size'));


	if (e == 'a') {
		fonte++;
	}
	if (e == 'd'){
		fonte--;
	}
	if (e == 'n'){
		fonte = fonteNormal;
	}

	elemento.css("fontSize", fonte);
	
}
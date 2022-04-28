if (navigator.serviceWorker) {
	navigator.serviceWorker.register("/sw.js");
}

let imagen = $("#img-1");
let nombre = $("#nombre");
let transformacion = $("#transformacion");
let raza = $("#raza");
let comparacion = $("#comparacion");
let pierde = '<i class="fa-solid fa-angle-left" style="font-size: 9rem;"></i>';
let gana = '<i class="fa-solid fa-angle-right" style="font-size: 9rem;"></i>';
let def = '<i class="fa-solid" style="font-size: 0rem;"></i>';
let personaje = $("#nombre-p1");

nombre.change(() => {
	let opc = "<option>Seleccione...</option>";

	if (nombre.val() == "goku") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="1">Normal</option>
        <option value="2">Super Saiyajin</option>
        <option value="3">Super Saiyajin 2</option>
        <option value="4">Super Saiyajin 3</option>
		<option value="5">Super Saiyajin 4</option>
        <option value="6">Super Saiyajin Dios</option>
        <option value="7">Super Saiyajin Blue</option>
        `;
		raza.val("Saiyajin");
	} else if (nombre.val() == "vegeta") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="8">Normal</option>
        <option value="9">Super Saiyajin</option>
		<option value="10">Super Saiyajin 2</option>        
        <option value="11">Super Saiyajin 4</option>
		<option value="12">Super Saiyajin Blue</option>
        `;
		raza.val("Saiyajin");
	} else if (nombre.val() == "krillin") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="13">Normal</option>
        `;
		raza.val("Humano");
	} else if (nombre.val() == "trunks") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="14">Normal</option>
		<option value="15">Super Saiyajin</option>
        `;
		raza.val("Saiyajin-Humano");
	} else if (nombre.val() == "piccolo") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="16">Normal</option>
        <option value="17">Gran Namek</option>
        <option value="18">Potencial Liberado</option>
        <option value="19">Rey Demonio</option>
        `;
		raza.val("Namekuseijin");
	} else if (nombre.val() == "dende") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="20">Normal</option>
        `;
		raza.val("Namekuseijin");
	} else if (nombre.val() == "buu") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="21">Buu</option>
        <option value="22">Magin Buu Fuerte</option>
        <option value="23">Buu Gordo</option>
        <option value="24">Majin Buu Flaco</option>
        `;
		raza.val("Demonio");
	} else if (nombre.val() == "black") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="25">Super Saiyajin</option>
        <option value="26">Super Saiyajin Rose</option>
        `;
		raza.val("Saiyajin-Kaio");
	} else if (nombre.val() == "shin") {
		transformacion.prop("disabled", false);
		opc += `
        <option value="27">Normal</option>
        `;
		raza.val("Kaio");
	} else {
		transformacion.prop("disabled", true);
	}
    personaje.text("");
    comparacion.html(def);
    imagen.attr("src", "images/camara.png");
	transformacion.html(opc);
});

transformacion.change(() => {
	let tipo = $("#transformacion option:selected").text();
	let nom = $("#nombre option:selected").text();
	if (tipo == "Normal") {
		personaje.text(nom);
	} else if (nom == "Majin Buu") {
		personaje.text(tipo);
	} else {
		personaje.text(nom + " " + tipo);
	}
	switch (transformacion.val()) {
		case "1":
			imagen.attr("src", "images/goku0.jpg");
			comparacion.html(pierde);
			break;
		case "2":
			imagen.attr("src", "images/goku1.jpg");
			comparacion.html(gana);
			break;
		case "3":
			imagen.attr("src", "images/goku2.jpg");
			comparacion.html(gana);
			break;
		case "4":
			imagen.attr("src", "images/goku3.jpg");
			comparacion.html(gana);
			break;
		case "5":
			imagen.attr("src", "images/goku4.jpg");
			comparacion.html(gana);
			break;
		case "6":
			imagen.attr("src", "images/goku5.jpg");
			comparacion.html(gana);
			break;
		case "7":
			imagen.attr("src", "images/goku6.jpg");
			comparacion.html(gana);
			break;
		case "8":
			imagen.attr("src", "images/vegeta0.png");
			comparacion.html(pierde);
			break;
		case "9":
			imagen.attr("src", "images/vegeta1.png");
			comparacion.html(gana);
			break;
		case "10":
			imagen.attr("src", "images/vegeta2.png");
			comparacion.html(gana);
			break;
		case "11":
			imagen.attr("src", "images/vegeta4.jpg");
			comparacion.html(gana);
			break;
		case "12":
			imagen.attr("src", "images/vegeta3.png");
			comparacion.html(gana);
			break;
		case "13":
			imagen.attr("src", "images/krilin.png");
			comparacion.html(pierde);
			break;
		case "14":
			imagen.attr("src", "images/trunks.jpg");
			comparacion.html(pierde);
			break;
		case "15":
			imagen.attr("src", "images/trunks1.png");
			comparacion.html(gana);
			break;
		case "16":
			imagen.attr("src", "images/picoro1.jpg");
			comparacion.html(pierde);
			break;
		case "17":
			imagen.attr("src", "images/picoro2.png");
			comparacion.html(pierde);
			break;
		case "18":
			imagen.attr("src", "images/picoro3.png");
			comparacion.html(gana);
			break;
		case "19":
			imagen.attr("src", "images/picoro4.png");
			comparacion.html(gana);
			break;
		case "20":
			imagen.attr("src", "images/dende.jpg");
			comparacion.html(pierde);
			break;
		case "21":
			imagen.attr("src", "images/buu3.jpg");
			comparacion.html(gana);
			break;
		case "22":
			imagen.attr("src", "images/majinboo1.png");
			comparacion.html(gana);
			break;
		case "23":
			imagen.attr("src", "images/majinboo.jpg");
			comparacion.html(gana);
			break;
		case "24":
			imagen.attr("src", "images/majinboo2.jpg");
			comparacion.html(gana);
			break;
		case "25":
			imagen.attr("src", "images/black.jpg");
			comparacion.html(gana);
			break;
		case "26":
			imagen.attr("src", "images/black1.png");
			comparacion.html(gana);
			break;
		case "27":
			imagen.attr("src", "images/shin.jpg");
			comparacion.html(gana);
			break;
		default:
			imagen.attr("src", "images/camara.png");
			comparacion.html(def);
			personaje.text("");
			break;
	}
});

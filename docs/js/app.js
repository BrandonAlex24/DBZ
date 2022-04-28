if (navigator.serviceWorker) {
	navigator.serviceWorker.register("/sw.js");
}

const id = $("#id");
const nombre = $("#nombre");
const correo = $("#correo");
const pelicula = $("#pelicula");
const boletos = $("#boletos");
const guardar = $("#guardar");
const borrar = $("#borrar");
const imagen = $("#imagen");


borrar.prop("disabled", true);

function limpiarCampos() {
	id.val("");
	nombre.val("");
	correo.val("");
	pelicula.val("");
	boletos.val("");
	imagen.attr("src", "images/camara.png");
}

personaje.change(function () {
	if (personaje.val() === "1") {
		transformaciones.prop("disable", false);
		opc += `
		<option value="9">Normal</option>
		<option value="10">Supersayan</option>
		<option value="11">Supersayan 2</option>
		<option value="12">Supersayan 3</option>
		<option value="13">Supersayan 4 </option>
		<option value="14">Supersayan dios </option>
		<option value="15">Supersayan blue</option>
		`;
		raza.val("sayayin")
		imagen.attr("src", "images/goku0.jpg");
	} else if (personaje.val() === "2") {
		opc += ` 
		<option value="9">Normal</option>
		<option value="10">Supersayan</option>
		<option value="11">Supersayan 2</option>
		<option value="12">Supersayan 3</option>
		<option value="13">Supersayan 4 </option>
		<option value="14">Supersayan dios </option>
		<option value="15">Supersayan blue</option>
		`;
		imagen.attr("src", "images/goku1.jpg");
	} else if (personaje.val() === "3") {
		imagen.attr("src", "images/goku2.jpg");
	} else if (personaje.val() === "4") {
		imagen.attr("src", "images/goku3.jpg");
	} else if (personaje.val() === "5") {
		imagen.attr("src", "images/goku4.jpg");
	} else if (personaje.val() === "6") {
		imagen.attr("src", "images/goku5.jpg");
	} else if (personaje.val() === "7") {
		imagen.attr("src", "images/goku6.jpg"); 
	} else if (personaje.val() === "8") {
		imagen.attr("src", "images/vegeta0.png");
	} else if (personaje.val() === "9") {
		imagen.attr("src", "images/vegeta1.png");
	} else if (personaje.val() === "10") {
		imagen.attr("src", "images/vegeta2.png");
	} else if (personaje.val() === "11") {
		imagen.attr("src", "images/vegeta3.png"); 
	} else if (personaje.val() === "12") {
		imagen.attr("src", "images/krilin.png"); 
	} else if (personaje.val() === "13") {
		imagen.attr("src", "images/trunks.jpg"); 
	} else if (personaje.val() === "14") {
		imagen.attr("src", "images/picoro1.jpg"); 
	} else if (personaje.val() === "15") {
		imagen.attr("src", "images/picoro2.png"); 
	} else if (personaje.val() === "16") {
		imagen.attr("src", "images/picoro3.png"); 
	} else if (personaje.val() === "17") {
		imagen.attr("src", "images/picoro4.png");
	} else if (personaje.val() === "18") {
		imagen.attr("src", "images/majinboo2.jpg"); 
	} else if (personaje.val() === "19") {
		imagen.attr("src", "images/majinboo.jpg"); 
	} else if (personaje.val() === "20") {
		imagen.attr("src", "images/majinboo1.png"); 
	} else if (personaje.val() === "21") {
		imagen.attr("src", "images/buu3.jpg"); 
	} else if (personaje.val() === "22") {
		imagen.attr("src", "images/black.jpg"); 
	} else if (personaje.val() === "23") {
		imagen.attr("src", "images/black1.png"); 
	} else if (personaje.val() === "24") {
		imagen.attr("src", "images/shin.jpg"); 
	}else {
		imagen.attr("src", "images/camara.png");
	}
});
raza.change(function () {
	if (personaje.val() === "1") {
		imagen.attr("src", "images/goku0.jpg");
	} else if (raza.val() === "2") {
		imagen.attr("src", "images/goku1.jpg");
	} else if (raza.val() === "3") {
		imagen.attr("src", "images/goku2.jpg");
	} else if (raza.val() === "4") {
		imagen.attr("src", "images/goku3.jpg");
	} else if (raza.val() === "5") {
		imagen.attr("src", "images/goku4.jpg");
	} else if (raza.val() === "6") {
		imagen.attr("src", "images/goku5.jpg");
	} else if (raza.val() === "7") {
		imagen.attr("src", "images/goku6.jpg"); 
	} else if (raza.val() === "8") {
		imagen.attr("src", "images/vegeta0.png");
	} else if (raza.val() === "9") {
		imagen.attr("src", "images/vegeta1.png");
	} else if (raza.val() === "10") {
		imagen.attr("src", "images/vegeta2.png");
	} else if (raza.val() === "11") {
		imagen.attr("src", "images/vegeta3.png"); 
	} else if (raza.val() === "12") {
		imagen.attr("src", "images/krilin.png"); 
	} else if (raza.val() === "13") {
		imagen.attr("src", "images/trunks.jpg"); 
	} else if (raza.val() === "14") {
		imagen.attr("src", "images/picoro1.jpg"); 
	} else if (raza.val() === "15") {
		imagen.attr("src", "images/picoro2.png"); 
	} else if (raza.val() === "16") {
		imagen.attr("src", "images/picoro3.png"); 
	} else if (raza.val() === "17") {
		imagen.attr("src", "images/picoro4.png");
	} else if (pelicula.val() === "18") {
		imagen.attr("src", "images/majinboo2.jpg"); 
	} else if (raza.val() === "19") {
		imagen.attr("src", "images/majinboo.jpg"); 
	} else if (raza.val() === "20") {
		imagen.attr("src", "images/majinboo1.png"); 
	} else if (raza.val() === "21") {
		imagen.attr("src", "images/buu3.jpg"); 
	} else if (raza.val() === "22") {
		imagen.attr("src", "images/black.jpg"); 
	} else if (raza.val() === "23") {
		imagen.attr("src", "images/black1.png"); 
	} else if (raza.val() === "24") {
		imagen.attr("src", "images/shin.jpg"); 
	}else {
		imagen.attr("src", "images/camara.png");
	}
});

$("body").on("click", "td", function () {
	borrar.prop("disabled", false);
	var fila = $(this).closest("tr");
	var id = fila.attr("id");
	if (fila.hasClass("table-active")) {
		fila.removeClass("table-active");
		$("#id").val("");
	} else {
		$(".table-active").removeClass("table-active");
		fila.addClass("table-active");
		$("#id").val(id);
	}
});

(function () {
	"use strict";
	var table = $("tbody");
	var borrar = $("#borrar");

	let db = new PouchDB("cinema");
	let remoteCouch = false;

	db.changes({
		since: "now",
		live: true,
	}).on("change", mostrarPeliculas);

	function añadirPelicula() {
		let peli = {
			_id: new Date().toISOString(),
			nombre: nombre.val(),
			correo: correo.val(),
			pelicula: pelicula.val(),
			imagen: imagen.attr("src"),
			boletos: boletos.val(),
			total: boletos.val() * 50,
		};
		db.put(peli, function callback(err, result) {
			if (!err) {
				console.log("Se añadió correctamente a la BD");
				limpiarCampos();
			}
		});
	}

	function mostrarPeliculas() {
		db.allDocs({ include_docs: true, descending: true }, function (err, docs) {
			mostrarTabla(docs.rows);
		});
	}

	function mostrarTabla(peliculas) {
		console.log(peliculas);
		let stringHtml = "";
		peliculas.forEach(function (peli) {
			stringHtml += `
            <tr id="${peli.doc._id}">
                <td>${peli.doc.nombre}</td>
                <td>${peli.doc.correo}</td>
                <td>${peli.doc.pelicula}</td>
                <td class="text-center"><img src="${peli.doc.imagen}" width="80px"></td>
                <td>${peli.doc.boletos}</td>
                <td>${peli.doc.total}</td>
            </tr>
            `;
		});
		console.log(stringHtml);
		table.html(stringHtml);
	}

	function borrarPelicula() {
		db.get(id.val()).then((doc) => {
			db.remove(doc);
			limpiarCampos();
		});
	}

	$("#form").submit(function (e) {
		e.preventDefault();
		if (nombre.val() === "") {
			nombre.addClass("is-invalid");
			nombre.focus();
			return false;
		} else {
			nombre.removeClass("is-invalid");
		}
		if (correo.val() === "") {
			correo.addClass("is-invalid");
			correo.focus();
			return false;
		} else {
			correo.removeClass("is-invalid");
		}
		if (pelicula.val() === "") {
			pelicula.addClass("is-invalid");
			pelicula.focus();
			return false;
		} else {
			pelicula.removeClass("is-invalid");
		}
		if (boletos.val() === "") {
			boletos.addClass("is-invalid");
			boletos.focus();
			return false;
		} else {
			boletos.removeClass("is-invalid");
		}
		if (
			!(
				nombre.val() === "" ||
				correo.val() === "" ||
				pelicula.val() === "" ||
				boletos.val() === ""
			)
		) {
			añadirPelicula();
		}
	});

	mostrarPeliculas();

	guardar.click(() => {
		$("#form").submit();
	});

    borrar.click(()=>{
        borrarPelicula();
    })
})();

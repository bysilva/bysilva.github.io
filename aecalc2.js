$(document).ready(function() {
	$( "#dialog1" ).dialog({
		autoOpen: false,
		show: "blind",
		hide: "explode",
		modal: true,
		resizable: false,
		position: { my: "center", at: "center", of: "#cuerpo" }
	});
	$( "#dialog2" ).dialog({
		autoOpen: false,
		show: "blind",
		hide: "explode",
		modal: true,
		resizable: false,
		position: { my: "center", at: "center", of: "#cuerpo" }
	});
	$(".divform").addClass("ancho");
	$(".divform label").addClass("ancho1");
	$(".divres").addClass("anchores");
	$(".divres label").addClass("anchores1");
	$("#mandos").draggable({
		snap: ".pegar",
		cursor: "move",
		snapTolerance: 10,
		handle: "#egd",
		stack: ".pestana"
	});
	if ($("#contenedor1").length > 0) {
		$("#contenedor1").hide();
		$("#contenedor").addClass("bordebajo");
		$("#aviso").addClass("active");
		$("div.aviso").css("display", "block");
		$("div.notas").css("display", "none");
		$("div.formulas").css("display", "none");
		$("div.enlaces").css("display", "none");
		$("div.acerca").css("display", "none");
		$("div.creditos").css("display", "none");
		$(".menu > li").click(function(e){  
			switch(e.target.id){  
				case "aviso":  
					//change status &amp;amp;amp; style menu  
					$("#aviso").addClass("active");
					$("#notas").removeClass("active");
					$("#formulas").removeClass("active");
					$("#enlaces").removeClass("active");
					$("#acerca").removeClass("active");
					$("#creditos").removeClass("active");  
					//display selected division, hide others  
					//$("div.news").fadeIn();
					$("div.aviso").css("display", "block");
					$("div.notas").css("display", "none");
					$("div.formulas").css("display", "none");
					$("div.enlaces").css("display", "none");
					$("div.acerca").css("display", "none");
					$("div.creditos").css("display", "none");  
				break;
				case "notas":  
					//change status &amp;amp;amp; style menu  
					$("#notas").addClass("active");
					$("#aviso").removeClass("active");
					$("#formulas").removeClass("active");
					$("#enlaces").removeClass("active");
					$("#acerca").removeClass("active");
					$("#creditos").removeClass("active");  
					//display selected division, hide others  
					//$("div.news").fadeIn();
					$("div.notas").css("display", "block");
					$("div.aviso").css("display", "none");
					$("div.formulas").css("display", "none");
					$("div.enlaces").css("display", "none");
					$("div.acerca").css("display", "none");
					$("div.creditos").css("display", "none");  
				break;
				case "formulas":  
					//change status &amp;amp;amp; style menu  
					$("#formulas").addClass("active");
					$("#aviso").removeClass("active");
					$("#notas").removeClass("active");
					$("#enlaces").removeClass("active");
					$("#acerca").removeClass("active");
					$("#creditos").removeClass("active");  
					//display selected division, hide others  
					//$("div.news").fadeIn();
					$("div.formulas").css("display", "block");
					$("div.aviso").css("display", "none");
					$("div.notas").css("display", "none");
					$("div.enlaces").css("display", "none");
					$("div.acerca").css("display", "none");
					$("div.creditos").css("display", "none");  
				break;
				case "enlaces":  
					//change status &amp;amp;amp; style menu
					$("#aviso").removeClass("active");
					$("#notas").removeClass("active");
					$("#formulas").removeClass("active");
					$("#enlaces").addClass("active");
					$("#acerca").removeClass("active");
					$("#creditos").removeClass("active");  
					//display selected division, hide others  
					//$("div.tutorials").fadeIn();
					$("div.enlaces").css("display", "block");
					$("div.aviso").css("display", "none");
					$("div.notas").css("display", "none");
					$("div.formulas").css("display", "none");
					$("div.acerca").css("display", "none");
					$("div.creditos").css("display", "none");  
				break;
				case "acerca":  
					//change status &amp;amp;amp; style menu
					$("#aviso").removeClass("active");
					$("#notas").removeClass("active");
					$("#formulas").removeClass("active");
					$("#enlaces").removeClass("active");
					$("#acerca").addClass("active");
					$("#creditos").removeClass("active");  
					//display selected division, hide others  
					//$("div.tutorials").fadeIn();
					$("div.acerca").css("display", "block");
					$("div.aviso").css("display", "none");
					$("div.notas").css("display", "none");
					$("div.formulas").css("display", "none");
					$("div.enlaces").css("display", "none");
					$("div.creditos").css("display", "none");  
				break;
				case "creditos":  
					//change status &amp;amp;amp; style menu
					$("#aviso").removeClass("active");
					$("#notas").removeClass("active");
					$("#formulas").removeClass("active");
					$("#enlaces").removeClass("active");
					$("#acerca").removeClass("active");
					$("#creditos").addClass("active");  
					//display selected division, hide others  
					//$("div.links").fadeIn();
					$("div.creditos").css("display", "block");
					$("div.aviso").css("display", "none");
					$("div.notas").css("display", "none");
					$("div.formulas").css("display", "none");
					$("div.acerca").css("display", "none");
					$("div.enlaces").css("display", "none");  
				break;  
			}  
			//alert(e.target.id);  
			return false;  
		});
	}
	else {
		$("#contenedor").addClass("bordebajo");
	}
});

function calcular() {
	if (document.forms[0].cantidad.value=="") {
		alert("Por favor, rellene los datos que faltan");
	}
	else {
		varcantidad = cambiocoma(document.forms[0].cantidad.value);
		varuni1 = document.forms[0].uni1.value;
		varuni2 = document.forms[0].uni2.value;
		if (comprobar(varcantidad)) {
			alert("Los datos introducidos no son correctos");
			borrar();
			document.forms[0].cantidad.focus();
		}
		else {
			varcantidad = parseFloat(varcantidad);
			varcantidad1 = "";
			switch (varuni1) {
				case "kms":
					varcantidad = varcantidad*1000;
					break;
				case "hms":
					varcantidad = varcantidad*100;
					break;
				case "decams":
					varcantidad = varcantidad*10;
					break;
				case "metros":
					varcantidad = varcantidad;
					break;
				case "dms":
					varcantidad = varcantidad/10;
					break;
				case "cms":
					varcantidad = varcantidad/100;
					break;
				case "mms":
					varcantidad = varcantidad/1000;
					break;
				case "micms":
					varcantidad = varcantidad/1000000;
					break;
				case "nanoms":
					varcantidad = varcantidad/1000000000;
					break;
				case "millt":
					varcantidad = varcantidad*1609.34;
					break;
				case "millm":
					varcantidad = varcantidad*1852;
					break;
				case "pies":
					varcantidad = varcantidad*0.3048;
					break;
				case "pulg":
					varcantidad = varcantidad*0.0254;
					break;
				case "yarda":
					varcantidad = varcantidad*0.9144;
					break;
				case "leg":
					varcantidad = varcantidad*5572.07;
					break;
				case "legpost":
					varcantidad = varcantidad*4000;
					break;
				case "legm":
					varcantidad = varcantidad*5555.55;
					break;
				case "vara":
					varcantidad = varcantidad*0.8359;
					break;
				case "braza":
					varcantidad = varcantidad*1.6718;
					break;
				case "brazaing":
					varcantidad = varcantidad*1.8288;
					break;
			}
			switch (varuni2) {
				case "kms":
					varcantidad = varcantidad/1000;
					varcantidad1 = 'kil&oacute;metros';
					break;
				case "hms":
					varcantidad = varcantidad/100;
					varcantidad1 = 'hect&oacute;metros';
					break;
				case "decams":
					varcantidad = varcantidad/10;
					varcantidad1 = 'dec&aacute;metros';
					break;
				case "metros":
					varcantidad = varcantidad;
					varcantidad1 = 'metros';
					break;
				case "dms":
					varcantidad = varcantidad*10;
					varcantidad1 = 'dec&iacute;metros';
					break;
				case "cms":
					varcantidad = varcantidad*100;
					varcantidad1 = 'cent&iacute;metros';
					break;
				case "mms":
					varcantidad = varcantidad*1000;
					varcantidad1 = 'mil&iacute;metros';
					break;
				case "micms":
					varcantidad = varcantidad*1000000;
					varcantidad1 = 'micr&oacute;metros (micras)';
					break;
				case "nanoms":
					varcantidad = varcantidad*1000000000;
					varcantidad1 = 'nan&oacute;metros';
					break;
				case "millt":
					varcantidad = varcantidad/1609.34;
					varcantidad1 = 'millas terrestres';
					break;
				case "millm":
					varcantidad = varcantidad/1852;
					varcantidad1 = 'millas marinas';
					break;
				case "pies":
					varcantidad = varcantidad/0.3048;
					varcantidad1 = 'pies';
					break;
				case "pulg":
					varcantidad = varcantidad/0.0254;
					varcantidad1 = 'pulgadas';
					break;
				case "yarda":
					varcantidad = varcantidad/0.9144;
					varcantidad1 = 'yardas';
					break;
				case "leg":
					varcantidad = varcantidad/5572.07;
					varcantidad1 = 'leguas';
					break;
				case "legpost":
					varcantidad = varcantidad/4000;
					varcantidad1 = 'leguas de posta';
					break;
				case "legm":
					varcantidad = varcantidad/5555.55;
					varcantidad1 = 'leguas marinas';
					break;
				case "vara":
					varcantidad = varcantidad/0.8359;
					varcantidad1 = 'varas';
					break;
				case "braza":
					varcantidad = varcantidad/1.6718;
					varcantidad1 = 'brazas';
					break;
				case "brazaing":
					varcantidad = varcantidad/1.8288;
					varcantidad1 = 'brazas (inglesas)';
					break;
			}
			document.forms[0].resultado.value = varcantidad;
			$("#resultado1").html(varcantidad1);
		}
	}
}

function comprobar(cantidad) {
var k = 0;
var todo = cantidad;
var numeros = "0123456789.";
  for (i = 0;  i < cantidad.length;  i++) {
    if (cantidad.charAt(i) == ".") {
    k++;
    }
  }
  if (k > 1) {
  return true;
  }
  for (i = 0;  i < todo.length;  i++) {
    for (j = 0;  j < numeros.length;  j++) {
      if (todo.charAt(i) == numeros.charAt(j)) {
      break;
      }
    }
    if (j == numeros.length) {
    return true;
    }
  }
return false;
}

function cambiocoma(num) {
  num2 = "";
  for (i = 0;  i < num.length;  i++) {
    if (num.charAt(i) == ",") {
      num2 = num2+".";
    }
    else {
      if (num.charAt(i) == " ") {
        num2 = num2;
      }
      else {
        num2 = num2+num.charAt(i);
      }
    }
  }
  return num2;
}

function borrar() {
	document.forms[0].cantidad.value = "";
	document.forms[0].uni1.value = "metros";
	document.forms[0].uni2.value = "metros";
	document.forms[0].resultado.value = "";
	$("#resultado1").html("");
}
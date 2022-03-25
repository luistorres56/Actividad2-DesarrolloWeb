
let tabla=[]
let cont=0
let vectorIdentificacion=[]

var tableToExcel = (function() {
  var uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  return function(table, name) {
    if (!table.nodeType) table = document.getElementById(table)
    var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    window.location.href = uri + base64(format(template, ctx))
  }
})()

function valideKey(evt){	
	var code = (evt.which) ? evt.which : evt.keyCode;
			
	if(code==8) {
	  return true;
	} else if(code>=48 && code<=57) { 
	  return true;
	} else{
	  return false;
	}
}

function registrar(){
	let identificacion=document.getElementById("identificacion").value
	let nombre=document.getElementById("nombre").value
	let apellido=document.getElementById("apellido").value
	let direccion=document.getElementById("direccion").value
	if (identificacion == "" || nombre == "" || apellido == "" || direccion == "") {
		alert("Es obligatorio todos los campos para registrar!")
	} else {
		if (vectorIdentificacion.includes(identificacion)) {
			alert("No se permite repetir numero de identificacion!")
		} else {
			if (cont <= 10) {
				let elemento=document.getElementById("usuarios1")
				elemento.innerHTML+=`<tr><td>${identificacion}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td></tr>`
				vectorIdentificacion.push(identificacion)
			}
			if (cont > 10 && cont <= 21) {
				let elemento=document.getElementById("usuarios2")
				elemento.innerHTML+=`<tr><td>${identificacion}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td></tr>`
				vectorIdentificacion.push(identificacion)
			}
			if (cont > 21 && cont <= 32) {
				let elemento=document.getElementById("usuarios3")
				elemento.innerHTML+=`<tr><td>${identificacion}</td><td>${nombre}</td><td>${apellido}</td><td>${direccion}</td></tr>`
				vectorIdentificacion.push(identificacion)
			}
			if (cont > 32) {
				alert("Ha llegado al máximo de registros, vacie antes las tablas!")
			}
			let usertabla={identificacion,nombre,apellido,direccion}
			tabla.push(usertabla)
			cont++
		}
	}
}

function limpiar() {
	document.getElementById("identificacion").value=""
	document.getElementById("nombre").value=""
	document.getElementById("apellido").value=""
	document.getElementById("direccion").value=""
}
alert ("Hola mundo")
function generarCapacidad(){
	let cantidad = document.getElementById("camposGenerados").value
	alert ("Funciona el botón "+cantidad)
	for (let i=0;i<cantidad;i++){
		let label = document.createElement(label)
		label.textContent="capacidad"
	}
}
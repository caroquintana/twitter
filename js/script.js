function agregar(){
	//recuperamos texto ingresado en textarea y limpio el área
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";
	//indicamos donde  van a estar las tareas que recupere textarea
	var cont = document.getElementById("contenedor");
	//creamos nuestros nuevos nodos elementos
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");
	//asignamos padres a los nodos
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//creamos checkbox e iconos, les damos atributos y clases
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

	//asignamos padres a los nodos
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	//agregamos un evento al hacer click, para que elimine o agregue la clase "tachado" al elementoContenedor
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
	});

	//removemos el icono basurero al hacer click sobre el
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	});	

	//creando funcion para el corazón
	cora.addEventListener("click", function(){
	cora.classList.toggle("red");
});
	//Extra:valida que textarea no esté vacía al presionar botón aceptar
	if (tareas == null || tareas == 0) {
		alert("Error, debe ingresar una tarea");
		return false;
	}
	
};




document.addEventListener("DOMContentLoaded", function() {
    // cargar datos almacenados en localstorage al cargar la pagina
    cargarVentas();
});

function registrarVenta() {
    // obtener valores del formulario
    var nombreProducto = document.getElementById("nombreProducto").value;
    var cantidadVendida = document.getElementById("cantidadVendida").value;
    var precioVenta = document.getElementById("precioVenta").value;

    // Validar que los campos no estén vacíos
    if (nombreProducto.trim() === "" || cantidadVendida.trim() === "" || precioVenta.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // calcula el total de la venta
    var total = cantidadVendida * precioVenta;

    // crear objeto de venta
    var venta = {
        nombre: nombreProducto,
        cantidad: cantidadVendida,
        precio: precioVenta,
        total: total
    };

    // obtener la lista actual de ventas desde localstorage
    var ventas = JSON.parse(localStorage.getItem("ventas")) || [];

    // agrega la nueva venta a la lista
    ventas.push(venta);

    // guardar la lista actualizada en localstorage
    localStorage.setItem("ventas", JSON.stringify(ventas));

    // limpia el formulario
    document.getElementById("formularioVenta").reset();

    // recarga la tabla de ventas
    cargarVentas();
}

function cargarVentas() {
    // obtener la lista de ventas desde localstorage
    var ventas = JSON.parse(localStorage.getItem("ventas")) || [];

    // obtener el cuerpo de la tabla
    var cuerpoTabla = document.getElementById("cuerpoTablaVentas");

    // limpia la tabla antes de cargar los nuevos datos
    cuerpoTabla.innerHTML = "";

    // agrega filas a la tabla
    ventas.forEach(function (venta, index) {
    var fila = cuerpoTabla.insertRow();

    var celda1 = fila.insertCell(0);
    celda1.textContent = venta.nombre;

    var celda2 = fila.insertCell(1);
    celda2.textContent = venta.cantidad;

    var celda3 = fila.insertCell(2);
    celda3.textContent = venta.precio;

    var celda4 = fila.insertCell(3);
    celda4.textContent = venta.total.toFixed(2);

    // agrega los botones de editar y eliminar
    var celda5 = fila.insertCell(4);

    var botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.addEventListener("click", function () {
        editarVenta(index);
    });
    celda5.appendChild(botonEditar);

    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.addEventListener("click", function () {
        eliminarVenta(index);
    });
    celda5.appendChild(botonEliminar);
});
}

function eliminarVenta(index) {
// obtener la lista de ventas desde localstorage
var ventas = JSON.parse(localStorage.getItem("ventas")) || [];

// eliminar la venta seleccionada de la lista
ventas.splice(index, 1);

// actualizar la lista en localstorage
localStorage.setItem("ventas", JSON.stringify(ventas));

// recarga la tabla de ventas
cargarVentas();
}

function editarVenta(index) {
// obtener la lista de ventas desde localstorage
var ventas = JSON.parse(localStorage.getItem("ventas")) || [];

// obtener la venta especifica que se va a editar
var ventaAEditar = ventas[index];

// llena el formulario con los valores de la venta seleccionada
document.getElementById("nombreProducto").value = ventaAEditar.nombre;
document.getElementById("cantidadVendida").value = ventaAEditar.cantidad;
document.getElementById("precioVenta").value = ventaAEditar.precio;

// eliminar la venta seleccionada de la lista
ventas.splice(index, 1);

// actualizar la lista en localstorage
localStorage.setItem("ventas", JSON.stringify(ventas));

// recargar la tabla de ventas
cargarVentas();
}

function cerrarSesion() {
    // envia al formulario del login
    window.location.href = "login.html";
}
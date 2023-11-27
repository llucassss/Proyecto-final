document.addEventListener("DOMContentLoaded", function() {
    // carga datos almacenados en localstorage al cargar la pagina
    cargarProductos();
});

function agregarProducto() {
    // obtener los valores del formulario
    var nombreProducto = document.getElementById("nombreProducto").value;
    var precioProducto = document.getElementById("precioProducto").value;
    var stockProducto = document.getElementById("stockProducto").value;
    var marcaProducto = document.getElementById("marcaProducto").value;
    var informacionProducto = document.getElementById("informacionProducto").value;

    // valida que los campos no esten vacios
    if (nombreProducto.trim() === "" || precioProducto.trim() === "" || 
        stockProducto.trim() === "" || marcaProducto.trim() === "" || informacionProducto.trim() === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // obtener la lista actual de productos desde localstorage
    var productos = JSON.parse(localStorage.getItem("productos")) || [];

    // genera el id
    var idProducto = (productos.length + 1).toString();

    // crea el objeto del producto
    var producto = {
        id: idProducto,
        nombre: nombreProducto,
        precio: precioProducto,
        stock: stockProducto,
        marca: marcaProducto,
        informacion: informacionProducto
    };

    // agregar el nuevo producto a la lista
    productos.push(producto);

    // guardar la lista actualizada en localstorage
    localStorage.setItem("productos", JSON.stringify(productos));

    // limpia el formulario
    document.getElementById("formularioProductos").reset();

    // recarga la tabla de productos
    cargarProductos();
}

function cargarProductos() {
    // obtener la lista de productos desde localstorage
    var productos = JSON.parse(localStorage.getItem("productos")) || [];

    // Obtener el cuerpo de la tabla
    var cuerpoTabla = document.getElementById("cuerpoTablaProductos");

    // limpia la tabla antes de cargar los nuevos datos
    cuerpoTabla.innerHTML = "";

    // agrega filas a la tabla
    productos.forEach(function(producto, index) {
        var fila = cuerpoTabla.insertRow();

        var celda1 = fila.insertCell(0);
        celda1.textContent = producto.id;

        var celda2 = fila.insertCell(1);
        celda2.textContent = producto.nombre;

        var celda3 = fila.insertCell(2);
        celda3.textContent = producto.precio;

        var celda4 = fila.insertCell(3);
        celda4.textContent = producto.stock;

        var celda5 = fila.insertCell(4);
        celda5.textContent = producto.marca;

        var celda6 = fila.insertCell(5);
        celda6.textContent = producto.informacion;
        // agrega los botones de edita y eliminar
        var celda7 = fila.insertCell(6);
        celda7.innerHTML = '<button onclick="editarProducto(' + index + ')">Editar</button> ' +
                          '<button onclick="eliminarProducto(' + index + ')">Eliminar</button>';
    });
}

function editarProducto(index) {
    // obtener la lista actual de productos desde localstorage
    var productos = JSON.parse(localStorage.getItem("productos")) || [];

    // obtener el producto que se va a editar
    var productoEditar = productos[index];

    // llena el formulario con los datos del producto
    document.getElementById("nombreProducto").value = productoEditar.nombre;
    document.getElementById("precioProducto").value = productoEditar.precio;
    document.getElementById("stockProducto").value = productoEditar.stock;
    document.getElementById("marcaProducto").value = productoEditar.marca;
    document.getElementById("informacionProducto").value = productoEditar.informacion;

    // elimina el producto de la lista
    productos.splice(index, 1);

    // guardar la lista actualizada en localstorage
    localStorage.setItem("productos", JSON.stringify(productos));

    // recargar la tabla de productos
    cargarProductos();
}

function eliminarProducto(index) {
    // obtener la lista actual de productos desde localstorage
    var productos = JSON.parse(localStorage.getItem("productos")) || [];

    // elimina el producto de la lista
    productos.splice(index, 1);

    // guardar la lista actualizada en localstorage
    localStorage.setItem("productos", JSON.stringify(productos));

    cargarProductos();
}
function cerrarSesion() {
    // envia al inicio sesion
    window.location.href = "login.html";
}
function ventas()
{   // envia alas ventas
    window.location.href = "venta.html";
}
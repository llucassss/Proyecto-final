//funcion login
function login()
{
    var user=document.getElementById("Usuario").value
    var pass=document.getElementById("Contraseña").value

   //verifica los datos del login 
if (user=="admin" && pass=="admin")
{
    alert("datos correctos")
    window.location.href="stock.html"
}
else if (user =="empleado" && pass =="empleado" ){
    alert("datos correctos")
    window.location.href="venta.html"
} else {
    alert("Datos incorrectos")
}

}

function registar()
{
    window.location.href="regis.html"
}
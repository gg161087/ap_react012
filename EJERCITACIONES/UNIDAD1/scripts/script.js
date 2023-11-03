const mostrarPrecio = () => {
    const tipoSeguro = document.getElementById("tipoSeguro").value;
    let precio;

    if (tipoSeguro === "Basico") {
        precio = 500;
    } else if (tipoSeguro === "Intermedio") {
        precio = 1000;
    } else {
        precio = 1500;
    }

    document.getElementById("precioSeguro").innerHTML = "El precio del seguro es: $" + precio;
}
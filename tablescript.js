function generarTabla() {
    var numero = document.getElementById("numeroInput").value;

    if (isNaN(numero) || numero < 1 || numero > 10) {
            alert("Por favor, ingrese un número válido del 1 al 10.");
            return;
    }

    var contenidoTabla = "<table class='table'><thead><tr><th>Factor</th><th>Resultado</th></tr></thead><tbody>";

    for (var i = 1; i <= 12; i++) {
            var resultado = numero * i;
            contenidoTabla += "<tr><td>" + numero + " x " + i + "</td><td>" + resultado + "</td></tr>";
    }

    contenidoTabla += "</tbody></table>";

    document.getElementById("tablaContenido").innerHTML = contenidoTabla;
    $("#tablaModal").modal("show");
}
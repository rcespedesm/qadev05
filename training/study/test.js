function table() {
    var place = document.getElementById("support-link");
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 2; i++) {
        var hilera = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("CELDA");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    place.appendChild(tabla);
}

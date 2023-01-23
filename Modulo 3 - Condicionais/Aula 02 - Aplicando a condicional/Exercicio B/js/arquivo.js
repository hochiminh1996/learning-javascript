

var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    var campo = document.querySelector("#pais").value;

    if (campo == "Brasil") {
        document.querySelector("#resultado").innerHTML = "<p>Brasileiro</p>";
    } else if (campo == "EUA") {
        document.querySelector("#resultado").innerHTML = "<p>Estadunidense</p>";
    } else if (campo == "Rússia") {
        document.querySelector("#resultado").innerHTML = "<p>Russo</p>";
    } else if (campo == "vazio") {
        document.querySelector("#resultado").innerHTML = "<p>Inválido</p>";
    }
})
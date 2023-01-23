var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    var km = Number(document.querySelector("#txtvel").value);

    if (km > 60) {
        document.querySelector("#resultado").style.background = "red";
        document.querySelector("#resultado").innerHTML = "<p>Acima da velocidade permitida : MULTADO</p>";

    } else if (km > 0 && km <= 60) {
        document.querySelector("#resultado").innerHTML = `<p>Velocidade : ${km}\nParabéns, você está dentro da velocidade permitida</p>`;
        document.querySelector("#resultado").style.background = "#09f";

    } else if (km == "" || km < 0) {
        document.querySelector("#resultado").style.background = "red";
        document.querySelector("#resultado").innerHTML = "<p>Inválido</p>";
    }
});
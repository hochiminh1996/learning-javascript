


var btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    var camp = document.querySelector("#resultado");

    var n1 = Number(document.querySelector("#n1").value);
    var n2 = Number(document.querySelector("#n2").value);

    if (n1 == "") {
        camp.value = "Campo vazio";
        document.querySelector("#n1").style.border = "1px solid red";
    } else if (n2 == "") {
        camp.value = "Campo vazio";
        document.querySelector("#n2").style.border = "1px solid red";
        document.querySelector("#n1").style.border = "1px solid rgba(0, 0, 0, .3)";

    } else {
        document.querySelector("#n1").style.border = "1px solid rgba(0, 0, 0, .3)";
        document.querySelector("#n2").style.border = "1px solid rgba(0, 0, 0, .3)";

        camp.value = n1 + n2;
    }

})


// Pegando a div
var box = document.querySelector("#box");

// adicionado evento de click
box.addEventListener("click", () => {
    box.style.background = "red";
    box.innerHTML = "Clicou";
});

box.addEventListener("mousemove", () => {
    box.style.background = "#05c8c8";
    box.innerHTML = "Entrou";
});

box.addEventListener("mouseout", () => {
    box.style.background = "rgba(0,0,0,.8)";
    box.innerHTML = "Saiu";
})

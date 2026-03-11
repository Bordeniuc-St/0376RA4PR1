
    // 1
    document.querySelector("#titol-principal").style.color = "blue";


    //2 - 
    document.querySelector("#paragraf-hola").textContent = "Hola Món";


    //3 
    document.querySelector("#imatge-canviant").setAttribute(
    "src",
    "https://estaticos-cdn.prensaiberica.es/clip/c71b9a2c-7406-47f2-a03d-2763ad99af78_alta-libre-aspect-ratio_default_0.jpg"
    );


    //4 
    document.querySelector("#caixa-estil").addEventListener("click", function () {
    this.style.backgroundColor = "lightblue";
    });


    //5 
    document.querySelector("#boto-toggle").addEventListener("click", function () {
    document.querySelector("#text-classe").classList.toggle("actiu");
    });


    //6 
    document.querySelector("#boto-alerta").addEventListener("click", function () {
    alert("Hola Edu!");
    });


    //7 
    document.querySelector("#boto-afegir").addEventListener("click", function () {
    let nouItem = document.createElement("li");
    nouItem.textContent = "Hola Edu";
    document.querySelector("#llista-compra").appendChild(nouItem);
    });


    //8 
    document.querySelector("#element-eliminar").addEventListener("click", function () {
    this.remove();
    });
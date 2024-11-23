$(document).ready(function () {
    let productos = false;
    $("#menuDesp").hide();
    let desplegado = false;
    var menu = document.getElementById("menu");
    menu.addEventListener("click", function(){
        if (desplegado){
            $("#menuDesp").hide();
            desplegado = false;
        } else{
            $("#menuDesp").show();
            desplegado = true;
        }
    })
    $("#boton").on("click", function () {
        if (productos) {
            $("#productos").hide();
            $("#cuerpo").show();
            productos = false;
        } else {
            let codigo = "";
            let a = "";
            let f = 1;
            $("#cuerpo").hide();
            $("#productos").show();
            productos = true;
            for (let i = 0; i < 2; i++) {
                for (let e = 0; e < 2; e++) {
                    a = a + `<div id = 'producto${f}' class = 'producto col-6'>Producto ${f}</div>`;
                    f++;
                }
                codigo = codigo + `<div id = 'conj-prod${i+1}' class = 'a col-4'>${a}</div>`;
                a = "";
                $("#productos").html(codigo);
            }
            for (let i = 0; i < 2; i++){
                document.getElementById(`conj-prod${i+1}`).classList.add("fondoVerde", "letraAmarilla");
            }
            document.getElementById("productos").classList.add("productos");
            document.getElementsById("footer").classList.add("footerAbajo");
        }
})
})
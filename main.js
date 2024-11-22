$(document).ready(function () {
    let productos = false;
    let codigo = "";
    let a = "";

    $("#boton").on("click", function () {
        if (productos) {
            $("#productos").hide();
            $("#cuerpo").show();
            productos = false;
        } else {
            let f = 1;
            $("#cuerpo").hide();
            productos = true;
            for (let i = 0; i < 2; i++) {
                for (let e = 0; e < 2; e++) {
                    a = a + `<div class = 'producto'>Producto ${f}</div>`;
                    f++;
                }
                codigo = codigo + `<div class = 'a col-4'>${a}</div>`;
                a = "";
                $("#productos").html(codigo);
            }
        }
})
})
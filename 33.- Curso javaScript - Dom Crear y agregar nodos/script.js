
$("#btn").addEventListener("click", function() {
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "Correo");
    // para pasar un arreglo de datos al servidor se le agregan[]
    input.setAttribute("name", "mails[]");
    
    $("#form").appendChild(input);
});

function $(selector) {
    return document.querySelector(selector);
}
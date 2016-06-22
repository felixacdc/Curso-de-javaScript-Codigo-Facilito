function clic () {
    alert(":3");
}

// Programar eventos en javaScript 
// primer parametro: nombre del evento
// segundo parametro: funcion
// tercer parametro: indica el orden de ejecucion si se seleccionan los elementos desde al padre hata el ultimo hijo o al revez
document.getElementById("mi_btn").addEventListener("click", clic, true);

document.getElementById("mi_div").addEventListener("click", another_clic, false);

function another_clic () {
    alert("Esto fue disparado por el div");
}